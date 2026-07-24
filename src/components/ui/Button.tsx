import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full px-6 py-3 font-medium transition-all duration-300",
        "active:scale-95",
        {
          "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/30":
            variant === "primary",

          "bg-white/10 text-white backdrop-blur-md hover:bg-white/20":
            variant === "secondary",

          "text-slate-300 hover:text-white":
            variant === "ghost",
        },
        className
      )}
    >
      {children}
    </button>
  );
}