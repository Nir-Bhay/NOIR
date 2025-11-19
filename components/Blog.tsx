import React from 'react';
import { BLOGS } from '../constants';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Blog: React.FC = () => {
  return (
    <section id="blogs" className="py-32 bg-white text-black border-t border-black/5">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-5xl font-serif mb-16">Latest Insights</h2>
        </Reveal>
        
        <div className="flex flex-col border-t border-black">
          {BLOGS.map((blog, index) => (
            <Reveal key={blog.id} delay={index * 100}>
              <div className="group border-b border-black py-12 flex flex-col md:flex-row justify-between items-start hover:bg-gray-50 transition-colors duration-500 cursor-pointer px-4">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{blog.date}</span>
                </div>
                
                <div className="md:w-1/2 pr-8">
                  <h3 className="text-2xl font-serif leading-snug mb-3 group-hover:text-gray-700 transition-colors">
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      {blog.excerpt}
                    </p>
                  )}
                </div>

                <div className="md:w-1/4 flex justify-end mt-6 md:mt-0">
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;