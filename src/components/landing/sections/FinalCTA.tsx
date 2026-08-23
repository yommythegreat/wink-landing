import { WaitlistForm } from "../WaitlistForm";
import { useReveal } from "@/lib/useReveal";
import { finalCta } from "../copy";

export function FinalCTA() {
  const h2Ref = useReveal<HTMLHeadingElement>();
  const formRef = useReveal<HTMLDivElement>();
  const noteRef = useReveal<HTMLDivElement>();
  return (
    <section id="join" className="section-dark relative z-[2] overflow-hidden">
      <img
        src="/images/final-cta.jpg"
        alt="Three friends at a rooftop table at sunset"
        loading="lazy"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/40"
      />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center px-6 py-28 text-center md:px-10 md:py-40">
        <h2
          ref={h2Ref}
          data-reveal
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          className="display max-w-[13ch] text-snow"
        >
          {finalCta.headline.lead}
          <br />
          <span className="text-accent">{finalCta.headline.accent}</span>
        </h2>
        <div
          ref={formRef}
          data-reveal
          style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
          className="mt-10 flex w-full justify-center"
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
