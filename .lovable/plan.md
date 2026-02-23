
# Massive Website Improvement & SEO Overhaul

This plan covers improvements across the entire site: adding missing routes for existing pages, creating new high-value SEO landing pages, improving all inner pages with better design/CTAs, and enhancing overall site quality.

---

## Part 1: Connect 7 Existing Pages (Currently Unreachable)

There are 7 fully-built landing pages that exist in the codebase but have **no routes** in the router -- meaning Google and users can never find them. This is a major SEO fix.

Pages to connect:
- `/loft-conversion-steel-beams` - LoftConversionSteelBeams
- `/rsj-beams-kent-london` - RSJBeamsKentLondon
- `/house-extension-steelwork` - HouseExtensionSteelwork
- `/steel-beam-suppliers-near-me` - SteelBeamSuppliersNearMe
- `/steel-fabricators-near-me` - SteelFabricatorsNearMe
- `/mezzanine-floor-installation` - MezzanineFloorInstallation
- `/steel-frame-buildings-kent` - SteelFrameBuildingsKent

All 7 will be added to `App.tsx` routes and to the Header services dropdown and Footer links.

---

## Part 2: Create 3 New High-Value SEO Landing Pages

### a. `/steel-beams-london` - Steel Beams London
Targets "steel beams London" search queries. Covers supply, delivery, and installation of steel beams across all London boroughs with specific area targeting.

### b. `/structural-engineer-steel-beams` - Structural Engineer Steel Beams
Targets searches from people who already have structural engineer drawings and need someone to fabricate/install. High-intent traffic.

### c. `/steel-rsj-beam-prices` - Steel RSJ Beam Prices
Targets cost/price related searches ("how much does a steel beam cost", "RSJ beam prices"). Includes a price guide table and drives quotes.

---

## Part 3: Improve All Existing Inner Pages

Every service page will be enhanced with:
- **StickyCallBar** component added (currently missing from most inner pages)
- **MidPageCTA** component inserted mid-content for better conversion
- **TrustBar** added to build credibility
- Internal links to related services (cross-linking for SEO)
- Schema.org structured data where missing

Pages to update: SteelFabricationKent, StructuralSteelLondon, WeldingServices, SteelConstructionGravesend, OnsiteSteelFabrication, CraneHireServices, ThreeDModelingServices, EmergencySteelRepair, SteelBeamInstallation, ArchitecturalMetalworkLondon, IndustrialSteelPlatforms, SteelStaircaseInstallation, SteelBuildingExtensionsKent, plus the 7 newly-connected pages.

---

## Part 4: Homepage & Navigation Improvements

- **Header**: Add the 7 missing pages + 3 new pages to the Services dropdown menu, organised into clear groups (Residential, Commercial, Local SEO)
- **Footer**: Add links to all new pages in the services column
- **Sitemap page**: Update with all new routes
- **robots.txt**: Add XML sitemap reference

---

## Part 5: Gallery & About Page Improvements

- **Gallery**: Add category filtering (Residential, Commercial, Industrial, Crane Operations) so visitors can find relevant work photos
- **About**: Add real project photos, improve the timeline section, add a "response time guarantee" badge

---

## Technical Summary

| Category | Files | Type |
|----------|-------|------|
| New SEO pages | 3 new files | Create |
| Route registration | App.tsx | Edit |
| Navigation updates | Header.tsx, Footer.tsx | Edit |
| Inner page improvements | ~20 service pages | Edit (add StickyCallBar, MidPageCTA, TrustBar, internal links) |
| Gallery filtering | Gallery.tsx | Edit |
| About improvements | About.tsx | Edit |
| Sitemap update | Sitemap.tsx | Edit |
| robots.txt | robots.txt | Edit |

Total: ~3 new files created, ~25+ files modified -- a significant amount of visible improvement across the entire site.
