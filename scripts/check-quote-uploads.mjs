import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { Script } from "node:vm";
import { test } from "node:test";

const paths = ["src/components/QuoteForm.tsx", "src/pages/Contact.tsx"];
const schema = readFileSync("public/__forms.html", "utf8");
for (const path of paths) {
  const source = readFileSync(path, "utf8");
  const start = source.indexOf("const buildQuoteFormData =");
  const end = source.indexOf("\n};", start) + 3;
  assert.ok(start >= 0 && end > start, "multipart builder exists");
  const buildSource = source.slice(start, end).replace("(data: Record<string, string>, files: File[])", "(data, files)");
  const build = new Script(buildSource + "; buildQuoteFormData").runInNewContext({ FormData, File });
  const selectionStart = source.indexOf("const handleFileUpload =");
  const selectionEnd = source.indexOf("\n  const removeFile", selectionStart);
  const selectionSource = source.slice(selectionStart, selectionEnd).replace("(e: React.ChangeEvent<HTMLInputElement>)", "(e)");
  const select = (existing, incoming) => {
    const result = { files: existing, notices: [] };
    const handler = new Script(selectionSource + "; handleFileUpload").runInNewContext({
      uploadedFiles: existing,
      toast: value => result.notices.push(value),
      setUploadedFiles: update => { result.files = update(existing); },
    });
    handler({ target: { files: incoming } });
    return result;
  };
  const file = (name, size, type = "application/pdf") => ({ name, size, type });

  test(`${path}: existing fields and Unicode survive`, () => {
    const data = build({ "form-name": "quote", name: "A & B", message: "Rev B — façade", contact_method: "email" }, []);
    assert.equal(data.get("form-name"), "quote");
    assert.equal(data.get("name"), "A & B");
    assert.equal(data.get("message"), "Rev B — façade");
    assert.equal(data.get("contact_method"), "email");
  });
  test(`${path}: actual drawing bytes use distinct declared fields`, async () => {
    const files = [new File(["PDF drawing bytes"], "revision-B.pdf", { type: "application/pdf" }), new File(["photo bytes"], "access.jpg", { type: "image/jpeg" })];
    const data = build({ "form-name": "quote" }, files);
    assert.equal(data.get("attachment_1").name, "revision-B.pdf");
    assert.equal(await data.get("attachment_1").text(), "PDF drawing bytes");
    assert.equal(await data.get("attachment_2").text(), "photo bytes");
    for (const key of ["attachment_1", "attachment_2"]) assert.ok(schema.includes(`name="${key}"`));
  });
  test(`${path}: no upload stays a valid quote`, () => {
    assert.deepEqual([...build({ "form-name": "quote" }, []).keys()], ["form-name"]);
  });
  test(`${path}: five files at total budget accepted`, () => {
    const result = select([], Array.from({ length: 5 }, (_, i) => file(`${i}.pdf`, 1_400_000)));
    assert.equal(result.files.length, 5);
    assert.equal(result.notices.length, 0);
  });
  test(`${path}: total budget across earlier selections enforced`, () => {
    const existing = [file("existing.pdf", 4_000_000)];
    const result = select(existing, [file("new.pdf", 4_000_000)]);
    assert.equal(result.files, existing);
    assert.equal(result.notices[0].title, "Attachments too large");
  });
  test(`${path}: oversized individual file not accepted`, () => {
    const result = select([], [file("large.pdf", 7_000_001)]);
    assert.equal(result.files.length, 0);
    assert.equal(result.notices[0].title, "File too large");
  });
  test(`${path}: sixth file refused without removing selected files`, () => {
    const existing = Array.from({ length: 5 }, (_, i) => file(`${i}.pdf`, 1));
    const result = select(existing, [file("sixth.pdf", 1)]);
    assert.equal(result.files, existing);
    assert.equal(result.notices[0].title, "Too many files");
  });
  test(`${path}: unsupported type is refused`, () => {
    const result = select([], [file("script.js", 1, "text/javascript")]);
    assert.equal(result.files.length, 0);
    assert.equal(result.notices[0].title, "File type not supported");
  });
  test(`${path}: removed selection is absent from transmitted body`, () => {
    const original = [new File(["obsolete"], "revision-A.pdf"), new File(["current"], "revision-B.pdf")];
    let selected = original;
    const removeStart = source.indexOf("const removeFile =");
    const removeEnd = source.indexOf("\n  };", removeStart) + 5;
    const removeSource = source.slice(removeStart, removeEnd).replace("(index: number)", "(index)");
    new Script(removeSource + "; removeFile(0)").runInNewContext({ setUploadedFiles: update => { selected = update(selected); } });
    assert.equal(build({ "form-name": "quote" }, selected).get("attachment_1").name, "revision-B.pdf");
  });
  test(`${path}: existing route and browser-set multipart header preserved`, () => {
    const block = source.slice(source.indexOf('const res = await fetch("/", {'), source.indexOf("if (!res.ok)"));
    assert.ok(block.includes('method: "POST"'));
    assert.ok(block.includes("body: buildQuoteFormData({"));
    assert.ok(block.includes("}, uploadedFiles)"));
    assert.ok(!block.includes("Content-Type"));
    assert.ok(source.includes("Max 5 files, 7MB total"));
  });
}
test("Netlify hidden schema registers five distinct multipart file fields", () => {
  assert.ok(schema.includes('enctype="multipart/form-data"'));
  assert.ok(schema.includes('name="quote"'));
  for (let i = 1; i <= 5; i++) assert.ok(schema.includes(`type="file" name="attachment_${i}"`));
});
