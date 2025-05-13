
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Instagram, TikTok } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const MentorMasterminder = () => {
  const handleContactWhatsApp = () => {
    window.open(`https://wa.me/256754072448`, '_blank');
  };

  const handleOpenTikTok = () => {
    window.open("https://www.tiktok.com/@mentormasterminder?_t=ZM-8wHwDTUVvRG&_r=1", "_blank");
  };

  const handleOpenInstagram = () => {
    window.open("https://www.instagram.com/mentormasterminder?igsh=b3cxZ3pzaGo4d2tu", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Mentor MasterMinder</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Expert trading coach specializing in Forex and cryptocurrency markets
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Avatar className="w-full aspect-square h-auto rounded-full border-4 border-primary">
                  <AvatarImage 
                    src="/lovable-uploads/93335498-a668-464f-950d-8ccf1d8dfc7f.png"
                    alt="Mentor MasterMinder" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-5xl text-primary font-bold">MM</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-6">About Mentor MasterMinder</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I joined the online space in 2020. I am the founder of "Xence Technologies". I have been working with the big management in East Africa called "Best Tech" from Kenya.
                  </p>
                  <p>
                    I am one of the biggest mentors in the Affiliate Marketing industry. 
                    In my first platform in 2020, I made 1M UGX. In other platforms, my income increased gradually up-to-date. 
                  </p>
                  <p>
                    Then I joined the Crypto industry and the trading trading industry in the same year.
                    I first invested in learning until L became silent (Earning).
                    In Crypto industry, I worked with some good investors from Dubai with their projects such as "Bit Dubai" with other individuals allover East Africa.
                  </p>
                  <p>
                    Now I am fully funded profitable Day trader and I trade both crypto and the Forex financial markets. 
                    I am a multi self made millionaire and I am still a student here in Uganda in one of the biggest schools.
                  </p>
                  <p>
                    My story is inspirational, I am the Next Generation, and I aim for the best and helping of other youth there interested in transforming their lives.
                  </p>
                  <p className="font-bold italic">
                    "I am going to be the greatest in East Africa"
                  </p>

                  <div className="mt-8">
                    <h3 className="font-bold text-xl mb-2">Roles:</h3>
                    <p>
                      I give out Forex Trading mentorship to students for free of charge but there is a commitment fee to pay in order to join one of my communities where we trade as a team and grow small accounts through compounding.
                    </p>
                    <p>
                      In holidays, I always setup a challenge of growing 15 USD - 350 USD (50k - 1M UGX).
                    </p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <h3 className="font-bold text-xl">Specialties:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Advanced Forex trading strategies</li>
                      <li>Cryptocurrency market analysis</li>
                      <li>Risk management and portfolio building</li>
                      <li>Price action and technical analysis</li>
                      <li>Trading psychology mastery</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-bold text-xl mb-4">Social Media Handles:</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        onClick={handleOpenTikTok}
                        className="bg-black hover:bg-gray-800 text-white flex items-center gap-2"
                      >
                        <TikTok className="h-5 w-5" />
                        TikTok
                      </Button>

                      <Button 
                        onClick={handleOpenInstagram}
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white flex items-center gap-2"
                      >
                        <Instagram className="h-5 w-5" />
                        Instagram
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-xl mb-4">Contact Mentor MasterMinder:</h3>
                  <Button 
                    onClick={handleContactWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Contact on WhatsApp (+256 754 072448)
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

export default MentorMasterminder;
