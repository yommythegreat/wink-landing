import { CATEGORY_COUNTS } from "../copy";

// Auto-scrolling strip of Spot categories with counts. Two identical
// tracks side-by-side create a seamless loop under the marquee
// animation. Pauses on hover. Skipped under prefers-reduced-motion
// (handled in styles.css).
export function CategoryTicker() {
  return (
    <div
      aria-hidden
      className="section-paper overflow-hidden border-y border-[color:var(--color-paper-line)] py-4"
    >
      <div className="marquee-track whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
        <Track />
        <Track />
      </div>
    </div>
  );
}

function Track() {
  return (
    <span className="flex shrink-0 gap-10 pr-10">
      {CATEGORY_COUNTS.map((c) => (
        <span key={c.label} className="inline-flex items-center gap-2">
          {c.label}
          <b className="text-ink">{c.count}</b>
        </span>
      ))}
    </span>
  );
}
