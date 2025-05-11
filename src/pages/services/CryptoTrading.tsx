
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CryptoTrading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Cryptocurrency Trading</h1>
            <p className="text-lg max-w-2xl">
              Learn how to navigate the cryptocurrency markets and build a profitable digital asset portfolio
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6">About Our Cryptocurrency Trading Course</h2>
          <p className="text-gray-700 mb-6">
            Our comprehensive Cryptocurrency Trading course equips you with the knowledge and skills 
            to confidently navigate the volatile crypto markets. From blockchain fundamentals to 
            advanced trading strategies, you'll learn everything needed to build and manage a successful 
            digital asset portfolio.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">What You Will Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Blockchain and cryptocurrency fundamentals</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Technical analysis for crypto markets</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Token evaluation and fundamental analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Portfolio management and diversification</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Security best practices and wallet management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Course Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Market cycle analysis and timing strategies</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>DeFi protocols and yield farming techniques</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>NFT investment strategies</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Crypto tax compliance guidance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Private community for market updates</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-secondary text-primary hover:bg-secondary/80 font-bold px-8 py-6 text-lg">
              Enroll in Cryptocurrency Trading Course
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CryptoTrading;
