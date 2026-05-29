import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-white/10 bg-white/8 px-2.5 py-1 text-xs font-medium text-white/78 backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}
