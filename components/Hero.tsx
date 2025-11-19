import React from 'react';
import { HERO_TEXT, SUB_HERO_TEXT } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-off-black">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-50"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")', opacity: 0.2 }}></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 leading-none mix-blend-screen animate-fade-in-up">
          {HERO_TEXT.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-4 hover:text-neutral-400 transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
        </h1>
        <p className="text-sm md:text-lg font-mono text-gray-400 tracking-[0.2em] uppercase animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {SUB_HERO_TEXT}
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToWork}>
        <ChevronDown className="w-8 h-8 text-white opacity-50 hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
};

export default Hero;