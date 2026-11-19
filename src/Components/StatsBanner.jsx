import React from 'react';
import { Languages, MessageSquareQuote, CheckSquare } from 'lucide-react';
import TrustedPartners from './TrustedParteners';

const STATS_DATA = [
  {
    icon: Languages,
    value: '50+',
    label: 'Languages supported',
    bgColor: 'bg-[#E6F4F8]/15',
    borderColor: 'border-[#BCE3EE]/30',
    iconColor: 'text-[#8FD3E8]',
  },
  {
    icon: MessageSquareQuote,
    value: '52,000+',
    label: 'Study & practice minutes completed',
    bgColor: 'bg-[#F2F7E9]/15',
    borderColor: 'border-[#D9EBBF]/30',
    iconColor: 'text-[#BCE08A]',
  },
  {
    icon: CheckSquare,
    value: '98%',
    label: 'Accuracy in language proficiency analysis',
    bgColor: 'bg-[#E6E0F0]/15',
    borderColor: 'border-[#E6E0F0]/30',
    iconColor: 'text-[#D6C9EC]',
  },
];

export default function StatsBanner() {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-[#2C221E] via-[#362924] to-[#2C221E] rounded-2xl border border-[#6F4E37]/40 shadow-xl shadow-[#2C221E]/15 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between divide-y md:divide-y-0 md:divide-x divide-[#FAF8F5]/10">
          
          {STATS_DATA.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center space-x-5 ${idx !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
              >
                {/* Frosted Glass Icon Badge */}
                <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} border ${stat.borderColor} backdrop-blur-sm flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200`}>
                  <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
                
                {/* Stats Text */}
                <div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-[#FAF8F5] tracking-tight">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-medium text-[#D5C9C0] mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}


   
        </div>


      </div>
        
    </section>
  );
}