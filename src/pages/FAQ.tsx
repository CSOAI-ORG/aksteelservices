import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "General Services",
    questions: [
      {
        question: "What steel fabrication services do you offer?",
        answer: "We provide comprehensive steel fabrication services including structural steelwork, architectural metalwork, welding, onsite fabrication, steel beam installation, staircases, platforms, and emergency repairs. We serve Kent, London, and the South East."
      },
      {
        question: "Do you provide both design and fabrication services?",
        answer: "Yes, we offer complete design-to-installation services including 3D modeling, structural calculations, fabrication drawings, manufacturing, and installation. Our team handles projects from concept to completion."
      },
      {
        question: "What areas do you serve?",
        answer: "We serve Kent, London, and throughout the South East of England. Our main coverage includes Gravesend, Dartford, Medway, Canterbury, Maidstone, Ashford, and surrounding areas."
      }
    ]
  },
  {
    category: "Pricing & Quotes",
    questions: [
      {
        question: "How much does steel fabrication cost?",
        answer: "Costs vary based on project complexity, steel grades, size, and specifications. We provide free, detailed quotes within 24-48 hours. Contact us with your requirements for an accurate estimate."
      },
      {
        question: "Do you provide free quotes?",
        answer: "Yes, we provide completely free, no-obligation quotes. Our team will assess your requirements and provide a detailed written estimate including materials, labor, and timelines."
      },
      {
        question: "How quickly can you provide a quote?",
        answer: "We typically provide quotes within 24-48 hours for standard projects. Complex or large-scale projects may take 3-5 days for detailed estimates. Rush quotes can be arranged if needed."
      }
    ]
  },
  {
    category: "Project Timelines",
    questions: [
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary: small fabrication jobs (1-2 weeks), medium projects like staircases (2-4 weeks), large structural work (4-12 weeks). We provide detailed timelines with every quote."
      },
      {
        question: "Do you offer emergency steel repair services?",
        answer: "Yes, we provide 24/7 emergency steel repair services throughout Kent and London. Our rapid response team can be on-site within hours for urgent structural repairs."
      },
      {
        question: "Can you work to tight deadlines?",
        answer: "We specialize in meeting challenging deadlines. With our skilled team and efficient processes, we can often accelerate projects when needed while maintaining quality standards."
      }
    ]
  },
  {
    category: "Technical & Quality",
    questions: [
      {
        question: "What steel grades do you work with?",
        answer: "We work with all standard structural steel grades including S235, S275, S355, S420, and specialized grades. We source certified steel to BS EN standards from approved suppliers."
      },
      {
        question: "Are you certified and insured?",
        answer: "Yes, we hold full public liability insurance, professional indemnity cover, and relevant certifications including welding qualifications to BS EN ISO standards."
      },
      {
        question: "Do you provide structural calculations?",
        answer: "Yes, our qualified structural engineers provide full calculations, drawings, and certifications. We ensure all work complies with current building regulations and British Standards."
      },
      {
        question: "What quality standards do you follow?",
        answer: "We follow BS EN 1090 standards for structural steelwork execution, maintain ISO quality management systems, and provide full documentation including material certificates and weld records."
      }
    ]
  },
  {
    category: "Installation & Site Work",
    questions: [
      {
        question: "Do you provide installation services?",
        answer: "Yes, we provide complete installation services with our qualified site teams. We handle lifting equipment, site safety, and coordination with other trades as needed."
      },
      {
        question: "Can you work on occupied buildings?",
        answer: "Yes, we regularly work on occupied commercial and residential buildings. We coordinate carefully to minimize disruption and maintain safe working conditions."
      },
      {
        question: "Do you need planning permission for steel work?",
        answer: "Planning requirements vary by project type and location. We can advise on requirements and assist with applications. Some structural repairs may fall under permitted development."
      }
    ]
  }
];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState("General Services");

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Frequently Asked Questions - Steel Fabrication | AK Steel Services"
        description="Get answers to common questions about steel fabrication services, pricing, timelines, and quality standards. Expert advice from 30+ years experience in Kent and London."
        keywords="steel fabrication FAQ, structural steel questions, welding services information, steel construction costs, Kent steel services"
      />
      <Header />
      <Breadcrumbs />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Get answers to common questions about our steel fabrication services, 
                pricing, timelines, and quality standards across Kent and London.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Filter */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {faqData.map((category) => (
                    <Button
                      key={category.category}
                      variant={selectedCategory === category.category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.category)}
                      className="mb-2"
                    >
                      {category.category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{selectedCategory}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData
                      .find(cat => cat.category === selectedCategory)
                      ?.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* Still Have Questions CTA */}
              <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary-glow/5">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Can't find the answer you're looking for? Our experienced team is ready to help. 
                    Contact us directly for personalized assistance with your steel fabrication project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="flex items-center gap-2">
                      <a href="tel:01474550531">
                        <Phone className="h-4 w-4" />
                        Call 01474 550531
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex items-center gap-2">
                      <a href="mailto:info@aksteelservices.com">
                        <MessageCircle className="h-4 w-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
};

export default FAQ;