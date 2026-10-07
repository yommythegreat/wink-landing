import { SectionShell } from "../SectionShell";
import { trust } from "../copy";

export function Trust() {
  return (
    <SectionShell id="trust" mood="dark" className="py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-16">
        <div>
          <h2 className="h-lg max-w-[18ch] text-snow">
            {trust.headline.lead}
            <span className="text-accent">{trust.headline.accent}</span>
          </h2>
          <p className="lede mt-6 max-w-[42ch] text-[color:var(--color-snow-dim)]">
            {trust.sub}
          </p>
          <ToggleDemo />
        </div>

        <ul className="grid gap-6">
          {trust.principles.map((p) => (
            <PrincipleRow key={p.title} p={p} />
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

function PrincipleRow({ p }: { p: { title: string; body: string } }) {
  return (
    <li className="flex gap-4 border-t border-[color:var(--color-dark-line)] pt-6">
      <span
        aria-hidden
        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[13px] font-bold text-accent-foreground"
      >
        ✓
      </span>
      <div>
        <h3 className="text-[19px] font-semibold text-snow">{p.title}</h3>
        <p className="mt-1.5 text-[16px] leading-relaxed text-[color:var(--color-snow-dim)]">
          {p.body}
        </p>
      </div>
    </li>
  );
}

// Twin dials — one "off" (invisible), one "on" (visible). Pure SVG,
// static; the toggle switches are decorative, not interactive.
function ToggleDemo() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      <Dial state="off" />
      <Dial state="on" />
    </div>
  );
}

function Dial({ state }: { state: "off" | "on" }) {
  const on = state === "on";
  const config = on ? trust.toggleDemo.on : trust.toggleDemo.off;
  return (
    <div className="rounded-2xl border border-[color:var(--color-dark-line)] p-5">
      <div className="relative aspect-square w-full">
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
          <circle
            cx="100"
            cy="100"
            r="82"
            fill="none"
            stroke={on ? "var(--color-accent)" : "rgba(255,255,255,0.18)"}
            strokeOpacity={on ? "0.5" : "0.9"}
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="7"
            fill={on ? "var(--color-accent)" : "rgba(255,255,255,0.35)"}
            stroke="var(--color-dark-1)"
            strokeWidth="2.5"
          />
          {SCATTER.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="3"
              fill={on ? "var(--color-accent)" : "rgba(255,255,255,0.35)"}
              opacity={on ? "0.9" : "0.45"}
            />
          ))}
        </svg>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-[16px] font-semibold text-snow">
        <span>{config.label}</span>
        <span
          aria-hidden
          className={
            "inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 " +
            (on ? "bg-accent" : "bg-white/15")
          }
        >
          <span
            className={
              "h-5 w-5 rounded-full bg-white " +
              (on ? "translate-x-5" : "translate-x-0")
            }
          />
        </span>
      </div>
      <p className="mt-2 text-[16px] leading-relaxed text-[color:var(--color-snow-dim)]">
        {config.caption}
      </p>
    </div>
  );
}

const SCATTER = [
  { x: 60, y: 66 },
  { x: 144, y: 78 },
  { x: 78, y: 138 },
];
