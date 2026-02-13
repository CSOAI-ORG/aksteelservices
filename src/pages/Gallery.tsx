import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Phone, X } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { useAnalytics } from "@/hooks/useAnalytics";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const { trackPhoneCall } = useAnalytics();

  const galleryImages = [
    REAL_PHOTOS.craneConstruction1,
    REAL_PHOTOS.teamScaffolding1,
    REAL_PHOTOS.teamCarryingBeam,
    REAL_PHOTOS.teamInstallingBeam,
    REAL_PHOTOS.residentialCrane,
    REAL_PHOTOS.rooftopCraneOp,
    REAL_PHOTOS.teamLoadingTruck,
    REAL_PHOTOS.companyTruckYard,
    REAL_PHOTOS.industrialInterior1,
    REAL_PHOTOS.residentialExtension1,
    REAL_PHOTOS.roofStructure1,
    REAL_PHOTOS.roofStructure2,
    REAL_PHOTOS.commercialInterior1,
    REAL_PHOTOS.residentialExtension2,
    REAL_PHOTOS.rooftopSteel1,
  ];

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

          {/* Gallery Grid */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
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
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free quote for your steel fabrication or installation project. We serve Kent, London, and the South East.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Free Quote</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a
                      href="tel:01474550531"
                      className="flex items-center gap-2"
                      onClick={() => trackPhoneCall("01474550531")}
                    >
                      <Phone className="h-5 w-5" />
                      Call 01474 550531
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
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
