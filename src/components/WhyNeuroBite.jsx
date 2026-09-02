import React from 'react';
import { Brain, BatteryCharging, TrendingUp, ShieldAlert, Sparkles, UserCheck, Heart, Coffee } from 'lucide-react';

export const WhyNeuroBite = () => {
  return (
    <section id="neden-neurobite" className="py-24 bg-gradient-to-b from-[#060913] via-[#0A1020] to-[#060913] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scientific & Data-Driven Neuro-Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Why Innovative Companies <br className="hidden sm:inline" />
            <span className="text-gradient-blue">Choose NeuroBite</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Traditional office snacks (excess coffee, pastries, sugary treats) trigger insulin spikes followed by severe afternoon brain fog. NeuroBite produces clean, sustainable cellular focus.
          </p>
        </div>

        {/* Traditional Office Snacks vs NeuroBite Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Traditional Way */}
          <div className="glass-panel p-8 rounded-3xl border border-red-900/30 bg-red-950/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold tracking-wider text-red-400 uppercase bg-red-950/80 px-3 py-1 rounded-full border border-red-800/50">
                Traditional Office Snacks
              </span>
              <Coffee className="w-6 h-6 text-red-400" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              4 Cups of Coffee + Sugary Pastries
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>Severe blood sugar drop & brain fog between 2:30 PM - 4:00 PM.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>Caffeine jitters, anxiety, and scattered attention span.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>An average of 12 un-productive hours lost per employee every week.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-900/40 text-xs text-red-300 font-mono">
              Net Result: Employee burnout, fatigue, and lower output quality.
            </div>
          </div>

          {/* NeuroBite Biohacking Way */}
          <div className="glass-panel-glow p-8 rounded-3xl border border-blue-500/40 bg-blue-950/20 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0088FF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold tracking-wider text-[#0088FF] uppercase bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                NeuroBite Daily Bento Protocol
              </span>
              <Brain className="w-6 h-6 text-[#0088FF]" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Nootropics + Bio-Snacks + Oxygen Water
            </h3>

            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0088FF] mt-2 shrink-0" />
                <p>Sustained cognitive clarity and high mental output all day long.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <p>Cortisol stress reduction and neuro-muscular relaxation (Magnesium & B6).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p>An average of <strong>+6.5 extra deep focus hours per employee</strong> weekly.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0088FF]/15 border border-blue-500/40 text-xs text-blue-200 font-mono font-semibold">
              Net Result: Energized, motivated, and ultra-productive team members!
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-950 flex items-center justify-center text-[#0088FF] mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Brain Fog Elimination</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lion’s Mane mushroom and Rhodiola adaptogens accelerate synaptic transmission and mental sharpness.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Sustained Cellular Energy</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ubiquinol CoQ10 and Active B12 power mitochondrial ATP production, effectively banishing afternoon slumps.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-950 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Talent Retention Advantage</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The premier executive wellness perk that modern employees love and talk about.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Measurable Corporate ROI</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The productivity gain amortizes the subscription cost within the first month of delivery.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
