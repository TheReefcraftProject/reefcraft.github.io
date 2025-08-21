import React from 'react';
import { ArrowRight, Play, Github as GitHub, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-ocean-900 via-ocean-800 to-teal-900 overflow-hidden">
      {/* Underwater Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-coral-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Coral Reef Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/5842282798_aa6b923c04_b.jpg" 
          alt="Coral reef background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-ocean-800/70 to-ocean-900/90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Bringing Coral Reefs to Life
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-400 to-teal-400">
                {' '}in the Digital World
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              Reefcraft is an open-source platform for simulating coral growth and reef ecosystems 
              using scientifically grounded, physically based models. Together, we're creating digital 
              tools to understand, protect, and restore our ocean's most precious ecosystems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">Open</div>
                <div className="text-white text-sm">Source Platform</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">Science</div>
                <div className="text-white text-sm">Based Models</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">Global</div>
                <div className="text-white text-sm">Community</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">Real</div>
                <div className="text-white text-sm">Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-white/70 text-sm font-medium">Scroll</div>
          <div className="w-6 h-6 border-2 border-white/50 border-t-0 border-l-0 transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;