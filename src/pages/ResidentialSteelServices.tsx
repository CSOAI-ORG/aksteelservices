import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import SEOHead from "@/components/SEOHead";
import MidPageCTA from "@/components/MidPageCTA";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Home, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createServiceSchema } from "@/lib/schema";

const services = [
  {
    title: "Loft Conversions",
    description: "Steel beams for loft conversions — we handle the structural steelwork so your builder can focus on the fit-out.",
    link: "/steel-beam-installation",
    popular: true,
  },
  {
    title: "House Extensions",
    description: "Rear, side and wrap-around extensions with RSJ beams and structural steel frameworks.",
    link: "/steel-building-extensions-kent",
    popular: true,
  },
  {
    title: "Load-Bearing Wall Removal",
    description: "RSJ and universal beam installation to open up living spaces safely and to building regulations.",
    link: "/steel-beam-installation",
    popular: false,
  },
  {
    title: "Staircases & Balconies",
    description: "Bespoke steel staircases, spiral stairs, and Juliet balconies for modern homes.",
    link: "/steel-staircase-installation",
    popular: false,
  },
  {
    title: "Architectural Metalwork",
    description: "Gates, railings, canopies, and decorative metalwork to enhance your property.",
    link: "/architectural-metalwork-london",
    popular: false,
  },
  {
    title: "Emergency Repairs",
    description: "Urgent structural steel repairs when something goes wrong — available 24/7.",
    link: "/emergency-steel-repair",
    popular: false,
  },
];

const ResidentialSteelServices = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Residential Steel Services | Beams, Extensions & Loft Conversions | AK Steel"
        description="Steel beams for loft conversions, house extensions, and wall removals. AK Steel Services provides residential steelwork across Kent & London. Free quotes."
        schemaData={createServiceSchema("Residential Steel Services", "Steel beams for loft conversions, house extensions, and load-bearing wall removals across Kent and London.")}
      />
      <StickyCallBar />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge variant="secondary" className="text-sm"><Home className="h-3 w-3 mr-1 inline" /> Homeowner Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Steel Services for <span className="text-primary">Your Home</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From loft conversions to extensions — we make your home improvement project simple, safe, and stress-free.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20 border-2 relative">
                {s.popular && (
                  <Badge className="absolute -top-2.5 right-4 bg-accent text-accent-foreground text-xs">Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription className="text-sm">{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={s.link} className="flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MidPageCTA serviceName="Residential Steelwork" />

      {/* Why homeowners choose us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Why Homeowners Choose Us</h2>
          <div className="space-y-4">
            {[
              "We explain everything in plain English — no jargon",
              "We work around your schedule, including weekends",
              "We liaise directly with your builder or architect",
              "All work certified to BS EN 1090 standards",
              "Free site surveys with detailed written quotes",
              "We clean up after ourselves — every time",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-lg">
          <h3 className="text-2xl font-bold text-center mb-6">Get a Quick Quote</h3>
          <QuickQuoteForm variant="banner" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ResidentialSteelServices;
