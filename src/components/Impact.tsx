import React from 'react';
import { Target, Lightbulb, Globe, TrendingUp, Users, BookOpen } from 'lucide-react';

const Impact = () => {
  const visionPoints = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Twin Reefs",
      description: "Create precise digital replicas of real reef systems that respond to environmental changes in real-time."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Restoration Planning",
      description: "Test and optimize coral restoration strategies before implementing them in the field."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Tools",
      description: "Immersive learning experiences that bring coral reef science into classrooms worldwide."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Research Acceleration",
      description: "Enable researchers to run thousands of scenarios in the time it would take to conduct one field study."
    }
  ];

  const impactStats = [
    { number: "25%", label: "of marine species depend on coral reefs" },
    { number: "500M", label: "people rely on reefs for food and income" },
    { number: "50%", label: "of coral reefs lost in the last 30 years" },
    { number: "2050", label: "when 99% of reefs may be gone without action" }
  ];

  return (
    <section id="impact" className="py-20" style={{ backgroundColor: '#100F0D' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vision for the Future
            </h2>
            <p className="text-xl text-white
              max-w-4xl mx-auto leading-relaxed">
              We're building more than just software—we're creating tools that could fundamentally 
              change how we understand, protect, and restore coral reef ecosystems around the world.
            </p>
          </div>

          {/* The Urgency */}
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-3xl p-12 text-white mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">The Coral Crisis</h3>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Coral reefs are disappearing at an alarming rate due to climate change, pollution, 
                and human activity. But with the right tools and collective action, we can still 
                make a difference.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Points */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="group bg-ocean-700 hover:bg-ocean-600 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-ocean-600 hover:border-coral-400"
              >
                <div className="text-coral-500 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-ocean-200 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Future Mockup */}
          <div className="bg-ocean-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">
                  Imagine the Possibilities
                </h3>
                <div className="space-y-4 text-white
                  leading-relaxed">
                  <p>
                    Marine biologists testing restoration techniques in virtual reefs before 
                    deploying them in the ocean
                  </p>
                  <p>
                    Students exploring coral ecosystems in immersive 3D environments, 
                    learning about symbiosis and biodiversity
                  </p>
                  <p>
                    Researchers running climate change scenarios to predict reef resilience 
                    and identify conservation priorities
                  </p>
                  <p>
                    Global collaboration on reef protection strategies, powered by 
                    shared data and open-source tools
                  </p>
                </div>
                <button className="mt-8 bg-coral-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coral-600 transition-colors duration-200 transform hover:scale-105">
                  Help Make It Reality
                </button>
              </div>
              <div className="relative h-96 md:h-full">
                <img 
                  src="/5842282798_aa6b923c04_b.jpg" 
                  alt="Thriving coral reef ecosystem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-ocean-900/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-white mb-6">
              Together, We Can Save Our Reefs
            </h3>
            <p className="text-xl text-ocean-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Every line of code, every scientific insight, every shared story brings us closer 
              to a future where coral reefs thrive. Join us in building the tools that could 
              help save one of Earth's most precious ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-coral-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coral-600 transition-colors duration-200 transform hover:scale-105">
                Start Contributing Today
              </button>
              <button className="border-2 border-coral-400 text-coral-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-coral-400 hover:text-white transition-colors duration-200">
                Learn More About Our Impact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;