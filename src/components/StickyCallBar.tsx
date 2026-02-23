import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StickyCallBar = () => {
  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-secondary border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex items-stretch">
          <a
            href="tel:01474550531"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-bold text-sm active:bg-primary-hover transition-colors"
          >
            <Phone className="h-5 w-5 animate-pulse" />
            Call Now
          </a>
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-bold text-sm active:bg-accent-hover transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            Get Quote
          </Link>
        </div>
      </div>

      {/* Desktop urgency top banner */}
      <div className="hidden md:block bg-primary text-primary-foreground text-center py-2 text-sm font-medium relative z-50">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <span className="animate-pulse">🔥</span>
          <span>Limited Availability — Book Your <strong>FREE Site Survey</strong> This Week</span>
          <span className="mx-2">|</span>
          <a href="tel:01474550531" className="underline font-bold hover:text-accent-foreground/80 transition-colors flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" />
            01474 550531
          </a>
          <Button variant="secondary" size="sm" className="ml-4 h-7 text-xs" asChild>
            <Link to="/contact">Get Free Quote →</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default StickyCallBar;
