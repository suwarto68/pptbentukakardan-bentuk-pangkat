import React, { useState } from 'react';
import { X, CheckCircle, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide16MultiplyRoots: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Soal Perkalian',
      math: '√3 × √12',
      desc: 'Dua bentuk akar yang dikalikan bersama.',
    },
    {
      title: 'Satukan Dalam Satu Tanda Akar',
      math: '√(3 × 12)',
      desc: 'Gunakan sifat perkalian bentuk akar: √a × √b = √(a × b).',
    },
    {
      title: 'Hitung Hasil Perkalian di Dalam Akar',
      math: '√36',
      desc: 'Kalikan angka di dalam akar: 3 × 12 = 36.',
    },
    {
      title: 'Tarik Nilai Akarnya',
      math: '6',
      desc: 'Karena 36 adalah kuadrat sempurna (6² = 36), maka √36 = 6.',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <X className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Operasi Bentuk Akar #3</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Perkalian Bentuk Akar</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 font-bold">
          √a × √b = √(a × b)
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: General Formula */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 block">
              Sifat Pokok Perkalian
            </span>

            <div className="p-5 rounded-xl bg-slate-950 border border-indigo-500/40 text-center my-3 font-mono">
              <div className="text-3xl md:text-4xl font-black text-white">
                <span className="text-emerald-400">√a</span>
                <span className="text-slate-400 mx-2">×</span>
                <span className="text-cyan-400">√b</span>
                <span className="text-slate-400 mx-2">=</span>
                <span className="text-amber-400">√(a × b)</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">Syarat: a ≥ 0 dan b ≥ 0</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 mt-4">
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Berbeda dengan penjumlahan, pada perkalian bentuk akar <strong>tidak harus sejenis</strong>!</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jika ada koefisien di luar: <strong>p√a × q√b = (p × q)√(a × b)</strong>.</span>
              </p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300 font-mono">
            Contoh berkoefisien: 2√3 × 5√2 = (2×5)√(3×2) = 10√6
          </div>
        </div>

        {/* Right: Step-by-Step Animation for √3 × √12 */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Animasi Perhitungan: √3 × √12
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveStep(0);
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Stepper Cards */}
            <div className="space-y-2.5 my-2">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep >= idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveStep(idx);
                    }}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-950/70 border-indigo-500 shadow-md scale-[1.01]'
                        : isPassed
                        ? 'bg-slate-900/80 border-slate-700/80 text-slate-300'
                        : 'bg-slate-900/40 border-slate-800/60 opacity-30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-300">
                        Langkah {idx + 1}: {step.title}
                      </span>
                      <span className="font-mono text-base md:text-lg font-black text-amber-300 bg-slate-950 px-3 py-0.5 rounded border border-slate-800">
                        {step.math}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-slate-300 mt-2 pt-1.5 border-t border-indigo-500/30 animate-fadeIn">
                        {step.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stepper Controller */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {activeStep === steps.length - 1 ? 'Hasil akhir rasional diperoleh: 6!' : `Langkah ${activeStep + 1} dari 4`}
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer shadow"
            >
              <span>{activeStep < steps.length - 1 ? 'Langkah Berikutnya' : 'Ulangi Animasi'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Perkalian bentuk akar: kalikan bilangan di dalam akar bersama-sama.</span>
        <span className="text-indigo-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
