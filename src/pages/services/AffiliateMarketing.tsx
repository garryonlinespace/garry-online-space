
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AffiliateMarketing = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/affiliate-marketing-payment");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Affiliate Marketing</h1>
            <p className="text-lg max-w-2xl">
              Learn how to build passive income streams through strategic affiliate partnerships
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6">About Our Affiliate Marketing Course</h2>
          <p className="text-gray-700 mb-6">
            Our comprehensive Affiliate Marketing program teaches you how to build sustainable passive 
            income streams by promoting quality products and services. Learn audience building, content 
            creation, and conversion optimization from successful affiliate marketers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">What You Will Learn</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Niche selection and market research</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Building high-converting websites</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Content marketing and SEO</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Email list building and automation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Paid traffic strategies and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Course Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Duration: 2 weeks</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Price: UGX 50,000</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Directory of high-paying affiliate programs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Conversion optimization workshops</span>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Private mastermind community</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleEnroll}
              className="bg-secondary text-primary hover:bg-secondary/80 font-bold px-8 py-6 text-lg"
            >
              Enroll in Affiliate Marketing Course
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AffiliateMarketing;
