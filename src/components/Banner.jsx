import React from 'react';
import { Play } from 'lucide-react';
import heroImage from '../assets/banner.png';

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white gap-10 max-w-7xl mx-auto">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 font-medium px-4 py-2 rounded-full text-sm">
          <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1c29] leading-tight">
          Supercharge Your <br/> Digital Workflow
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-lg">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
            Explore Products
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 font-medium py-3 px-8 rounded-full transition-all">
            <Play size={20} />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <img 
          src={heroImage} 
          alt="Digital Workflow" 
          className="w-full h-auto max-w-md mx-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Banner;
