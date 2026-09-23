import React, { useState } from 'react';
import { Split, CheckCircle, Scissors, RefreshCw } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide7DivisionLaw: React.FC = () => {
  const [isCanceled, setIsCanceled] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Split className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Sifat Operasi Eksponen #2</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Sifat Pembagian Bilangan Berpangkat</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-bold">
          aᵐ ÷ aⁿ = aᵐ⁻ⁿ
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: General Formula */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2 block">
              Rumus Utama Pembagian
            </span>

            <div className="p-5 rounded-xl bg-slate-950 border border-cyan-500/40 text-center my-3">
              <div className="flex items-center justify-center gap-3 font-mono text-3xl md:text-4xl font-black text-white">
                <div className="flex flex-col items-center">
                  <span>
                    <span className="text-emerald-400">a</span>
                    <sup className="text-amber-400 text-xl md:text-2xl">m</sup>
                  </span>
                  <div className="w-full h-0.5 bg-slate-500 my-1"></div>
                  <span>
                    <span className="text-emerald-400">a</span>
                    <sup className="text-cyan-400 text-xl md:text-2xl">n</sup>
                  </span>
                </div>
                <span className="text-slate-400">=</span>
                <span>
                  <span className="text-emerald-400">a</span>
                  <sup className="text-indigo-400 text-2xl">m−n</sup>
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 mt-4">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pada pembagian dengan basis sama, pangkat dikurangkan: <strong>(m − n)</strong>.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Syarat nilai basis: <strong>a ≠ 0</strong> (tidak boleh dibagi nol).</span>
              </p>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
            Contoh lain: 7⁸ ÷ 7³ = 7⁸⁻³ = 7⁵
          </div>
        </div>

        {/* Right: Interactive Diagram of Canceling Factors */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Visualisasi Penyederhanaan Pecahan: 5⁶ ÷ 5²
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsCanceled(!isCanceled);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCanceled
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                {isCanceled ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5" /> Kembalikan Bentuk Asli
                  </>
                ) : (
                  <>
                    <Scissors className="w-3.5 h-3.5" /> Klik: Coret Faktor Sama!
                  </>
                )}
              </button>
            </div>

            {/* Fraction Visual Box */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center my-3">
              <div className="flex items-center gap-4 text-sm md:text-base font-mono">
                <span className="text-slate-400 font-bold text-lg">5⁶ ÷ 5² =</span>

                <div className="flex flex-col items-center">
                  {/* Numerator (6 factors) */}
                  <div className="flex items-center gap-1.5 py-1">
                    {[1, 2, 3, 4, 5, 6].map((idx) => {
                      const isStriked = isCanceled && idx <= 2;
                      return (
                        <React.Fragment key={idx}>
                          <span
                            className={`w-7 h-7 rounded-md font-bold flex items-center justify-center transition-all ${
                              isStriked
                                ? 'bg-rose-950/80 text-rose-400 line-through border border-rose-600/60 scale-90 opacity-40'
                                : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                            }`}
                          >
                            5
                          </span>
                          {idx < 6 && <span className="text-slate-400 text-xs">×</span>}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Divider Line */}
                  <div className="w-full h-0.5 bg-slate-600 my-1.5"></div>

                  {/* Denominator (2 factors) */}
                  <div className="flex items-center gap-1.5 py-1">
                    {[1, 2].map((idx) => {
                      const isStriked = isCanceled;
                      return (
                        <React.Fragment key={idx}>
                          <span
                            className={`w-7 h-7 rounded-md font-bold flex items-center justify-center transition-all ${
                              isStriked
                                ? 'bg-rose-950/80 text-rose-400 line-through border border-rose-600/60 scale-90 opacity-40'
                                : 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
                            }`}
                          >
                            5
                          </span>
                          {idx < 2 && <span className="text-slate-400 text-xs">×</span>}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                <span className="text-slate-400 text-xl font-bold">=</span>

                {/* Result box */}
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40 flex flex-col items-center">
                  <span className="text-xs text-slate-400 font-mono">Tersisa 4 faktor 5</span>
                  <span className="text-2xl md:text-3xl font-black text-amber-400 font-mono">
                    5⁴ <span className="text-sm font-normal text-slate-400">(= 625)</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-indigo-200">
              {isCanceled
                ? '✨ Dua faktor angka 5 di atas dicoret dengan dua faktor angka 5 di bawah. Tersisa 6 − 2 = 4 faktor angka 5!'
                : '💡 Klik tombol di atas untuk melihat bagaimana faktor pembilang dan penyebut saling menghilangkan (membagi habis).'}
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Kesimpulan: 5⁶ ÷ 5² = 5⁶⁻² = 5⁴</span>
            <span className="font-mono text-emerald-400 font-bold">Terbukti!</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Pembagian basis sama → Pangkat dikurangkan.</span>
        <span className="text-cyan-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
