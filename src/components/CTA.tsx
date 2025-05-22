
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-red-700 relative overflow-hidden" id="download">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Transform Your Academic Journey?
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-10 leading-relaxed">
            Join hundreds of UMD CS students who are already using NeoVisr to streamline 
            their academic planning and succeed in their computer science education.
          </p>
          
          <div className="flex justify-center mb-12">
            <a href="#" className="flex items-center gap-2 px-10 py-5 bg-black text-white rounded-xl text-lg font-bold hover:bg-gray-900 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                <path d="M10 2c1 .5 2 2 2 5" />
              </svg>
              <span>Download for iOS</span>
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-red-100">AI Assistant Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100">UMD System Integration</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-red-100">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
