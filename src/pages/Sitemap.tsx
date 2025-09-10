import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Sitemap = () => {
  const sitemapData = {
    "Main Pages": [
      { title: "Home", url: "/", description: "Steel fabrication services across Kent & London" },
      { title: "About Us", url: "/about", description: "Expert steel fabrication experience" },
      { title: "Contact", url: "/contact", description: "Get in touch for quotes and consultations" },
      { title: "FAQ", url: "/faq", description: "Frequently asked questions about our services" },
      { title: "Areas We Serve", url: "/areas-we-serve", description: "Service coverage across Kent, London & South East" },
      
    ],
    "Steel Fabrication Services": [
      { title: "Steel Fabrication Kent", url: "/steel-fabrication-kent", description: "Custom steel fabrication services in Kent" },
      { title: "Structural Steel London", url: "/structural-steel-london", description: "Structural steel solutions in London" },
      { title: "Steel Construction Gravesend", url: "/steel-construction-gravesend", description: "Steel construction services in Gravesend" },
      { title: "Steel Building Extensions Kent", url: "/steel-building-extensions-kent", description: "Steel building extensions across Kent" },
      { title: "Steel Beam Installation", url: "/steel-beam-installation", description: "Professional steel beam installation services" },
      { title: "Steel Staircase Installation", url: "/steel-staircase-installation", description: "Custom steel staircase design and installation" },
      { title: "Industrial Steel Platforms", url: "/industrial-steel-platforms", description: "Industrial steel platform construction" }
    ],
    "Specialized Services": [
      { title: "Welding Services", url: "/welding-services", description: "Professional welding services - MIG, TIG, ARC" },
      { title: "Onsite Steel Fabrication", url: "/onsite-steel-fabrication", description: "Mobile steel fabrication services" },
      { title: "3D Modeling Services", url: "/3d-modeling-services", description: "3D CAD modeling and design services" },
      { title: "Architectural Metalwork London", url: "/architectural-metalwork-london", description: "Bespoke architectural metalwork in London" },
      { title: "Crane Hire Services", url: "/crane-hire-services", description: "Crane hire and lifting services" },
      { title: "Emergency Steel Repair", url: "/emergency-steel-repair", description: "24/7 emergency steel repair services" }
    ],
    "Legal & Information": [
      { title: "Privacy Policy", url: "/privacy-policy", description: "How we handle your personal information" },
      { title: "Terms of Service", url: "/terms-of-service", description: "Terms and conditions of service" }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Sitemap | AK Steel Services - All Pages & Services"
        description="Complete sitemap of AK Steel Services website. Find all our steel fabrication services, areas we serve, and information pages easily."
        keywords="sitemap, steel services, website navigation, AK Steel Services"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Navigate through all our steel fabrication services and information pages. 
              Find exactly what you're looking for quickly and easily.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {Object.entries(sitemapData).map(([category, pages]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {pages.map((page) => (
                      <div key={page.url} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                        <Link 
                          to={page.url}
                          className="block group"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {page.title}
                            </h3>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {page.description}
                          </p>
                          <div className="text-xs text-muted-foreground mt-2 font-mono">
                            {page.url}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* XML Sitemap */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>XML Sitemap for Search Engines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Looking for the XML sitemap for search engines? This will be available once 
                  the website is deployed and indexed by search engines.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm text-foreground">
                    https://aksteelservices.com/sitemap.xml
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
    </div>
  );
};

export default Sitemap;