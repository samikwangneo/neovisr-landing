
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-2xl font-bold text-red-600">
            NeoVisr
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-red-600 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors">About</a>
          <a href="#team" className="text-gray-600 hover:text-red-600 transition-colors">Team</a>
          <a href="#download" className="text-gray-600 hover:text-red-600 transition-colors">Download</a>
        </nav>
        
        <div className="hidden md:flex items-center">
          <a href="#download" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:shadow-lg transition-all">
            Download App
          </a>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-red-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors">About</a>
            <a href="#team" className="text-gray-600 hover:text-red-600 transition-colors">Team</a>
            <a href="#download" className="text-gray-600 hover:text-red-600 transition-colors">Download</a>
            <div className="pt-4 border-t border-gray-200">
              <a href="#download" className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-lg hover:shadow-lg transition-all">
                Download App
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
