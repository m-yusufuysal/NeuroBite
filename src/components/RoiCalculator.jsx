import React, { useState } from 'react';
import { Calculator, Users, Clock, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const RoiCalculator = ({ onOpenSampleModal }) => {
  const [employeeCount, setEmployeeCount] = useState(15);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  // Calculations
  // Estimated daily focus gain per employee: 1.2 hours
  const dailyFocusGainPerPerson = 1.2;
  const weeklyFocusHoursSaved = Math.round(employeeCount * dailyFocusGainPerPerson * daysPerWeek);
  const monthlyFocusHoursSaved = Math.round(weeklyFocusHoursSaved * 4.2);

  // Estimated monetary value of saved time (Average tech/corporate hourly rate ~ ₺450)
  const averageHourlyCost = 450;
  const monthlyMonetaryValue = Math.round(monthlyFocusHoursSaved * averageHourlyCost);
  
  // Estimated NeuroBite Cost per employee per month (~ ₺1,800 for 5 days)
  const monthlyNeuroBiteCostPerPerson = daysPerWeek === 5 ? 1800 : 1200;
  const totalMonthlyCost = employeeCount * monthlyNeuroBiteCostPerPerson;
  const netMonthlyGain = monthlyMonetaryValue - totalMonthlyCost;
  const roiRatio = (monthlyMonetaryValue / Math.max(totalMonthlyCost, 1)).toFixed(1);

  return (
    <section id="roi-hesaplayici" className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0088FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-[#0088FF] text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>İK ve Finans Yöneticileri İçin Canlı Simülatör</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            NeuroBite Şirketinize <br className="hidden sm:inline" />
            <span className="text-gradient-blue">Ne Kadar Kazandırır?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Çalışan sayısı ve haftalık teslimat gününüzü kaydırın; şirketinizin kazanacağı ekstra odak saatini ve tahmini maliyet getirisini anında görün.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto glass-panel-glow p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-[#0B1020]/90 backdrop-blur-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Controls & Sliders */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Employee Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#0088FF]" />
                    <span>Şirket / Ekip Çalışan Sayısı:</span>
                  </label>
                  <span className="text-2xl font-black text-[#0088FF] bg-blue-950 px-4 py-1 rounded-xl border border-blue-800">
                    {employeeCount} Kişi
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0088FF]"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>5 Çalışan</span>
                  <span>50 Kişi</span>
                  <span>100 Kişi</span>
                  <span>250+ Kişi</span>
                </div>
              </div>

              {/* Days Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Haftalık Teslimat Sıklığı:</span>
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDaysPerWeek(3)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      daysPerWeek === 3
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Haftada 3 Gün (Yoğun Günler)
                  </button>

                  <button
                    onClick={() => setDaysPerWeek(5)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      daysPerWeek === 5
                        ? 'bg-[#0088FF] text-white border-cyan-400 shadow-lg'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Haftada 5 Gün (Tam Kurumsal)
                  </button>
                </div>
              </div>

              {/* Micro guarantee badge */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hesaplamalar 1.2 saat/gün ortalama derin odak artışına dayanır.</span>
              </div>

            </div>

            {/* Right Side: Calculated ROI Display */}
            <div className="lg:col-span-6 bg-[#060A14] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              
              <div className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 flex items-center justify-between">
                <span>Tahmini Aylık Performans Getirisi</span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                  {roiRatio}x ROI Oranı
                </span>
              </div>

              {/* Saved Focus Hours Big Metric */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-900/60">
                <div className="text-xs text-slate-400 mb-1">Aylık Kazanılan Ekstra Odak Süresi</div>
                <div className="text-4xl font-black text-white flex items-baseline gap-2">
                  <span>+{monthlyFocusHoursSaved}</span>
                  <span className="text-lg font-normal text-blue-400">Saat / Ay</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  (Ekibiniz yılda yaklaşık <strong>{monthlyFocusHoursSaved * 12} saat</strong> daha az zihinsel sis yaşar)
                </div>
              </div>

              {/* Financial Value Metric */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Kazanılan Zaman Değeri</div>
                  <div className="text-xl font-extrabold text-emerald-400 mt-1">
                    ₺{monthlyMonetaryValue.toLocaleString('tr-TR')}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Net Aylık Şirket Karı</div>
                  <div className="text-xl font-extrabold text-cyan-400 mt-1">
                    ₺{netMonthlyGain.toLocaleString('tr-TR')}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenSampleModal}
                className="w-full py-4 rounded-xl font-bold text-xs tracking-wide text-white bg-gradient-to-r from-[#0088FF] to-cyan-500 hover:from-blue-600 hover:to-[#0088FF] shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{employeeCount} Kişilik Şirket İçin Numune İste</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
