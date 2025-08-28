import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Truck, 
  Shield, 
  Clock, 
  CheckCircle, 
  Building, 
  Wrench,
  HardHat,
  Factory,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyImage from "@/components/LazyImage";
import { REAL_PHOTOS } from "@/assets/real-photos";

const beamTypes = [
  {
    name: "Universal Beams (UB)",
    description: "Standard I-beams for structural support, available in various sizes from 127x76mm to 914x419mm",
    applications: ["Roof structures", "Floor beams", "Portal frames"]
  },
  {
    name: "Universal Columns (UC)", 
    description: "H-section columns for vertical load bearing, sized from 152x152mm to 356x406mm",
    applications: ["Building columns", "Support posts", "Framework"]
  },
  {
    name: "Parallel Flange Channels (PFC)",
    description: "C-section beams for lighter structural applications, ranging from 75x40mm to 430x100mm",
    applications: ["Purlins", "Side rails", "Secondary framework"]
  },
  {
    name: "Rolled Steel Joists (RSJ)",
    description: "Traditional tapered flange beams for heritage and specialized applications",
    applications: ["Period buildings", "Renovations", "Custom projects"]
  }
];

const installationServices = [
  {
    title: "Site Survey & Design",
    description: "Comprehensive structural analysis and beam specification to ensure optimal load distribution and compliance with building regulations.",
    icon: HardHat,
    features: ["Structural calculations", "Load analysis", "Building regs compliance", "3D modeling"]
  },
  {
    title: "Steel Beam Supply",
    description: "Direct supply of certified structural steel beams from leading UK manufacturers, cut to exact specifications.",
    icon: Truck,
    features: ["Grade S355 steel", "CE marked", "Mill certificates", "Custom cutting"]
  },
  {
    title: "Professional Installation",
    description: "Expert installation by certified steel erectors using specialized lifting equipment and precision techniques.",
    icon: Factory,
    features: ["Crane hire included", "Certified installers", "Safety protocols", "Quality assurance"]
  },
  {
    title: "Testing & Certification",
    description: "Post-installation testing and certification to verify structural integrity and compliance with British Standards.",
    icon: Shield,
    features: ["NDT testing", "Load testing", "Compliance certificates", "Warranty included"]
  }
];

const projectExamples = [
  "Residential loft conversions with steel beam support",
  "Commercial building extensions requiring structural steel",
  "Industrial warehouse beam replacement and upgrades",
  "Retail space modifications with open-plan steel frameworks",
  "Educational facility expansions with long-span beams",
  "Healthcare building reinforcement and structural support"
];

const SteelBeamInstallation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  Professional Steel Installation
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Steel Beam Installation Services
                  <span className="text-primary"> Across London & Kent</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Expert installation of structural steel beams for residential, commercial, and industrial projects. 
                  From loft conversions to major construction, we deliver precision engineering with full certification.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Get Installation Quote
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
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Beams Installed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Certified Install</div>
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
                  <Shield className="h-8 w-8" />
                  <div>
                    <div className="font-semibold">Fully Insured</div>
                    <div className="text-sm opacity-90">£10M Public Liability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Beam Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Structural Steel Beam Types We Install
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We supply and install all standard steel beam sections, ensuring the right structural solution for your project requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beamTypes.map((beam, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{beam.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {beam.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Applications:</div>
                    {beam.applications.map((app, appIndex) => (
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

      {/* Installation Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Installation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial survey to final certification, our comprehensive service ensures your steel beam installation 
              meets all structural and safety requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationServices.map((service, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Steel Beam Installation Projects We Handle
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our experienced team has successfully completed hundreds of steel beam installations across 
                diverse sectors, from small residential conversions to major commercial developments.
              </p>
              
              <div className="space-y-4">
                {projectExamples.map((project, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{project}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-8" />
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">24-48hrs</div>
                  <div className="text-muted-foreground">Typical Installation Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">10 Year</div>
                  <div className="text-muted-foreground">Installation Warranty</div>
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
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Fast Installation</span>
                </div>
                <p className="text-sm text-muted-foreground">Most projects completed within 1-2 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Emergency Steel Beam Installation Available
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Structural emergencies requiring urgent beam installation? Our 24/7 emergency team provides 
              rapid response for critical structural support requirements.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">24/7 Response</h3>
                <p className="text-primary-foreground/80">Emergency callout available any time</p>
              </div>
              <div className="text-center">
                <Truck className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Mobile Units</h3>
                <p className="text-primary-foreground/80">Fully equipped vehicles ready to deploy</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Certified Install</h3>
                <p className="text-primary-foreground/80">All emergency work fully certified</p>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:01474550531" className="bg-background text-foreground hover:bg-muted">
                Emergency Hotline: 01474 550531
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
              Get Your Steel Beam Installation Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your steel beam installation project? Contact our expert team for a detailed 
              quote and professional consultation on your structural requirements.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SteelBeamInstallation;