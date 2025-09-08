import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Monitor, Layers, FileText } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import LazyImage from "@/components/LazyImage";

const ThreeDModelingServices = () => {
  const software = [
    "Tekla Structures",
    "Advance Steel AutoCAD", 
    "SolidWorks 3D",
    "Inventor Professional",
    "BIM 360 Collaboration",
    "Navisworks Review",
    "SketchUp Pro",
    "Revit Integration"
  ];

  const services = [
    {
      title: "3D Structural Modeling",
      description: "Detailed 3D models of steel structures with accurate material specifications and connections",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: "Technical Drawings",
      description: "Professional 2D drawings including plans, elevations, sections, and detail drawings",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "BIM Coordination",
      description: "Building Information Modeling for seamless integration with architectural and MEP designs",
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: "Fabrication Drawings",
      description: "Workshop drawings with detailed dimensions, material lists, and assembly instructions",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Advanced 3D Design
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              3D Steel Modeling & <span className="text-accent">CAD Services</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Professional 3D modeling and CAD design services using industry-leading software. 
              From concept visualization to detailed fabrication drawings, we provide complete 
              design solutions for steel construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Request Design Quote
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

      {/* Software & Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry-Leading Design Software
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our design team uses the latest CAD and 3D modeling software to create accurate, 
                detailed models that reduce errors, improve communication, and streamline the 
                fabrication process from concept to completion.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {software.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                <Monitor className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">BIM Level 2 Compliant</div>
                  <div className="text-sm text-muted-foreground">Full compliance with UK BIM standards</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <LazyImage 
                src={REAL_PHOTOS.roofStructure2.src} 
                alt={REAL_PHOTOS.roofStructure2.alt}
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">3D</div>
                  <div className="text-sm text-muted-foreground">Modeling</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">BIM</div>
                  <div className="text-sm text-muted-foreground">Compliant</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">24hr</div>
                  <div className="text-sm text-muted-foreground">Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Design Services
            </h2>
            <p className="text-xl text-muted-foreground">
              From initial concept through to detailed fabrication drawings, we provide complete design support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-accent">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Streamlined workflow from initial concept to fabrication-ready drawings.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Concept Review",
                description: "Initial consultation and requirements gathering with architects and engineers"
              },
              {
                step: "02", 
                title: "3D Modeling",
                description: "Detailed 3D modeling using Tekla Structures with accurate material specifications"
              },
              {
                step: "03",
                title: "Design Validation",
                description: "Structural analysis, clash detection, and design optimization for fabrication"
              },
              {
                step: "04",
                title: "Drawing Production",
                description: "Complete drawing package including fabrication details and material lists"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-accent mb-2">{item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center bg-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Design Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our experienced design team is ready to bring your steel construction project to life 
              with accurate 3D models and comprehensive technical drawings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Design Project
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:01474550531">Discuss Requirements</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your 3D Modeling Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ThreeDModelingServices;