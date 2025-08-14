import React from 'react';
import { Heart, Globe, Users, Microscope } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Our Technology",
      description: "Scientifically grounded, physically based models that simulate coral growth with unprecedented accuracy."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Why It Matters",
      description: "Coral reefs support 25% of marine life but face unprecedented threats. Digital tools help us understand and protect them."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Open Collaboration",
      description: "Built by a global community of researchers, developers, and ocean advocates working together for reef conservation."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Live Data Integration",
      description: "Real-time sensor data from reef sites worldwide feeds into our simulations for accurate ecosystem modeling."
    }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#100F0D' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
              We believe that understanding coral reef ecosystems through advanced simulation 
              can accelerate conservation efforts and inspire a new generation of ocean stewards. 
              Reefcraft democratizes access to cutting-edge reef modeling technology, making it 
              available to researchers, educators, and conservationists worldwide.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-ocean-100"
                style={{ backgroundColor: '#2C4F59' }}
              >
                <div className="text-coral-500 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-ocean-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="bg-gradient-to-r from-ocean-600 to-teal-600 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">
                  Our Story
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Reefcraft began as a vision to bridge the gap between marine science and 
                  technology. Recognizing that coral reefs are among Earth's most complex 
                  and threatened ecosystems, we set out to create tools that could help 
                  scientists, educators, and conservationists better understand these 
                  underwater worlds.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Today, we're building a global community of contributors who share our 
                  passion for ocean conservation and open science. Together, we're creating 
                  digital twin reefs that could revolutionize how we study, protect, and 
                  restore coral ecosystems worldwide.
                </p>
                <button className="bg-coral-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coral-600 transition-colors duration-200 transform hover:scale-105">
                  Join Our Community
                </button>
              </div>
              <div className="relative h-96 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-coral-400/20 to-teal-400/20"></div>
                <img 
                  src="./public/WhatsApp Image 2025-07-22 at 19.40.16.jpeg" 
                  alt="Vibrant coral reef ecosystem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Vision for the Future
            </h3>
            <p className="text-xl text-ocean-100 max-w-4xl mx-auto leading-relaxed">
              We envision a world where digital reef simulations help guide restoration efforts, 
              where students can explore coral ecosystems in immersive detail, and where 
              researchers can test conservation strategies before implementing them in the real world. 
              Through open collaboration and cutting-edge science, we're making this vision a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;