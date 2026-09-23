import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide13PowerRootRelation: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases = [
    {
      title: 'Akar Kuadrat',
      radical: '√a',
      index: 2,
      power: 1,
      fractional: 'a^(1/2)',
      example: '√9 = 9^(1/2) = 3',
      detail: 'Jika indeks akar tidak ditulis, nilainya adalah 2 (akar kuadrat).',
    },
    {
      title: 'Akar Pangkat Tiga (Kubik)',
      radical: '∛a',
      index: 3,
      power: 1,
      fractional: 'a^(1/3)',
      example: '∛8 = 8^(1/3) = 2',
      detail: 'Angka 3 pada indeks akar menjadi penyebut pada pangkat pecahan.',
    },
    {
      title: 'Akar Pangkat Lima dari a²',
      radical: '⁵√(a²)',
      index: 5,
      power: 2,
      fractional: 'a^(2/5)',
      example: '⁵√(32²) = 32^(2/5) = (2⁵)^(2/5) = 2² = 4',
      detail: 'Pangkat di dalam (2) jadi pembilang, indeks luar (5) jadi penyebut.',
    },
  ];

  const current = cases[selectedCase];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <ArrowLeftRight className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Jembatan Konseptual</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Hubungan Pangkat Pecahan & Bentuk Akar</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 font-bold">
          ⁿ√aᵐ = a^(m/n)
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: General Formula Diagram */}
        <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 block">
              Rumus Umum Konversi
            </span>

            {/* Visual Transformation Box */}
            <div className="p-5 rounded-xl bg-slate-950 border border-indigo-500/40 my-3 flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 font-mono text-3xl md:text-4xl font-black text-white">
                {/* Radical form */}
                <div className="flex items-center">
                  <sup className="text-rose-400 text-xl md:text-2xl mr-0.5">n</sup>
                  <span className="text-slate-300">√</span>
                  <span className="border-t-2 border-slate-300 pt-0.5">
                    <span className="text-emerald-400">a</span>
                    <sup className="text-amber-400 text-xl">m</sup>
                  </span>
                </div>

                <span className="text-indigo-400 text-2xl font-sans">⇄</span>

                {/* Fractional form */}
                <div className="flex items-baseline">
                  <span className="text-emerald-400">a</span>
                  <sup className="text-xl md:text-2xl -top-3">
                    <span className="text-amber-400">m</span>
                    <span className="text-slate-400">/</span>
                    <span className="text-rose-400">n</span>
                  </sup>
                </div>
              </div>

              {/* Color coded key */}
              <div className="grid grid-cols-2 gap-2 w-full mt-4 pt-3 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-amber-300">
                  <span className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span>
                  <span><strong>m</strong> = Pangkat dalam (Pembilang)</span>
                </div>
                <div className="flex items-center gap-1.5 text-rose-300">
                  <span className="w-3 h-3 rounded-full bg-rose-500/40 border border-rose-400"></span>
                  <span><strong>n</strong> = Indeks luar (Penyebut)</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bentuk akar pada dasarnya adalah <strong>bilangan berpangkat pecahan</strong>.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>√a = a¹ᐟ² (karena m = 1 dan n = 2).</span>
              </p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
            Kaidah cepat: "Di dalam jadi di atas, di luar jadi di bawah"
          </div>
        </div>

        {/* Right: Interactive Case Switcher */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
              Pilih Contoh Perubahan Bentuk:
            </span>

            {/* Switch buttons */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {cases.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCase(idx);
                  }}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    selectedCase === idx
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-850'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            {/* Selected Case Card */}
            <div className="p-5 rounded-xl bg-slate-900 border border-indigo-500/30 flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-mono font-black text-white mb-2">
                <span className="p-2 rounded bg-slate-950 border border-slate-800 text-emerald-400">
                  {current.radical}
                </span>
                <span className="text-slate-400">=</span>
                <span className="p-2 rounded bg-slate-950 border border-slate-800 text-amber-400">
                  {current.fractional}
                </span>
              </div>

              <p className="text-xs text-slate-300 my-2 text-center leading-relaxed">
                {current.detail}
              </p>

              {/* Concrete Example */}
              <div className="w-full mt-3 p-3 rounded-lg bg-slate-950 border border-emerald-500/30 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Contoh Konkret:</span>
                <span className="text-emerald-300 font-bold text-sm">{current.example}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Memahami ini mempermudah kita menghitung nilai seperti 8^(2/3) = (∛8)² = 2² = 4!</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Hubungan pangkat pecahan dan akar: ⁿ√aᵐ = a^(m/n).</span>
        <span className="text-indigo-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
