import React from 'react';
import { Mail, Github as GitHub, MessageCircle, Send, Globe, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ocean-900 via-ocean-800 to-teal-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Let's Protect Reefs Together
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have questions about Reefcraft? Want to collaborate? Looking to support our mission? 
              We'd love to hear from you and explore how we can work together to save coral reefs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-700 mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-4 rounded-lg bg-white/20 border border-coral-500 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-4 rounded-lg bg-white/20 border border-coral-500 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-400"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-lg bg-white/20 border border-coral-500 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-400"
                  />
                </div>
                <div>
                  <select className="w-full p-4 rounded-lg bg-white/20 border border-coral-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-coral-400">
                    <option value="" className="text-gray-800">I'm interested in...</option>
                    <option value="contributing" className="text-gray-800">Contributing to the project</option>
                    <option value="research" className="text-gray-800">Research collaboration</option>
                    <option value="education" className="text-gray-800">Educational partnerships</option>
                    <option value="funding" className="text-gray-800">Funding or sponsorship</option>
                    <option value="media" className="text-gray-800">Media inquiries</option>
                    <option value="other" className="text-gray-800">Something else</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your interest in Reefcraft and how you'd like to get involved..."
                    className="w-full p-4 rounded-lg bg-white/20 border border-coral-500 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-400 resize-none"
                  ></textarea>
                </div>
                <button className="group w-full bg-coral-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-coral-600 transition-all duration-200 flex items-center justify-center transform hover:scale-105">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>

            {/* Contact Info & Community */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-700 mb-6">Connect with us</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:reefcraft.ai@gmail.com"
                    className="flex items-center group hover:bg-white/10 p-4 rounded-lg transition-colors duration-200"
                  >
                    <div className="bg-coral-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">Email</div>
                      <div className="text-gray-700">reefcraft.ai@gmail.com</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/TheReefcraftProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-white/10 p-4 rounded-lg transition-colors duration-200"
                  >
                    <div className="bg-coral-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <GitHub className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">GitHub</div>
                      <div className="text-gray-700">Contribute to the codebase</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://discord.gg/reefcraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-white/10 p-4 rounded-lg transition-colors duration-200"
                  >
                    <div className="bg-coral-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-700 font-semibold">Discord</div>
                      <div className="text-gray-700">Join our community chat</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-700 mb-6">Our Community</h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-3 text-coral-400" />
                    <span>Based in Boulder, Colorado</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-3 text-coral-400" />
                    <span>100% volunteer-driven</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-3 text-coral-400" />
                    <span>Coral lover community</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-700 mb-4">Partnership Opportunities</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We're always looking for partnerships with research institutions, 
                  conservation organizations, educational institutions, and technology companies 
                  who share our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;