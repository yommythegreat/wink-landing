import { Fragment, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { products } from "../copy";
import { PhoneMock } from "../viz/PhoneMock";
import { SpotMock } from "../viz/SpotMock";
import { cn } from "@/lib/utils";

type Pillar = "live" | "spot";

// Centrepiece section. Two large product cards side-by-side that
// explain each pillar in full without any click-to-expand — headline,
// sub, a stylized product preview, and a three-step process.
//
// A pill toggle sits above the headline. On desktop it is a decorative
// anchor (both cards render regardless). On mobile it acts as a filter:
// only the selected card renders, so the section stays one page-tall.
export function TwoProducts() {
  const [pillar, setPillar] = useState<Pillar>("live");
  const h2Ref = useReveal<HTMLHeadingElement>();
  const subRef = useReveal<HTMLParagraphElement>();

  return (
    <SectionShell id="products" mood="paper" className="py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <PillToggle value={pillar} onChange={setPillar} />
        <h2 ref={h2Ref} data-reveal className="h-xl mt-6 text-ink">
          {products.headline.lead}
          <span className="text-accent">{products.headline.accent}</span>
        </h2>
        <p
          ref={subRef}
          data-reveal
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          className="lede mt-4 max-w-[52ch]"
        >
          {products.sub}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
        {/* Wink Live — always visible on md+, hidden on mobile unless
            the toggle is on "live". */}
        <div className={cn(pillar === "live" ? "block" : "hidden md:block")}>
          <ProductCard variant="live" />
        </div>
        <div className={cn(pillar === "spot" ? "block" : "hidden md:block")}>
          <ProductCard variant="spot" />
        </div>
      </div>

      <FooterReassurance />
    </SectionShell>
  );
}

function PillToggle({
  value,
  onChange,
}: {
  value: Pillar;
  onChange: (v: Pillar) => void;
}) {
  return (
    <div
      role="tablist"
      className="inline-flex rounded-full border border-[color:var(--color-paper-line)] bg-white p-1 shadow-[0_1px_3px_rgba(20,18,15,0.06)]"
    >
      {(["live", "spot"] as const).map((p) => {
        const active = value === p;
        return (
          <button
            key={p}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(p)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-medium transition-colors",
              active
                ? "bg-ink text-white"
                : "text-[color:var(--color-ink-dim)] hover:text-ink",
            )}
          >
            {p === "live" ? (
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className={cn(
                    "absolute inset-0 rounded-full bg-accent",
                    active ? "opacity-100" : "opacity-70",
                  )}
                />
              </span>
            ) : null}
            {p === "live" ? "Wink Live" : "Wink Spot"}
          </button>
        );
      })}
    </div>
  );
}

// Both cards share one component with a variant switch. Live uses the
// dark palette + PhoneMock; Spot uses the paper palette + SpotMock.
function ProductCard({ variant }: { variant: Pillar }) {
  const isLive = variant === "live";
  const data = isLive ? products.live : products.spot;
  const cardRef = useReveal<HTMLDivElement>();
  const bgSrc = isLive ? "/images/live.jpg" : "/images/spot.jpg";
  const badgeLabel = isLive ? "LIVE" : "SPOT";

  return (
    <article
      ref={cardRef}
      data-reveal
      style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[28px] border transition-colors",
        isLive
          ? "border-[color:var(--color-dark-line)] bg-[color:var(--color-dark-2)] text-snow"
          : "border-[color:var(--color-paper-line)] bg-[#faf9f5] text-ink",
      )}
    >
      <div className="flex flex-col gap-3 px-7 pb-6 pt-7 md:px-8 md:pt-8">
        <span
          className={cn(
            "inline-flex w-fit items-center rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]",
            isLive
              ? "bg-accent text-white"
              : "bg-accent/15 text-accent",
          )}
        >
          {badgeLabel}
        </span>
        <h3 className="h-md">{data.cardHeadline}</h3>
        <p
          className={cn(
            "max-w-[36ch] text-[15px] leading-relaxed",
            isLive
              ? "text-[color:var(--color-snow-dim)]"
              : "text-[color:var(--color-ink-dim)]",
          )}
        >
          {data.cardSub}
        </p>
      </div>

      <div className="relative mx-4 mb-4 flex-1 overflow-hidden rounded-[22px] md:mx-6">
        <img
          src={bgSrc}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className={cn(
            "absolute inset-0",
            isLive
              ? "bg-gradient-to-b from-black/55 via-black/40 to-black/70"
              : "bg-gradient-to-b from-white/20 via-white/10 to-white/30",
          )}
        />
        <div className="relative grid min-h-[360px] place-items-center px-5 py-8 md:min-h-[420px]">
          {isLive ? <PhoneMock /> : <SpotMock />}
        </div>
      </div>

      <div
        className={cn(
          "flex items-stretch gap-2 rounded-b-[28px] px-4 py-5 md:px-6",
          isLive ? "bg-[#0d0d10]" : "bg-white",
        )}
      >
        {data.steps.map((s, i) => (
          <Fragment key={s.n}>
            <Step n={i + 1} title={s.title} body={s.body} dark={isLive} />
            {i < data.steps.length - 1 ? <Arrow dark={isLive} /> : null}
          </Fragment>
        ))}
      </div>
    </article>
  );
}

function Step({
  n,
  title,
  body,
  dark,
}: {
  n: number;
  title: string;
  body: string;
  dark: boolean;
}) {
  return (
    <div className="flex flex-1 flex-col items-start gap-1.5">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[11px] font-semibold text-white">
        {n}
      </span>
      <p
        className={cn(
          "text-[13px] font-semibold",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "text-[11px] leading-snug",
          dark
            ? "text-[color:var(--color-snow-mute)]"
            : "text-[color:var(--color-ink-mute)]",
        )}
      >
        {body}
      </p>
    </div>
  );
}

function Arrow({ dark }: { dark: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "hidden shrink-0 self-start pt-2.5 font-mono text-[13px] md:block",
        dark
          ? "text-[color:var(--color-snow-mute)]"
          : "text-[color:var(--color-ink-mute)]",
      )}
    >
      →
    </div>
  );
}

function FooterReassurance() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
      className="mx-auto mt-14 flex max-w-[46ch] flex-col items-center text-center md:mt-20"
    >
      <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink">
        <ShieldCheck className="h-4 w-4 text-[color:var(--color-ink-mute)]" />
        {products.footer.title}
      </div>
      <p className="mt-2 text-[14px] text-[color:var(--color-ink-dim)]">
        {products.footer.sub}
      </p>
    </div>
  );
}
