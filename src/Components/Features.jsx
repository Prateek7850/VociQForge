import React from 'react';
import { Layers, Sparkles, Cpu } from 'lucide-react';

const FEATURES_DATA = [
  {
    icon: Layers,
    title: 'Confidence Enhancement',
    desc: 'Under 120ms streaming responses optimized for real-time AI study partners, language practice, and oral prep.',
  },
  {
    icon: Sparkles,
    title: 'NCERT or Other Study Material',
    desc: 'Inject dynamic inflections, breath pauses, emphasis, and tone modulation to make dense study material engaging.',
  },
  {
    icon: Cpu,
    title: 'Self Analysis',
    desc: 'Review pronunciation, pacing, and comprehension feedback privately with low-distraction analytical tools.',
  },
 
];

export default function Features() {
  return (
    
    <section id="models" className="py-16 px-6 max-w-7xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-3xl sm:text-xl font-extrabold text-[#2C221E] tracking-tight mb-3">
         Why should you use VociQForge for your Video & Audio Assesments?
        </h3>
        <p className="text-[#6B5D54] text-base">
          Engineered for deep focus, real-time feedback, and natural learning proficiency.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        

        {FEATURES_DATA.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#6F4E37]/15 hover:border-[#6F4E37]/40 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5F1EB] border border-[#6F4E37]/20 flex items-center justify-center mb-6 group-hover:bg-[#E6E0F0]/50 transition-colors">
                <IconComponent className="w-6 h-6 text-[#6F4E37]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C221E] mb-3">{feature.title}</h3>
              <p className="text-[#6B5D54] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>

  );
}