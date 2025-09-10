import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Truck, Award, Users } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import fallbackImage from "@/assets/structural-steel-construction.jpg";
import LazyImage from "@/components/LazyImage";
import WhatsAppButton from "@/components/WhatsAppButton";

const CraneHireServices = () => {
  const equipment = [
    "Mobile Cranes (20-100 tonnes)",
    "Hiab Trucks & Lorry Loaders", 
    "Telehandlers & Rough Terrain",
    "Contract Lifting Services",
    "Slinging & Rigging Equipment",
    "Specialist Steel Lifting Gear",
    "Certified Crane Operators",
    "Method Statements & Risk Assessments"
  ];

  const services = [
    {
      title: "Steel Beam Installation",
      description: "Precision lifting and positioning of structural steel beams and columns"
    },
    {
      title: "Plant & Machinery Moving",
      description: "Safe transportation and installation of heavy industrial equipment"
    },
    {
      title: "Construction Support",
      description: "Complete lifting solutions for construction and infrastructure projects"
    },
    {
      title: "Emergency Recovery",
      description: "24/7 emergency crane services for urgent lifting and recovery operations"
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
              Professional Crane Hire
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Crane Hire & <span className="text-accent">Hiab Services</span> Kent
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Professional crane hire and lifting services across Kent and London. 
              Modern fleet with certified operators for steel installation, construction, 
              and heavy lifting projects. Available 24/7 for emergency operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Crane Quote
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

      {/* Equipment Fleet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modern Crane Fleet & Equipment
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our comprehensive fleet includes mobile cranes, hiab trucks, and specialized 
                lifting equipment to handle any project size. All equipment is regularly 
                maintained and certified to the highest safety standards.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                <Award className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">CPCS & ALLMI Certified</div>
                  <div className="text-sm text-muted-foreground">All operators fully qualified and insured</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <LazyImage 
                src={REAL_PHOTOS.industrialInterior1.src} 
                alt={REAL_PHOTOS.industrialInterior1.alt}
                className="rounded-lg shadow-lg"
                fallback={fallbackImage}
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">100t</div>
                  <div className="text-sm text-muted-foreground">Max Capacity</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">Est. 1993</div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Crane & Lifting Services
            </h2>
            <p className="text-xl text-muted-foreground">
              From precision steel installation to heavy machinery moving, our crane services support every industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
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

      {/* Safety & Certification */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Safety First Approach
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Safety is our top priority in all lifting operations. Our comprehensive 
                safety procedures and qualified operators ensure every lift is completed 
                safely and efficiently.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span>CPCS Certified Operators</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span>ALLMI Approved Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Full Risk Assessments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-accent" />
                  <span>Comprehensive Insurance</span>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Emergency Crane Services</h3>
              <p className="text-muted-foreground mb-6">
                24/7 emergency crane hire available across Kent and London. 
                Rapid response for urgent lifting operations and recovery work.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:01474550531">Call Emergency Line</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your Crane Hire Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
    </div>
  );
};

export default CraneHireServices;