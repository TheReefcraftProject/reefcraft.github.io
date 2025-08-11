import React from 'react';
import { Code, Microscope, Palette, PenTool, Github as GitHub, MessageCircle, Mail, Heart } from 'lucide-react';

const GetInvolved = () => {
  const contributionAreas = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developers",
      description: "Help build simulation algorithms, improve performance, or create new visualization tools.",
      skills: ["JavaScript/TypeScript", "Python", "WebGL", "Scientific Computing"]
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Marine Scientists",
      description: "Contribute your expertise to improve model accuracy and validate simulation results.",
      skills: ["Marine Biology", "Coral Ecology", "Data Analysis", "Field Research"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Designers",
      description: "Create beautiful, intuitive interfaces that make complex science accessible to everyone.",
      skills: ["UI/UX Design", "Data Visualization", "3D Modeling", "Scientific Illustration"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Storytellers",
      description: "Help communicate our mission through compelling content, documentation, and outreach.",
      skills: ["Science Communication", "Technical Writing", "Content Strategy", "Education"]
    }
  ];

  const currentNeeds = [
    "Marine biologists to validate coral growth models",
    "Frontend developers for interactive visualizations", 
    "UX designers for educational interfaces",
    "Data scientists for sensor data integration",
    "Technical writers for documentation",
    "Community managers for Discord and social media"
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-ocean-800 to-ocean-900">
    <section id="get-involved" className="py-20" style={{ backgroundColor: '#100F0D' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Reef Revolution
            </h2>
            <p className="text-xl text-ocean-100 max-w-4xl mx-auto leading-relaxed">
              Reefcraft is powered by a global community of passionate individuals who believe 
              in the power of open science and technology to protect our oceans. There's a place 
              for everyone in our mission to save coral reefs.
            </p>
          </div>

          {/* Contribution Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contributionAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-sand-200"
              >
                <div className="text-coral-500 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-ocean-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-ocean-200 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-ocean-100 mb-2">Skills we need:</div>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Needs */}
          {/* Get Started */}
          <div className="bg-gradient-to-r from-ocean-600 to-teal-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6 text-ocean-900">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl text-ocean-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you have 5 minutes or 5 hours a week, your contribution can help protect 
              coral reefs for future generations. Join our community and start making an impact today.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="https://github.com/TheReefcraftProject"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
              >
                <GitHub className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-lg mb-2">GitHub</div>
                <div className="text-ocean-200 text-sm">Contribute code, report issues, or review pull requests</div>
              </a>
              
              <a
                href="https://discord.gg/reefcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-lg mb-2">Discord</div>
                <div className="text-ocean-200 text-sm">Join discussions, ask questions, and connect with the community</div>
              </a>
              
              <a
                href="mailto:reefcraft.ai@gmail.com"
                className="group bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-lg mb-2">Email</div>
                <div className="text-ocean-200 text-sm">Reach out directly for partnerships or questions</div>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-ocean-200 flex items-center justify-center">
                Made with <Heart className="w-4 h-4 text-coral-400 mx-2" /> by ocean lovers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;