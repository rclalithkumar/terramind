import { motion } from "framer-motion";
import { useEffect } from "react";
import { useScenarioStore } from "@/store/scenarioStore";
import GlassPanel from "@/components/ui/GlassPanel";
export default function Timeline() {
  const simulationResult = useScenarioStore(
    (state) => state.simulationResult
  );
  const currentStep = useScenarioStore(
    (state) => state.currentTimelineStep
  );
  const setCurrentTimelineStep = useScenarioStore(
    (state) => state.setCurrentTimelineStep
  );
  const isTimelinePlaying = useScenarioStore(
    (state) => state.isTimelinePlaying
  );
  const setTimelinePlaying = useScenarioStore(
    (state) => state.setTimelinePlaying
  );
  const timelineProgress = useScenarioStore(
    (state) => state.timelineProgress
  );
  const setTimelineProgress = useScenarioStore(
    (state) => state.setTimelineProgress
  );
  useEffect(() => {
    if (!simulationResult) return;

    setCurrentTimelineStep(0);

    setTimelineProgress(
      100 / simulationResult.timeline.length
    );
    setTimelinePlaying(true);
  }, [
    simulationResult,
    setCurrentTimelineStep,
    setTimelineProgress,
    setTimelinePlaying,
  ]);

  useEffect(() => {
    if (!simulationResult) return;

    if (!isTimelinePlaying) return;

    if (
      currentStep >=
      simulationResult.timeline.length - 1
    ) {
      setTimelinePlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      const nextStep = currentStep + 1;

      setCurrentTimelineStep(nextStep);

      setTimelineProgress(
        ((nextStep + 1) /
          simulationResult.timeline.length) *
          100
      );
    }, 1200);

    return () => clearTimeout(timer);
  }, [
    currentStep,
    simulationResult,
    isTimelinePlaying,
    setCurrentTimelineStep,
    setTimelinePlaying,
    setTimelineProgress,
  ]);

  if (!simulationResult) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-lg font-semibold text-white">
          Simulation Timeline
        </h3>

        <p className="mt-3 text-sm text-slate-400">
          Run a simulation to generate a timeline.
        </p>
      </div>
    );
  }

  return (
    <GlassPanel className="flex h-full flex-col p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Simulation Timeline
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isTimelinePlaying
              ? "bg-cyan-500/20 text-cyan-300"
              : "bg-emerald-500/20 text-emerald-300"
          }`}
        >
          {isTimelinePlaying ? "Running" : "Completed"}
        </span>
      </div>

      {/* Controls */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => setTimelinePlaying(true)}
            className="rounded-lg bg-cyan-500/20 px-3 py-2 text-cyan-300 transition hover:bg-cyan-500/30"
          >
            ▶
          </button>

          <button
            onClick={() => setTimelinePlaying(false)}
            className="rounded-lg bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
          >
            ⏸
          </button>

          <button
            onClick={() => {
              setCurrentTimelineStep(0);

              setTimelineProgress(
                100 /
                  simulationResult.timeline.length
              );

              setTimelinePlaying(true);
            }}
            className="rounded-lg bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
          >
            ↺
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-xs text-slate-400">
          <span>Simulation Progress</span>

          <span>
            {Math.round(timelineProgress)}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              width: `${timelineProgress}%`,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-8 overflow-x-auto">
        <div className="relative flex min-w-max items-start gap-16 pb-6"></div>
        {simulationResult.timeline.map((step, index) => {
          const active = index <= currentStep;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: active ? 1.02 : 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="flex items-start gap-4"
            >
              <div
                className={`mt-1 h-4 w-4 rounded-full transition-all duration-300 ${
                  active
                    ? "bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
                    : "bg-slate-600"
                }`}
              />
<p
  className={`transition-colors duration-300 ${
    active
      ? "text-white"
      : "text-slate-500"
  }`}
>
  {step.event}

  <span className="mt-1 block text-xs text-slate-400">
    Severity: {step.severity}%
  </span>
</p>
            </motion.div>
          );
        })}
      </div>
    </GlassPanel>
  );
}