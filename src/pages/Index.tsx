
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import tradingBg from "@/assets/trading-background-4k.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main style={{ backgroundColor: '#1a1a1a' }}>
        <Hero />
        <Services />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
