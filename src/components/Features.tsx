import { Book, Calendar, Settings, User, Phone, Search } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Smart Course Guidance",
      description: "Get instant answers about CS degree requirements, prerequisites, and course planning from our AI trained on official UMD documents.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Scheduling",
      description: "Book advisor appointments directly through TerpEngage with our automated scheduling system. No more manual booking hassles.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Degree Audit Automation",
      description: "Automatically run degree audits through UMD's uAchieve system with secure 2FA authentication support.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "PDF Document Search",
      description: "Instantly search through comprehensive UMD CS advising documents for accurate and up-to-date information.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Personalized Experience",
      description: "Enjoy persistent chat history, custom profiles, and adaptive theming that learns your preferences.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Access your academic advisor anywhere with our React Native mobile app featuring light/dark mode support.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent animate-gradient-x">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NeoVisr combines cutting-edge AI technology with seamless UMD system integration 
            to provide the most comprehensive academic advising experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white backdrop-blur-sm hover:bg-white/90 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="w-full h-1 mt-6 rounded-full bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-red-200 group-hover:to-transparent transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
