import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";
import MidPageCTA from "@/components/MidPageCTA";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const priceGuide = [
  { size: "152 × 89mm", weight: "16 kg/m", supplyFrom: "£45–£65/m", installed: "£350–£600" },
  { size: "178 × 102mm", weight: "19 kg/m", supplyFrom: "£55–£75/m", installed: "£400–£700" },
  { size: "203 × 133mm", weight: "25 kg/m", supplyFrom: "£65–£90/m", installed: "£500–£850" },
  { size: "254 × 146mm", weight: "31 kg/m", supplyFrom: "£80–£110/m", installed: "£600–£1,000" },
  { size: "305 × 165mm", weight: "40 kg/m", supplyFrom: "£100–£140/m", installed: "£800–£1,300" },
  { size: "356 × 171mm", weight: "51 kg/m", supplyFrom: "£130–£170/m", installed: "£1,000–£1,600" },
  { size: "406 × 178mm", weight: "60 kg/m", supplyFrom: "£150–£200/m", installed: "£1,200–£1,900" },
];

const SteelRSJPrices = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel RSJ Beam Prices 2025 | How Much Do Steel Beams Cost?"
        description="Steel RSJ beam prices guide 2025. See indicative costs for supply and installation. Get an exact quote for your project. Call AK Steel Services 01474 550531."
        keywords="steel beam prices, RSJ beam cost, how much does a steel beam cost, steel beam price per metre, RSJ prices UK"
        canonicalUrl="https://aksteelservices.com/steel-rsj-beam-prices"
      />
      <Header />
      <Breadcrumbs />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">Price Guide 2025</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Steel RSJ Beam <span className="text-accent">Prices</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            How much do steel beams cost? See our indicative price guide below, then get an exact quote for your specific project — free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Exact Quote <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:01474550531" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> 01474 550531
              </a>
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Price Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Indicative Steel Beam Prices</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Prices vary based on steel grade, length, quantity, and site access. These are indicative guide prices for standard Grade S275/S355 steel beams.
          </p>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Beam Size</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Supply Only (per metre)</TableHead>
                  <TableHead>Supplied & Installed (per beam)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceGuide.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{row.size}</TableCell>
                    <TableCell>{row.weight}</TableCell>
                    <TableCell>{row.supplyFrom}</TableCell>
                    <TableCell className="font-semibold text-primary">{row.installed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 max-w-4xl mx-auto flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20">
            <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> These are guide prices only. Your actual cost depends on beam length, access requirements, propping needs, and finishing (primer, fire protection, intumescent paint). Contact us for a precise, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      <MidPageCTA serviceName="a Steel Beam Quote" />

      {/* What Affects Price */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Affects Steel Beam Prices?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Beam Size & Weight", desc: "Larger, heavier beams cost more for materials. Your structural engineer will specify the required size." },
              { title: "Steel Grade", desc: "S275 is standard, S355 is higher strength (often needed for longer spans). S355 costs 5-10% more." },
              { title: "Delivery & Access", desc: "Tight access, upper floors, or London congestion zone can add to delivery costs." },
              { title: "Installation Complexity", desc: "Simple ground floor beams vs. loft conversions requiring crane hire — complexity affects labour costs." },
              { title: "Finishing & Protection", desc: "Red oxide primer is standard. Intumescent fire paint or galvanizing adds to the cost." },
              { title: "Quantity", desc: "Multiple beams on one project? We offer competitive package pricing for multi-beam orders." },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader><CardTitle className="text-lg">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground text-sm">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Steel Beams London", href: "/steel-beams-london" },
              { label: "RSJ Beams Kent & London", href: "/rsj-beams-kent-london" },
              { label: "Steel Beam Installation", href: "/steel-beam-installation" },
              { label: "Structural Engineer Steel Beams", href: "/structural-engineer-steel-beams" },
              { label: "Steel Beam Suppliers Near Me", href: "/steel-beam-suppliers-near-me" },
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
          <QuoteForm title="Get Your Exact Steel Beam Price" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default SteelRSJPrices;
