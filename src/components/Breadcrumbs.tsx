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
  "/areas-we-serve": "Areas We Serve",
  "/project-gallery": "Project Gallery",
  "/faq": "FAQ",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
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
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {pathnames.map((pathname, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const pageName = pageNames[routeTo] || pathname.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

              return (
                <div key={routeTo} className="flex items-center">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{pageName}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={routeTo}>{pageName}</Link>
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