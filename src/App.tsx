import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SteelFabricationKent from "./pages/SteelFabricationKent";
import StructuralSteelLondon from "./pages/StructuralSteelLondon";
import WeldingServices from "./pages/WeldingServices";
import SteelConstructionGravesend from "./pages/SteelConstructionGravesend";
import OnsiteSteelFabrication from "./pages/OnsiteSteelFabrication";
import CraneHireServices from "./pages/CraneHireServices";
import ThreeDModelingServices from "./pages/ThreeDModelingServices";
import EmergencySteelRepair from "./pages/EmergencySteelRepair";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/steel-fabrication-kent" element={<SteelFabricationKent />} />
          <Route path="/structural-steel-london" element={<StructuralSteelLondon />} />
          <Route path="/welding-services" element={<WeldingServices />} />
          <Route path="/steel-construction-gravesend" element={<SteelConstructionGravesend />} />
          <Route path="/onsite-steel-fabrication" element={<OnsiteSteelFabrication />} />
          <Route path="/crane-hire-services" element={<CraneHireServices />} />
          <Route path="/3d-modeling-services" element={<ThreeDModelingServices />} />
          <Route path="/emergency-steel-repair" element={<EmergencySteelRepair />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
