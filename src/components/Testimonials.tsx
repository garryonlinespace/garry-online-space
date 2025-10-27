import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "James Mukasa",
    role: "Forex Trading Expert",
    content: "Working with Mentor MasterMinder completely transformed my forex trading journey. His deep understanding of market analysis and risk management strategies helped me achieve consistent profitability. I went from losing trades to making $5,000+ monthly within just 6 months.",
    rating: 5
  },
  {
    id: 2,
    name: "Grace Namwanje",
    role: "Crypto Investor & Trader",
    content: "Mentor Isiah's approach to cryptocurrency trading is phenomenal. His insights on blockchain technology, market trends, and portfolio diversification strategies gave me the confidence to navigate the volatile crypto markets. I've grown my portfolio by 300% in one year!",
    rating: 5
  },
  {
    id: 3,
    name: "David Okello",
    role: "Professional Sports Bettor",
    content: "Mentor MasterMinder's betting strategies and statistical analysis techniques revolutionized how I approach sports betting. His mentorship taught me discipline, bankroll management, and how to identify value bets. Now I consistently earn $2,000+ monthly from betting.",
    rating: 5
  },
  {
    id: 4,
    name: "Sarah Nabirye",
    role: "Affiliate Marketing Specialist",
    content: "Mentor Isiah showed me how to build a sustainable affiliate marketing business from scratch. His training on content creation, SEO, and conversion optimization helped me scale from $0 to $4,500 in monthly passive income within 8 months. Absolutely life-changing!",
    rating: 5
  },
  {
    id: 5,
    name: "Emmanuel Kato",
    role: "Professional Sports Betting Strategist",
    content: "Mentor Isiah's betting tips and strategies completely transformed my approach to sports betting. His analytical methods, risk management techniques, and insider knowledge helped me turn betting into a consistent income stream. I now earn $3,000+ monthly following his expert guidance.",
    rating: 5
  },
  {
    id: 6,
    name: "Patricia Nankya",
    role: "Full-Time Online Entrepreneur",
    content: "Both mentors have been instrumental in my success. Mentor Isiah's crypto guidance and Mentor MasterMinder's forex expertise gave me multiple income streams. I now run a successful online business generating over $8,000 monthly. Forever grateful for their mentorship!",
    rating: 5
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
      );
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  // If we don't have enough testimonials at the end, wrap around
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Real testimonials from students who transformed their lives through our mentorship programs
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(activeIndex / 3) * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full md:w-1/3 px-3">
                <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden transform transition-all duration-500 hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-white/70 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4 flex gap-1">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i} className="text-secondary text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-white/80 leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {Array(Math.ceil(testimonials.length / 3)).fill(0).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i * 3)}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(activeIndex / 3) === i 
                  ? 'bg-secondary w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
