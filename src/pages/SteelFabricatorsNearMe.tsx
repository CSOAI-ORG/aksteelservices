import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, MapPin, Star, Clock, Shield, ArrowRight, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

const SteelFabricatorsNearMe = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Steel Services - Steel Fabricators",
    "description": "Professional steel fabricators serving Kent, London, and the South East. Custom steel fabrication, structural steelwork, welding services.",
    "telephone": "01474550531",
    "email": "info@aksteelservices.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit A, Wharf Road",
      "addressLocality": "Gravesend",
      "addressRegion": "Kent",
      "postalCode": "DA12 2RU",
      "addressCountry": "UK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12"
    },
    "openingHours": ["Mo-Fr 07:30-17:00", "Sa 07:00-13:00"]
  };

  const services = [
    { title: "Structural Steelwork", desc: "Beams, columns, and frameworks for construction", link: "/structural-steel-london" },
    { title: "Steel Beam Installation", desc: "RSJ beams cut to size and installed", link: "/steel-beam-installation" },
    { title: "Welding Services", desc: "MIG, TIG, and ARC welding", link: "/welding-services" },
    { title: "Architectural Metalwork", desc: "Stairs, balconies, and railings", link: "/architectural-metalwork-london" },
    { title: "Steel Staircases", desc: "Custom spiral and straight staircases", link: "/steel-staircase-installation" },
    { title: "Industrial Platforms", desc: "Mezzanines and walkways", link: "/industrial-steel-platforms" },
  ];

  const localAreas = [
    { area: "Gravesend", distance: "Headquarters", postcode: "DA11, DA12" },
    { area: "Dartford", distance: "10 mins", postcode: "DA1, DA2" },
    { area: "Northfleet", distance: "5 mins", postcode: "DA11" },
    { area: "Swanscombe", distance: "8 mins", postcode: "DA10" },
    { area: "Greenhithe", distance: "12 mins", postcode: "DA9" },
    { area: "Rochester", distance: "15 mins", postcode: "ME1, ME2" },
    { area: "Chatham", distance: "18 mins", postcode: "ME4, ME5" },
    { area: "Gillingham", distance: "20 mins", postcode: "ME7, ME8" },
    { area: "Bromley", distance: "25 mins", postcode: "BR1, BR2" },
    { area: "Bexley", distance: "20 mins", postcode: "DA5, DA6" },
    { area: "Maidstone", distance: "30 mins", postcode: "ME14, ME15" },
    { area: "Sevenoaks", distance: "30 mins", postcode: "TN13, TN14" },
  ];

  const whyLocal = [
    { icon: <Clock className="h-6 w-6" />, title: "Faster Response", desc: "Quick site visits and rapid turnaround" },
    { icon: <MapPin className="h-6 w-6" />, title: "Local Knowledge", desc: "We know Kent's access and regulations" },
    { icon: <Shield className="h-6 w-6" />, title: "Reliable Service", desc: "20+ years serving the local community" },
    { icon: <Star className="h-6 w-6" />, title: "Trusted Reputation", desc: "5-star rated on Google" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Fabricators Near Me | Kent & London | AK Steel Services"
        description="Looking for steel fabricators near you? AK Steel Services in Gravesend, Kent provides custom steel fabrication across Kent & London. Call 01474 550531."
        keywords="steel fabricators near me, steel fabrication Kent, steel fabricators London, local steel fabricators, custom steel work, structural steel fabricators"
        schemaData={schemaData}
      />
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-1" />
                Local Steel Fabricators
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Steel Fabricators Near You
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Looking for professional steel fabricators near you? Based in Gravesend, Kent, 
                AK Steel Services provides expert steel fabrication, welding, and installation 
                services across Kent, London, and the South East.
              </p>
              <div className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5" />
                <span>Unit A, Wharf Road, Gravesend, Kent DA12 2RU</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:01474550531">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 01474 550531
                  </a>
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <LazyImage
                src={REAL_PHOTOS.commercialInterior1.src}
                alt="Steel fabrication workshop"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose a Local Steel Fabricator?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyLocal.map((item, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Steel Fabrication Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From simple steel beams to complex structural frameworks, we provide comprehensive 
            steel fabrication services for residential, commercial, and industrial projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Areas We Serve</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Based in Gravesend, we're ideally located to serve customers across Kent and into London. 
            Here are some of the areas we regularly work in:
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {localAreas.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-semibold text-primary">{item.area}</h3>
                  <p className="text-sm text-muted-foreground">{item.distance}</p>
                  <p className="text-xs text-muted-foreground">{item.postcode}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/areas-we-serve">View All Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose AK Steel */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <LazyImage
              src={REAL_PHOTOS.roofStructure2.src}
              alt="Steel fabrication work"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose AK Steel Services?</h2>
              <div className="grid gap-3 mb-6">
                {[
                  "20+ years experience in steel fabrication",
                  "Fully equipped workshop in Gravesend",
                  "Certified welders and fabricators",
                  "Competitive pricing with transparent quotes",
                  "Fast turnaround on urgent projects",
                  "Full installation service available",
                  "Building regulation compliant work",
                  "Fully insured with public liability"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Workshop */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Workshop</h2>
            <p className="text-xl opacity-90 mb-6">
              Come and see our facilities in person. We welcome visitors to our Gravesend 
              workshop to discuss your steel fabrication requirements.
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center gap-2 text-lg mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Unit A, Wharf Road, Gravesend, DA12 2RU</span>
              </div>
              <p className="opacity-90">Mon-Fri: 7:30-17:00 | Sat: 7:00-13:00</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://maps.google.com/?q=Unit+A+Wharf+Road+Gravesend+DA12+2RU" target="_blank" rel="noopener noreferrer">
                  Get Directions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                <a href="tel:01474550531">Call to Arrange Visit</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="get-quote" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SteelFabricatorsNearMe;