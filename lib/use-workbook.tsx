"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  emptyDayProgress,
  loadState,
  mergeDay,
  saveState,
  type DayProgress,
  type WorkbookState,
} from "@/lib/progress";
import { blankCount } from "@/lib/check-answer";
import type { DayLesson } from "@/lib/types";
import { DAYS } from "@/lib/curriculum";

const EMPTY_STATE: WorkbookState = { days: {} };
const listeners = new Set<() => void>();
let memory: WorkbookState = EMPTY_STATE;

if (typeof window !== "undefined") {
  memory = loadState();
}

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): WorkbookState {
  return memory;
}

function getServerSnapshot(): WorkbookState {
  return EMPTY_STATE;
}

function write(next: WorkbookState) {
  memory = next;
  if (typeof window !== "undefined") saveState(next);
  emit();
}

function fallbackFor(lesson: DayLesson): DayProgress {
  return emptyDayProgress(
    lesson.goals.length,
    lesson.translatePractice.length,
    lesson.fillBlank.map((item) => blankCount(item.prompt)),
    lesson.speakingQuestions.length,
    lesson.finalPoints.length,
    lesson.vocab.length,
  );
}

type WorkbookContextValue = {
  ready: boolean;
  state: WorkbookState;
  updateDay: (day: number, patch: Partial<DayProgress>) => void;
  dayProgress: (lesson: DayLesson) => DayProgress;
  completedCount: number;
  totalDays: number;
};

const WorkbookContext = createContext<WorkbookContextValue | null>(null);

export function WorkbookProvider({ children }: { children: React.ReactNode }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const updateDay = useCallback((day: number, patch: Partial<DayProgress>) => {
    const lesson = DAYS.find((item) => item.day === day);
    if (!lesson) return;
    const current = getSnapshot();
    const merged = mergeDay(current.days[String(day)], fallbackFor(lesson));
    write({
      days: {
        ...current.days,
        [String(day)]: { ...merged, ...patch },
      },
    });
  }, []);

  const dayProgress = useCallback(
    (lesson: DayLesson): DayProgress =>
      mergeDay(state.days[String(lesson.day)], fallbackFor(lesson)),
    [state.days],
  );

  const completedCount = useMemo(
    () => DAYS.filter((lesson) => state.days[String(lesson.day)]?.completed).length,
    [state.days],
  );

  const value = useMemo(
    () => ({
      ready: true,
      state,
      updateDay,
      dayProgress,
      completedCount,
      totalDays: DAYS.length,
    }),
    [state, updateDay, dayProgress, completedCount],
  );

  return <WorkbookContext.Provider value={value}>{children}</WorkbookContext.Provider>;
}

export function useWorkbook() {
  const value = useContext(WorkbookContext);
  if (!value) {
    throw new Error("useWorkbook must be used inside WorkbookProvider");
  }
  return value;
}
