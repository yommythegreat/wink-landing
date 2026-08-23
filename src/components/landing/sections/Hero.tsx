import { useReveal } from "@/lib/useReveal";
import { hero } from "../copy";

// Hero: two-column split at desktop. Left column stays on the paper
// background of the section and holds all the text; right column is
// the hero photograph, bleeding to the viewport right edge with a
// clean vertical seam where the paper ends. Nothing overlaps — text
// and photo live in independent tracks.
//
// The left column's inner padding aligns its content with the site's
// 1240px editorial grid (same left gutter as SiteNav's brand mark),
// so the H1's leading edge lines up with the "Wink" wordmark above.
//
// Mobile: text on paper stacked over a full-width photo.
export function Hero() {
  const h1Ref = useReveal<HTMLHeadingElement>();
  const ledeRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <section id="hero" className="section-paper relative z-[2]">
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div
          className="flex flex-col justify-center px-6 pt-16 pb-14 md:pt-24 md:pb-24 md:pr-14"
          style={{
            paddingLeft:
              "max(2.5rem, calc((100vw - 1240px) / 2 + 2.5rem))",
          }}
        >
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

        <div className="relative min-h-[420px] md:min-h-[720px]">
          <img
            src="/images/hero.jpg"
            alt="Four friends laughing around a café table"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
