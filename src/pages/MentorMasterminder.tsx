
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const MentorMasterminder = () => {
  const handleContactWhatsApp = () => {
    window.open(`https://wa.me/256754072448`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Mentor MasterMinder</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Expert trading coach specializing in Forex and cryptocurrency markets
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-lg w-full aspect-square flex items-center justify-center">
                  <span className="text-5xl text-primary font-bold">MM</span>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-6">About Mentor MasterMinder</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mentor MasterMinder is a highly experienced trading professional with over 10 years of experience 
                    in financial markets. Specializing in Forex and Cryptocurrency trading, Mentor MasterMinder has 
                    helped thousands of students achieve financial independence through strategic trading.
                  </p>
                  
                  <p>
                    With a background in financial analysis and market economics, Mentor MasterMinder provides 
                    comprehensive training that combines technical analysis, fundamental principles, and proven 
                    risk management techniques that work in real-world trading conditions.
                  </p>

                  <div className="mt-8 space-y-3">
                    <h3 className="font-bold text-xl">Specialties:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Advanced Forex trading strategies</li>
                      <li>Cryptocurrency market analysis</li>
                      <li>Risk management and portfolio building</li>
                      <li>Price action and technical analysis</li>
                      <li>Trading psychology mastery</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={handleContactWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Contact on WhatsApp (+256 754 072448)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentorMasterminder;
