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
            <span>Şirket Boyutunuza Uygun Esnek Abonelikler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Kurumsal Performans <br className="hidden sm:inline" />
            <span className="text-gradient-blue">Abonelik Paketleri</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Taahhütsüz, istediğiniz zaman dondurulabilir veya güncellenebilir haftalık teslimat planları.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan 1: Starter */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                Haftada 3 Gün
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Neuro-Starter</h3>
              <p className="text-xs text-slate-400 mb-6">
                En yoğun Salı - Çarşamba - Perşembe iş günleri için ideal başlangıç paketi.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>Günlük Nootropik Kapsül (Lion’s Mane)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>Oksijenli Alkalin Smart Water (250ml)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>Bio-Snack Bölmesi (Badem & Hurma)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>QR Nefes & Odak Portal Erişimi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#0088FF] shrink-0" />
                  <span>Saat 08:30 Şirket Buzdolabı Teslimatı</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSampleModal}
              className="w-full py-3.5 rounded-xl font-bold text-xs text-slate-200 glass-panel hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
            >
              Starter Paketi İncele
            </button>
          </div>

          {/* Plan 2: Pro (POPULAR) */}
          <div className="glass-panel-glow p-8 rounded-3xl border border-blue-500/50 bg-[#0C1428]/95 flex flex-col justify-between relative shadow-[0_0_40px_rgba(0,136,255,0.2)]">
            
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0088FF] to-cyan-400 text-white font-extrabold text-[11px] tracking-wider uppercase shadow-lg">
              En Çok Tercih Edilen
            </div>

            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#0088FF] mb-2 pt-2">
                Haftada 5 Gün (Tam Destek)
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Neuro-Pro</h3>
              <p className="text-xs text-slate-300 mb-6">
                Pazartesi - Cuma tüm haftayı kapsayan tam zihinsel performans protokolü.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-200">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Tüm Starter Bileşenleri (5 Gün)</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Omega-3 DHA + CoQ10 & B12 Hücresel Desteği</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Art de Huile Aromaterapi Roll-On (Haftalık)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Çalışan Diyet Seçenekleri (Vegan/Glutensiz)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Aylık İK Verimlilik & Kullanım Raporu</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSampleModal}
              className="w-full py-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0088FF] to-cyan-500 hover:from-blue-600 hover:to-[#0088FF] shadow-[0_0_20px_rgba(0,136,255,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Pro Paket İçin Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Plan 3: Enterprise VIP */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-2">
                50+ Çalışan Kurumsal
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Neuro-VIP Enterprise</h3>
              <p className="text-xs text-slate-400 mb-6">
                Büyük ölçekli firmalar ve holdingler için özel marka entegrasyonu ve dozajlama.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Şirket Logonuzla Özel Baskılı Bento Tepsileri</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Doktor & Diyetisyen Denetimli Kişisel Ankete Göre Dozaj</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Özel VIP Soğuk Teslimat Ekibi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Özel İK Dashboard Entegrasyonu</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenSampleModal}
              className="w-full py-3.5 rounded-xl font-bold text-xs text-amber-300 glass-panel hover:bg-slate-800 border border-amber-900/50 transition-all cursor-pointer"
            >
              Kurumsal Görüşme Randevusu Al
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
