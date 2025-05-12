
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

// Payment Pages
import ForexPayment from "./pages/payments/ForexPayment";
import BinaryOptionsPayment from "./pages/payments/BinaryOptionsPayment";
import CryptoTradingPayment from "./pages/payments/CryptoTradingPayment";
import BettingSkillsPayment from "./pages/payments/BettingSkillsPayment";
import AffiliateMarketingPayment from "./pages/payments/AffiliateMarketingPayment";

// Confirmation Pages
import ForexConfirmation from "./pages/confirmations/ForexConfirmation";
import BinaryOptionsConfirmation from "./pages/confirmations/BinaryOptionsConfirmation";
import CryptoTradingConfirmation from "./pages/confirmations/CryptoTradingConfirmation";
import BettingSkillsConfirmation from "./pages/confirmations/BettingSkillsConfirmation";
import AffiliateMarketingConfirmation from "./pages/confirmations/AffiliateMarketingConfirmation";

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
          
          {/* Payment Routes */}
          <Route path="/forex-payment" element={<ForexPayment />} />
          <Route path="/binary-options-payment" element={<BinaryOptionsPayment />} />
          <Route path="/crypto-trading-payment" element={<CryptoTradingPayment />} />
          <Route path="/betting-skills-payment" element={<BettingSkillsPayment />} />
          <Route path="/affiliate-marketing-payment" element={<AffiliateMarketingPayment />} />
          
          {/* Confirmation Routes */}
          <Route path="/forex-confirmation" element={<ForexConfirmation />} />
          <Route path="/binary-options-confirmation" element={<BinaryOptionsConfirmation />} />
          <Route path="/crypto-trading-confirmation" element={<CryptoTradingConfirmation />} />
          <Route path="/betting-skills-confirmation" element={<BettingSkillsConfirmation />} />
          <Route path="/affiliate-marketing-confirmation" element={<AffiliateMarketingConfirmation />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
