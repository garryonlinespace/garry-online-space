
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import mentorIsiahPlaceholder from "@/assets/mentor-isiah-placeholder.jpg";

const MentorDrema = () => {
  const handleContactWhatsApp = () => {
    window.open(`https://wa.me/256761281222`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mentor Isiah</h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto px-2">
              Expert in Betting strategies, Tips, and Affiliate Marketing
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <Avatar className="w-64 h-64 rounded-full border-4 border-primary">
                  <AvatarImage 
                    src={mentorIsiahPlaceholder}
                    alt="Mentor Isiah" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-5xl text-primary font-bold">MI</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">About Mentor Isiah</h2>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                  <p>
                    I joined the online space in 2022. I am the founder of "Garrison Enterprises (Uganda) Limited". I am a programmer and a software engineer. 
                  </p>
                  <p>
                    In my enrollment in Online Space, I started as an investor in Crypto and Forex Trading.
                    Later on I started engaging in Forex Trading lessons by one of the great profitable Forex traders in Uganda. 
                  </p>
                  <p>
                    I went on expanding my knowledge in online businesses and also booming businesses online.
                    After sometime, from the time of my enrollment, I also joined Affiliate Marketing which was introduced to me by my friend "Mentor MasterMinder".
                  </p>
                  <p>
                    In 2023 December, it's when I fully got into contact with Mentor MasterMinder. 
                    We met online as traders but by then, he was abit more experienced than me, but after sometime, he taught me skills in Forex Trading and I started booming in Forex trading and the Online Space at large.
                  </p>

                  <div className="mt-6 md:mt-8">
                    <h3 className="font-bold text-lg md:text-xl mb-2">Roles:</h3>
                    <p className="text-sm md:text-base">
                      I give out mentorship in Forex Trading, psychological skills in online businesses.
                    </p>
                    <p className="text-sm md:text-base">
                      I also offer money risk management skills in the online businesses.
                      Together with Mentor MasterMinder, we aim at giving you the best service.
                    </p>
                  </div>

                  <div className="mt-6 md:mt-8 space-y-3">
                    <h3 className="font-bold text-lg md:text-xl">Specialties:</h3>
                    <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base">
                      <li>Professional betting tips and strategies</li>
                      <li>Weekly winning tickets</li>
                      <li>Affiliate marketing campaign development</li>
                      <li>Sports market analysis</li>
                      <li>Passive income building techniques</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <h3 className="font-bold text-lg md:text-xl mb-4">Contact Mentor Isiah:</h3>
                  <Button 
                    onClick={handleContactWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 w-full md:w-auto text-sm md:text-base"
                  >
                    <MessageSquare className="h-5 w-5" />
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
