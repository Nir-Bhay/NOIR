import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import Reveal from './Reveal';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-white text-black border-t border-black/5">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-24 border-b border-black pb-6 flex flex-col md:flex-row justify-between items-end">
            <h2 className="text-5xl md:text-7xl font-serif">
              Meet The Team
            </h2>
            <span className="mt-4 md:mt-0 text-xs uppercase tracking-[0.3em] font-bold">Expert Guidance</span>
          </div>
        </Reveal>

        <div className="space-y-32">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.id} delay={index * 100}>
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                {/* Image */}
                <div className="w-full md:w-5/12 relative group cursor-none">
                  <div className="overflow-hidden relative aspect-[3/4]">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover filter grayscale brightness-110 contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  {/* Decorative Offset Border */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-black -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12 md:px-12">
                  <h3 className="text-3xl md:text-4xl font-serif mb-2">{member.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 font-bold">{member.role}</p>
                  
                  <p className="text-gray-700 leading-8 text-lg font-light text-justify">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;