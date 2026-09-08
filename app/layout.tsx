import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WorkbookShell } from "@/components/workbook/shell";
import { WorkbookProvider } from "@/lib/use-workbook";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cuaderno de español — 29-day speaking workbook",
  description:
    "A daily Spanish speaking workbook from 8 September to 6 October 2026. Grammar, drills, speaking prompts, and progress tracking for Days 2–30.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${figtree.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <WorkbookProvider>
            <WorkbookShell>{children}</WorkbookShell>
          </WorkbookProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
