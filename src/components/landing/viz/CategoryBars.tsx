import { CATEGORY_COUNTS } from "../copy";

// Horizontal bar chart of Spot categories by count. Reads from copy.ts
// so the numbers stay editable in one place.
export function CategoryBars() {
  const max = Math.max(...CATEGORY_COUNTS.map((c) => c.count));
  return (
    <div className="w-full space-y-2">
      {CATEGORY_COUNTS.map((c) => {
        const pct = Math.round((c.count / max) * 100);
        return (
          <div key={c.label} className="grid grid-cols-[110px_1fr_28px] items-center gap-3">
            <span className="text-[13px] text-[color:var(--color-snow-dim)]">
              {c.label}
            </span>
            <span className="relative h-[6px] w-full rounded-full bg-white/8">
              <i
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
                style={{ width: `${pct}%` }}
              />
            </span>
            <span className="text-right font-mono text-[11px] tabular-nums text-[color:var(--color-snow-dim)]">
              {c.count}
            </span>
          </div>
        );
      })}
    </div>
  );
}
