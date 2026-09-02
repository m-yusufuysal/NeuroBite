import React from 'react';
import { Check, Zap, Sparkles, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export const Plans = ({ onOpenSampleModal }) => {
  return (
    <section id="paketler" className="py-24 bg-gradient-to-b from-[#060913] via-[#0A1020] to-[#060913] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-[#0088FF] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tailored Corporate Subscription Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Corporate Cognitive <br className="hidden sm:inline" />
            <span className="text-gradient-blue">Subscription Tiers</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Flexible weekly delivery plans with zero long-term lock-in. Pause, upgrade, or cancel anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan 1: Starter */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                3 Days / Week
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Neuro-Starter</h3>
              <p className="text-xs text-slate-400 mb-6">
                Ideal starter package for peak workdays (Tuesday, Wednesday, Thursday).
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>Daily Nootropic Capsule (Lion’s Mane & Rhodiola)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>Oxygenated Alkaline Smart Water (250ml)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>Bio-Snack Compartment (Almonds & Date)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>QR Breathing & Focus Portal Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>08:30 AM Office Fridge Cold Delivery</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSampleModal}
              className="w-full py-3.5 rounded-xl font-bold text-xs text-slate-200 glass-panel hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
            >
              Explore Starter Plan
            </button>
          </div>

          {/* Plan 2: Pro (POPULAR) */}
          <div className="glass-panel-glow p-8 rounded-3xl border border-blue-500/50 bg-[#0C1428]/95 flex flex-col justify-between relative shadow-[0_0_40px_rgba(0,136,255,0.2)]">
            
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0088FF] to-cyan-400 text-white font-extrabold text-[11px] tracking-wider uppercase shadow-lg">
              Most Popular Tier
            </div>

            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#0088FF] mb-2 pt-2">
                5 Days / Week (Full Support)
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Neuro-Pro</h3>
              <p className="text-xs text-slate-300 mb-6">
                Complete Monday to Friday daily cognitive performance protocol.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-200">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>All Starter Components (5 Days/Week)</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Omega-3 DHA + CoQ10 & B12 Cellular Complex</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Art de Huile Aromatherapy Roll-On (Weekly)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dietary Customization (Vegan/Gluten-Free)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Monthly HR Productivity Analytics Report</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSampleModal}
              className="w-full py-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0088FF] to-cyan-500 hover:from-blue-600 hover:to-[#0088FF] shadow-[0_0_20px_rgba(0,136,255,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get Quote for Pro Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Plan 3: Enterprise VIP */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-2">
                50+ Employees Enterprise
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Neuro-VIP Enterprise</h3>
              <p className="text-xs text-slate-400 mb-6">
                Custom branded bento trays, medical advisory dosage, and personalized team surveys.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom Logo Branded Bento Trays</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Doctor & Nutritionist Guided Personalization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dedicated VIP Cold Delivery Fleet</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dedicated HR Portal Integration</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSampleModal}
              className="w-full py-3.5 rounded-xl font-bold text-xs text-amber-300 glass-panel hover:bg-slate-800 border border-amber-900/50 transition-all cursor-pointer"
            >
              Schedule Enterprise Consultation
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
