import { notFound } from "next/navigation";
import { DayWorkbook } from "@/components/workbook/day-workbook";
import { DAYS, getDay } from "@/lib/curriculum";

export function generateStaticParams() {
  return DAYS.map((day) => ({ day: String(day.day) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const lesson = getDay(Number(day));
  if (!lesson) return { title: "Day not found" };
  return {
    title: `Day ${lesson.day} — ${lesson.title}`,
    description: lesson.grammarIntro,
  };
}

export default async function DayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const lesson = getDay(Number(day));
  if (!lesson) notFound();
  return <DayWorkbook lesson={lesson} />;
}
