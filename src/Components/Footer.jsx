import React from 'react';
import { Mic } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#6F4E37]/15 bg-[#F5F1EB] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-[#6F4E37] flex items-center justify-center">
            <Mic className="w-4 h-4 text-[#FAF8F5]" />
          </div>
          <span className="text-lg font-bold text-[#2C221E]">VociQForge</span>
        </div>
        <p className="text-xs text-[#6B5D54]">
          © {new Date().getFullYear()} VociQ Forge Inc. All rights reserved. Built for Students & Lifelong Learners.
        </p>
      </div>
    </footer>
  );
}