
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MarqueeTicker from "@/components/MarqueeTicker";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MarqueeTicker />
      <main>
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
