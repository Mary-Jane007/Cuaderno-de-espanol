export type DayProgress = {
  goals: boolean[];
  translations: string[];
  fillAnswers: string[][];
  notes: string;
  speakingDone: boolean[];
  finalNotes: string[];
  vocabKnown: boolean[];
  completed: boolean;
};

export type WorkbookState = {
  days: Record<string, DayProgress>;
};

const STORAGE_KEY = "spanish-workbook-v1";

export function emptyDayProgress(
  goalCount: number,
  translateCount: number,
  fillCounts: number[],
  speakingCount: number,
  finalCount: number,
  vocabCount: number,
): DayProgress {
  return {
    goals: Array.from({ length: goalCount }, () => false),
    translations: Array.from({ length: translateCount }, () => ""),
    fillAnswers: fillCounts.map((count) => Array.from({ length: count }, () => "")),
    notes: "",
    speakingDone: Array.from({ length: speakingCount }, () => false),
    finalNotes: Array.from({ length: finalCount }, () => ""),
    vocabKnown: Array.from({ length: vocabCount }, () => false),
    completed: false,
  };
}

export function loadState(): WorkbookState {
  if (typeof window === "undefined") return { days: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { days: {} };
    const parsed = JSON.parse(raw) as WorkbookState;
    return parsed.days ? parsed : { days: {} };
  } catch {
    return { days: {} };
  }
}

export function saveState(state: WorkbookState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function mergeDay(
  existing: DayProgress | undefined,
  fallback: DayProgress,
): DayProgress {
  if (!existing) return fallback;
  return {
    goals: padBool(existing.goals, fallback.goals.length),
    translations: padStr(existing.translations, fallback.translations.length),
    fillAnswers: fallback.fillAnswers.map((blanks, i) =>
      padStr(existing.fillAnswers?.[i] ?? [], blanks.length),
    ),
    notes: existing.notes ?? "",
    speakingDone: padBool(existing.speakingDone, fallback.speakingDone.length),
    finalNotes: padStr(existing.finalNotes, fallback.finalNotes.length),
    vocabKnown: padBool(existing.vocabKnown, fallback.vocabKnown.length),
    completed: Boolean(existing.completed),
  };
}

function padBool(values: boolean[] | undefined, length: number): boolean[] {
  const next = Array.from({ length }, () => false);
  (values ?? []).forEach((value, i) => {
    if (i < length) next[i] = Boolean(value);
  });
  return next;
}

function padStr(values: string[] | undefined, length: number): string[] {
  const next = Array.from({ length }, () => "");
  (values ?? []).forEach((value, i) => {
    if (i < length) next[i] = value ?? "";
  });
  return next;
}
