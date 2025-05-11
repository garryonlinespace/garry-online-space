
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Forex Trader",
    image: "/placeholder.svg",
    content: "The forex trading course at Garry Online Space completely transformed my understanding of the markets. Within 3 months of completing the course, I was consistently making profitable trades.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Crypto Investor",
    image: "/placeholder.svg",
    content: "Mentor Drema's crypto trading program gave me the confidence to build a diversified portfolio. The strategies I learned helped me navigate market volatility and maximize returns.",
    rating: 5
  },
  {
    id: 3,
    name: "David Ochieng",
    role: "Affiliate Marketer",
    image: "/placeholder.svg",
    content: "I was struggling with affiliate marketing before joining Garry Online Space. The step-by-step guidance helped me build a sustainable income stream that now generates $3000 monthly.",
    rating: 5
  },
  {
    id: 4,
    name: "Rebecca Namukose",
    role: "Binary Options Trader",
    image: "/placeholder.svg",
    content: "The binary options course exceeded my expectations. The risk management strategies alone were worth the investment. Now I trade with confidence and consistent results.",
    rating: 4
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Hear from our students who have successfully applied our training to build profitable online businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={`text-${i < testimonial.rating ? 'secondary' : 'white/30'}`}>★</span>
                  ))}
                </div>
                <p className="text-white/80">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {testimonials.length > 3 && (
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              className="mr-2 border-white/20 text-white hover:bg-white/10"
              onClick={prevSlide}
            >
              Previous
            </Button>
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={nextSlide}
            >
              Next
            </Button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button className="bg-secondary hover:bg-secondary/80 text-primary font-semibold">
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
