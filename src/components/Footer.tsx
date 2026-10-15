import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Link, useLocation } from "react-router-dom";
import OpenClosedBadge from "@/components/OpenClosedBadge";
import QuickQuoteForm from "@/components/QuickQuoteForm";

const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const serviceAreas = [
    "Gravesend", "Canterbury", "Maidstone", "Dartford", "Medway",
    "London", "Bromley", "Surrey", "Essex", "Sussex", "Kent"
  ];

  const services = [
    "Steel Fabrication Kent",
    "Structural Steel London",
    "Steel Beams London",
    "RSJ Beams Kent & London",
    "Steel Beam Installation",
    "Loft Conversion Beams",
    "House Extension Steelwork",
    "Welding Services",
    "Crane Hire & Hiab",
    "Mezzanine Floors",
    "Steel Frame Buildings",
    "Steel Beam Prices",
  ];

  const serviceRoutes: Record<string, string> = {
    "Steel Fabrication Kent": "/steel-fabrication-kent",
    "Structural Steel London": "/structural-steel-london",
    "Steel Beams London": "/steel-beams-london",
    "RSJ Beams Kent & London": "/rsj-beams-kent-london",
    "Steel Beam Installation": "/steel-beam-installation",
    "Loft Conversion Beams": "/loft-conversion-steel-beams",
    "House Extension Steelwork": "/house-extension-steelwork",
    "Welding Services": "/welding-services",
    "Crane Hire & Hiab": "/crane-hire-services",
    "Mezzanine Floors": "/mezzanine-floor-installation",
    "Steel Frame Buildings": "/steel-frame-buildings-kent",
    "Steel Beam Prices": "/steel-rsj-beam-prices",
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Mini Quote Form Banner — hidden on home page */}
      {!isHome && (
        <div className="bg-secondary-hover border-b border-border/20">
          <div className="container mx-auto px-4 py-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">Get a Quick Quote</h3>
                <p className="text-secondary-foreground/80 text-sm">Fill in below and we'll get back to you within 2 hours</p>
              </div>
              <QuickQuoteForm variant="footer" />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <BrandLogo className="mb-2" width={160} height={40} />
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
                className="flex items-center gap-3 text-lg font-bold text-accent hover:text-accent-hover transition-colors"
              >
                <Phone className="h-5 w-5" />
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
              <OpenClosedBadge />
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
                    className="text-sm hover:text-accent transition-colors footer-link inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/residential-steel-services" className="text-sm hover:text-accent transition-colors font-medium text-accent">
                  Residential Services →
                </Link>
              </li>
              <li>
                <Link to="/commercial-steel-services" className="text-sm hover:text-accent transition-colors font-medium text-accent">
                  Commercial Services →
                </Link>
              </li>
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
            <div className="pt-4 space-y-2">
              <p className="text-sm font-medium text-accent">Emergency Services Available 24/7</p>
              <Link to="/how-it-works" className="text-sm text-secondary-foreground hover:text-accent transition-colors block">
                How It Works →
              </Link>
              <Link to="/free-site-survey" className="text-sm text-secondary-foreground hover:text-accent transition-colors block">
                Free Site Survey →
              </Link>
            </div>
          </div>
        </div>

        {/* Certification Logos */}
        <div className="border-t border-secondary-hover mt-12 pt-8">
          <p className="text-center text-xs uppercase tracking-wider opacity-70 mb-4 font-semibold">
            Fully Accredited & Independently Audited
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <Link
              to="/certificates"
              className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow"
              aria-label="View BS EN 1090 certificate"
            >
              <img
                src="/images/bs-en-1090-logo.jpg"
                alt="BS EN 1090 certified — SCCS and UKAS Product Certification"
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            <Link
              to="/certificates"
              className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow"
              aria-label="View UKCA certificate"
            >
              <img
                src="/images/ukca-logo.png"
                alt="UKCA — UK Conformity Assessed certification"
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>
          <p className="text-center text-sm opacity-80 mb-8">
            <Link to="/certificates" className="text-accent hover:underline font-medium">
              View our certifications →
            </Link>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-hover pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90 text-center md:text-left">
              © {new Date().getFullYear()} A K Steel Services Limited. All rights reserved.
            </p>
            <div className="flex gap-x-6 gap-y-2 text-sm flex-wrap justify-center">
              <Link to="/certificates" className="hover:text-accent transition-colors">Certificates</Link>
              <Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link>
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
