import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import ApiDocs from "./pages/ApiDocs";
import Integrations from "./pages/Integrations";
import HelpCenter from "./pages/HelpCenter";
import StatusPage from "./pages/StatusPage";
import Community from "./pages/Community";
import PressKit from "./pages/PressKit";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import LovableLinkProvider from "./components/LovableLinkProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LovableLinkProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/press" element={<PressKit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </LovableLinkProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
