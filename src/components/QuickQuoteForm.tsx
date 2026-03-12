import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface QuickQuoteFormProps {
  variant?: "hero" | "banner" | "footer";
  className?: string;
}

const QuickQuoteForm = ({ variant = "hero", className = "" }: QuickQuoteFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        first_name: name.split(" ")[0] || name,
        last_name: name.split(" ").slice(1).join(" ") || "-",
        phone,
        email: "quick-quote@placeholder.com",
        message: service || "Quick quote request",
        service: service || "General Enquiry",
      });

      if (error) throw error;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-quote-email', {
        body: {
          firstName: name.split(" ")[0] || name,
          lastName: name.split(" ").slice(1).join(" ") || "-",
          email: "quick-quote@placeholder.com",
          phone,
          message: service || "Quick quote request",
          service: service || "General Enquiry",
        },
      });

      if (emailError) throw emailError;

      setSubmitted(true);
    } catch {
      toast({ title: "Error", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-primary/10 ${className}`}>
        <CheckCircle className="h-10 w-10 text-primary" />
        <p className="font-bold text-lg text-foreground">Quote Request Received!</p>
        <p className="text-muted-foreground text-sm text-center">We'll call you back within 2 hours</p>
        <a href="tel:01474550531" className="text-primary font-semibold underline flex items-center gap-1">
          <Phone className="h-4 w-4" /> Or call us now: 01474 550531
        </a>
      </div>
    );
  }

  const isHero = variant === "hero";
  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      {isHero && (
        <p className="text-sm font-semibold text-primary mb-1">⚡ Get a Free Quote in 60 Seconds</p>
      )}
      <div className={isHero ? "flex flex-col sm:flex-row gap-2" : "flex flex-col gap-2"}>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`${isFooter ? "bg-secondary-hover border-border text-secondary-foreground placeholder:text-muted-foreground" : "bg-background"}`}
        />
        <Input
          placeholder="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={`${isFooter ? "bg-secondary-hover border-border text-secondary-foreground placeholder:text-muted-foreground" : "bg-background"}`}
        />
        <Input
          placeholder="What do you need? (optional)"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${isFooter ? "bg-secondary-hover border-border text-secondary-foreground placeholder:text-muted-foreground" : "bg-background"} ${isHero ? "sm:hidden" : ""}`}
        />
      </div>
      {isHero && (
        <Input
          placeholder="What do you need? (e.g. RSJ beam, extension steelwork)"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="hidden sm:block bg-background"
        />
      )}
      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : (
          <>
            Get Free Quote <ArrowRight className="h-4 w-4 ml-1" />
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        ✓ No obligation · ✓ Response within 2 hours · ✓ Free site survey
      </p>
    </form>
  );
};

export default QuickQuoteForm;
