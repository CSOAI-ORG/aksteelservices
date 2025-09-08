import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Skeleton } from "@/components/ui/skeleton";

const QuoteForm = ({ title = "Get Your Free Quote", compact = false }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { trackFormSubmission, trackQuoteRequest } = useAnalytics();
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const serviceType = formData.get('service') as string;
    
    try {
      // Gather form values
      const name = formData.get('name') as string;
      const phone = formData.get('phone') as string;
      const email = formData.get('email') as string;
      const description = formData.get('description') as string;
      const service = (formData.get('service') as string) || '';
      const location = (formData.get('location') as string) || '';

      // Track the form submission
      trackFormSubmission('quote_request');
      trackQuoteRequest(service || 'general');

      // Send email via mailto (no backend required)
      const subject = encodeURIComponent('New Quote Request - AK Steel Services');
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nLocation: ${location}\n\nProject Description:\n${description}\n\nSubmitted from: ${window.location.href}`
      );
      window.location.href = `mailto:info@aksteelservices.com?subject=${subject}&body=${body}`;

      toast({
        title: 'Quote Request Composed',
        description: "Your email client has opened a new message to info@aksteelservices.com. Please press send to deliver your request.",
      });

      // Redirect to thank you page
      window.location.href = '/thank-you';
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          Fill out the form below and we'll provide a free, no-obligation quote within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          {isLoading && (
            <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10">
              <div className="space-y-3">
                <Skeleton className="h-4 w-48 mx-auto" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" placeholder="01474 550531" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service Type *</Label>
              <Select name="service" value={service} onValueChange={setService} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="steel-fabrication">Steel Fabrication</SelectItem>
                  <SelectItem value="structural-steel">Structural Steel</SelectItem>
                  <SelectItem value="welding">Welding Services</SelectItem>
                  <SelectItem value="onsite-fabrication">Onsite Fabrication</SelectItem>
                  <SelectItem value="crane-hire">Crane Hire & Hiab</SelectItem>
                  <SelectItem value="emergency">Emergency Services</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="service" value={service} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Project Location *</Label>
              <Select name="location" value={location} onValueChange={setLocation} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gravesend">Gravesend</SelectItem>
                  <SelectItem value="kent">Other Kent</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="surrey">Surrey</SelectItem>
                  <SelectItem value="essex">Essex</SelectItem>
                  <SelectItem value="sussex">Sussex</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="location" value={location} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea 
              id="description" 
              placeholder="Please describe your steel fabrication project in detail..."
              className="min-h-[100px]"
              required 
            />
          </div>

          <div className="space-y-3">
            <Label>Preferred Contact Method</Label>
            <RadioGroup defaultValue="phone" className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="contact-phone" />
                <Label htmlFor="contact-phone">Phone Call</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="contact-email" />
                <Label htmlFor="contact-email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                <Label htmlFor="contact-whatsapp">WhatsApp</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="flexible">Flexible timeline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending Quote Request..." : "Get My Free Quote"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy. We'll never spam you or share your details.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;