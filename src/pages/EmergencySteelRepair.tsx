import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Clock, AlertTriangle, Shield, Zap } from "lucide-react";
import structuralSteelImage from "@/assets/large-steel-framework-2.jpg";

const EmergencySteelRepair = () => {
  const emergencyTypes = [
    "Structural Steel Failures",
    "Building Support Issues", 
    "Machinery Breakdowns",
    "Fire Damage Repairs",
    "Impact Damage",
    "Corrosion Failures",
    "Weld Joint Failures",
    "Load-Bearing Problems"
  ];

  const responseCapabilities = [
    {
      title: "24/7 Emergency Response",
      description: "Round-the-clock availability with rapid deployment across Kent and London",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Mobile Repair Units",
      description: "Fully equipped mobile workshops bringing emergency repair capabilities to site",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Temporary Solutions",
      description: "Immediate temporary stabilization while permanent repairs are planned and executed",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Safety Assessment",
      description: "Comprehensive structural assessment and risk evaluation for emergency situations",
      icon: <AlertTriangle className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              24/7 Emergency Response
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Emergency <span className="text-white">Steel Repair</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Rapid response emergency steel repair services available 24/7 across Kent and London. 
              Professional structural assessments, temporary stabilization, and permanent repair 
              solutions for critical steel failures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-accent hover:bg-white/90">
                Call Emergency Line
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" asChild>
                <a href="tel:01474550531" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  01474 550531
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rapid Emergency Response Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When steel structures fail, immediate professional response is critical for safety 
                and business continuity. Our emergency team provides rapid assessment, temporary 
                stabilization, and permanent repair solutions 24 hours a day, 365 days a year.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {emergencyTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">Average Response Time: 2 Hours</div>
                  <div className="text-sm text-muted-foreground">Across Kent and London areas</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={structuralSteelImage} 
                alt="Emergency steel repair services"
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">2hr</div>
                  <div className="text-sm text-muted-foreground">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Capabilities */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Response Capabilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive emergency services to handle any steel structural failure or safety concern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {responseCapabilities.map((capability, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-accent">{capability.icon}</div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Response Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Our systematic approach ensures safe, effective emergency steel repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "Call",
                title: "Emergency Contact",
                description: "Call our 24/7 emergency line for immediate response and dispatch"
              },
              {
                step: "Assess", 
                title: "Site Assessment",
                description: "Rapid on-site structural assessment and safety evaluation"
              },
              {
                step: "Secure",
                title: "Temporary Stabilization",
                description: "Immediate temporary repairs to ensure safety and prevent further damage"
              },
              {
                step: "Repair",
                title: "Permanent Solution",
                description: "Professional permanent repairs using appropriate materials and techniques"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-2xl font-bold text-accent mb-2">{item.step}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertTriangle className="h-8 w-8 text-accent" />
              <span className="text-3xl font-bold">Steel Emergency? Call Now!</span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Don't wait when steel structures fail. Our emergency response team is standing by 
              24/7 to provide immediate assistance for structural steel emergencies across Kent and London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:01474550531" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency: 01474 550531
                </a>
              </Button>
              <Button variant="outline" size="lg">
                WhatsApp Emergency Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <QuoteForm title="Emergency Steel Repair Contact Form" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EmergencySteelRepair;