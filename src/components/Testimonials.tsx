import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg max-w-2xl mx-auto text-white/80">
            Real testimonials from students who transformed their lives through our mentorship programs
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: Show 3 cards */}
          <div className="hidden md:block overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                willChange: 'transform'
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="w-1/3 flex-shrink-0 px-3">
                  <Card className="backdrop-blur-sm border-0 overflow-hidden transform transition-all duration-300 hover:scale-105 h-full" style={{ backgroundColor: '#1e40af' }}>
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

          {/* Mobile: Show 1 card */}
          <div className="md:hidden overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                willChange: 'transform'
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-3">
                  <Card className="backdrop-blur-sm border-0 overflow-hidden h-full" style={{ backgroundColor: '#1e40af' }}>
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

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i 
                  ? 'bg-secondary w-8' 
                  : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;