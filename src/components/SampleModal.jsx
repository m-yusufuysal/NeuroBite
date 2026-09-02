import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, Building2, User, Mail, MapPin, Users, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SampleModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    role: '',
    email: '',
    phone: '',
    employeeCount: '10-25',
    city: 'New York / HQ',
    dietary: []
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#0088FF', '#00F2FE', '#10B981', '#F59E0B']
    });
  };

  const toggleDietary = (item) => {
    setFormData(prev => ({
      ...prev,
      dietary: prev.dietary.includes(item)
        ? prev.dietary.filter(d => d !== item)
        : [...prev.dietary, item]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl glass-panel-glow bg-[#0B1020] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,136,255,0.3)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-blue-950 border border-blue-800 text-[#0088FF]">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Request Free Corporate Sample Box
                </h3>
                <p className="text-xs text-slate-400">
                  Exclusive 1-week trial bento kit delivered to companies with 10+ employees.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Company Name *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-[#0088FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Contact Name & Title *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe (Head of People)"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-[#0088FF] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Corporate Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-[#0088FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-[#0088FF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Team Headcount</label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-[#0088FF] focus:outline-none"
                  >
                    <option value="10-25">10 - 25 Staff</option>
                    <option value="25-50">25 - 50 Staff</option>
                    <option value="50-100">50 - 100 Staff</option>
                    <option value="100+">100+ Enterprise / Global</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Delivery City / HQ</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-[#0088FF] focus:outline-none"
                  >
                    <option value="Istanbul">Istanbul (All Districts)</option>
                    <option value="London">London / UK</option>
                    <option value="New York">New York / USA</option>
                    <option value="Berlin">Berlin / EU</option>
                    <option value="Dubai">Dubai / UAE</option>
                    <option value="Other">Other Metro Locations</option>
                  </select>
                </div>
              </div>

              {/* Dietary check badges */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2">Dietary & Allergen Preferences:</label>
                <div className="flex flex-wrap gap-2">
                  {['Vegetarian / Vegan', 'Gluten-Free', 'Caffeine-Free', 'Nut-Free'].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => toggleDietary(item)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        formData.dietary.includes(item)
                          ? 'bg-[#0088FF] text-white border-cyan-400'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 rounded-xl font-bold text-xs tracking-wide text-white bg-gradient-to-r from-[#0088FF] via-blue-600 to-cyan-500 hover:from-blue-600 hover:to-[#0088FF] shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Free Sample Request</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Sample Request Confirmed!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Dear <strong>{formData.fullName}</strong>, your 1-week NeuroBite trial kit for <strong>{formData.companyName}</strong> is being prepared.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto font-mono">
              Our corporate specialist will reach out to <strong>{formData.email}</strong> within 24 hours.
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl font-bold text-xs text-white bg-[#0088FF] hover:bg-blue-600 shadow-lg cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
