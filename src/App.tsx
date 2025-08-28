import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import SteelFabricationKent from "./pages/SteelFabricationKent";
import StructuralSteelLondon from "./pages/StructuralSteelLondon";
import WeldingServices from "./pages/WeldingServices";
import SteelConstructionGravesend from "./pages/SteelConstructionGravesend";
import OnsiteSteelFabrication from "./pages/OnsiteSteelFabrication";
import CraneHireServices from "./pages/CraneHireServices";
import ThreeDModelingServices from "./pages/ThreeDModelingServices";
import EmergencySteelRepair from "./pages/EmergencySteelRepair";
import SteelBeamInstallation from "./pages/SteelBeamInstallation";
import ArchitecturalMetalworkLondon from "./pages/ArchitecturalMetalworkLondon";
import IndustrialSteelPlatforms from "./pages/IndustrialSteelPlatforms";
import SteelStaircaseInstallation from "./pages/SteelStaircaseInstallation";
import SteelBuildingExtensionsKent from "./pages/SteelBuildingExtensionsKent";
import AreasWeServe from "./pages/AreasWeServe";

import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import ServiceCalculatorPage from "./pages/ServiceCalculator";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <div className="min-h-screen bg-background">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/areas-we-serve" element={<AreasWeServe />} />
            <Route path="/project-gallery" element={<Navigate to="/" replace />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/calculator" element={<ServiceCalculatorPage />} />
            <Route path="/steel-fabrication-kent" element={<SteelFabricationKent />} />
            <Route path="/structural-steel-london" element={<StructuralSteelLondon />} />
            <Route path="/welding-services" element={<WeldingServices />} />
            <Route path="/steel-construction-gravesend" element={<SteelConstructionGravesend />} />
            <Route path="/onsite-steel-fabrication" element={<OnsiteSteelFabrication />} />
            <Route path="/crane-hire-services" element={<CraneHireServices />} />
            <Route path="/3d-modeling-services" element={<ThreeDModelingServices />} />
            <Route path="/emergency-steel-repair" element={<EmergencySteelRepair />} />
            <Route path="/steel-beam-installation" element={<SteelBeamInstallation />} />
            <Route path="/architectural-metalwork-london" element={<ArchitecturalMetalworkLondon />} />
            <Route path="/industrial-steel-platforms" element={<IndustrialSteelPlatforms />} />
            <Route path="/steel-staircase-installation" element={<SteelStaircaseInstallation />} />
            <Route path="/steel-building-extensions-kent" element={<SteelBuildingExtensionsKent />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
