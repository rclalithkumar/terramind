import { useScenarioStore } from "@/store/scenarioStore";
import { Sparkles, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { parseScenario } from "@/utils/scenarioParser";

export default function ScenarioInput() {
  const {
  scenario,
  setScenario,
  parsedScenario,
  setParsedScenario,
  setParsing,
} = useScenarioStore();

  useEffect(() => {
  if (!scenario.trim()) {
    setParsedScenario(null);
    return;
  }

  setParsing(true);

  const timer = setTimeout(() => {
    const parsed = parseScenario(scenario);

    setParsedScenario(parsed);

    setParsing(false);
  }, 700);

  return () => clearTimeout(timer);
}, [scenario, setParsedScenario, setParsing]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="
        mt-10
        w-full
        max-w-3xl
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
      "
    >
      <div className="flex items-start gap-4 p-5">
        <Sparkles className="mt-1 h-5 w-5 text-indigo-400" />

        <textarea
          rows={3}
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          placeholder="Describe a future scenario..."
          className="
            w-full
            resize-none
            bg-transparent
            outline-none
            text-white
            placeholder:text-slate-500
          "
        />

        {parsedScenario && (
  <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-3">

    {parsedScenario.location && (
      <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs">
        📍 {parsedScenario.location}
      </span>
    )}

    {parsedScenario.event && (
      <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs">
        🌧 {parsedScenario.event}
      </span>
    )}

    {parsedScenario.timeframe && (
      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs">
        📅 {parsedScenario.timeframe}
      </span>
    )}

    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs">
      🧠 {parsedScenario.confidence}% confidence
    </span>

  </div>
)}

        <div className="border-t border-white/10 px-5 py-3">

            <button
                onClick={() =>
                setScenario(
                    "What if Bengaluru receives 300 mm rainfall tomorrow?"
                )
                }
                className="
                rounded-full
                border
                border-white/10
                px-3
                py-1
                text-xs
                text-slate-400
                transition
                hover:border-indigo-400
                hover:text-white
                "
            >
                Try an example
            </button>

            </div>
      </div>
      


      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
        <div className="flex flex-col">
            <span className="text-sm text-slate-400">
                Ctrl + Enter to simulate
            </span>

            <span className="text-xs text-slate-500">
                {scenario.length}/500
            </span>
            </div>

        <button disabled={!scenario.trim()}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-indigo-500
            px-4
            py-2
            text-sm
            transition

            disabled:cursor-not-allowed
            disabled:opacity-40

            hover:bg-indigo-400
            "
        >
          Simulate

          <Send size={16} />
        </button>
      </div>
    </motion.div>
  );
}