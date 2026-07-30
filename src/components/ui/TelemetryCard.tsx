import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TelemetryCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  accent?: "cyan" | "green" | "red" | "yellow";
}

const accentStyles = {
  cyan: {
    border: "border-cyan-400/30",
    glow: "shadow-[0_0_25px_rgba(34,211,238,0.25)]",
    icon: "text-cyan-300",
    value: "text-cyan-200",
  },
  green: {
    border: "border-emerald-400/30",
    glow: "shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    icon: "text-emerald-300",
    value: "text-emerald-200",
  },
  red: {
    border: "border-red-400/30",
    glow: "shadow-[0_0_25px_rgba(239,68,68,0.25)]",
    icon: "text-red-300",
    value: "text-red-200",
  },
  yellow: {
    border: "border-amber-400/30",
    glow: "shadow-[0_0_25px_rgba(245,158,11,0.25)]",
    icon: "text-amber-300",
    value: "text-amber-200",
  },
};

export default function TelemetryCard({
  icon: Icon,
  label,
  value,
  accent = "cyan",
}: TelemetryCardProps) {
  const style = accentStyles[accent];

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        ${style.border}
        bg-white/5
        backdrop-blur-xl
        p-4
        ${style.glow}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="relative flex items-center gap-3">
        <div className="rounded-xl bg-white/5 p-3">
          <Icon
            size={20}
            className={style.icon}
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {label}
          </p>

          <p className={`mt-1 text-xl font-bold ${style.value}`}>
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}