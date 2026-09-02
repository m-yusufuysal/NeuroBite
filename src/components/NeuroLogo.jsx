import React from 'react';

export const NeuroLogo = ({ className = "h-8", showText = true, textClassName = "text-xl font-bold tracking-wider" }) => {
  return (
    <div className="flex items-center gap-3 select-none cursor-pointer">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 500 500" className="h-full w-auto drop-shadow-[0_0_12px_rgba(0,136,255,0.6)]">
          {/* Brain Outer & Folds with Bite Cutout */}
          <g transform="translate(0, 0)">
            {/* Left Brain Hemisphere */}
            <path 
              d="M 230 50 
                 C 150 40, 90 90, 70 160 
                 C 50 230, 60 300, 90 360 
                 C 120 420, 170 460, 230 470 
                 L 230 50 Z" 
              fill="none" 
              stroke="#0088FF" 
              strokeWidth="28" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path d="M 230 130 C 140 130, 120 190, 190 220 C 110 250, 130 340, 230 350" fill="none" stroke="#0088FF" strokeWidth="22" strokeLinecap="round" />
            <path d="M 230 390 C 160 390, 150 410, 190 430" fill="none" stroke="#0088FF" strokeWidth="20" strokeLinecap="round" />

            {/* Right Brain Hemisphere with Bite Mark */}
            <path 
              d="M 270 50 
                 C 340 50, 400 70, 430 110 
                 C 390 145, 390 185, 430 210 
                 C 385 235, 385 275, 430 300 
                 C 400 370, 360 440, 270 470 
                 L 270 50 Z" 
              fill="none" 
              stroke="#0088FF" 
              strokeWidth="28" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path d="M 270 130 C 340 140, 350 190, 280 220 C 350 240, 340 330, 270 350" fill="none" stroke="#0088FF" strokeWidth="22" strokeLinecap="round" />
            <path d="M 270 390 C 320 390, 330 410, 290 430" fill="none" stroke="#0088FF" strokeWidth="20" strokeLinecap="round" />
            
            {/* Brain Stem Connection */}
            <line x1="250" y1="50" x2="250" y2="470" stroke="#0088FF" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
          </g>
        </svg>
      </div>
      {showText && (
        <span className={`font-extrabold tracking-[0.18em] text-white uppercase font-sans ${textClassName}`}>
          NEURO<span className="text-[#0088FF]">BITE</span>
        </span>
      )}
    </div>
  );
};
