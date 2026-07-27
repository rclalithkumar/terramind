import { useScenarioStore } from "@/store/scenarioStore";
export default function ResultsPanel() {
    const simulationResult = useScenarioStore(
  (state) => state.simulationResult
);

if (!simulationResult) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white">
        Simulation Results
      </h2>

      <p className="mt-4 text-slate-400">
        Run a simulation to see the results.
      </p>
    </div>
  );
}
    return (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-6 text-xl font-semibold text-white">
      Simulation Results
    </h2>

    <div className="space-y-4">
      <div>
        <p className="text-sm text-slate-400">Scenario</p>
        <p className="text-lg font-semibold text-white">
          {simulationResult.title}
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-400">Severity</p>
        <p className="text-red-400">
          {simulationResult.severity}
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-400">Probability</p>
        <p className="text-cyan-400">
          {simulationResult.probability}%
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-400">
          Affected Population
        </p>
        <p className="text-white">
          {simulationResult.affectedPopulation.toLocaleString()}
        </p>
      </div>

      <div>
        <p className="text-sm text-slate-400">
          Estimated Loss
        </p>
        <p className="text-amber-400">
          {simulationResult.estimatedLoss}
        </p>
      </div>
    </div>
  </div>
);
}