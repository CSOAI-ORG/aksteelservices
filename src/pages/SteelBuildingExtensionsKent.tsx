import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  Building2, 
  Shield, 
  CheckCircle, 
  Zap, 
  Clock,
  MapPin,
  TrendingUp,
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

const extensionTypes = [
  {
    name: "Single Storey Extensions",
    description: "Open-plan living spaces, kitchen extensions, and garden rooms using steel frame construction.",
    benefits: ["Large span openings", "Minimal foundations", "Quick construction", "Planning friendly"],
    timeframe: "4-8 weeks"
  },
  {
    name: "Double Storey Extensions",
    description: "Two-level additions maximizing space gain with structural steel framework support.",
    benefits: ["Maximum space gain", "Structural efficiency", "Flexible layouts", "Cost effective"],
    timeframe: "8-12 weeks"
  },
  {
    name: "Wrap-Around Extensions",
    description: "L-shaped extensions transforming multiple sides of properties with steel structural solutions.",
    benefits: ["Dramatic transformation", "Multiple room gains", "Improved flow", "Added value"],
    timeframe: "10-16 weeks"
  },
  {
    name: "Commercial Extensions",
    description: "Business premises expansions using steel construction for rapid, cost-effective solutions.",
    benefits: ["Minimal disruption", "Fast completion", "Flexible spaces", "Future adaptable"],
    timeframe: "6-12 weeks"
  }
];

const steelAdvantages = [
  {
    title: "Larger Openings",
    description: "Steel's strength enables larger unsupported spans, creating open-plan living with bi-fold doors and windows.",
    icon: Home,
    benefits: ["20m+ spans possible", "Minimal columns", "Glass wall integration", "Open-plan living"]
  },
  {
    title: "Faster Construction",
    description: "Pre-fabricated steel frames accelerate construction timelines compared to traditional masonry methods.",
    icon: Clock,
    benefits: ["50% faster build", "Weather independent", "Precise manufacturing", "Reduced disruption"]
  },
  {
    title: "Planning Benefits",
    description: "Steel construction often receives favorable planning consideration due to reduced impact and reversibility.",
    icon: TrendingUp,
    benefits: ["Planning friendly", "Lighter structures", "Minimal foundations", "Sustainable choice"]
  },
  {
    title: "Future Flexibility",
    description: "Steel frame extensions can be easily modified or extended further as needs change over time.",
    icon: Zap,
    benefits: ["Adaptable design", "Easy modifications", "Future extensions", "Investment protection"]
  }
];

const kentAreas = [
  "Canterbury and surrounding villages",
  "Maidstone and Medway towns", 
  "Gravesend and Dartford areas",
  "Tunbridge Wells and Tonbridge",
  "Ashford and Romney Marsh",
  "Dover and Deal coastal areas",
  "Sevenoaks and West Kent",
  "Thanet including Margate and Ramsgate"
];

const SteelBuildingExtensionsKent = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Steel Building Extensions Kent | House & Commercial Extensions"
        description="Steel frame building extensions across Kent. Single storey, double storey, wrap-around, and commercial extensions. Fast construction, competitive pricing."
        schemaData={createServiceSchema("Steel Building Extensions Kent", "Steel frame building extensions including single storey, double storey, and wrap-around extensions across Kent.", ["Kent", "Canterbury", "Maidstone", "Gravesend"])}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  Kent Extension Specialists
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Steel Building Extensions
                  <span className="text-primary"> Across Kent</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your Kent property with steel frame extensions. Faster construction, larger 
                  openings, and superior structural solutions for homes and businesses across the county.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Free Extension Consultation
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
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Kent Extensions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50%</div>
                  <div className="text-muted-foreground">Faster Build</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20m</div>
                  <div className="text-muted-foreground">Max Span</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage 
                src={REAL_PHOTOS.residentialExtension1.src} 
                alt={REAL_PHOTOS.residentialExtension1.alt} 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8" />
                  <div>
                    <div className="font-semibold">Steel Excellence</div>
                    <div className="text-sm opacity-90">Kent's Trusted Builders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extension Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Steel Extension Solutions for Kent Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're extending a Victorian terrace in Canterbury or adding to a modern home in 
              Maidstone, our steel frame solutions deliver superior results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extensionTypes.map((extension, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{extension.name}</CardTitle>
                  <Badge variant="outline" className="border-primary text-primary w-fit">
                    {extension.timeframe}
                  </Badge>
                  <CardDescription className="text-muted-foreground">
                    {extension.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Key Benefits:</div>
                    {extension.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steel Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Steel for Your Kent Extension?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Steel frame construction offers significant advantages over traditional building methods, 
              particularly suited to Kent's diverse property types and planning requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steelAdvantages.map((advantage, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{advantage.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {advantage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kent Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Steel Extensions Across Kent
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From historic properties in Canterbury to modern developments in Ashford, we understand 
                Kent's diverse architectural landscape and planning requirements.
              </p>
              
              <div className="space-y-4">
                {kentAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-8" />
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">£25k+</div>
                  <div className="text-muted-foreground">Typical Extension Cost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">35%</div>
                  <div className="text-muted-foreground">Average Value Increase</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage 
                src={REAL_PHOTOS.residentialExtension2.src} 
                alt={REAL_PHOTOS.residentialExtension2.alt} 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Value Addition</span>
                </div>
                <p className="text-sm text-muted-foreground">Significant property value increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning and Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planning Permission & Building Regulations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle all aspects of planning permission and building regulations approval for your 
              Kent extension, ensuring compliance with local council requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Planning Permission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Complete planning application preparation and submission to Kent councils.</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Permitted Development assessment</li>
                  <li>• Full Planning applications</li>
                  <li>• Design and Access statements</li>
                  <li>• Neighbor consultation support</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Building Regulations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Full Building Control approval and inspection coordination.</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Structural calculations</li>
                  <li>• Thermal performance</li>
                  <li>• Fire safety compliance</li>
                  <li>• Accessibility requirements</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Party Wall Agreements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional handling of Party Wall matters and neighbor relations.</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Party Wall notices</li>
                  <li>• Surveyor appointments</li>
                  <li>• Schedule of Condition</li>
                  <li>• Award agreements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Your Kent Extension Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              From initial consultation to completion, we guide you through every step of your steel 
              extension project with professional expertise and clear communication.
            </p>
            
            <div className="grid md:grid-cols-5 gap-6 mb-12">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Consultation</h3>
                <p className="text-primary-foreground/80 text-sm">Site visit and requirement assessment</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Design</h3>
                <p className="text-primary-foreground/80 text-sm">Architectural plans and 3D modeling</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Approvals</h3>
                <p className="text-primary-foreground/80 text-sm">Planning and building regulations</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Construction</h3>
                <p className="text-primary-foreground/80 text-sm">Steel frame fabrication and build</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-primary-foreground">
                  5
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Completion</h3>
                <p className="text-primary-foreground/80 text-sm">Final inspection and handover</p>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:01474550531" className="bg-background text-foreground hover:bg-muted">
                Start Your Extension: 01474 550531
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
              Get Your Kent Extension Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to extend your Kent property with steel construction? Contact our team for a free 
              consultation and detailed quote for your extension project.
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

export default SteelBuildingExtensionsKent;