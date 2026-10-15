import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import TrustBar from "@/components/TrustBar";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageHero from "@/components/InnerPageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BrandLogo from "@/components/BrandLogo";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyImage from "@/components/LazyImage";
import { REAL_PHOTOS } from "@/assets/real-photos";
import { Award, Users, Clock, CheckCircle, Shield, Wrench, Building } from "lucide-react";

const About = () => {
  const certifications = [
    "Certified Welding Inspector (CWI)",
    "Construction Skills Certification Scheme (CSCS)",
    "ISO 9001:2015 Quality Management",
    "CE Marking Compliance",
    "Health & Safety Executive (HSE) Approved",
    "Federation of Master Builders (FMB) Member"
  ];

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="About AK Steel Services | Experienced Steel Fabrication Team"
        description="Learn about AK Steel Services - experienced steel fabrication expertise. Meet our team, view certifications, and discover why we're Kent & London's trusted steel specialists."
        keywords="about AK Steel Services, steel fabrication company, Kent steel fabricators, experienced welders, steel construction team"
      />
      <Header />
      <Breadcrumbs />
      
      <InnerPageHero
        badge="Experienced Team"
        title={<>About <span className="text-accent">AK Steel Services</span></>}
        description="With many years experience, we've been the trusted name in steel fabrication across Kent, London, and the South East. Our commitment to excellence, innovation, and customer sa[...]"
        variant="gradient"
      />

      <TrustBar />

      {/* Real Project Photos */}
      <section className="py-10 md:py-14 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Our Work in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[REAL_PHOTOS.craneConstruction1, REAL_PHOTOS.teamCarryingBeam, REAL_PHOTOS.residentialExtension2, REAL_PHOTOS.roofStructure2].map((photo, i) => (
              <LazyImage key={i} src={photo.src} alt={photo.alt} className="rounded-xl aspect-square object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building <span className="text-primary">Excellence</span> Since Day One
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with expertise by Adi Kraja, AK Steel Services began as a small steel 
                  fabrication workshop in Kent with a simple mission: to deliver exceptional 
                  quality steel solutions with uncompromising attention to detail.
                </p>
                <p>
                  What started as a one-man operation has grown into a leading steel fabrication 
                  company serving clients across Kent, London, and the South East.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with cutting-edge technology, 
                  including advanced 3D CAD modeling and modern fabrication equipment.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Experienced</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground">20+ Years Experience</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-2">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-2xl">1000+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Quality Guaranteed</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground">
                    Every project backed by comprehensive warranties and insurance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Quality Assurance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Certifications</span> & Accreditations
            </h2>
            <p className="text-lg text-muted-foreground">
              Our qualifications ensure you receive the highest standards of workmanship and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference our expertise makes. Contact us today 
            for your steel fabrication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:01474550531">Call 01474 550531</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default About;
