
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BettingSkills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Betting Skills</h1>
            <p className="text-lg max-w-2xl">
              Develop professional sports betting strategies with our data-driven approach
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6">About Our Betting Skills Course</h2>
          <p className="text-gray-700 mb-6">
            Our Betting Skills program takes a professional, analytical approach to sports betting. 
            Move beyond luck and learn how to use statistics, probability theory, and disciplined 
            bankroll management to create a sustainable edge in sports betting markets.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">What You Will Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Statistical analysis of sports data</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Probability assessment and value betting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Advanced bankroll management techniques</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Identifying market inefficiencies</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Emotional control and discipline</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Course Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Proprietary analytical spreadsheets</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Access to historical betting data</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Live betting workshops</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Sports-specific strategy sessions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Community of professional bettors</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-secondary text-primary hover:bg-secondary/80 font-bold px-8 py-6 text-lg">
              Enroll in Betting Skills Course
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BettingSkills;
