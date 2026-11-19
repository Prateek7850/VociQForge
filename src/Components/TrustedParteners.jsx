import React from 'react';

export default function TrustedPartners() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <p className="text-base sm:text-lg font-medium text-[#2C221E]">
          World’s leading voice &amp; assesment prep platform trusted by{' '}
          <span className="font-bold text-[#6F4E37]">3K+</span> students &amp; Institutions.
        </p>
      </div>

      {/* Elevated White Logo Card */}
      <div className="bg-[#FFFFFF] rounded-2xl border border-[#6F4E37]/15 shadow-lg shadow-[#6F4E37]/5 px-6 py-10 sm:px-12">
        
        {/* Row 1: 7 Brands */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center mb-10">
          
          {/* Federal Bank */}
          <div className="flex flex-col items-center opacity-85 hover:opacity-100 transition-opacity">
            <span className="bg-[#005596] text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-xs">
            RGPS
            </span>
            <span className="text-[7px] text-[#6B5D54] tracking-tight mt-0.5">
              Rishi Galav Public School
            </span>
          </div>

    

          {/* Shaadi.com */}
          <div className="flex items-baseline opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-xl font-bold text-[#FF5A60] tracking-tight">DPS</span>
          </div>

          {/* Dalberg */}
          <div className="opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-lg font-bold text-[#6E1E4A] tracking-tight">Dalberg</span>
          </div>

          {/* ditto */}
          <div className="opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-xl font-black text-[#1A1A1A] tracking-tight">ditto</span>
          </div>

          {/* HDB Financial Services */}
          <div className="flex items-center space-x-1 opacity-85 hover:opacity-100 transition-opacity">
            <span className="bg-[#E31E24] text-white text-[10px] font-bold px-1.5 py-0.5">HDB</span>
            
          </div>

          {/* ESAF Small Finance Bank */}
          <div className="flex flex-col items-center col-span-2 sm:col-span-1 opacity-85 hover:opacity-100 transition-opacity">
            
            <span className="text-[7px] font-semibold text-[#004B87] tracking-tight">
               GWPS
            </span>
          </div>

        </div>

        {/* Row 2: 4 Centered Brands */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          
          {/* Himalaya */}
          <div className="flex flex-col items-center opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-base font-extrabold text-[#007A6E] italic tracking-tight">
              Himalaya
            </span>
            <span className="text-[7px] font-semibold text-[#E87722] tracking-[0.2em]">
              SINCE 1930
            </span>
          </div>

          {/* HOGARTH */}
          <div className="opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-xs font-bold text-[#2C221E] tracking-[0.25em]">
              HOGARTH
            </span>
          </div>

          {/* Insurance Dekho */}
          <div className="flex items-center space-x-1.5 opacity-85 hover:opacity-100 transition-opacity">
            <span className="w-5 h-5 rounded-md bg-[#E51937] text-white text-[10px] font-bold flex items-center justify-center">
              ID
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-bold text-[#2C221E]">Insurance</div>
              <div className="text-[11px] font-bold text-[#2C221E]">Dekho</div>
            </div>
          </div>

          {/* 99acres */}
     <div className="opacity-85 hover:opacity-100 transition-opacity">
            <span className="text-lg font-extrabold text-[#0078DB] tracking-tight">
              99<span className="font-semibold">acres</span>
            </span>
          </div>     

        </div>
      </div>
    </section>
  );
}