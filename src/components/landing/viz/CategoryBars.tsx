import { CATEGORY_COUNTS } from "../copy";

// Horizontal bar chart of Spot categories. Bar lengths vary as an
// illustrative distribution; numeric counts are intentionally
// suppressed because we don't publicly claim a specific Spot count
// per category pre-launch (see copy.ts).
export function CategoryBars() {
  const max = Math.max(...CATEGORY_COUNTS.map((c) => c.count));
  return (
    <div className="w-full space-y-2">
      {CATEGORY_COUNTS.map((c) => {
        const pct = Math.round((c.count / max) * 100);
        return (
          <div key={c.label} className="grid grid-cols-[110px_1fr] items-center gap-3">
            <span className="text-[13px] text-[color:var(--color-snow-dim)]">
              {c.label}
            </span>
            <span className="relative h-[6px] w-full rounded-full bg-white/8">
              <i
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
                style={{ width: `${pct}%` }}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}
