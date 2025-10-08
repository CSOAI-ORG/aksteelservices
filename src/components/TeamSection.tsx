import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ShieldCheck } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { useAnalytics } from "@/hooks/useAnalytics";

const TeamSection = () => {
  const { trackPhoneCall } = useAnalytics();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6">Our Expert Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Steel Specialists</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our certified team brings years of experience to every project, ensuring quality workmanship and safety on every installation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Fully Certified</h3>
            <p className="text-sm text-muted-foreground">All team members hold relevant certifications and qualifications</p>
          </Card>
          <Card className="p-6 text-center">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Safety First</h3>
            <p className="text-sm text-muted-foreground">Rigorous safety protocols on every project site</p>
          </Card>
          <Card className="p-6 text-center">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Expert Craftsmanship</h3>
            <p className="text-sm text-muted-foreground">Years of experience in steel fabrication and installation</p>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">Work with the best steel specialists in Kent and London</p>
          <Button size="lg" asChild>
            <a
              href="tel:01474550531"
              className="inline-flex items-center gap-2"
              onClick={() => trackPhoneCall("01474550531")}
            >
              <Phone className="h-5 w-5" />
              Call Our Team: 01474 550531
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
