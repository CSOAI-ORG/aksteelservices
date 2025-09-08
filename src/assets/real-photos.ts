// Import real project photos
import akSteelTruck from "@/assets/ak-steel-truck.jpg";
import redOxideBeams from "@/assets/red-oxide-steel-beams.jpg";
import interiorWork from "@/assets/interior-structural-work.jpg";
import rearExtension from "@/assets/rear-extension-steel-frame.jpg";
import steelFramework1 from "@/assets/large-steel-framework-1.jpg";
import steelFramework2 from "@/assets/large-steel-framework-2.jpg";

export const REAL_PHOTOS = {
  // Keep original property names for existing code compatibility
  industrialInterior1: {
    src: interiorWork,
    alt: "AK Steel Services — Interior structural steel platform and mezzanine installation",
  },
  residentialExtension1: {
    src: redOxideBeams,
    alt: "AK Steel Services — Red oxide steel beam fabrication and finishing",
  },
  roofStructure1: {
    src: steelFramework2,
    alt: "AK Steel Services — Large steel framework construction and assembly",
  },
  roofStructure2: {
    src: steelFramework1,
    alt: "AK Steel Services — Steel structure framework installation",
  },
  commercialInterior1: {
    src: akSteelTruck,
    alt: "AK Steel Services — Professional delivery truck and mobile fabrication service",
  },
  residentialExtension2: {
    src: rearExtension,
    alt: "AK Steel Services — Rear extension steel frame installation",
  },
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
