import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-36 w-full resize-none rounded-md border border-white/10 bg-white/7 px-4 py-3 text-sm text-white shadow-sm transition placeholder:text-white/35 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/20",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
