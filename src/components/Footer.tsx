import React from 'react';
import { Heart, Github as GitHub, MessageCircle, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-coral-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                </div>
                <div className="text-2xl font-bold text-coral-400">Reefcraft</div>
              </div>
              <p className="text-ocean-200 mb-6 leading-relaxed max-w-md">
                An open-source platform for simulating coral growth and reef ecosystems. 
                Together, we're building digital tools to understand, protect, and restore 
                our ocean's most precious ecosystems.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/reefcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ocean-800 p-3 rounded-full hover:bg-coral-500 transition-colors duration-200 transform hover:scale-110"
                >
                  <GitHub className="w-5 h-5" />
                </a>
                <a
                  href="https://discord.gg/reefcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ocean-800 p-3 rounded-full hover:bg-coral-500 transition-colors duration-200 transform hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="mailto:reefcraft.ai@gmail.com"
                  className="bg-ocean-800 p-3 rounded-full hover:bg-coral-500 transition-colors duration-200 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Project</h4>
              <ul className="space-y-3 text-ocean-200">
                {['About Us', 'The Science', 'Get Involved', 'Impact', 'Documentation'].map((item) => (
                  <li key={item}>
                    <button className="hover:text-teal-400 transition-colors duration-200">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Community</h4>
              <ul className="space-y-3 text-ocean-200">
                {['GitHub Repository', 'Discord Chat', 'Contributors', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <button className="hover:text-teal-400 transition-colors duration-200">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-ocean-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-ocean-200 mb-4 md:mb-0">
                © 2025 Reefcraft. Open source under MIT License.
              </p>
              <p className="text-ocean-200 flex items-center">
                Made with <Heart className="w-4 h-4 text-teal-400 mx-1" /> for our oceans
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-ocean-300 text-sm flex items-center justify-center">
                <Globe className="w-4 h-4 mr-2" />
                A global community working to save coral reefs through open science and technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;