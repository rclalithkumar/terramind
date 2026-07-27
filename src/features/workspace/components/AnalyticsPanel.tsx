const stats = [
  { title: "Simulation Score", value: "94%" },
  { title: "Risk Level", value: "Medium" },
  { title: "Population", value: "1.2M" },
  { title: "Confidence", value: "96%" },
];

export default function AnalyticsPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-xl font-semibold">
        Analytics
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <p className="text-sm text-slate-400">
              {stat.title}
            </p>

            <p className="mt-2 text-2xl font-bold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}