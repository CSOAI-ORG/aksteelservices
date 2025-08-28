import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-steel-fabrication.jpg";
import LazyImage from "@/components/LazyImage";
import { useAnalytics } from "@/hooks/useAnalytics";

const HeroSection = () => {
  const { trackPhoneCall } = useAnalytics();
  
  const benefits = [
    "30+ Years Experience",
    "Free Quotes",
    "Emergency Services 24/7",
    "Fully Insured & Certified"
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <LazyImage
          src={heroImage}
          alt="Steel fabrication workshop showing structural steel work"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-white space-y-6">
            <Badge variant="secondary" className="w-fit">
              The UK's #1 Steel Manufacturer
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Leading Steel Fabrication Services in{" "}
              <span className="text-accent">Kent & London</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              30+ years of excellence in steel fabrication, structural steel, and welding services. 
              From residential extensions to major commercial projects across Kent, London, and South East England.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Get Free Quote Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a 
                  href="tel:01474550531" 
                  className="flex items-center gap-2"
                  onClick={() => trackPhoneCall('01474550531')}
                >
                  <Phone className="h-5 w-5" />
                  Call 01474 550531
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-white/80 mb-2">Trusted by 1000+ customers across:</p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span>Kent</span>
                <span>•</span>
                <span>London</span>
                <span>•</span>
                <span>Surrey</span>
                <span>•</span>
                <span>Essex</span>
                <span>•</span>
                <span>Sussex</span>
              </div>
            </div>
          </div>

          {/* Image/Stats */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-6">Why Choose AK Steel Services?</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                    30+
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Years Experience</div>
                    <div className="text-sm opacity-80">In steel fabrication industry</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                    1K+
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Projects Completed</div>
                    <div className="text-sm opacity-80">Across Kent & London</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                    24/7
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Emergency Service</div>
                    <div className="text-sm opacity-80">Available when you need us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;