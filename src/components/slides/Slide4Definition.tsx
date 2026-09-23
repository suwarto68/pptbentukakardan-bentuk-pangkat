import React, { useState } from 'react';
import { BookOpen, Sparkles, Plus, Minus, ArrowRight, Check } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide4Definition: React.FC = () => {
  const [base, setBase] = useState<number>(2);
  const [exp, setExp] = useState<number>(5);

  const calculate = Math.pow(base, exp);
  const factors = Array.from({ length: exp }, () => base);

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Konsep Dasar Aljabar</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Pengertian Bilangan Berpangkat</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300">
          aⁿ = Perkalian Berulang
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: General Formula & Anatomy */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Bentuk Umum Matematis</span>
            
            {/* Big Math Formula */}
            <div className="flex items-baseline gap-2 font-mono text-4xl md:text-5xl font-black text-white my-3">
              <span className="text-emerald-400">a</span>
              <sup className="text-amber-400 text-2xl md:text-3xl -top-4">n</sup>
              <span className="text-slate-400 font-light mx-2">=</span>
              <span className="text-slate-200 text-2xl md:text-3xl font-normal">
                a × a × a × ... × a
              </span>
            </div>

            <div className="mt-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono">
              Sebanyak <strong className="text-amber-400">n</strong> faktor perkalian
            </div>
          </div>

          {/* Anatomy Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold font-mono flex items-center justify-center text-sm">
                  a
                </span>
                <h4 className="font-bold text-white text-sm">Bilangan Pokok</h4>
              </div>
              <p className="text-xs text-slate-300">
                Disebut juga <strong className="text-emerald-300">basis</strong>. Angka yang dikalikan berulang kali.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-bold font-mono flex items-center justify-center text-sm">
                  n
                </span>
                <h4 className="font-bold text-white text-sm">Pangkat</h4>
              </div>
              <p className="text-xs text-slate-300">
                Disebut juga <strong className="text-amber-300">eksponen</strong>. Menunjukkan banyaknya faktor perkalian.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Interactive Multiplication Exploder */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Simulator Interaktif Perkalian Berulang
              </span>
            </div>

            {/* Adjuster controls for base & exp */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Basis (a):</span>
                  <span className="font-mono font-bold text-emerald-400 text-lg">{base}</span>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      if (base > 2) setBase(base - 1);
                    }}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      if (base < 6) setBase(base + 1);
                    }}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Pangkat (n):</span>
                  <span className="font-mono font-bold text-amber-400 text-lg">{exp}</span>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      if (exp > 1) setExp(exp - 1);
                    }}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      if (exp < 6) setExp(exp + 1);
                    }}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Visual breakdown box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <div className="text-3xl font-mono font-black text-white mb-2">
                <span className="text-emerald-400">{base}</span>
                <sup className="text-amber-400 text-xl">{exp}</sup>
              </div>

              {/* Factors pill line */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 my-3">
                {factors.map((f, i) => (
                  <React.Fragment key={i}>
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold flex items-center justify-center text-sm animate-scaleIn">
                      {f}
                    </span>
                    {i < factors.length - 1 && <span className="text-slate-400 font-bold">×</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Total Calculation */}
              <div className="w-full mt-2 pt-3 border-t border-slate-800 flex items-center justify-between text-sm">
                <span className="text-slate-400">Hasil Perhitungan:</span>
                <span className="font-mono text-xl md:text-2xl font-black text-amber-400">
                  = {calculate}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/90 text-xs text-slate-300 border border-slate-800 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Contoh Buku Siswa: 2⁵ = 2 × 2 × 2 × 2 × 2 = 32</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Perpangkatan menyederhanakan penulisan operasi perkalian berulang.</span>
        <span className="text-indigo-400 font-mono font-semibold">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
