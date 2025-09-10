import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewHeroSection from "@/components/NewHeroSection";
import ServicesSection from "@/components/ServicesSection";
import QuoteForm from "@/components/QuoteForm";

import SEOHead from "@/components/SEOHead";
import GoogleReviews from "@/components/GoogleReviews";
import { useAnalytics } from "@/hooks/useAnalytics";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, ArrowRight, Award, Users, Clock } from "lucide-react";
import { REAL_PHOTOS } from "@/assets/real-photos";

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
    { number: "Est. 1993", label: "Established", icon: <Award className="h-6 w-6" /> },
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
