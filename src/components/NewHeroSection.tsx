import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import LazyImage from "@/components/LazyImage";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { REAL_PHOTOS } from "@/assets/real-photos";

const NewHeroSection = () => {
  const { trackPhoneCall } = useAnalytics();

  return (
    <section aria-label="AK Steel Services hero" className="relative overflow-hidden bg-background">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${REAL_PHOTOS.industrialInterior1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-5">
            <Badge variant="secondary" className="w-fit">🔥 37 Quotes Requested This Week</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Steel Fabrication & Structural Steel in <span className="text-primary">Kent & London</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Trusted by 1,000+ homeowners and builders. Free site surveys, 2-hour response time, BS EN 1090 certified.
            </p>

            {/* Google rating */}
            <div className="flex items-center gap-2 bg-muted/80 rounded-full px-4 py-2 w-fit">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">5.0</span>
              <span className="text-xs text-muted-foreground">on Google Reviews</span>
            </div>

            {/* Big phone CTA */}
            <a
              href="tel:01474550531"
              onClick={() => trackPhoneCall("01474550531")}
              className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-primary hover:text-primary-hover transition-colors w-fit"
            >
              <Phone className="h-7 w-7 animate-pulse" />
              01474 550531
            </a>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Fully Insured</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Free Site Surveys</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>24/7 Emergency</span>
              </div>
            </div>
          </div>

          {/* Right side - Quick Quote Form */}
          <div className="bg-background/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-2xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-1">Get a Free Quote in 60 Seconds</h2>
            <p className="text-sm text-muted-foreground mb-4">No obligation — we'll call you back within 2 hours</p>
            <QuickQuoteForm variant="hero" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
};

export default NewHeroSection;
