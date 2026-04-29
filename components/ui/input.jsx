import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[52px] w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 text-[15px] text-ink outline-none transition-all placeholder:text-sm placeholder:text-ink-dim hover:border-white/15 focus:border-accent/60 focus:bg-accent/[0.04] focus:ring-2 focus:ring-accent/20",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
