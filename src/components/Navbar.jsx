import React, { useState, useEffect } from 'react';
import { NeuroLogo } from './NeuroLogo';
import { QrCode as QrIcon, Menu as MenuIcon, X as XIcon, ArrowRight } from 'lucide-react';

export const Navbar = ({ onOpenSampleModal, onOpenQrModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#060913]/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <NeuroLogo className="h-9 sm:h-10" textClassName="text-lg sm:text-xl font-black tracking-[0.2em]" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#kutu-anatomisi" className="hover:text-[#0088FF] transition-colors py-1">Kutu Anatomisi</a>
            <a href="#neden-neurobite" className="hover:text-[#0088FF] transition-colors py-1">Neden NeuroBite?</a>
            <a href="#roi-hesaplayici" className="hover:text-[#0088FF] transition-colors py-1">ROI Hesaplayıcı</a>
            <a href="#paketler" className="hover:text-[#0088FF] transition-colors py-1">Paketler & Fiyatlama</a>
            <a href="#kalite-ve-teslimat" className="hover:text-[#0088FF] transition-colors py-1">Kalite & Lojistik</a>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQrModal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/50 rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
            >
              <QrIcon className="w-4 h-4" />
              <span>QR Ritüeli Demo</span>
            </button>

            <button
              onClick={onOpenSampleModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide text-white bg-gradient-to-r from-[#0088FF] to-blue-600 hover:from-blue-600 hover:to-[#0088FF] transition-all duration-300 shadow-[0_0_20px_rgba(0,136,255,0.4)] hover:shadow-[0_0_30px_rgba(0,136,255,0.7)] hover:scale-[1.03] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Ücretsiz Numune İste</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSampleModal}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0088FF]"
            >
              Numune Al
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 bg-[#060913]/95 px-6 pt-4 pb-6 space-y-4 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#kutu-anatomisi"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium hover:text-[#0088FF] py-2 border-b border-slate-800/50"
          >
            Kutu Anatomisi
          </a>
          <a
            href="#neden-neurobite"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium hover:text-[#0088FF] py-2 border-b border-slate-800/50"
          >
            Neden NeuroBite?
          </a>
          <a
            href="#roi-hesaplayici"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium hover:text-[#0088FF] py-2 border-b border-slate-800/50"
          >
            ROI Hesaplayıcı
          </a>
          <a
            href="#paketler"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium hover:text-[#0088FF] py-2 border-b border-slate-800/50"
          >
            Paketler
          </a>
          <a
            href="#kalite-ve-teslimat"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium hover:text-[#0088FF] py-2"
          >
            Kalite & Teslimat
          </a>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQrModal(); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50"
            >
              <QrIcon className="w-4 h-4" />
              <span>QR Ritüeli Demo</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSampleModal(); }}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0088FF] to-blue-600 shadow-[0_0_20px_rgba(0,136,255,0.4)]"
            >
              Ücretsiz Şirket Numunesi İste
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
