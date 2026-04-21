import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyImage from "@/components/LazyImage";
import CommercialShowcase from "@/components/CommercialShowcase";
import AEOFaqSection from "@/components/AEOFaqSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Building, Warehouse, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { createFAQSchema, combineSchemas } from "@/lib/schema";

const mezzanineFaqs = [
  { q: "Do I need planning permission for a mezzanine floor?", a: "Most mezzanines under 200m² in industrial premises don't require full planning, but Building Regulations approval is needed. We help with all documentation as part of the install." },
  { q: "How much weight can a mezzanine hold?", a: "Our mezzanines are designed from 3.5kN/m² (light office/storage) up to 7.5kN/m² (heavy pallet storage). Load capacity is engineered to your specific use case." },
  { q: "How long does mezzanine installation take?", a: "Typical 100–300m² industrial mezzanines are installed in 1–2 weeks from delivery, with minimal disruption to your operations. Larger jobs scale accordingly." },
  { q: "Can a mezzanine be removed later?", a: "Yes — our bolted steel mezzanines are fully demountable. Useful if you lease your premises or want to reconfigure later." },
];

const MezzanineFloorInstallation = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mezzanine Floor Installation",
    "description": "Professional mezzanine floor design, fabrication, and installation across Kent and London. Industrial, warehouse, and office mezzanines.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AK Steel Services",
      "telephone": "01474550531"
    },
    "areaServed": ["Kent", "London", "South East England"]
  };

  const mezzanineTypes = [
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Warehouse Mezzanines",
      description: "Maximize warehouse space with heavy-duty industrial mezzanine floors. Designed for storage, picking, and packing operations.",
      loadCapacity: "Up to 7.5kN/m²"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Office Mezzanines",
      description: "Create additional office or meeting space within your warehouse or industrial unit without relocating.",
      loadCapacity: "Up to 3.5kN/m²"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Storage Mezzanines",
      description: "Light-duty mezzanines for archive storage, retail stockrooms, and general storage applications.",
      loadCapacity: "Up to 5kN/m²"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Retail Mezzanines",
      description: "Expand your retail floor space or create staff areas above your shop floor.",
      loadCapacity: "Up to 4kN/m²"
    }
  ];

  const benefits = [
    "Double your usable floor space",
    "Faster and cheaper than relocating",
    "Minimal disruption to operations",
    "Building regulation compliant",
    "Custom designed to your needs",
    "Fire-rated options available",
    "Integrated stairs and handrails",
    "Free site survey and design"
  ];

  const process = [
    { step: "1", title: "Site Survey", desc: "We visit your premises to measure and assess requirements" },
    { step: "2", title: "Design & Quote", desc: "Receive detailed drawings and fixed-price quotation" },
    { step: "3", title: "Fabrication", desc: "Steel fabricated at our Gravesend facility" },
    { step: "4", title: "Installation", desc: "Professional installation with minimal disruption" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mezzanine Floor Installation Kent & London | Industrial Mezzanines"
        description="Professional mezzanine floor installation across Kent & London. Warehouse, office, and retail mezzanines. Free site survey. Call 01474 550531 for a quote."
        keywords="mezzanine floor installation, industrial mezzanine Kent, warehouse mezzanine London, office mezzanine, mezzanine floor design"
        schemaData={combineSchemas(schemaData, createFAQSchema(mezzanineFaqs))}
      />
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Commercial & Industrial
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Mezzanine Floor Installation
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Maximize your building's potential with a professionally designed and installed 
                mezzanine floor. Double your usable space without the cost and hassle of relocating 
                or extending your premises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:01474550531">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 01474 550531
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/contact">Free Site Survey</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <LazyImage
                src={REAL_PHOTOS.industrialInterior1.src}
                alt="Industrial mezzanine floor installation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What is a Mezzanine Floor?</h2>
            <p className="text-lg text-muted-foreground">
              A mezzanine floor is an intermediate floor installed between the ground floor and ceiling 
              of an existing building. Made from structural steel, mezzanines provide additional usable 
              space for storage, offices, production, or retail without the need for building extensions. 
              They're a cost-effective way to maximize the cubic capacity of your building.
            </p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of Mezzanine Floors</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mezzanineTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{type.loadCapacity}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <LazyImage
              src={REAL_PHOTOS.roofStructure2.src}
              alt="Mezzanine floor structure"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits of a Mezzanine Floor</h2>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Site Survey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mezzanine Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Mezzanine Floor Specifications</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Steel Framework</span>
                    <span className="text-muted-foreground">Hot-rolled steel sections</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Decking Options</span>
                    <span className="text-muted-foreground">Chipboard, steel, or concrete</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Load Capacity</span>
                    <span className="text-muted-foreground">3.5kN/m² to 7.5kN/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Column Spacing</span>
                    <span className="text-muted-foreground">Typically 4-6m grid</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Handrails</span>
                    <span className="text-muted-foreground">Building reg compliant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Fire Rating</span>
                    <span className="text-muted-foreground">Up to 2-hour protection available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Mezzanine Installation Areas</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We design, fabricate, and install mezzanine floors across Kent, London, and the South East.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Gravesend", "Dartford", "Maidstone", "Medway", "Canterbury", 
              "London", "Bromley", "Croydon", "Surrey", "Essex", "Sussex"].map((area) => (
              <Badge key={area} variant="secondary" className="px-4 py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Steel Showcase */}
      <CommercialShowcase
        heading="Full-Service Commercial Steelwork"
        subheading="Mezzanines are just one part of what we do — we also build industrial frameworks, access platforms and onsite welded structures."
      />

      {/* AEO FAQs */}
      <AEOFaqSection
        faqs={mezzanineFaqs}
        heading="Mezzanine Floors — Quick Answers"
        eyebrow="Mezzanine FAQs"
        intro="Common questions facility managers and business owners ask before installing a mezzanine."
      />

      {/* Quote Form */}
      <section id="get-quote" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MezzanineFloorInstallation;