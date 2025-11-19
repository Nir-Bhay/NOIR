import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer group" onClick={() => scrollTo('hero')}>
          <span className={`text-2xl font-serif font-bold tracking-wider uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>
            India Succession
          </span>
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex space-x-12 text-xs tracking-[0.2em] font-semibold uppercase transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>
          {['About', 'Services', 'Team', 'Blogs', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className="relative group py-2 overflow-hidden"
            >
              <span className="relative z-10 group-hover:opacity-70 transition-opacity">{item}</span>
              <span className={`absolute bottom-0 left-0 h-[1px] bg-current transition-all duration-300 w-0 group-hover:w-full`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 transition-colors duration-300 ${mobileOpen ? 'text-white' : (scrolled ? 'text-black' : 'text-white')}`} 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu overlay */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-700 ease-[cubic-bezier(0.83, 0, 0.17, 1)] transform ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {['About', 'Services', 'Team', 'Blogs', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-3xl font-serif text-white hover:text-gray-400 transition-colors tracking-widest uppercase"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;