import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-12 md:mb-0">
            <h2 className="text-4xl font-bold uppercase mb-6">Let's Create<br/>Something Real.</h2>
            <a href="mailto:hello@noir.studio" className="text-2xl md:text-3xl border-b-2 border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
              hello@noir.studio
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-12 text-sm uppercase tracking-widest text-gray-500">
            <div>
              <h4 className="text-white mb-4 font-bold">Social</h4>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Instagram</li>
                <li className="hover:text-white cursor-pointer">Twitter / X</li>
                <li className="hover:text-white cursor-pointer">LinkedIn</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-bold">Location</h4>
              <ul className="space-y-2">
                <li>New York</li>
                <li>Paris</li>
                <li>Tokyo</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} NOIR STUDIO. All Rights Reserved.</p>
          <p>Designed by Gemini</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;