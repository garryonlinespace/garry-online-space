
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface PaymentPageProps {
  courseName: string;
  amount: number;
  currency?: string;
  redirectPath: string;
}

const PaymentPage = ({ courseName, amount, currency = "UGX", redirectPath }: PaymentPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleGetStarted = () => {
    navigate(redirectPath);
  };

  const formattedAmount = new Intl.NumberFormat("en-US").format(amount);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-primary mb-2">{courseName}</h1>
          <p className="text-center text-gray-500 mb-6">Payment Information</p>
          
          <div className="border-t border-gray-200 pt-6 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Course Fee:</span>
              <span className="font-medium">{currency}. {formattedAmount}</span>
            </div>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-md mb-6">
            <p className="text-lg font-bold text-center text-primary">
              Amount to be paid: {currency}. {formattedAmount}
            </p>
          </div>
          
          <Button 
            onClick={handleGetStarted} 
            className="w-full bg-secondary text-primary hover:bg-secondary/80 font-bold py-3 text-lg"
          >
            Get Started
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
