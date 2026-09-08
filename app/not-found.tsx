import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="workbook-page rounded-3xl px-8 py-16 text-center">
      <p className="text-primary text-sm tracking-widest uppercase">Missing page</p>
      <h1 className="font-heading mt-2 text-3xl italic">That day isn’t in the workbook.</h1>
      <p className="text-muted-foreground mx-auto mt-3 max-w-md text-sm">
        The course runs from Day 2 (8 September) through Day 30 (6 October).
      </p>
      <Link href="/" className={cn(buttonVariants(), "mt-6")}>
        Back to the calendar
      </Link>
    </div>
  );
}
