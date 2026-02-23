import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import StickyCallBar from "@/components/StickyCallBar";
import MidPageCTA from "@/components/MidPageCTA";
import TrustBar from "@/components/TrustBar";

import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Truck, Shield, Clock } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import LazyImage from "@/components/LazyImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { createServiceSchema } from "@/lib/schema";

const OnsiteSteelFabrication = () => {
  const capabilities = [
    "Mobile Welding Units",
    "Portable Cutting Equipment", 
    "Heavy Lifting Gear",
    "Emergency Repairs",
    "Site Modifications",
    "Installation Services",
    "Quality Testing",
    "Safety Compliance"
  ];

  const benefits = [
    {
      title: "No Transportation Limits",
      description: "Fabricate large structures that can't be moved from workshops"
    },
    {
      title: "Reduced Downtime", 
      description: "Minimize business interruption with onsite repairs and modifications"
    },
    {
      title: "Cost Effective",
      description: "Eliminate transportation costs for large or complex components"
    },
    {
      title: "Immediate Response",
      description: "Emergency services available 24/7 across Kent and London"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Onsite Steel Fabrication | Mobile Welding & Fabrication | Kent & London"
        description="Professional onsite steel fabrication and mobile welding services across Kent & London. Emergency repairs, site modifications, heavy installations."
        schemaData={createServiceSchema("Onsite Steel Fabrication", "Mobile fabrication services bringing professional expertise directly to your location for complex installations across Kent and London.")}
      />
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Mobile Steel Fabrication
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional <span className="text-accent">Onsite Steel Fabrication</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Advanced mobile fabrication bringing workshop-quality steel services directly 
              to your location. Emergency repairs, custom installations, and complex projects 
              completed onsite across Kent and London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Book Onsite Service
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:01474550531" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency: 01474 550531
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Mobile Fabrication Equipment
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our fleet of mobile fabrication units brings full workshop capabilities to your site. 
                Equipped with professional-grade welding equipment, cutting tools, and lifting gear, 
                we handle complex projects without compromising on quality or safety.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                <Shield className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">Fully Insured & Certified</div>
                  <div className="text-sm text-muted-foreground">Complete safety compliance for all onsite work</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <LazyImage 
                src={REAL_PHOTOS.residentialExtension1.src} 
                alt={REAL_PHOTOS.residentialExtension1.alt}
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-muted rounded-lg p-4">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-bold">Mobile Units</div>
                  <div className="text-sm text-muted-foreground">Fully Equipped</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Onsite Steel Fabrication?
            </h2>
            <p className="text-xl text-muted-foreground">
              Bringing fabrication to your location offers unique advantages for complex and time-sensitive projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-accent/10 rounded-2xl p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">24/7 Emergency Onsite Services</span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              When steel structures fail or require urgent modification, our emergency onsite 
              fabrication teams respond rapidly. Available 24/7 across Kent, London, and the South East 
              for critical repairs and urgent installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Request Emergency Service
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:01474550531">Call Emergency Line</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your Onsite Fabrication Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
      
    </div>
  );
};

export default OnsiteSteelFabrication;