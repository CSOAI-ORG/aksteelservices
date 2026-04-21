import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import SEOHead from "@/components/SEOHead";
import MidPageCTA from "@/components/MidPageCTA";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import CommercialShowcase from "@/components/CommercialShowcase";
import AEOFaqSection from "@/components/AEOFaqSection";
import { Building, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createServiceSchema, createFAQSchema, combineSchemas } from "@/lib/schema";

const commercialFaqs = [
  { q: "Do you work with main contractors and project managers?", a: "Yes — we regularly act as the steelwork sub-contractor on commercial builds, working to programme with main contractors, QSs and architects across Kent and London." },
  { q: "Are your fabrications BS EN 1090 certified?", a: "All structural fabrications are produced under BS EN 1090 with full CE/UKCA marking and traceable mill certificates supplied with every delivery." },
  { q: "Can you handle large industrial frameworks?", a: "Absolutely — from 50t warehouse portal frames to multi-storey industrial structures. We manage 3D modelling, fabrication, transport and site install." },
  { q: "Do you offer 24/7 emergency commercial repairs?", a: "Yes. Structural failures, vehicle impact damage and urgent welding repairs — our emergency team is on call 24/7 across the South East." },
];

const services = [
  {
    title: "Structural Steel Frameworks",
    description: "Complete steel frame buildings for warehouses, offices, and commercial developments.",
    link: "/structural-steel-london",
  },
  {
    title: "Mezzanine Floors",
    description: "Double your usable space with professionally installed mezzanine floor systems.",
    link: "/industrial-steel-platforms",
  },
  {
    title: "Industrial Platforms",
    description: "Walkways, access platforms, and gantries for industrial and manufacturing facilities.",
    link: "/industrial-steel-platforms",
  },
  {
    title: "3D Modeling & Design",
    description: "Advanced 3D steel modeling for complex projects, ensuring precision before fabrication begins.",
    link: "/3d-modeling-services",
  },
  {
    title: "Crane & Hiab Services",
    description: "Steel delivery and installation using our own crane and Hiab equipment with qualified operators.",
    link: "/crane-hire-services",
  },
  {
    title: "Emergency Structural Repairs",
    description: "24/7 emergency response for commercial structural steel failures and urgent repairs.",
    link: "/emergency-steel-repair",
  },
];

const CommercialSteelServices = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Commercial & Industrial Steel Services | AK Steel Kent & London"
        description="Steel frameworks, mezzanine floors, industrial platforms & structural steel for commercial projects. BS EN 1090 certified. Serving Kent & London."
        schemaData={combineSchemas(createServiceSchema("Commercial & Industrial Steel Services", "Steel frameworks, mezzanine floors, industrial platforms and structural steel for commercial projects. BS EN 1090 certified."), createFAQSchema(commercialFaqs))}
      />
      <StickyCallBar />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-accent text-accent-foreground"><Building className="h-3 w-3 mr-1 inline" /> Commercial & Industrial</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Commercial Steel <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            From warehouse steel frames to complex industrial platforms — we deliver large-scale projects on time and on budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {["BS EN 1090 Certified", "Fully Insured", "Own Transport & Cranes", "24/7 Emergency"].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20 border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
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

      <MidPageCTA serviceName="Commercial Steelwork" />

      {/* Why businesses choose us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Why Businesses Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "BS EN 1090 certified fabrication",
              "Own fleet of cranes and transport",
              "In-house 3D modeling and CAD",
              "Experienced with main contractors",
              "Health & safety documentation",
              "Competitive commercial pricing",
              "Project management from start to finish",
              "Nationwide delivery capability",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Steel Showcase */}
      <CommercialShowcase
        heading="The Full Commercial Steel Stack"
        subheading="Frameworks, mezzanines, platforms and onsite installation — one team handles your whole project from drawing to handover."
        ctaLink="/contact"
        ctaLabel="Discuss Your Project"
      />

      {/* AEO FAQs */}
      <AEOFaqSection
        faqs={commercialFaqs}
        heading="Commercial Steelwork — Quick Answers"
        eyebrow="Contractor FAQs"
        intro="What main contractors, project managers and facility owners need to know before working with us."
      />

      {/* Quote */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-lg">
          <h3 className="text-2xl font-bold text-center mb-6">Get a Commercial Quote</h3>
          <QuickQuoteForm variant="banner" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CommercialSteelServices;
