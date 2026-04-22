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
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import ServiceCalculatorPage from "./pages/ServiceCalculator";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import Reviews from "./pages/Reviews";
import Certificates from "./pages/Certificates";
import ScrollToTop from "./components/ScrollToTop";
import HowItWorks from "./pages/HowItWorks";
import FreeSiteSurvey from "./pages/FreeSiteSurvey";
import ResidentialSteelServices from "./pages/ResidentialSteelServices";
import CommercialSteelServices from "./pages/CommercialSteelServices";
import LoftConversionSteelBeams from "./pages/LoftConversionSteelBeams";
import RSJBeamsKentLondon from "./pages/RSJBeamsKentLondon";
import HouseExtensionSteelwork from "./pages/HouseExtensionSteelwork";
import SteelBeamSuppliersNearMe from "./pages/SteelBeamSuppliersNearMe";
import SteelFabricatorsNearMe from "./pages/SteelFabricatorsNearMe";
import MezzanineFloorInstallation from "./pages/MezzanineFloorInstallation";
import SteelFrameBuildingsKent from "./pages/SteelFrameBuildingsKent";
import SteelBeamsLondon from "./pages/SteelBeamsLondon";
import StructuralEngineerSteelBeams from "./pages/StructuralEngineerSteelBeams";
import SteelRSJPrices from "./pages/SteelRSJPrices";

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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/areas-we-serve" element={<AreasWeServe />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/free-site-survey" element={<FreeSiteSurvey />} />
            <Route path="/residential-steel-services" element={<ResidentialSteelServices />} />
            <Route path="/commercial-steel-services" element={<CommercialSteelServices />} />
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
            <Route path="/loft-conversion-steel-beams" element={<LoftConversionSteelBeams />} />
            <Route path="/rsj-beams-kent-london" element={<RSJBeamsKentLondon />} />
            <Route path="/house-extension-steelwork" element={<HouseExtensionSteelwork />} />
            <Route path="/steel-beam-suppliers-near-me" element={<SteelBeamSuppliersNearMe />} />
            <Route path="/steel-fabricators-near-me" element={<SteelFabricatorsNearMe />} />
            <Route path="/mezzanine-floor-installation" element={<MezzanineFloorInstallation />} />
            <Route path="/steel-frame-buildings-kent" element={<SteelFrameBuildingsKent />} />
            <Route path="/steel-beams-london" element={<SteelBeamsLondon />} />
            <Route path="/structural-engineer-steel-beams" element={<StructuralEngineerSteelBeams />} />
            <Route path="/steel-rsj-beam-prices" element={<SteelRSJPrices />} />
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
