import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Clock, Award, ArrowRight } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import LazyImage from "@/components/LazyImage";

const SteelFabricationKent = () => {
  const services = [
    "Custom Steel Fabrication",
    "Architectural Metalwork", 
    "Industrial Components",
    "Security Gates & Railings",
    "Balconies & Balustrades",
    "Steel Staircases",
    "Machinery Housings",
    "Specialized Equipment"
  ];

  const areas = [
    "Gravesend", "Canterbury", "Maidstone", "Dartford", "Medway",
    "Ashford", "Folkestone", "Dover", "Tunbridge Wells", "Rochester"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Fabrication Kent | Expert Metal Fabrication Services"
        description="Professional steel fabrication services in Kent. Custom metalwork, structural steel, industrial components. 30+ years experience in Gravesend, Canterbury, Maidstone."
        keywords="steel fabrication Kent, metal fabrication Kent, custom steel work, Gravesend steel fabrication, Canterbury metalwork"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Steel Fabrication Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Steel Fabrication Services in <span className="text-accent">Kent</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Professional steel fabrication with 30+ years of experience serving Kent. 
              From custom designs to large-scale projects, we deliver precision engineering 
              and quality craftsmanship across the county.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Free Quote
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

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Steel Fabrication in Kent
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our Kent steel fabrication services cover every aspect of metalwork, from initial 
                design consultation through to final installation. With our workshop based in 
                Gravesend, we provide rapid response times and cost-effective solutions across Kent.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero">
                  View Our Portfolio
                </Button>
                <Button variant="outline">
                  Learn About Our Process
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <LazyImage 
                src={REAL_PHOTOS.industrialInterior1.src} 
                alt={REAL_PHOTOS.industrialInterior1.alt}
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Years in Kent</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Kent Projects</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">24hr</div>
                  <div className="text-sm text-muted-foreground">Quote Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Steel Fabrication Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From initial consultation to final installation, we ensure quality at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free site visit and project assessment with detailed requirements gathering."
              },
              {
                step: "02", 
                title: "Design & Quote",
                description: "3D modeling, technical drawings, and comprehensive quote within 24 hours."
              },
              {
                step: "03",
                title: "Fabrication",
                description: "Precision manufacturing in our modern Gravesend facility with quality controls."
              },
              {
                step: "04",
                title: "Installation",
                description: "Professional installation by certified team with full project completion."
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

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Steel Fabrication Across Kent
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive steel fabrication services throughout Kent with 
              fast response times and local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {areas.map((area) => (
              <div key={area} className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center bg-muted rounded-2xl p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">Same-Day Response Guarantee</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Contact us today and receive your detailed quote within 24 hours. 
              Emergency services available across Kent.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:01474550531">Call Now for Immediate Service</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your Kent Steel Fabrication Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SteelFabricationKent;