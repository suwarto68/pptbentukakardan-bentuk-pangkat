import React, { useState } from 'react';
import { Square, CheckCircle, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Slide12RootConcept: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<number>(25);

  const examples = [
    { area: 16, side: 4, label: '√16 = 4', reason: '4² = 4 × 4 = 16' },
    { area: 25, side: 5, label: '√25 = 5', reason: '5² = 5 × 5 = 25' },
    { area: 36, side: 6, label: '√36 = 6', reason: '6² = 6 × 6 = 36' },
    { area: 64, side: 8, label: '√64 = 8', reason: '8² = 8 × 8 = 64' },
  ];

  const current = examples.find((e) => e.area === selectedExample) || examples[1];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Square className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Konsep Bentuk Akar #1</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Pengenalan Bilangan Bentuk Akar</h2>
          </div>
        </div>

        <div className="px-3 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-bold">
          √a = Invers Kuadrat
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Left: Formal Definition */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2 block">
              Definisi Akar Kuadrat
            </span>

            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 text-center my-3">
              <div className="font-mono text-4xl md:text-5xl font-black text-white">
                <span className="text-emerald-400">√a</span>
                <span className="text-slate-400 mx-2">=</span>
                <span className="text-amber-400">b</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-mono">
                karena <strong className="text-amber-300">b² = a</strong> (dengan b ≥ 0)
              </p>
            </div>

            <blockquote className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed mt-4">
              "Akar kuadrat dari bilangan <strong className="text-emerald-300">a</strong> adalah suatu bilangan non-negatif yang jika <strong>dikuadratkan</strong> (dikalikan dengan dirinya sendiri) menghasilkan <strong className="text-emerald-300">a</strong>."
            </blockquote>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
            <p className="text-emerald-400 font-bold">• √25 = 5 karena 5² = 25</p>
            <p className="text-cyan-400 font-bold">• √36 = 6 karena 6² = 36</p>
          </div>
        </div>

        {/* Right: Visual Geometric Model (Persegi & Luas) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Model Visual Geometri: Hubungan Sisi & Luas Persegi
              </span>
            </div>

            {/* Selectable examples */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {examples.map((ex) => (
                <button
                  key={ex.area}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedExample(ex.area);
                  }}
                  className={`py-1.5 px-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                    selectedExample === ex.area
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>

            {/* Geometric SVG Box */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-around gap-4">
              {/* Dynamic SVG Square */}
              <div className="relative flex items-center justify-center p-2">
                <svg width="150" height="150" viewBox="0 0 150 150" className="overflow-visible">
                  {/* Grid inside square */}
                  <rect
                    x="15"
                    y="15"
                    width="120"
                    height="120"
                    rx="8"
                    fill="#064e3b"
                    fillOpacity="0.4"
                    stroke="#10b981"
                    strokeWidth="3"
                  />
                  {/* Internal grid lines */}
                  {Array.from({ length: current.side - 1 }).map((_, i) => (
                    <React.Fragment key={i}>
                      <line
                        x1={15 + ((i + 1) * 120) / current.side}
                        y1="15"
                        x2={15 + ((i + 1) * 120) / current.side}
                        y2="135"
                        stroke="#10b981"
                        strokeOpacity="0.3"
                        strokeWidth="1"
                      />
                      <line
                        x1="15"
                        y1={15 + ((i + 1) * 120) / current.side}
                        x2="135"
                        y2={15 + ((i + 1) * 120) / current.side}
                        stroke="#10b981"
                        strokeOpacity="0.3"
                        strokeWidth="1"
                      />
                    </React.Fragment>
                  ))}
                  {/* Center Text: Area */}
                  <text
                    x="75"
                    y="72"
                    textAnchor="middle"
                    fill="#f8fafc"
                    fontSize="16"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    Luas = {current.area}
                  </text>
                  <text
                    x="75"
                    y="90"
                    textAnchor="middle"
                    fill="#6ee7b7"
                    fontSize="11"
                    fontFamily="sans-serif"
                  >
                    satuan luas
                  </text>
                </svg>

                {/* Sisi labels */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-[11px] font-mono font-bold text-amber-400">
                  sisi = {current.side}
                </div>
                <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 -rotate-90 px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-[11px] font-mono font-bold text-amber-400">
                  sisi = {current.side}
                </div>
              </div>

              {/* Math breakdown */}
              <div className="flex flex-col justify-center space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Rumus Luas Persegi:</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">Luas = sisi × sisi = s²</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Maka Panjang Sisi:</span>
                  <span className="font-mono text-amber-400 font-bold text-sm">
                    s = √Luas = √{current.area} = {current.side}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 font-mono">
                  Alasan: {current.reason}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            💡 <strong>Tahu kah kamu?</strong> Simbol akar (√) awalnya berasal dari huruf <em>'r'</em> singkatan dari kata Latin <em>radix</em> yang berarti akar.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Menarik akar adalah operasi kebalikan (invers) dari mengkuadratkan.</span>
        <span className="text-emerald-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
