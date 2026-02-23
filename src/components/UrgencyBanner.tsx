import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UrgencyBanner = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider opacity-90">
          Limited Availability This Month
        </p>
        <h3 className="text-2xl md:text-3xl font-bold">
          Book Your <span className="underline decoration-accent">FREE Site Survey</span> Today
        </h3>
        <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto">
          37 quotes requested this week — don't miss out on our free no-obligation site visit
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Book Free Survey <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="tel:01474550531" className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> Call 01474 550531
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;
