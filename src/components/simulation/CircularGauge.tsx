interface Props {
  value: number;
  size?: number;
  strokeWidth?: number;
}

export default function CircularGauge({
  value,
  size = 180,
  strokeWidth = 12,
}: Props) {
  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">

      <svg
  width={size + 30}
  height={size + 30}
  viewBox={`-15 -15 ${size + 30} ${size + 30}`}
  className="-rotate-90 overflow-visible"
>
        <defs>

          <linearGradient
            id="gaugeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
            />

            <stop
              offset="100%"
              stopColor="#3b82f6"
            />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          filter="url(#glow)"
          style={{
            transition:
              "stroke-dashoffset 1s ease",
          }}
        />
      </svg>

      {/* Glass Center */}
      <div className="absolute flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">

        <h2 className="text-4xl font-bold text-white">
          {value}%
        </h2>

        <p className="mt-1 text-xs uppercase tracking-widest text-cyan-300">
          AI SCORE
        </p>

      </div>

    </div>
  );
}