import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-alpha-gray-light">
      <div className="container mx-auto px-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between py-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-alpha-charcoal">
              AlphaGrid
            </span>
          </div>

          {/* Contact Us Button */}
          <Button 
            variant="outline" 
            className="border-alpha-purple text-alpha-purple hover:bg-alpha-purple hover:text-white transition-all duration-300 font-semibold px-6 py-2"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden py-4 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-alpha-charcoal">
              AlphaGrid
            </span>
          </div>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="border-alpha-purple text-alpha-purple hover:bg-alpha-purple hover:text-white transition-all duration-300 font-semibold px-6 py-2 w-full max-w-xs"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;