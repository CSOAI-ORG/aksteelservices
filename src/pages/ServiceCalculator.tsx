import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCalculator from "@/components/ServiceCalculator";
import { Badge } from "@/components/ui/badge";

const ServiceCalculatorPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Steel Fabrication Cost Calculator | Get Instant Price Estimates"
        description="Use our free steel fabrication cost calculator to get instant price estimates for your project. Calculate costs for welding, structural steel, fabrication & more."
        keywords="steel fabrication cost calculator, welding price calculator, structural steel cost, fabrication estimates, steel work pricing"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Free Cost Calculator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Steel Services Cost Calculator
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Get instant, accurate cost estimates for your steel fabrication project. 
              Our calculator considers all key factors to provide realistic pricing ranges.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ServiceCalculator />
        </div>
      </section>

      {/* Why Use Our Calculator */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Use Our Cost Calculator?
              </h2>
              <p className="text-xl text-muted-foreground">
                Get transparent, accurate pricing based on 30+ years of industry experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
                <p className="text-muted-foreground">
                  Get your cost estimate immediately without waiting for callbacks or site visits
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Accurate Pricing</h3>
                <p className="text-muted-foreground">
                  Based on real project data and current material costs from our 30+ years experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
                <p className="text-muted-foreground">
                  Use our calculator freely with no pressure - get informed before you commit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceCalculatorPage;