import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ShieldCheck, Award, Wrench } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const TeamSection = () => {
  const { trackPhoneCall } = useAnalytics();

  const features = [
    { icon: <ShieldCheck className="h-10 w-10" />, title: "Fully Certified", desc: "All team members hold relevant certifications and qualifications" },
    { icon: <Award className="h-10 w-10" />, title: "Safety First", desc: "Rigorous safety protocols on every project site" },
    { icon: <Wrench className="h-10 w-10" />, title: "Expert Craftsmanship", desc: "Years of experience in steel fabrication and installation" },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Our Expert Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Steel Specialists</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our certified team brings years of experience to every project, ensuring quality workmanship and safety on every installation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((f, i) => (
            <Card key={i} className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary mx-auto mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 text-muted-foreground">Work with the best steel specialists in Kent and London</p>
          <Button size="lg" asChild>
            <a href="tel:01474550531" className="inline-flex items-center gap-2" onClick={() => trackPhoneCall("01474550531")}>
              <Phone className="h-5 w-5" /> Call Our Team: 01474 550531
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
