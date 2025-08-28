import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPhoneCall = (phoneNumber: string) => {
    trackEvent('phone_call', {
      phone_number: phoneNumber,
      page_path: location.pathname,
    });
  };

  const trackWhatsAppClick = () => {
    trackEvent('whatsapp_click', {
      page_path: location.pathname,
    });
  };

  const trackFormSubmission = (formType: string) => {
    trackEvent('form_submission', {
      form_type: formType,
      page_path: location.pathname,
    });
  };

  const trackQuoteRequest = (serviceType: string) => {
    trackEvent('quote_request', {
      service_type: serviceType,
      page_path: location.pathname,
    });
  };

  return {
    trackEvent,
    trackPhoneCall,
    trackWhatsAppClick,
    trackFormSubmission,
    trackQuoteRequest,
  };
};