import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import SEOHead from "@/components/SEOHead";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Phone, ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createServiceSchema, createFAQSchema, combineSchemas } from "@/lib/schema";

const surveyFaqs = [
  { q: "Is the site survey really free?", a: "Yes, 100% free with no obligation. We'll visit your site, assess the project, take measurements, and provide a detailed quote — all at no cost to you." },
  { q: "How long does a site survey take?", a: "Typically 30-60 minutes depending on the size and complexity of your project. We'll arrange a time that suits you." },
  { q: "What areas do you cover?", a: "We cover all of Kent, London, and the wider South East England. For larger projects, we can travel further." },
  { q: "How quickly can you visit?", a: "We aim to arrange site surveys within 48 hours of your enquiry. For urgent projects, we can often visit the same or next day." },
  { q: "What happens after the survey?", a: "You'll receive a detailed written quote within 24 hours of our visit, including a full breakdown of costs, timeline, and specifications." },
];

const FreeSiteSurvey = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="Free Site Survey | AK Steel Services Kent & London"
        description="Book a free, no-obligation site survey with AK Steel Services. We'll assess your project, take measurements, and provide a detailed quote — all at no cost."
        schemaData={combineSchemas(
          createServiceSchema("Free Site Survey", "Book a free, no-obligation site survey. We assess your project, take measurements, and provide a detailed quote at no cost."),
          createFAQSchema(surveyFaqs)
        )}
      />
      <StickyCallBar />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary-hover text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-accent font-bold uppercase tracking-wider text-sm">100% Free · No Obligation</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Book Your <span className="text-accent">FREE</span> Site Survey
              </h1>
              <p className="text-lg text-secondary-foreground/80">
                Our experienced team will visit your site, assess the project requirements, take precise measurements, 
                and provide a detailed, transparent quote — all completely free of charge.
              </p>
              <div className="space-y-3">
                {[
                  "Professional assessment by qualified engineers",
                  "Precise measurements and specifications",
                  "Detailed written quote within 24 hours",
                  "Expert advice on the best approach",
                  "No pressure, no obligation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:01474550531" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" /> Call to Book
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-2">Request Your Free Survey</h2>
              <p className="text-muted-foreground text-sm mb-6">Fill in below and we'll call you to arrange a visit</p>
              <QuickQuoteForm variant="banner" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <ShieldCheck className="h-8 w-8" />, label: "Fully Insured" },
              { icon: <Clock className="h-8 w-8" />, label: "2hr Response" },
              { icon: <Star className="h-8 w-8" />, label: "5★ Rated" },
              { icon: <CheckCircle className="h-8 w-8" />, label: "1,200+ Projects" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-primary">{item.icon}</div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-6">
            {surveyFaqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FreeSiteSurvey;
