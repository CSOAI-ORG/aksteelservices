import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Building, Home, Factory } from "lucide-react";
import structuralSteelImage from "@/assets/large-steel-framework-4.jpg";

const StructuralSteelLondon = () => {
  const projects = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Extensions",
      description: "Loft conversions, basement extensions, and rear extensions across London boroughs.",
      examples: ["Single-story extensions", "Two-story extensions", "Wrap-around extensions"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Buildings", 
      description: "Office buildings, retail spaces, and mixed-use developments throughout London.",
      examples: ["Office frameworks", "Retail structures", "Mixed-use buildings"]
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Industrial Projects",
      description: "Warehouses, manufacturing facilities, and specialized industrial structures.",
      examples: ["Warehouse frameworks", "Manufacturing plants", "Industrial platforms"]
    }
  ];

  const londonBoroughs = [
    "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets",
    "Greenwich", "Lewisham", "Southwark", "Lambeth", "Wandsworth",
    "Hammersmith", "Kensington", "Chelsea", "City of London", "All Boroughs"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Structural Steel Contractor London - All Boroughs | AK Steel Services"
        description="Professional structural steel contractor serving all London boroughs. Residential extensions, commercial buildings, heritage restorations. London building regulations compliance & planning support."
        keywords="structural steel London, London steel contractor, steel frame construction London, residential steel extension London, commercial steel construction"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              London Structural Steel Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Structural Steel Contractor in <span className="text-accent">London</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Delivering exceptional structural steel solutions across all London boroughs. 
              From residential extensions to major commercial developments, we navigate London's 
              unique challenges with expertise and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get London Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:01474550531" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 01474 550531
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* London Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                London Structural Steel Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Working in London requires specialized knowledge of building regulations, 
                planning permissions, and logistical challenges unique to the capital. 
                Our 30+ years of London experience ensures smooth project delivery.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "London Building Regulations compliance",
                  "Planning permission support and guidance", 
                  "Restricted access solutions and equipment",
                  "Historic building preservation requirements",
                  "Noise restriction compliance",
                  "Coordinated delivery scheduling",
                  "Heritage area considerations",
                  "Underground services navigation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero">
                  View London Projects
                </Button>
                <Button variant="outline">
                  London Building Regulations Guide
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={structuralSteelImage} 
                alt="Structural steel construction in London"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-primary rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">London Delivery Service</h3>
                <p className="opacity-90 mb-4">
                  Specialized London delivery with hiab-equipped vehicles navigating 
                  restricted access and time constraints.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Delivery Hours:</div>
                    <div className="opacity-80">7:00 - 17:00</div>
                  </div>
                  <div>
                    <div className="font-semibold">Coverage:</div>
                    <div className="opacity-80">All Boroughs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              London Structural Steel Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              From residential extensions to major commercial developments across London.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm mb-2">Common Projects:</div>
                    {project.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-background rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Planning a London Extension?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Maximize your London property value with professional structural steel extensions. 
              We handle all aspects from planning to completion.
            </p>
            <Button variant="hero" size="lg">
              Free Extension Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* London Coverage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Structural Steel Across All London Boroughs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete London coverage with local knowledge and specialized equipment 
              for urban construction challenges.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {londonBoroughs.map((borough) => (
              <div key={borough} className="text-center p-3 border border-border rounded-lg hover:border-primary transition-colors">
                <span className="text-sm font-medium">{borough}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Fast Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Emergency services available across London with rapid response times.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep knowledge of London building regulations and planning requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Specialized Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  London-optimized delivery vehicles and installation equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your London Structural Steel Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default StructuralSteelLondon;