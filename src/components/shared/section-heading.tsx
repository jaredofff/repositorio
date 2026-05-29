import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("gsap-reveal max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "mb-4 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100",
          align === "center" && "justify-center",
        )}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {body}
      </p>
    </div>
  );
}
