import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Factory, Warehouse, Layers, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

interface CommercialShowcaseProps {
  /** Override the default heading */
  heading?: string;
  /** Override the default subheading */
  subheading?: string;
  /** Override the default CTA link */
  ctaLink?: string;
  /** Override the default CTA label */
  ctaLabel?: string;
}

const defaultPillars = [
  { icon: <Factory className="h-7 w-7" />, title: "Industrial Frameworks", desc: "Full structural steel frames for factories & plants" },
  { icon: <Warehouse className="h-7 w-7" />, title: "Warehouse Mezzanines", desc: "Double your usable floor space with mezzanine flooring" },
  { icon: <Layers className="h-7 w-7" />, title: "Steel Platforms", desc: "Access platforms, walkways & equipment supports" },
  { icon: <HardHat className="h-7 w-7" />, title: "Site Installation", desc: "Onsite welding, crane lifting & turnkey installation" },
];

const certs = ["BS EN 1090 Certified", "CHAS & CSCS Approved", "Full Public Liability £10M"];

const CommercialShowcase = ({
  heading = "Heavy-Duty Commercial Steelwork",
  subheading = "From warehouse mezzanines to industrial frameworks — we deliver large-scale steel projects on time and to spec across Kent, London & the South East.",
  ctaLink = "/commercial-steel-services",
  ctaLabel = "Explore Commercial Services",
}: CommercialShowcaseProps) => {
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${REAL_PHOTOS.craneConstruction1.src})` }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">Commercial & Industrial</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {heading.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-accent">{heading.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {defaultPillars.map((item, i) => (
            <div
              key={i}
              className="bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl p-6 hover:bg-secondary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {certs.map((label, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start text-sm">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to={ctaLink}>
              {ctaLabel} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommercialShowcase;
