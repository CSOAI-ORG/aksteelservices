

# Fix Forms, Google Maps, Gallery & More Improvements

## Critical Bug Fixes

### 1. Quote Form Not Working (QuoteForm.tsx)
The `description` textarea on line 203 is missing `name="description"`, so when the form submits, `formData.get('description')` returns `null`. This causes the database insert to fail because `message` is a required field.

**Fix:** Add `name="description"` to the Textarea component.

### 2. Contact Page Form Not Working (Contact.tsx)
The Contact page form has multiple issues:
- The form uses an `onClick` handler on the submit button instead of a proper `onSubmit` on the `<form>` element
- The Service, Timeline, and Budget `<Select>` dropdowns don't have hidden inputs or `name` attributes, so their values are lost
- Need to convert to a proper `onSubmit` form handler with React state for select values

**Fix:** Rewrite the form to use proper `onSubmit` with useState for all select fields, and ensure all data is captured and sent to the database + email edge function.

### 3. QuickQuoteForm (QuickQuoteForm.tsx)
This form inserts `email: "quick-quote@placeholder.com"` which is fine for the database, but the edge function email also needs to work. Verify it sends properly.

---

## Google Maps Fix (Contact.tsx)

The current iframe embed URL uses a fabricated place ID (`0x47d8b1a1a1a1a1a1:0x0`). This shows the wrong location or a blank map.

**Fix:** Replace with the correct Google Maps embed URL using AK Steel Services' actual business listing. The Google Reviews component already has the correct coordinates and place URL (`@51.4416087,0.3703708`), so we'll use those to construct the proper embed URL with the business name.

---

## UKCA/CE Marking Logo

The user wants a UKCA/CE marking badge. Since there's no uploaded logo file, we'll create a styled badge/icon using the existing certification section design -- a blue "UKCA" badge alongside the existing BS EN 1090 logo in the footer and homepage certifications section.

---

## Gallery Improvements (Gallery.tsx)

Current gallery has a lightbox but it's basic. Improvements:
- Add previous/next navigation arrows in the lightbox
- Add image counter (e.g. "3 of 15")
- Add image caption/description text below each grid card
- Improve the grid to use a masonry-style layout with varied heights

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/QuoteForm.tsx` | Add `name="description"` to Textarea (line 203) |
| `src/pages/Contact.tsx` | Rewrite form with proper onSubmit, add state for selects, fix Google Maps embed URL |
| `src/pages/Gallery.tsx` | Add prev/next arrows in lightbox, image counter, captions on grid cards |
| `src/pages/Index.tsx` | Add UKCA badge to certifications section |
| `src/components/Footer.tsx` | Add UKCA badge next to BS EN 1090 logo |

---

## Technical Details

**QuoteForm.tsx fix (1 line):**
Line 203: Change `<Textarea id="description"` to `<Textarea id="description" name="description"`

**Contact.tsx form rewrite:**
- Add `useState` for `service`, `timeline`, `budget` select values
- Add hidden `<input>` elements for each select so FormData captures them
- Move submission logic from button `onClick` to form `onSubmit`
- Replace Google Maps iframe URL with: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5!2d0.3703708!3d51.4416087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b1a6c6c0a8c7%3A0xd69be54f329a6009!2sAK%20STEEL%20SERVICES%20LIMITED!5e0!3m2!1sen!2suk!4v1700000000000`

**Gallery lightbox enhancement:**
- Track `selectedIndex` (number) instead of `selectedImage` (object)
- Add ChevronLeft/ChevronRight buttons for navigation
- Show "X of Y" counter
- Add alt text captions below each gallery card

**UKCA badge:**
- Add a styled `<div>` with "UKCA" text in blue alongside the existing BS EN 1090 logo
- Use Tailwind: `bg-blue-600 text-white font-bold rounded-lg px-4 py-3`

