
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* About Garry Online Space Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">About Garry Online Space</h1>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Garry Online Space is a premier digital skills training platform dedicated to empowering individuals with the knowledge and tools needed to build sustainable online income streams.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2020, our mission is to democratize access to legitimate online income opportunities through practical, results-oriented training programs. We believe that with the right guidance and strategies, anyone can achieve financial freedom in the digital economy.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">What We Do</h2>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in training individuals across multiple digital income streams, focusing on proven methods that deliver real results. Our comprehensive training programs cover:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3">Financial Markets</h3>
                  <p className="text-gray-700">
                    Expert training in Forex trading, Binary options, and Cryptocurrency investments, teaching market analysis, risk management, and profitable trading strategies.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3">Digital Marketing</h3>
                  <p className="text-gray-700">
                    Comprehensive affiliate marketing training that focuses on building passive income streams through strategic partnerships and digital product promotion.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3">Sports Analytics</h3>
                  <p className="text-gray-700">
                    Advanced betting skills development that teaches statistical analysis, bankroll management, and data-driven decision making.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3">Personalized Mentorship</h3>
                  <p className="text-gray-700">
                    One-on-one guidance from experienced professionals who have achieved success in their respective fields and are committed to your growth.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">Our Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Garry Online Space, we believe in learning by doing. Our training programs combine theoretical knowledge with practical application, ensuring our students develop real-world skills they can immediately put to use.
              </p>
              
              <p className="text-lg text-gray-700 mb-10">
                We pride ourselves on maintaining small class sizes, providing personalized attention, and offering ongoing support to our community of learners, even after they complete our programs.
              </p>
              
              <div className="text-center">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg">
                    Start Your Journey Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Founder Section transferred from homepage */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">About Our Founder</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-80 md:h-96 bg-gray-300 rounded-lg overflow-hidden relative">
                    {/* Replace with actual image of Mentor Drema */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary">
                      <span className="text-white text-xl font-bold">Mentor Drema</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">CEO</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-xl font-semibold text-secondary mb-4">Mentor Drema</h3>
                <p className="text-gray-700 mb-6">
                  With over a decade of experience in online business and digital finance, 
                  Mentor Drema established Garry Online Space with one mission: to empower 
                  individuals with the knowledge and skills needed to achieve financial freedom 
                  in the digital economy.
                </p>
                <p className="text-gray-700 mb-6">
                  Having personally achieved success in forex trading, cryptocurrency investments, 
                  and affiliate marketing, Mentor Drema has developed a comprehensive training 
                  methodology that has helped thousands of students build profitable online 
                  businesses.
                </p>
                <p className="text-gray-700 mb-6">
                  "My goal is to make financial education accessible and practical. 
                  Online is not just the future - it's the present, and I'm here to help you 
                  navigate this landscape to build sustainable wealth." - Mentor Drema
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
