// "Mutual Spots" visualisation. Two overlapping circles with a labelled
// intersection. Hand SVG so the intersection label sits pixel-perfect.
export function VennDiagram({
  shared = 3,
  yours = 6,
  theirs = 9,
}: {
  shared?: number;
  yours?: number;
  theirs?: number;
}) {
  return (
    <div className="w-full">
      <div className="relative mx-auto aspect-[3/2] w-full max-w-[280px]">
        <svg viewBox="0 0 240 160" className="absolute inset-0 h-full w-full">
          <circle
            cx="90"
            cy="80"
            r="62"
            fill="var(--color-accent)"
            fillOpacity="0.22"
            stroke="var(--color-accent)"
            strokeOpacity="0.4"
          />
          <circle
            cx="150"
            cy="80"
            r="62"
            fill="var(--color-snow)"
            fillOpacity="0.10"
            stroke="var(--color-snow)"
            strokeOpacity="0.35"
          />
          <text
            x="120"
            y="86"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="12"
            letterSpacing="1.2"
            fill="var(--color-snow)"
            fontWeight="600"
          >
            {shared} SHARED
          </text>
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-snow-dim)]">
        <span>Yours · {yours}</span>
        <span>Theirs · {theirs}</span>
        <span className="text-snow">
          <b>Shared · {shared}</b>
        </span>
      </div>
    </div>
  );
}
