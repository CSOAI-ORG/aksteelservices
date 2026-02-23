import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ShieldCheck, Star } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { REAL_PHOTOS } from "@/assets/real-photos";

const slideshowImages = [
  REAL_PHOTOS.craneConstruction1,
  REAL_PHOTOS.industrialInterior1,
  REAL_PHOTOS.residentialExtension2,
  REAL_PHOTOS.roofStructure2,
  REAL_PHOTOS.teamInstallingBeam,
  REAL_PHOTOS.rooftopCraneOp,
  REAL_PHOTOS.commercialInterior1,
  REAL_PHOTOS.teamCarryingBeam,
  REAL_PHOTOS.residentialCrane,
  REAL_PHOTOS.roofStructure1,
  REAL_PHOTOS.companyTruckYard,
  REAL_PHOTOS.teamScaffolding1,
];

const NewHeroSection = () => {
  const { trackPhoneCall } = useAnalytics();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section aria-label="AK Steel Services hero" className="relative overflow-hidden bg-secondary min-h-[600px] md:min-h-[650px]">
      {/* Slideshow background */}
      {slideshowImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === currentSlide ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-secondary/70" aria-hidden="true" />

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "bg-accent w-6" : "bg-secondary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-5 text-secondary-foreground">
            <Badge className="bg-accent text-accent-foreground w-fit font-semibold">
              🔥 37 Quotes Requested This Week
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Steel Fabrication & Structural Steel in <span className="text-accent">Kent & London</span>
            </h1>

            <p className="text-lg text-secondary-foreground/80 max-w-xl">
              Trusted by 1,000+ homeowners and builders. Free site surveys, 2-hour response time, BS EN 1090 certified.
            </p>

            {/* Google rating */}
            <div className="flex items-center gap-2 bg-secondary-foreground/10 backdrop-blur rounded-full px-4 py-2 w-fit">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-semibold">5.0</span>
              <span className="text-xs text-secondary-foreground/70">on Google Reviews</span>
            </div>

            {/* Big phone CTA */}
            <a
              href="tel:01474550531"
              onClick={() => trackPhoneCall("01474550531")}
              className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-accent hover:text-accent-hover transition-colors w-fit"
            >
              <Phone className="h-7 w-7 animate-pulse" />
              01474 550531
            </a>

            <div className="flex flex-wrap items-center gap-3 text-sm text-secondary-foreground/80">
              {["Fully Insured", "Free Site Surveys", "24/7 Emergency"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Quick Quote Form */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-2xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-1">Get a Free Quote in 60 Seconds</h2>
            <p className="text-sm text-muted-foreground mb-4">No obligation — we'll call you back within 2 hours</p>
            <QuickQuoteForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
