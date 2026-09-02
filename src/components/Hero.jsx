import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Sparkles, ArrowRight, Play, CheckCircle2, Award, Clock } from 'lucide-react';
import { NeuroLogo } from './NeuroLogo';

export const Hero = ({ onOpenSampleModal, onOpenQrModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-[#060913] via-[#0B1224] to-[#060913]">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0088FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(0,136,255,0.2)]">
              <span className="flex h-2 w-2 rounded-full bg-[#0088FF] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>B2B Corporate Biohacking & Cognitive Performance Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Daily Cognitive Fuel for <br className="hidden sm:inline" />
              <span className="text-gradient-blue relative inline-block">
                High-Performing Teams
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#0088FF]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Elevate team focus, eliminate afternoon fatigue, and boost productivity with daily pre-portioned <strong className="text-white font-semibold">NeuroBite Bento Trays</strong>. Featuring top-tier supplements (Solgar, Thorne, Ocean), organic bio-snacks, essential oils, and oxygenated smart water delivered to your office every morning!
            </p>

            {/* Key Metrics Pill Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="glass-panel p-3 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#0088FF]">+34%</div>
                <div className="text-[11px] font-medium text-slate-400 mt-1">Deep Work Focus</div>
              </div>
              <div className="glass-panel p-3 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">0%</div>
                <div className="text-[11px] font-medium text-slate-400 mt-1">3 PM Slump Fatigue</div>
              </div>
              <div className="glass-panel p-3 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">08:30</div>
                <div className="text-[11px] font-medium text-slate-400 mt-1">Cold Chain Delivery</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-[#0088FF] via-blue-600 to-cyan-500 hover:from-blue-600 hover:to-[#0088FF] shadow-[0_0_35px_rgba(0,136,255,0.5)] hover:shadow-[0_0_50px_rgba(0,136,255,0.8)] transition-all duration-300 hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span>Get Free Sample Kit (10+ Employees)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#kutu-anatomisi"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl font-semibold text-sm text-slate-200 glass-panel hover:bg-slate-800/80 border border-slate-700/80 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#0088FF] fill-[#0088FF]" />
                <span>Explore Bento Tray</span>
              </a>
            </div>

            {/* Trust Bulletins */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Solgar, Thorne & Ocean Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>FDA & Health Ministry Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Flexible Cancel Anytime</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Frame */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Backdrop Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Bento Box Representation */}
              <div className="relative rounded-3xl p-6 glass-panel-glow border border-blue-500/30 bg-[#0B101D]/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,136,255,0.2)] group hover:border-[#0088FF]/60 transition-all duration-500">
                
                {/* Floating Live Status Badge */}
                <div className="absolute -top-4 -right-4 z-20 glass-panel px-4 py-2 rounded-2xl border border-cyan-500/40 shadow-xl flex items-center gap-2 bg-[#0C1427]/95">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-100">Daily Cold Chain Tray</span>
                </div>

                {/* Logo Banner on Tray */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <NeuroLogo className="h-7" textClassName="text-sm font-black tracking-widest" />
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-300">
                    B2B Daily Tray #042
                  </span>
                </div>

                {/* Micro Compartment Grid Mockup matching User Photo */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Compartment 1: Lion's Mane & Nootropics */}
                  <div className="glass-panel p-4 rounded-2xl border border-blue-900/40 hover:border-[#0088FF] transition-all bg-[#111827]/80 group/item">
                    <div className="text-xs font-bold text-blue-400 mb-1 flex items-center justify-between">
                      <span>Nootropic Tablet</span>
                      <span className="w-2 h-2 rounded-full bg-[#0088FF]"></span>
                    </div>
                    <div className="text-sm font-bold text-white">Lion's Mane & Rhodiola</div>
                    <div className="text-[11px] text-slate-400 mt-1">Mental Focus & Clarity</div>
                    <div className="mt-2 text-[10px] inline-block px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-mono">
                      Solgar / Thorne
                    </div>
                  </div>

                  {/* Compartment 2: Omega 3 & B12 */}
                  <div className="glass-panel p-4 rounded-2xl border border-cyan-900/40 hover:border-cyan-400 transition-all bg-[#111827]/80">
                    <div className="text-xs font-bold text-cyan-400 mb-1 flex items-center justify-between">
                      <span>Cellular Energy</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    </div>
                    <div className="text-sm font-bold text-white">Omega-3 DHA + B12</div>
                    <div className="text-[11px] text-slate-400 mt-1">ATP Energy & Brain Protection</div>
                    <div className="mt-2 text-[10px] inline-block px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono">
                      Ocean Ultra Purified
                    </div>
                  </div>

                  {/* Compartment 3: Bio Snacks */}
                  <div className="glass-panel p-4 rounded-2xl border border-amber-900/40 hover:border-amber-400 transition-all bg-[#111827]/80">
                    <div className="text-xs font-bold text-amber-400 mb-1 flex items-center justify-between">
                      <span>Bio-Snacks</span>
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    </div>
                    <div className="text-sm font-bold text-white">Raw Almonds & Medjoul</div>
                    <div className="text-[11px] text-slate-400 mt-1">Steady Glucose Fuel</div>
                    <div className="mt-2 text-[10px] inline-block px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono">
                      Datça Farm Organic
                    </div>
                  </div>

                  {/* Compartment 4: Smart Water & Essential Oil */}
                  <div className="glass-panel p-4 rounded-2xl border border-emerald-900/40 hover:border-emerald-400 transition-all bg-[#111827]/80">
                    <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center justify-between">
                      <span>Hydration & Therapy</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="text-sm font-bold text-white">Oxygen Water + Peppermint</div>
                    <div className="text-[11px] text-slate-400 mt-1">pH 8.5+ & Freshness</div>
                    <div className="mt-2 text-[10px] inline-block px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">
                      Art de Huile Roll-on
                    </div>
                  </div>

                </div>

                {/* Bottom Center QR Card */}
                <div 
                  onClick={onOpenQrModal}
                  className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-700/40 flex items-center justify-between cursor-pointer hover:border-cyan-400 transition-all group/qr"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black border border-slate-700 font-mono text-[10px] text-cyan-400 flex items-center justify-center font-bold">
                      QR
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover/qr:text-cyan-400 transition-colors">
                        HEALTHY ESSENTIALS QR
                      </div>
                      <div className="text-[10px] text-slate-400">2-Min Box Breathing & Alpha Waves</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#0088FF] group-hover/qr:translate-x-1 transition-transform">
                    Test Demo &rarr;
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
