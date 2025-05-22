
const Team = () => {
  const teamMembers = [
    {
      name: "Samik Wangneo",
      role: "Lead Developer",
      description: "Full-stack development and AI integration specialist",
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Rivan Parikh",
      role: "Backend Engineer",
      description: "System architecture and automation expert",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Eswar Karavadi",
      role: "Mobile Developer",
      description: "React Native and user experience specialist",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Aymaan Hussain",
      role: "AI Researcher",
      description: "Machine learning and natural language processing",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate group of UMD Computer Science students dedicated to revolutionizing 
            academic advising through innovative technology and user-centered design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {member.name}
              </h3>
              <p className="text-red-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-full border border-red-200">
            <span className="text-red-600 font-semibold">University of Maryland</span>
            <span className="text-gray-400">•</span>
            <span className="text-red-600 font-semibold">Computer Science</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
