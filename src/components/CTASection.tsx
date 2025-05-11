
import { Button } from "@/components/ui/button";

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
          <Button className="bg-secondary hover:bg-secondary/80 text-primary font-bold text-lg px-8 py-6">
            Enroll Now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
