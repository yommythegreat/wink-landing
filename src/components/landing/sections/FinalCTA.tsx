import { Eyebrow } from "../Eyebrow";
import { WaitlistForm } from "../WaitlistForm";
import { PhotoPlaceholder } from "../PhotoPlaceholder";
import { useReveal } from "@/lib/useReveal";
import { finalCta } from "../copy";

export function FinalCTA() {
  const h2Ref = useReveal<HTMLHeadingElement>();
  const formRef = useReveal<HTMLDivElement>();
  const noteRef = useReveal<HTMLDivElement>();
  return (
    <section id="join" className="section-dark relative z-[2] overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <PhotoPlaceholder
          slot="final CTA"
          alt="Three friends at a rooftop table at sunset"
          aspect="16 / 9"
          mood="dark"
          className="!rounded-none h-full"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/40"
      />
      <div className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10 md:py-40">
        <Eyebrow tone="accent">{finalCta.eyebrow}</Eyebrow>
        <h2
          ref={h2Ref}
          data-reveal
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          className="display mt-5 max-w-[13ch] text-snow"
        >
          {finalCta.headline.lead}
          <br />
          <span className="text-accent">{finalCta.headline.accent}</span>
        </h2>
        <div
          ref={formRef}
          data-reveal
          style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
          className="mt-10"
        >
          <WaitlistForm variant="dark" source="landing-cta" />
        </div>
        <div
          ref={noteRef}
          data-reveal
          style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
          className="mt-6 font-mono text-[12px] uppercase tracking-[0.24em] text-[color:var(--color-snow-mute)]"
        >
          {finalCta.note}
        </div>
      </div>
    </section>
  );
}
