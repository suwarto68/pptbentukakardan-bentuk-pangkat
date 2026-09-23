import React, { useState } from 'react';
import { Microscope, HelpCircle, Play, RotateCcw, Lightbulb, ChevronRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide3Apersepsi: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const stages = [
    { time: '0 Menit (Awal)', count: 1, formula: '2⁰ = 1', desc: '1 sel bakteri awal' },
    { time: '20 Menit', count: 2, formula: '2¹ = 2', desc: 'Membelah jadi 2' },
    { time: '40 Menit', count: 4, formula: '2² = 2 × 2 = 4', desc: 'Masing-masing membelah jadi 4' },
    { time: '60 Menit', count: 8, formula: '2³ = 2 × 2 × 2 = 8', desc: 'Membelah lagi jadi 8' },
    { time: '80 Menit', count: 16, formula: '2⁴ = 2 × 2 × 2 × 2 = 16', desc: 'Membelah lagi jadi 16' },
  ];

  const current = stages[step];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Slide Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Microscope className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Apersepsi & Motivasi</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Pertumbuhan Bakteri & Perkalian Berulang</h2>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
          Situasi Kehidupan Nyata
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left Column: Interactive Simulation */}
        <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Simulasi Pembelahan Sel Bakteri (Setiap 20 Menit)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                {current.time}
              </span>
            </div>

            {/* Visual Bacteria Grid */}
            <div className="min-h-[170px] bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 flex flex-wrap items-center justify-center gap-2.5 relative overflow-hidden">
              {Array.from({ length: current.count }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 animate-pulse"
                  style={{ animationDuration: `${1.2 + (idx % 3) * 0.4}s` }}
                >
                  🦠
                </div>
              ))}
            </div>

            {/* Current Step Formula Display */}
            <div className="mt-4 p-3 rounded-xl bg-slate-800/60 border border-indigo-500/30 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">{current.desc}</p>
                <p className="text-lg font-black text-emerald-400 font-mono">{current.count} Bakteri</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Pola Perkalian:</span>
                <p className="text-sm md:text-base font-bold text-indigo-300 font-mono">{current.formula}</p>
              </div>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                setStep(0);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <div className="flex gap-1.5">
              {stages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    soundFx.playClick();
                    setStep(i);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                    step === i
                      ? 'bg-emerald-500 text-slate-950 scale-110 shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                setStep((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs cursor-pointer"
            >
              <span>{step < stages.length - 1 ? 'Langkah Lanjut' : 'Ulangi'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Pertanyaan Pemantik */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>Pertanyaan Pemantik</span>
            </div>

            <blockquote className="text-base md:text-lg font-bold text-white leading-relaxed mb-4">
              "Bagaimana cara menuliskan perkalian yang sama berulang kali secara singkat?"
            </blockquote>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
              Bayangkan jika bakteri telah membelah selama 10 jam (30 kali pembelahan)! Apakah kita harus menuliskan:
              <br />
              <span className="font-mono text-xs text-amber-300 bg-slate-950/60 p-1.5 rounded block my-2 overflow-x-auto">
                2 × 2 × 2 × 2 × 2 × 2 × ... (sebanyak 30 kali)?
              </span>
              Tentu sangat panjang dan melelahkan!
            </p>
          </div>

          {/* Revelation Button */}
          <div className="pt-2">
            {!showAnswer ? (
              <button
                onClick={() => {
                  soundFx.playCorrect();
                  setShowAnswer(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all transform hover:scale-[1.02]"
              >
                <Lightbulb className="w-4 h-4 text-amber-300" />
                <span>Klik untuk Melihat Solusi Matematis</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                  <Lightbulb className="w-4 h-4" />
                  <span>Jawabannya adalah: NOTASI PANGKAT!</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  Cukup ditulis singkat: <span className="font-mono font-bold text-indigo-300 text-base">2³⁰</span>
                  <br />
                  Di mana <span className="text-emerald-400 font-bold">2</span> adalah bilangan pokok (basis), dan{' '}
                  <span className="text-amber-400 font-bold">30</span> adalah pangkat (eksponen).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Konsep eksponen mempermudah penulisan data besar dalam sains dan kehidupan sehari-hari.</span>
        <span className="text-emerald-400 font-mono font-bold">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
