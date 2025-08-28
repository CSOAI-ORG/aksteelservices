import industrialWarehouse1 from "@/assets/industrial-warehouse-1.jpg";
import industrialWarehouse2 from "@/assets/industrial-warehouse-2.jpg";
import interiorStructuralWork from "@/assets/interior-structural-work.jpg";
import largeFramework1 from "@/assets/large-steel-framework-1.jpg";
import largeFramework2 from "@/assets/large-steel-framework-2.jpg";
import residentialExtension from "@/assets/residential-extension.jpg";
import rearExtensionFrame from "@/assets/rear-extension-steel-frame.jpg";

export const REAL_PHOTOS = {
  industrialInterior1: {
    src: interiorStructuralWork,
    alt: "AK Steel Services — Industrial interior steel platform and mezzanine",
  },
  residentialExtension1: {
    src: residentialExtension,
    alt: "AK Steel Services — Residential extension steel frame, Kent",
  },
  roofStructure1: {
    src: largeFramework1,
    alt: "AK Steel Services — Roof structure steel rafters under scaffold",
  },
  roofStructure2: {
    src: largeFramework2,
    alt: "AK Steel Services — Roof structure steelwork close-up",
  },
  commercialInterior1: {
    src: industrialWarehouse2,
    alt: "AK Steel Services — Commercial interior steel frame installation",
  },
  residentialExtension2: {
    src: rearExtensionFrame,
    alt: "AK Steel Services — Rear extension steel frame installation",
  },
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
