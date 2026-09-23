import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award, Lightbulb, ChevronRight, ChevronLeft } from 'lucide-react';
import { QUIZ_SLIDE_11 } from '../../data/slidesData';
import { soundFx } from '../../utils/audio';

export const Slide11QuizExponents: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showHint, setShowHint] = useState<boolean>(false);

  const question = QUIZ_SLIDE_11[currentIdx];
  const selectedKey = userAnswers[question.id];
  const isAnswered = selectedKey !== undefined;
  const correctOption = question.options.find((opt) => opt.isCorrect);
  const isCorrect = selectedKey === correctOption?.key;

  const handleSelect = (key: string) => {
    if (isAnswered) return;

    const opt = question.options.find((o) => o.key === key);
    if (opt?.isCorrect) {
      soundFx.playCorrect();
    } else {
      soundFx.playWrong();
    }

    setUserAnswers((prev) => ({
      ...prev,
      [question.id]: key,
    }));
  };

  const handleReset = () => {
    soundFx.playClick();
    setUserAnswers({});
    setCurrentIdx(0);
    setShowHint(false);
  };

  // Score calculation
  const totalQuestions = QUIZ_SLIDE_11.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = QUIZ_SLIDE_11.filter((q) => {
    const userChoice = userAnswers[q.id];
    const correct = q.options.find((o) => o.isCorrect)?.key;
    return userChoice === correct;
  }).length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Evaluasi Formatif</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Kuis Interaktif Bilangan Berpangkat</h2>
          </div>
        </div>

        {/* Live Score Tracker */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Skor:</span>
            <span className="font-mono font-bold text-emerald-400 text-sm">
              {correctCount} / {totalQuestions}
            </span>
            <span className="text-slate-400">({scorePercent}%)</span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ulangi</span>
          </button>
        </div>
      </div>

      {/* Question Stepper Tabs */}
      <div className="flex items-center justify-between gap-2 my-2">
        <div className="flex items-center gap-1.5">
          {QUIZ_SLIDE_11.map((q, idx) => {
            const isQAnswered = userAnswers[q.id] !== undefined;
            const isQCorrect = userAnswers[q.id] === q.options.find((o) => o.isCorrect)?.key;

            let tabColor = 'bg-slate-800 text-slate-400 border-slate-700';
            if (isQAnswered) {
              tabColor = isQCorrect
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                : 'bg-rose-950 text-rose-300 border-rose-500';
            }
            if (currentIdx === idx) {
              tabColor += ' ring-2 ring-indigo-500 font-black';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  soundFx.playClick();
                  setCurrentIdx(idx);
                  setShowHint(false);
                }}
                className={`w-9 h-8 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${tabColor}`}
              >
                Q{idx + 1}
              </button>
            );
          })}
        </div>

        <span className="text-xs text-slate-400">
          Soal {currentIdx + 1} dari {totalQuestions}
        </span>
      </div>

      {/* Main Question Card */}
      <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between my-auto">
        <div>
          {/* Question Text */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-base md:text-lg font-bold text-white leading-relaxed">
              <span className="text-indigo-400 font-mono mr-2">{currentIdx + 1}.</span>
              {question.question}
            </h3>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono shrink-0">
              Tingkat: {question.difficulty}
            </span>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {question.options.map((opt) => {
              let optStyle = 'bg-slate-900/90 hover:bg-slate-850 border-slate-800 text-slate-200';

              if (isAnswered) {
                if (opt.isCorrect) {
                  optStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold shadow-sm';
                } else if (opt.key === selectedKey) {
                  optStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 line-through';
                } else {
                  optStyle = 'bg-slate-900/40 border-slate-800/60 text-slate-500 opacity-40';
                }
              }

              return (
                <button
                  key={opt.key}
                  disabled={isAnswered}
                  onClick={() => handleSelect(opt.key)}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-left text-xs md:text-sm font-medium transition-all cursor-pointer ${optStyle}`}
                >
                  <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold shrink-0">
                    {opt.key}
                  </span>
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isAnswered && (
            <div
              className={`p-4 rounded-xl border text-xs leading-relaxed animate-fadeIn ${
                isCorrect
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold mb-1.5 text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Luar Biasa! Jawaban Kamu Benar!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-400" />
                    <span>Belum Tepat. Perhatikan Pembahasannya:</span>
                  </>
                )}
              </div>
              <p className="text-slate-300">{question.explanation}</p>
            </div>
          )}

          {/* Hint button when not answered */}
          {!isAnswered && (
            <div className="pt-1">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Perlu petunjuk pengerjaan?</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{question.hint}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Stepper Buttons */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
          <button
            disabled={currentIdx === 0}
            onClick={() => {
              soundFx.playClick();
              setCurrentIdx((prev) => prev - 1);
              setShowHint(false);
            }}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold text-slate-300 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Soal Sebelumnya
          </button>

          <button
            disabled={currentIdx === totalQuestions - 1}
            onClick={() => {
              soundFx.playClick();
              setCurrentIdx((prev) => prev + 1);
              setShowHint(false);
            }}
            className="flex items-center gap-1 px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold text-white cursor-pointer"
          >
            Soal Berikutnya <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Kuis Latihan Bilangan Berpangkat • Terdiri dari 5 soal kunci konsep.</span>
        <span className="text-indigo-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
