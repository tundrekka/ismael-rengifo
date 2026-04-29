import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-[15px] text-ink outline-none transition-all placeholder:text-ink-dim hover:border-white/15 focus:border-accent/60 focus:bg-accent/[0.04] focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
