import React from 'react';
import { Thermometer, Droplets, Waves, Zap, Database, BarChart3, Github as GitHub } from 'lucide-react';

const Science = () => {
  const scientificInputs = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Water Temperature",
      description: "Monitoring thermal stress and optimal growth conditions for different coral species."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "pH & Salinity",
      description: "Ocean acidification and salinity levels that directly impact coral calcification rates."
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Ocean Currents",
      description: "Water flow patterns that affect nutrient distribution and coral feeding behaviors."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Light Penetration",
      description: "Photosynthetic activity modeling based on depth, turbidity, and seasonal variations."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Nutrient Levels",
      description: "Nitrogen, phosphorus, and other essential nutrients that influence coral health."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Growth Patterns",
      description: "Species-specific growth rates and morphological development over time."
    }
  ];

  return (
    <section id="science" className="py-20" style={{ backgroundColor: '#100F0D' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Science Behind Reefcraft
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Our simulation engine combines marine biology, physics, and computer science to create 
              accurate models of coral reef ecosystems. Every aspect is grounded in peer-reviewed 
              research and real-world data.
            </p>
          </div>

          {/* How Coral Grows */}
          <div className="bg-gradient-to-r from-ocean-700 to-ocean-600 rounded-3xl p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Understanding Coral Growth
                </h3>
                <div className="space-y-4 text-ocean-100 leading-relaxed">
                  <p>
                    Coral reefs are among Earth's most complex ecosystems, built by tiny animals 
                    called polyps that secrete calcium carbonate to form their skeletons. This 
                    process, called calcification, is influenced by dozens of environmental factors.
                  </p>
                  <p>
                    Our models simulate the intricate relationships between coral polyps, their 
                    symbiotic algae (zooxanthellae), water chemistry, and physical forces to 
                    predict how reefs respond to changing conditions.
                  </p>
                  <p>
                    By understanding these mechanisms digitally, we can better predict reef 
                    resilience, test restoration strategies, and educate others about these 
                    incredible ecosystems.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="./public/WhatsApp Image 2025-07-22 at 19.40.16.jpeg" 
                  alt="Close-up of coral polyps"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Scientific Inputs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Environmental Factors We Model
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scientificInputs.map((input, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-ocean-600 hover:border-coral-400"
                  style={{ backgroundColor: '#2C4F59' }}
                >
                  <div className="text-coral-500 mb-6 group-hover:scale-110 transition-transform duration-200">
                    {input.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {input.title}
                  </h4>
                  <p className="text-white leading-relaxed">
                    {input.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How Our Engine Works */}
          <div className="bg-ocean-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">
                How Our Simulation Engine Works
              </h3>
              <p className="text-xl text-ocean-200 max-w-3xl mx-auto leading-relaxed">
                Reefcraft combines real-time sensor data with advanced computational models 
                to create living, breathing digital reef ecosystems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-coral-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">Data Collection</h4>
                <p className="text-ocean-200 leading-relaxed">
                  Real-time sensor data from reef sites in Indonesia and around the world 
                  feeds into our simulation models.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#C1D3BD' }}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">Physics Simulation</h4>
                <p className="text-ocean-200 leading-relaxed">
                  Advanced algorithms model coral growth, water flow, nutrient transport, 
                  and ecosystem interactions in real-time.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-coral-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">Visualization</h4>
                <p className="text-ocean-200 leading-relaxed">
                  Beautiful, scientifically accurate visualizations help researchers and 
                  educators explore reef dynamics like never before.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://github.com/TheReefcraftProject"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-ocean-100"
                className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-ocean-100"
                style={{ backgroundColor: '#2C4F59' }}
              >
                <GitHub className="w-5 h-5 mr-2" />
                Explore the Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;