"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { checkAnswer, type CheckResult } from "@/lib/check-answer";
import { formatLongDate, getAdjacentDays } from "@/lib/curriculum";
import type { DayProgress } from "@/lib/progress";
import type { DayLesson } from "@/lib/types";
import { PERSONS, WEEK_META } from "@/lib/types";
import { useWorkbook } from "@/lib/use-workbook";
import { cn } from "@/lib/utils";

export function DayWorkbook({ lesson }: { lesson: DayLesson }) {
  const { dayProgress, updateDay, ready } = useWorkbook();
  const progress = dayProgress(lesson);
  const { prev, next } = getAdjacentDays(lesson.day);
  const week = WEEK_META[lesson.week];

  const setProgress = (patch: Partial<typeof progress>) => {
    updateDay(lesson.day, patch);
  };

  return (
    <article className="workbook-page space-y-10 rounded-3xl px-5 py-7 sm:px-10 sm:py-12">
      <header className="space-y-4">
        <div className="no-print flex items-center justify-between gap-2">
          {prev ? (
            <Link
              href={`/day/${prev.day}`}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1")}
            >
              <ChevronLeft /> Day {prev.day}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/day/${next.day}`}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1")}
            >
              Day {next.day} <ChevronRight />
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Day {lesson.day}</Badge>
          <Badge variant="outline">{week.title}</Badge>
          {lesson.isFinal ? <Badge>Final exam</Badge> : null}
          {lesson.isReview && !lesson.isFinal ? <Badge>Review</Badge> : null}
        </div>
        <p className="text-muted-foreground text-sm tracking-wide uppercase">
          {formatLongDate(lesson.isoDate)}
        </p>
        <h1 className="font-heading text-3xl leading-tight text-balance italic sm:text-4xl">
          {lesson.title}
        </h1>
      </header>

      <Section n="01" title="Today's goals">
        <ul className="space-y-3">
          {lesson.goals.map((goal, i) => (
            <li key={goal} className="flex items-start gap-3">
              <Checkbox
                checked={Boolean(progress.goals[i])}
                onCheckedChange={(checked) => {
                  const goals = [...progress.goals];
                  goals[i] = checked === true;
                  setProgress({ goals });
                }}
                className="mt-0.5"
              />
              <span className={cn("text-sm leading-relaxed", progress.goals[i] && "text-muted-foreground line-through")}>
                {goal}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="02" title="Method for today">
        <dl className="grid gap-4 sm:grid-cols-2">
          <MethodNote label="Duolingo" body={lesson.duolingoNote} />
          <MethodNote label="Language Transfer" body={lesson.ltNote} />
          <MethodNote label="Dreaming Spanish" body={lesson.dreamingNote} />
          <MethodNote label="SpanishDict" body={lesson.sdFocus} />
        </dl>
      </Section>

      <Section n="03" title={lesson.grammarTitle}>
        <p className="text-muted-foreground mb-5 max-w-3xl leading-relaxed">
          {lesson.grammarIntro}
        </p>
        <div className="space-y-4">
          {lesson.grammarTables.map((table) => (
            <div key={table.title} className="bg-muted/50 rounded-2xl p-4">
              <h3 className="font-heading mb-3 text-lg italic">{table.title}</h3>
              {table.cells.length === 6 && isConjugationTable(table.cells) ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {table.cells.map((cell, i) => (
                    <div
                      key={`${table.title}-${i}`}
                      className="flex items-baseline justify-between gap-3 border-b border-dashed border-rule/80 py-1.5 last:border-0 sm:last:border-b"
                    >
                      <span className="text-muted-foreground text-xs tracking-wide uppercase">
                        {PERSONS[i]}
                      </span>
                      <span className="font-medium">{cell}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {table.cells.map((cell, i) => (
                    <li key={`${table.title}-cell-${i}`} className="text-sm leading-relaxed">
                      {cell}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <h3 className="font-heading mt-6 mb-3 text-lg italic">Examples</h3>
        <ul className="space-y-2">
          {lesson.grammarExamples.map((example) => (
            <li key={example} className="border-rule/70 border-l-2 pl-3 text-sm leading-relaxed">
              {example}
            </li>
          ))}
        </ul>
      </Section>

      <TranslateSection
        lesson={lesson}
        progress={progress}
        ready={ready}
        onChange={(translations) => setProgress({ translations })}
      />

      <FillBlankSection
        lesson={lesson}
        progress={progress}
        ready={ready}
        onChange={(fillAnswers) => setProgress({ fillAnswers })}
      />

      <Section n="06" title="Vocabulario">
        <ul className="grid gap-2 sm:grid-cols-2">
          {lesson.vocab.map((item, i) => (
            <li key={item.es}>
              <button
                type="button"
                onClick={() => {
                  const vocabKnown = [...progress.vocabKnown];
                  vocabKnown[i] = !vocabKnown[i];
                  setProgress({ vocabKnown });
                }}
                className={cn(
                  "flex w-full items-start justify-between gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors",
                  progress.vocabKnown[i]
                    ? "border-primary/30 bg-accent/70"
                    : "border-border bg-card hover:bg-muted/60",
                )}
              >
                <span>
                  <span className="block font-medium">{item.es}</span>
                  <span className="text-muted-foreground text-sm">{item.en}</span>
                </span>
                {progress.vocabKnown[i] ? <Check className="text-primary mt-0.5 size-4 shrink-0" /> : null}
              </button>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="07" title="Upgrade the sentence">
        <div className="space-y-4">
          {lesson.upgrades.map((item) => (
            <div key={item.basic} className="rounded-2xl border border-border/80 p-4">
              <p className="text-muted-foreground text-sm">{item.basic}</p>
              <p className="mt-2 text-sm leading-relaxed font-medium">{item.upgraded}</p>
            </div>
          ))}
        </div>
      </Section>

      <SpeakingSection
        lesson={lesson}
        progress={progress}
        onChange={(speakingDone) => setProgress({ speakingDone })}
      />

      <Section n="09" title={lesson.finalTopic}>
        <p className="text-muted-foreground mb-4 text-sm">
          Speak from these beats. Write a few notes if you want, then put the notes away and talk.
        </p>
        <SpeakingTimer key={lesson.day} minutes={lesson.isFinal ? 20 : lesson.isReview ? 12 : 6} />
        <ol className="mt-5 space-y-4">
          {lesson.finalPoints.map((point, i) => (
            <li key={point.prompt} className="space-y-2">
              <p className="text-sm font-medium">
                {i + 1}. {point.prompt}
              </p>
              <Textarea
                value={progress.finalNotes[i] ?? ""}
                onChange={(event) => {
                  const finalNotes = [...progress.finalNotes];
                  finalNotes[i] = event.target.value;
                  setProgress({ finalNotes });
                }}
                placeholder={point.starter}
                className="min-h-20 bg-transparent"
              />
            </li>
          ))}
        </ol>
      </Section>

      <Section n="10" title="Notes">
        <Textarea
          value={progress.notes}
          onChange={(event) => setProgress({ notes: event.target.value })}
          placeholder="Mistakes to fix, words you kept translating, anything to revisit tomorrow…"
          className="min-h-28 bg-transparent"
        />
      </Section>

      <Separator />

      <div className="no-print flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="button"
          variant={progress.completed ? "secondary" : "default"}
          onClick={() => setProgress({ completed: !progress.completed })}
        >
          {progress.completed ? "Completed — tap to undo" : "Mark this day complete"}
        </Button>
        <div className="flex gap-2">
          {prev ? (
            <Link href={`/day/${prev.day}`} className={buttonVariants({ variant: "outline" })}>
              Previous
            </Link>
          ) : null}
          {next ? (
            <Link href={`/day/${next.day}`} className={buttonVariants()}>
              Next day
            </Link>
          ) : (
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              Back to calendar
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function isConjugationTable(cells: string[]): boolean {
  return cells.every((cell) => !cell.includes("→") && cell.split(/\s+/).length <= 4);
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-baseline gap-3">
        <span className="text-primary font-heading text-sm italic">{n}</span>
        <h2 className="font-heading text-2xl italic">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function MethodNote({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-rule p-4">
      <dt className="text-primary text-xs font-semibold tracking-wider uppercase">{label}</dt>
      <dd className="mt-1.5 text-sm leading-relaxed">{body}</dd>
    </div>
  );
}

function TranslateSection({
  lesson,
  progress,
  ready,
  onChange,
}: {
  lesson: DayLesson;
  progress: DayProgress;
  ready: boolean;
  onChange: (translations: string[]) => void;
}) {
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    lesson.translatePractice.map(() => false),
  );
  const [checked, setChecked] = useState(false);

  return (
    <Section n="04" title="Translate into Spanish">
      <ol className="space-y-5">
        {lesson.translatePractice.map((item, i) => {
          const result = checked
            ? checkAnswer(progress.translations[i] ?? "", item.answers)
            : "empty";
          return (
            <li key={item.en} className="space-y-2">
              <p className="text-sm font-medium">{i + 1}. {item.en}</p>
              <input
                value={progress.translations[i] ?? ""}
                onChange={(event) => {
                  const translations = [...progress.translations];
                  translations[i] = event.target.value;
                  onChange(translations);
                  setChecked(false);
                }}
                className={cn(
                  "blank-input w-full max-w-none text-left",
                  result === "correct" && "border-primary",
                  result === "incorrect" && "border-destructive",
                )}
                placeholder="Escribe aquí…"
                autoComplete="off"
                spellCheck
              />
              {checked ? <ResultLine result={result} /> : null}
              {revealed[i] ? (
                <p className="text-muted-foreground text-sm">
                  {item.answers[0]}
                  {item.answers.length > 1 ? " (other versions accepted)" : ""}
                </p>
              ) : null}
              <button
                type="button"
                className="text-primary inline-flex items-center gap-1 text-xs font-medium"
                onClick={() =>
                  setRevealed((current) => {
                    const next = [...current];
                    next[i] = !next[i];
                    return next;
                  })
                }
              >
                <Eye className="size-3.5" />
                {revealed[i] ? "Hide answer" : "Show answer"}
              </button>
            </li>
          );
        })}
      </ol>
      <div className="mt-5 flex gap-2">
        <Button type="button" size="sm" onClick={() => setChecked(true)} disabled={!ready}>
          Check translations
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => {
            onChange(lesson.translatePractice.map(() => ""));
            setChecked(false);
            setRevealed(lesson.translatePractice.map(() => false));
          }}
        >
          <RotateCcw />
          Clear
        </Button>
      </div>
    </Section>
  );
}

function FillBlankSection({
  lesson,
  progress,
  ready,
  onChange,
}: {
  lesson: DayLesson;
  progress: DayProgress;
  ready: boolean;
  onChange: (fillAnswers: string[][]) => void;
}) {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  const results = useMemo(() => {
    if (!checked) return [];
    return lesson.fillBlank.map((item, i) =>
      item.answers.map((accepted, blankIndex) =>
        checkAnswer(progress.fillAnswers[i]?.[blankIndex] ?? "", accepted),
      ),
    );
  }, [checked, lesson.fillBlank, progress.fillAnswers]);

  return (
    <Section n="05" title={lesson.fillBlankTitle}>
      <ol className="space-y-4">
        {lesson.fillBlank.map((item, i) => {
          const parts = item.prompt.split("____");
          return (
            <li key={item.prompt} className="text-sm leading-8">
              <span className="text-muted-foreground mr-2 font-medium">{i + 1}.</span>
              {parts.map((part, partIndex) => (
                <span key={`${item.prompt}-${partIndex}`}>
                  {part}
                  {partIndex < parts.length - 1 ? (
                    <input
                      value={progress.fillAnswers[i]?.[partIndex] ?? ""}
                      onChange={(event) => {
                        const fillAnswers = progress.fillAnswers.map((row) => [...row]);
                        if (!fillAnswers[i]) fillAnswers[i] = item.answers.map(() => "");
                        fillAnswers[i][partIndex] = event.target.value;
                        onChange(fillAnswers);
                        setChecked(false);
                      }}
                      className={cn(
                        "blank-input mx-1",
                        results[i]?.[partIndex] === "correct" && "border-b-primary",
                        results[i]?.[partIndex] === "close" && "border-b-amber-700",
                        results[i]?.[partIndex] === "incorrect" && "border-b-destructive",
                      )}
                      aria-label={`Blank ${partIndex + 1}`}
                      autoComplete="off"
                    />
                  ) : null}
                </span>
              ))}
              {show ? (
                <span className="text-muted-foreground ml-2 text-xs">
                  ({item.answers.map((accepted) => accepted[0]).join(" / ")})
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button type="button" size="sm" onClick={() => setChecked(true)} disabled={!ready}>
          Check blanks
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={() => setShow((value) => !value)}>
          <Eye />
          {show ? "Hide keys" : "Show keys"}
        </Button>
      </div>
    </Section>
  );
}

function SpeakingSection({
  lesson,
  progress,
  onChange,
}: {
  lesson: DayLesson;
  progress: DayProgress;
  onChange: (speakingDone: boolean[]) => void;
}) {
  return (
    <Section n="08" title="Speak out loud">
      <p className="text-muted-foreground mb-4 text-sm">
        Answer in Spanish. Tick a question once you have said a full sentence — not a word.
      </p>
      <ol className="space-y-2">
        {lesson.speakingQuestions.map((question, i) => (
          <li key={question} className="flex items-start gap-3 rounded-xl px-1 py-1.5">
            <Checkbox
              checked={Boolean(progress.speakingDone[i])}
              onCheckedChange={(checked) => {
                const speakingDone = [...progress.speakingDone];
                speakingDone[i] = checked === true;
                onChange(speakingDone);
              }}
              className="mt-0.5"
            />
            <span className="text-sm leading-relaxed">{question}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function SpeakingTimer({ minutes }: { minutes: number }) {
  const total = minutes * 60;
  const [left, setLeft] = useState(total);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setLeft((value) => {
        if (value <= 1) {
          setRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div className="bg-muted/60 flex flex-wrap items-center gap-3 rounded-2xl px-4 py-3">
      <p className="font-heading text-2xl tabular-nums italic">
        {mm}:{ss}
      </p>
      <p className="text-muted-foreground text-sm">{minutes}-minute speaking block</p>
      <div className="ml-auto flex gap-2">
        <Button
          type="button"
          size="sm"
          variant={running ? "secondary" : "default"}
          onClick={() => setRunning((value) => !value)}
        >
          {running ? "Pause" : left === 0 ? "Done" : "Start"}
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => {
            setRunning(false);
            setLeft(total);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

function ResultLine({ result }: { result: CheckResult }) {
  if (result === "empty") {
    return <p className="text-muted-foreground text-xs">Empty — try a sentence first.</p>;
  }
  if (result === "correct") {
    return <p className="text-primary text-xs">Correct.</p>;
  }
  if (result === "close") {
    return <p className="text-xs text-amber-800">Close — check accents and punctuation.</p>;
  }
  return <p className="text-destructive text-xs">Not quite. Try again, or reveal the key.</p>;
}
