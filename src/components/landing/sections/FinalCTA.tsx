import { WaitlistForm } from "../WaitlistForm";
import { finalCta } from "../copy";

export function FinalCTA() {
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
        className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-dark-1)] via-[color:var(--color-dark-1)]/85 to-[color:var(--color-dark-1)]/40"
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 py-28 text-center md:px-10 md:py-40">
        <h2 className="display max-w-[13ch] text-snow">
          {finalCta.headline.lead}
          <br />
          <span className="text-accent">{finalCta.headline.accent}</span>
        </h2>
        <div className="mt-10 flex w-full justify-center">
          <WaitlistForm variant="dark" source="landing-cta" />
        </div>
      </div>
    </section>
  );
}
