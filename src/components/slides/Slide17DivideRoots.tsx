import React, { useState } from 'react';
import { Divide, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide17DivideRoots: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sifat' | 'rasional'>('sifat');

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Divide className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Operasi Bentuk Akar #4</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Pembagian Bentuk Akar & Merasionalkan</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-bold">
          √a / √b = √(a / b)
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 my-2">
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('sifat');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeTab === 'sifat'
              ? 'bg-cyan-600 text-white border-cyan-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          1. Sifat Pembagian Bentuk Akar
        </button>
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('rasional');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeTab === 'rasional'
              ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          2. Merasionalkan Penyebut Pecahan
        </button>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 flex-1">
        {activeTab === 'sifat' ? (
          <>
            {/* Left: Formula */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 animate-fadeIn">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2 block">
                  Rumus Pokok Pembagian
                </span>

                <div className="p-5 rounded-xl bg-slate-950 border border-cyan-500/40 text-center my-3 font-mono">
                  <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-black text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-emerald-400">√a</span>
                      <div className="w-12 h-0.5 bg-slate-500 my-1"></div>
                      <span className="text-cyan-400">√b</span>
                    </div>
                    <span className="text-slate-400">=</span>
                    <div className="flex items-center">
                      <span className="text-slate-300 text-4xl">√</span>
                      <div className="border-t-2 border-slate-300 px-1 pt-0.5 flex flex-col items-center">
                        <span className="text-emerald-400 text-xl">a</span>
                        <div className="w-8 h-0.5 bg-slate-500 my-0.5"></div>
                        <span className="text-cyan-400 text-xl">b</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-3 font-mono">Syarat: a ≥ 0 dan b &gt; 0</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  Akar dari suatu pembagian sama dengan pembagian masing-masing akarnya. Keduanya dapat disatukan di bawah satu tanda akar untuk disederhanakan.
                </p>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-cyan-300">
                Sifat Koefisien: (p√a) ÷ (q√b) = (p/q) × √(a/b)
              </div>
            </div>

            {/* Right: Step-by-Step Examples */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between animate-fadeIn">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                  Dua Contoh Soal & Pembahasan
                </span>

                <div className="space-y-3">
                  {/* Example 1 */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-amber-400 block mb-1">Contoh 1: Angka Habis Dibagi</span>
                    <div className="font-mono text-sm md:text-base text-slate-200 flex flex-wrap items-center gap-2">
                      <span className="text-white font-bold">√50 ÷ √2</span>
                      <span className="text-slate-400">= √(50 / 2)</span>
                      <span className="text-slate-400">= √25</span>
                      <span className="text-emerald-400 font-black">= 5</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">
                      50 dibagi 2 menghasilkan 25, yang merupakan bilangan kuadrat sempurna!
                    </p>
                  </div>

                  {/* Example 2 */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-cyan-400 block mb-1">Contoh 2: Pembagian dengan Koefisien</span>
                    <div className="font-mono text-sm md:text-base text-slate-200 flex flex-wrap items-center gap-2">
                      <span className="text-white font-bold">6√48 ÷ 2√3</span>
                      <span className="text-slate-400">= (6/2) × √(48/3)</span>
                      <span className="text-slate-400">= 3 × √16</span>
                      <span className="text-slate-400">= 3 × 4</span>
                      <span className="text-amber-400 font-black">= 12</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">
                      Bagi angka di luar akar (6÷2=3), dan bagi angka di dalam akar (48÷3=16).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                💡 Cek pembagian di dalam akar terlebih dahulu apakah menghasilkan bilangan kuadrat sempurna.
              </div>
            </div>
          </>
        ) : (
          /* Tab 2: Rationalizing the Denominator */
          <div className="lg:col-span-12 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between animate-fadeIn">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Konsep Merasionalkan Penyebut Pecahan Bentuk Akar
                </span>
                <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                  Hindari Bentuk Akar di Bawah (Penyebut)
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-4">
                Dalam matematika formal, pecahan tidak lazim ditulis dengan tanda akar pada penyebut. Untuk menghilangkannya, kita <strong>mengalikan pembilang dan penyebut dengan bentuk sekawan (akar yang sama)</strong>.
              </p>

              {/* Step Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 font-mono text-center my-2">
                <div className="text-xs text-slate-400 mb-1">Contoh: Rasionalkan bentuk 6 / √2</div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl font-black text-white">
                  <span>6 / √2</span>
                  <span className="text-slate-400">=</span>
                  <span>(6 / √2) × (<span className="text-emerald-400">√2 / √2</span>)</span>
                  <span className="text-slate-400">=</span>
                  <span>(6√2) / <span className="text-cyan-400">2</span></span>
                  <span className="text-slate-400">=</span>
                  <span className="text-amber-400 text-2xl">3√2</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-bold text-emerald-300 block mb-1">Mengapa dikali √2 / √2?</span>
                  <p className="text-slate-400 leading-relaxed">
                    Karena nilai √2 / √2 = 1. Mengalikan dengan 1 tidak mengubah nilai pecahan asli, hanya mengubah bentuk penampilannya!
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-bold text-amber-300 block mb-1">Mengapa √2 × √2 = 2?</span>
                  <p className="text-slate-400 leading-relaxed">
                    Karena √2 × √2 = √4 = 2. Tanda akar pada penyebut berhasil dihilangkan menjadi bilangan bulat rasional.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              Rumus Cepat: <span className="font-mono font-bold text-emerald-400">a / √b = (a / b)√b</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Pembagian bentuk akar disatukan dalam satu akar atau dirasionalkan penyebutnya.</span>
        <span className="text-cyan-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
