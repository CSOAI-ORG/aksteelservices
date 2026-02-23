import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewHeroSection from "@/components/NewHeroSection";
import ServicesSection from "@/components/ServicesSection";
import QuoteForm from "@/components/QuoteForm";
import TeamSection from "@/components/TeamSection";
import CraneServicesSection from "@/components/CraneServicesSection";
import SEOHead from "@/components/SEOHead";
import GoogleReviews from "@/components/GoogleReviews";
import { useAnalytics } from "@/hooks/useAnalytics";
import LazyImage from "@/components/LazyImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";
import TrustBar from "@/components/TrustBar";
import UrgencyBanner from "@/components/UrgencyBanner";
import MidPageCTA from "@/components/MidPageCTA";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MapPin, Home, Building } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { Link } from "react-router-dom";

const Index = () => {
  useAnalytics();
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Steel Services",
    "description": "Professional steel fabrication, structural steel, and welding services across Kent, London, and South East England.",
    "url": "https://aksteelservices.com",
    "telephone": "01474550531",
    "email": "info@aksteelservices.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Gravesend", "addressRegion": "Kent", "addressCountry": "UK" },
    "geo": { "@type": "GeoCoordinates", "latitude": "51.4416", "longitude": "0.3706" },
    "openingHours": ["Mo-Fr 07:30-17:00", "Sa 07:00-13:00"],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47" },
    "serviceArea": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "51.4416", "longitude": "0.3706" }, "geoRadius": "50000" }
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="Steel Fabrication Services | AK Steel Services Kent & London"
        description="Professional steel fabrication, structural steel & welding services across Kent & London. Free quotes, 24/7 emergency service. Call 01474 550531"
        keywords="steel fabrication, structural steel, welding services, Kent, London, steel construction, metal fabrication"
        schemaData={localBusinessSchema}
      />
      <StickyCallBar />
      <Header />
      
      {/* Hero with slideshow + inline quote form */}
      <NewHeroSection />

      {/* Trust Bar with animated counters */}
      <TrustBar />

      {/* Services Section */}
      <ServicesSection />

      {/* Residential & Commercial quick links */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/residential-steel-services" className="group block">
              <div className="relative rounded-2xl overflow-hidden h-64 bg-secondary">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${REAL_PHOTOS.residentialExtension2.src})` }}
                />
                <div className="absolute inset-0 bg-secondary/60 group-hover:bg-secondary/50 transition-colors" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8 text-secondary-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="h-5 w-5 text-accent" />
                    <Badge className="bg-accent text-accent-foreground text-xs">Popular</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Residential Services</h3>
                  <p className="text-sm text-secondary-foreground/80">Loft conversions, extensions, RSJ beams & more</p>
                </div>
              </div>
            </Link>
            <Link to="/commercial-steel-services" className="group block">
              <div className="relative rounded-2xl overflow-hidden h-64 bg-secondary">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${REAL_PHOTOS.industrialInterior1.src})` }}
                />
                <div className="absolute inset-0 bg-secondary/60 group-hover:bg-secondary/50 transition-colors" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8 text-secondary-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Commercial & Industrial</h3>
                  <p className="text-sm text-secondary-foreground/80">Frameworks, mezzanines, platforms & large-scale projects</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Urgency CTA Banner */}
      <UrgencyBanner />

      {/* Recent Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Recent Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projects Completed in <span className="text-primary">2024-2025</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our latest steel fabrication and installation projects across Kent and London.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: REAL_PHOTOS.craneConstruction1, loc: "London", title: "Commercial Steel Framework", desc: "Large-scale structural steel installation with crane lifting." },
              { src: REAL_PHOTOS.residentialExtension2, loc: "Kent", title: "Residential Rear Extension", desc: "Steel beam installation for open-plan living space." },
              { src: REAL_PHOTOS.teamInstallingBeam, loc: "Gravesend", title: "RSJ Beam Installation", desc: "Professional RSJ beam fitting for wall removal." },
              { src: REAL_PHOTOS.rooftopCraneOp, loc: "South London", title: "Rooftop Steel Delivery", desc: "Complex crane operation for rooftop steel installation." },
              { src: REAL_PHOTOS.industrialInterior1, loc: "Kent", title: "Industrial Mezzanine", desc: "Warehouse mezzanine floor to double usable space." },
              { src: REAL_PHOTOS.teamCarryingBeam, loc: "Dartford", title: "Loft Conversion Steelwork", desc: "Structural steel beams for loft conversion." },
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <LazyImage 
                    src={project.src.src}
                    alt={project.src.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{project.loc}</span>
                  </div>
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="container mx-auto px-4">
        <MidPageCTA serviceName="Steel Fabrication" />
      </div>

      {/* About/Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">Proven Excellence</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-primary">AK Steel Services</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in steel fabrication, we have built a reputation 
                for excellence across Kent, London, and the South East.
              </p>
              <div className="grid gap-3">
                {[
                  "Advanced 3D modeling and CAD design",
                  "Fully certified welders and specialists",
                  "Modern equipment and facilities",
                  "Comprehensive insurance and guarantees",
                  "Fast response and flexible scheduling",
                  "Competitive, transparent pricing"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:01474550531">Call for Consultation</a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <LazyImage 
                src={REAL_PHOTOS.commercialInterior1.src} 
                alt={REAL_PHOTOS.commercialInterior1.alt}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="grid grid-cols-2 gap-4">
                <LazyImage 
                  src={REAL_PHOTOS.residentialExtension1.src} 
                  alt={REAL_PHOTOS.residentialExtension1.alt}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="bg-primary rounded-lg p-6 text-primary-foreground flex flex-col justify-center">
                  <div className="text-2xl font-bold mb-2">Free Quotes</div>
                  <div className="text-sm opacity-90">Get your estimate within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <CraneServicesSection />

      {/* Certifications */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-muted-foreground">Accredited & Certified</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <img 
                src="/images/bs-en-1090-logo.jpg" 
                alt="BS EN 1090 certified — SCCS and UKAS Product Certification" 
                className="h-14 md:h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Quote Form */}
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

export default Index;
