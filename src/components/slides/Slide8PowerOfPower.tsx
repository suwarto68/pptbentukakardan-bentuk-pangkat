import React, { useState } from 'react';
import { Box, ArrowRight, Play, RefreshCw } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide8PowerOfPower: React.FC = () => {
  const [animationStage, setAnimationStage] = useState<number>(0);

  const stages = [
    {
      title: 'Bentuk Pangkat Bersusun',
      math: '(2³)² ',
      explanation: 'Artinya ekspresi di dalam kurung (2³) dikalikan berulang sebanyak 2 kali.',
    },
    {
      title: 'Faktorisasi Kelompok Luar',
      math: '(2³) × (2³)',
      explanation: 'Ada 2 kelompok, di mana masing-masing kelompok adalah 2³.',
    },
    {
      title: 'Faktorisasi Lengkap Seluruh Elemen',
      math: '(2 × 2 × 2) × (2 × 2 × 2)',
      explanation: 'Setiap kelompok memiliki 3 angka 2. Total faktor perkalian menjadi 3 × 2 = 6.',
    },
    {
      title: 'Hasil Akhir',
      math: '2³ˣ² = 2⁶ = 64',
      explanation: 'Pangkat di dalam dan di luar kurung cukup DIKALIKAN!',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Box className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Sifat Operasi Eksponen #3</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Pemangkatan Bilangan Berpangkat</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 font-bold">
          (aᵐ)ⁿ = aᵐⁿ
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Formula Left */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 block">
              Rumus Pokok
            </span>

            <div className="p-5 rounded-xl bg-slate-950 border border-purple-500/40 text-center my-3">
              <div className="font-mono text-3xl md:text-4xl font-black text-white">
                <span className="text-slate-400">(</span>
                <span className="text-emerald-400">a</span>
                <sup className="text-amber-400 text-2xl">m</sup>
                <span className="text-slate-400">)</span>
                <sup className="text-purple-400 text-2xl">n</sup>
                <span className="text-slate-400 mx-2">=</span>
                <span className="text-emerald-400">a</span>
                <sup className="text-indigo-400 text-2xl">m × n</sup>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-4">
              Ketika suatu bilangan berpangkat <strong>dipangkatkan kembali</strong>, eksponen di dalam kurung dan di luar kurung <strong>dikalikan</strong>.
            </p>
          </div>

          {/* Quick Examples */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1.5 font-mono">
            <div className="text-slate-400 text-[11px] uppercase tracking-wide">Contoh Cepat:</div>
            <div className="text-purple-300">• (3²)³ = 3²ˣ³ = 3⁶ = 729</div>
            <div className="text-cyan-300">• (5⁴)² = 5⁴ˣ² = 5⁸</div>
            <div className="text-emerald-300">• (x⁵)³ = x¹⁵</div>
          </div>
        </div>

        {/* Interactive Breakdown Right */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Simulasi Transformasi Pangkat: (2³)²
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setAnimationStage(0);
                }}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Stepper visual stack */}
            <div className="space-y-3 my-2">
              {stages.map((stage, idx) => {
                const isActive = animationStage === idx;
                const isPast = animationStage >= idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      setAnimationStage(idx);
                    }}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-purple-950/70 border-purple-500 shadow-md scale-[1.01]'
                        : isPast
                        ? 'bg-slate-900/80 border-slate-700/80 text-slate-300'
                        : 'bg-slate-900/40 border-slate-800/60 opacity-30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-300">{stage.title}</span>
                      <span className="font-mono text-sm md:text-base font-black text-amber-300 bg-slate-950 px-3 py-0.5 rounded border border-slate-800">
                        {stage.math}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-slate-300 mt-2 pt-2 border-t border-purple-500/30 animate-fadeIn">
                        {stage.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stepper Button */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Tahap {animationStage + 1} dari {stages.length}
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                setAnimationStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs cursor-pointer shadow"
            >
              <span>{animationStage < stages.length - 1 ? 'Langkah Berikutnya' : 'Ulangi Animasi'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Pangkat dari pangkat → Kalikan kedua eksponennya.</span>
        <span className="text-purple-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
