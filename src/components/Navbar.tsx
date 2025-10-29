import { Link } from "react-router-dom";
import MarqueeTicker from "@/components/MarqueeTicker";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <MarqueeTicker />
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-white hover:text-secondary" />
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;