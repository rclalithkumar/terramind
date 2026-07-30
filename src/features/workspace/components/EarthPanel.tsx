import EarthCanvas from "@/components/earth/EarthCanvas";
import GlassPanel from "@/components/ui/GlassPanel";
import TelemetryCard from "@/components/simulation/TelemetryCard";
import { useScenarioStore } from "@/store/scenarioStore";
import { Globe, Activity } from "lucide-react";

export default function EarthPanel() {
  const simulationResult = useScenarioStore(
    (state) => state.simulationResult
  );

  const selectedLocation = useScenarioStore(
    (state) => state.selectedLocation
  );

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
  });

  return (
    <GlassPanel className="relative overflow-hidden p-0">

      {/* Animated Scan Line */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          h-1
          animate-pulse
          bg-linear-to-r
          from-transparent
          via-cyan-400/80
          to-transparent
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5">

        <div>
          <div className="flex items-center gap-2 text-cyan-300">
            <Globe size={18} />

            <span className="text-xs font-semibold uppercase tracking-[0.35em]">
              Digital Twin
            </span>
          </div>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Earth Simulation
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {selectedLocation ?? "Waiting for scenario..."}
          </p>
        </div>

        <div className="text-right">

          <div className="flex items-center justify-end gap-2 text-emerald-400">
            <Activity size={15} />

            <span className="text-xs font-semibold uppercase tracking-wider">
              LIVE
            </span>
          </div>

          <p className="mt-2 font-mono text-sm text-slate-300">
            {currentTime}
          </p>

        </div>

      </div>

      {/* Earth Canvas */}
      <div className="relative h-170">

        <EarthCanvas
          selectedLocation={selectedLocation}
        />

        {/* Telemetry Overlay */}
        <div className="absolute bottom-5 left-5 right-5 z-20">

          <div className="grid grid-cols-4 gap-4 rounded-2xl border border-cyan-500/20 bg-black/40 p-4 backdrop-blur-xl">

            <TelemetryCard
              title="Population"
              value={
                simulationResult
                  ? simulationResult.affectedPopulation
                  : "--"
              }
            />

            <TelemetryCard
              title="Probability"
              value={
                simulationResult
                  ? `${simulationResult.probability}%`
                  : "--"
              }
            />

            <TelemetryCard
              title="Loss"
              value={
                simulationResult
                  ? simulationResult.estimatedLoss
                  : "--"
              }
            />

            <TelemetryCard
              title="Severity"
              value={
                simulationResult
                  ? simulationResult.severity
                  : "--"
              }
            />

          </div>

        </div>

      </div>

    </GlassPanel>
  );
}