const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                NeoVisr
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering UMD Computer Science students with AI-powered academic advising. 
              Built by students, for students, to make academic planning effortless and efficient.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <a 
                href="#" 
                className="group relative transform transition-all duration-300 hover:scale-105"
              >
                <img 
                  src="/app_store.png" 
                  alt="Download on the App Store" 
                  className="h-12 relative z-10 rounded-xl"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            </div>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">App</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#features" className="hover:text-red-500 transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-red-500 transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 NeoVisr. Built with ❤️ at University of Maryland.
          </p>
          <div className="text-gray-400 text-sm">
            Made by Samik, Rivan, Eswar & Aymaan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
