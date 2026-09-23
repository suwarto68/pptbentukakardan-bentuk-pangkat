import React, { useState } from 'react';
import { Calculator, CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface PracticeItem {
  id: number;
  expression: string;
  base: number;
  exp: number;
  correctAnswer: number;
  expansion: string;
  choices: number[];
}

const ITEMS: PracticeItem[] = [
  { id: 1, expression: '2³', base: 2, exp: 3, correctAnswer: 8, expansion: '2 × 2 × 2 = 8', choices: [6, 8, 9, 12] },
  { id: 2, expression: '3⁴', base: 3, exp: 4, correctAnswer: 81, expansion: '3 × 3 × 3 × 3 = 81', choices: [12, 27, 81, 64] },
  { id: 3, expression: '5²', base: 5, exp: 2, correctAnswer: 25, expansion: '5 × 5 = 25', choices: [10, 20, 25, 125] },
  { id: 4, expression: '10³', base: 10, exp: 3, correctAnswer: 1000, expansion: '10 × 10 × 10 = 1.000', choices: [30, 100, 300, 1000] },
];

export const Slide5PracticeValues: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const handleSelect = (itemId: number, choice: number) => {
    const item = ITEMS.find((i) => i.id === itemId);
    if (!item) return;

    if (choice === item.correctAnswer) {
      soundFx.playCorrect();
    } else {
      soundFx.playWrong();
    }

    setSelectedAnswers((prev) => ({
      ...prev,
      [itemId]: choice,
    }));
  };

  const resetAll = () => {
    soundFx.playClick();
    setSelectedAnswers({});
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = ITEMS.filter((item) => selectedAnswers[item.id] === item.correctAnswer).length;

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 bg-slate-900 text-slate-100 select-none overflow-y-auto justify-between">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Aktivitas Latihan Kilat</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Menentukan Nilai Bilangan Berpangkat</h2>
          </div>
        </div>

        {/* Score tracker */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Skor: <strong className="text-emerald-400 font-mono text-sm">{correctCount}</strong> / {ITEMS.length}</span>
          </div>

          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Ulangi</span>
          </button>
        </div>
      </div>

      {/* Main Grid: 4 Interactive Practice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-2">
        {ITEMS.map((item) => {
          const userChoice = selectedAnswers[item.id];
          const isAnswered = userChoice !== undefined;
          const isCorrect = userChoice === item.correctAnswer;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all ${
                isAnswered
                  ? isCorrect
                    ? 'bg-emerald-950/20 border-emerald-500/40 shadow-sm'
                    : 'bg-rose-950/20 border-rose-500/40 shadow-sm'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300">
                  Soal #{item.id}
                </span>

                <div className="font-mono text-2xl md:text-3xl font-black text-white">
                  {item.expression} = <span className="text-amber-400 font-normal">?</span>
                </div>
              </div>

              {/* Choices Buttons */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {item.choices.map((choice) => {
                  let btnStyle = 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700';

                  if (isAnswered) {
                    if (choice === item.correctAnswer) {
                      btnStyle = 'bg-emerald-600 text-white border-emerald-400 font-bold';
                    } else if (choice === userChoice) {
                      btnStyle = 'bg-rose-600 text-white border-rose-400 line-through';
                    } else {
                      btnStyle = 'bg-slate-900 text-slate-400 border-slate-800 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={choice}
                      disabled={isAnswered}
                      onClick={() => handleSelect(item.id, choice)}
                      className={`py-2 px-1 rounded-xl text-center font-mono text-sm md:text-base font-bold border transition-all cursor-pointer ${btnStyle}`}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>

              {/* Expansion & Explanation after answer */}
              {isAnswered && (
                <div
                  className={`p-2.5 rounded-xl text-xs flex items-center justify-between border animate-fadeIn ${
                    isCorrect
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isCorrect ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                    <span>{isCorrect ? 'Benar Sekali!' : 'Hati-hati! Bukan perkalian biasa.'}</span>
                  </div>
                  <span className="font-mono font-bold">{item.expansion}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tip Banner */}
      <div className="text-xs text-slate-300 bg-slate-950/60 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between">
        <span className="text-amber-400 font-medium">
          💡 Kesalahan umum: Siswa sering mengalikan basis dengan pangkat (misal 2³ dihitung 2 × 3 = 6). Yang benar 2³ = 2 × 2 × 2 = 8!
        </span>
        <span className="text-slate-400 font-mono hidden md:inline">SMPN 1 Wanaraya</span>
      </div>
    </div>
  );
};
