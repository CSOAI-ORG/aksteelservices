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
import { CheckCircle, Phone, ArrowRight, Home, Building2, Maximize, PoundSterling } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

const HouseExtensionSteelwork = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Extension Steelwork",
    "description": "Professional steel fabrication and installation for house extensions across Kent and London. Rear extensions, side returns, and structural alterations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AK Steel Services",
      "telephone": "01474550531"
    },
    "areaServed": ["Kent", "London", "South East England"]
  };

  const extensionTypes = [
    {
      title: "Rear Extension Steelwork",
      description: "Steel beams and frames for single and double storey rear extensions. Create open-plan living spaces with large spans.",
      image: REAL_PHOTOS.residentialExtension1.src
    },
    {
      title: "Side Return Extensions",
      description: "Maximize your kitchen or living space by extending into the side return. Steel beams create the wide openings needed.",
      image: REAL_PHOTOS.commercialInterior1.src
    },
    {
      title: "Wrap-Around Extensions",
      description: "Combine side and rear extensions with steel framework for maximum additional floor space.",
      image: REAL_PHOTOS.largeFramework1.src
    },
    {
      title: "Structural Alterations",
      description: "Remove load-bearing walls and create open-plan layouts with properly engineered steel support.",
      image: REAL_PHOTOS.industrialInterior1.src
    }
  ];

  const services = [
    "RSJ beams for load-bearing wall removal",
    "Steel portal frames for large spans",
    "Bi-fold door steel lintels",
    "Box section frames and columns",
    "Steel goalpost frames",
    "Padstones and beam plates",
    "Full structural steel packages",
    "Supply only or supply & install"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="House Extension Steelwork Kent & London | Steel Beams for Extensions"
        description="Expert house extension steelwork across Kent & London. Steel beams for rear extensions, side returns, bi-fold doors. Building reg compliant. Call 01474 550531."
        keywords="house extension steelwork, steel beams extension, rear extension steel, side return steelwork, extension steel Kent, extension steel London"
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
                Extension Specialists
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                House Extension Steelwork
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Transform your home with professional steelwork for extensions. From single-storey 
                rear extensions to complete wrap-arounds, we supply and install all structural 
                steel across Kent, London, and the South East.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:01474550531">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 01474 550531
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <LazyImage
                src={REAL_PHOTOS.residentialExtension1.src}
                alt="House extension steel framework"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Steel for Extensions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Steel for Your House Extension?</h2>
            <p className="text-lg text-muted-foreground">
              Steel is the preferred material for modern house extensions, offering superior 
              strength-to-weight ratio, longer spans without intermediate supports, and the 
              ability to create the open-plan living spaces that homeowners want.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Maximize className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Longer Spans</h3>
                <p className="text-sm text-muted-foreground">Create wider openings without columns</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Structural Strength</h3>
                <p className="text-sm text-muted-foreground">Support upper floors and roofs safely</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Home className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Design Freedom</h3>
                <p className="text-sm text-muted-foreground">Achieve your architect's vision</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <PoundSterling className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Add Value</h3>
                <p className="text-sm text-muted-foreground">Increase your property value</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of Extension Steelwork We Provide</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {extensionTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video">
                  <LazyImage
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Extension Steelwork Services</h2>
              <p className="text-muted-foreground mb-6">
                We provide complete steelwork solutions for house extensions, from a single RSJ 
                beam to a full structural steel package. All work is fabricated to your structural 
                engineer's specifications and building regulation requirements.
              </p>
              <div className="grid gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get Extension Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <LazyImage
                src={REAL_PHOTOS.largeFramework1.src}
                alt="Steel framework for house extension"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">House Extension Steel Beam Costs</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Steel beam costs for house extensions vary based on beam size, quantity, and 
                  installation requirements. Here's a rough guide to help you budget:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Single RSJ beam (supply only)</span>
                    <span className="text-primary font-semibold">From £200</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Rear extension steel package</span>
                    <span className="text-primary font-semibold">From £800</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium">Side return steelwork</span>
                    <span className="text-primary font-semibold">From £600</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Full installation service</span>
                    <span className="text-primary font-semibold">POA</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  * Prices are indicative only. Contact us for an accurate quote based on your 
                  structural engineer's specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Extension Steelwork Service Areas</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We provide house extension steelwork services across Kent, London, and the South East. 
            Our team regularly works in these areas:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Gravesend", "Dartford", "Bromley", "Bexley", "Greenwich", "Lewisham", 
              "Maidstone", "Sevenoaks", "Tonbridge", "Tunbridge Wells", "Medway", "Canterbury",
              "South London", "East London", "Croydon", "Surrey"].map((area) => (
              <Badge key={area} variant="secondary" className="px-4 py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="get-quote" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HouseExtensionSteelwork;