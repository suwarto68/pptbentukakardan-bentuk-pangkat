import React, { useState } from 'react';
import { PlusCircle, MinusCircle, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide15AddSubtractRoots: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tambah' | 'kurang' | 'bukan-sejenis'>('tambah');

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Operasi Bentuk Akar #2</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Penjumlahan & Pengurangan Bentuk Akar</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-bold">
          p√a ± q√a = (p ± q)√a
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex gap-2 my-2">
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('tambah');
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeTab === 'tambah'
              ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          <span>Penjumlahan Akar Sejenis</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('kurang');
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeTab === 'kurang'
              ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          <MinusCircle className="w-4 h-4" />
          <span>Pengurangan Akar Sejenis</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('bukan-sejenis');
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeTab === 'bukan-sejenis'
              ? 'bg-amber-600 text-white border-amber-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Perhatian: Akar Tidak Sejenis!</span>
        </button>
      </div>

      {/* Main Dynamic View */}
      <div className="flex-1 my-2 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Mathematical Formula & Analogy */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
              Syarat Mutlak: Akar Sejenis
            </span>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Operasi penjumlahan dan pengurangan <strong>hanya dapat dilakukan</strong> bila bilangan di dalam akar memiliki nilai yang sama persis (akar sejenis).
            </p>

            {/* Algebra Analogy */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block mb-2">
                Analogi Aljabar Suku Sejenis:
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-200">
                  <span>3x + 5x = 8x</span>
                  <span className="text-emerald-400">3√2 + 5√2 = 8√2</span>
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-200">
                  <span>7x − 2x = 5x</span>
                  <span className="text-cyan-400">7√3 − 2√3 = 5√3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
            Anggap simbol akar seperti variabel x. Jumlahkan/kurangkan koefisien di depannya saja!
          </div>
        </div>

        {/* Right: Dynamic Calculation Breakdown */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between">
          {activeTab === 'tambah' && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Contoh Kasus 1: Penjumlahan
              </span>

              {/* Big Equation */}
              <div className="p-5 rounded-xl bg-slate-900 border border-emerald-500/40 text-center font-mono">
                <div className="text-3xl md:text-4xl font-black text-white">
                  <span className="text-emerald-400">3√2</span> + <span className="text-cyan-400">5√2</span>
                </div>
                <div className="text-lg text-slate-400 mt-2 font-mono">
                  = (<span className="text-emerald-400 font-bold">3</span> + <span className="text-cyan-400 font-bold">5</span>)√2
                </div>
                <div className="text-3xl font-black text-amber-400 mt-2 font-mono">
                  = 8√2
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
                ✓ Nilai akarnya sama (sama-sama √2), jadi cukup jumlahkan koefisiennya: (3 + 5) = 8.
              </div>
            </div>
          )}

          {activeTab === 'kurang' && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                Contoh Kasus 2: Pengurangan
              </span>

              {/* Big Equation */}
              <div className="p-5 rounded-xl bg-slate-900 border border-indigo-500/40 text-center font-mono">
                <div className="text-3xl md:text-4xl font-black text-white">
                  <span className="text-indigo-400">7√3</span> − <span className="text-rose-400">2√3</span>
                </div>
                <div className="text-lg text-slate-400 mt-2 font-mono">
                  = (<span className="text-indigo-400 font-bold">7</span> − <span className="text-rose-400 font-bold">2</span>)√3
                </div>
                <div className="text-3xl font-black text-amber-400 mt-2 font-mono">
                  = 5√3
                </div>
              </div>

              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200">
                ✓ Nilai akarnya sama (sama-sama √3), cukup kurangkan koefisiennya: (7 − 2) = 5.
              </div>
            </div>
          )}

          {activeTab === 'bukan-sejenis' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5" />
                <span>Mengapa √2 + √3 TIDAK SAMA DENGAN √5?</span>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 font-mono text-center">
                <div className="text-2xl md:text-3xl font-bold text-rose-300">
                  √2 + √3 <span className="text-rose-500 font-black">≠</span> √5
                </div>
                <p className="text-xs text-slate-400 mt-1">Tidak dapat disatukan!</p>
              </div>

              {/* Decimal proof table */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5">
                <div className="text-amber-400 font-bold font-sans">Pembuktian dengan Desimal Pendekatan:</div>
                <div className="flex justify-between text-slate-300">
                  <span>• √2 ≈ 1,414 dan √3 ≈ 1,732</span>
                  <span className="text-emerald-400 font-bold">Jumlah ≈ 3,146</span>
                </div>
                <div className="flex justify-between text-slate-300 border-t border-slate-800 pt-1">
                  <span>• Sedangkan √5 ≈ 2,236</span>
                  <span className="text-rose-400 font-bold">3,146 ≠ 2,236 (Jelas Berbeda!)</span>
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Karena tidak sejenis, maka bentuk <strong>√2 + √3</strong> sudah merupakan bentuk paling sederhana dan tidak boleh dijumlahkan isinya.
              </p>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Rumus Umum: p√a ± q√a = (p ± q)√a</span>
            <span className="text-cyan-400 font-mono font-bold">Syarat: Nilai Akar Sama</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Akar sejenis dijumlahkan/dikurangkan seperti suku sejenis pada aljabar.</span>
        <span className="text-cyan-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
