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
import { CheckCircle, Phone, ArrowRight, FileText, Ruler, HardHat, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { REAL_PHOTOS } from "@/assets/real-photos";

const steps = [
  { num: "01", title: "Send Us Your Drawings", desc: "Email or upload your structural engineer's calculations and beam specifications. We accept PDF, DWG, and all standard formats." },
  { num: "02", title: "We Quote & Confirm", desc: "We review the spec, confirm steel grades and sizes, and provide a fixed-price quote for supply and/or installation within 24 hours." },
  { num: "03", title: "Fabrication & Delivery", desc: "Steel beams are cut, drilled, and prepared in our Gravesend workshop, then delivered to site with our Hiab crane trucks." },
  { num: "04", title: "Professional Installation", desc: "Our certified steel erectors install to your structural engineer's specification with full documentation and sign-off." },
];

const StructuralEngineerSteelBeams = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Structural Engineer Steel Beams | Fabricate & Install to Spec"
        description="Got structural engineer drawings? We fabricate and install steel beams to your exact specification. BS EN 1090 certified. Free quotes within 24hrs. Call 01474 550531."
        keywords="structural engineer steel beams, steel beam fabrication to spec, RSJ beam installation, structural steel supply, beam installation from drawings"
        canonicalUrl="https://aksteelservices.com/structural-engineer-steel-beams"
      />
      <Header />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary-hover text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-accent-foreground mb-6">Got Your Engineer's Drawings?</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Fabricate & Install to Your <span className="text-accent">Structural Engineer's Spec</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Already have structural engineer drawings and calculations? Simply send them to us and we'll supply, fabricate, and install your steel beams — exactly to specification, fully certified.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Send Your Drawings <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                  <a href="tel:01474550531" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" /> 01474 550531
                  </a>
                </Button>
              </div>
            </div>
            <LazyImage src={REAL_PHOTOS.teamInstallingBeam.src} alt={REAL_PHOTOS.teamInstallingBeam.alt} className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works — From Drawings to Installation</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A simple 4-step process from your engineer's spec to completed installation</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Card key={i} className="text-center relative">
                <CardHeader>
                  <div className="text-3xl font-bold text-accent mb-2">{s.num}</div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-muted-foreground text-sm">{s.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MidPageCTA serviceName="Steel Beam Fabrication to Spec" />

      {/* What We Need */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Need From You</h2>
              <div className="space-y-4">
                {[
                  "Structural engineer's calculations (PDF or hard copy)",
                  "Beam specification — sizes, grades, and lengths",
                  "Site address and access details",
                  "Preferred installation date (we can usually accommodate within 1-2 weeks)",
                  "Any special requirements (fire protection, painting, etc.)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, label: "Accept All Drawing Formats" },
                { icon: Ruler, label: "Cut to Exact Spec" },
                { icon: HardHat, label: "Certified Installers" },
                { icon: Shield, label: "BS EN 1090 Compliant" },
              ].map((item, i) => (
                <Card key={i} className="text-center p-6">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Steel Beam Installation", href: "/steel-beam-installation" },
              { label: "Steel Beams London", href: "/steel-beams-london" },
              { label: "RSJ Beam Prices", href: "/steel-rsj-beam-prices" },
              { label: "Loft Conversion Steel Beams", href: "/loft-conversion-steel-beams" },
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
          <QuoteForm title="Send Your Structural Drawings for a Quote" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default StructuralEngineerSteelBeams;
