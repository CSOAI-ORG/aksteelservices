import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MidPageCTAProps {
  serviceName?: string;
}

const MidPageCTA = ({ serviceName = "Steel Services" }: MidPageCTAProps) => {
  return (
    <div className="my-12 rounded-2xl bg-gradient-to-r from-secondary to-secondary-hover p-8 md:p-10 text-secondary-foreground text-center space-y-4">
      <p className="text-accent text-sm font-bold uppercase tracking-wider">Ready to Get Started?</p>
      <h3 className="text-xl md:text-2xl font-bold">
        Need {serviceName}? Get a Free Quote in 60 Seconds
      </h3>
      <p className="text-secondary-foreground/80 text-sm max-w-lg mx-auto">
        Call us now or fill in our quick form — we respond to all enquiries within 2 hours
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact" className="flex items-center gap-2">
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
          <a href="tel:01474550531" className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> 01474 550531
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MidPageCTA;
