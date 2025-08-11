import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className={`absolute inset-0 transition-all duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} style={{ backgroundColor: '#100F0D' }}></div>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-coral-600 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
            </div>
            <div className="text-2xl font-bold text-ocean-600">
              Reefcraft
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Science', 'Get Involved', 'Impact', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-medium transition-colors duration-200 hover:text-teal-500 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://github.com/TheReefcraftProject"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors duration-200 hover:bg-teal-500/20 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/reefcraft"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors duration-200 hover:bg-teal-500/20 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {['Home', 'About', 'Science', 'Get Involved', 'Impact', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium"
              >
                {item}
              </button>
            ))}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a
                href="https://github.com/TheReefcraftProject"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-teal-500 transition-colors duration-200"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/reefcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-teal-500 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;