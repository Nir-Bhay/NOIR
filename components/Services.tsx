import React from 'react';
import { SERVICES } from '../constants';
import { PenTool, Camera, Code, Box } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Pen': <PenTool className="w-8 h-8" />,
  'Camera': <Camera className="w-8 h-8" />,
  'Code': <Code className="w-8 h-8" />,
  'Box': <Box className="w-8 h-8" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-off-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
             <h2 className="text-5xl font-serif italic mb-8">Our Expertise</h2>
             <p className="text-gray-400 max-w-md leading-relaxed">
               We believe in stripping away the unnecessary. Our approach is rooted in fundamental design principles, executed with modern precision.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300 group">
                <div className="mb-6 text-white/50 group-hover:text-white transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 tracking-wider">{service.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;