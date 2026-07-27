const events = [
  "Scenario Submitted",
  "AI Parsing",
  "Simulation Started",
  "Impact Analysis",
  "Generate Report",
];

export default function TimelinePanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-xl font-semibold">
        Timeline
      </h2>

      <div className="mt-6 space-y-4">
        {events.map((event) => (
          <div
            key={event}
            className="flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-indigo-400" />

            <span>{event}</span>
          </div>
        ))}
      </div>
    </section>
  );
}