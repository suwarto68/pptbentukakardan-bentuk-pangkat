import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, RotateCcw, ChevronRight, ChevronLeft, Lightbulb, FileText, Check, X } from 'lucide-react';
import { HOTS_MCQ_QUESTIONS, HOTS_TF_QUESTIONS, HOTS_REASONING_QUESTIONS } from '../../data/slidesData';
import { soundFx } from '../../utils/audio';

export const Slide19HotsQuiz: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'mcq' | 'tf' | 'reasoning'>('mcq');

  // Answers State
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, string>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean>>({});
  const [reasoningAnswers, setReasoningAnswers] = useState<Record<number, string>>({});

  // Active indices within sections
  const [mcqIdx, setMcqIdx] = useState<number>(0);
  const [reasoningIdx, setReasoningIdx] = useState<number>(0);

  // Scorings
  const correctMcqCount = HOTS_MCQ_QUESTIONS.filter(
    (q) => mcqAnswers[q.id] === q.options.find((o) => o.isCorrect)?.key
  ).length;

  const correctTfCount = HOTS_TF_QUESTIONS.filter(
    (q) => tfAnswers[q.id] === q.isTrue
  ).length;

  const correctReasoningCount = HOTS_REASONING_QUESTIONS.filter(
    (q) => reasoningAnswers[q.id] === q.options.find((o) => o.isBest)?.key
  ).length;

  const totalPossible = 5 + 3 + 2; // 10 total
  const totalCorrect = correctMcqCount + correctTfCount + correctReasoningCount;
  const percentage = Math.round((totalCorrect / totalPossible) * 100);

  const resetAll = () => {
    soundFx.playClick();
    setMcqAnswers({});
    setTfAnswers({});
    setReasoningAnswers({});
    setMcqIdx(0);
    setReasoningIdx(0);
  };

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Asesmen Kompetensi & Bernalar</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Tantangan HOTS & Kuis Evaluasi</h2>
          </div>
        </div>

        {/* Global Live Score Badge */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Total Skor:</span>
            <span className="font-mono font-black text-emerald-400 text-base">
              {totalCorrect} / {totalPossible}
            </span>
            <span className="text-slate-400">({percentage}%)</span>
          </div>

          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Kuis</span>
          </button>
        </div>
      </div>

      {/* Section Sub-Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 my-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveSection('mcq');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeSection === 'mcq'
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
            }`}
          >
            Pilihan Ganda HOTS (5) • {correctMcqCount}/5
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setActiveSection('tf');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeSection === 'tf'
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
            }`}
          >
            Benar / Salah (3) • {correctTfCount}/3
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setActiveSection('reasoning');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeSection === 'reasoning'
                ? 'bg-amber-600 text-white border-amber-400 shadow-md'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
            }`}
          >
            Soal Bernalar Logis (2) • {correctReasoningCount}/2
          </button>
        </div>

        <span className="text-xs text-slate-400 font-mono">
          Kurikulum Merdeka • Tingkat HOTS
        </span>
      </div>

      {/* Section Body */}
      <div className="flex-1 my-auto py-1">
        {/* 1. MCQ SECTION */}
        {activeSection === 'mcq' && (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between h-full animate-fadeIn">
            <div>
              {/* Question selector tabs */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex gap-1.5">
                  {HOTS_MCQ_QUESTIONS.map((q, idx) => {
                    const ans = mcqAnswers[q.id];
                    const isRight = ans === q.options.find((o) => o.isCorrect)?.key;
                    let style = 'bg-slate-800 text-slate-400 border-slate-700';
                    if (ans !== undefined) {
                      style = isRight
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                        : 'bg-rose-950 text-rose-300 border-rose-500';
                    }
                    if (mcqIdx === idx) style += ' ring-2 ring-indigo-400 font-bold';

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          soundFx.playClick();
                          setMcqIdx(idx);
                        }}
                        className={`w-8 h-7 rounded-lg text-xs font-mono border cursor-pointer ${style}`}
                      >
                        PG{idx + 1}
                      </button>
                    );
                  })}
                </div>

                <span className="text-xs text-amber-400 font-mono">
                  Stimulus: {HOTS_MCQ_QUESTIONS[mcqIdx].stimulus}
                </span>
              </div>

              {/* Current Question */}
              {(() => {
                const q = HOTS_MCQ_QUESTIONS[mcqIdx];
                const selected = mcqAnswers[q.id];
                const answered = selected !== undefined;
                const correct = q.options.find((o) => o.isCorrect)?.key;
                const isCorrect = selected === correct;

                return (
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white mb-3">
                      <span className="text-indigo-400 font-mono mr-2">{mcqIdx + 1}.</span>
                      {q.question}
                    </h3>

                    {/* Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-3">
                      {q.options.map((opt) => {
                        let optStyle = 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-200';
                        if (answered) {
                          if (opt.isCorrect) {
                            optStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                          } else if (opt.key === selected) {
                            optStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 line-through';
                          } else {
                            optStyle = 'bg-slate-900/40 border-slate-800/60 text-slate-500 opacity-40';
                          }
                        }

                        return (
                          <button
                            key={opt.key}
                            disabled={answered}
                            onClick={() => {
                              if (opt.isCorrect) soundFx.playCorrect();
                              else soundFx.playWrong();
                              setMcqAnswers((prev) => ({ ...prev, [q.id]: opt.key }));
                            }}
                            className={`p-3 rounded-xl border flex items-center gap-3 text-left text-xs md:text-sm font-medium transition-all cursor-pointer ${optStyle}`}
                          >
                            <span className="w-6 h-6 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold shrink-0">
                              {opt.key}
                            </span>
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {answered && (
                      <div
                        className={`p-3 rounded-xl border text-xs leading-relaxed animate-fadeIn ${
                          isCorrect
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                            : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                        }`}
                      >
                        <span className="font-bold block mb-1">
                          {isCorrect ? '✓ Jawaban Tepat!' : '✕ Pembahasan Langkah:'}
                        </span>
                        <p className="text-slate-300">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Stepper buttons */}
            <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between">
              <button
                disabled={mcqIdx === 0}
                onClick={() => {
                  soundFx.playClick();
                  setMcqIdx((p) => p - 1);
                }}
                className="px-3 py-1 bg-slate-800 disabled:opacity-30 rounded-lg text-xs font-semibold text-slate-300 cursor-pointer"
              >
                ← Sebelumnya
              </button>
              <button
                disabled={mcqIdx === HOTS_MCQ_QUESTIONS.length - 1}
                onClick={() => {
                  soundFx.playClick();
                  setMcqIdx((p) => p + 1);
                }}
                className="px-3 py-1 bg-indigo-600 disabled:opacity-30 rounded-lg text-xs font-semibold text-white cursor-pointer"
              >
                Berikutnya →
              </button>
            </div>
          </div>
        )}

        {/* 2. TRUE / FALSE SECTION */}
        {activeSection === 'tf' && (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 animate-fadeIn">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              3 Pernyataan Konseptual: Analisis Kebenaran
            </span>

            <div className="space-y-3">
              {HOTS_TF_QUESTIONS.map((item) => {
                const userChoice = tfAnswers[item.id];
                const isAnswered = userChoice !== undefined;
                const isCorrect = userChoice === item.isTrue;

                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isAnswered
                        ? isCorrect
                          ? 'bg-emerald-950/20 border-emerald-500/40'
                          : 'bg-rose-950/20 border-rose-500/40'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                      <p className="text-xs md:text-sm font-semibold text-white">
                        <span className="font-mono text-indigo-400 mr-1.5">B/S {item.id}.</span>
                        {item.statement}
                      </p>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          disabled={isAnswered}
                          onClick={() => {
                            if (item.isTrue === true) soundFx.playCorrect();
                            else soundFx.playWrong();
                            setTfAnswers((prev) => ({ ...prev, [item.id]: true }));
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                            isAnswered && item.isTrue === true
                              ? 'bg-emerald-600 text-white border-emerald-400'
                              : userChoice === true
                              ? 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>BENAR</span>
                        </button>

                        <button
                          disabled={isAnswered}
                          onClick={() => {
                            if (item.isTrue === false) soundFx.playCorrect();
                            else soundFx.playWrong();
                            setTfAnswers((prev) => ({ ...prev, [item.id]: false }));
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                            isAnswered && item.isTrue === false
                              ? 'bg-emerald-600 text-white border-emerald-400'
                              : userChoice === false
                              ? 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>SALAH</span>
                        </button>
                      </div>
                    </div>

                    {isAnswered && (
                      <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                        <span className="font-bold text-amber-400 mr-1">Penjelasan:</span>
                        {item.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. REASONING SECTION */}
        {activeSection === 'reasoning' && (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between h-full animate-fadeIn">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Kasus Penalaran Kritis & Logika Pemecahan Masalah
                </span>
                <div className="flex gap-1.5">
                  {HOTS_REASONING_QUESTIONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        soundFx.playClick();
                        setReasoningIdx(i);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border cursor-pointer ${
                        reasoningIdx === i
                          ? 'bg-amber-600 text-white border-amber-400'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      Kasus {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {(() => {
                const r = HOTS_REASONING_QUESTIONS[reasoningIdx];
                const selected = reasoningAnswers[r.id];
                const answered = selected !== undefined;
                const best = r.options.find((o) => o.isBest)?.key;

                return (
                  <div>
                    {/* Scenario Box */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-indigo-500/30 mb-3">
                      <span className="text-xs font-bold text-indigo-300 block mb-1">
                        Skenario: {r.title}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                        {r.scenario}
                      </p>
                    </div>

                    <p className="text-xs font-semibold text-white mb-2">{r.question}</p>

                    {/* Choices */}
                    <div className="space-y-2 mb-3">
                      {r.options.map((opt) => {
                        let style = 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-200';
                        if (answered) {
                          if (opt.isBest) {
                            style = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                          } else if (opt.key === selected) {
                            style = 'bg-rose-950/80 border-rose-500 text-rose-200';
                          } else {
                            style = 'bg-slate-900/40 border-slate-800/60 opacity-40 text-slate-500';
                          }
                        }

                        return (
                          <button
                            key={opt.key}
                            disabled={answered}
                            onClick={() => {
                              if (opt.isBest) soundFx.playCorrect();
                              else soundFx.playWrong();
                              setReasoningAnswers((prev) => ({ ...prev, [r.id]: opt.key }));
                            }}
                            className={`w-full p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-start gap-2.5 ${style}`}
                          >
                            <span className="w-5 h-5 rounded bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">
                              {opt.key}
                            </span>
                            <div>
                              <span>{opt.text}</span>
                              {answered && opt.key === selected && (
                                <span className="block text-[11px] text-amber-300 mt-1 font-mono">
                                  Catatan Guru: {opt.scoreReason}
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex items-center justify-between">
        <span>Evaluasi komprehensif mengukur kemampuan penalaran (C4 - C6 Bloom) materi Eksponen & Akar.</span>
        <span className="text-rose-400 font-mono">SMPN 1 Wanaraya 2026</span>
      </div>
    </div>
  );
};
