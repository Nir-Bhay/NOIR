import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-6">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
            Selected<br />Works
          </h2>
          <p className="text-sm font-mono mt-4 md:mt-0 max-w-xs text-right">
            [2022 — PRESENT]<br/>
            EXPLORING THE VOID
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden cursor-pointer ${index % 3 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Details */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-black/80 backdrop-blur-sm text-white flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider">{project.title}</h3>
                    <p className="text-xs font-mono text-gray-300">{project.category} // {project.year}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-bold">
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;