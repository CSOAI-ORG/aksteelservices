import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";
import MidPageCTA from "@/components/MidPageCTA";
import TrustBar from "@/components/TrustBar";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createServiceSchema } from "@/lib/schema";
import { REAL_PHOTOS } from "@/assets/real-photos";

const londonAreas = [
  "Central London", "North London", "South London", "East London", "West London",
  "Greenwich", "Lewisham", "Bromley", "Croydon", "Southwark",
  "Lambeth", "Wandsworth", "Tower Hamlets", "Hackney", "Islington",
  "Camden", "Westminster", "Kensington", "Hammersmith", "Ealing"
];

const beamServices = [
  { title: "RSJ Beam Supply", desc: "Rolled Steel Joists in all standard sizes, cut to length and delivered across London" },
  { title: "Universal Beams", desc: "UB sections from 127×76mm to 914×419mm for structural support in all building types" },
  { title: "Steel Beam Installation", desc: "Full installation service including propping, lifting, and fixing by certified steel erectors" },
  { title: "Emergency Beam Replacement", desc: "24/7 emergency service for urgent beam replacements and structural repairs across London" },
];

const SteelBeamsLondon = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Beams London | Supply & Install RSJ Beams | AK Steel"
        description="Steel beams supplied and installed across London. RSJ beams, universal beams, steel lintels. Free site survey, same-day quotes. Call 01474 550531."
        keywords="steel beams London, RSJ beams London, steel beam installation London, structural steel beams, steel lintels London"
        canonicalUrl="https://aksteelservices.com/steel-beams-london"
        schemaData={createServiceSchema("Steel Beams London", "Steel beams supplied and installed across London. RSJ beams, universal beams, steel lintels. Free site survey, same-day quotes.", ["London", "Central London", "South London", "East London", "West London"])}
      />
      <Header />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">London's Trusted Steel Beam Specialists</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Steel Beams <span className="text-accent">London</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Supply, delivery, and professional installation of structural steel beams across every London borough. From residential loft conversions to major commercial projects — we've got London covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get Free Quote <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="tel:01474550531" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" /> 01474 550531
                  </a>
                </Button>
              </div>
            </div>
            <LazyImage src={REAL_PHOTOS.craneConstruction1.src} alt={REAL_PHOTOS.craneConstruction1.alt} className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Steel Beam Services Across London</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {beamServices.map((s, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader><CardTitle className="text-xl">{s.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{s.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MidPageCTA serviceName="Steel Beams in London" />

      {/* London Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">We Deliver Steel Beams Across All London Boroughs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Same-day delivery available. Our Hiab crane trucks can deliver and offload steel beams directly to your site.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {londonAreas.map(area => (
              <div key={area} className="flex items-center gap-2 p-3 border border-border rounded-lg hover:border-primary transition-colors">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why London Builders Choose AK Steel</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Hiab Crane Delivery", desc: "We deliver and offload steel beams with our own crane trucks — no need for separate crane hire." },
              { icon: Clock, title: "Same-Day Quotes", desc: "Send us your structural engineer's drawings and receive a detailed quote within hours." },
              { icon: CheckCircle, title: "Full Installation", desc: "Not just supply — we install too. Certified steel erectors, fully insured, BS EN 1090 compliant." },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "RSJ Beams Kent & London", href: "/rsj-beams-kent-london" },
              { label: "Steel Beam Installation", href: "/steel-beam-installation" },
              { label: "Loft Conversion Steel Beams", href: "/loft-conversion-steel-beams" },
              { label: "Structural Steel London", href: "/structural-steel-london" },
              { label: "Steel RSJ Beam Prices", href: "/steel-rsj-beam-prices" },
            ].map(link => (
              <Link key={link.href} to={link.href} className="text-sm px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <QuoteForm title="Get Your London Steel Beam Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default SteelBeamsLondon;
