import { WEEK_1 } from "@/lib/curriculum/week1";
import { WEEK_2 } from "@/lib/curriculum/week2";
import { WEEK_3 } from "@/lib/curriculum/week3";
import { WEEK_4 } from "@/lib/curriculum/week4";
import type { DayLesson } from "@/lib/types";

export const DAYS: DayLesson[] = [...WEEK_1, ...WEEK_2, ...WEEK_3, ...WEEK_4];

export const DAYS_BY_NUMBER = new Map(DAYS.map((day) => [day.day, day]));

export function getDay(day: number): DayLesson | undefined {
  return DAYS_BY_NUMBER.get(day);
}

export function getAdjacentDays(day: number): {
  prev: DayLesson | undefined;
  next: DayLesson | undefined;
} {
  const index = DAYS.findIndex((item) => item.day === day);
  return {
    prev: index > 0 ? DAYS[index - 1] : undefined,
    next: index >= 0 && index < DAYS.length - 1 ? DAYS[index + 1] : undefined,
  };
}

export function todayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
}

export function getTodayLesson(): DayLesson | undefined {
  const iso = todayIsoDate();
  return DAYS.find((day) => day.isoDate === iso);
}

export function formatLongDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function weekdayLetter(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, day)))
    .slice(0, 3);
}
