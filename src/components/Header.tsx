import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
            NeoVisr
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "About", "Team", "Download"].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`} 
              className="text-gray-600 hover:text-red-600 relative group transition-colors"
            >
              <span>{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
          <a 
            href="#download" 
            className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:shadow-red-500/20 hover:scale-105"
          >
            Download App
          </a>
        </div>
        
        <button 
          className="md:hidden relative z-50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-red-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className={`w-6 h-6 transition-colors duration-300 ${isMenuOpen ? "text-red-600" : "text-gray-800"}`} />
        </button>
      </div>
      
      {/* Mobile menu with animation */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center z-40 transition-all duration-500 ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {["Features", "About", "Team", "Download"].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`} 
              className="text-2xl font-semibold text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${100 + i * 50}ms` }}
            >
              {item}
            </a>
          ))}
          <div className="pt-8 flex justify-center">
            <a 
              href="#download" 
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-xl transition-all text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
