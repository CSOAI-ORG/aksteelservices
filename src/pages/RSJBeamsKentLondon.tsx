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
import { CheckCircle, Phone, ArrowRight, Ruler, Truck, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

const RSJBeamsKentLondon = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "RSJ Beams - Rolled Steel Joists",
    "description": "High-quality RSJ beams (Rolled Steel Joists) supplied and installed across Kent and London. Professional steel beam services for construction projects.",
    "brand": {
      "@type": "Brand",
      "name": "AK Steel Services"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "AK Steel Services",
        "telephone": "01474550531"
      }
    }
  };

  const rsjTypes = [
    { size: "152 x 89mm", weight: "16kg/m", use: "Light residential load bearing" },
    { size: "178 x 102mm", weight: "19kg/m", use: "Standard loft conversions" },
    { size: "203 x 102mm", weight: "23kg/m", use: "Medium span applications" },
    { size: "254 x 102mm", weight: "28kg/m", use: "House extensions" },
    { size: "305 x 102mm", weight: "33kg/m", use: "Large openings" },
    { size: "356 x 127mm", weight: "39kg/m", use: "Commercial applications" },
  ];

  const benefits = [
    "Same-day delivery available across Kent & London",
    "Cut to size at no extra charge",
    "Primed and painted options",
    "Structural engineer approved specifications",
    "Full installation service available",
    "Competitive trade prices",
    "Building regulation compliant",
    "Free technical advice"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="RSJ Beams Kent & London | Rolled Steel Joists | AK Steel Services"
        description="Premium RSJ beams (Rolled Steel Joists) supplied and installed across Kent & London. Same-day delivery, cut to size, competitive prices. Call 01474 550531 for a free quote."
        keywords="RSJ beams, rolled steel joists, RSJ Kent, RSJ London, steel beams, RSJ suppliers, steel beam delivery, RSJ installation"
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
                RSJ Specialists Since 2005
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                RSJ Beams Kent & London
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Premium quality Rolled Steel Joists (RSJ) supplied and installed across Kent, London, 
                and the South East. Fast delivery, competitive prices, and expert installation services.
              </p>
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
                src={REAL_PHOTOS.roofStructure2.src}
                alt="RSJ beams steel framework construction"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What are RSJ Beams */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What are RSJ Beams?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              RSJ stands for <strong>Rolled Steel Joist</strong> - a type of I-beam or H-beam used in construction 
              to provide structural support. RSJs are essential for load-bearing walls, loft conversions, 
              house extensions, and commercial building projects. At AK Steel Services, we supply and install 
              all sizes of RSJ beams across Kent and London.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Ruler className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Cut to Size</h3>
                  <p className="text-sm text-muted-foreground">Precision cutting to your exact specifications</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Truck className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Same-day delivery available</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">CE marked, BS EN certified</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Quick Turnaround</h3>
                  <p className="text-sm text-muted-foreground">Most orders within 24-48 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RSJ Sizes Table */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular RSJ Beam Sizes</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Beam Size</th>
                        <th className="px-6 py-4 text-left">Weight</th>
                        <th className="px-6 py-4 text-left">Typical Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rsjTypes.map((rsj, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                          <td className="px-6 py-4 font-medium">{rsj.size}</td>
                          <td className="px-6 py-4">{rsj.weight}</td>
                          <td className="px-6 py-4 text-muted-foreground">{rsj.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-4">
              Need a different size? We can supply any RSJ beam size to order. Contact us for availability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose AK Steel for RSJ Beams?</h2>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request RSJ Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <LazyImage
                src={REAL_PHOTOS.industrialInterior1.src}
                alt="RSJ beam installation in building"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">RSJ Delivery Areas</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We deliver RSJ beams across Kent, London, and the South East. Same-day delivery available 
            for urgent orders placed before 10am.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Gravesend", "Dartford", "Maidstone", "Canterbury", "Medway", "Bromley", 
              "Central London", "South London", "East London", "Croydon", "Surrey", "Essex"].map((area) => (
              <Badge key={area} variant="secondary" className="px-4 py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="get-quote" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Steel Beam Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional RSJ installation with crane hire included.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/steel-beam-installation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Loft Conversion Beams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">RSJ beams sized and installed for loft conversions.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/loft-conversion-steel-beams">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">House Extension Steelwork</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Complete steel solutions for home extensions.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/house-extension-steelwork">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default RSJBeamsKentLondon;