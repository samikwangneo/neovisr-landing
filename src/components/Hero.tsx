import { useEffect, useRef } from "react";

const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!glowRef.current) return;
      
      const { clientX, clientY } = event;
      const rect = glowRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      glowRef.current.style.setProperty('--mouse-x', `${x}px`);
      glowRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="pt-24 pb-12 relative min-h-screen flex items-center overflow-hidden" ref={glowRef}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_var(--mouse-x)_var(--mouse-y),rgba(255,70,70,0.15),transparent_40%)]"></div>
        </div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 transform transition-all duration-1000 hover:scale-105">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4 animate-fadeIn">
              AI-Powered Academic Advising
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-pink-500 to-red-700 bg-clip-text text-transparent leading-tight animate-gradient-x">
              Meet NeoVisr
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fadeIn animation-delay-500">
              Your intelligent academic advisor for UMD Computer Science. 
              Get instant answers about degree requirements, schedule appointments, 
              and navigate your academic journey with AI-powered guidance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn animation-delay-1000">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl text-lg font-semibold hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:scale-105 transition-all duration-300">
              Try NeoVisr Now
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:border-red-600 hover:text-red-600 hover:shadow-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="relative max-w-4xl mx-auto animate-fadeIn animation-delay-1500">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200 transform transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] duration-700">
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
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-2xl max-w-xs animate-slideInLeft">
                      Hi! I need help planning my course schedule for next semester. What CS courses should I take?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="relative px-4 py-2 rounded-2xl max-w-xs animate-slideInRight animation-delay-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-500 to-amber-500 animate-gradient-x"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-red-500/80 to-amber-500/80 animate-gradient-x" style={{ animationDelay: "1s" }}></div>
                      <div className="relative z-10 text-white p-0.5">
                        I'd be happy to help! Based on your current progress, I recommend CMSC351 (Algorithms) and CMSC330 (Programming Languages). Would you like me to check prerequisites and scheduling?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-100 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-float"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-pink-200 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
