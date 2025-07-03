
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";

interface PaymentConfirmationProps {
  courseName: string;
}

const PaymentConfirmation = ({ courseName }: PaymentConfirmationProps) => {
  const navigate = useNavigate();
  
  const handleBackToHome = () => {
    navigate("/");
  };

  const handleContactMasterminder = () => {
    window.open(`https://wa.me/256754072448`, '_blank');
  };
  
  const handleContactDrema = () => {
    window.open(`https://wa.me/256761281222`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-primary mb-4">{courseName}</h1>
          
          <div className="bg-gray-50 p-6 rounded-md mb-6 border border-gray-100">
            <p className="text-center text-gray-700 font-medium">
              For payments contact one of the mentors and start the course.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md mb-6">
            <p className="text-sm text-blue-700">
              <span className="font-bold">Note:</span> Choose any mentor below to discuss payment details and begin your course immediately.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <Button 
              onClick={handleContactMasterminder}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Mentor MasterMinder (+256 754 072448)
            </Button>
            
            <Button 
              onClick={handleContactDrema}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Mentor Isiah (+256 761 281222)
            </Button>
            
            <Button 
              onClick={handleBackToHome} 
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 mt-2"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;
