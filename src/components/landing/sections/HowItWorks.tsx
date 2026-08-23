import { Eyebrow } from "../Eyebrow";
import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { howItWorks } from "../copy";

export function HowItWorks() {
  const h2Ref = useReveal<HTMLHeadingElement>();
  return (
    <SectionShell mood="paper-2" className="py-24 md:py-32">
      <Eyebrow tone="ink-mute">{howItWorks.eyebrow}</Eyebrow>
      <h2
        ref={h2Ref}
        data-reveal
        className="h-lg mt-4 max-w-[20ch] text-ink"
      >
        {howItWorks.headline.lead}
        <span className="text-accent">{howItWorks.headline.accent}</span>
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        {howItWorks.steps.map((s, i) => (
          <StepCard key={s.title} step={s} index={i} />
        ))}
      </div>
    </SectionShell>
  );
}

function StepCard({
  step,
  index,
}: {
  step: { title: string; body: string };
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": `${0.05 + index * 0.08}s` } as React.CSSProperties}
      className="border-t border-[color:var(--color-paper-line)] pt-6"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-ink-mute)]">
        Step {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="h-md mt-3 text-ink">{step.title}</h3>
      <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-[color:var(--color-ink-dim)]">
        {step.body}
      </p>
    </div>
  );
}
