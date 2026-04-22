import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Warehouse, Tractor, Building2, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

const SteelFrameBuildingsKent = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Frame Buildings Kent",
    "description": "Steel frame building design, fabrication, and erection across Kent. Agricultural buildings, warehouses, workshops, and commercial structures.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AK Steel Services",
      "telephone": "01474550531"
    },
    "areaServed": ["Kent", "London", "South East England"]
  };

  const buildingTypes = [
    {
      icon: <Tractor className="h-8 w-8" />,
      title: "Agricultural Buildings",
      description: "Steel portal frame buildings for farms including barns, livestock housing, grain stores, and machinery storage.",
      features: ["Portal frame construction", "Clear span design", "Cladding options"]
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Warehouse Buildings",
      description: "Industrial warehouse structures with loading bays, office integration, and mezzanine floors.",
      features: ["Large clear spans", "Loading bay doors", "Office space integration"]
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Industrial Units",
      description: "Manufacturing facilities, workshops, and production units with crane beams and heavy-duty flooring.",
      features: ["Crane rails", "Heavy loading", "Service integration"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Buildings",
      description: "Retail units, showrooms, and commercial premises with architectural steel finishes.",
      features: ["Architectural design", "Shopfront frames", "Multi-storey capability"]
    }
  ];

  const advantages = [
    "Faster construction than traditional methods",
    "Larger clear spans possible",
    "Lower foundation requirements",
    "Easily expandable in future",
    "Fire resistant when properly treated",
    "Fully recyclable at end of life",
    "Precise factory fabrication",
    "All-weather construction"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Frame Buildings Kent | Agricultural & Industrial Steel Structures"
        description="Steel frame building specialists in Kent. Agricultural barns, warehouses, workshops & industrial units. Design, fabrication & erection. Call 01474 550531."
        keywords="steel frame buildings Kent, agricultural steel buildings, warehouse construction, industrial steel structures, portal frame buildings, steel barns Kent"
        schemaData={schemaData}
      />
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Steel Buildings Kent
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Steel Frame Buildings Kent
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Complete steel frame building solutions for agricultural, industrial, and commercial 
                applications across Kent. From design and fabrication to full erection services, 
                we deliver durable, cost-effective steel structures.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:01474550531">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 01474 550531
                  </a>
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                  <Link to="/contact">Request Design</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <LazyImage
                src={REAL_PHOTOS.roofStructure2.src}
                alt="Steel frame building construction"
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
            <h2 className="text-3xl font-bold mb-6">Why Choose Steel Frame Construction?</h2>
            <p className="text-lg text-muted-foreground">
              Steel frame buildings offer exceptional strength, durability, and flexibility compared 
              to traditional construction methods. Whether you need an agricultural barn, industrial 
              warehouse, or commercial unit, steel provides the ideal solution with faster build 
              times, larger clear spans, and lower lifetime costs.
            </p>
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Steel Building Types We Construct</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {buildingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((feature, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{feature}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advantages of Steel Frame Buildings</h2>
              <div className="grid gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <LazyImage
              src={REAL_PHOTOS.industrialInterior1.src}
              alt="Steel frame building interior"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Steel Building Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">
                  Structural design and planning drawings for building control approval
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <h3 className="font-semibold mb-2">Fabrication</h3>
                <p className="text-sm text-muted-foreground">
                  Precision steel fabrication at our Kent facility with quality control
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <h3 className="font-semibold mb-2">Erection</h3>
                <p className="text-sm text-muted-foreground">
                  Professional on-site erection with our experienced installation team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Sizes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Steel Building Sizes</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Small Workshop</span>
                    <span className="text-muted-foreground">10m x 15m (150m²)</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Agricultural Barn</span>
                    <span className="text-muted-foreground">15m x 30m (450m²)</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Industrial Unit</span>
                    <span className="text-muted-foreground">20m x 40m (800m²)</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Large Warehouse</span>
                    <span className="text-muted-foreground">30m x 60m (1,800m²)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Custom Size</span>
                    <span className="text-muted-foreground">Any dimensions available</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  All buildings can be designed to your exact specifications. Contact us with your requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Steel Building Service Areas</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We design, fabricate, and erect steel frame buildings across Kent and the South East.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Gravesend", "Dartford", "Maidstone", "Medway", "Canterbury", "Ashford",
              "Sevenoaks", "Tunbridge Wells", "Sittingbourne", "Faversham", "Dover", "Folkestone"].map((area) => (
              <Badge key={area} variant="secondary" className="px-4 py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

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

export default SteelFrameBuildingsKent;