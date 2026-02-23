import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Factory, 
  Shield, 
  Wrench, 
  CheckCircle, 
  HardHat, 
  Truck,
  Settings,
  Zap,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import StickyCallBar from "@/components/StickyCallBar";

import LazyImage from "@/components/LazyImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { createServiceSchema } from "@/lib/schema";

const platformTypes = [
  {
    name: "Mezzanine Floors",
    description: "Multi-level storage and workspace solutions maximizing facility capacity with structural steel platforms.",
    loadCapacity: "Up to 1000kg/m²",
    applications: ["Warehouses", "Manufacturing", "Retail storage"]
  },
  {
    name: "Access Platforms",
    description: "Safe working platforms for equipment maintenance, inspection, and operational access requirements.",
    loadCapacity: "Up to 500kg/m²", 
    applications: ["Equipment access", "Maintenance", "Safety compliance"]
  },
  {
    name: "Walkways & Bridges",
    description: "Elevated walkways connecting buildings or providing safe passage over production areas.",
    loadCapacity: "Up to 750kg/m²",
    applications: ["Inter-building links", "Production oversight", "Emergency routes"]
  },
  {
    name: "Loading Platforms",
    description: "Heavy-duty platforms for loading docks, vehicle access, and material handling operations.",
    loadCapacity: "Up to 2000kg/m²",
    applications: ["Loading bays", "Vehicle access", "Material handling"]
  }
];

const safetyFeatures = [
  {
    title: "Handrail Systems",
    description: "Compliant safety barriers and handrails meeting all UK workplace safety regulations and industry standards.",
    icon: Shield,
    standards: ["BS EN 14122", "Working at Height Regs", "HSE compliance"]
  },
  {
    title: "Anti-Slip Surfaces",
    description: "Specialized flooring systems providing secure footing in industrial environments and weather conditions.",
    icon: HardHat,
    standards: ["Slip resistance", "Weather resistant", "Easy maintenance"]
  },
  {
    title: "Load Distribution",
    description: "Engineered load distribution systems ensuring safe capacity management and structural integrity.",
    icon: Settings,
    standards: ["Load calculations", "Safety factors", "Certified design"]
  },
  {
    title: "Emergency Access",
    description: "Emergency egress routes and safety features integrated into platform design for workplace safety.",
    icon: Zap,
    standards: ["Emergency routes", "Fire safety", "Evacuation plans"]
  }
];

const industries = [
  "Manufacturing facilities requiring multi-level access",
  "Warehouse and distribution centers needing mezzanines",
  "Chemical and pharmaceutical production facilities",
  "Food processing plants with hygiene requirements",
  "Power generation and utility installations",
  "Automotive manufacturing and assembly plants",
  "Aerospace and defense industrial complexes",
  "Oil, gas, and petrochemical processing facilities"
];

const IndustrialSteelPlatforms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Industrial Steel Platforms | Mezzanines & Walkways | Kent & London"
        description="Industrial steel platforms, mezzanine floors, access walkways, and loading platforms. Designed and installed across Kent & London."
        schemaData={createServiceSchema("Industrial Steel Platforms", "Industrial steel platforms including mezzanine floors, access walkways, and loading platforms designed and installed to safety standards.")}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  Heavy-Duty Industrial Solutions
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Industrial Steel Platforms
                  <span className="text-primary"> & Access Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Engineered steel platforms, mezzanines, and access systems for industrial facilities. 
                  Built to handle heavy loads while meeting all UK safety standards and industry regulations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Get Platform Quote
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:01474550531" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    01474 550531
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2000kg</div>
                  <div className="text-muted-foreground">Max Load/m²</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">300+</div>
                  <div className="text-muted-foreground">Platforms Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Safety Compliant</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage 
                src={REAL_PHOTOS.industrialInterior1.src} 
                alt={REAL_PHOTOS.industrialInterior1.alt} 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Factory className="h-8 w-8" />
                  <div>
                    <div className="font-semibold">Industrial Grade</div>
                    <div className="text-sm opacity-90">Heavy Duty Construction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industrial Platform Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom-engineered steel platforms designed for your specific industrial requirements, 
              from light access platforms to heavy-duty mezzanine floors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformTypes.map((platform, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{platform.name}</CardTitle>
                  <Badge variant="outline" className="border-primary text-primary w-fit">
                    {platform.loadCapacity}
                  </Badge>
                  <CardDescription className="text-muted-foreground">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Typical Uses:</div>
                    {platform.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {app}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Safety-First Design Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every platform we build incorporates comprehensive safety features, exceeding UK workplace 
              safety requirements and industry best practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.standards.map((standard, standardIndex) => (
                      <div key={standardIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {standard}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our industrial steel platforms serve diverse sectors, each with unique requirements for 
                load capacity, safety standards, and environmental considerations.
              </p>
              
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Factory className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-8" />
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">15-25 Years</div>
                  <div className="text-muted-foreground">Platform Lifespan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">1-4 Weeks</div>
                  <div className="text-muted-foreground">Installation Time</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage 
                src={REAL_PHOTOS.commercialInterior1.src} 
                alt={REAL_PHOTOS.commercialInterior1.alt} 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Safety Certified</span>
                </div>
                <p className="text-sm text-muted-foreground">All platforms meet HSE standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Installation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial survey to final commissioning, our systematic approach ensures seamless 
              integration with your existing operations and minimal disruption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-foreground">Site Survey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed facility assessment and requirement analysis.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-foreground">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom engineering and safety compliance design.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-foreground">Fabrication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Precision manufacturing to exact specifications.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-foreground">Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional installation with minimal disruption.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  5
                </div>
                <CardTitle className="text-foreground">Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Testing, commissioning, and safety certification.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ongoing Support & Maintenance Services
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Protect your investment with our comprehensive maintenance programs, ensuring your platforms 
              remain safe, compliant, and operational for years to come.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Preventive Maintenance</h3>
                <p className="text-primary-foreground/80">Regular inspections and servicing</p>
              </div>
              <div className="text-center">
                <HardHat className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Safety Inspections</h3>
                <p className="text-primary-foreground/80">Annual compliance checking</p>
              </div>
              <div className="text-center">
                <Truck className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Emergency Repairs</h3>
                <p className="text-primary-foreground/80">24/7 rapid response service</p>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:01474550531" className="bg-background text-foreground hover:bg-muted">
                Platform Consultation: 01474 550531
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Industrial Platform Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to enhance your facility with custom steel platforms? Contact our engineering team 
              for a detailed consultation and quote for your industrial access solution.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
      
    </div>
  );
};

export default IndustrialSteelPlatforms;