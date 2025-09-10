import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Phone, Search, ArrowLeft } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Page Not Found - 404 Error | AK Steel Services"
        description="The page you're looking for doesn't exist. Find steel fabrication services, quotes, and expert advice at AK Steel Services. Serving Kent, London & South East."
        keywords="AK Steel Services, steel fabrication Kent, page not found"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl font-bold text-primary mb-6">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, 
            deleted, or you may have entered the wrong URL.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span>Go back to homepage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-primary" />
                  <span>Use the search function</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Contact our team</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/">
                <Home className="h-4 w-4 mr-2" />
                Return to Homepage
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:01474550531">
                <Phone className="h-4 w-4 mr-2" />
                Call Us: 01474 550531
              </a>
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>Looking for steel fabrication services?</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a href="/steel-fabrication-kent" className="hover:text-primary">Steel Fabrication Kent</a>
              <a href="/welding-services" className="hover:text-primary">Welding Services</a>
              <a href="/structural-steel-london" className="hover:text-primary">Structural Steel London</a>
              <a href="/contact" className="hover:text-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
