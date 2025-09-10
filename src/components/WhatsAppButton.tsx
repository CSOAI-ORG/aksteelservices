import { MessageCircle } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const WhatsAppButton = () => {
  const { trackWhatsAppClick } = useAnalytics();

  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <a
      href="https://wa.me/447492964836"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 animate-pulse hover:animate-none">
        <MessageCircle className="h-6 w-6" />
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
          Chat on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;