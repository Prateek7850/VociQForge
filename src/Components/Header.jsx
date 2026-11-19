import React from 'react';
import { Mic } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#6F4E37]/15">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6F4E37] to-[#8C684E] flex items-center justify-center shadow-md shadow-[#6F4E37]/15">
            <Mic className="w-5 h-5 text-[#FAF8F5]" />
          </div>
          <span className="text-xl font-bold text-[#2C221E] tracking-wider uppercase">
            VociQ<span className="text-[#6F4E37] font-normal">Forge</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#models" className="text-[#2C221E] hover:text-[#6F4E37] transition-colors">
            NCERT & Study Material
          </a>
          <a href="#studio" className="text-[#6B5D54] hover:text-[#2C221E] transition-colors">
            Voice Studio
          </a>
          <a href="#pricing" className="text-[#6B5D54] hover:text-[#2C221E] transition-colors">
            Student Plans
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-sm text-[#2C221E] hover:text-[#6F4E37] font-medium px-4 py-2 transition-colors">
            Sign In
          </button>
          <button className="bg-[#6F4E37] hover:bg-[#5A3E2B] text-[#FAF8F5] text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}