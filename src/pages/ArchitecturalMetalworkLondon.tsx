import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Palette, 
  Shield, 
  Crown, 
  CheckCircle, 
  Building2, 
  Wrench,
  Star,
  MapPin,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyImage from "@/components/LazyImage";
import { REAL_PHOTOS } from "@/assets/real-photos";

const metalworkServices = [
  {
    title: "Decorative Railings & Balustrades",
    description: "Bespoke handrails, balconies, and stair railings combining safety with stunning visual appeal for London properties.",
    icon: Crown,
    features: ["Custom designs", "Period features", "Modern minimalist", "Safety compliant"]
  },
  {
    title: "Ornamental Gates & Fencing",
    description: "Elegant entrance gates, security fencing, and boundary solutions that enhance property value and kerb appeal.",
    icon: Shield,
    features: ["Automated gates", "Security integration", "Period restoration", "Weather resistant"]
  },
  {
    title: "Sculptural Features",
    description: "Artistic metalwork installations, water features, and architectural sculptures for commercial and residential spaces.",
    icon: Star,
    features: ["Artistic design", "Landmark features", "Public art", "Custom sculptures"]
  },
  {
    title: "Restoration & Conservation",
    description: "Expert restoration of historic metalwork, maintaining London's architectural heritage with authentic techniques.",
    icon: Building2,
    features: ["Heritage projects", "Listed buildings", "Period accuracy", "Conservation approved"]
  }
];

const finishOptions = [
  {
    name: "Hot Dip Galvanizing",
    description: "Superior corrosion protection with 50+ year lifespan, ideal for external architectural features.",
    durability: "50+ years",
    applications: ["External features", "Marine environments", "Heavy duty"]
  },
  {
    name: "Powder Coating",
    description: "Durable, attractive finish available in any RAL color, perfect for decorative elements.",
    durability: "15-20 years", 
    applications: ["Decorative work", "Internal features", "Color matching"]
  },
  {
    name: "Traditional Painting",
    description: "Hand-applied paint systems for heritage projects requiring period-authentic finishes.",
    durability: "5-10 years",
    applications: ["Heritage restoration", "Period properties", "Listed buildings"]
  },
  {
    name: "Patina & Weathering",
    description: "Controlled aging processes creating authentic weathered appearances for artistic installations.",
    durability: "Permanent",
    applications: ["Sculptures", "Artistic features", "Landscape integration"]
  }
];

const londonProjects = [
  "Luxury residential developments in Kensington & Chelsea",
  "Historic building restoration in City of London",
  "Commercial office buildings in Canary Wharf",
  "Boutique hotels and restaurants in Covent Garden",
  "Educational institutions across Greater London",
  "Healthcare facilities requiring specialized metalwork",
  "Cultural venues and museums",
  "High-end retail developments in Oxford Street area"
];

const ArchitecturalMetalworkLondon = () => {
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
                  Premium London Metalwork
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Architectural Metalwork
                  <span className="text-primary"> London Specialists</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Exquisite bespoke metalwork for London's most prestigious properties. From luxury residential 
                  developments to heritage restorations, we create stunning architectural features that define spaces.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  View Portfolio
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
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-muted-foreground">London Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Bespoke Design</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage 
                src={REAL_PHOTOS.roofStructure2.src} 
                alt={REAL_PHOTOS.roofStructure2.alt} 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Crown className="h-8 w-8" />
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm opacity-90">Design Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Architectural Metalwork Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining traditional craftsmanship with modern techniques to create exceptional metalwork 
              that enhances London's architectural landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metalworkServices.map((service, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Finish Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Finish Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional finishing services ensuring your metalwork withstands London's climate while 
              maintaining its aesthetic appeal for decades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {finishOptions.map((finish, index) => (
              <Card key={index} className="bg-background border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{finish.name}</CardTitle>
                  <Badge variant="outline" className="border-primary text-primary w-fit">
                    {finish.durability} lifespan
                  </Badge>
                  <CardDescription className="text-muted-foreground">
                    {finish.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Best for:</div>
                    {finish.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {app}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* London Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Prestigious London Projects
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our architectural metalwork graces some of London's most exclusive properties, from historic 
                restorations in Westminster to contemporary developments in Canary Wharf.
              </p>
              
              <div className="space-y-4">
                {londonProjects.map((project, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{project}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-8" />
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">£50k+</div>
                  <div className="text-muted-foreground">Average Project Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">25 Years</div>
                  <div className="text-muted-foreground">Minimum Guarantee</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage 
                src={REAL_PHOTOS.roofStructure1.src} 
                alt={REAL_PHOTOS.roofStructure1.alt} 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Award Winning</span>
                </div>
                <p className="text-sm text-muted-foreground">Design & craftsmanship excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bespoke Design Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial concept to final installation, our comprehensive design process ensures every detail 
              meets your vision and London's exacting standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-foreground">Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Site visit, requirement analysis, and initial design concepts discussion.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-foreground">Design & CAD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">3D modeling, technical drawings, and detailed specifications creation.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-foreground">Fabrication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Precision manufacturing using traditional and modern techniques.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-foreground">Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional installation and final quality assurance checks.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Transform Your London Property with Exceptional Metalwork
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Ready to create something extraordinary? Contact our design team to discuss your architectural 
              metalwork requirements and bring your vision to life.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Palette className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Bespoke Design</h3>
                <p className="text-primary-foreground/80">Every piece uniquely crafted</p>
              </div>
              <div className="text-center">
                <Crown className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Premium Quality</h3>
                <p className="text-primary-foreground/80">Uncompromising craftsmanship</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">25 Year Guarantee</h3>
                <p className="text-primary-foreground/80">Long-term quality assurance</p>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:01474550531" className="bg-background text-foreground hover:bg-muted">
                Design Consultation: 01474 550531
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
              Request Your Architectural Metalwork Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your bespoke metalwork project today. Our design team will work with you to create 
              exceptional architectural features for your London property.
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

export default ArchitecturalMetalworkLondon;