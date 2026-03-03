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
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section aria-label="AK Steel Services hero" className="relative overflow-hidden bg-secondary min-h-[580px] md:min-h-[680px] lg:min-h-[720px]">
      {/* Slideshow background */}
      {slideshowImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "animate-ken-burns" : ""}`}
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === currentSlide ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-secondary/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" aria-hidden="true" />

      {/* Slide indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "bg-accent w-7" : "bg-secondary-foreground/30 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className="space-y-6 text-secondary-foreground max-w-xl">
            <Badge className="bg-accent/90 text-accent-foreground w-fit font-semibold text-xs tracking-wide px-3 py-1">
              🔥 37 Quotes Requested This Week
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight">
              Steel Fabrication &amp; Structural Steel in{" "}
              <span className="text-accent">Kent &amp; London</span>
            </h1>

            <p className="text-base md:text-lg text-secondary-foreground/85 leading-relaxed">
              Trusted by 1,000+ homeowners and builders. Free site surveys, 2-hour response time, BS EN 1090 certified.
            </p>

            {/* Google rating */}
            <div className="flex items-center gap-2.5 bg-secondary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2.5 w-fit">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-bold">5.0</span>
              <span className="text-xs text-secondary-foreground/60">on Google Reviews</span>
            </div>

            {/* Big phone CTA */}
            <a
              href="tel:01474550531"
              onClick={() => trackPhoneCall("01474550531")}
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-extrabold text-accent hover:text-accent-hover transition-colors"
            >
              <Phone className="h-7 w-7 animate-pulse" />
              01474 550531
            </a>

            <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-foreground/75">
              {["Fully Insured", "Free Site Surveys", "24/7 Emergency"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Quick Quote Form */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-2xl border border-border/80 animate-glow-pulse lg:ml-auto lg:max-w-md w-full">
            <h2 className="text-xl font-bold text-foreground mb-1">Get a Free Quote in 60 Seconds</h2>
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p className="text-sm text-muted-foreground">Responding Now — we'll call you back within 2 hours</p>
            </div>
            <QuickQuoteForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
