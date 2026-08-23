import { Eyebrow } from "../Eyebrow";
import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { trust } from "../copy";

export function Trust() {
  const h2Ref = useReveal<HTMLHeadingElement>();
  const subRef = useReveal<HTMLParagraphElement>();
  return (
    <SectionShell mood="dark" className="py-24 md:py-32">
      <Eyebrow tone="snow-mute">{trust.eyebrow}</Eyebrow>

      <div className="mt-8 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-16">
        <div>
          <h2 ref={h2Ref} data-reveal className="h-lg max-w-[18ch] text-snow">
            {trust.headline.lead}
            <span className="text-accent">{trust.headline.accent}</span>
          </h2>
          <p
            ref={subRef}
            data-reveal
            style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
            className="lede mt-6 max-w-[42ch] text-[color:var(--color-snow-dim)]"
          >
            {trust.sub}
          </p>
          <ToggleDemo />
        </div>

        <ul className="grid gap-6">
          {trust.principles.map((p, i) => (
            <PrincipleRow key={p.title} p={p} i={i} />
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

function PrincipleRow({
  p,
  i,
}: {
  p: { title: string; body: string };
  i: number;
}) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": `${0.05 + i * 0.06}s` } as React.CSSProperties}
      className="flex gap-4 border-t border-[color:var(--color-dark-line)] pt-6"
    >
      <span
        aria-hidden
        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[13px] font-bold text-white"
      >
        ✓
      </span>
      <div>
        <h3 className="text-[17px] font-semibold text-snow">{p.title}</h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-[color:var(--color-snow-dim)]">
          {p.body}
        </p>
      </div>
    </li>
  );
}

// Twin dials — one "off" (invisible), one "on" (visible). Pure SVG,
// static; the toggle switches are decorative, not interactive.
function ToggleDemo() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
      className="mt-10 grid gap-6 sm:grid-cols-2"
    >
      <Dial state="off" />
      <Dial state="on" />
    </div>
  );
}

function Dial({ state }: { state: "off" | "on" }) {
  const on = state === "on";
  const config = on ? trust.toggleDemo.on : trust.toggleDemo.off;
  return (
    <div className="rounded-2xl border border-[color:var(--color-dark-line)] bg-white/[0.03] p-5">
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
      <div className="mt-4 flex items-center justify-between text-[13px] text-snow">
        <span>{config.label}</span>
        <span
          aria-hidden
          className={
            "inline-flex h-6 w-11 items-center rounded-full p-0.5 transition-colors " +
            (on ? "bg-accent" : "bg-white/15")
          }
        >
          <span
            className={
              "h-5 w-5 rounded-full bg-white transition-transform " +
              (on ? "translate-x-5" : "translate-x-0")
            }
          />
        </span>
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--color-snow-dim)]">
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
