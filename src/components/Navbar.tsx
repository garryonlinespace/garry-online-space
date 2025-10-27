import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-white text-2xl font-bold flex items-center">
            <img 
              src="/lovable-uploads/b8b2c2c0-7c13-43bb-94d8-47016c3456a7.png" 
              alt="Garry Online Space Logo" 
              className="h-10 w-10 mr-2"
            />
            <span className="text-secondary">Garry</span> 
            <span className="text-white">Online Space</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-secondary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="text-white hover:text-secondary transition-colors flex items-center gap-1">
              Services
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
              <Link to="/forex" className="block px-4 py-2 text-primary hover:bg-gray-100">
                Forex Trading
              </Link>
              <Link to="/crypto-trading" className="block px-4 py-2 text-primary hover:bg-gray-100">
                Crypto Trading
              </Link>
              <Link to="/betting-tips" className="block px-4 py-2 text-primary hover:bg-gray-100">
                Betting Tips and Tickets
              </Link>
              <Link to="/affiliate-marketing" className="block px-4 py-2 text-primary hover:bg-gray-100">
                Affiliate Marketing
              </Link>
            </div>
          </div>
          <Link to="/mentor-masterminder" className="text-white hover:text-secondary transition-colors">
            Mentor MasterMinder
          </Link>
          <Link to="/mentor-drema" className="text-white hover:text-secondary transition-colors">
            Mentor Isiah
          </Link>
          <Link to="/contact" className="text-white hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:bg-transparent active:bg-transparent hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <Link to="/" className="text-white hover:text-secondary px-4 py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <div className="px-4 py-2">
              <p className="text-white mb-2">Services</p>
              <div className="pl-4 flex flex-col gap-2">
                <Link to="/forex" className="text-white hover:text-secondary" onClick={() => setIsOpen(false)}>
                  Forex Trading
                </Link>
                <Link to="/crypto-trading" className="text-white hover:text-secondary" onClick={() => setIsOpen(false)}>
                  Crypto Trading
                </Link>
                <Link to="/betting-tips" className="text-white hover:text-secondary" onClick={() => setIsOpen(false)}>
                  Betting Tips and Tickets
                </Link>
                <Link to="/affiliate-marketing" className="text-white hover:text-secondary" onClick={() => setIsOpen(false)}>
                  Affiliate Marketing
                </Link>
              </div>
            </div>
            <Link to="/mentor-masterminder" className="text-white hover:text-secondary px-4 py-2" onClick={() => setIsOpen(false)}>
              Mentor MasterMinder
            </Link>
            <Link to="/mentor-drema" className="text-white hover:text-secondary px-4 py-2" onClick={() => setIsOpen(false)}>
              Mentor Isiah
            </Link>
            <Link to="/contact" className="text-white hover:text-secondary px-4 py-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Navbar;
