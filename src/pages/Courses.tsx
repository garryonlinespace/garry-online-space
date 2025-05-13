
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
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

const courses = [
  {
    id: "forex",
    icon: ChartBar,
    title: "Forex Trading",
    description: "Learn how to analyze markets, execute trades, and develop profitable Forex trading strategies with our expert-led courses. Duration: 3 months",
    link: "/forex"
  },
  {
    id: "crypto",
    icon: Globe,
    title: "Crypto Trading",
    description: "Discover how to navigate the cryptocurrency markets, identify opportunities, and build a diversified digital asset portfolio. Duration: 3 months",
    link: "/crypto-trading"
  },
  {
    id: "betting",
    icon: HandCoins,
    title: "Betting Tips and Tickets",
    description: "Get professional betting tips, winning tickets, and learn effective betting strategies with our data-driven approach. Tickets: USD 10/week",
    link: "/betting-tips"
  },
  {
    id: "affiliate",
    icon: Users,
    title: "Affiliate Marketing",
    description: "Build profitable affiliate marketing businesses by learning effective promotion strategies and passive income techniques. Duration: 2 weeks",
    link: "/affiliate-marketing"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
            <p className="text-lg max-w-2xl">
              Comprehensive training programs to help you succeed in various online money-making opportunities
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Explore Our Programs</h2>
              <p className="text-lg text-gray-600">
                Each of our courses is designed to provide you with practical knowledge and skills that you can immediately apply to start generating income online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {courses.map((course) => (
                <Card key={course.id} className="border-l-4 border-secondary hover:shadow-lg transition-shadow bg-white overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <course.icon className="text-primary h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                      <Link to={course.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
