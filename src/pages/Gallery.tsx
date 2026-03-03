import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StickyCallBar from "@/components/StickyCallBar";
import InnerPageHero from "@/components/InnerPageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Link } from "react-router-dom";

type Category = "all" | "residential" | "commercial" | "crane" | "team";

const categoryLabels: Record<Category, string> = {
  all: "All Projects",
  residential: "Residential",
  commercial: "Commercial & Industrial",
  crane: "Crane Operations",
  team: "Our Team at Work",
};

const galleryImages: Array<{ src: string; alt: string; category: Category[]; caption?: string }> = [
  { ...REAL_PHOTOS.craneConstruction1, category: ["crane", "commercial"], caption: "Large-scale commercial steel framework installation" },
  { ...REAL_PHOTOS.teamScaffolding1, category: ["team", "residential"], caption: "Team completing residential scaffolding work" },
  { ...REAL_PHOTOS.teamCarryingBeam, category: ["team", "residential"], caption: "Manual steel beam delivery for loft conversion" },
  { ...REAL_PHOTOS.teamInstallingBeam, category: ["team", "residential"], caption: "RSJ beam installation with scaffolding support" },
  { ...REAL_PHOTOS.residentialCrane, category: ["crane", "residential"], caption: "Crane lifting steel for residential extension" },
  { ...REAL_PHOTOS.rooftopCraneOp, category: ["crane", "commercial"], caption: "Complex rooftop crane operation in South London" },
  { ...REAL_PHOTOS.teamLoadingTruck, category: ["team", "crane"], caption: "Loading fabricated steel onto delivery truck" },
  { ...REAL_PHOTOS.companyTruckYard, category: ["team"], caption: "AK Steel Services fleet and yard" },
  { ...REAL_PHOTOS.industrialInterior1, category: ["commercial"], caption: "Industrial warehouse interior steel structure" },
  { ...REAL_PHOTOS.residentialExtension1, category: ["residential"], caption: "Rear extension steel frame ready for build" },
  { ...REAL_PHOTOS.roofStructure1, category: ["commercial"], caption: "Commercial roof steel framework" },
  { ...REAL_PHOTOS.roofStructure2, category: ["commercial"], caption: "Large-scale roof structure installation" },
  { ...REAL_PHOTOS.commercialInterior1, category: ["commercial"], caption: "Interior structural steelwork for commercial unit" },
  { ...REAL_PHOTOS.residentialExtension2, category: ["residential"], caption: "Residential rear extension with red oxide beams" },
  { ...REAL_PHOTOS.rooftopSteel1, category: ["residential", "commercial"], caption: "Rooftop steel beams for upper floor extension" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const { trackPhoneCall } = useAnalytics();

  const filtered = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(activeCategory));

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filtered.length);
  }, [selectedIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filtered.length) % filtered.length);
  }, [selectedIndex, filtered.length]);

  const selectedImage = selectedIndex !== null ? filtered[selectedIndex] : null;

  return (
    <>
      <SEOHead
        title="Project Gallery | AK Steel Services - Real Steel Fabrication Projects"
        description="View our portfolio of completed steel fabrication and installation projects across Kent and London. Real photos from residential extensions, commercial builds, and industrial installations."
        canonicalUrl="https://aksteelservices.com/gallery"
      />
      <div className="min-h-screen flex flex-col bg-background pb-16 md:pb-0">
        <Header />
        
        <main className="flex-grow">
          <InnerPageHero
            badge="Our Work"
            title={<>Project <span className="text-accent">Gallery</span></>}
            description="Real projects, real results. See our expert steel fabrication and installation work across Kent, London, and the South East."
            variant="gradient"
          />

          {/* Category Filter */}
          <section className="py-5 border-b border-border/50 sticky top-16 z-30 bg-background/95 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {(Object.keys(categoryLabels) as Category[]).map(cat => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => { setActiveCategory(cat); setSelectedIndex(null); }}
                    className="rounded-full text-xs"
                  >
                    {categoryLabels[cat]}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-10 md:py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 stagger-fade-up">
                {filtered.map((image, index) => (
                  <Card 
                    key={index}
                    className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-border/60"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-secondary-foreground font-semibold text-sm">View Full Size</span>
                      </div>
                    </div>
                    {image.caption && (
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{image.caption}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-center text-muted-foreground py-16">No projects found in this category.</p>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-20 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Ready to Start Your Project?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get a free quote for your steel fabrication or installation project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:01474550531" className="flex items-center gap-2" onClick={() => trackPhoneCall("01474550531")}>
                      <Phone className="h-5 w-5" /> Call 01474 550531
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <StickyCallBar />
      </div>

      {/* Image Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-6xl p-0 bg-black/95 border-none">
          {selectedImage && (
            <div className="relative" onKeyDown={(e) => { if (e.key === 'ArrowRight') goNext(); if (e.key === 'ArrowLeft') goPrev(); }}>
              <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 z-20 p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
                <X className="h-6 w-6" />
              </button>
              <div className="absolute top-4 left-4 z-20 bg-background/80 rounded-full px-3 py-1 text-sm font-medium">
                {(selectedIndex ?? 0) + 1} of {filtered.length}
              </div>
              {filtered.length > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="p-4 bg-background">
                <p className="text-sm text-muted-foreground">{selectedImage.caption || selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
