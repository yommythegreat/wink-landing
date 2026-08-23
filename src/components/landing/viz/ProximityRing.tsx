// Wink Live proximity data-viz. A concentric ring set with the caller
// pin at the centre and a scatter of "available" pins inside the 300m
// ring. Hand SVG — no chart library.
export function ProximityRing({
  available = 6,
  radiusLabel = "300 m",
}: {
  available?: number;
  radiusLabel?: string;
}) {
  return (
    <div className="relative aspect-square w-full max-w-[280px] mx-auto">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="pr-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#pr-glow)" />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.22"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="32"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
        {/* People pins */}
        {SCATTER.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="3.2"
            fill="var(--color-accent)"
            opacity="0.85"
          />
        ))}
        {/* Self pin — larger, ring */}
        <circle
          cx="100"
          cy="100"
          r="6"
          fill="var(--color-accent)"
          stroke="var(--color-paper)"
          strokeWidth="2.5"
        />
      </svg>
      <span className="absolute bottom-2 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
        You · {available} available
      </span>
      <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
        {radiusLabel}
      </span>
    </div>
  );
}

// Deterministic scatter — mirrors the mock's positions.
const SCATTER: { x: number; y: number }[] = [
  { x: 62, y: 52 },
  { x: 140, y: 66 },
  { x: 48, y: 124 },
  { x: 124, y: 142 },
  { x: 88, y: 38 },
  { x: 156, y: 114 },
];
