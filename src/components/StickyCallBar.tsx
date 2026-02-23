import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const StickyCallBar = () => {
  return (
    /* Mobile sticky bottom bar only — desktop banner removed */
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
  );
};

export default StickyCallBar;
