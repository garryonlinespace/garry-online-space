
import { Button } from "@/components/ui/button";

const AboutFounder = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Founder</h2>
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
            <Button className="bg-primary hover:bg-primary/80 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
