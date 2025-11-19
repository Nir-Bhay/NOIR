import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-off-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <WorkGrid />
        
        {/* Statement Section */}
        <section id="about" className="py-32 bg-off-black text-center px-6">
          <div className="container mx-auto max-w-4xl">
            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-gray-300">
              "We do not just build interfaces; we construct digital environments where the brand's soul can resonate. In a world of noise, silence is the ultimate luxury."
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-12"></div>
          </div>
        </section>

        <Services />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;