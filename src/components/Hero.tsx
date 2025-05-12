
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <div className="bg-gradient-to-r from-primary to-accent py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to <span className="text-secondary">Garry Online Space</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-6">
                <span className="italic">"Online is the future"</span>
              </p>
              <p className="text-lg mb-8 max-w-lg">
                Learn how to make money online with our expert-led courses. We offer comprehensive training on various online businesses and income opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-secondary hover:bg-secondary/80 text-primary font-bold text-lg px-8 py-6">
                  <Link to="/get-started">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 py-6">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-secondary">
                <h2 className="text-2xl font-bold text-primary mb-4">Transform Your Financial Future Today</h2>
                <p className="mb-6 text-gray-700">Join thousands of successful students who have built profitable online businesses with our proven methods.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary">5000+</h3>
                    <p className="text-sm text-gray-600">Successful Students</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary">97%</h3>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary">15+</h3>
                    <p className="text-sm text-gray-600">Courses Available</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary">24/7</h3>
                    <p className="text-sm text-gray-600">Support Available</p>
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
