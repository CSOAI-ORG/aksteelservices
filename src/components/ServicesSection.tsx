import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Building, 
  Zap, 
  Truck, 
  Cog, 
  Phone,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Steel Fabrication",
      description: "Custom steel fabrication for commercial and residential projects with precision engineering and quality craftsmanship.",
      features: ["Custom Design", "Precision Cutting", "Quality Materials"],
      link: "/steel-fabrication-kent"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Structural Steel",
      description: "Structural steelwork including beams, columns, frames for building extensions and new construction projects.",
      features: ["Building Extensions", "New Construction", "Loft Conversions"],
      link: "/structural-steel-london"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Welding Services",
      description: "Professional welding services using latest techniques for all steel types with certified welders.",
      features: ["MIG/TIG Welding", "Onsite Service", "Emergency Repairs"],
      link: "/welding-services"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Onsite Fabrication",
      description: "Mobile fabrication services bringing our expertise directly to your location for complex installations.",
      features: ["Mobile Service", "Complex Installs", "Rapid Response"],
      link: "/onsite-fabrication"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Crane Hire & Hiab",
      description: "Equipment services for safe steel delivery and installation with qualified operators and modern equipment.",
      features: ["Qualified Operators", "Modern Equipment", "Safe Installation"],
      link: "/crane-hire"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Emergency Services",
      description: "24/7 emergency steel repair services for urgent structural issues and equipment breakdowns.",
      features: ["24/7 Available", "Rapid Response", "Temporary Solutions"],
      link: "/emergency-services"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Steel Services Across{" "}
            <span className="text-primary">Kent & London</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From initial design consultation to final installation, we provide complete steel fabrication 
            solutions for residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300" asChild>
                  <a href={service.link} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Need a Custom Steel Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Contact us for a free consultation and quote tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:01474550531">Call 01474 550531</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;