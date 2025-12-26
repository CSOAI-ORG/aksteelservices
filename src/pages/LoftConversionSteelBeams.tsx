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
import { CheckCircle, Phone, ArrowRight, Home, Ruler, FileText, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

const LoftConversionSteelBeams = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Loft Conversion Steel Beams",
    "description": "Professional steel beam supply and installation for loft conversions across Kent and London. Building regulation compliant RSJ beams.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AK Steel Services",
      "telephone": "01474550531"
    },
    "areaServed": ["Kent", "London", "South East England"]
  };

  const loftBeamSizes = [
    { type: "Dormer Loft", typical: "152x89 to 178x102mm", span: "Up to 3m" },
    { type: "Hip to Gable", typical: "178x102 to 203x102mm", span: "3-4m" },
    { type: "Mansard Loft", typical: "203x102 to 254x102mm", span: "4-5m" },
    { type: "L-Shaped Dormer", typical: "254x102 to 305x102mm", span: "5m+" },
  ];

  const processSteps = [
    { icon: <FileText className="h-8 w-8" />, title: "Structural Calculations", desc: "Work with your engineer's specifications or we can recommend one" },
    { icon: <Ruler className="h-8 w-8" />, title: "Precision Fabrication", desc: "Beams cut to exact size and primed ready for installation" },
    { icon: <Home className="h-8 w-8" />, title: "Delivery to Site", desc: "Crane or manual delivery depending on access requirements" },
    { icon: <HardHat className="h-8 w-8" />, title: "Professional Installation", desc: "Our team installs beams safely and to building regulations" },
  ];

  const faqs = [
    {
      q: "What size steel beam do I need for a loft conversion?",
      a: "The beam size depends on the span, load requirements, and type of loft conversion. A structural engineer will calculate the exact size needed. Common sizes range from 152x89mm for small dormers to 254x102mm for larger conversions."
    },
    {
      q: "How much does a loft conversion steel beam cost?",
      a: "Costs vary based on beam size and length. Supply-only starts from around £150-300 per beam. Supply and install packages are available - contact us for a free quote based on your specific requirements."
    },
    {
      q: "Do I need building regulations approval for loft conversion beams?",
      a: "Yes, any structural alterations including steel beam installation require building regulations approval. We work with building control and can provide all necessary documentation."
    },
    {
      q: "Can you install beams without a crane?",
      a: "Yes, for many loft conversions we can manually handle beams through the property. However, larger beams or difficult access may require crane hire, which we can arrange."
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Loft Conversion Steel Beams Kent & London | RSJ for Loft Conversions"
        description="Expert loft conversion steel beam supply and installation across Kent & London. Building reg compliant RSJ beams, structural calculations support. Call 01474 550531."
        keywords="loft conversion steel beams, RSJ loft conversion, steel beams for loft, loft conversion Kent, loft steel beams London, dormer steel beams"
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
                Loft Conversion Specialists
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Loft Conversion Steel Beams
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Professional steel beam supply and installation for all types of loft conversions. 
                From dormer extensions to full mansard conversions, we provide building regulation 
                compliant RSJ beams across Kent and London.
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
                alt="Loft conversion steel beam installation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Steel Beams for Every Loft Conversion Type</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're creating a simple dormer, converting a hip roof to gable, or building 
              a full mansard loft, steel beams are essential for structural support. We supply and 
              install RSJ beams that meet all building regulation requirements, working alongside 
              your builder, architect, and structural engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Beam Sizes by Loft Type */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Typical Steel Beam Sizes by Loft Type</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {loftBeamSizes.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{item.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">{item.typical}</p>
                  <p className="text-sm text-muted-foreground">Typical span: {item.span}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            * Actual beam sizes must be specified by a structural engineer based on your specific project.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Loft Conversion Beam Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <LazyImage
              src={REAL_PHOTOS.industrialInterior1.src}
              alt="Steel beam being installed for loft conversion"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose AK Steel for Loft Conversion Beams?</h2>
              <div className="grid gap-4">
                {[
                  "20+ years experience in residential steelwork",
                  "Work directly with your structural engineer",
                  "All beams primed and ready for installation",
                  "Crane hire available for difficult access",
                  "Building control documentation provided",
                  "Competitive fixed-price quotes",
                  "Fast turnaround - typically 3-5 working days",
                  "Fully insured installation team"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Loft Conversion Steel Beam FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Loft Conversion?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free quote for your loft conversion steel beams. Send us your structural 
            engineer's drawings or tell us about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a href="tel:01474550531">Call 01474 550531</a>
            </Button>
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

export default LoftConversionSteelBeams;