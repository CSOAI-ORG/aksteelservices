import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BrandLogo from "@/components/BrandLogo";
import { Award, Users, Clock, CheckCircle, Shield, Wrench, Building } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Andrew Knight",
      role: "Founder & Managing Director",
      experience: "30+ years",
      specialization: "Structural Steel Design & Project Management"
    },
    {
      name: "Michael Thompson",
      role: "Lead Fabricator",
      experience: "25+ years",
      specialization: "Precision Steel Fabrication & Welding"
    },
    {
      name: "Sarah Williams",
      role: "Project Coordinator",
      experience: "15+ years",
      specialization: "Client Relations & Quality Assurance"
    }
  ];

  const certifications = [
    "Certified Welding Inspector (CWI)",
    "Construction Skills Certification Scheme (CSCS)",
    "ISO 9001:2015 Quality Management",
    "CE Marking Compliance",
    "Health & Safety Executive (HSE) Approved",
    "Federation of Master Builders (FMB) Member"
  ];

  const milestones = [
    { year: "1993", event: "AK Steel Services founded in Kent" },
    { year: "2000", event: "Expanded operations to London market" },
    { year: "2005", event: "Introduced 3D CAD modeling services" },
    { year: "2010", event: "Completed 500th major project" },
    { year: "2015", event: "Achieved ISO 9001:2015 certification" },
    { year: "2020", event: "Launched emergency steel repair service" },
    { year: "2023", event: "Celebrating 30 years of excellence" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About AK Steel Services | 30+ Years Steel Fabrication Experience"
        description="Learn about AK Steel Services - 30+ years of steel fabrication expertise. Meet our team, view certifications, and discover why we're Kent & London's trusted steel specialists."
        keywords="about AK Steel Services, steel fabrication company, Kent steel fabricators, experienced welders, steel construction team"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Established 1993
            </Badge>
            <BrandLogo className="mx-auto mb-4" width={160} height={40} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">AK Steel Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over three decades, we've been the trusted name in steel fabrication across Kent, 
              London, and the South East. Our commitment to excellence, innovation, and customer 
              satisfaction has made us industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1993 by Andrew Knight, AK Steel Services began as a small steel 
                  fabrication workshop in Kent with a simple mission: to deliver exceptional 
                  quality steel solutions with uncompromising attention to detail.
                </p>
                <p>
                  What started as a one-man operation has grown into a leading steel fabrication 
                  company serving clients across Kent, London, and the South East. Our success 
                  is built on three decades of experience, continuous innovation, and an 
                  unwavering commitment to our customers.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with cutting-edge technology, 
                  including advanced 3D CAD modeling and modern fabrication equipment, to 
                  deliver projects that exceed expectations.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="text-center pb-2">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-2xl">30+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center pb-2">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-2xl">1000+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Certifications</span> & Accreditations
            </h2>
            <p className="text-xl text-muted-foreground">
              Our qualifications ensure you receive the highest standards of workmanship and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Three decades of growth, innovation, and excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{milestone.year}</div>
                    <div className="text-muted-foreground">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference that 30 years of expertise makes. Contact us today 
            for your steel fabrication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:01474550531">Call 01474 550531</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;