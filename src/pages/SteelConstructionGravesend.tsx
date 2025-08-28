import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, MapPin, Award, Clock } from "lucide-react";
import structuralSteelImage from "@/assets/structural-steel-construction.jpg";

const SteelConstructionGravesend = () => {
  const projects = [
    "Commercial Buildings",
    "Industrial Facilities", 
    "Residential Extensions",
    "Warehouse Construction",
    "Office Developments",
    "Retail Buildings",
    "Educational Facilities",
    "Healthcare Buildings"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Local Steel Construction Experts
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Steel Construction Services in <span className="text-accent">Gravesend</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Complete steel construction solutions in Gravesend. From concept to completion, 
              our local team delivers quality steel buildings with 30+ years of expertise 
              right here in Kent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Construction Quote
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

      {/* Local Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gravesend's Premier Steel Construction Company
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in the heart of Gravesend, we understand local building requirements, 
                planning regulations, and construction challenges. Our proximity means faster 
                response times, competitive pricing, and personalized service for every project.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{project}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-semibold">Located in Gravesend - Serving All of Kent</span>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={structuralSteelImage} 
                alt="Steel construction project in Gravesend"
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">Local</div>
                  <div className="text-sm text-muted-foreground">Gravesend Base</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">Fast</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Years Local</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Steel Construction Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From planning permission to final handover, we manage every aspect of your steel construction project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Planning",
                title: "Design & Permits",
                description: "Complete project planning including architectural design, structural engineering, and planning permission assistance.",
                icon: "📋"
              },
              {
                phase: "Construction",
                title: "Build & Install", 
                description: "Professional construction using modern equipment and certified installation teams with full safety compliance.",
                icon: "🔧"
              },
              {
                phase: "Completion",
                title: "Handover & Support",
                description: "Final inspections, certification, and ongoing support with comprehensive warranty coverage.",
                icon: "✅"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <Badge variant="outline" className="mb-2">{item.phase}</Badge>
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

      {/* Local Guarantee */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-muted rounded-2xl p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Gravesend Guarantee</span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              As your local steel construction company, we guarantee rapid response, 
              competitive pricing, and quality workmanship. Being based in Gravesend 
              means we're never more than minutes away from your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Your Project Today
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:01474550531">Call for Site Visit</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your Gravesend Steel Construction Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SteelConstructionGravesend;