import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: {
          duration: 0.2,
        },
      }}
      className={`
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}