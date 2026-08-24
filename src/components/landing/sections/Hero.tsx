import { useReveal } from "@/lib/useReveal";
import { hero } from "../copy";

// Hero: a full-bleed photograph occupies the right two-thirds of the
// section and blends into the paper background on its left edge via a
// horizontal gradient — no hard vertical seam. Text sits in a padded
// max-width container on the left, over the paper (with the image's
// blended tail behind it, softly).
//
// Mobile stacks: text on paper, then the full-width photo below.
export function Hero() {
  const h1Ref = useReveal<HTMLHeadingElement>();
  const ledeRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="hero"
      className="section-paper relative z-[2] overflow-hidden"
    >
      {/* Desktop-only backdrop: right-side full-bleed photo, then a
          horizontal paper-to-transparent gradient masking its left
          edge so it blends into the reading column. */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden
          className="absolute inset-y-0 right-0 h-full w-[68%] object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 h-full w-[68%]"
          style={{
            background:
              "linear-gradient(to right, var(--color-paper) 0%, rgba(240,238,233,0.85) 18%, rgba(240,238,233,0.35) 34%, transparent 55%)",
          }}
        />
      </div>

      {/* Text column, editorial container. */}
      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-6 md:min-h-[720px] md:grid-cols-2 md:px-10">
        <div className="flex flex-col justify-center pt-16 pb-10 md:pt-24 md:pb-24">
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
        {/* Right grid cell reserved for the desktop photo (rendered as
            the backdrop above). Empty spacer so the text column is
            width-constrained to the left half at the editorial grid. */}
        <div className="hidden md:block" aria-hidden />
      </div>

      {/* Mobile-only: photo stacks under the text at natural aspect. */}
      <img
        src="/images/hero.jpg"
        alt="Four friends laughing around a café table"
        loading="eager"
        className="block h-auto w-full object-cover md:hidden"
      />
    </section>
  );
}
