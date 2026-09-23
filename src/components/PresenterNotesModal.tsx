import React from 'react';
import { X, FileText, User, School, BookOpen } from 'lucide-react';
import { SLIDES_META, APP_INFO } from '../data/slidesData';
import { soundFx } from '../utils/audio';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  const currentMeta = SLIDES_META.find((m) => m.id === currentSlide) || SLIDES_META[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">CATATAN GURU & PANDUAN MENGAJAR</h3>
              <p className="text-xs text-slate-400">
                Slide #{currentSlide}: {currentMeta.title}
              </p>
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

        {/* Notes Content */}
        <div className="my-4 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              Saran Pedagogis / Pertanyaan Pemantik di Kelas:
            </span>
            <p className="text-sm text-slate-200 leading-relaxed">
              {currentMeta.notes}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2.5">
              <User className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">Guru Pengampu:</span>
                <span className="font-bold text-white">{APP_INFO.teacher}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2.5">
              <School className="w-4 h-4 text-indigo-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">Satuan Pendidikan:</span>
                <span className="font-bold text-white">{APP_INFO.school}</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-slate-300 leading-relaxed">
            💡 <strong>Tips Presentasi Guru:</strong> Tekan tombol <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded font-mono text-indigo-300">F</kbd> untuk tampilan layar penuh, atau tombol panah keyboard untuk berpindah slide tanpa mouse.
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer"
          >
            Tutup Catatan
          </button>
        </div>
      </div>
    </div>
  );
};
