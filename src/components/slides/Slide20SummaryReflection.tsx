import React, { useState } from 'react';
import { Network, Sparkles, CheckSquare, Heart, BookmarkCheck, ArrowDown, Send, Check } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide20SummaryReflection: React.FC = () => {
  const [reflectionTab, setReflectionTab] = useState<'mindmap' | 'refleksi'>('mindmap');

  // Reflection state
  const [understoodTopic, setUnderstoodTopic] = useState<string>('Sifat Perkalian & Pembagian Eksponen');
  const [needPracticeTopic, setNeedPracticeTopic] = useState<string>('Menyederhanakan Bentuk Akar (√72 = 6√2)');
  const [realLifeApplication, setRealLifeApplication] = useState<string>('Menghitung diagonal bidang atau layar HP/laptop dengan Pythagoras');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const conceptFlow = [
    { title: 'BILANGAN BERPANGKAT', subtitle: 'Konsep Dasar', color: 'border-indigo-500 text-indigo-300' },
    { title: 'Perkalian Berulang', subtitle: 'aⁿ = a × a × ... × a', color: 'border-emerald-500 text-emerald-300' },
    { title: 'Sifat-Sifat Pangkat', subtitle: 'aᵐ⁺ⁿ, aᵐ⁻ⁿ, (aᵐ)ⁿ', color: 'border-cyan-500 text-cyan-300' },
    { title: 'Pangkat Nol & Negatif', subtitle: 'a⁰ = 1 & a⁻ⁿ = 1/aⁿ', color: 'border-amber-500 text-amber-300' },
    { title: 'Hubungan dengan Akar', subtitle: 'ⁿ√aᵐ = a^(m/n)', color: 'border-purple-500 text-purple-300' },
    { title: 'Penyederhanaan Bentuk Akar', subtitle: '√(k² × a) = k√a', color: 'border-emerald-500 text-emerald-300' },
    { title: 'Operasi Bentuk Akar', subtitle: 'Penjumlahan, Perkalian, Rasional', color: 'border-indigo-500 text-indigo-300' },
    { title: 'Penerapan Masalah Nyata', subtitle: 'Geometri, Luas, Diagonal, Sains', color: 'border-rose-500 text-rose-300' },
  ];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Network className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Kesimpulan & Refleksi Pembelajaran</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Rangkuman & Peta Konsep Utama</h2>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => {
              soundFx.playClick();
              setReflectionTab('mindmap');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              reflectionTab === 'mindmap'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Peta Konsep (Alur)
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setReflectionTab('refleksi');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              reflectionTab === 'refleksi'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Refleksi Diri Siswa
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="my-auto py-2 flex-1">
        {reflectionTab === 'mindmap' ? (
          /* PETA KONSEP ALUR */
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between animate-fadeIn">
            <div className="text-center mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Alur Integrasi Konseptual Fase D
              </span>
            </div>

            {/* Grid Flow Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {conceptFlow.map((node, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl bg-slate-900 border ${node.color} flex flex-col justify-between relative group hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-[11px] font-mono font-bold flex items-center justify-center text-slate-300">
                      {idx + 1}
                    </span>
                    {idx < conceptFlow.length - 1 && (
                      <span className="text-[10px] text-slate-400 font-mono">Lanjut ➔</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5 leading-snug">
                      {node.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {node.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Formula Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-800 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">Kunci Eksponen:</span>
                <span className="font-mono text-slate-300">aᵐ × aⁿ = aᵐ⁺ⁿ  |  aᵐ ÷ aⁿ = aᵐ⁻ⁿ  |  a⁰ = 1</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-cyan-400 font-bold block mb-1">Kunci Bentuk Akar:</span>
                <span className="font-mono text-slate-300">√a × √b = √(ab)  |  √72 = √(36×2) = 6√2</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1">Kunci Realitas:</span>
                <span className="font-mono text-slate-300">Diagonal persegi = s√2  |  Pertumbuhan eksponensial</span>
              </div>
            </div>
          </div>
        ) : (
          /* REFLEKSI DIRI SISWA */
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between animate-fadeIn">
            <div className="mb-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Refleksi Pembelajaran Bermakna
              </span>
              <p className="text-xs text-slate-400 mt-1">
                Tuliskan dan telaah proses belajar kamu hari ini untuk penguatan pemahaman diri:
              </p>
            </div>

            <div className="space-y-3">
              {/* Question 1 */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <label className="text-xs font-bold text-indigo-300 block mb-1">
                  1. Konsep apa yang paling saya pahami dengan baik hari ini?
                </label>
                <input
                  type="text"
                  value={understoodTopic}
                  onChange={(e) => setUnderstoodTopic(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Question 2 */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <label className="text-xs font-bold text-amber-300 block mb-1">
                  2. Konsep apa yang masih perlu saya latih lebih lanjut di rumah?
                </label>
                <input
                  type="text"
                  value={needPracticeTopic}
                  onChange={(e) => setNeedPracticeTopic(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Question 3 */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <label className="text-xs font-bold text-emerald-300 block mb-1">
                  3. Di mana saya dapat menggunakan konsep ini dalam kehidupan sehari-hari?
                </label>
                <input
                  type="text"
                  value={realLifeApplication}
                  onChange={(e) => setRealLifeApplication(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {isSaved ? '✅ Refleksi berhasil disimpan di memori presentasi!' : 'Klik tombol untuk menyimpan catatan refleksi.'}
              </span>
              <button
                onClick={() => {
                  soundFx.playCorrect();
                  setIsSaved(true);
                  setTimeout(() => setIsSaved(false), 3000);
                }}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs cursor-pointer shadow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Simpan Catatan Refleksi</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Details */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <div>
          <span>Guru Pengampu: <strong className="text-white">Suwarto, S.Pd.</strong> • SMPN 1 Wanaraya 2026</span>
        </div>
        <span className="text-purple-400 font-mono font-bold">Terima Kasih & Tetap Semangat Belajar!</span>
      </div>
    </div>
  );
};
