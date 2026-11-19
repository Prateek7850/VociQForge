import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-14 px-6 overflow-hidden">
      {/* Soft Warm Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E6E0F0]/70 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#6F4E37]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#6F4E37]/20 text-xs font-medium text-[#5A3E2B] mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#6F4E37]" />
          <span>Next-Gen Voice Synthesis v4.2 Live</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#2C221E] tracking-tight leading-tight mb-6">
          Architecting{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F4E37] via-[#8C684E] to-[#6B5B95]">
            Ultra-Realistic
          </span>{' '}
          Human Speech
        </h1>

        <p className="text-lg sm:text-xl text-[#6B5D54] max-w-2xl mx-auto leading-relaxed mb-10">
          Generate lifelike conversational voice AI, emotional nuance, and zero-shot voice cloning with millisecond latency—built for focused learning and study.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#6F4E37] hover:bg-[#5A3E2B] text-[#FAF8F5] font-semibold px-8 py-3.5 rounded-xl shadow-md shadow-[#6F4E37]/20 flex items-center justify-center space-x-2 transition-all">
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-[#FFFFFF] hover:bg-[#F3EFEA] text-[#2C221E] font-semibold px-8 py-3.5 rounded-xl border border-[#6F4E37]/25 shadow-sm flex items-center justify-center space-x-2 transition-all">
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}