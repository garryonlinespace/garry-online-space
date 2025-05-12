
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const MentorDrema = () => {
  const handleContactWhatsApp = () => {
    window.open(`https://wa.me/256761281222`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Mentor Drema</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Expert in Betting strategies, Tips, and Affiliate Marketing
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-lg w-full aspect-square flex items-center justify-center">
                  <span className="text-5xl text-primary font-bold">MD</span>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-6">About Mentor Drema</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mentor Drema is a leading expert in sports betting strategies and affiliate marketing with 
                    years of experience in helping students build consistent income streams. Their data-driven 
                    approach to sports analysis has helped hundreds of students make profitable betting decisions.
                  </p>
                  
                  <p>
                    With specialized knowledge in both betting markets and digital marketing, Mentor Drema 
                    offers unique insights into building sustainable online income through multiple channels.
                    Their coaching style focuses on practical implementation and real-world results.
                  </p>

                  <div className="mt-8 space-y-3">
                    <h3 className="font-bold text-xl">Specialties:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Professional betting tips and strategies</li>
                      <li>Weekly winning tickets</li>
                      <li>Affiliate marketing campaign development</li>
                      <li>Sports market analysis</li>
                      <li>Passive income building techniques</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={handleContactWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Contact on WhatsApp (+256 761 281222)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentorDrema;
