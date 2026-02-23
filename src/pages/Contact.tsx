import { useState } from "react";
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
  Navigation,
  Upload,
  X,
  File
} from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import BrandLogo from "@/components/BrandLogo";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { trackEvent, trackWhatsAppClick } = useAnalytics();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 10MB. Please choose a smaller file.`,
          variant: "destructive",
        });
        return false;
      }
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "File type not supported",
          description: `${file.name} is not a supported file type. Please upload images (JPG, PNG, WEBP) or documents (PDF, DOC, DOCX).`,
          variant: "destructive",
        });
        return false;
      }
      
      return true;
    });
    
    if (uploadedFiles.length + validFiles.length > 5) {
      toast({
        title: "Too many files",
        description: "You can upload a maximum of 5 files.",
        variant: "destructive",
      });
      return;
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

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
    <div className="min-h-screen pb-16 md:pb-0">
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
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
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
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      name="phone"
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
                    name="company"
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
                    name="location"
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
                    name="message"
                    placeholder="Please describe your project in detail. Include dimensions, materials, timeline, and any specific requirements..."
                    rows={6}
                    required
                  />
                </div>

                {/* File Upload Section */}
                <div className="space-y-3">
                  <Label>Upload Files (Optional)</Label>
                  <p className="text-sm text-muted-foreground">
                    Attach photos, drawings, or documents related to your project (Max 5 files, 10MB each)
                  </p>
                  
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="contact-file-upload"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="contact-file-upload"
                      className="cursor-pointer flex flex-col items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm font-medium">Click to upload files</span>
                      <span className="text-xs text-muted-foreground">
                        Images (JPG, PNG, WEBP), Documents (PDF, DOC, DOCX)
                      </span>
                    </label>
                  </div>

                  {/* Display uploaded files */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <Label className="text-sm">Uploaded Files:</Label>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                          <div className="flex items-center gap-2">
                            <File className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm truncate">{file.name}</span>
                            <span className="text-xs text-muted-foreground">
                              ({(file.size / 1024 / 1024).toFixed(2)}MB)
                            </span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  onClick={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget.closest('form');
                    if (!form) return;
                    const formData = new FormData(form);
                    const firstName = (formData.get('firstName') as string || '').trim();
                    const lastName = (formData.get('lastName') as string || '').trim();
                    const email = (formData.get('email') as string || '').trim();
                    const phone = (formData.get('phone') as string || '').trim();
                    const company = (formData.get('company') as string || '').trim();
                    const message = (formData.get('message') as string || '').trim();
                    const location = (formData.get('location') as string || '').trim();
                    
                    if (!firstName || !lastName || !email || !phone || !message) {
                      toast({ title: "Please fill in all required fields", variant: "destructive" });
                      return;
                    }
                    
                    try {
                      const { error } = await supabase.from('contact_submissions').insert({
                        first_name: firstName,
                        last_name: lastName,
                        email,
                        phone,
                        company: company || null,
                        location: location || null,
                        message,
                      });
                      
                      if (error) throw error;

                      // Send email notification
                      await supabase.functions.invoke('send-quote-email', {
                        body: { firstName, lastName, email, phone, company, location, message },
                      });
                      
                      toast({
                        title: "Quote Request Sent!",
                        description: "Thank you! We'll get back to you within 24 hours.",
                      });
                      window.location.href = '/thank-you';
                    } catch (err) {
                      console.error('Form error:', err);
                      toast({
                        title: "Error",
                        description: "Something went wrong. Please call us on 01474 550531.",
                        variant: "destructive",
                      });
                    }
                  }}
                >
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
                href="https://www.google.com/maps/dir/?api=1&destination=AK+Steel+Services,+Wharf+Road,+Gravesend+DA12+2RU"
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
                href="https://waze.com/ul?q=AK+Steel+Services+Wharf+Road+Gravesend&navigate=yes"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5!2d0.3685!3d51.4440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b1a1a1a1a1a1%3A0x0!2sWharf+Road%2C+Gravesend+DA12+2RU!5e0!3m2!1sen!2suk!4v1700000000000"
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