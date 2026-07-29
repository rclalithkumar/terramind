import { motion } from "framer-motion";

import ResultMetricCard from "@/components/simulation/ResultMetricCard";
import SeverityBadge from "@/components/simulation/SeverityBadge";
import RiskScore from "@/components/simulation/RiskScore";
import GlassPanel from "@/components/ui/GlassPanel";
import { useScenarioStore } from "@/store/scenarioStore";


export default function ResultsPanel() {

  const simulationResult = useScenarioStore(
    (state) => state.simulationResult
  );

  const isSimulating = useScenarioStore(
    (state) => state.isSimulating
  );


  if (isSimulating) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

        <div className="mb-5 h-10 w-10 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />

        <h3 className="text-lg font-semibold text-white">
          Running Simulation
        </h3>

        <p className="mt-2 text-center text-sm text-slate-400">
          TerraMind is generating the simulation...
        </p>

      </div>
    );
  }


  if (!simulationResult) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">

        <div className="mb-4 text-5xl">
          🌍
        </div>

        <h2 className="text-xl font-semibold text-white">
          Simulation Results
        </h2>

        <p className="mt-3 max-w-sm text-slate-400">
          Enter a scenario and run a simulation to view predictions,
          impact analysis, and recommendations.
        </p>

      </div>
    );
  }


  return (
    <GlassPanel className="p-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="space-y-6"
      >

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-sm text-slate-400">
              Simulation Scenario
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              {simulationResult.title}
            </h2>
          </div>


          <SeverityBadge
            severity={simulationResult.severity}
          />

        </div>



        {/* Metrics */}

        <div className="grid grid-cols-2 gap-4">

          <ResultMetricCard
            title="Severity"
            value={simulationResult.severity}
            accent="text-red-400"
          />


          <ResultMetricCard
            title="Probability"
            value={`${simulationResult.probability}%`}
            accent="text-cyan-400"
          />


          <ResultMetricCard
            title="Population"
            value={simulationResult.affectedPopulation.toLocaleString()}
            accent="text-emerald-400"
          />


          <ResultMetricCard
            title="Estimated Loss"
            value={simulationResult.estimatedLoss}
            accent="text-amber-400"
          />

        </div>



        {/* Risk */}

        <RiskScore
          probability={simulationResult.probability}
        />



        {/* Recommendations */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

          <h3 className="mb-4 text-lg font-semibold text-white">
            AI Recommendations
          </h3>


          <div className="space-y-3">

            {simulationResult.recommendations.map(
              (item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="rounded-xl bg-white/5 p-3 text-sm text-slate-300"
                >
                  • {item}

                </motion.div>

              )
            )}

          </div>

        </div>

      </motion.div>

    </GlassPanel>
  );
}