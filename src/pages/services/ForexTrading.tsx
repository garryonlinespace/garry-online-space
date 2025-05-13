
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ForexTrading = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/forex-payment");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Forex Trading</h1>
            <p className="text-lg max-w-2xl">
              Learn how to analyze forex markets, develop trading strategies, and make profitable trades
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6">About Our Forex Trading Course</h2>
          <p className="text-gray-700 mb-6">
            Our comprehensive Forex Trading course is designed to take you from beginner to 
            advanced trader with step-by-step instruction from industry experts. Learn currency 
            pair analysis, chart patterns, and risk management strategies that actually work in 
            real market conditions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">What You Will Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Technical analysis and chart pattern recognition</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Fundamental analysis and economic indicators</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Risk management and position sizing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Trading psychology and emotional discipline</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Developing a personalized trading plan</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Course Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Duration: 3 months</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Price: USD 100</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Live trading sessions with expert traders</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Direct mentorship from professional traders</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Lifetime access to course updates</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleEnroll}
              className="bg-secondary text-primary hover:bg-secondary/80 font-bold px-8 py-6 text-lg"
            >
              Enroll in Forex Trading Course
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForexTrading;
