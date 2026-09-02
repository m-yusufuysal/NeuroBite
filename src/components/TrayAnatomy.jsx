import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldAlert, Award, Zap, HeartPulse, Droplets, Flame, QrCode, ArrowRight } from 'lucide-react';

export const TrayAnatomy = ({ onOpenQrModal }) => {
  const [activeCompartment, setActiveCompartment] = useState('nootropics');

  const compartments = {
    nootropics: {
      id: 'nootropics',
      name: 'Nootropik Odak Kapsülleri',
      category: 'Zihinsel Berraklık & Nöron Koruması',
      badge: 'Solgar & Venatura Sertifikalı',
      icon: Zap,
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-[#0088FF]',
      borderColor: 'border-[#0088FF]',
      bgGlow: 'bg-[#0088FF]/10',
      items: [
        { name: 'Lion’s Mane (Yeleli Mantar) Ekstresi', detail: '500mg - NGF (Nöron Büyüme Faktörü) uyarımı' },
        { name: 'Rhodiola Rosea Adaptojen', detail: '200mg - Zihinsel yorgunluk & stres direnci' },
        { name: 'Bacopa Monnieri', detail: '150mg - Hafıza ve bilgi işleme hızı' }
      ],
      science: 'Nöronlar arasındaki sinaptik iletimi hızlandırır, ekran karşısında 4 saati aşan odaklanma sürelerinde beyin sisini (brain fog) %80 oranında azaltır.',
      brandInfo: '%100 GMP, ISO 22000 ve T.C. Tarım ve Orman Bakanlığı onaylı orijinal Solgar/Venatura kapsüllerinden günlük steril olarak paketlenir.'
    },
    energy: {
      id: 'energy',
      name: 'Omega-3 DHA + CoQ10 & B12 Kompleks',
      category: 'Hücresel Enerji (ATP) & Beyin Yapısı',
      badge: 'Ocean Ultra Purified & Thorne',
      icon: HeartPulse,
      color: 'from-cyan-400 to-blue-500',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-400',
      bgGlow: 'bg-cyan-500/10',
      items: [
        { name: 'Ultra Purified DHA Balık Yağı', detail: '600mg Yüksek DHA (Trigliserid Form)' },
        { name: 'Coenzyme Q10 (Ubiquinol)', detail: '100mg - Mitokondriyal ATP sentezi' },
        { name: 'Methylcobalamin (Aktif B12)', detail: '1000mcg - Sinir kılıfı & odak koruması' }
      ],
      science: 'Beyin dokusunun %60’ı yağdan oluşur. Yüksek DHA hücresel zarları yenilerken CoQ10 öğleden sonra saat 15:00 çöküşünü hücresel düzeyde engeller.',
      brandInfo: 'Ağır metallerden arındırılmış (IFOS 5 Yıldız Onaylı) Ocean Plus ve Thorne ürünleri kullanılarak üretilmiştir.'
    },
    snacks: {
      id: 'snacks',
      name: 'Bio-Snack Glikoz Dengeleyici',
      category: 'Temiz Beyin Yakıtı & Mikro-Besin',
      badge: 'Datça & Malatya Organik Çiftlik',
      icon: Flame,
      color: 'from-amber-400 to-orange-500',
      textColor: 'text-amber-400',
      borderColor: 'border-amber-400',
      bgGlow: 'bg-amber-500/10',
      items: [
        { name: 'Çiğ Datça Bademi', detail: '8 Adet - Doğal Magnezyum & E Vitamini' },
        { name: 'Medjoul Kral Hurması', detail: '1 Adet - Yavaş salınımlı fruktoz & potasyum' },
        { name: 'Liyofilize Yaban Mersini / Goji Berry', detail: '10g - Resveratrol & Antioksidan' }
      ],
      science: 'İşlenmiş şekerli atıştırmalıkların yarattığı kan şekeri dalgalanmasını (insulin spike) önler; nöronlara sürekli ve dengeli glikoz akışı sağlar.',
      brandInfo: '%100 çiğ, kavrulmamış, koruyucu ve ilave şeker içermeyen birinci sınıf organik yerel mahsul.'
    },
    water: {
      id: 'water',
      name: 'Oksijen Zengini Alkalin Smart Water (250ml)',
      category: 'Hücresel Hidrasyon & Baş Ağrısı Önleyici',
      badge: 'pH 8.5+ Electrolyte Boosted',
      icon: Droplets,
      color: 'from-emerald-400 to-[#0088FF]',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-400',
      bgGlow: 'bg-emerald-500/10',
      items: [
        { name: 'Çözünmüş Oksijenli Alkalin Su', detail: 'pH 8.5+ (Normal sudan 3x fazla oksijen)' },
        { name: 'Sodyum, Potasyum, Magnezyum İyonları', detail: 'Hızlı elektrolit dengesi' }
      ],
      science: 'Vücuttaki %1.5’lik hafif hidrasyon kaybı bile dikkat süresinde %12 düşüşe yol açar. Oksijenli alkalin su kan-beyin bariyerinde hızlı emilim sağlar.',
      brandInfo: 'BPA içermeyen cam ve geri dönüştürülebilir mat şişelerde günlük soğuk taze dolum.'
    },
    oil: {
      id: 'oil',
      name: 'Nane & Biberiye Aromaterapi Roll-On (5ml)',
      category: 'Anlık Odak Sinyali & Zihinsel Ferahlık',
      badge: '%100 Saf Uçucu Yağ',
      icon: Sparkles,
      color: 'from-purple-400 to-[#0088FF]',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-400',
      bgGlow: 'bg-purple-500/10',
      items: [
        { name: 'Tıbbi Biberiye (Rosmarinus Officinalis)', detail: 'Asetilkolin seviyesini uyarır' },
        { name: 'İngiliz Nanesi (Mentha Piperita)', detail: 'Koku duyusu üzerinden anlık uyanıklık' }
      ],
      science: 'Biberiye yağının koklanması ve şakaklara uygulanması, beyinde hafıza bileşeni asetilkolinin parçalanmasını engeller.',
      brandInfo: 'Art de Huile soğuk sıkım %100 uçucu esansiyel terapi yağı.'
    },
    qr: {
      id: 'qr',
      name: 'Neuro-Routine Akıllı QR Kartı',
      category: 'Dijital Micro-Breathing & Alpha Wave Audio',
      badge: 'İnteraktif Çalışan Portalı',
      icon: QrCode,
      color: 'from-cyan-400 to-emerald-400',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-400',
      bgGlow: 'bg-cyan-500/10',
      items: [
        { name: '2 Dakikalık Box Breathing Kılavuzu', detail: 'Parasempatik sinir sistemi aktivasyonu' },
        { name: 'Deep Focus Alpha Binaural Sound Track', detail: '10Hz - 14Hz zihin dalga senkronizasyonu' },
        { name: 'Günün Biohack İpucu & Mod Takibi', detail: 'Kişisel verimlilik günlüğü' }
      ],
      science: 'Vagus sinirini uyararak toplantı ve yoğun kodlama öncesi nabzı düşürür, kortizol seviyesini dakikalar içinde dengeler.',
      brandInfo: 'Her tepsiye özel basılmış şifreli QR kod ile tüm çalışanların anında erişimi.'
    }
  };

  const active = compartments[activeCompartment];

  return (
    <section id="kutu-anatomisi" className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0088FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Ergonomik Bento Tepsi Anatomisi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Her Gün Masanızda Açılan <br className="hidden sm:inline" />
            <span className="text-gradient-blue">Biyo-Hacking Kutusu</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Kendi üretimimiz değil! Tüm dünyada güvenilirliği kanıtlanmış Solgar, Thorne ve Ocean gibi lider markaların kapsülleri ile hazırlanmış mükemmel günlük dozlama.
          </p>
        </div>

        {/* Interactive Tray Visual & Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Tray Replica matching User Photo */}
          <div className="lg:col-span-6 bg-[#0B101E] border border-slate-800/80 rounded-3xl p-6 shadow-2xl relative">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">
              <span>Bölmelere Tıklayın veya Üzerine Gelin</span>
              <span className="text-blue-400 text-[11px] bg-blue-950 px-2 py-0.5 rounded font-mono">Canlı Seçim</span>
            </div>

            {/* Tray Mold Container */}
            <div className="bg-[#12192C] p-6 rounded-2xl border border-slate-700/60 space-y-4 shadow-inner">
              
              {/* Top Compartments */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Compartment: Nootropics */}
                <div 
                  onClick={() => setActiveCompartment('nootropics')}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                    activeCompartment === 'nootropics'
                      ? 'border-[#0088FF] bg-[#0088FF]/15 shadow-[0_0_20px_rgba(0,136,255,0.3)] scale-[1.02]'
                      : 'border-slate-800 bg-[#0B101D] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0088FF]">Bölme 1</span>
                    <Zap className="w-4 h-4 text-[#0088FF]" />
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Lion’s Mane & Rhodiola</div>
                  <div className="text-[11px] text-slate-400">Nootropik Odak</div>
                  <div className="mt-2 text-[10px] text-blue-300 font-mono">Solgar / Venatura</div>
                </div>

                {/* Compartment: Omega 3 & B12 */}
                <div 
                  onClick={() => setActiveCompartment('energy')}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                    activeCompartment === 'energy'
                      ? 'border-cyan-400 bg-cyan-500/15 shadow-[0_0_20px_rgba(0,242,254,0.3)] scale-[1.02]'
                      : 'border-slate-800 bg-[#0B101D] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">Bölme 2</span>
                    <HeartPulse className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Omega-3 DHA + B12</div>
                  <div className="text-[11px] text-slate-400">Hücresel Enerji & ATP</div>
                  <div className="mt-2 text-[10px] text-cyan-300 font-mono">Ocean Ultra Purified</div>
                </div>

              </div>

              {/* Middle Compartment: Bio Snacks */}
              <div 
                onClick={() => setActiveCompartment('snacks')}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                  activeCompartment === 'snacks'
                    ? 'border-amber-400 bg-amber-500/15 shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-[1.02]'
                    : 'border-slate-800 bg-[#0B101D] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">Bölme 3</span>
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm font-bold text-white mt-1">Çiğ Datça Bademi, Medjoul Hurması & Yaban Mersini</div>
                <div className="text-[11px] text-slate-400">Temiz Beyin Glikozu & Antioksidan</div>
              </div>

              {/* Bottom Compartments */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Compartment: Essential Oil Roll-On */}
                <div 
                  onClick={() => setActiveCompartment('oil')}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                    activeCompartment === 'oil'
                      ? 'border-purple-400 bg-purple-500/15 shadow-[0_0_20px_rgba(168,85,247,0.3)] scale-[1.02]'
                      : 'border-slate-800 bg-[#0B101D] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-400">Bölme 4</span>
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Essential Oil Roll-On</div>
                  <div className="text-[11px] text-slate-400">Nane & Biberiye Yağı 5ml</div>
                </div>

                {/* Compartment: Oxygen Smart Water */}
                <div 
                  onClick={() => setActiveCompartment('water')}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                    activeCompartment === 'water'
                      ? 'border-emerald-400 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-[1.02]'
                      : 'border-slate-800 bg-[#0B101D] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">Bölme 5</span>
                    <Droplets className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-sm font-bold text-white mt-1">Oksijenli Smart Water</div>
                  <div className="text-[11px] text-slate-400">pH 8.5+ (250ml Şişe)</div>
                </div>

              </div>

              {/* Center QR Card Section matching photo */}
              <div 
                onClick={() => setActiveCompartment('qr')}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer text-center relative ${
                  activeCompartment === 'qr'
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_25px_rgba(0,242,254,0.3)] scale-[1.02]'
                    : 'border-blue-900/50 bg-[#0B101D] hover:border-blue-700'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <QrCode className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-extrabold tracking-wider text-white">HEALTHY ESSENTIALS QR KODU</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">2 Dk Nefes Egzersizi & Alpha Dalga Müziği Portalına Giriş</div>
              </div>

            </div>

          </div>

          {/* Right Column: Detailed Breakdown Panel */}
          <div className="lg:col-span-6">
            
            <div className={`p-8 rounded-3xl glass-panel border ${active.borderColor} transition-all duration-300 relative overflow-hidden`}>
              
              {/* Top Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${active.bgGlow} ${active.textColor} border ${active.borderColor}`}>
                  {active.category}
                </span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full">
                  {active.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {active.name}
              </h3>

              {/* Items List */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">İçerik Bileşenleri:</div>
                {active.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#060913]/60 p-3 rounded-xl border border-slate-800/60">
                    <CheckCircle2 className={`w-5 h-5 ${active.textColor} shrink-0 mt-0.5`} />
                    <div>
                      <div className="text-sm font-bold text-white">{item.name}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Science Breakdown */}
              <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-900/40 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Biyolojik Etki Mekanizması:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {active.science}
                </p>
              </div>

              {/* Brand Quality Guarantee */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <Award className="w-5 h-5 text-yellow-400 shrink-0" />
                <span><strong>Kalite Standardı:</strong> {active.brandInfo}</span>
              </div>

              {/* Interactive QR Button if QR tab active */}
              {activeCompartment === 'qr' && (
                <button
                  onClick={onOpenQrModal}
                  className="mt-6 w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-[#0088FF] shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Sitede QR Nefes Ritüelini Test Et</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
