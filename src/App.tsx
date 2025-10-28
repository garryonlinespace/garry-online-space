
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import GetStarted from "./pages/GetStarted";
import MentorMasterminder from "./pages/MentorMasterminder";
import MentorDrema from "./pages/MentorDrema";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// Service Pages
import ForexTrading from "./pages/services/ForexTrading";
import CryptoTrading from "./pages/services/CryptoTrading";
import BettingTips from "./pages/services/BettingTips";
import AffiliateMarketing from "./pages/services/AffiliateMarketing";

// Payment Pages
import ForexPayment from "./pages/payments/ForexPayment";
import CryptoTradingPayment from "./pages/payments/CryptoTradingPayment";
import BettingTipsPayment from "./pages/payments/BettingTipsPayment";
import AffiliateMarketingPayment from "./pages/payments/AffiliateMarketingPayment";

// Confirmation Pages
import ForexConfirmation from "./pages/confirmations/ForexConfirmation";
import CryptoTradingConfirmation from "./pages/confirmations/CryptoTradingConfirmation";
import BettingTipsConfirmation from "./pages/confirmations/BettingTipsConfirmation";
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/mentor-masterminder" element={<MentorMasterminder />} />
          <Route path="/mentor-drema" element={<MentorDrema />} />
          <Route path="/forex" element={<ForexTrading />} />
          <Route path="/crypto-trading" element={<CryptoTrading />} />
          <Route path="/betting-tips" element={<BettingTips />} />
          <Route path="/affiliate-marketing" element={<AffiliateMarketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Payment Routes */}
          <Route path="/forex-payment" element={<ForexPayment />} />
          <Route path="/crypto-trading-payment" element={<CryptoTradingPayment />} />
          <Route path="/betting-tips-payment" element={<BettingTipsPayment />} />
          <Route path="/affiliate-marketing-payment" element={<AffiliateMarketingPayment />} />
          
          {/* Confirmation Routes */}
          <Route path="/forex-confirmation" element={<ForexConfirmation />} />
          <Route path="/crypto-trading-confirmation" element={<CryptoTradingConfirmation />} />
          <Route path="/betting-tips-confirmation" element={<BettingTipsConfirmation />} />
          <Route path="/affiliate-marketing-confirmation" element={<AffiliateMarketingConfirmation />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
