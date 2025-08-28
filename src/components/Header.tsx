import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
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
    { name: "Areas We Serve", href: "/areas-we-serve" },
    { name: "Calculator", href: "/calculator" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    // Core Services
    { name: "Steel Fabrication Kent", href: "/steel-fabrication-kent" },
    { name: "Structural Steel London", href: "/structural-steel-london" },
    { name: "Welding Services", href: "/welding-services" },
    // Specialized Services
    { name: "Steel Construction Gravesend", href: "/steel-construction-gravesend" },
    { name: "Onsite Steel Fabrication", href: "/onsite-steel-fabrication" },
    { name: "Steel Beam Installation", href: "/steel-beam-installation" },
    // Technical Services
    { name: "3D Modeling Services", href: "/3d-modeling-services" },
    { name: "Crane Hire Services", href: "/crane-hire-services" },
    { name: "Emergency Steel Repair", href: "/emergency-steel-repair" },
    // Architectural Services
    { name: "Architectural Metalwork London", href: "/architectural-metalwork-london" },
    { name: "Steel Staircase Installation", href: "/steel-staircase-installation" },
    // Construction Services
    { name: "Industrial Steel Platforms", href: "/industrial-steel-platforms" },
    { name: "Steel Building Extensions Kent", href: "/steel-building-extensions-kent" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6">
            <a 
              href="tel:01474550531" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              01474 550531
            </a>
            <a 
              href="mailto:info@aksteelservices.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@aksteelservices.com
            </a>
          </div>
          <div className="text-muted-foreground">
            Mon-Fri: 7:30-17:00 | Sat: 7:00-13:00
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              AK <span className="text-secondary">Steel Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-background border border-border">
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Core Services</div>
                <DropdownMenuItem asChild>
                  <Link to="/steel-fabrication-kent" className="text-foreground hover:text-primary">
                    Steel Fabrication Kent
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/structural-steel-london" className="text-foreground hover:text-primary">
                    Structural Steel London
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/welding-services" className="text-foreground hover:text-primary">
                    Welding Services
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Specialized Services</div>
                <DropdownMenuItem asChild>
                  <Link to="/steel-construction-gravesend" className="text-foreground hover:text-primary">
                    Steel Construction Gravesend
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/onsite-steel-fabrication" className="text-foreground hover:text-primary">
                    Onsite Steel Fabrication
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/steel-beam-installation" className="text-foreground hover:text-primary">
                    Steel Beam Installation
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Technical Services</div>
                <DropdownMenuItem asChild>
                  <Link to="/3d-modeling-services" className="text-foreground hover:text-primary">
                    3D Modeling Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/crane-hire-services" className="text-foreground hover:text-primary">
                    Crane Hire Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/emergency-steel-repair" className="text-foreground hover:text-primary">
                    Emergency Steel Repair
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Architectural Services</div>
                <DropdownMenuItem asChild>
                  <Link to="/architectural-metalwork-london" className="text-foreground hover:text-primary">
                    Architectural Metalwork London
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/steel-staircase-installation" className="text-foreground hover:text-primary">
                    Steel Staircase Installation
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Construction Services</div>
                <DropdownMenuItem asChild>
                  <Link to="/industrial-steel-platforms" className="text-foreground hover:text-primary">
                    Industrial Steel Platforms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/steel-building-extensions-kent" className="text-foreground hover:text-primary">
                    Steel Building Extensions Kent
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
              <a href="tel:01474550531">Call Now</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>

            {/* Mobile menu button */}
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
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="border-t border-border pt-4">
                <div className="text-sm font-semibold text-muted-foreground mb-3">Services</div>
                <div className="grid grid-cols-1 gap-2">
                  {serviceItems.map((item) => (
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
              
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:01474550531">Call 01474 550531</a>
                </Button>
                <Button variant="hero" size="sm" asChild>
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