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
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, ArrowRight, Award, Users, Clock, MapPin } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { Link } from "react-router-dom";

const Index = () => {
  useAnalytics(); // Initialize analytics tracking
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Steel Services",
    "description": "Professional steel fabrication, structural steel, and welding services across Kent, London, and South East England.",
    "url": "https://aksteelservices.com",
    "telephone": "01474550531",
    "email": "info@aksteelservices.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gravesend",
      "addressRegion": "Kent",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4416",
      "longitude": "0.3706"
    },
    "openingHours": [
      "Mo-Fr 07:30-17:00",
      "Sa 07:00-13:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.4416",
        "longitude": "0.3706"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Steel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Steel Fabrication"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Steel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Welding Services"
          }
        }
      ]
    }
  };

// Testimonials removed to show only verified Google reviews

  const stats = [
    { number: "Experienced", label: "20+ Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "1000+", label: "Projects Completed", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="h-6 w-6" /> },
    { number: "100%", label: "Customer Satisfaction", icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Fabrication Services | AK Steel Services Kent & London"
        description="Professional steel fabrication, structural steel & welding services across Kent & London. Free quotes, 24/7 emergency service. Call 01474 550531"
        keywords="steel fabrication, structural steel, welding services, Kent, London, steel construction, metal fabrication"
        schemaData={localBusinessSchema}
      />
      <Header />
      <Breadcrumbs />
      
      {/* New Hero Section */}
      <NewHeroSection />
      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects 2024-2025 Section */}
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
            {/* Project 1 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={REAL_PHOTOS.craneConstruction1.src}
                  alt={REAL_PHOTOS.craneConstruction1.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>London</span>
                </div>
                <CardTitle className="text-lg">Commercial Steel Framework</CardTitle>
                <CardDescription>
                  Large-scale structural steel installation with crane lifting for a commercial development.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={REAL_PHOTOS.residentialExtension2.src}
                  alt={REAL_PHOTOS.residentialExtension2.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kent</span>
                </div>
                <CardTitle className="text-lg">Residential Rear Extension</CardTitle>
                <CardDescription>
                  Steel beam installation for a rear extension, creating open-plan living space.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={REAL_PHOTOS.teamInstallingBeam.src}
                  alt={REAL_PHOTOS.teamInstallingBeam.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Gravesend</span>
                </div>
                <CardTitle className="text-lg">RSJ Beam Installation</CardTitle>
                <CardDescription>
                  Professional RSJ beam fitting for load-bearing wall removal in a domestic property.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={REAL_PHOTOS.rooftopCraneOp.src}
                  alt={REAL_PHOTOS.rooftopCraneOp.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>South London</span>
                </div>
                <CardTitle className="text-lg">Rooftop Steel Delivery</CardTitle>
                <CardDescription>
                  Complex crane operation delivering steel beams to a rooftop construction project.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Project 5 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={REAL_PHOTOS.industrialInterior1.src}
                  alt={REAL_PHOTOS.industrialInterior1.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kent</span>
                </div>
                <CardTitle className="text-lg">Industrial Mezzanine</CardTitle>
                <CardDescription>
                  Warehouse mezzanine floor installation to double usable storage space.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Project 6 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={REAL_PHOTOS.teamCarryingBeam.src}
                  alt={REAL_PHOTOS.teamCarryingBeam.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Dartford</span>
                </div>
                <CardTitle className="text-lg">Loft Conversion Steelwork</CardTitle>
                <CardDescription>
                  Structural steel beams for a loft conversion with dormer extension.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      
      {/* Customer Reviews Section */}
      <GoogleReviews />

      {/* About/Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Proven Excellence
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-primary">AK Steel Services</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in steel fabrication, we have built a reputation 
                for excellence across Kent, London, and the South East. Our commitment to quality, 
                innovation, and customer service sets us apart.
              </p>

              <div className="grid gap-4">
                {[
                  "Advanced 3D modeling and CAD design capabilities",
                  "Fully certified welders and fabrication specialists",
                  "Modern equipment and state-of-the-art facilities",
                  "Comprehensive insurance and quality guarantees",
                  "Fast response times and flexible scheduling",
                  "Competitive pricing with transparent quotes"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/about">Learn More About Us</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:01474550531">Call for Consultation</a>
                </Button>
              </div>
            </div>

            {/* Images */}
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
                <div className="bg-primary rounded-lg p-6 text-white flex flex-col justify-center">
                  <div className="text-2xl font-bold mb-2">Free Quotes</div>
                  <div className="text-sm opacity-90">Get your project estimate within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Crane Services Section */}
      <CraneServicesSection />

      {/* Certifications Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-muted-foreground">Accredited & Certified</h3>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-6 px-10 shadow-sm">
              <img 
                src="/images/certification-logos.jpg" 
                alt="SCCS, UKAS Product Certification, and UKCA certified" 
                className="h-14 md:h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="get-quote" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <WhatsAppButton />
      
    </div>
  );
};

export default Index;
