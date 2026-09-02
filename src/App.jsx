import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal, useCursorGlow, useCounter, useMagnetic } from './hooks/useAnimations';
import { ArrowRight, Play, Zap, Brain, Shield, TrendingUp, Users, Clock, Check, ChevronRight, Star, Sparkles, QrCode, X, Send, CheckCircle2, Building2, Mail, User, Pause, RefreshCw, Volume2, Droplets, Flame, HeartPulse, Award, ThermometerSnowflake, Leaf, MapPin, ArrowUp, Calculator, Eye, ChevronDown, MousePointer, Pill } from 'lucide-react';
import confetti from 'canvas-confetti';

const BASE = import.meta.env.BASE_URL;

/* ═══════════════════════════════════════════════════════
   NEUROBITE — Premium B2B Corporate Biohacking Platform
   Fable-quality Design with Scroll Animations
   ═══════════════════════════════════════════════════════ */

// ─── Navbar ───────────────────────────────────────────
function Navbar({ onSample, onQr }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${scrolled ? 'bg-[#06080F]/80 backdrop-blur-2xl border border-white/[0.04] rounded-2xl shadow-2xl shadow-black/30 mx-4 lg:mx-auto px-6 py-2' : 'px-6'}`}>
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src={`${BASE}logo.png`} alt="NeuroBite" className="h-14 w-14 rounded-xl object-cover transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,136,255,0.25)]" />
            <span className="text-xl font-bold tracking-[0.12em] text-white uppercase hidden sm:block">Neuro<span className="text-[#0088FF]">Bite</span></span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {[{l:'The Tray',h:'#product'},{l:'Science',h:'#science'},{l:'How It Works',h:'#how-it-works'},{l:'Impact',h:'#impact'},{l:'Plans',h:'#plans'},{l:'Trust',h:'#trust'}].map((t,i) => (
              <a key={i} href={t.h} className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.03]">{t.l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={onQr} className="hidden lg:flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#0088FF]/80 hover:text-[#0088FF] border border-[#0088FF]/20 hover:border-[#0088FF]/40 rounded-xl transition-all duration-300 hover:bg-[#0088FF]/5">
              <QrCode className="w-3.5 h-3.5" /> Live Demo
            </button>
            <button onClick={onSample} className="btn-magnetic px-5 py-2.5 text-[13px] font-semibold text-white bg-[#0088FF] rounded-xl shadow-lg shadow-[#0088FF]/20">
              Get Started <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </button>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white/60">
              {open ? <X className="w-5 h-5" /> : <div className="space-y-1.5"><div className="w-5 h-0.5 bg-white/60 rounded" /><div className="w-3.5 h-0.5 bg-white/60 rounded" /></div>}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-4 p-6 bg-[#0A0E1A]/95 backdrop-blur-2xl border border-white/[0.06] rounded-2xl space-y-1 animate-[fadeSlideDown_0.3s_ease]">
          {[{l:'The Tray',h:'#product'},{l:'Science',h:'#science'},{l:'How It Works',h:'#how-it-works'},{l:'Impact',h:'#impact'},{l:'Plans',h:'#plans'},{l:'Trust',h:'#trust'}].map((t,i) => (
            <a key={i} href={t.h} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all">{t.l}</a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button onClick={() => { setOpen(false); onSample(); }} className="w-full py-3 text-sm font-semibold text-white bg-[#0088FF] rounded-xl">Request Free Sample</button>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────
function Hero({ onSample }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06080F]">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0088FF]/[0.07] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
        <div className="bg-grid absolute inset-0 opacity-40" style={{maskImage:'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)'}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0088FF]/20 bg-[#0088FF]/[0.06] mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#0088FF] animate-pulse" />
              <span className="text-[12px] font-medium text-[#0088FF]/90 tracking-wide">Cognitive Performance for Corporate Teams</span>
            </div>

            <h1 className={`text-5xl sm:text-6xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tight mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-shine">Your team's brain</span>
              <br />
              <span className="text-gradient-blue">deserves better fuel.</span>
            </h1>

            <p className={`text-lg text-white/40 font-normal leading-relaxed max-w-lg mb-10 transition-all duration-1000 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              NeuroBite replaces office junk with science-backed daily bento trays—nootropics, adaptogens, superfoods, and smart hydration—delivered cold every morning.
            </p>

            <div className={`flex flex-col sm:flex-row items-start gap-4 mb-12 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button onClick={onSample} className="btn-magnetic group px-8 py-4 rounded-2xl font-semibold text-[15px] text-white bg-[#0088FF] shadow-[0_0_50px_-12px_rgba(0,136,255,0.6)] flex items-center gap-3">
                <span>Request Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#product" className="px-8 py-4 rounded-2xl font-medium text-[15px] text-white/60 hover:text-white border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-2">
                <Eye className="w-4 h-4" /> See inside the tray
              </a>
            </div>

            <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/25 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              {['Solgar certified','Cold chain delivery','Cancel anytime'].map((t,i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#0088FF]/40" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Product Tray Hero Image */}
          <div className={`relative transition-all duration-1200 delay-300 ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
            <div className="relative">
              {/* Glow behind tray */}
              <div className="absolute inset-0 bg-[#0088FF]/[0.08] rounded-[3rem] blur-[80px] scale-90" />
              
              {/* Tray Image */}
              <img 
                src={`${BASE}tray.png`} 
                alt="NeuroBite Daily Performance Tray — premium matte black bento with nootropics, superfoods, essential oils, and alkaline water" 
                className="relative z-10 w-full rounded-3xl animate-float shadow-2xl shadow-black/40"
              />
              
              {/* Floating Label Badges */}
              <div className="absolute -left-4 top-[15%] z-20 glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-white/70 animate-float hidden lg:flex items-center gap-1.5" style={{animationDelay:'0.5s'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Medjool Date
              </div>
              <div className="absolute -right-4 top-[18%] z-20 glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-white/70 animate-float hidden lg:flex items-center gap-1.5" style={{animationDelay:'1s'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Blueberries + Almonds
              </div>
              <div className="absolute -left-6 bottom-[30%] z-20 glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-white/70 animate-float hidden lg:flex items-center gap-1.5" style={{animationDelay:'1.5s'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Essential Oil Roll-On
              </div>
              <div className="absolute -right-6 bottom-[25%] z-20 glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-white/70 animate-float hidden lg:flex items-center gap-1.5" style={{animationDelay:'2s'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Alkaline Water
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-20 glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#0088FF] animate-float hidden lg:flex items-center gap-1.5" style={{animationDelay:'2.5s'}}>
                <QrCode className="w-3 h-3" /> Neuro-Routine QR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1200ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[11px] text-white/20 tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-white/20 animate-bounce" />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#06080F] to-transparent" />
    </section>
  );
}

// ─── Marquee Brand Strip ──────────────────────────────
function BrandStrip() {
  const brands = ['Solgar','Thorne Research','Ocean Plus','Venatura','Art de Huile','Datça Organic','Solgar','Thorne Research','Ocean Plus','Venatura','Art de Huile','Datça Organic'];
  return (
    <section className="relative py-12 bg-[#06080F] border-y border-white/[0.03] overflow-hidden">
      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
        {brands.map((b,i) => (
          <span key={i} className="text-xl font-bold text-white/[0.07] tracking-widest uppercase select-none">{b}</span>
        ))}
      </div>
    </section>
  );
}

// ─── Product Showcase — Interactive Tray Anatomy ──────
function ProductShowcase({ onQr }) {
  const [active, setActive] = useState(0);
  
  const items = [
    { label: 'Nootropic Stack', icon: <Brain className="w-5 h-5" />, color: '#0088FF', title: "Lion's Mane + Rhodiola Rosea", detail: 'Stimulates Nerve Growth Factor (NGF) for neural regeneration. Rhodiola blocks cortisol to sustain deep work. Two capsules, pharmaceutical-grade.', brand: 'Solgar · Venatura', dose: '500mg + 200mg' },
    { label: 'Cellular Energy', icon: <HeartPulse className="w-5 h-5" />, color: '#06B6D4', title: 'Omega-3 DHA + CoQ10 + B12', detail: 'Rebuilds brain cell membranes with ultra-purified DHA. CoQ10 powers mitochondrial ATP production. B12 methylcobalamin for neurotransmitter synthesis.', brand: 'Ocean Plus · Thorne', dose: '600mg + 100mg + 1000mcg' },
    { label: 'Neuro-Snack Stack', icon: <Flame className="w-5 h-5" />, color: '#F59E0B', title: 'Dark Chocolate 85% · Walnuts · Pumpkin Seeds', detail: 'Theobromine in dark chocolate boosts cerebral blood flow by 10%. Walnuts deliver the highest ALA omega-3 of any nut for DHA synthesis. Pumpkin seeds provide zinc and magnesium—critical cofactors for GABA and serotonin production.', brand: 'Lindt Excellence · Datça Farm', dose: '~40g blend' },
    { label: 'Smart Hydration', icon: <Droplets className="w-5 h-5" />, color: '#10B981', title: 'Oxygenated Alkaline Water', detail: 'pH 8.5+ with dissolved oxygen molecules. Even 1.5% dehydration reduces attention span by 12%. Cold-filled daily in BPA-free glass.', brand: 'Cold-filled · BPA-free glass', dose: '250ml' },
    { label: 'Aromatherapy Focus', icon: <Sparkles className="w-5 h-5" />, color: '#A855F7', title: 'Rosemary + Peppermint Roll-On', detail: 'Applied to temples for instant acetylcholine boost. Rosemary 1,8-cineole proven to increase alertness by 11% in 30 seconds.', brand: 'Art de Huile · 100% Pure', dose: '5ml roll-on' },
    { label: 'Digital Ritual', icon: <QrCode className="w-5 h-5" />, color: '#0088FF', title: 'Neuro-Routine QR Card', detail: 'Daily card with unique QR code. Scan for 2-minute box breathing guide + binaural alpha wave focus audio (10Hz). Tracks wellness score.', brand: 'NeuroBite Digital · Daily', dose: 'Unique daily card' },
  ];

  return (
    <section id="product" className="relative py-32 bg-[#06080F] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#0088FF]/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <p className="reveal text-[13px] font-semibold text-[#0088FF]/70 tracking-[0.2em] uppercase mb-4">Inside every tray</p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Six components.<br /><span className="text-gradient-blue">Zero compromises.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-white/30 max-w-xl mx-auto">Every ingredient is pharmaceutical-grade, sourced from world-leading brands. Tap each component to learn why it's there.</p>
        </div>

        <div className="reveal reveal-delay-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tray Image */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0088FF]/[0.06] rounded-[2rem] blur-[60px] scale-90 opacity-50" />
                <img src={`${BASE}tray.png`} alt="NeuroBite Daily Tray" className="relative z-10 w-full rounded-2xl shadow-2xl shadow-black/30" />
              </div>
              
              {/* Tray Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[{n:'6',l:'Components'},{n:'<3',l:'Min to consume'},{n:'8:30',l:'AM Delivery'}].map((s,i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-lg font-bold text-white">{s.n}</p>
                    <p className="text-[10px] text-white/25 uppercase tracking-wider">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Component Cards */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(active === i ? -1 : i)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${active === i ? 'border-white/[0.08] bg-[#0A0E1A]/80' : 'border-white/[0.03] bg-[#0A0E1A]/30 hover:border-white/[0.06] hover:bg-[#0A0E1A]/50'}`}
              >
                {/* Header Row */}
                <div className="flex items-center gap-4 p-6">
                  <div className="p-2.5 rounded-xl shrink-0" style={{background:`${item.color}12`, color: item.color, border:`1px solid ${item.color}20`}}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold tracking-wider uppercase" style={{color: item.color}}>{item.label}</span>
                    <h3 className="text-[17px] font-bold text-white truncate">{item.title}</h3>
                  </div>
                  <div className={`p-1.5 rounded-lg transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-white/20" />
                  </div>
                </div>

                {/* Expandable Detail */}
                <div className={`transition-all duration-500 ease-out overflow-hidden ${active === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[14px] text-white/40 leading-relaxed mb-4">{item.detail}</p>
                    <div className="flex items-center gap-4 text-[12px]">
                      <span className="font-mono text-white/20 px-2 py-1 rounded-md bg-white/[0.03]">{item.dose}</span>
                      <span className="text-white/15">{item.brand}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── What's Inside — Science Grid ─────────────────────
function Science() {
  const stats = [
    { value: '23%', label: 'Focus time increase', sub: 'After 30 days of daily use', icon: <TrendingUp className="w-5 h-5" /> },
    { value: '41%', label: 'Less brain fog', sub: 'Self-reported by 200+ users', icon: <Brain className="w-5 h-5" /> },
    { value: '2.4x', label: 'ROI on wellness spend', sub: 'Compared to gym stipends', icon: <Calculator className="w-5 h-5" /> },
    { value: '89%', label: 'Employee satisfaction', sub: 'Would recommend to peers', icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <section id="science" className="relative py-32 bg-[#06080F]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0088FF]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <p className="reveal text-[13px] font-semibold text-[#0088FF]/70 tracking-[0.2em] uppercase mb-4">The evidence</p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Not a perk.<br /><span className="text-gradient-blue">A performance edge.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-white/30 max-w-xl mx-auto">Companies using NeuroBite report measurable improvements in team output within the first month.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s,i) => (
            <div key={i} className={`reveal reveal-delay-${i+1} group p-8 rounded-3xl border border-white/[0.04] bg-[#0A0E1A]/40 hover:border-[#0088FF]/20 card-hover text-center`}>
              <div className="w-12 h-12 rounded-2xl bg-[#0088FF]/[0.06] border border-[#0088FF]/10 flex items-center justify-center text-[#0088FF] mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <p className="text-4xl font-black text-white mb-2">{s.value}</p>
              <p className="text-sm font-semibold text-white/50 mb-1">{s.label}</p>
              <p className="text-[12px] text-white/20">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', title: 'We learn your team', desc: 'Quick onboarding survey captures headcount, dietary needs (vegan, gluten-free, nut-free), and delivery logistics.', detail: '5-minute setup • Slack integration available' },
    { num: '02', title: 'We prep at 4 AM', desc: 'Every tray is assembled fresh in our GMP-certified facility. Supplements pre-portioned. Snacks sealed. Water cold-filled.', detail: 'ISO 22000 compliant kitchen' },
    { num: '03', title: 'Delivered by 8:30 AM', desc: 'Refrigerated fleet stocks your office fridge before your team arrives. Every tray labeled by name or desk number.', detail: 'Temperature-controlled logistics' },
    { num: '04', title: 'Team performs', desc: 'Employees scan the QR card for their daily focus ritual. Brain fog drops. Deep work hours go up. You see it in the output.', detail: 'Monthly analytics report included' },
  ];

  return (
    <section id="how-it-works" className="relative py-32 bg-[#06080F]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="reveal text-[13px] font-semibold text-[#0088FF]/70 tracking-[0.2em] uppercase mb-4">How it works</p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            From our kitchen<br /><span className="text-gradient-blue">to your team's desk.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0088FF]/30 via-[#0088FF]/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i+1} flex gap-6 lg:gap-8 items-start`}>
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#0088FF]/[0.08] border border-[#0088FF]/20 flex items-center justify-center text-[#0088FF] font-bold text-lg">
                    {s.num}
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-3xl border border-white/[0.04] bg-[#0A0E1A]/40 hover:border-white/[0.08] transition-all duration-500 group">
                  <span className="md:hidden text-[#0088FF] font-bold text-sm">Step {s.num}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-3">{s.title}</h3>
                  <p className="text-[15px] text-white/35 leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-[12px] text-[#0088FF]/50 font-medium">{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Impact / ROI Section ─────────────────────────────
function Impact({ onSample }) {
  const [count, setCount] = useState(20);
  const [days, setDays] = useState(5);
  const focusHrs = Math.round(count * 1.2 * days * 4.2);
  const value = Math.round(focusHrs * 35);
  const cost = count * (days === 5 ? 50 : 35) * 4;
  const roi = (value / Math.max(cost, 1)).toFixed(1);

  return (
    <section id="impact" className="relative py-32 bg-[#06080F]">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0088FF]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <p className="reveal text-[13px] font-semibold text-[#0088FF]/70 tracking-[0.2em] uppercase mb-4">Measurable impact</p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            The math is<br /><span className="text-gradient-blue">stupidly simple.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-white/30 max-w-xl mx-auto">Move the slider. Watch the numbers. Then ask yourself why you're still buying donuts.</p>
        </div>

        <div className="reveal reveal-delay-3 glass-glow rounded-[2rem] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-medium text-white/50">Team size</label>
                  <span className="text-3xl font-black text-white tabular-nums">{count}</span>
                </div>
                <input type="range" min="5" max="200" step="5" value={count} onChange={(e) => setCount(+e.target.value)}
                  className="w-full h-1.5 bg-white/[0.06] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0088FF] [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(0,136,255,0.5)] [&::-webkit-slider-thumb]:appearance-none" />
                <div className="flex justify-between mt-2 text-[11px] text-white/15 font-mono"><span>5</span><span>50</span><span>100</span><span>200</span></div>
              </div>

              <div>
                <label className="text-sm font-medium text-white/50 mb-3 block">Delivery frequency</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{v:3,l:'3 days / week'},{v:5,l:'5 days / week'}].map(d => (
                    <button key={d.v} onClick={() => setDays(d.v)} className={`py-3.5 rounded-xl text-[13px] font-semibold border transition-all duration-300 ${days===d.v ? 'bg-[#0088FF]/10 text-[#0088FF] border-[#0088FF]/30' : 'text-white/30 border-white/[0.06] hover:border-white/[0.1]'}`}>{d.l}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <p className="text-[12px] text-white/30 mb-1">Monthly deep focus hours gained</p>
                <p className="text-4xl font-black text-white">+{focusHrs} <span className="text-lg font-normal text-white/30">hours</span></p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-[12px] text-white/30 mb-1">Productivity value</p>
                  <p className="text-2xl font-bold text-emerald-400">${value.toLocaleString()}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-[12px] text-white/30 mb-1">ROI ratio</p>
                  <p className="text-2xl font-bold text-[#0088FF]">{roi}x</p>
                </div>
              </div>
              <button onClick={onSample} className="btn-magnetic w-full py-4 rounded-xl font-semibold text-[14px] text-white bg-[#0088FF] shadow-lg shadow-[#0088FF]/20 flex items-center justify-center gap-2">
                Get sample for {count} people <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Plans ────────────────────────────────────────────
function Plans({ onSample }) {
  const plans = [
    { name: 'Starter', freq: '3 days/week', price: 'from $7', unit: '/ person / day', desc: 'Peak-day coverage for focused teams.', features: ['Nootropic capsule (Lion\'s Mane)', 'Oxygenated smart water', 'Bio-snack compartment', 'QR focus portal access', '8:30 AM cold delivery'], popular: false },
    { name: 'Pro', freq: '5 days/week', price: 'from $6', unit: '/ person / day', desc: 'Full-week cognitive coverage. Our most chosen.', features: ['Everything in Starter, daily', 'Omega-3 DHA + CoQ10 + B12', 'Aromatherapy roll-on (weekly)', 'Dietary customization', 'Monthly HR analytics report', 'Dedicated account manager'], popular: true },
    { name: 'Enterprise', freq: 'Custom', price: 'Custom', unit: 'pricing', desc: 'White-glove program for 50+ teams.', features: ['Custom branded trays', 'Doctor-guided personalization', 'Dedicated delivery fleet', 'HR dashboard integration', 'Quarterly wellness reviews', 'On-site wellness workshops'], popular: false },
  ];

  return (
    <section id="plans" className="relative py-32 bg-[#06080F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="reveal text-[13px] font-semibold text-[#0088FF]/70 tracking-[0.2em] uppercase mb-4">Pricing</p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Plans that scale<br /><span className="text-gradient-blue">with your team.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p,i) => (
            <div key={i} className={`reveal reveal-delay-${i+1} relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${p.popular ? 'border-[#0088FF]/30 bg-[#0088FF]/[0.03] shadow-[0_0_60px_-15px_rgba(0,136,255,0.15)]' : 'border-white/[0.04] bg-[#0A0E1A]/40 hover:border-white/[0.08]'}`}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0088FF] text-white text-[11px] font-bold tracking-wider uppercase">Most popular</div>}
              <div className="mb-8">
                <p className="text-[12px] font-semibold text-white/30 tracking-wider uppercase mb-3">{p.freq}</p>
                <h3 className="text-2xl font-bold text-white mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black text-white">{p.price}</span>
                  <span className="text-[12px] text-white/25">{p.unit}</span>
                </div>
                <p className="text-[14px] text-white/30">{p.desc}</p>
              </div>
              <div className="flex-1 space-y-3 mb-8">
                {p.features.map((f,j) => (
                  <div key={j} className="flex items-center gap-3 text-[14px] text-white/50">
                    <Check className={`w-4 h-4 shrink-0 ${p.popular ? 'text-[#0088FF]' : 'text-white/20'}`} /> {f}
                  </div>
                ))}
              </div>
              <button onClick={onSample} className={`w-full py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 ${p.popular ? 'bg-[#0088FF] text-white shadow-lg shadow-[#0088FF]/20 btn-magnetic' : 'border border-white/[0.08] text-white/50 hover:text-white hover:border-white/[0.15]'}`}>
                {p.popular ? 'Get started' : p.name === 'Enterprise' ? 'Contact sales' : 'Learn more'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Quality ──────────────────────────────────
function Trust() {
  const items = [
    { icon: <ThermometerSnowflake className="w-6 h-6" />, title: 'Cold Chain 8:30 AM', desc: 'Assembled at 4 AM, delivered refrigerated before your team arrives. Every single morning.' },
    { icon: <Award className="w-6 h-6" />, title: 'FDA · ISO 22000 · GMP', desc: 'Every supplement holds pharmaceutical-grade certification. No exceptions, no shortcuts.' },
    { icon: <Leaf className="w-6 h-6" />, title: 'BPA-Free Recyclable', desc: 'Matte black bento trays. 100% recyclable polymer. Designed for the corporate fridge.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Doctor-Reviewed Formulas', desc: 'Every tray composition reviewed by licensed nutritionists and sports medicine physicians.' },
    { icon: <Users className="w-6 h-6" />, title: 'Allergen Transparency', desc: 'Full ingredient disclosure. Vegan, gluten-free, nut-free options. Allergens flagged on every label.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Source Traceability', desc: 'QR scan any ingredient for its origin farm, batch number, and third-party lab test results.' },
  ];

  return (
    <section id="trust" className="relative py-32 bg-[#06080F] border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="reveal text-[13px] font-semibold text-[#0088FF]/70 tracking-[0.2em] uppercase mb-4">Trust & transparency</p>
          <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            We obsess over quality<br /><span className="text-gradient-blue">so you don't have to.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i+1,5)} p-8 rounded-3xl border border-white/[0.04] bg-[#0A0E1A]/40 hover:border-white/[0.08] card-hover`}>
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#0088FF] mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-[14px] text-white/30 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Band ─────────────────────────────────────────
function CtaBand({ onSample }) {
  return (
    <section className="relative py-32 bg-[#06080F] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-[#0088FF]/[0.06] rounded-full blur-[200px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Ready to fuel<br /><span className="text-gradient-blue">your team's best work?</span>
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-white/30 mb-10 max-w-lg mx-auto">
          Request a free one-week trial kit. No contracts. No commitments. Just performance.
        </p>
        <button onClick={onSample} className="reveal reveal-delay-2 btn-magnetic px-10 py-5 rounded-2xl font-semibold text-[16px] text-white bg-[#0088FF] shadow-[0_0_60px_-10px_rgba(0,136,255,0.5)] inline-flex items-center gap-3">
          Request Free Sample <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#04060D] border-t border-white/[0.04] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 pb-12 border-b border-white/[0.04]">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src={`${BASE}logo.png`} alt="NeuroBite" className="h-10 w-10 rounded-xl object-cover" />
              <span className="text-lg font-bold tracking-[0.15em] text-white/80 uppercase">Neuro<span className="text-[#0088FF]">Bite</span></span>
            </div>
            <p className="text-[14px] text-white/25 leading-relaxed max-w-sm">Daily cognitive nutrition for corporate teams. Science-backed. Cold-delivered. Performance-proven.</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[13px] font-semibold text-white/40 mb-4">Platform</p>
            <ul className="space-y-2 text-[14px] text-white/20">
              {[{l:'The Tray',h:'#product'},{l:'Science',h:'#science'},{l:'How It Works',h:'#how-it-works'},{l:'Impact',h:'#impact'},{l:'Plans',h:'#plans'},{l:'Trust',h:'#trust'}].map((t,i) => (
                <li key={i}><a href={t.h} className="hover:text-white/50 transition-colors">{t.l}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-[13px] font-semibold text-white/40 mb-4">Legal</p>
            <p className="text-[12px] text-white/15 leading-relaxed">NeuroBite products are dietary supplements and not intended to diagnose, treat, cure, or prevent any disease. All ingredients are sourced from licensed pharmaceutical-grade brands with full traceability.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/15">© {new Date().getFullYear()} NeuroBite Inc. All rights reserved.</p>
          <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="text-[12px] text-white/15 hover:text-white/30 transition-colors flex items-center gap-1">Back to top <ArrowUp className="w-3 h-3" /></button>
        </div>
      </div>
    </footer>
  );
}

// ─── Sample Modal ─────────────────────────────────────
function SampleModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ company:'', name:'', email:'', phone:'', size:'10-25', diet:[] });

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    confetti({ particleCount: 80, spread: 60, origin:{y:0.5}, colors:['#0088FF','#06B6D4','#10B981'] });
  };

  const toggleDiet = (v) => setData(p => ({...p, diet: p.diet.includes(v) ? p.diet.filter(d=>d!==v) : [...p.diet,v]}));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl" onClick={onClose}>
      <div className="relative w-full max-w-lg glass-glow rounded-3xl p-8 max-h-[90vh] overflow-y-auto" onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.04] text-white/40 hover:text-white"><X className="w-4 h-4" /></button>

        {!sent ? (
          <>
            <h3 className="text-2xl font-bold text-white mb-1">Request your trial kit</h3>
            <p className="text-[14px] text-white/30 mb-8">Free one-week bento kit for teams with 10+ members. No contract required.</p>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Company name" value={data.company} onChange={e=>setData({...data,company:e.target.value})} className="col-span-2 sm:col-span-1 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder-white/20 focus:border-[#0088FF]/40 focus:outline-none transition-colors" />
                <input required placeholder="Your name & title" value={data.name} onChange={e=>setData({...data,name:e.target.value})} className="col-span-2 sm:col-span-1 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder-white/20 focus:border-[#0088FF]/40 focus:outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input required type="email" placeholder="Work email" value={data.email} onChange={e=>setData({...data,email:e.target.value})} className="col-span-2 sm:col-span-1 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder-white/20 focus:border-[#0088FF]/40 focus:outline-none transition-colors" />
                <input required type="tel" placeholder="Phone" value={data.phone} onChange={e=>setData({...data,phone:e.target.value})} className="col-span-2 sm:col-span-1 w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white placeholder-white/20 focus:border-[#0088FF]/40 focus:outline-none transition-colors" />
              </div>
              <select value={data.size} onChange={e=>setData({...data,size:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white focus:border-[#0088FF]/40 focus:outline-none">
                <option value="10-25">10–25 employees</option><option value="25-50">25–50</option><option value="50-100">50–100</option><option value="100+">100+</option>
              </select>
              <div>
                <p className="text-[12px] text-white/30 mb-2">Dietary needs</p>
                <div className="flex flex-wrap gap-2">
                  {['Vegan','Gluten-free','Nut-free','Caffeine-free'].map(d => (
                    <button type="button" key={d} onClick={()=>toggleDiet(d)} className={`px-3 py-1.5 rounded-lg text-[12px] font-medium border transition-all ${data.diet.includes(d)?'bg-[#0088FF]/10 text-[#0088FF] border-[#0088FF]/30':'text-white/25 border-white/[0.06] hover:border-white/[0.1]'}`}>{d}</button>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn-magnetic w-full py-4 rounded-xl font-semibold text-sm text-white bg-[#0088FF] shadow-lg shadow-[#0088FF]/20 flex items-center justify-center gap-2 mt-2">
                <Send className="w-4 h-4" /> Submit request
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center"><CheckCircle2 className="w-8 h-8" /></div>
            <h3 className="text-2xl font-bold text-white">Request confirmed</h3>
            <p className="text-[14px] text-white/30 max-w-sm mx-auto">We'll reach out to <strong className="text-white/50">{data.email}</strong> within 24 hours to coordinate your trial delivery.</p>
            <button onClick={onClose} className="px-8 py-3 rounded-xl text-sm font-semibold text-white bg-[#0088FF]">Done</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── QR Modal ─────────────────────────────────────────
function QrModal({ open, onClose }) {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState('Inhale');
  const [sec, setSec] = useState(4);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!running) return;
    const iv = setInterval(() => {
      setSec(p => {
        if (p <= 1) {
          setPhase(c => {
            if (c==='Inhale') return 'Hold';
            if (c==='Hold') return 'Exhale';
            if (c==='Exhale') return 'Rest';
            setCycles(x => x+1);
            return 'Inhale';
          });
          return 4;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [running]);

  if (!open) return null;

  const phaseColors = { Inhale:'#0088FF', Hold:'#06B6D4', Exhale:'#10B981', Rest:'#A855F7', Ready:'#0088FF' };
  const currentColor = phaseColors[phase] || '#0088FF';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl" onClick={onClose}>
      <div className="relative w-full max-w-md glass-glow rounded-3xl p-8" onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.04] text-white/40 hover:text-white"><X className="w-4 h-4" /></button>

        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-[#0088FF]/10 text-[#0088FF]"><QrCode className="w-5 h-5" /></div>
          <div>
            <h3 className="text-lg font-bold text-white">Neuro-Routine Portal</h3>
            <p className="text-[12px] text-white/30">Live demo of the daily QR experience</p>
          </div>
        </div>

        <div className="py-8 text-center">
          <div className="relative w-36 h-36 mx-auto flex items-center justify-center mb-8">
            <div className={`absolute inset-0 rounded-full border-2 transition-all duration-1000`} style={{borderColor: running ? currentColor : 'rgba(255,255,255,0.1)', boxShadow: running ? `0 0 40px ${currentColor}30` : 'none', transform: running && (phase === 'Inhale' || phase === 'Hold') ? 'scale(1.15)' : 'scale(1)'}} />
            {running && <div className="absolute inset-0 rounded-full border-2 animate-pulse-ring" style={{borderColor:`${currentColor}30`}} />}
            <div className="z-10 text-center">
              <p className="text-4xl font-black text-white tabular-nums">{sec}<span className="text-lg text-white/30">s</span></p>
              <p className="text-[13px] font-semibold mt-1" style={{color: currentColor}}>{running ? phase : 'Ready'}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button onClick={()=>{if(!running){setRunning(true);setPhase('Inhale');setSec(4);setCycles(0);}else setRunning(false);}} className="btn-magnetic px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-[#0088FF] shadow-lg shadow-[#0088FF]/20 flex items-center gap-2">
              {running?<Pause className="w-4 h-4"/>:<Play className="w-4 h-4"/>} {running?'Pause':'Start breathing'}
            </button>
            <button onClick={()=>{setRunning(false);setSec(4);setPhase('Ready');setCycles(0);}} className="p-2.5 rounded-xl border border-white/[0.06] text-white/30 hover:text-white transition-colors"><RefreshCw className="w-4 h-4" /></button>
          </div>
          {cycles>0 && <p className="mt-4 text-[12px] text-emerald-400 animate-pulse">✓ {cycles} cycle{cycles>1?'s':''} complete</p>}
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <p className="text-[12px] font-medium text-white/30 mb-3 flex items-center gap-2"><Volume2 className="w-3.5 h-3.5 text-[#0088FF]" /> Alpha Focus Audio · 10Hz binaural</p>
          <div className="flex items-end justify-center gap-1 h-8">
            {[35,65,50,85,55,75,40,90,60,80,45,70,55,65].map((h,i) => (
              <div key={i} style={{height: running?`${h}%`:'15%', animationDelay:`${i*0.1}s`}} className={`w-1 rounded-full transition-all duration-500 ${running?'bg-[#0088FF]/60 animate-pulse':'bg-white/[0.06]'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────
export default function App() {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const cursorRef = useCursorGlow();

  useScrollReveal();

  return (
    <div className="grain">
      <div ref={cursorRef} className="cursor-glow hidden lg:block" />

      <Navbar onSample={() => setSampleOpen(true)} onQr={() => setQrOpen(true)} />
      <Hero onSample={() => setSampleOpen(true)} />
      <BrandStrip />
      <ProductShowcase onQr={() => setQrOpen(true)} />
      <Science />
      <HowItWorks />
      <Impact onSample={() => setSampleOpen(true)} />
      <Plans onSample={() => setSampleOpen(true)} />
      <Trust />
      <CtaBand onSample={() => setSampleOpen(true)} />
      <Footer />

      <SampleModal open={sampleOpen} onClose={() => setSampleOpen(false)} />
      <QrModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </div>
  );
}
