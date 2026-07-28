interface SeverityBadgeProps {
  severity: "Low" | "Medium" | "High";
}

export default function SeverityBadge({
  severity,
}: SeverityBadgeProps) {
  const styles = {
    Low: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    High: "bg-red-500/15 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
        styles[severity]
      }`}
    >
      {severity}
    </span>
  );
}