import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Maximize2,
  Minimize2,
  Printer,
  Volume2,
  VolumeX,
  LayoutGrid,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onHome: () => void;
  onToggleDrawer: () => void;
  onToggleNotes: () => void;
  onToggleGuide: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onPrint: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onHome,
  onToggleDrawer,
  onToggleNotes,
  onToggleGuide,
  isFullscreen,
  onToggleFullscreen,
  isMuted,
  onToggleMute,
  onPrint,
}) => {
  const progressPercent = Math.round((currentSlide / totalSlides) * 100);

  return (
    <div className="no-print w-full bg-slate-950/90 backdrop-blur-md border-t border-slate-800 text-slate-200 px-4 py-2.5 flex flex-col gap-2 z-40 select-none">
      {/* Visual Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden relative">
        <div
          className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left: Home & Quick Jump Drawer */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              soundFx.playClick();
              onHome();
            }}
            title="Kembali ke Cover (Home)"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onToggleDrawer();
            }}
            title="Daftar Seluruh Slide (Grid View)"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">Daftar Slide</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onToggleNotes();
            }}
            title="Catatan Guru / Pembahasan Pedagogis"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Catatan Guru</span>
          </button>
        </div>

        {/* Center: Slide Numbers & Previous / Next */}
        <div className="flex items-center gap-3">
          <button
            disabled={currentSlide <= 1}
            onClick={() => {
              soundFx.playSlide();
              onPrev();
            }}
            title="Slide Sebelumnya (Panah Kiri / PageUp)"
            className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 disabled:opacity-30 disabled:hover:bg-indigo-600/20 text-indigo-300 hover:text-white border border-indigo-500/30 transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="text-center font-mono px-3 py-1 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-sm md:text-base font-black text-white">{currentSlide}</span>
            <span className="text-xs text-slate-500 mx-1">/</span>
            <span className="text-xs text-slate-400">{totalSlides}</span>
          </div>

          <button
            disabled={currentSlide >= totalSlides}
            onClick={() => {
              soundFx.playSlide();
              onNext();
            }}
            title="Slide Berikutnya (Panah Kanan / Space / PageDown)"
            className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:hover:bg-indigo-600 text-white border border-indigo-500 transition-all cursor-pointer disabled:cursor-not-allowed shadow-md shadow-indigo-600/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Tools (Sound, Fullscreen, Print PDF, Guide) */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              onToggleMute();
            }}
            title={isMuted ? 'Nyalakan Suara (Audio ON)' : 'Matikan Suara (Audio Muted)'}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isMuted
                ? 'bg-rose-950/40 text-rose-400 border-rose-500/40'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onPrint();
            }}
            title="Simpan / Cetak Seluruh Slide ke PDF"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Cetak PDF</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onToggleFullscreen();
            }}
            title="Layar Penuh / Fullscreen (F)"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onToggleGuide();
            }}
            title="Petunjuk Penggunaan & Deployment"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-md shadow-emerald-600/20"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden md:inline">Panduan Guru</span>
          </button>
        </div>
      </div>
    </div>
  );
};
