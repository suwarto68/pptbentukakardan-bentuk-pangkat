import React from 'react';
import { X, LayoutGrid, CheckCircle } from 'lucide-react';
import { SLIDES_META } from '../data/slidesData';
import { soundFx } from '../utils/audio';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      <div className="w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <LayoutGrid className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">DAFTAR SELURUH SLIDE PRESENTASI</h3>
              <p className="text-xs text-slate-400">Pilih slide untuk melompat langsung ke topik pembahasan</p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 20 Slides Grid */}
        <div className="flex-1 overflow-y-auto py-4 pr-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {SLIDES_META.map((meta) => {
            const isCurrent = meta.id === currentSlide;

            return (
              <div
                key={meta.id}
                onClick={() => {
                  soundFx.playSlide();
                  onSelectSlide(meta.id);
                  onClose();
                }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isCurrent
                    ? 'bg-indigo-950/80 border-indigo-500 ring-2 ring-indigo-500/40 shadow-lg scale-105'
                    : 'bg-slate-950/60 hover:bg-slate-850 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isCurrent
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      Slide #{meta.id}
                    </span>
                    <span className="text-[10px] text-slate-400 truncate max-w-[80px]">
                      {meta.category}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {meta.title}
                  </h4>
                </div>

                <p className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-800/80 line-clamp-1">
                  {meta.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Gunakan tombol panah keyboard ← dan → untuk navigasi cepat</span>
          <span className="text-indigo-400 font-mono font-semibold">SMPN 1 Wanaraya • 20 Slide Lengkap</span>
        </div>
      </div>
    </div>
  );
};
