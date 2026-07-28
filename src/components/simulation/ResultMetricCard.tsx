import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ResultMetricCardProps {
  title: string;
  value: ReactNode;
  accent?: string;
}

export default function ResultMetricCard({
  title,
  value,
  accent = "text-cyan-400",
}: ResultMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
    >
      <p className="text-xs uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <p className={`mt-2 text-2xl font-bold ${accent}`}>
        {value}
      </p>
    </motion.div>
  );
}