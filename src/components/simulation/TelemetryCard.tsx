import { motion } from "framer-motion";
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

interface Props {
  title: string;
  value: number | string;
}

export default function TelemetryCard({
  title,
  value,
}: Props) {
  const isNumber = typeof value === "number";

  const animatedValue = useAnimatedNumber(
    isNumber ? value : 0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      className="
        rounded-2xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        p-4
        transition-all
        duration-300
        hover:border-cyan-400/50
      "
    >
      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-2xl font-bold text-white">
        {isNumber
          ? animatedValue.toLocaleString()
          : value}
      </p>
    </motion.div>
  );
}