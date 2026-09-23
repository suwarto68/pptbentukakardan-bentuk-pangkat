import React, { useState } from 'react';
import { TrendingDown, ArrowDown, CheckCircle, RefreshCw } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide10NegativePower: React.FC = () => {
  const [highlightStep, setHighlightStep] = useState<number>(6); // index of 2^-3

  const ladder = [
    { exp: '2³', value: '8', note: '2 × 2 × 2', type: 'pos' },
    { exp: '2²', value: '4', note: '8 ÷ 2 = 4', type: 'pos' },
    { exp: '2¹', value: '2', note: '4 ÷ 2 = 2', type: 'pos' },
    { exp: '2⁰', value: '1', note: '2 ÷ 2 = 1', type: 'zero' },
    { exp: '2⁻¹', value: '1/2', note: '1 ÷ 2 = 1/2 = 0.5', type: 'neg' },
    { exp: '2⁻²', value: '1/4', note: '1/2 ÷ 2 = 1/2² = 1/4', type: 'neg' },
    { exp: '2⁻³', value: '1/8', note: '1/4 ÷ 2 = 1/2³ = 1/8', type: 'neg' },
  ];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
            <TrendingDown className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Sifat Khusus Eksponen #5</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Bilangan Berpangkat Negatif</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-rose-950/60 border border-rose-500/30 text-xs font-mono text-rose-300 font-bold">
          a⁻ⁿ = 1 / aⁿ
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: General Formula & Meaning */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-2 block">
              Definisi Invers (Kebalikan)
            </span>

            <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/40 text-center my-3">
              <div className="flex items-center justify-center gap-3 font-mono text-3xl md:text-4xl font-black text-white">
                <div>
                  <span className="text-emerald-400">a</span>
                  <sup className="text-rose-400 text-2xl">−n</sup>
                </div>
                <span className="text-slate-400">=</span>
                <div className="flex flex-col items-center">
                  <span className="text-amber-400 text-2xl">1</span>
                  <div className="w-12 h-0.5 bg-slate-500 my-1"></div>
                  <div>
                    <span className="text-emerald-400">a</span>
                    <sup className="text-indigo-400 text-2xl">n</sup>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 mt-4">
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Pangkat negatif <strong>bukan menghasilkan bilangan negatif</strong>!</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Pangkat negatif berarti <strong>kebalikan pecahan</strong> (invers perkalian): 1 dibagi dengan aⁿ.</span>
              </p>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono">
            <span className="text-slate-400 block text-[11px]">Contoh Utama:</span>
            <span className="text-amber-300 font-bold text-sm">2⁻³ = 1 / 2³ = 1 / 8</span>
          </div>
        </div>

        {/* Right: Visual Pattern Ladder */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pola Tangga Pembagian (Setiap Turun 1 Tingkat, Bagi 2)
              </span>
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                <ArrowDown className="w-3.5 h-3.5" /> ÷ 2 terus menerus
              </span>
            </div>

            {/* Ladder list */}
            <div className="space-y-1.5">
              {ladder.map((step, idx) => {
                const isSelected = highlightStep === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      setHighlightStep(idx);
                    }}
                    className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs font-mono ${
                      isSelected
                        ? 'bg-indigo-950/80 border-indigo-500 shadow-md scale-[1.01]'
                        : 'bg-slate-900/70 border-slate-800/80 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-14 text-center font-bold py-0.5 rounded ${
                          step.type === 'pos'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                            : step.type === 'zero'
                            ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                            : 'bg-rose-950 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {step.exp}
                      </span>
                      <span className="text-slate-400">=</span>
                      <span className="font-bold text-white text-sm">{step.value}</span>
                    </div>

                    <span className="text-slate-400 text-[11px] font-sans">
                      {step.note}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <span>
              Perhatikan: Saat pangkat turun melewati 0 menjadi negatif, hasilnya menjadi <strong>pecahan 1/...</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Pangkat negatif a⁻ⁿ sama dengan 1 / aⁿ.</span>
        <span className="text-rose-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
