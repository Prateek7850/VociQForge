import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Play, Pause, Sparkles, UserCheck, Bot } from 'lucide-react';

export default function StudioPlayground() {
  const [activeSpeaker, setActiveSpeaker] = useState('agent'); // 'agent' | 'student' | 'idle'
  const [isAgentMuted, setIsAgentMuted] = useState(false);
  const [isStudentMuted, setIsStudentMuted] = useState(false);
  const [studentAnswer, setStudentAnswer] = useState('');
  
  // Simulated AI Interview question
  const agentPrompt = "Could you explain how you handle deadlock situations in a multi-threaded database environment?";

  const toggleSimulation = (speaker) => {
    if (activeSpeaker === speaker) {
      setActiveSpeaker('idle');
    } else {
      setActiveSpeaker(speaker);
    }
  };

  return (
    <section id="studio" className="py-12 px-6 max-w-6xl mx-auto">
      <div className="bg-[#FFFFFF] rounded-2xl border border-[#6F4E37]/20 shadow-xl shadow-[#2C221E]/5 overflow-hidden">
        
        {/* Card Top Toolbar */}
        <div className="bg-[#F5F1EB] border-b border-[#6F4E37]/15 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-5 h-5 text-[#6F4E37]" />
            <h3 className="text-lg font-semibold text-[#2C221E]">
              Live AI Interview Simulator &amp; Practice Arena
            </h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#6F4E37]/10 text-[#6F4E37] border border-[#6F4E37]/2art">
              <span className={`w-2 h-2 rounded-full mr-1.5 ${activeSpeaker !== 'idle' ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
              {activeSpeaker === 'agent' ? 'AI Interviewer Speaking...' : activeSpeaker === 'student' ? 'Student Responding...' : 'Session Paused'}
            </span>
          </div>
        </div>

        {/* Playground Body: Interview Boxes Layout */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          
          {/* BOX 1: AI Agent Interviewer */}
          <div className={`lg:col-span-5 rounded-2xl p-6 border transition-all duration-300 ${
            activeSpeaker === 'agent' 
              ? 'bg-[#FAF8F5] border-[#6F4E37] shadow-md ring-2 ring-[#6F4E37]/20' 
              : 'bg-[#FAF8F5]/60 border-[#6F4E37]/20 opacity-85'
          }`}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#6F4E37]/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#6F4E37] text-[#FAF8F5] flex items-center justify-center shadow-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C221E]">VociQ AI Interviewer</h4>
                  <span className="text-[11px] text-[#6B5D54]">Neural Senior Tech Lead</span>
                </div>
              </div>
              
              {/* Speaker / Mute Toggle for Agent */}
              <button 
                onClick={() => setIsAgentMuted(!isAgentMuted)}
                className={`p-2 rounded-lg border transition-colors ${
                  isAgentMuted 
                    ? 'bg-rose-50 border-rose-200 text-rose-600' 
                    : 'bg-[#FFFFFF] border-[#6F4E37]/20 text-[#6F4E37] hover:bg-[#F5F1EB]'
                }`}
                title={isAgentMuted ? "Unmute AI Voice" : "Mute AI Voice"}
              >
                {isAgentMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Agent speech box */}
            <div className="bg-[#FFFFFF] rounded-xl p-4 border border-[#6F4E37]/15 mb-4 min-h-[90px] flex items-center">
              <p className="text-sm text-[#2C221E] font-medium leading-relaxed italic">
                &ldquo;{agentPrompt}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B5D54]">
                {activeSpeaker === 'agent' ? '🔊 Speaking now...' : 'Standby'}
              </span>
              <button 
                onClick={() => toggleSimulation('agent')}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all ${
                  activeSpeaker === 'agent'
                    ? 'bg-[#6F4E37] text-[#FAF8F5] border-[#6F4E37]'
                    : 'bg-[#FFFFFF] text-[#2C221E] border-[#6F4E37]/25 hover:bg-[#F5F1EB]'
                }`}
              >
                {activeSpeaker === 'agent' ? 'Stop Agent' : 'Simulate Agent Speech'}
              </button>
            </div>
          </div>

          {/* MIDDLE: Dynamic Wavelength Waveform & Flow Indicator */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
            <div className="h-28 lg:w-full flex lg:flex-col items-center justify-center space-x-1 lg:space-x-0 lg:space-y-1.5 bg-[#F5F1EB] p-3 rounded-xl border border-[#6F4E37]/15">
              {[30, 60, 90, 45, 80, 100, 50, 75, 40].map((h, i) => (
                <div
                  key={i}
                  style={{ 
                    height: activeSpeaker !== 'idle' ? `${Math.min(100, h * 1.1)}%` : '20%',
                    width: '4px'
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    activeSpeaker !== 'idle' ? 'bg-[#6F4E37] animate-pulse' : 'bg-[#6F4E37]/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-semibold text-[#6B5D54] mt-2 text-center uppercase tracking-wider">
              {activeSpeaker === 'agent' ? '➔ AI' : activeSpeaker === 'student' ? 'Student ➔' : 'Sync'}
            </span>
          </div>

          {/* BOX 2: Student Candidate */}
          <div className={`lg:col-span-5 rounded-2xl p-6 border transition-all duration-300 ${
            activeSpeaker === 'student' 
              ? 'bg-[#FAF8F5] border-[#6F4E37] shadow-md ring-2 ring-[#6F4E37]/20' 
              : 'bg-[#FAF8F5]/60 border-[#6F4E37]/20 opacity-85'
          }`}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#6F4E37]/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#2C221E] text-[#FAF8F5] flex items-center justify-center shadow-sm">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C221E]">Student Candidate</h4>
                  <span className="text-[11px] text-[#6B5D54]">Live Audio Input Feed</span>
                </div>
              </div>
              
              {/* Mic Toggle for Student */}
              <button 
                onClick={() => setIsStudentMuted(!isStudentMuted)}
                className={`p-2 rounded-lg border transition-colors ${
                  isStudentMuted || activeSpeaker === 'agent'
                    ? 'bg-rose-50 border-rose-200 text-rose-600 cursor-not-allowed' 
                    : 'bg-[#FFFFFF] border-[#6F4E37]/20 text-[#6F4E37] hover:bg-[#F5F1EB]'
                }`}
                disabled={activeSpeaker === 'agent'}
                title={activeSpeaker === 'agent' ? "Mic muted automatically while AI speaks" : "Mute/Unmute Mic"}
              >
                {isStudentMuted || activeSpeaker === 'agent' ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            </div>

            {/* Student transcript input box */}
            <div className="relative mb-4">
              <textarea
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                disabled={activeSpeaker === 'agent'}
                rows={3}
                className={`w-full rounded-xl p-3 text-sm font-mono transition-all resize-none focus:outline-none ${
                  activeSpeaker === 'agent'
                    ? 'bg-[#EFECE6] border-dashed border-[#6F4E37]/30 text-[#6B5D54] cursor-not-allowed opacity-70'
                    : 'bg-[#FFFFFF] border border-[#6F4E37]/25 text-[#2C221E] focus:border-[#6F4E37]'
                }`}
                placeholder={
                  activeSpeaker === 'agent'
                    ? "🔒 Mic locked while AI Interviewer is speaking..."
                    : "Speak or type your answer here..."
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B5D54]">
                {activeSpeaker === 'agent' ? '🔒 Mic muted (AI speaking)' : activeSpeaker === 'student' ? '🎙️ Recording response...' : 'Ready to speak'}
              </span>
              <button 
                onClick={() => toggleSimulation('student')}
                disabled={activeSpeaker === 'agent'}
                className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all ${
                  activeSpeaker === 'agent'
                    ? 'opacity-50 cursor-not-allowed bg-[#E8E2D9] text-[#6B5D54] border-transparent'
                    : activeSpeaker === 'student'
                    ? 'bg-[#6F4E37] text-[#FAF8F5] border-[#6F4E37]'
                    : 'bg-[#FFFFFF] text-[#2C221E] border-[#6F4E37]/25 hover:bg-[#F5F1EB]'
                }`}
              >
                {activeSpeaker === 'student' ? 'Finish Speaking' : 'Simulate Student Speaking'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Panel: Interview Session Controls */}
        <div className="bg-[#F5F1EB] border-t border-[#6F4E37]/15 p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#6B5D54]">
            💡 <span className="font-semibold text-[#2C221E]">Rule Enforcement:</span> The student mic automatically locks when the AI agent is active to prevent cross-talk interference.
          </div>
          <button 
            onClick={() => setActiveSpeaker(activeSpeaker === 'idle' ? 'agent' : 'idle')}
            className="w-full sm:w-auto bg-[#6F4E37] hover:bg-[#5A3E2B] text-[#FAF8F5] text-xs font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-all"
          >
            {activeSpeaker === 'idle' ? 'Start Mock Interview' : 'Pause Interview Session'}
          </button>
        </div>

      </div>
    </section>
  );
}