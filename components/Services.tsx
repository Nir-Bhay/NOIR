import React from 'react';
import { SERVICES } from '../constants';
import { FileText, Shield, Users, Globe, Handshake, Scale, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const iconMap: Record<string, React.ReactNode> = {
  'FileText': <FileText className="w-8 h-8" />,
  'Shield': <Shield className="w-8 h-8" />,
  'Users': <Users className="w-8 h-8" />,
  'Globe': <Globe className="w-8 h-8" />,
  'Handshake': <Handshake className="w-8 h-8" />,
  'Scale': <Scale className="w-8 h-8" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white text-black border-t border-black/5">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-24 max-w-4xl">
             <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Our Services</h2>
             <p className="text-gray-500 text-sm uppercase tracking-widest border-l-2 border-black pl-6 py-2">
               Comprehensive Estate & Succession Solutions tailored for <br/> Global Indian Families.
             </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div className="group relative bg-white p-8 h-full border border-gray-100 hover:bg-black hover:text-white transition-all duration-500 ease-out shadow-sm hover:shadow-xl">
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                
                <div className="mb-8 text-black group-hover:text-white transition-colors duration-500">
                  {iconMap[service.icon]}
                </div>
                
                <h3 className="text-2xl font-serif font-medium mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                
                <div className="w-12 h-[1px] bg-black/20 group-hover:bg-white/20 mb-6 transition-colors"></div>
                
                <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-7 transition-colors">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;