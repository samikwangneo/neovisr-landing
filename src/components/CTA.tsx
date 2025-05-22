
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
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
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Join hundreds of UMD CS students who are already using NeoVisr to streamline 
            their academic planning and succeed in their computer science education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-xl text-lg font-bold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Download NeoVisr
            </button>
            <button className="px-10 py-5 border-2 border-white text-white rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">AI Assistant Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">UMD System Integration</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
