
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary-dark">
            Northstar Pay
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-primary-dark transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-primary-dark transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-700 hover:text-primary-dark transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-primary-yellow hover:bg-yellow-500 text-primary-dark font-medium rounded-full px-6 animate-bounce hover:animate-pulse transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-gray-700 hover:text-primary-dark transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left text-gray-700 hover:text-primary-dark transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-left text-gray-700 hover:text-primary-dark transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-primary-yellow hover:bg-yellow-500 text-primary-dark font-medium rounded-full px-6 w-fit animate-bounce hover:animate-pulse transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
