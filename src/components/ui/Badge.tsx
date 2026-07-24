import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
        "border backdrop-blur-md",
        {
          "border-white/10 bg-white/5 text-slate-200":
            variant === "default",

          "border-green-400/20 bg-green-400/10 text-green-300":
            variant === "success",

          "border-yellow-400/20 bg-yellow-400/10 text-yellow-300":
            variant === "warning",
        },
        className
      )}
    >
      {children}
    </span>
  );
}