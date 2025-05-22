
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Revolutionizing Academic Advising
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                NeoVisr bridges the gap between students and academic resources through intelligent automation 
                and AI-powered assistance. Our platform understands the complexities of UMD's Computer Science 
                program and provides personalized guidance at every step.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">AI-Powered Intelligence</h4>
                    <p className="text-gray-600">Trained on comprehensive UMD CS documentation for accurate, reliable answers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Seamless Integration</h4>
                    <p className="text-gray-600">Direct integration with UMD systems including uAchieve and TerpEngage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Student-Centered Design</h4>
                    <p className="text-gray-600">Built by students, for students, understanding real academic challenges.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ask Questions</h4>
                      <p className="text-gray-600 text-sm">Chat naturally about your academic needs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Get AI Guidance</h4>
                      <p className="text-gray-600 text-sm">Receive personalized, accurate advice</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Take Action</h4>
                      <p className="text-gray-600 text-sm">Schedule appointments and complete tasks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-red-400 to-red-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-red-400 to-red-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
