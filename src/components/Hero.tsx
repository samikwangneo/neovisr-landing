
const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-red-50 via-white to-pink-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              AI-Powered Academic Advising
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent leading-tight">
              Meet NeoVisr
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your intelligent academic advisor for UMD Computer Science. 
              Get instant answers about degree requirements, schedule appointments, 
              and navigate your academic journey with AI-powered guidance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Try NeoVisr Now
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-500">
                    NeoVisr Chat Interface
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-2xl max-w-xs">
                      Hi! I need help planning my course schedule for next semester. What CS courses should I take?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-2xl max-w-xs">
                      I'd be happy to help! Based on your current progress, I recommend CMSC351 (Algorithms) and CMSC330 (Programming Languages). Would you like me to check prerequisites and scheduling?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
