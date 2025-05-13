
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Online Journey?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Join Garry Online Space today and learn how to build a profitable online business
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
          "Online is the future" - Access expert-led training programs designed to help you succeed in various digital income opportunities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="bg-secondary hover:bg-secondary/80 text-primary font-bold text-lg px-8 py-6">
            <Link to="/get-started">Enroll Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20 font-bold text-lg px-8 py-6">
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
