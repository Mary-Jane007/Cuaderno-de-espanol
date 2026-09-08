export type GrammarTable = {
  title: string;
  cells: string[];
};

export type VocabEntry = {
  es: string;
  en: string;
};

export type Upgrade = {
  basic: string;
  upgraded: string;
};

export type FinalPoint = {
  prompt: string;
  starter: string;
};

export type FillBlank = {
  prompt: string;
  answers: string[][];
};

export type TranslateItem = {
  en: string;
  answers: string[];
};

export type DayLesson = {
  day: number;
  date: string;
  isoDate: string;
  title: string;
  week: 1 | 2 | 3 | 4;
  isReview?: boolean;
  isFinal?: boolean;
  goals: string[];
  duolingoNote: string;
  ltNote: string;
  grammarTitle: string;
  grammarIntro: string;
  grammarTables: GrammarTable[];
  grammarExamples: string[];
  translatePractice: TranslateItem[];
  fillBlankTitle: string;
  fillBlank: FillBlank[];
  speakingQuestions: string[];
  dreamingNote: string;
  sdFocus: string;
  vocab: VocabEntry[];
  upgrades: Upgrade[];
  finalTopic: string;
  finalPoints: FinalPoint[];
};

export const PERSONS = [
  "yo",
  "tú",
  "él / ella / usted",
  "nosotros",
  "vosotros",
  "ellos / ellas / ustedes",
] as const;

export const WEEK_META: Record<
  1 | 2 | 3 | 4,
  { title: string; span: string; focus: string }
> = {
  1: {
    title: "Semana 1",
    span: "8–13 septiembre",
    focus: "Presente, gustar, preguntas y adjetivos",
  },
  2: {
    title: "Semana 2",
    span: "14–20 septiembre",
    focus: "Reflexivos, pretérito, imperfecto y lo/la/los/las",
  },
  3: {
    title: "Semana 3",
    span: "21–27 septiembre",
    focus: "Pronombres dobles, futuro, condicional e imperativo",
  },
  4: {
    title: "Semana 4",
    span: "28 septiembre – 6 octubre",
    focus: "Subjuntivo, conectores y examen final",
  },
};
