import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowUpRight, 
  Shield, 
  Ruler, 
  CheckCircle, 
  Home, 
  Building,
  Palette,
  Award,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const staircaseTypes = [
  {
    name: "Straight Staircases",
    description: "Clean, linear designs perfect for modern homes and commercial spaces with efficient use of space.",
    features: ["Minimalist design", "Space efficient", "Easy installation", "Cost effective"],
    applications: ["Modern homes", "Offices", "Retail spaces"]
  },
  {
    name: "L-Shaped Staircases",
    description: "Corner staircases with 90-degree turns, ideal for maximizing floor space and creating architectural interest.",
    features: ["Space saving", "Landing areas", "Versatile design", "Privacy enhanced"],
    applications: ["Residential homes", "Compact spaces", "Split levels"]
  },
  {
    name: "Spiral Staircases", 
    description: "Elegant curved designs that serve as architectural focal points while maximizing floor space.",
    features: ["Compact footprint", "Dramatic appeal", "Custom curvature", "Space maximizing"],
    applications: ["Feature staircases", "Lofts", "Tight spaces"]
  },
  {
    name: "Industrial Staircases",
    description: "Heavy-duty staircases for commercial and industrial environments with enhanced safety features.",
    features: ["Anti-slip treads", "High load capacity", "Weather resistant", "Safety compliant"],
    applications: ["Factories", "Warehouses", "External access"]
  }
];

const designOptions = [
  {
    title: "Open Riser Design",
    description: "Modern aesthetic with open risers creating light, airy feeling while maintaining structural integrity.",
    icon: Palette,
    benefits: ["Light transmission", "Modern appearance", "Space feeling", "Architectural feature"]
  },
  {
    title: "Glass Balustrades",
    description: "Contemporary glass panels providing safety while maintaining visual openness and natural light flow.",
    icon: Shield,
    benefits: ["Unobstructed views", "Light maximizing", "Modern aesthetic", "Easy maintenance"]
  },
  {
    title: "Timber Integration",
    description: "Combining steel structure with timber treads for warmth and natural texture in residential settings.",
    icon: Home,
    benefits: ["Warm appearance", "Natural texture", "Acoustic benefits", "Design flexibility"]
  },
  {
    title: "Custom Metalwork",
    description: "Bespoke decorative elements, handrails, and artistic features creating unique architectural statements.",
    icon: Award,
    benefits: ["Unique design", "Artistic elements", "Personalized style", "Added value"]
  }
];

const projectTypes = [
  "Residential home renovations and extensions",
  "Commercial office building feature staircases",
  "Industrial facility access and emergency routes",
  "Retail space multi-level access solutions",
  "Educational institution safety-compliant staircases",
  "Healthcare facility accessibility-focused designs",
  "Hospitality venues with architectural impact",
  "Historic building sympathetic additions"
];

const SteelStaircaseInstallation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  Bespoke Staircase Design
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Steel Staircase Design
                  <span className="text-primary"> & Installation</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Custom steel staircases combining structural excellence with stunning design. From modern 
                  residential features to commercial installations, we create staircases that inspire.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Design Consultation
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:01474550531" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    01474 550531
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">300+</div>
                  <div className="text-muted-foreground">Staircases Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Building Regs</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Modern steel staircase with glass balustrade in contemporary residential setting" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="h-8 w-8" />
                  <div>
                    <div className="font-semibold">Bespoke Design</div>
                    <div className="text-sm opacity-90">Every Staircase Unique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staircase Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Steel Staircase Types & Configurations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple straight runs to complex spiral designs, we create steel staircases tailored 
              to your space, style, and functional requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staircaseTypes.map((staircase, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{staircase.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {staircase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-foreground">Key Features:</div>
                    {staircase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                    <Separator className="my-3" />
                    <div className="text-sm font-medium text-foreground">Best for:</div>
                    <div className="text-sm text-muted-foreground">
                      {staircase.applications.join(", ")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Design Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Personalize your steel staircase with our range of design options, materials, and finishes 
              to create a perfect match for your interior or architectural style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designOptions.map((option, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{option.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Building Regulations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Regulations Compliance
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                All our steel staircases are designed and installed to meet UK Building Regulations, ensuring 
                safety, accessibility, and legal compliance for your property.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Ruler className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Dimensional Compliance</h3>
                    <p className="text-muted-foreground">Rise, going, and headroom calculations meeting Part K requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Safety Standards</h3>
                    <p className="text-muted-foreground">Handrail heights, balustrade spacing, and load requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Fire Safety</h3>
                    <p className="text-muted-foreground">Escape route planning and fire-resistant material specifications.</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Building Control Approval</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">25 Years</div>
                  <div className="text-muted-foreground">Structural Warranty</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Steel staircase installation showing precise measurements and building regulations compliance" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Certified Install</span>
                </div>
                <p className="text-sm text-muted-foreground">Building Control approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Staircase Projects We Complete
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential renovations to commercial installations, our steel staircases enhance 
              properties across London, Kent, and the South East.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectTypes.map((project, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{project}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2-5 Days</div>
              <div className="text-muted-foreground">Typical Installation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">£3k-£15k</div>
              <div className="text-muted-foreground">Project Price Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3D Models</div>
              <div className="text-muted-foreground">Pre-Installation Visualization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Professional Installation Process
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Our systematic approach ensures your steel staircase installation is completed efficiently 
              with minimal disruption to your property and daily routine.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Site Survey</h3>
                <p className="text-primary-foreground/80">Precise measurements and structural assessment</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">3D Design</h3>
                <p className="text-primary-foreground/80">Detailed modeling and regulations approval</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Fabrication</h3>
                <p className="text-primary-foreground/80">Precision manufacturing and quality control</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Installation</h3>
                <p className="text-primary-foreground/80">Professional fitting and final inspection</p>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:01474550531" className="bg-background text-foreground hover:bg-muted">
                Start Your Project: 01474 550531
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Steel Staircase Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your space with a custom steel staircase? Contact our design team for 
              a consultation and detailed quote for your project.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SteelStaircaseInstallation;