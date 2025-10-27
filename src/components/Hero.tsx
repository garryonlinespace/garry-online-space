import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tradingChartHero from "@/assets/trading-chart-hero.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(1);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    // Animate Successful Students from 0 to 50
    const studentsInterval = setInterval(() => {
      setStudents((prev) => {
        if (prev >= 50) {
          clearInterval(studentsInterval);
          return 50;
        }
        return prev + 1;
      });
    }, 30);

    // Animate Courses from 1 to 4
    const coursesInterval = setInterval(() => {
      setCourses((prev) => {
        if (prev >= 4) {
          clearInterval(coursesInterval);
          return 4;
        }
        return prev + 1;
      });
    }, 400);

    // Animate Success Rate from 0 to 99
    const successInterval = setInterval(() => {
      setSuccessRate((prev) => {
        if (prev >= 99) {
          clearInterval(successInterval);
          return 99;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(studentsInterval);
      clearInterval(coursesInterval);
      clearInterval(successInterval);
    };
  }, []);

  return (
    <section className="relative">
      <div className="relative pb-12 md:pb-16 lg:pb-20 overflow-hidden bg-[#1a1a2e]">
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
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#1e40af] opacity-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center gap-8 lg:gap-10 text-center">
            <div className="text-white animate-fade-in w-full max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Welcome to <span className="text-secondary">Garry Online Space</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                <span className="italic">"Online is the future"</span>
              </p>
              <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Learn how to make money online with our expert-led courses. We offer comprehensive training on various online businesses and income opportunities.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                <Button asChild className="bg-white hover:bg-white/90 text-[#fbbf24] font-bold text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 rounded-full animate-neon-glow">
                  <Link to="/get-started">Get Started</Link>
                </Button>
                <Button asChild className="bg-[#fbbf24] hover:bg-[#fbbf24]/90 text-[#1e40af] font-bold text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 rounded-full border-0">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-3xl">
              <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 border-l-4 border-secondary">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Transform Your Financial Future Today</h2>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">Join thousands of successful students who have built profitable online businesses with our proven methods.</p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-primary/5 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-primary text-base sm:text-lg">{students}+</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Successful Students</p>
                  </div>
                  <div className="bg-secondary/10 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-primary text-base sm:text-lg">{successRate}%</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="bg-secondary/10 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-semibold text-primary text-base sm:text-lg">{courses}</h3>
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
