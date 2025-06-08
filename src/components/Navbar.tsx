
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-500">AmboEats</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </a>
              <a href="#story" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Our Story
              </a>
              <a href="#team" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Our Team
              </a>
              <a href="#values" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Why Choose Us
              </a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Order Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a href="#about" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                About Us
              </a>
              <a href="#story" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                Our Story
              </a>
              <a href="#team" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                Our Team
              </a>
              <a href="#values" className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-sm font-medium">
                Why Choose Us
              </a>
              <div className="px-3 py-2">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
