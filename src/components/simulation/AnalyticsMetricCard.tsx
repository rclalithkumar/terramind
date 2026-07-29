interface Props {
  title: string;
  value: string;
  accent?: string;
}

export default function AnalyticsMetricCard({
  title,
  value,
  accent = "text-cyan-400",
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:border-cyan-400/30">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3
        className={`mt-2 text-2xl font-bold ${accent}`}
      >
        {value}
      </h3>
    </div>
  );
}