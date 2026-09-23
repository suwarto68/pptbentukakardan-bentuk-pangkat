export interface SlideMeta {
  id: number;
  title: string;
  subtitle: string;
  category: 'Pendahuluan' | 'Konsep Eksponen' | 'Sifat Eksponen' | 'Latihan' | 'Konsep Bentuk Akar' | 'Operasi Akar' | 'Aplikasi & HOTS' | 'Penutup';
  notes: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  stimulus?: string;
  stimulusType?: 'text' | 'table' | 'diagram' | 'code';
  stimulusData?: any;
  options: { key: string; label: string; isCorrect: boolean }[];
  explanation: string;
  hint: string;
  difficulty?: 'Dasar' | 'Sedang' | 'Tinggi (HOTS)';
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  stimulus?: string;
  isTrue: boolean;
  explanation: string;
}

export interface ReasoningQuestion {
  id: number;
  title: string;
  scenario: string;
  question: string;
  options: { key: string; text: string; isBest: boolean; scoreReason: string }[];
  modelAnswer: string;
}
