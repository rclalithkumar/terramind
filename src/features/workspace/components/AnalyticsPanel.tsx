import AnalyticsMetricCard from "@/components/simulation/AnalyticsMetricCard";
import { useScenarioStore } from "@/store/scenarioStore";
import { ShieldAlert, Users, Target, Activity } from "lucide-react";
import CircularGauge from "@/components/simulation/CircularGauge";
import GlassPanel from "@/components/ui/GlassPanel";

export default function AnalyticsPanel() {
  const simulationResult = useScenarioStore(
    (state) => state.simulationResult
  );

  const parsedScenario = useScenarioStore(
    (state) => state.parsedScenario
  );

  if (!simulationResult) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="text-xl font-semibold text-white">
          Analytics
        </h2>

        <p className="mt-4 text-slate-400">
          Run a simulation to view analytics.
        </p>
      </div>
    );
  }

  return (
    <GlassPanel className="flex h-full flex-col p-6">
  <h2 className="mb-6 text-xl font-semibold text-white">
    Analytics
  </h2>

  {/* Gauge */}
  <div className="mb-8 flex justify-center rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-8 backdrop-blur-xl overflow-visible">
    <CircularGauge value={simulationResult.probability} />
  </div>

  {/* Metric Cards */}
  <div className="space-y-4">

    <AnalyticsMetricCard
      title="Risk Level"
      value={simulationResult.severity}
      accent={
        simulationResult.severity === "High"
          ? "text-red-400"
          : simulationResult.severity === "Medium"
          ? "text-amber-400"
          : "text-emerald-400"
      }
    />

    <AnalyticsMetricCard
      title="Population"
      value={simulationResult.affectedPopulation.toLocaleString()}
      accent="text-emerald-400"
    />

    <AnalyticsMetricCard
      title="Confidence"
      value={`${parsedScenario?.confidence ?? 0}%`}
      accent="text-violet-400"
    />

  </div>

  {/* Bottom Features */}
  <div className="mt-8 grid grid-cols-2 gap-4">

    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30">
      <ShieldAlert className="h-5 w-5 text-red-400" />
      <span className="text-sm text-slate-300">
        AI Risk Analysis
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30">
      <Users className="h-5 w-5 text-emerald-400" />
      <span className="text-sm text-slate-300">
        Population Impact
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30">
      <Target className="h-5 w-5 text-violet-400" />
      <span className="text-sm text-slate-300">
        Prediction Confidence
      </span>
    </div>

    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30">
      <Activity className="h-5 w-5 text-cyan-400" />
      <span className="text-sm text-slate-300">
        Live Simulation
      </span>
    </div>

  </div>
</GlassPanel>
  );
}