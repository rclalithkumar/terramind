export default function SimulationPanel() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
      "
    >
      <h2 className="text-xl font-semibold">
        Simulation Results
      </h2>

      <p className="mt-2 text-slate-400">
        No simulation started yet.
      </p>
    </div>
  );
}