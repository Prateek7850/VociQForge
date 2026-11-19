import React, { useState } from 'react';
import { Cpu, Play, Volume2 } from 'lucide-react';

export default function StudioPlayground() {
  const [activeTab, setActiveTab] = useState('synth');
  const [text, setText] = useState(
    'Welcome to VociQ Forge. Advanced neural voice synthesis engine ready.'
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [stability, setStability] = useState(75);
  const [clarity, setClarity] = useState(88);

  return (
    <section id="studio" className="py-12 px-6 max-w-6xl mx-auto">
      <div className="bg-[#FFFFFF] rounded-2xl border border-[#6F4E37]/20 shadow-xl shadow-[#2C221E]/5 overflow-hidden">
        
        {/* Card Top Toolbar */}
        <div className="bg-[#F5F1EB] border-b border-[#6F4E37]/15 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5">
            <Cpu className="w-5 h-5 text-[#6F4E37]" />
            <h3 className="text-lg font-semibold text-[#2C221E]">
              Interactive Studio Playground
            </h3>
          </div>
          
          {/* Model Selector Tabs */}
          {/* <div className="flex bg-[#E8E2D9] p-1 rounded-lg border border-[#6F4E37]/15 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('synth')}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'synth'
                  ? 'bg-[#6F4E37] text-[#FAF8F5] shadow-sm'
                  : 'text-[#6B5D54] hover:text-[#2C221E]'
              }`}
            >
              Text to Speech
            </button>
            <button
              onClick={() => setActiveTab('clone')}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'clone'
                  ? 'bg-[#6F4E37] text-[#FAF8F5] shadow-sm'
                  : 'text-[#6B5D54] hover:text-[#2C221E]'
              }`}
            >
              Instant Cloning
            </button>
          </div> */}
        </div>

        {/* Playground Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-4">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#6B5D54] block">
              Please Enter Details
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              className="w-full bg-[#FAF8F5] border border-[#6F4E37]/25 rounded-xl p-4 text-[#2C221E] focus:outline-none focus:border-[#6F4E37] focus:ring-2 focus:ring-[#6F4E37]/15 transition-all resize-none font-mono text-sm placeholder-[#6B5D54]/50"
              placeholder="Type notes, essays, or text to synthesize..."
            />
            
            {/* Audio Waveform Simulator */}
            <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#6F4E37]/15 flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label="Play or Pause Audio"
                className="w-12 h-12 rounded-full bg-[#6F4E37] hover:bg-[#5A3E2B] text-[#FAF8F5] flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95"
              >
                <Play className={`w-5 h-5 ml-0.5 ${isPlaying ? 'animate-pulse' : ''}`} />
              </button>
              <div className="flex-1 flex items-center space-x-1 h-8">
                {[40, 70, 25, 90, 60, 30, 85, 45, 100, 55, 75, 35, 65, 80, 50, 95, 30, 60, 40].map(
                  (h, i) => (
                    <div
                      key={i}
                      style={{ height: `${isPlaying ? Math.min(100, h * 1.1) : h}%` }}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isPlaying ? 'bg-[#6F4E37]' : 'bg-[#6F4E37]/25'
                      }`}
                    />
                  )
                )}
              </div>
              <Volume2 className="w-5 h-5 text-[#6B5D54] shrink-0" />
            </div>
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-6 bg-[#FAF8F5] p-5 rounded-xl border border-[#6F4E37]/15">
            <h4 className="text-sm font-semibold text-[#2C221E] border-b border-[#6F4E37]/15 pb-2">
              Neural Parameters
            </h4>

            {/* Voice Selector */}
            <div>
              <label className="text-xs font-medium text-[#6B5D54] block mb-2">
                Speaker Model
              </label>
              <select className="w-full bg-[#FFFFFF] border border-[#6F4E37]/25 rounded-lg p-2.5 text-sm text-[#2C221E] focus:outline-none focus:border-[#6F4E37]">
                <option>Aurora (Warm & Conversational)</option>
                <option>Helios (Executive & Clear)</option>
                <option>Kira (Technical & Soft)</option>
              </select>
            </div>

            {/* Stability Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[#6B5D54] font-medium">Stability</span>
                <span className="text-[#6F4E37] font-mono font-semibold">{stability}%</span>
              </div>
              <input
                type="range"
                value={stability}
                onChange={(e) => setStability(e.target.value)}
                className="w-full accent-[#6F4E37] bg-[#E8E2D9] rounded-lg cursor-pointer"
              />
            </div>

            {/* Clarity Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[#6B5D54] font-medium">Clarity / Artifact Boost</span>
                <span className="text-[#6F4E37] font-mono font-semibold">{clarity}%</span>
              </div>
              <input
                type="range"
                value={clarity}
                onChange={(e) => setClarity(e.target.value)}
                className="w-full accent-[#6F4E37] bg-[#E8E2D9] rounded-lg cursor-pointer"
              />
            </div>

            <button className="w-full bg-[#6F4E37] hover:bg-[#5A3E2B] text-[#FAF8F5] text-sm font-semibold py-2.5 rounded-lg shadow-sm transition-all">
              Submit Details
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}