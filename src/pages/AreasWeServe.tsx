import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AreasWeServe = () => {
  const serviceAreas = [
    {
      region: "Kent",
      mainCities: ["Canterbury", "Maidstone", "Ashford", "Dover", "Folkestone"],
      coverage: "Complete coverage across all Kent boroughs and districts",
      responseTime: "Same day response within 30 miles",
      description: "As our home base, we provide comprehensive steel fabrication services throughout Kent with our fastest response times and most competitive rates.",
      projects: "500+ completed projects"
    },
    {
      region: "London",
      mainCities: ["Central London", "South London", "East London", "Greenwich", "Croydon"],
      coverage: "All London boroughs with specialist urban project experience",
      responseTime: "24-48 hour response across Greater London",
      description: "Extensive experience in London's complex urban environment, including heritage buildings, modern developments, and commercial projects.",
      projects: "300+ completed projects"
    },
    {
      region: "South East England",
      mainCities: ["Dartford", "Gravesend", "Medway", "Essex borders", "Surrey borders"],
      coverage: "Strategic coverage of the South East corridor",
      responseTime: "48 hour response within coverage area",
      description: "Serving the wider South East with the same quality standards and professional service that has built our reputation.",
      projects: "200+ completed projects"
    }
  ];

  const serviceTypes = [
    "Structural Steel Installation",
    "Steel Beam Fabrication",
    "Architectural Metalwork",
    "Welding Services",
    "Emergency Steel Repairs",
    "Steel Building Extensions",
    "Industrial Platforms",
    "Steel Staircase Installation",
    "Onsite Steel Fabrication",
    "3D Modeling & Design"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Areas We Serve - Steel Fabrication Kent, London & South East | AK Steel Services"
        description="Professional steel fabrication services across Kent, London & South East England. Fast response times, local expertise, 500+ completed projects. Same day response within 30 miles of Kent."
        keywords="steel fabrication Kent, structural steel London, steel services South East, Gravesend steel fabrication, Canterbury steel work, Maidstone structural steel"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Serving Kent, London & South East England
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Areas We <span className="text-accent">Serve</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Professional steel fabrication services across Kent, London, and the South East. 
              Over 30+ years of local expertise with fast response times and competitive pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="#service-areas">
                  <MapPin className="h-5 w-5 mr-2" />
                  Find Your Area
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href="tel:01474550531">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 01474 550531
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Areas */}
      <section id="service-areas" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Service Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive steel fabrication coverage with local expertise and rapid response times
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl">{area.region}</CardTitle>
                    <Badge variant="secondary">{area.projects}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      Main Cities & Towns
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.mainCities.map((city, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Response Time
                    </h4>
                    <p className="text-sm text-muted-foreground">{area.responseTime}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Coverage</h4>
                    <p className="text-sm text-muted-foreground">{area.coverage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Not sure if we cover your area?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to discuss your project - we often work outside our main areas for the right projects
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services Available in <span className="text-primary">All Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete steel fabrication solutions delivered to your location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceTypes.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          {/* Coverage Map */}
          <div className="bg-background rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Coverage Map</h3>
            <div className="bg-muted/50 rounded-lg p-8 mb-6">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-muted-foreground">
                Interactive coverage map coming soon. Contact us to confirm service availability in your specific location.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-primary/10 rounded p-4">
                <div className="font-semibold text-primary">Kent</div>
                <div className="text-muted-foreground">Primary coverage area</div>
              </div>
              <div className="bg-secondary/10 rounded p-4">
                <div className="font-semibold text-secondary">London</div>
                <div className="text-muted-foreground">Extended coverage</div>
              </div>
              <div className="bg-accent/10 rounded p-4">
                <div className="font-semibold text-accent">South East</div>
                <div className="text-muted-foreground">Regional coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default AreasWeServe;