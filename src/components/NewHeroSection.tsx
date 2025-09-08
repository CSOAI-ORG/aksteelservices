import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import LazyImage from "@/components/LazyImage";

// Real, existing assets
import heroBg from "@/assets/hero-steel-fabrication.jpg";
import img1 from "@/assets/ak-steel-truck.jpg";
import img2 from "@/assets/red-oxide-steel-beams.jpg";
import img3 from "@/assets/interior-structural-work.jpg";
import img4 from "@/assets/rear-extension-steel-frame.jpg";

const NewHeroSection = () => {
  const { trackPhoneCall } = useAnalytics();

  return (
    <section aria-label="AK Steel Services hero" className="relative overflow-hidden bg-background">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/20" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <Badge variant="secondary" className="w-fit">Trusted Steel Specialists</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Steel Fabrication & Structural Steel in <span className="text-primary">Kent & London</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              20+ years delivering precision steelwork: fabrication, on-site welding, and certified installations
              for residential, commercial, and industrial projects across the South East.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="lg" asChild>
                <a href="#get-quote" className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
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

            <div className="flex flex-wrap items-center gap-4 pt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Fully Insured & Certified</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Free Site Surveys</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>24/7 Emergency</span>
              </div>
            </div>
          </div>

          {/* Right image grid */}
          <div className="grid grid-cols-2 gap-4 animate-enter">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border bg-background/50 backdrop-blur">
              <LazyImage
                src={img1}
                alt="AK Steel Services — Professional delivery truck and mobile fabrication service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border bg-background/50 backdrop-blur">
              <LazyImage
                src={img2}
                alt="AK Steel Services — Red oxide steel beam fabrication and finishing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border bg-background/50 backdrop-blur">
              <LazyImage
                src={img3}
                alt="AK Steel Services — Interior structural steel work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border bg-background/50 backdrop-blur">
              <LazyImage
                src={img4}
                alt="AK Steel Services — Rear extension steel frame installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient bottom edge */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
};

export default NewHeroSection;
