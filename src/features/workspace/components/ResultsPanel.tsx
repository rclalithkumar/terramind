export default function ResultsPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-xl font-semibold">
        AI Analysis
      </h2>

      <div className="mt-5 space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-medium text-indigo-400">
            Summary
          </h3>

          <p className="mt-2 text-slate-300">
            Expected urban flooding in low-lying areas with
            moderate disruption to transportation.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-medium text-indigo-400">
            Potential Impacts
          </h3>

          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-300">
            <li>Road closures</li>
            <li>Power outage risk</li>
            <li>Hospital accessibility affected</li>
            <li>Traffic congestion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}