import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Link } from "react-router-dom";

const Footer = () => {
  const serviceAreas = [
    "Gravesend", "Canterbury", "Maidstone", "Dartford", "Medway",
    "London", "Bromley", "Surrey", "Essex", "Sussex", "Kent"
  ];

  const services = [
    "Steel Fabrication",
    "Structural Steel",
    "Welding Services",
    "Onsite Fabrication",
    "Steel Construction",
    "Crane Hire & Hiab"
  ];

  const serviceRoutes: Record<string, string> = {
    "Steel Fabrication": "/steel-fabrication-kent",
    "Structural Steel": "/structural-steel-london",
    "Welding Services": "/welding-services",
    "Onsite Fabrication": "/onsite-steel-fabrication",
    "Steel Construction": "/steel-construction-gravesend",
    "Crane Hire & Hiab": "/crane-hire-services",
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <BrandLogo className="mb-2" width={160} height={40} />
            <h3 className="text-xl font-bold text-accent">AK Steel Services</h3>
            <p className="text-sm opacity-90">
              The UK's #1 Steel Manufacturer delivering expert steel fabrication, 
              structural steel, and welding services across Kent, London, and South East England.
            </p>
            <div className="flex flex-col gap-2">
              <Button variant="hero" size="sm" className="w-fit" asChild>
                <Link to="/contact">Get Free Quote Today</Link>
              </Button>
              <div className="flex gap-3 mt-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=61577360927185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground hover:text-accent transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/aksteelservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground hover:text-accent transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:01474550531" 
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>01474 550531</span>
              </a>
              <a 
                href="mailto:info@aksteelservices.com" 
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@aksteelservices.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-sm">Unit A, Wharf Road, Gravesend, DA12 2RU</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-1" />
                <div className="text-sm">
                  <div>Mon-Fri: 7:30 - 17:00</div>
                  <div>Saturday: 7:00 - 13:00</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to={serviceRoutes[service]}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Service Areas</h4>
            <div className="grid grid-cols-2 gap-1">
              {serviceAreas.map((area) => (
                <span key={area} className="text-sm opacity-90">
                  {area}
                </span>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-sm font-medium text-accent">Emergency Services Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-hover mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © 2024 A K Steel Services Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;