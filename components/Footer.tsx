import React from 'react';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-24 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
                Let's secure your <br/> legacy together.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 mb-12 max-w-md leading-relaxed text-lg font-light">
                Expert guidance for your most personal financial decisions. Contact us for a confidential consultation.
              </p>
              <a href="mailto:contact@indiasuccession.com" className="inline-block text-xl md:text-2xl font-serif border-b border-white/30 pb-2 hover:border-white transition-all hover:text-gray-200">
                contact@indiasuccession.com
              </a>
            </Reveal>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-16 text-sm uppercase tracking-[0.2em] text-gray-500">
            <Reveal delay={300}>
              <div>
                <h4 className="text-white mb-8 font-bold">Location</h4>
                <ul className="space-y-6 font-light">
                  <li>Mumbai, India</li>
                  <li>New York, USA</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div>
                <h4 className="text-white mb-8 font-bold">Sitemap</h4>
                <ul className="space-y-6 font-light">
                  <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Services</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Meet The Team</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Insights</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
        
        <Reveal delay={500}>
          <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.25em]">
            <p>&copy; {new Date().getFullYear()} India Succession. All Rights Reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms of Use</span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;