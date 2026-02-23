import { MessageCircle } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

const WhatsAppButton = () => {
  const { trackWhatsAppClick } = useAnalytics();

  const handleClick = () => {
    trackWhatsAppClick();
    
    // Try to open WhatsApp app first, then fallback to web
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
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 md:bottom-4 right-4 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 animate-pulse hover:animate-none">
        <MessageCircle className="h-6 w-6" />
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg">
          Chat on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;