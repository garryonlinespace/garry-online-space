
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BettingTips = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/betting-tips-payment");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Betting Tips and Tickets</h1>
            <p className="text-lg max-w-2xl">
              Professional betting tips and winning tickets to maximize your sports betting success
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6">About Our Betting Service</h2>
          <p className="text-gray-700 mb-6">
            Our Betting Tips and Tickets service provides you with professionally analyzed sports betting 
            opportunities. We combine statistical analysis, sports expertise, and market trends to deliver 
            high-probability betting tips and curated tickets across multiple sports and leagues.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">What You Get</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Weekly betting tickets with high-probability selections</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Detailed analysis for major sporting events</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Tips for value betting opportunities</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Bankroll management guidance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Direct access to expert betting consultants</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Service Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Weekly ticket price: UGX 35,000</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Personalized betting consultation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Coverage across major sports leagues</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Dedicated WhatsApp support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Tips on avoiding common betting mistakes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleEnroll}
              className="bg-secondary text-primary hover:bg-secondary/80 font-bold px-8 py-6 text-lg"
            >
              Get Weekly Betting Tips
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BettingTips;
