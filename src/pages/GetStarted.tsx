
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Shield, Clock, Award } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Get Started with Garry Online Space</h1>
            <p className="text-lg max-w-2xl">
              Begin your journey to financial freedom with our expert-led online courses
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Choose Your Path to Success</h2>
              <p className="text-lg text-gray-700 mb-8">
                All four of our premium courses are currently available for enrollment. Each course is designed to provide you with practical knowledge and skills that can transform your financial future within a short period of time.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 text-primary font-medium px-4 py-2 bg-primary/5 rounded-full">
                  <Shield className="h-5 w-5" />
                  <span>Trusted & Legitimate Company</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium px-4 py-2 bg-primary/5 rounded-full">
                  <Award className="h-5 w-5" />
                  <span>Life-Changing Results</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Available Courses & Duration</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-md border-l-4 border-secondary flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">Forex Trading</h4>
                    <p className="text-gray-600">Master currency market analysis and trading strategies</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Clock className="h-5 w-5" />
                    <span>3 Months</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-md border-l-4 border-secondary flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">Crypto Trading</h4>
                    <p className="text-gray-600">Navigate cryptocurrency markets and build a digital asset portfolio</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Clock className="h-5 w-5" />
                    <span>3 Months</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-md border-l-4 border-secondary flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">Betting Tips and Tickets</h4>
                    <p className="text-gray-600">Weekly professional betting tips and winning strategies</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Clock className="h-5 w-5" />
                    <span>Weekly Tickets</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-md border-l-4 border-secondary flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">Affiliate Marketing</h4>
                    <p className="text-gray-600">Build passive income through strategic partnerships</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Clock className="h-5 w-5" />
                    <span>2 Weeks</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Our Courses?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">We offer the best lessons with practical knowledge that you can apply immediately</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Our students see life-changing results within a short period of time</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">We are a trusted and legitimate company with a track record of success</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Personalized support and mentorship throughout your learning journey</p>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Flexible learning schedule designed to fit around your current commitments</p>
                </li>
              </ul>
              
              <div className="flex justify-center mt-8">
                <Button asChild className="bg-secondary hover:bg-secondary/80 text-primary font-semibold px-8 py-6 text-lg">
                  <Link to="/courses">Explore All Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
