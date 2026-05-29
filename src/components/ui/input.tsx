import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-md border border-white/10 bg-white/7 px-4 text-sm text-white shadow-sm transition placeholder:text-white/35 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/20",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
