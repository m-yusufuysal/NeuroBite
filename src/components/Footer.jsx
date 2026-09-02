import React from 'react';
import { NeuroLogo } from './NeuroLogo';
import { ShieldCheck, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer = ({ onOpenSampleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060D] border-t border-slate-800/80 text-slate-400 text-xs relative pt-16 pb-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <NeuroLogo className="h-9" textClassName="text-xl font-black tracking-[0.2em]" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              NeuroBite is the premier corporate biohacking subscription delivering daily pre-portioned bento trays to boost focus, mental clarity, and team retention.
            </p>
            <div className="flex items-center gap-3 text-slate-300 pt-2 font-mono">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#0088FF]" /> Global HQ / Tech Metro</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-sm font-bold text-white font-sans">Platform</div>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#kutu-anatomisi" className="hover:text-[#0088FF] transition-colors">Tray Anatomy</a></li>
              <li><a href="#neden-neurobite" className="hover:text-[#0088FF] transition-colors">Why NeuroBite?</a></li>
              <li><a href="#roi-hesaplayici" className="hover:text-[#0088FF] transition-colors">ROI Calculator</a></li>
              <li><a href="#paketler" className="hover:text-[#0088FF] transition-colors">Plans & Pricing</a></li>
              <li><a href="#kalite-ve-teslimat" className="hover:text-[#0088FF] transition-colors">Quality & Logistics</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Safety */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-sm font-bold text-white font-sans">Legal Disclaimer & Compliance</div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              NeuroBite products are dietary supplements and essential wellness foods; they are not intended to diagnose, treat, cure, or prevent any disease. All supplements are sourced exclusively from licensed pharmaceutical brands including Solgar, Thorne, Ocean, and Venatura.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-300">Request custom presentation for your team</span>
              <button
                onClick={onOpenSampleModal}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0088FF] hover:bg-blue-600 cursor-pointer"
              >
                Get Sample
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} NeuroBite Biohacking Technologies Inc. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
