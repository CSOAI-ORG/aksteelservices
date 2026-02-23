import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StickyCallBar from "@/components/StickyCallBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Phone, X } from "lucide-react";
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

const galleryImages: Array<{ src: string; alt: string; category: Category[] }> = [
  { ...REAL_PHOTOS.craneConstruction1, category: ["crane", "commercial"] },
  { ...REAL_PHOTOS.teamScaffolding1, category: ["team", "residential"] },
  { ...REAL_PHOTOS.teamCarryingBeam, category: ["team", "residential"] },
  { ...REAL_PHOTOS.teamInstallingBeam, category: ["team", "residential"] },
  { ...REAL_PHOTOS.residentialCrane, category: ["crane", "residential"] },
  { ...REAL_PHOTOS.rooftopCraneOp, category: ["crane", "commercial"] },
  { ...REAL_PHOTOS.teamLoadingTruck, category: ["team", "crane"] },
  { ...REAL_PHOTOS.companyTruckYard, category: ["team"] },
  { ...REAL_PHOTOS.industrialInterior1, category: ["commercial"] },
  { ...REAL_PHOTOS.residentialExtension1, category: ["residential"] },
  { ...REAL_PHOTOS.roofStructure1, category: ["commercial"] },
  { ...REAL_PHOTOS.roofStructure2, category: ["commercial"] },
  { ...REAL_PHOTOS.commercialInterior1, category: ["commercial"] },
  { ...REAL_PHOTOS.residentialExtension2, category: ["residential"] },
  { ...REAL_PHOTOS.rooftopSteel1, category: ["residential", "commercial"] },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const { trackPhoneCall } = useAnalytics();

  const filtered = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(activeCategory));

  return (
    <>
      <SEOHead
        title="Project Gallery | AK Steel Services - Real Steel Fabrication Projects"
        description="View our portfolio of completed steel fabrication and installation projects across Kent and London. Real photos from residential extensions, commercial builds, and industrial installations."
        canonicalUrl="https://aksteelservices.com/gallery"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-6">Our Work</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Project <span className="text-primary">Gallery</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Real projects, real results. See our expert steel fabrication and installation work across Kent, London, and the South East.
                </p>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-6 border-b border-border sticky top-[57px] z-30 bg-background/95 backdrop-blur">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {(Object.keys(categoryLabels) as Category[]).map(cat => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                    className="rounded-full"
                  >
                    {categoryLabels[cat]}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((image, index) => (
                  <Card 
                    key={index}
                    className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </Card>
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No projects found in this category.</p>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free quote for your steel fabrication or installation project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
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

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0">
          {selectedImage && (
            <div className="relative">
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
                <X className="h-6 w-6" />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
              <div className="p-4 bg-background">
                <p className="text-sm text-muted-foreground">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
