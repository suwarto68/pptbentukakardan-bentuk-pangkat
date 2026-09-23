import React, { useState } from 'react';
import { Target, CheckCircle2, Award, ArrowRight, Layers } from 'lucide-react';
import { LEARNING_OBJECTIVES } from '../../data/slidesData';
import { soundFx } from '../../utils/audio';

export const Slide2Objectives: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pangkat' | 'akar' | 'penerapan'>('all');

  const filteredGoals = LEARNING_OBJECTIVES.filter((goal) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'pangkat') return goal.id <= 5;
    if (activeCategory === 'akar') return goal.id >= 6 && goal.id <= 9;
    if (activeCategory === 'penerapan') return goal.id >= 10;
    return true;
  });

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto">
      {/* Slide Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">TUJUAN PEMBELAJARAN</h2>
            <p className="text-xs md:text-sm text-slate-400">Kompetensi yang diharapkan dicapai siswa Kelas 8 Fase D</p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          {[
            { id: 'all', label: 'Semua (11)' },
            { id: 'pangkat', label: 'Eksponen (1-5)' },
            { id: 'akar', label: 'Bentuk Akar (6-9)' },
            { id: 'penerapan', label: 'Aplikasi & HOTS (10-11)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.id as any);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Learning Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 overflow-y-auto pr-1">
        {filteredGoals.map((item) => (
          <div
            key={item.id}
            className="group relative p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 text-xs font-bold font-mono">
                  #{item.id}
                </span>
                <span className="text-[11px] font-medium text-emerald-400/90 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Target Capaian
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-slate-400 font-mono">SMPN 1 Wanaraya</span>
              <span className="text-indigo-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                Kuasai <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="mt-3 p-2.5 rounded-xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-emerald-950/40 border border-indigo-500/20 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-400" />
          <span>Fokus pada pemahaman konsep logis, bukan sekadar hafalan rumus.</span>
        </div>
        <span className="text-indigo-300 font-mono font-medium">Fase D Kurikulum Merdeka</span>
      </div>
    </div>
  );
};
