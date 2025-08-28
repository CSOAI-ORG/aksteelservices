// Import YOUR REAL PHOTOS (replace these with your actual uploaded images)
import heroImage1 from "@/assets/hero-image-1.jpg";
import heroImage2 from "@/assets/hero-image-2.jpg";
import heroImage3 from "@/assets/hero-image-3.jpg";
import heroImage4 from "@/assets/hero-image-4.jpg";
import heroImage5 from "@/assets/hero-image-5.jpg";
import heroImage6 from "@/assets/hero-image-6.jpg";

export const REAL_PHOTOS = {
  // Keep original property names for existing code compatibility
  industrialInterior1: {
    src: heroImage1,
    alt: "AK Steel Services — Industrial interior steel platform and mezzanine",
  },
  residentialExtension1: {
    src: heroImage2,
    alt: "AK Steel Services — Residential extension steel frame, Kent",
  },
  roofStructure1: {
    src: heroImage3,
    alt: "AK Steel Services — Roof structure steel rafters under scaffold",
  },
  roofStructure2: {
    src: heroImage4,
    alt: "AK Steel Services — Roof structure steelwork close-up",
  },
  commercialInterior1: {
    src: heroImage5,
    alt: "AK Steel Services — Commercial interior steel frame installation",
  },
  residentialExtension2: {
    src: heroImage6,
    alt: "AK Steel Services — Rear extension steel frame installation",
  },
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
