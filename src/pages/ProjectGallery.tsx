import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, ArrowRight, Star, Award } from "lucide-react";
import heroSteelImage from "@/assets/hero-steel-fabrication.jpg";
import structuralSteelImage from "@/assets/structural-steel-construction.jpg";
import weldingImage from "@/assets/welding-services.jpg";

const ProjectGallery = () => {
  const projectCategories = [
    "All Projects",
    "Structural Steel",
    "Architectural Metalwork", 
    "Industrial Platforms",
    "Building Extensions",
    "Emergency Repairs",
    "Staircases",
    "Commercial"
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Commercial Office Extension",
      category: "Structural Steel",
      location: "Canterbury, Kent",
      client: "Canterbury Business Park",
      duration: "6 weeks",
      teamSize: 8,
      image: structuralSteelImage,
      description: "Complete structural steel framework for a 3-story office extension including fire-resistant coatings and architectural features.",
      highlights: [
        "500 tonnes of structural steel",
        "Fire-resistant coating application", 
        "Complex architectural requirements",
        "Completed 2 weeks ahead of schedule"
      ],
      completedYear: "2024",
      value: "£180,000"
    },
    {
      id: 2,
      title: "Heritage Building Restoration",
      category: "Architectural Metalwork",
      location: "Central London",
      client: "Historic Buildings Trust",
      duration: "12 weeks",
      teamSize: 6,
      image: heroSteelImage,
      description: "Restoration and reinforcement of Victorian-era ironwork while maintaining historical authenticity and meeting modern safety standards.",
      highlights: [
        "Heritage-compliant materials",
        "Custom fabrication techniques",
        "Conservation authority approval",
        "Specialist restoration team"
      ],
      completedYear: "2024",
      value: "£120,000"
    },
    {
      id: 3,
      title: "Industrial Manufacturing Platform",
      category: "Industrial Platforms",
      location: "Gravesend, Kent",
      client: "Kent Manufacturing Ltd",
      duration: "8 weeks",
      teamSize: 10,
      image: weldingImage,
      description: "Multi-level industrial platform system with integrated safety features for heavy machinery installation.",
      highlights: [
        "50-tonne load capacity design",
        "Safety rail systems",
        "Anti-slip flooring installation",
        "24/7 emergency support during installation"
      ],
      completedYear: "2023",
      value: "£95,000"
    }
  ];

  const projectStats = [
    { number: "1000+", label: "Projects Completed", icon: <Award className="h-6 w-6" /> },
    { number: "30+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "50+", label: "Cities Served", icon: <MapPin className="h-6 w-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      project: "Commercial Office Extension",
      client: "John Mitchell, Canterbury Business Park",
      text: "AK Steel Services delivered an exceptional office extension project. The quality of work and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      project: "Heritage Building Restoration", 
      client: "Sarah Thompson, Historic Buildings Trust",
      text: "Their expertise in heritage restoration is unmatched. They preserved the historical integrity while ensuring modern safety compliance.",
      rating: 5
    },
    {
      project: "Industrial Manufacturing Platform",
      client: "David Clarke, Kent Manufacturing Ltd",
      text: "Professional service from start to finish. The platform exceeded our load requirements and was completed on time and budget.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Portfolio & Case Studies
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Project <span className="text-accent">Gallery</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Explore our extensive portfolio of steel fabrication projects across Kent, London, and the South East. 
              From heritage restorations to modern commercial developments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Award className="h-5 w-5 mr-2" />
                View All Projects
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Request Portfolio PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing our expertise across different project types and industries
            </p>
          </div>

          <Tabs defaultValue="All Projects" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 mb-12">
              {projectCategories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs md:text-sm">
                  {category.replace(/(\w+)/, (match) => match.charAt(0).toUpperCase() + match.slice(1))}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="All Projects" className="space-y-12">
              {featuredProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="outline" className="bg-background/90">{project.completedYear}</Badge>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {project.teamSize} team members
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Project Highlights</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div>
                            <div className="font-semibold text-muted-foreground">Client</div>
                            <div>{project.client}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-muted-foreground">Project Value</div>
                            <div className="font-semibold text-primary">{project.value}</div>
                          </div>
                        </div>

                        <Button variant="outline">
                          View Case Study
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Individual category content - showing same projects for demo */}
            {projectCategories.slice(1).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-4">{category} Projects</h3>
                  <p className="text-muted-foreground mb-8">
                    Explore our specialized {category.toLowerCase()} portfolio
                  </p>
                  <Button variant="outline">
                    Contact us to discuss your {category.toLowerCase()} project
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What our clients say about their project experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="border-t pt-4">
                    <div className="font-semibold text-sm">{testimonial.client}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-primary">Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can bring your steel fabrication project to life with the same quality and expertise shown in our portfolio.
            </p>
            <Button size="lg" className="mr-4">
              Get Your Free Quote
            </Button>
            <Button variant="outline" size="lg">
              Download Portfolio PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default ProjectGallery;