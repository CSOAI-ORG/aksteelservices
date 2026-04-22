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
] as const;

export const certificationHighlights = [
  "BS EN 1090 factory production control certification",
  "UKCA-ready structural steel compliance",
  "Execution class capability up to EXC 2",
  "Verified fabrication standards for commercial and residential steelwork",
] as const;