import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Building,
  Wrench,
  Truck,
  Navigation
} from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import WhatsAppButton from "@/components/WhatsAppButton";
import BrandLogo from "@/components/BrandLogo";

const Contact = () => {
  const { trackEvent, trackWhatsAppClick } = useAnalytics();

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      details: "01474 550531",
      action: "tel:01474550531"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get detailed project quotes",
      details: "info@aksteelservices.com",
      action: "mailto:info@aksteelservices.com"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick queries and updates",
      details: "07492 964836",
      action: "https://wa.me/447492964836"
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Head Office",
      value: "Unit A, Wharf Road, Gravesend, DA12 2RU"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Business Hours",
      value: "Mon-Fri: 7:30-17:00, Sat: 7:00-13:00"
    },
    {
      icon: <Building className="h-5 w-5" />,
      label: "Service Areas",
      value: "Kent, London, South East England"
    },
    {
      icon: <Truck className="h-5 w-5" />,
      label: "Emergency Service",
      value: "24/7 Available"
    }
  ];

  const services = [
    "Steel Fabrication",
    "Structural Steel Work",
    "Welding Services",
    "Steel Construction",
    "Onsite Fabrication",
    "Emergency Repairs",
    "3D Modeling",
    "Crane Hire",
    "Architectural Metalwork",
    "Industrial Platforms",
    "Steel Staircases",
    "Building Extensions",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact AK Steel Services | Get Free Quote | 01474 550531"
        description="Contact AK Steel Services for steel fabrication quotes. Call 01474 550531, email info@aksteelservices.com or use our contact form. Serving Kent, London & South East."
        keywords="contact steel fabrication, free steel quote, AK Steel Services contact, steel fabrication Kent contact, emergency steel repair"
      />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Get In Touch
            </Badge>
            <BrandLogo className="mx-auto mb-4" width={160} height={40} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-primary">AK Steel Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to discuss your steel fabrication project? Our expert team is here to help. 
              Get your free quote today and discover why we're Kent and London's trusted steel specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Multiple Ways</span> to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the contact method that works best for you. We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  {method.title === "WhatsApp" ? (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        trackWhatsAppClick();
                        const whatsappUrl = "https://wa.me/447492964836?text=Hi%20AK%20Steel%20Services,%20I'd%20like%20to%20discuss%20a%20project";
                        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        
                        if (isMobile) {
                          // Try app deep link first
                          const appUrl = `whatsapp://send?phone=447492964836&text=Hi%20AK%20Steel%20Services,%20I'd%20like%20to%20discuss%20a%20project`;
                          window.location.href = appUrl;
                          
                          // Fallback to web version after a short delay
                          setTimeout(() => {
                            window.open(whatsappUrl, '_blank');
                          }, 1000);
                        } else {
                          window.open(whatsappUrl, '_blank');
                        }
                      }}
                    >
                      {method.details}
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      asChild
                    >
                      <a href={method.action}>{method.details}</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get Your <span className="text-primary">Free Quote</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with 
                a detailed quote for your project.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="01474 550531"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Required *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the service you need" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Project Location *</Label>
                  <Input 
                    id="location" 
                    placeholder="e.g., Canterbury, Kent or London"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                      <SelectItem value="month">Within 1 month</SelectItem>
                      <SelectItem value="quarter">Within 3 months</SelectItem>
                      <SelectItem value="flexible">Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under £5,000</SelectItem>
                      <SelectItem value="5k-15k">£5,000 - £15,000</SelectItem>
                      <SelectItem value="15k-50k">£15,000 - £50,000</SelectItem>
                      <SelectItem value="over-50k">Over £50,000</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea 
                    id="message"
                    placeholder="Please describe your project in detail. Include dimensions, materials, timeline, and any specific requirements..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Quote Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-primary">Office</span> Information
                </h2>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {officeInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="text-primary mt-1">
                            {info.icon}
                          </div>
                          <div>
                            <div className="font-semibold">{info.label}</div>
                            <div className="text-muted-foreground">{info.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-primary">Service</span> Coverage
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Primary Areas:</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Kent (Canterbury, Maidstone, Dover, Ashford)</li>
                          <li>• London (All boroughs including Bromley)</li>
                          <li>• Gravesend and surrounding areas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Extended Coverage:</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• South East England</li>
                          <li>• Essex and Surrey</li>
                          <li>• Emergency services nationwide</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-primary">Emergency</span> Services
                </h3>
                <Card className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Wrench className="h-5 w-5 text-destructive mt-1" />
                      <div>
                        <div className="font-semibold">24/7 Emergency Steel Repair</div>
                        <div className="text-muted-foreground mb-3">
                          Structural failures, damaged beams, urgent welding repairs
                        </div>
                        <Button variant="destructive" size="sm" asChild>
                          <a href="tel:01474550531">Emergency Hotline</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Find</span> Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving Kent, London, and the South East from our base in Kent.
            </p>
          </div>
          
          {/* Get Directions Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              onClick={() => trackEvent('get_directions_click', { provider: 'google' })}
            >
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=51.4416,0.3706"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Navigation className="h-5 w-5" />
                Get Directions (Google Maps)
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              onClick={() => trackEvent('get_directions_click', { provider: 'waze' })}
            >
              <a 
                href="https://waze.com/ul?ll=51.4416,0.3706&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Navigation className="h-5 w-5" />
                Get Directions (Waze)
              </a>
            </Button>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.9999999999995!2d0.3703!3d51.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzMwLjgiTiAwwrAyMicxMy4xIkU!5e0!3m2!1sen!2suk!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AK Steel Services Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
    </div>
  );
};

export default Contact;