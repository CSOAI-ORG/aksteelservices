import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";

const WhatsAppButton = () => {
  const { trackWhatsAppClick } = useAnalytics();
  const phoneNumber = "447492964836"; // Mobile number for WhatsApp
  const message = "Hello! I'm interested in your steel fabrication services. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        variant="accent"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none motion-reduce:animate-none"
      >
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
          onClick={trackWhatsAppClick}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;