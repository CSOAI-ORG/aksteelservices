// Centralized mapping of ONLY the client's real photos (no stock images)
// We reference the uploaded image URLs directly so updates show instantly.

export const REAL_PHOTOS = {
  // Industrial interior steelwork (warehouse install)
  industrialInterior1: {
    src: "/lovable-uploads/caf1359c-9145-4258-a04f-2b3ced559408.png",
    alt: "AK Steel Services — Industrial interior steelwork and mezzanine installation in progress",
  },
  // Red oxide beams on truck (delivery/logistics)
  residentialExtension1: {
    src: "/lovable-uploads/red-steel-beams-truck.jpg",
    alt: "AK Steel Services — Red oxide steel beams loaded on delivery truck with crane equipment",
  },
  // Large framework / roof structure (joists and beams)
  roofStructure1: {
    src: "/lovable-uploads/94c1b729-0dfe-49a2-91ee-5eaa0931bd36.png",
    alt: "AK Steel Services — Roof steel structure with joists under scaffold canopy",
  },
  // Urban steel framework (multi-storey structure)
  roofStructure2: {
    src: "/lovable-uploads/0c4907fe-84b5-4787-b1c0-6a8f07a487d9.png",
    alt: "AK Steel Services — Urban structural steel frame installation on commercial site",
  },
  // Company truck at the yard (real photo)
  commercialInterior1: {
    src: "/lovable-uploads/b90916f8-ae66-4201-910b-814332a743fe.png",
    alt: "AK Steel Services — Company DAF truck with Hiab at Gravesend yard",
  },
  // Residential rear extension steelwork
  residentialExtension2: {
    src: "/lovable-uploads/3be6700d-1395-4281-ab53-8a61dd6a038b.png",
    alt: "AK Steel Services — Rear extension steel frame installation at residential property",
  },
  // Additional rooftop steel frame (spare)
  rooftopSteel1: {
    src: "/lovable-uploads/9b70bed0-881c-4df0-9395-733bd7e4d0b4.png",
    alt: "AK Steel Services — Rooftop structural steel assembly on residential/commercial property",
  },
  // New photos - Team and operations
  craneConstruction1: {
    src: "/lovable-uploads/crane-steel-lift-construction.jpg",
    alt: "AK Steel Services — Professional crane operation lifting steel beams on construction site",
  },
  companyTruckYard: {
    src: "/lovable-uploads/ak-steel-truck-yard.jpg",
    alt: "AK Steel Services — Company DAF truck with Hiab crane at Gravesend facility",
  },
  teamScaffolding1: {
    src: "/lovable-uploads/team-scaffolding-thumbsup.jpg",
    alt: "AK Steel Services — Professional team member on scaffolding during steel installation",
  },
  teamCarryingBeam: {
    src: "/lovable-uploads/team-carrying-steel-beam.jpg",
    alt: "AK Steel Services — Team installing red oxide steel beam on residential project",
  },
  teamInstallingBeam: {
    src: "/lovable-uploads/team-installing-beam-scaffolding.jpg",
    alt: "AK Steel Services — Expert team member installing structural steel beam",
  },
  residentialCrane: {
    src: "/lovable-uploads/residential-crane-operation.jpg",
    alt: "AK Steel Services — Crane operation for steel delivery in residential area",
  },
  teamLoadingTruck: {
    src: "/lovable-uploads/team-loading-truck-crane.jpg",
    alt: "AK Steel Services — Team coordinating steel beam loading with crane equipment",
  },
  rooftopCraneOp: {
    src: "/lovable-uploads/rooftop-crane-operation.jpg",
    alt: "AK Steel Services — Rooftop crane operation for steel installation in London",
  },
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
