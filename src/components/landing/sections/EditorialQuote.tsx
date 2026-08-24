import { useReveal } from "@/lib/useReveal";
import { quote } from "../copy";

// Full-bleed editorial band: photo + a large overlay quote. Sits
// between the HOW section and the Trust section as a mood break.
export function EditorialQuote() {
  const qRef = useReveal<HTMLParagraphElement>();
  return (
    <section className="relative z-[2]">
      <div className="relative isolate overflow-hidden">
        <img
          src="/images/editorial.jpg"
          alt="A group of friends laughing together on an outdoor sofa"
          loading="lazy"
          className="min-h-[420px] w-full object-cover md:min-h-[540px]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1440px] px-6 pb-12 md:px-10 md:pb-16 text-white">
            <p ref={qRef} data-reveal className="h-lg max-w-[22ch] text-white">
              {quote.line.lead}
              <span className="text-accent">{quote.line.accent}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
