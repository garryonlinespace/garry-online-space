
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BinaryOptions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Binary Options</h1>
            <p className="text-lg max-w-2xl">
              Master binary options trading with our proven strategies and risk management techniques
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6">About Our Binary Options Course</h2>
          <p className="text-gray-700 mb-6">
            Our Binary Options training program is specifically designed to help you understand 
            this unique trading instrument. Learn how to analyze market conditions, identify high-probability 
            setups, and implement effective risk management strategies to maximize your success rate.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">What You Will Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Understanding binary options contracts</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Technical indicators for binary options</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Entry and exit timing strategies</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Money management for consistent profits</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Avoiding common pitfalls and scams</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Course Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Live trading demonstrations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Custom binary options templates</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Market analysis workshops</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>One-on-one mentoring sessions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Trading psychology training</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-secondary text-primary hover:bg-secondary/80 font-bold px-8 py-6 text-lg">
              Enroll in Binary Options Course
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BinaryOptions;
