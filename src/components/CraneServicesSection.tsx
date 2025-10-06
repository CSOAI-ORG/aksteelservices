import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Truck, ShieldCheck } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { useAnalytics } from "@/hooks/useAnalytics";

const CraneServicesSection = () => {
  const { trackPhoneCall } = useAnalytics();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6">
            <Truck className="h-4 w-4 mr-2" />
            Crane & Delivery Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Crane Hire</span> & Lifting
          </h2>
          <p className="text-xl text-muted-foreground">
            Our modern fleet includes Hiab-mounted cranes for safe and efficient steel delivery and installation across Kent and London.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <img
                src={REAL_PHOTOS.residentialCrane.src}
                alt={REAL_PHOTOS.residentialCrane.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <img
                src={REAL_PHOTOS.rooftopCraneOp.src}
                alt={REAL_PHOTOS.rooftopCraneOp.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Residential Access</h3>
            <p className="text-sm text-muted-foreground">Expert navigation of tight residential spaces</p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Commercial Sites</h3>
            <p className="text-sm text-muted-foreground">Large-scale commercial deliveries and lifting</p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Rooftop Work</h3>
            <p className="text-sm text-muted-foreground">Specialized rooftop steel installations</p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Same-Day Service</h3>
            <p className="text-sm text-muted-foreground">Fast response for urgent projects</p>
          </Card>
        </div>

        <div className="text-center bg-card p-8 rounded-lg border">
          <h3 className="text-2xl font-bold mb-4">Need Crane Services?</h3>
          <p className="text-muted-foreground mb-6">
            Get expert crane hire and lifting services for your steel project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">Request Crane Quote</a>
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
      </div>
    </section>
  );
};

export default CraneServicesSection;
