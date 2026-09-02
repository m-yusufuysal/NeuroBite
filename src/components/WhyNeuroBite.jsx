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
            <span>Bilimsel & Veriye Dayalı Nöro-Performans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Neden Türkiye’nin Yenilikçi Firmaları <br className="hidden sm:inline" />
            <span className="text-gradient-blue">NeuroBite Kullanıyor?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Geleneksel ofis ikramları (kahve, kurabiye, şekerli atıştırmalıklar) kan şekerini hızla zıplatır ve 1 saat sonra beyin çöküşüne yol açar. NeuroBite ise hücre düzeyinde sürdürülebilir odak üretir.
          </p>
        </div>

        {/* Traditional Office Snacks vs NeuroBite Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Traditional Way */}
          <div className="glass-panel p-8 rounded-3xl border border-red-900/30 bg-red-950/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold tracking-wider text-red-400 uppercase bg-red-950/80 px-3 py-1 rounded-full border border-red-800/50">
                Geleneksel Ofis İkramları
              </span>
              <Coffee className="w-6 h-6 text-red-400" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Günde 4 Kahve + Şekerli Kurabiyeler
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>Saat 14:30 - 15:30 arasında ani kan şekeri düşüşü ve zihinsel sis (Brain Fog).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>Aşırı kafein alımına bağlı çarpıntı, sinirlilik ve odak dağınıklığı.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <p>Haftada ortalama 12 saat verimsiz "ekrana boş bakma" süresi kaybı.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-900/40 text-xs text-red-300 font-mono">
              Net Sonuç: Gün sonunda tükenmişlik (burnout) ve düşük motivasyon.
            </div>
          </div>

          {/* NeuroBite Biohacking Way */}
          <div className="glass-panel-glow p-8 rounded-3xl border border-blue-500/40 bg-blue-950/20 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0088FF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold tracking-wider text-[#0088FF] uppercase bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                NeuroBite Daily Bento Protokolü
              </span>
              <Brain className="w-6 h-6 text-[#0088FF]" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Günlük Nootropik + Bio-Snack + Oksijenli Su
            </h3>

            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0088FF] mt-2 shrink-0" />
                <p>Bütün gün stabil kalan zihinsel performans ve yüksek berraklık.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <p>Stres hormonu kortizolün dengelenmesi ve kas-sinir rahatlaması (Magnezyum & B6).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <p>Haftada her çalışan için ortalama <strong>+6.5 saat ekstra derin odak süresi</strong>.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0088FF]/15 border border-blue-500/40 text-xs text-blue-200 font-mono font-semibold">
              Net Sonuç: Mutlu, enerjik ve yüksek performanslı ekip arkadaşları!
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-950 flex items-center justify-center text-[#0088FF] mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Zihinsel Sis Dağıtma</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lion’s Mane mantarı ve Rhodiola adaptojeni ile nöron iletimi hızlanır, zihinsel karmaşa ve unutkanlık yok olur.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Kesintisiz Hücresel Enerji</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ubiquinol CoQ10 ve B12 mitokondriyal enerji üretimini destekler; öğleden sonra yorgunluğunun önüne geçer.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-950 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">İK İçin Yetenek Tutundurma</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Şirketlerin çalışanlarına sunduğu en şık ve yenilikçi "Executive Wellness" yan hak hediyesi.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Ölçülebilir ROI Gücü</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verimlilik ve odak artışıyla yapılan yatırım, çalışan başına sağlanan zaman kazancı ile ilk aydan amorti edilir.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
