export const REAL_PHOTOS = {
  industrialInterior1: {
    src: "/lovable-uploads/a6415d63-3d7e-4d20-ba3d-e0142b46704f.png",
    alt: "AK Steel Services — Industrial interior steel platform and mezzanine"
  },
  residentialExtension1: {
    src: "/lovable-uploads/b1e7acd0-b957-4c17-a193-2a2a1322d2f2.png",
    alt: "AK Steel Services — Residential extension steel frame, Kent"
  },
  roofStructure1: {
    src: "/lovable-uploads/031f7d47-05f6-4ec2-ae72-d489ad045b66.png",
    alt: "AK Steel Services — Roof structure steel rafters under scaffold"
  },
  roofStructure2: {
    src: "/lovable-uploads/dcfdfa7e-9f95-485a-8ccf-96cbabd0598c.png",
    alt: "AK Steel Services — Roof structure steelwork close-up"
  },
  commercialInterior1: {
    src: "/lovable-uploads/3b253b70-693d-4cca-9fb7-928c93a609d7.png",
    alt: "AK Steel Services — Commercial interior steel frame installation"
  },
  residentialExtension2: {
    src: "/lovable-uploads/1c5a44a2-f3d1-476c-98ba-d4a5914f795e.png",
    alt: "AK Steel Services — Rear extension steel frame installation"
  },
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
