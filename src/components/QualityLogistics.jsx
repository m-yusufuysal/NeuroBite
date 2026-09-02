import React from 'react';
import { ShieldCheck, Truck, Award, ThermometerSnowflake, CheckCircle2, Leaf, Lock } from 'lucide-react';

export const QualityLogistics = () => {
  const brands = [
    { name: 'Solgar', desc: 'Dünya Lideri Vitamin & Nootropik' },
    { name: 'Ocean Plus', desc: 'IFOS 5 Yıldız Onaylı Balık Yağı' },
    { name: 'Thorne Research', desc: 'Premium Klinik Seviye Takviyeler' },
    { name: 'Venatura', desc: 'Sertifikalı Magnezyum & B-Kompleks' },
    { name: 'Art de Huile', desc: '%100 Saf Aromaterapi Esansiyel Yağ' },
    { name: 'Datça Organik', desc: 'Doğal Kavrulmamış Bio-Snack' }
  ];

  return (
    <section id="kalite-ve-teslimat" className="py-24 bg-[#060913] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>%100 Şeffaflık & Sertifikalı Güvenilirlik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Dünyanın En İyi Markaları, <br className="hidden sm:inline" />
            <span className="text-gradient-blue">Kusursuz Lojistik Ağıyla</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            NeuroBite'ta merdiven altı veya belirsiz ham maddeler asla kullanılmaz. Her bileşen alanında lider, ruhsatlı markalardan elde edilir.
          </p>
        </div>

        {/* Brand Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {brands.map((b, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-800 text-center hover:border-blue-500/40 transition-all">
              <div className="text-base font-extrabold text-white mb-1 font-sans">{b.name}</div>
              <div className="text-[10px] text-slate-400 font-mono">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Logistics & Safety Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-950 flex items-center justify-center text-[#0088FF]">
              <ThermometerSnowflake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Soğuk Zincir 08:30 Teslimat</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Her sabah 04:00 - 07:30 arasında hazırlanan taze tepsiler, frigorifik araçlarımızla saat 08:30’dan önce şirketinizin buzdolabına yerleştirilir.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Tarım Bakanlığı & GMP Onayı</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Kullandığımız tüm tablet ve gıdalar T.C. Tarım ve Orman Bakanlığı ruhsatlı, helal ve GMP (Good Manufacturing Practice) standartlarına sahiptir.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950 flex items-center justify-center text-cyan-400">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">BPA-Free Doğada Erir Ambalaj</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fotoğraftaki ergonomik mat siyah bento tepsilerimiz %100 geri dönüştürülebilir ve sağlığa zararsız BPA-Free polimer malzemeden üretilmiştir.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
