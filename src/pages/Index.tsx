
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
      <main>
        <div 
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${tradingBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10">
            <Hero />
            <Services />
            <Testimonials />
            <CTASection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
