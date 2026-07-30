import { motion } from "framer-motion";
import { PANEL_ANIMATION } from "@/theme/motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: Props) {

  return (

    <motion.div

      {...PANEL_ANIMATION}

      className={`
      relative
      overflow-hidden
      rounded-3xl

      border border-white/10

      bg-white/4]

      backdrop-blur-2xl

      shadow-[0_20px_60px_rgba(0,0,0,.45)]

      ${className}
      `}
    >

      {/* top light */}
      <div
        className="
        absolute
        left-0
        top-0
        h-px
        w-full
        bg-linear-to-r
        from-transparent
        via-cyan-400/60
        to-transparent
        "
      />

      {/* corner glow */}
      <div
        className="
        absolute
        -right-20
        -top-20
        h-40
        w-40
        rounded-full
        bg-cyan-500/10
        blur-3xl
        "
      />

      {children}

    </motion.div>

  );

}