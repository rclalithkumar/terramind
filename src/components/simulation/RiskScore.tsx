import { motion } from "framer-motion";

interface RiskScoreProps {
  probability: number;
}

export default function RiskScore({
  probability,
}: RiskScoreProps) {
  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex justify-between">
        <span className="text-sm text-slate-400">
          Risk Score
        </span>

        <span className="font-semibold text-cyan-400">
          {probability}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${probability}%` }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-cyan-400"
        />
      </div>
    </div>
  );
}