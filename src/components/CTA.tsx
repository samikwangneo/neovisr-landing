import { useEffect, useRef } from "react";

const CTA = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles: Particle[] = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      }
      
      requestAnimationFrame(animate);
    };
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <section className="py-16 bg-gradient-to-br from-red-600 via-red-500 to-red-700 relative overflow-hidden" id="download">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-5 text-white leading-tight animate-fadeIn"
            style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.15)" }}
          >
            Ready to Transform Your Academic Journey?
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed animate-fadeIn animation-delay-300">
            Join hundreds of UMD CS students who are already using NeoVisr to streamline 
            their academic planning and succeed in their computer science education.
          </p>
          
          <div className="flex justify-center mb-8 animate-fadeIn animation-delay-500">
            <a 
              href="#" 
              className="group relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-xl bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="/app_store.png" 
                alt="Download on the App Store" 
                className="h-16 relative z-10 rounded-xl shadow-lg"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "24/7", label: "AI Assistant Available" },
              { value: "100%", label: "UMD System Integration" },
              { value: "500+", label: "Students Helped" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-6 transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${700 + index * 200}ms` }}
              >
                <div className="text-4xl font-bold text-white mb-2 animate-fadeIn" style={{ animationDelay: `${700 + index * 200}ms` }}>
                  {stat.value}
                </div>
                <div className="text-red-100 animate-fadeIn" style={{ animationDelay: `${900 + index * 200}ms` }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// TypeScript interface for particles
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default CTA;
