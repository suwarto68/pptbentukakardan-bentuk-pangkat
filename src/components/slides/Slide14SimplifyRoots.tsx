import React, { useState } from 'react';
import { Wand2, ChevronRight, RotateCcw, CheckCircle, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide14SimplifyRoots: React.FC = () => {
  const [selectedNum, setSelectedNum] = useState<number>(72);
  const [stepIndex, setStepIndex] = useState<number>(0);

  const problems: Record<number, {
    original: string;
    factor1: number;
    factor2: number;
    rootFactor1: number;
    result: string;
    note: string;
  }> = {
    72: {
      original: '√72',
      factor1: 36,
      factor2: 2,
      rootFactor1: 6,
      result: '6√2',
      note: '36 adalah bilangan kuadrat terbesar pemfaktor 72 (36 = 6²).',
    },
    50: {
      original: '√50',
      factor1: 25,
      factor2: 2,
      rootFactor1: 5,
      result: '5√2',
      note: '25 adalah bilangan kuadrat terbesar pemfaktor 50 (25 = 5²).',
    },
    48: {
      original: '√48',
      factor1: 16,
      factor2: 3,
      rootFactor1: 4,
      result: '4√3',
      note: '16 adalah bilangan kuadrat terbesar pemfaktor 48 (16 = 4²).',
    },
    108: {
      original: '√108',
      factor1: 36,
      factor2: 3,
      rootFactor1: 6,
      result: '6√3',
      note: '36 adalah bilangan kuadrat terbesar pemfaktor 108 (36 = 6²).',
    },
  };

  const cur = problems[selectedNum];

  const steps = [
    { title: 'Bentuk Asli', formula: cur.original, desc: 'Identifikasi bilangan di bawah tanda akar.' },
    {
      title: 'Faktorkan ke Kuadrat Sempurna',
      formula: `√(${cur.factor1} × ${cur.factor2})`,
      desc: `Pecah menjadi perkalian kuadrat sempurna (${cur.factor1}) dan sisa (${cur.factor2}).`,
    },
    {
      title: 'Pisahkan Tanda Akar',
      formula: `√${cur.factor1} × √${cur.factor2}`,
      desc: 'Gunakan sifat perkalian bentuk akar: √(a × b) = √a × √b.',
    },
    {
      title: 'Tarik Nilai Akarnya',
      formula: cur.result,
      desc: `√${cur.factor1} keluar menjadi ${cur.rootFactor1}. Maka hasil akhir adalah ${cur.result}.`,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Wand2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Operasi Bentuk Akar #1</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Menyederhanakan Bentuk Akar</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-bold">
          √(k² × a) = k√a
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: Key Strategy & Square Numbers Reference */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
              Prinsip Pokok Penyederhanaan
            </span>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Kunci menyederhanakan bentuk akar adalah mencari <strong>faktor kuadrat sempurna terbesar</strong> (bilangan yang bisa ditarik akarnya langsung).
            </p>

            {/* List of Perfect Squares */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold text-amber-400 block mb-2 uppercase tracking-wide">
                Daftar Bilangan Kuadrat Sempurna:
              </span>
              <div className="grid grid-cols-5 gap-1.5 text-center font-mono text-xs">
                {[
                  { n: 4, sq: '2²' },
                  { n: 9, sq: '3²' },
                  { n: 16, sq: '4²' },
                  { n: 25, sq: '5²' },
                  { n: 36, sq: '6²' },
                  { n: 49, sq: '7²' },
                  { n: 64, sq: '8²' },
                  { n: 81, sq: '9²' },
                  { n: 100, sq: '10²' },
                  { n: 144, sq: '12²' },
                ].map((item) => (
                  <div key={item.n} className="p-1 rounded bg-slate-950 border border-slate-800 text-slate-200">
                    <span className="font-bold text-emerald-400">{item.n}</span>
                    <span className="text-[10px] text-slate-400 block">{item.sq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Problem Switcher */}
          <div className="mt-3 pt-3 border-t border-slate-800">
            <span className="text-xs text-slate-400 block mb-2">Pilih Latihan Angka:</span>
            <div className="grid grid-cols-4 gap-2">
              {[72, 50, 48, 108].map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedNum(num);
                    setStepIndex(0);
                  }}
                  className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                    selectedNum === num
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  √{num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Step-by-Step Animated Process */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Animasi Perhitungan: {cur.original}
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setStepIndex(0);
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Stepper Cards */}
            <div className="space-y-2.5 my-2">
              {steps.map((step, idx) => {
                const isActive = stepIndex === idx;
                const isPassed = stepIndex >= idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      setStepIndex(idx);
                    }}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-950 border-emerald-400 shadow-md scale-[1.01]'
                        : isPassed
                        ? 'bg-slate-900/80 border-slate-700/80 text-slate-300'
                        : 'bg-slate-900/40 border-slate-800/60 opacity-30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-300">
                        Langkah {idx + 1}: {step.title}
                      </span>
                      <span className="font-mono text-base md:text-lg font-black text-amber-300 bg-slate-950 px-3 py-0.5 rounded border border-slate-800">
                        {step.formula}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-slate-300 mt-2 pt-1.5 border-t border-slate-800 animate-fadeIn">
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
              {stepIndex === steps.length - 1 ? 'Selesai: Bentuk paling sederhana tercapai!' : `Langkah ${stepIndex + 1} dari 4`}
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                setStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs cursor-pointer shadow"
            >
              <span>{stepIndex < steps.length - 1 ? 'Langkah Berikutnya' : 'Ulangi Langkah'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Keluarkan bilangan kuadrat dari tanda akar: √72 = √(36×2) = 6√2.</span>
        <span className="text-emerald-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
