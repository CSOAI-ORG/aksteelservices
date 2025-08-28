import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Zap, Shield, Clock } from "lucide-react";
import weldingImage from "@/assets/welding-services.jpg";

const WeldingServices = () => {
  const weldingTypes = [
    {
      name: "MIG Welding",
      description: "Metal Inert Gas welding for general fabrication work",
      applications: ["Steel fabrication", "Automotive repairs", "General metalwork"]
    },
    {
      name: "TIG Welding", 
      description: "Tungsten Inert Gas welding for precision applications",
      applications: ["Stainless steel", "Aluminum", "Precision work"]
    },
    {
      name: "ARC Welding",
      description: "Manual Metal Arc welding for heavy-duty structural work",
      applications: ["Structural steel", "Heavy fabrication", "Outdoor work"]
    },
    {
      name: "Gas Welding",
      description: "Oxy-acetylene welding for specialized applications",
      applications: ["Repair work", "Cast iron", "Brazing"]
    }
  ];

  const serviceAreas = [
    "Kent", "London", "Surrey", "Essex", "Sussex", "Hertfordshire"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional Welding Services | MIG, TIG, ARC Welding | Kent & London"
        description="Expert welding services across Kent & London. MIG, TIG, ARC welding. Certified welders, 24/7 emergency service, mobile welding units. Call 01474 550531"
        keywords="welding services, MIG welding, TIG welding, ARC welding, Kent welding, London welding, emergency welding, mobile welding"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Professional Welding Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Welding Services Across <span className="text-accent">South East England</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Professional welding services with 30+ years of experience. From precision workshop welding 
              to challenging onsite installations, our certified welders deliver quality results across 
              Kent, London, and the South East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Welding Quote
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

      {/* Welding Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Welding Capabilities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our welding expertise covers all major processes and materials. With fully certified 
                welders and state-of-the-art equipment, we handle everything from delicate precision 
                work to heavy-duty structural welding.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Certified welders for all processes",
                  "Workshop and onsite welding services",
                  "Emergency breakdown repairs 24/7",
                  "Quality testing and documentation",
                  "All steel types and specialized alloys",
                  "Pressure vessel welding qualifications",
                  "Structural welding certifications",
                  "Mobile welding units available"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero">
                  View Welding Portfolio
                </Button>
                <Button variant="outline">
                  Certifications & Standards
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={weldingImage} 
                alt="Professional welding services in South East England"
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-accent rounded-lg p-4 text-white text-center">
                  <Zap className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-bold">Expert</div>
                  <div className="text-sm opacity-90">Welders</div>
                </div>
                <div className="bg-primary rounded-lg p-4 text-white text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-bold">Certified</div>
                  <div className="text-sm opacity-90">Quality</div>
                </div>
                <div className="bg-secondary rounded-lg p-4 text-white text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-bold">24/7</div>
                  <div className="text-sm opacity-90">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welding Types */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Welding Processes
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer all major welding processes to meet your specific project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weldingTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <CardDescription>
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm mb-2">Applications:</div>
                    {type.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
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

      {/* Emergency Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-destructive rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              24/7 Emergency Welding Services
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Equipment failures happen at the worst times. Our emergency welding service provides 
              rapid response across the South East with qualified welders available around the clock.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-2">&lt; 2 Hours</div>
                <div className="text-sm opacity-90">Emergency Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Available Every Day</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Mobile</div>
                <div className="text-sm opacity-90">Fully Equipped Units</div>
              </div>
            </div>

            <Button variant="accent" size="lg" asChild>
              <a href="tel:01474550531" className="flex items-center gap-2 mx-auto w-fit">
                <Phone className="h-5 w-5" />
                Call Emergency Line: 01474 550531
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welding Services Across South East England
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mobile welding services bringing professional expertise directly to your location.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {serviceAreas.map((area) => (
              <div key={area} className="text-center p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors">
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Don't see your area listed? Contact us - we cover the entire South East region.
            </p>
            <Button variant="outline" size="lg">
              Check Coverage Area
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your Welding Services Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WeldingServices;