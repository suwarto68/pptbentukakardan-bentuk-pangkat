import React from 'react';
import { Sparkles, BookOpen, GraduationCap, School, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface SlideProps {
  onNext?: () => void;
}

export const Slide1Cover: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 text-white select-none">
      {/* Background Math Geometric SVGs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Decorative floating formula curves */}
          <circle cx="85%" cy="25%" r="180" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="15%" cy="80%" r="140" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Floating Math Symbols */}
      <div className="absolute top-12 right-16 hidden lg:flex flex-col items-end gap-3 pointer-events-none opacity-40">
        <span className="font-mono text-5xl font-extrabold text-indigo-400/80 drop-shadow-lg">aⁿ = a×a×...×a</span>
        <span className="font-mono text-4xl font-extrabold text-emerald-400/80 drop-shadow-lg">√a = a<sup>1/2</sup></span>
        <span className="font-mono text-3xl font-extrabold text-cyan-400/80 drop-shadow-lg">aᵐ × aⁿ = aᵐ⁺ⁿ</span>
      </div>

      {/* Top Header Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-indigo-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <School className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-base tracking-wide text-indigo-200">SMPN 1 WANARAYA</h3>
            <p className="text-xs text-slate-400">Tahun Ajaran 2026 • Kurikulum Merdeka</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-300 backdrop-blur-sm">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>Matematika SMP Kelas VIII • Fase D</span>
        </div>
      </div>

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-4xl my-auto py-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Modul Pembelajaran Interaktif</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-4">
          BILANGAN BERPANGKAT <br />
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            & BENTUK AKAR
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed mb-6">
          Memahami Pola, Sifat-Sifat Operasi, dan Penerapannya dalam Memecahkan Masalah Nyata Sehari-hari.
        </p>

        {/* Visual Math Pills */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {['Perkalian Berulang', 'Sifat Pangkat aᵐ⁺ⁿ', 'Pangkat 0 & Negatif', 'Bentuk Akar √a', 'Penyederhanaan', 'Masalah HOTS'].map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 pt-4 border-t border-indigo-500/20 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 shadow">
            SW
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Guru Pengampu</p>
            <p className="font-bold text-white text-base">Suwarto, S.Pd.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {onNext && (
            <button
              onClick={() => {
                soundFx.playClick();
                onNext();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Mulai Belajar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
