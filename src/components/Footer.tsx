
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 flex items-center">
              <img 
                src="/lovable-uploads/b8b2c2c0-7c13-43bb-94d8-47016c3456a7.png" 
                alt="Garry Online Space Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="text-secondary">Garry</span> 
              <span className="text-white">Online Space</span>
            </Link>
            <p className="text-white/70 mt-4">
              Empowering individuals with the knowledge and skills to succeed in the digital economy.
            </p>
            <p className="text-white/70 mt-4 italic">
              "Online is the future"
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg border-b border-white/20 pb-2 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/forex" className="text-white/70 hover:text-secondary transition-colors">
                  Forex Trading
                </Link>
              </li>
              <li>
                <Link to="/crypto-trading" className="text-white/70 hover:text-secondary transition-colors">
                  Crypto Trading
                </Link>
              </li>
              <li>
                <Link to="/betting-tips" className="text-white/70 hover:text-secondary transition-colors">
                  Betting Tips and Tickets
                </Link>
              </li>
              <li>
                <Link to="/affiliate-marketing" className="text-white/70 hover:text-secondary transition-colors">
                  Affiliate Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg border-b border-white/20 pb-2 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentor-masterminder" className="text-white/70 hover:text-secondary transition-colors">
                  Mentor MasterMinder
                </Link>
              </li>
              <li>
                <Link to="/mentor-drema" className="text-white/70 hover:text-secondary transition-colors">
                  Mentor Drema
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/70 hover:text-secondary transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="text-white/70 hover:text-secondary transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg border-b border-white/20 pb-2 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-white/70">Address:</span>
                <span className="ml-2">Kampala, Uganda</span>
              </li>
              <li className="flex">
                <span className="text-white/70">MasterMinder:</span>
                <span className="ml-2">+256 754 072448</span>
              </li>
              <li className="flex">
                <span className="text-white/70">Drema:</span>
                <span className="ml-2">+256 761 281222</span>
              </li>
              <li className="flex flex-wrap">
                <span className="text-white/70">Email:</span>
                <span className="ml-2">garryonlinespace101@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Garry Online Space. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/70 text-sm hover:text-secondary mr-6">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 text-sm hover:text-secondary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
