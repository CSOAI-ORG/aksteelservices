import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Factory, ShieldCheck, Wrench, ClipboardCheck, Cog, Truck } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { useAnalytics } from "@/hooks/useAnalytics";

const CraneServicesSection = () => {
  const { trackPhoneCall } = useAnalytics();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Main Section: Professional Steelwork & Manufacturing */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6">
            <Factory className="h-4 w-4 mr-2" />
            Complete In-House Capabilities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Steel Fabrication</span> & Manufacturing
          </h2>
          <p className="text-xl text-muted-foreground">
            From design to installation, we manufacture all steelwork in our own facility. Complete supply & fit service with full quality control at every stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <img
                src={REAL_PHOTOS.commercialInterior1.src}
                alt={REAL_PHOTOS.commercialInterior1.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <img
                src={REAL_PHOTOS.industrialInterior1.src}
                alt={REAL_PHOTOS.industrialInterior1.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6">
            <Factory className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">In-House Fabrication</h3>
            <p className="text-sm text-muted-foreground">All steelwork manufactured in our own facility in Gravesend</p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Quality Control</h3>
            <p className="text-sm text-muted-foreground">BS EN 1090 fabrication standards with full traceability</p>
          </Card>
          <Card className="p-6">
            <ClipboardCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Design to Delivery</h3>
            <p className="text-sm text-muted-foreground">Complete project management from drawings to installation</p>
          </Card>
          <Card className="p-6">
            <Cog className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Custom Solutions</h3>
            <p className="text-sm text-muted-foreground">Bespoke steel fabrication tailored to your exact requirements</p>
          </Card>
        </div>

        <div className="text-center bg-card p-8 rounded-lg border mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Steel Project?</h3>
          <p className="text-muted-foreground mb-6">
            Get a free quote for professional steel fabrication and installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">Get a Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="tel:01474550531"
                className="inline-flex items-center gap-2"
                onClick={() => trackPhoneCall("01474550531")}
              >
                <Phone className="h-5 w-5" />
                Call 01474 550531
              </a>
            </Button>
          </div>
        </div>

        {/* Secondary Section: Hiab/Crane Services */}
        <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Need Hiab Crane Services & Haulage?</h4>
                <p className="text-sm text-muted-foreground">
                  We can assist with crane hire and steel delivery across Kent & London
                </p>
              </div>
            </div>
            <Button variant="secondary" size="sm" asChild>
              <a
                href="tel:01474550531"
                className="inline-flex items-center gap-2"
                onClick={() => trackPhoneCall("01474550531")}
              >
                <Phone className="h-4 w-4" />
                Enquire: 01474 550531
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraneServicesSection;
