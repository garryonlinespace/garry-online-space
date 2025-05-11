
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Service Pages
import ForexTrading from "./pages/services/ForexTrading";
import BinaryOptions from "./pages/services/BinaryOptions";
import CryptoTrading from "./pages/services/CryptoTrading";
import BettingSkills from "./pages/services/BettingSkills";
import AffiliateMarketing from "./pages/services/AffiliateMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forex" element={<ForexTrading />} />
          <Route path="/binary-options" element={<BinaryOptions />} />
          <Route path="/crypto-trading" element={<CryptoTrading />} />
          <Route path="/betting-skills" element={<BettingSkills />} />
          <Route path="/affiliate-marketing" element={<AffiliateMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
