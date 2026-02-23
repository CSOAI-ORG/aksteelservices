import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import SEOHead from "@/components/SEOHead";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, ClipboardList, Search, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <ClipboardList className="h-10 w-10" />,
    number: "01",
    title: "Get In Touch",
    description: "Call us, fill in our quick form, or WhatsApp us. Tell us about your project and we'll give you an initial idea of costs and timeline.",
  },
  {
    icon: <Search className="h-10 w-10" />,
    number: "02",
    title: "Free Site Survey",
    description: "We visit your site at a time that suits you — completely free. We take measurements, assess requirements, and discuss your options.",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    number: "03",
    title: "Fabrication & Delivery",
    description: "We fabricate your steelwork to exact specifications in our workshop, then deliver to site using our own transport and crane equipment.",
  },
  {
    icon: <CheckCircle className="h-10 w-10" />,
    number: "04",
    title: "Professional Installation",
    description: "Our certified team installs your steelwork safely and to building regulation standards. We clean up and ensure you're 100% satisfied.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="How It Works | AK Steel Services | Simple 4-Step Process"
        description="From first call to finished installation — see how AK Steel Services delivers professional steelwork in 4 simple steps. Free site surveys available."
      />
      <StickyCallBar />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            How It Works — <span className="text-accent">4 Simple Steps</span>
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            We make steel fabrication and installation straightforward. No jargon, no hidden costs.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start group">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-accent uppercase tracking-wider">Step {step.number}</p>
                  <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90">Get a free quote in 60 seconds or call us directly</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:01474550531" className="flex items-center gap-2"><Phone className="h-4 w-4" /> 01474 550531</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Quote */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-lg">
          <h3 className="text-2xl font-bold text-center mb-6">Quick Quote Form</h3>
          <QuickQuoteForm variant="banner" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HowItWorks;
