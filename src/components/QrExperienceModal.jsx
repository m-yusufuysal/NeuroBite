import React, { useState, useEffect } from 'react';
import { X, QrCode, Play, Pause, RefreshCw, Volume2, Sparkles, Brain, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QrExperienceModal = ({ isOpen, onClose }) => {
  const [breathState, setBreathState] = useState('Inhale'); 
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const [activeSound, setActiveSound] = useState('alpha'); 
  const [completedSessions, setCompletedSessions] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setBreathState((currentPhase) => {
              if (currentPhase === 'Inhale (4s)') return 'Hold (4s)';
              if (currentPhase === 'Hold (4s)') return 'Exhale (4s)';
              if (currentPhase === 'Exhale (4s)') return 'Pause & Rest (4s)';
              
              setCompletedSessions((c) => c + 1);
              return 'Inhale (4s)';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg glass-panel-glow bg-[#0B1020] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,242,254,0.2)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-800 text-cyan-400">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>HEALTHY ESSENTIALS QR PORTAL</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded font-mono">LIVE DEMO</span>
            </h3>
            <p className="text-xs text-slate-400">The daily bio-routine accessed via the QR card on every tray</p>
          </div>
        </div>

        {/* Interactive Box Breathing Wheel */}
        <div className="bg-[#060913] p-6 rounded-2xl border border-slate-800 text-center space-y-4 mb-6">
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            2-Min Parasympathetic Box Breathing Guide
          </div>

          {/* Animated Circle indicator */}
          <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
            <div className={`absolute inset-0 rounded-full border-4 transition-all duration-1000 ${
              isRunning ? 'border-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.5)] scale-110' : 'border-slate-800'
            }`} />
            
            <div className="text-center z-10 space-y-1">
              <div className="text-3xl font-black text-white font-mono">{secondsLeft}s</div>
              <div className="text-xs font-bold text-cyan-300">{isRunning ? breathState : 'Ready to begin?'}</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                if (!isRunning) {
                  setIsRunning(true);
                  setBreathState('Inhale (4s)');
                  setSecondsLeft(4);
                } else {
                  setIsRunning(false);
                }
              }}
              className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0088FF] to-cyan-500 hover:from-blue-600 hover:to-[#0088FF] shadow-lg flex items-center gap-2 cursor-pointer"
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRunning ? 'Pause' : 'Start Breathing Guide'}</span>
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setBreathState('Ready');
                setSecondsLeft(4);
              }}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {completedSessions > 0 && (
            <div className="text-xs text-emerald-400 font-semibold animate-in fade-in">
              🎉 Great job! {completedSessions} cycle(s) completed. Heart rate & cortisol normalized.
            </div>
          )}
        </div>

        {/* Audio Wave Sound Simulator */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#0088FF]" />
              <span>Binaural Focus Audio (Alpha Waves)</span>
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">10Hz - 14Hz</span>
          </div>

          {/* Animated equalizer bars */}
          <div className="flex items-end justify-center gap-1.5 h-10 py-1 bg-[#060913] rounded-lg border border-slate-800">
            {[40, 75, 55, 90, 65, 80, 45, 95, 60, 85, 50, 70].map((h, i) => (
              <div
                key={i}
                style={{ height: isRunning ? `${h}%` : '20%' }}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  isRunning ? 'bg-[#0088FF] animate-pulse' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <button
              onClick={() => setActiveSound('alpha')}
              className={`py-1.5 px-3 rounded-lg font-bold border transition-all ${
                activeSound === 'alpha'
                  ? 'bg-blue-950 text-blue-300 border-blue-700'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              10Hz Deep Focus (Alpha)
            </button>
            <button
              onClick={() => setActiveSound('beta')}
              className={`py-1.5 px-3 rounded-lg font-bold border transition-all ${
                activeSound === 'beta'
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-700'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              14Hz Beta Clarity Wave
            </button>
          </div>
        </div>

        {/* Today's Biohack Tip */}
        <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/60 flex items-start gap-3 text-xs text-slate-300">
          <Brain className="w-5 h-5 text-[#0088FF] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block">Today's Neuro-Tip:</span>
            Exposing eyes to natural sunlight within 30 minutes of waking optimizes circadian rhythms and melatonin timing for superior sleep quality.
          </div>
        </div>

      </div>

    </div>
  );
};
