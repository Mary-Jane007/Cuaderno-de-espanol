"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useWorkbook } from "@/lib/use-workbook";

export function WorkbookShell({ children }: { children: React.ReactNode }) {
  const { completedCount, totalDays, ready } = useWorkbook();
  const percent = ready ? Math.round((completedCount / totalDays) * 100) : 0;

  return (
    <div className="flex min-h-full flex-col">
      <header className="no-print sticky top-0 z-30 border-b border-border/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BookOpen className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="font-heading block truncate text-lg leading-tight italic">
                Cuaderno de español
              </span>
              <span className="text-muted-foreground block text-xs tracking-wide uppercase">
                8 Sept – 6 Oct 2026
              </span>
            </span>
          </Link>
          <div className="ml-auto hidden w-48 sm:block">
            <div className="text-muted-foreground mb-1 flex justify-between text-[11px] tracking-wide uppercase">
              <span>Progress</span>
              <span>
                {ready ? completedCount : "—"}/{totalDays}
              </span>
            </div>
            <Progress value={percent} className="gap-0" />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-10">
        {children}
      </main>
    </div>
  );
}
