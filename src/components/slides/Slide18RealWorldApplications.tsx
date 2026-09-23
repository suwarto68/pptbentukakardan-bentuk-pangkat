import React, { useState } from 'react';
import { Compass, Monitor, MapPin, Box, CheckCircle, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide18RealWorldApplications: React.FC = () => {
  const [activeApp, setActiveApp] = useState<'diagonal' | 'layar' | 'kontekstual'>('kontekstual');
  const [sisiLahan, setSisiLahan] = useState<number>(10);

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Kontekstual & Realitas</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Penerapan dalam Kehidupan Sehari-hari</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-300 font-bold">
          Matematika Realistis SMP
        </div>
      </div>

      {/* Mode Selector */}
      <div className="flex gap-2 my-2">
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveApp('kontekstual');
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeApp === 'kontekstual'
              ? 'bg-amber-600 text-white border-amber-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          ⭐ Masalah Terpadu: Taman Wanaraya
        </button>
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveApp('diagonal');
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeApp === 'diagonal'
              ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          Diagonal Lapangan Persegi (d = s√2)
        </button>
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveApp('layar');
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            activeApp === 'layar'
              ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
          }`}
        >
          Ukuran Layar Laptop & Monitor
        </button>
      </div>

      {/* Main Dynamic View */}
      <div className="my-auto py-2 flex-1">
        {activeApp === 'kontekstual' && (
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            {/* Context Problem Statement */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Studi Kasus Kontekstual SMPN 1 Wanaraya</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Perancangan Taman Sains Sekolah & Pemasangan Pipa
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Sekolah hendak membuat taman sains berbentuk <strong>persegi</strong> dengan luas <strong>{sisiLahan * sisiLahan} m²</strong>. Di sekeliling taman akan ditanam rumput gajah, dan di tengah diagonalnya akan dipasang pipa air bawah tanah.
                </p>

                {/* Slider for interactive side length */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-400">Atur Panjang Sisi Taman (s):</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">{sisiLahan} meter</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="1"
                    value={sisiLahan}
                    onChange={(e) => setSisiLahan(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>5m</span>
                    <span>10m</span>
                    <span>15m</span>
                    <span>20m</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400">
                Menggabungkan perpangkatan (Luas = s²) dan bentuk akar (Diagonal d = √(s² + s²) = s√2).
              </div>
            </div>

            {/* Calculations Breakdown Right */}
            <div className="lg:col-span-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                Hasil Perhitungan Terpadu
              </span>

              <div className="space-y-2.5 font-mono text-xs">
                {/* Luas using exponent */}
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[11px]">1. Konsep Pangkat (Luas Taman):</span>
                    <span className="text-emerald-300 font-bold text-sm">
                      L = s² = {sisiLahan}² = {sisiLahan * sisiLahan} m²
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-emerald-950 text-emerald-400 rounded text-[11px] font-sans">
                    Eksponen
                  </span>
                </div>

                {/* Sisi from Area using root */}
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[11px]">2. Konsep Akar (Menentukan Sisi):</span>
                    <span className="text-cyan-300 font-bold text-sm">
                      s = √Luas = √{sisiLahan * sisiLahan} = {sisiLahan} m
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-cyan-950 text-cyan-400 rounded text-[11px] font-sans">
                    Bentuk Akar
                  </span>
                </div>

                {/* Diagonal using simplified root */}
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[11px]">3. Panjang Pipa Diagonal:</span>
                    <span className="text-amber-300 font-bold text-sm">
                      d = √(s² + s²) = √({sisiLahan}² + {sisiLahan}²) = {sisiLahan}√2 m
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      (≈ {(sisiLahan * 1.414).toFixed(2)} meter)
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-amber-950 text-amber-400 rounded text-[11px] font-sans">
                    Pythagoras
                  </span>
                </div>
              </div>

              <div className="mt-3 text-[11px] text-emerald-400 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Terbukti bahwa konsep perpangkatan dan bentuk akar saling melengkapi!</span>
              </div>
            </div>
          </div>
        )}

        {activeApp === 'diagonal' && (
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  Diagonal Persegi Selalu Bernilai s√2
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Setiap kali seorang arsitek atau tukang bangunan mengukur sudut siku-siku pada pondasi persegi dengan panjang sisi s, diagonalnya pasti bernilai <strong className="text-emerald-400">s√2</strong>.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5">
                  <div className="text-slate-400">Pembuktian dengan Teorema Pythagoras:</div>
                  <div className="text-amber-300 font-bold">d² = s² + s²</div>
                  <div className="text-amber-300 font-bold">d² = 2s²</div>
                  <div className="text-emerald-400 font-black text-sm">d = √(2s²) = s√2</div>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-400">
                Contoh: Keramik lantai 40 cm × 40 cm memiliki diagonal 40√2 cm (≈ 56,57 cm).
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center p-4 bg-slate-950 rounded-xl border border-slate-800">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <rect x="20" y="20" width="140" height="140" fill="none" stroke="#10b981" strokeWidth="2" />
                <line x1="20" y1="160" x2="160" y2="20" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 4" />
                <text x="90" y="175" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">sisi = s</text>
                <text x="10" y="90" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">s</text>
                <text x="100" y="80" fill="#f59e0b" fontSize="13" fontWeight="bold" fontFamily="monospace">d = s√2</text>
              </svg>
            </div>
          </div>
        )}

        {activeApp === 'layar' && (
          <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase mb-2">
                <Monitor className="w-4 h-4" />
                <span>Teknologi: Pengukuran Diagonal Layar (Inci)</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Mengapa Ukuran Layar TV / HP Dinyatakan dalam Inci Diagonal?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Layar 14 inci laptop atau 65 inci TV dihitung menggunakan panjang diagonal segitiga siku-siku antara lebar dan tinggi layar:
              </p>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300">
                Diagonal = √(Lebar² + Tinggi²)
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Insinyur elektronika memanfaatkan perhitungan akar dan kuadrat agar rasio aspek 16:9 memberikan ketajaman piksel maksimal.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="w-44 h-28 rounded-lg border-2 border-slate-700 bg-slate-900 relative flex items-center justify-center">
                <div className="absolute inset-2 border border-dashed border-indigo-500/60 rounded flex items-center justify-center">
                  <span className="font-mono text-xs text-indigo-300 font-bold">Layar Rasio 16:9</span>
                </div>
                <div className="absolute bottom-1 right-2 text-[10px] text-amber-400 font-mono">
                  d = √(w² + h²)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Matematika eksponen dan akar menjadi landasan teknologi, teknik sipil, dan desain grafis.</span>
        <span className="text-amber-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
