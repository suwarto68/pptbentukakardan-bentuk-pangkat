import React, { useState } from 'react';
import { HelpCircle, CheckCircle, Sparkles, RefreshCw, Zap } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide9ZeroPower: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);

  const interactiveQuestions = [
    { expr: '5⁰', answer: '1', note: 'Bilangan positif dipangkatkan 0' },
    { expr: '100⁰', answer: '1', note: 'Bilangan ratusan dipangkatkan 0' },
    { expr: '2026⁰', answer: '1', note: 'Tahun ini dipangkatkan 0' },
    { expr: '(-7)⁰', answer: '1', note: 'Bilangan negatif dalam kurung dipangkatkan 0' },
  ];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Sifat Khusus Eksponen #4</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Bilangan Berpangkat Nol</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-300 font-bold">
          a⁰ = 1 (a ≠ 0)
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: General Law & Proof */}
        <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 block">
              Definisi & Sifat
            </span>

            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/40 text-center my-3">
              <div className="font-mono text-4xl md:text-5xl font-black text-white">
                <span className="text-emerald-400">a</span>
                <sup className="text-amber-400 text-2xl md:text-3xl">0</sup>
                <span className="text-slate-400 mx-3">=</span>
                <span className="text-indigo-400">1</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-mono">Untuk setiap bilangan real a dengan syarat a ≠ 0</p>
            </div>

            {/* Proof Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
              <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Mengapa Hasilnya Selalu 1? (Pembuktian Logis)
              </h4>
              <div className="space-y-1.5 font-mono text-[13px] bg-slate-950 p-3 rounded-lg border border-slate-800">
                <p>1. Ambil pembagian berulang: <span className="text-cyan-300">aⁿ ÷ aⁿ = 1</span> (bilangan dibagi dirinya sendiri = 1)</p>
                <p>2. Gunakan sifat pengurangan: <span className="text-amber-300">aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰</span></p>
                <p className="text-emerald-300 font-bold pt-1 border-t border-slate-800">
                  ∴ Terbukti bahwa a⁰ = 1 !
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300">
            <strong>Catatan Penting:</strong> 0⁰ (nol pangkat nol) adalah <em>tak terdefinisi</em> dalam matematika dasar.
          </div>
        </div>

        {/* Right: Interactive Question Board */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                Uji Pemahaman Cepat (Klik Kartu)
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Berapakah nilai dari masing-masing bilangan berikut jika dipangkatkan nol?
            </p>

            <div className="grid grid-cols-2 gap-3">
              {interactiveQuestions.map((q, idx) => {
                const isRevealed = selectedQuiz === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFx.playCorrect();
                      setSelectedQuiz(isRevealed ? null : idx);
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                      isRevealed
                        ? 'bg-emerald-950/60 border-emerald-500 shadow-md scale-105'
                        : 'bg-slate-900 hover:bg-slate-850 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-2xl md:text-3xl font-mono font-black text-white mb-1">
                      {q.expr}
                    </span>

                    {isRevealed ? (
                      <div className="animate-scaleIn">
                        <span className="text-xl font-mono font-extrabold text-emerald-400 block">
                          = {q.answer}
                        </span>
                        <span className="text-[10px] text-slate-300 mt-1 block">{q.note}</span>
                      </div>
                    ) : (
                      <span className="text-[11px] text-indigo-400 font-medium mt-1">
                        Klik untuk buka jawaban
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-300">
              Berapa pun angka besarnya, selama bukan nol, jika dipangkatkan 0 hasilnya <strong>selalu 1</strong>.
            </span>
            <button
              onClick={() => {
                soundFx.playClick();
                setSelectedQuiz(null);
              }}
              className="text-slate-400 hover:text-white p-1"
              title="Reset"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Sifat bilangan berpangkat nol: a⁰ = 1.</span>
        <span className="text-amber-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
