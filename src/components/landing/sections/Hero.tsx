import { Eyebrow } from "../Eyebrow";
import { SectionShell } from "../SectionShell";
import { PhotoPlaceholder } from "../PhotoPlaceholder";
import { useReveal } from "@/lib/useReveal";
import { hero, WAITLIST_COUNT } from "../copy";

export function Hero() {
  const h1Ref = useReveal<HTMLHeadingElement>();
  const ledeRef = useReveal<HTMLParagraphElement>();
  const ctaRef = useReveal<HTMLDivElement>();
  const proofRef = useReveal<HTMLDivElement>();

  return (
    <SectionShell id="hero" mood="paper" className="pt-24 pb-20 md:pt-28 md:pb-28">
      <div className="grid gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16">
        <div className="flex flex-col justify-center">
          <Eyebrow>Wink Live · Wink Spot</Eyebrow>
          <h1
            ref={h1Ref}
            data-reveal
            style={{ "--reveal-delay": "0.06s" } as React.CSSProperties}
            className="display mt-6 text-ink"
          >
            {hero.headline.lead}
            <br />
            {hero.headline.tail}
            <span className="text-accent">{hero.headline.accent}</span>
          </h1>
          <p
            ref={ledeRef}
            data-reveal
            style={{ "--reveal-delay": "0.14s" } as React.CSSProperties}
            className="lede mt-6"
          >
            {hero.lede.map((chunk, i) =>
              typeof chunk === "string" ? (
                <span key={i}>{chunk}</span>
              ) : (
                <b key={i}>{chunk.b}</b>
              ),
            )}
          </p>
          <div
            ref={ctaRef}
            data-reveal
            style={{ "--reveal-delay": "0.22s" } as React.CSSProperties}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
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
          <div
            ref={proofRef}
            data-reveal
            style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm text-[color:var(--color-ink-dim)]"
          >
            <span aria-hidden className="flex -space-x-2">
              {FACES.map((f, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-paper bg-gradient-to-br"
                  style={{
                    background: f,
                  }}
                />
              ))}
            </span>
            <p>
              <b className="text-ink">
                {WAITLIST_COUNT.toLocaleString()} {hero.proofPrefix}
              </b>{" "}
              {hero.proofSuffix}
            </p>
          </div>
        </div>

        <div className="relative">
          <PhotoPlaceholder
            slot="hero"
            alt="Four friends laughing around a café table"
            aspect="3 / 4"
            className="shadow-[0_20px_60px_-30px_rgba(20,18,15,0.4)]"
          />
        </div>
      </div>
    </SectionShell>
  );
}

// Placeholder avatar gradients. Real face crops arrive with Tosin's photos.
const FACES = [
  "linear-gradient(135deg, #d8b6a3, #8b5e3c)",
  "linear-gradient(135deg, #c2a288, #5c3a24)",
  "linear-gradient(135deg, #a67c5b, #4a2d1a)",
  "linear-gradient(135deg, #d0a887, #6b4429)",
];
