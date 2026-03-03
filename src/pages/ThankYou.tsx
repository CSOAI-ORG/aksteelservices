import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import InnerPageHero from "@/components/InnerPageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const ThankYou = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="Thank You - Quote Request Received | AK Steel Services"
        description="Thank you for your quote request. Our steel fabrication experts will contact you within 24 hours with a detailed proposal."
        keywords="thank you, quote received, steel fabrication quote, AK Steel Services response"
      />
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground">
                Your quote request has been successfully submitted.
              </p>
            </div>

            <Card className="text-left border-border/60">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-5">
                  {[
                    { step: "1", title: "Review Your Request", desc: "Our experts will carefully review your project details and requirements." },
                    { step: "2", title: "Site Assessment (if needed)", desc: "For complex projects, we may arrange a site visit for accurate measurements." },
                    { step: "3", title: "Detailed Quote Within 24 Hours", desc: "You'll receive a comprehensive quote with timeline and pricing breakdown." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-0.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold mb-4 text-center text-sm">Need Immediate Assistance?</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a href="tel:01474550531">
                        <Phone className="h-4 w-4" /> Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a href="mailto:info@aksteelservices.com">
                        <Mail className="h-4 w-4" /> Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/gallery">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ThankYou;
