import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { hero } from "../copy";

export function Hero() {
  const h1Ref = useReveal<HTMLHeadingElement>();
  const ledeRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <SectionShell id="hero" mood="paper" className="pt-24 pb-20 md:pt-28 md:pb-28">
      <div className="grid gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16">
        <div className="flex flex-col justify-center">
          <h1
            ref={h1Ref}
            data-reveal
            style={{ "--reveal-delay": "0.06s" } as React.CSSProperties}
            className="display text-ink"
          >
            {hero.headline.lead}
            <br />
            {hero.headline.tail}
            <span className="text-accent">{hero.headline.accent}</span>
          </h1>
          <div
            ref={ledeRef}
            data-reveal
            style={{ "--reveal-delay": "0.14s" } as React.CSSProperties}
            className="mt-6 space-y-4"
          >
            {hero.lede.map((para, i) => (
              <p key={i} className="lede">
                {para.map((chunk, j) =>
                  typeof chunk === "string" ? (
                    <span key={j}>{chunk}</span>
                  ) : (
                    <b key={j}>{chunk.b}</b>
                  ),
                )}
              </p>
            ))}
          </div>
          <div
            ref={ctaRef}
            data-reveal
            style={{ "--reveal-delay": "0.22s" } as React.CSSProperties}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-paper-line)] px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/hero.jpg"
            alt="Four friends laughing around a café table"
            loading="eager"
            className="aspect-[3/4] w-full rounded-2xl object-cover shadow-[0_20px_60px_-30px_rgba(20,18,15,0.4)]"
          />
        </div>
      </div>
    </SectionShell>
  );
}
