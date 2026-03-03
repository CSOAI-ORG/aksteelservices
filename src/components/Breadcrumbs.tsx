import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const pageNames: { [key: string]: string } = {
  "/": "Home",
  "/about": "About Us",
  "/contact": "Contact",
  "/gallery": "Gallery",
  "/reviews": "Reviews",
  "/how-it-works": "How It Works",
  "/areas-we-serve": "Areas We Serve",
  "/faq": "FAQ",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
  "/thank-you": "Thank You",
  "/free-site-survey": "Free Site Survey",
  "/steel-fabrication-kent": "Steel Fabrication Kent",
  "/structural-steel-london": "Structural Steel London",
  "/welding-services": "Welding Services",
  "/steel-construction-gravesend": "Steel Construction Gravesend",
  "/onsite-steel-fabrication": "Onsite Steel Fabrication",
  "/steel-beam-installation": "Steel Beam Installation",
  "/3d-modeling-services": "3D Modeling Services",
  "/crane-hire-services": "Crane Hire Services",
  "/emergency-steel-repair": "Emergency Steel Repair",
  "/architectural-metalwork-london": "Architectural Metalwork London",
  "/steel-staircase-installation": "Steel Staircase Installation",
  "/industrial-steel-platforms": "Industrial Steel Platforms",
  "/steel-building-extensions-kent": "Steel Building Extensions Kent",
  "/residential-steel-services": "Residential Services",
  "/commercial-steel-services": "Commercial Services",
  "/steel-beams-london": "Steel Beams London",
  "/rsj-beams-kent-london": "RSJ Beams Kent & London",
  "/loft-conversion-steel-beams": "Loft Conversion Steel Beams",
  "/house-extension-steelwork": "House Extension Steelwork",
  "/mezzanine-floor-installation": "Mezzanine Floor Installation",
  "/steel-frame-buildings-kent": "Steel Frame Buildings Kent",
  "/steel-rsj-beam-prices": "Steel Beam Prices",
  "/steel-fabricators-near-me": "Steel Fabricators Near Me",
  "/steel-beam-suppliers-near-me": "Steel Beam Suppliers Near Me",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/") return null;

  return (
    <div className="bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Home className="h-3.5 w-3.5" />
                  <span className="text-sm">Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {pathnames.map((pathname, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const pageName = pageNames[routeTo] || pathname.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

              return (
                <div key={routeTo} className="flex items-center">
                  <BreadcrumbSeparator className="text-muted-foreground/50" />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-sm font-medium">{pageName}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={routeTo} className="text-sm">{pageName}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
