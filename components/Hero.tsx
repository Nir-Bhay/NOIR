import React from 'react';
import { HERO_TEXT, SUB_HERO_TEXT } from '../constants';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background: Subtle animated texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative container mx-auto px-6 text-center z-10 max-w-5xl flex flex-col items-center">
        <div className="overflow-hidden mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight animate-fade-in-up tracking-tight">
            {HERO_TEXT}
          </h1>
        </div>
        
        <div className="w-32 h-[1px] bg-white/30 my-8 animate-scale-in-x"></div>
        
        <p className="text-sm md:text-lg font-sans font-light text-gray-300 tracking-[0.3em] uppercase animate-fade-in-up leading-loose max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          {SUB_HERO_TEXT}
        </p>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
           <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="group relative border border-white/30 px-10 py-4 text-xs uppercase tracking-[0.25em] overflow-hidden transition-all hover:border-white"
           >
             <span className="relative z-10 group-hover:text-black transition-colors duration-500">Schedule Consultation</span>
             <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
           </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <ChevronDown className="w-6 h-6 text-white/50 hover:text-white transition-colors" />
      </div>
    </section>
  );
};

export default Hero;