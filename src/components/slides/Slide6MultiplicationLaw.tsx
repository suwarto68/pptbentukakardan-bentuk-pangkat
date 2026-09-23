import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide6MultiplicationLaw: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: '1. Soal Awal',
      expression: '2³ × 2⁴',
      detail: 'Perkalian dua bilangan berpangkat dengan bilangan pokok (basis) sama yaitu 2.',
    },
    {
      title: '2. Jabarkan Masing-Masing Faktor',
      expression: '(2 × 2 × 2) × (2 × 2 × 2 × 2)',
      detail: '2³ memiliki 3 faktor, dan 2⁴ memiliki 4 faktor angka 2.',
    },
    {
      title: '3. Gabungkan Seluruh Faktor',
      expression: '2 × 2 × 2 × 2 × 2 × 2 × 2',
      detail: 'Total ada (3 + 4) = 7 faktor angka 2 dikalikan bersama.',
    },
    {
      title: '4. Kesimpulan Rumus',
      expression: '2³⁺⁴ = 2⁷ = 128',
      detail: 'Secara umum berlaku: aᵐ × aⁿ = aᵐ⁺ⁿ (Pangkat cukup dijumlahkan!)',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Sifat Operasi Eksponen #1</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Sifat Perkalian Bilangan Berpangkat</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-bold">
          aᵐ × aⁿ = aᵐ⁺ⁿ
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: General Formula Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 block">
              Rumus Utama
            </span>
            <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/40 text-center my-3">
              <div className="text-3xl md:text-4xl font-mono font-black text-white">
                <span className="text-emerald-400">a</span>
                <sup className="text-amber-400 text-2xl">m</sup>
                <span className="text-slate-400 mx-2">×</span>
                <span className="text-emerald-400">a</span>
                <sup className="text-cyan-400 text-2xl">n</sup>
                <span className="text-slate-400 mx-2">=</span>
                <span className="text-emerald-400">a</span>
                <sup className="text-indigo-400 text-2xl">m+n</sup>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed mt-4">
              <h4 className="font-bold text-white mb-1 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Syarat Wajib:
              </h4>
              Bilangan pokok (basis) <strong className="text-emerald-300">harus sama persis</strong>. Jika basis berbeda (misal 2³ × 3²), sifat ini tidak dapat langsung digunakan.
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200">
            <strong>Contoh Cepat:</strong> 5² × 5⁴ = 5²⁺⁴ = 5⁶
          </div>
        </div>

        {/* Right: Step-by-step Interactive Animated Proof */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pembuktian Langkah Demi Langkah: 2³ × 2⁴
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveStep(0);
                }}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Stepper Cards */}
            <div className="space-y-2.5">
              {steps.map((s, idx) => {
                const isPassed = activeStep >= idx;
                const isCurrent = activeStep === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveStep(idx);
                    }}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-950/60 border-indigo-500 shadow-md'
                        : isPassed
                        ? 'bg-slate-900/80 border-slate-700/80 text-slate-300'
                        : 'bg-slate-900/40 border-slate-800/60 opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-300">{s.title}</span>
                      <span className="font-mono text-sm md:text-base font-bold text-amber-300 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                        {s.expression}
                      </span>
                    </div>
                    {isCurrent && (
                      <p className="text-xs text-slate-300 mt-2 pt-1.5 border-t border-indigo-500/30 animate-fadeIn">
                        {s.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Step Stepper Controller */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Langkah {activeStep + 1} dari {steps.length}
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer shadow"
            >
              <span>{activeStep < steps.length - 1 ? 'Langkah Berikutnya' : 'Ulangi Dari Awal'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Perkalian basis sama → Pangkat dijumlahkan.</span>
        <span className="text-indigo-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
