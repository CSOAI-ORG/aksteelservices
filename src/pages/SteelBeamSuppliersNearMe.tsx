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
import { CheckCircle, Phone, MapPin, Truck, Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

const SteelBeamSuppliersNearMe = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Steel Services - Steel Beam Suppliers",
    "description": "Local steel beam suppliers serving Kent, London, and the South East. RSJ beams, universal beams, box sections. Same-day delivery available.",
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4416",
      "longitude": "0.3706"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12"
    }
  };

  const deliveryAreas = [
    { region: "Kent", areas: ["Gravesend", "Dartford", "Maidstone", "Medway", "Canterbury", "Ashford", "Sevenoaks", "Tunbridge Wells", "Tonbridge", "Sittingbourne", "Folkestone", "Dover"] },
    { region: "London", areas: ["Central London", "South London", "East London", "South East London", "Bromley", "Bexley", "Greenwich", "Lewisham", "Croydon", "Woolwich"] },
    { region: "South East", areas: ["Surrey", "Essex", "Sussex", "Hampshire"] }
  ];

  const products = [
    "RSJ Beams (Rolled Steel Joists)",
    "Universal Beams (UB)",
    "Universal Columns (UC)",
    "Parallel Flange Channels (PFC)",
    "Box Sections (RHS/SHS)",
    "Steel Angles",
    "Steel Plates",
    "Steel Posts and Columns"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Beam Suppliers Near Me | Kent & London | AK Steel Services"
        description="Local steel beam suppliers in Kent & London. RSJ beams, universal beams, box sections in stock. Same-day delivery, trade prices. Call 01474 550531."
        keywords="steel beam suppliers near me, steel suppliers Kent, steel suppliers London, RSJ suppliers, steel beam delivery, local steel suppliers"
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
                Local Steel Suppliers
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Steel Beam Suppliers Near You
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Looking for steel beam suppliers near you? Based in Gravesend, Kent, we supply 
                high-quality steel beams across Kent, London, and the South East with same-day 
                delivery available.
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
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/contact">Get Quick Quote</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <LazyImage
                src={REAL_PHOTOS.steelStock1.src}
                alt="Steel beam stock yard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose a Local Steel Supplier?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <Truck className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Same-Day Delivery</h3>
                <p className="text-sm text-muted-foreground">Order before 10am for same-day delivery</p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">Quotes within hours, not days</p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Local Knowledge</h3>
                <p className="text-sm text-muted-foreground">We know Kent & London access issues</p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <Star className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">5-Star Rated</h3>
                <p className="text-sm text-muted-foreground">12 verified Google reviews</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Steel Beams In Stock</h2>
              <p className="text-muted-foreground mb-6">
                We hold a wide range of steel sections in stock at our Gravesend yard, ready 
                for cutting to size and delivery. All steel is CE marked and certified.
              </p>
              <div className="grid gap-3">
                {products.map((product, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{product}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Don't see what you need? We can source any steel section with short lead times.
              </p>
            </div>
            <div>
              <LazyImage
                src={REAL_PHOTOS.largeFramework1.src}
                alt="Steel beams and sections"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Steel Delivery Areas</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We deliver steel beams across Kent, London, and the South East. Delivery charges 
            are calculated based on distance and load size.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliveryAreas.map((region, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-primary">{region.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {region.areas.map((area) => (
                      <Badge key={area} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Option */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Collect From Our Yard</h2>
            <p className="text-xl opacity-90 mb-6">
              Save on delivery costs by collecting from our Gravesend yard. We'll have your 
              order cut to size and ready for collection.
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center gap-2 text-lg mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Unit A, Wharf Road, Gravesend, DA12 2RU</span>
              </div>
              <p className="opacity-90">Mon-Fri: 7:30-17:00 | Sat: 7:00-13:00</p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="https://maps.google.com/?q=Unit+A+Wharf+Road+Gravesend+DA12+2RU" target="_blank" rel="noopener noreferrer">
                Get Directions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trade Accounts */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <LazyImage
              src={REAL_PHOTOS.commercialInterior1.src}
              alt="Trade steel supply"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6">Trade Accounts Available</h2>
              <p className="text-muted-foreground mb-6">
                Are you a builder, contractor, or construction company? Open a trade account 
                with AK Steel Services for competitive pricing and credit terms.
              </p>
              <div className="grid gap-3 mb-6">
                {[
                  "Competitive trade pricing",
                  "Credit accounts for approved customers",
                  "Priority delivery scheduling",
                  "Dedicated account manager",
                  "Regular order discounts"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" asChild>
                <Link to="/contact">Apply for Trade Account</Link>
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

export default SteelBeamSuppliersNearMe;