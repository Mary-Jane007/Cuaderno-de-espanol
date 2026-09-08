"use client";

import Link from "next/link";
import { ArrowRight, BookMarked, Check, Headphones, Mic, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DAYS, getTodayLesson, weekdayLetter } from "@/lib/curriculum";
import { WEEK_META } from "@/lib/types";
import { useWorkbook } from "@/lib/use-workbook";
import { cn } from "@/lib/utils";

const METHOD = [
  {
    icon: Pencil,
    title: "Duolingo + Language Transfer",
    body: "Do the day's unit out loud. Pause before every answer. Change the subject (yo → tú → nosotros) before moving on.",
  },
  {
    icon: BookMarked,
    title: "This workbook",
    body: "Read the grammar, write the translations and blanks, then check yourself. Don't peek until you've tried.",
  },
  {
    icon: Mic,
    title: "Speak it",
    body: "Answer every speaking prompt out loud. Finish with the day's monologue — five to twenty minutes, no English.",
  },
  {
    icon: Headphones,
    title: "Dreaming Spanish + SpanishDict",
    body: "Watch one video on today's theme. Then drill the vocab and sentence upgrades until they feel automatic.",
  },
];

export function HomeView() {
  const { dayProgress, ready, completedCount, totalDays } = useWorkbook();
  const today = getTodayLesson();

  return (
    <div className="space-y-10">
      <section className="workbook-page overflow-hidden rounded-3xl px-6 py-8 sm:px-10 sm:py-12">
        <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
          29-day speaking workbook
        </p>
        <h1 className="font-heading mt-3 max-w-3xl text-4xl leading-[1.12] text-balance italic sm:text-5xl">
          From daily routines to a 20-minute unscripted conversation.
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
          Days 2–30, 8 September to 6 October 2026. Each page is a full lesson: grammar,
          drills with answer keys, speaking prompts, vocab, and a final monologue. Your
          writing stays in this browser.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href={today ? `/day/${today.day}` : "/day/2"}
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            {today ? `Today: Day ${today.day}` : "Open Day 2"}
            <ArrowRight />
          </Link>
          <p className="text-muted-foreground text-sm">
            {ready ? `${completedCount} of ${totalDays} days marked complete` : "Loading progress…"}
          </p>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl italic">The month</h2>
            <p className="text-muted-foreground text-sm">
              September 8 starts on a Tuesday. Open any day; come back to where you left off.
            </p>
          </div>
        </div>
        <div className="workbook-page rounded-2xl p-4 sm:p-6">
          <div className="text-muted-foreground mb-3 grid grid-cols-7 gap-1 text-center text-[11px] tracking-wider uppercase">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((label) => (
              <div key={label}>{label}</div>
            ))}
          </div>
          <CalendarGrid ready={ready} dayProgress={dayProgress} todayDay={today?.day} />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {METHOD.map((item) => (
          <Card key={item.title} className="bg-card/80">
            <CardHeader className="flex flex-row items-start gap-3">
              <span className="bg-accent text-accent-foreground mt-0.5 flex size-9 items-center justify-center rounded-full">
                <item.icon className="size-4" />
              </span>
              <div>
                <CardTitle>{item.title}</CardTitle>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.body}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        {([1, 2, 3, 4] as const).map((week) => {
          const lessons = DAYS.filter((day) => day.week === week);
          const meta = WEEK_META[week];
          return (
            <Card key={week}>
              <CardHeader className="border-b">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <CardTitle className="font-heading text-xl italic">{meta.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{meta.span}</p>
                </div>
                <p className="text-muted-foreground text-sm">{meta.focus}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="divide-y divide-border/70">
                  {lessons.map((lesson) => {
                    const progress = dayProgress(lesson);
                    return (
                      <li key={lesson.day}>
                        <Link
                          href={`/day/${lesson.day}`}
                          className="hover:bg-muted/50 flex items-center gap-3 rounded-lg px-1 py-2.5 transition-colors"
                        >
                          <span
                            className={cn(
                              "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                              progress.completed
                                ? "bg-primary text-primary-foreground"
                                : today?.day === lesson.day
                                  ? "bg-accent text-accent-foreground ring-2 ring-primary/40"
                                  : "bg-secondary text-secondary-foreground",
                            )}
                          >
                            {progress.completed ? <Check className="size-3.5" /> : lesson.day}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium">{lesson.title}</span>
                            <span className="text-muted-foreground text-xs">
                              {weekdayLetter(lesson.isoDate)} {lesson.date}
                            </span>
                          </span>
                          <span className="hidden shrink-0 sm:flex">
                            {lesson.isFinal ? (
                              <Badge>Final exam</Badge>
                            ) : lesson.isReview ? (
                              <Badge variant="secondary">Review</Badge>
                            ) : null}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}

function CalendarGrid({
  ready,
  dayProgress,
  todayDay,
}: {
  ready: boolean;
  dayProgress: ReturnType<typeof useWorkbook>["dayProgress"];
  todayDay?: number;
}) {
  const byIso = new Map(DAYS.map((day) => [day.isoDate, day]));
  const cells: { iso: string; inMonth: boolean }[] = [];
  const start = new Date(Date.UTC(2026, 8, 1));
  const end = new Date(Date.UTC(2026, 9, 6));
  const weekday = start.getUTCDay();
  const mondayOffset = (weekday + 6) % 7;
  for (let i = 0; i < mondayOffset; i += 1) {
    cells.push({ iso: `pad-${i}`, inMonth: false });
  }
  const cursor = new Date(start);
  while (cursor <= end) {
    const iso = cursor.toISOString().slice(0, 10);
    cells.push({ iso, inMonth: true });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return (
    <div className="grid grid-cols-7 gap-1.5">
      {cells.map((cell) => {
        if (!cell.inMonth) {
          return <div key={cell.iso} className="aspect-square sm:min-h-16" />;
        }
        const dateNum = Number(cell.iso.slice(-2));
        const lesson = byIso.get(cell.iso);
        if (!lesson) {
          return (
            <div
              key={cell.iso}
              className="text-muted-foreground/50 flex aspect-square min-h-0 flex-col items-center justify-center rounded-xl text-xs sm:min-h-16"
            >
              {dateNum}
            </div>
          );
        }
        const done = ready && dayProgress(lesson).completed;
        return (
          <Link
            key={cell.iso}
            href={`/day/${lesson.day}`}
            className={cn(
              "flex aspect-square min-h-0 flex-col items-center justify-center rounded-xl border text-center transition-colors sm:min-h-16",
              done
                ? "border-primary/30 bg-primary text-primary-foreground"
                : todayDay === lesson.day
                  ? "border-primary bg-accent"
                  : "border-border/80 bg-card hover:border-primary/40 hover:bg-accent/60",
            )}
          >
            <span className="text-[10px] tracking-wide uppercase opacity-70">Day {lesson.day}</span>
            <span className="font-heading text-lg leading-none sm:text-xl">{dateNum}</span>
          </Link>
        );
      })}
    </div>
  );
}
