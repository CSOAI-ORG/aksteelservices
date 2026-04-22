export const accreditationLogos = [
  {
    name: "BS EN 1090",
    image: "/images/bs-en-1090-logo.jpg",
    alt: "BS EN 1090 certified steel fabrication accreditation logo",
    href: "/certificates",
  },
  {
    name: "UKCA",
    image: "/images/ukca-logo.png",
    alt: "UKCA conformity assessed accreditation logo",
    href: "/certificates",
  },
] as const;

export const certificates = [
  {
    title: "Factory Production Control Certificate",
    issuer: "Steel Construction Certification Scheme Ltd",
    reference: "2273 – CPR – 4527",
    standard: "BS EN 1090-1:2009+A1:2011",
    issuedOn: "29 January 2026",
    expiresOn: "29 January 2029",
    scope: "Load bearing and welded structural steel components up to EXC 2 according to BS EN 1090-2:2018+A1:2024.",
    pdfUrl: "/certificates/ak-steel-fpc-certificate-2029.pdf",
    previewImage: "/images/certificates/ak-steel-fpc-certificate-preview.jpg",
    verifyUrl: "https://www.steelcertification.co.uk",
  },
  {
    title: "Factory Production Control Certificate Copy",
    issuer: "Steel Construction Certification Scheme Ltd",
    reference: "2273 – CPR – 4527",
    standard: "BS EN 1090-1:2009+A1:2011",
    issuedOn: "29 January 2026",
    expiresOn: "29 January 2029",
    scope: "Uploaded copy of the current AK Steel Services Limited Factory Production Control certificate.",
    pdfUrl: "/certificates/ak-steel-fpc-certificate-2029-copy.pdf",
    previewImage: "/images/certificates/ak-steel-fpc-certificate-copy-preview.jpg",
    verifyUrl: "https://www.steelcertification.co.uk",
  },
] as const;

export const certificationHighlights = [
  {
    title: "Independently Audited",
    description: "Our welding procedures, materials traceability and quality control are audited by SCCS — an SCCS-approved certification body.",
  },
  {
    title: "Building Control Ready",
    description: "BS EN 1090 + UKCA marking is a legal requirement for structural steel in the UK. Our steel is signed off without delays.",
  },
  {
    title: "Execution Class EXC 2",
    description: "Suitable for residential extensions, loft conversions, mezzanines, commercial frames and most structural applications.",
  },
  {
    title: "Full Traceability",
    description: "Every beam comes with mill certificates and a Declaration of Performance (DoP) — required by structural engineers and building control.",
  },
] as const;

export const certificationStats = [
  { value: "BS EN 1090", label: "Certified Standard" },
  { value: "EXC 2", label: "Execution Class" },
  { value: "UKCA", label: "Marked & Compliant" },
  { value: "2029", label: "Valid Until" },
] as const;