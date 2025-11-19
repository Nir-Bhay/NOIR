import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
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
        <About />
        <Services />
        <Team />
        <Blog />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;