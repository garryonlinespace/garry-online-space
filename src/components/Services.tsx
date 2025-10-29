
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  ChartBar, 
  Globe, 
  Users 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Custom HandCoins icon since it's not in the provided list
const HandCoins = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
    <path d="m7 21 1.9-1.9c.4-.4 1-.6 1.6-.6h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1" />
    <circle cx="16" cy="9" r="2.9" />
    <circle cx="6" cy="5" r="3" />
  </svg>
);

const services = [
  {
    id: "forex",
    icon: ChartBar,
    title: "Forex Trading",
    description: "Learn how to analyze markets, execute trades, and develop profitable Forex trading strategies with our expert-led courses.",
    link: "/forex"
  },
  {
    id: "crypto",
    icon: Globe,
    title: "Crypto Trading",
    description: "Discover how to navigate the cryptocurrency markets, identify opportunities, and build a diversified digital asset portfolio.",
    link: "/crypto-trading"
  },
  {
    id: "betting",
    icon: HandCoins,
    title: "Betting Tips and Tickets",
    description: "Get professional betting tips, winning tickets and develop effective strategies with our data-driven approach to sports analysis.",
    link: "/betting-tips"
  },
  {
    id: "affiliate",
    icon: Users,
    title: "Affiliate Marketing",
    description: "Build profitable affiliate marketing businesses by learning effective promotion strategies and passive income techniques.",
    link: "/affiliate-marketing"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Comprehensive training programs to help you succeed in various online money-making opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-2 hover:shadow-lg transition-all bg-white/95 backdrop-blur-sm overflow-hidden relative animate-subtle-glow" style={{ borderColor: '#1e40af' }}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-secondary hover:bg-secondary/80 text-primary font-semibold">
            <Link to="/courses">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
