import React from 'react';
import { ABOUT_TEXT } from '../constants';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20 items-start">
        
        <div className="md:w-1/3 sticky top-32">
           <Reveal>
             <div className="border-t border-black pt-6 inline-block">
               <h2 className="text-5xl font-serif mb-4">About Us</h2>
               <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold">Boutique Advisory</p>
             </div>
           </Reveal>
        </div>
        
        <div className="md:w-2/3">
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl leading-relaxed font-serif text-neutral-800 mb-8">
              "At India Succession, we don't just plan finances; we preserve family harmony."
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="columns-1 md:columns-2 gap-12">
              <p className="text-sm md:text-base leading-8 font-light text-neutral-600 mb-8 text-justify">
                {ABOUT_TEXT}
              </p>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-12 flex gap-16 border-t border-black/10 pt-8">
              <div className="flex flex-col">
                <span className="text-5xl font-serif font-bold">15+</span>
                <span className="text-xs uppercase tracking-widest mt-3 text-gray-400">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-serif font-bold">Global</span>
                <span className="text-xs uppercase tracking-widest mt-3 text-gray-400">Client Base</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;