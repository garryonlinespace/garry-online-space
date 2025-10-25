import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tradingChartHero from "@/assets/trading-chart-hero.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#1a1a2e]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${tradingChartHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            <div className="lg:w-1/2 text-white animate-fade-in w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Welcome to <span className="text-secondary">Garry Online Space</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                <span className="italic">"Online is the future"</span>
              </p>
              <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-lg">
                Learn how to make money online with our expert-led courses. We offer comprehensive training on various online businesses and income opportunities.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button asChild className="bg-secondary hover:bg-secondary/80 text-primary font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/get-started">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative w-full">
              <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 border-l-4 border-secondary">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Transform Your Financial Future Today</h2>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">Join thousands of successful students who have built profitable online businesses with our proven methods.</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-primary/5 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-primary text-base sm:text-lg">5000+</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Successful Students</p>
                  </div>
                  <div className="bg-secondary/10 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-primary text-base sm:text-lg">97%</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="bg-secondary/10 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-primary text-base sm:text-lg">15+</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Courses Available</p>
                  </div>
                  <div className="bg-primary/5 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-primary text-base sm:text-lg">24/7</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
