import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import GoogleReviews from "@/components/GoogleReviews";
import { useAnalytics } from "@/hooks/useAnalytics";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, ArrowRight, Award, Users, Clock } from "lucide-react";
import structuralSteelImage from "@/assets/structural-steel-construction.jpg";
import weldingImage from "@/assets/welding-services.jpg";

const Index = () => {
  useAnalytics(); // Initialize analytics tracking
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AK Steel Services",
    "description": "Professional steel fabrication, structural steel, and welding services across Kent, London, and South East England. 30+ years experience.",
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

  const testimonials = [
    {
      name: "John Mitchell",
      company: "Mitchell Construction Ltd",
      text: "AK Steel Services delivered exceptional quality on our commercial project. Their structural steel work was precise and completed ahead of schedule.",
      rating: 5,
      location: "Canterbury, Kent"
    },
    {
      name: "Sarah Thompson",
      company: "Private Homeowner",
      text: "Fantastic service for our loft conversion. The team was professional, punctual, and the steel beams were perfectly fitted. Highly recommended!",
      rating: 5,
      location: "London"
    },
    {
      name: "David Clarke",
      company: "Clarke Developments",
      text: "We've used AK Steel Services for multiple projects. Their welding quality and customer service are unmatched in the Kent area.",
      rating: 5,
      location: "Gravesend, Kent"
    }
  ];

  const stats = [
    { number: "30+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "1000+", label: "Projects Completed", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="h-6 w-6" /> },
    { number: "100%", label: "Customer Satisfaction", icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Fabrication Services | AK Steel Services Kent & London"
        description="Professional steel fabrication, structural steel & welding services across Kent & London. 30+ years experience, free quotes, 24/7 emergency service. Call 01474 550531"
        keywords="steel fabrication, structural steel, welding services, Kent, London, steel construction, metal fabrication"
        schemaData={localBusinessSchema}
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <HeroSection />

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
                30+ Years of Excellence
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-primary">AK Steel Services</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over three decades of experience in steel fabrication, we have built a reputation 
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
                <Button variant="hero" size="lg">
                  Learn More About Us
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:01474550531">Call for Consultation</a>
                </Button>
              </div>
            </div>

            {/* Images */}
            <div className="grid gap-4">
              <LazyImage 
                src={structuralSteelImage} 
                alt="Structural steel construction project in London"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="grid grid-cols-2 gap-4">
                <LazyImage 
                  src={weldingImage} 
                  alt="Professional welding services"
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

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied customers across Kent and London have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View More Reviews
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-muted/50">
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

export default Index;
