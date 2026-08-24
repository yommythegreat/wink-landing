import { CATEGORY_COUNTS } from "../copy";

// Auto-scrolling strip of Spot categories rendered as rounded pill
// cards, category label + accent-colored count inside each. Two
// identical tracks side-by-side create a seamless marquee loop.
// Pauses on hover. Skipped under prefers-reduced-motion (see styles.css).
export function CategoryTicker() {
  return (
    <div
      aria-hidden
      className="section-paper overflow-hidden border-y border-[color:var(--color-paper-line)] py-5"
    >
      <div className="marquee-track whitespace-nowrap">
        <Track />
        <Track />
      </div>
    </div>
  );
}

function Track() {
  return (
    <span className="flex shrink-0 gap-3 pr-3">
      {CATEGORY_COUNTS.map((c) => (
        <span
          key={c.label}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-paper-line)] bg-white px-4 py-2 font-mono text-[13px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]"
        >
          {c.label}
        </span>
      ))}
    </span>
  );
}
