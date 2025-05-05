
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-automation-purple to-automation-teal">AutoTemplate</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="#templates" className="text-base font-medium text-gray-700 hover:text-automation-purple">
              Templates
            </a>
            <a href="#features" className="text-base font-medium text-gray-700 hover:text-automation-purple">
              Features
            </a>
            <a href="#how-it-works" className="text-base font-medium text-gray-700 hover:text-automation-purple">
              How It Works
            </a>
            <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-automation-purple">
              Pricing
            </a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="outline" className="mr-4">
              Sign in
            </Button>
            <Button className="bg-automation-purple hover:bg-automation-indigo text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="pt-2 pb-4 px-4 space-y-1">
            <a 
              href="#templates" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automation-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </a>
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automation-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automation-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-automation-purple hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="mt-6 space-y-2">
              <Button variant="outline" className="w-full">
                Sign in
              </Button>
              <Button className="w-full bg-automation-purple hover:bg-automation-indigo text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
