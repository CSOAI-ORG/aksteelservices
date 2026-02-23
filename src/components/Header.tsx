import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { name: "🏠 Residential Services", href: "/residential-steel-services", highlight: true },
    { name: "🏢 Commercial Services", href: "/commercial-steel-services", highlight: true },
    { name: "📋 Free Site Survey", href: "/free-site-survey", highlight: true },
    { name: "💰 Steel Beam Prices", href: "/steel-rsj-beam-prices", highlight: true },
    { name: "---", href: "" },
    { name: "Steel Fabrication Kent", href: "/steel-fabrication-kent" },
    { name: "Structural Steel London", href: "/structural-steel-london" },
    { name: "Steel Beams London", href: "/steel-beams-london" },
    { name: "RSJ Beams Kent & London", href: "/rsj-beams-kent-london" },
    { name: "Steel Beam Installation", href: "/steel-beam-installation" },
    { name: "Loft Conversion Steel Beams", href: "/loft-conversion-steel-beams" },
    { name: "House Extension Steelwork", href: "/house-extension-steelwork" },
    { name: "Mezzanine Floor Installation", href: "/mezzanine-floor-installation" },
    { name: "Welding Services", href: "/welding-services" },
    { name: "Crane Hire Services", href: "/crane-hire-services" },
    { name: "Steel Frame Buildings Kent", href: "/steel-frame-buildings-kent" },
    { name: "Onsite Steel Fabrication", href: "/onsite-steel-fabrication" },
    { name: "3D Modeling Services", href: "/3d-modeling-services" },
    { name: "Emergency Steel Repair", href: "/emergency-steel-repair" },
    { name: "Architectural Metalwork", href: "/architectural-metalwork-london" },
    { name: "Steel Staircase Installation", href: "/steel-staircase-installation" },
    { name: "Industrial Steel Platforms", href: "/industrial-steel-platforms" },
    { name: "Steel Building Extensions", href: "/steel-building-extensions-kent" },
    { name: "Steel Fabricators Near Me", href: "/steel-fabricators-near-me" },
    { name: "Steel Beam Suppliers Near Me", href: "/steel-beam-suppliers-near-me" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Main navigation — single clean bar */}
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center">
            <div className="text-xl md:text-2xl font-bold text-primary">
              AK <span className="text-secondary">Steel Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-background border border-border">
                {serviceItems.map((item, i) => {
                  if (item.name === "---") return <DropdownMenuSeparator key={i} />;
                  return (
                    <DropdownMenuItem key={i} asChild>
                      <Link 
                        to={item.href} 
                        className={`text-foreground hover:text-primary ${item.highlight ? "font-semibold" : ""}`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex font-semibold" asChild>
              <a href="tel:01474550531" className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" />
                01474 550531
              </a>
            </Button>
            <Button variant="hero" size="sm" className="hidden sm:flex" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-1.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-border pt-3">
                <div className="text-sm font-semibold text-accent mb-2">Quick Links</div>
                <Link to="/residential-steel-services" className="block py-1.5 text-foreground hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                  🏠 Residential Services
                </Link>
                <Link to="/commercial-steel-services" className="block py-1.5 text-foreground hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                  🏢 Commercial Services
                </Link>
                <Link to="/free-site-survey" className="block py-1.5 text-foreground hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                  📋 Free Site Survey
                </Link>
              </div>

              <div className="border-t border-border pt-3">
                <div className="text-sm font-semibold text-muted-foreground mb-2">All Services</div>
                <div className="grid grid-cols-1 gap-1">
                  {serviceItems.filter(i => !i.highlight && i.name !== "---").map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors text-sm py-1 pl-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 pt-3 border-t border-border">
                <Button variant="hero" size="sm" asChild>
                  <a href="tel:01474550531" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Call 01474 550531
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
