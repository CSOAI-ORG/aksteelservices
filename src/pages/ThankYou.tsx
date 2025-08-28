import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Thank You - Quote Request Received | AK Steel Services"
        description="Thank you for your quote request. Our steel fabrication experts will contact you within 24 hours with a detailed proposal."
        keywords="thank you, quote received, steel fabrication quote, AK Steel Services response"
      />
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground">
                Your quote request has been successfully submitted.
              </p>
            </div>

            <Card className="text-left">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Review Your Request</h3>
                      <p className="text-muted-foreground">
                        Our experts will carefully review your project details and requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Site Assessment (if needed)</h3>
                      <p className="text-muted-foreground">
                        For complex projects, we may arrange a site visit for accurate measurements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Detailed Quote Within 24 Hours</h3>
                      <p className="text-muted-foreground">
                        You'll receive a comprehensive quote with timeline and pricing breakdown.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 mt-8">
                  <h3 className="font-semibold mb-4 text-center">Need Immediate Assistance?</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a href="tel:01474550531">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a href="mailto:info@aksteelservices.com">
                        <Mail className="h-4 w-4" />
                        Email Us
                      </a>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a href="https://wa.me/447474550531" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild>
                <Link to="/services">
                  View Our Services
                </Link>
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