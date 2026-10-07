import { useState } from "react";
import { SectionShell } from "../SectionShell";
import { CATEGORY_COUNTS, products } from "../copy";
import { cn } from "@/lib/utils";

type Pillar = "live" | "spot";

// Centrepiece section. Two product cards side-by-side, each with its
// name, one-line pitch, a photo, and its three steps.
//
// On mobile only one card shows at a time; the Live/Spot toggle under
// the intro switches between them. On desktop both cards render and the
// toggle is hidden.
export function TwoProducts() {
  const [pillar, setPillar] = useState<Pillar>("live");

  return (
    <SectionShell id="products" mood="paper" className="py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="h-xl text-ink">
          {products.headline.lead}
          <span className="text-accent">{products.headline.accent}</span>
        </h2>
        <p className="lede mt-4 max-w-[52ch]">{products.sub}</p>
        <PillToggle value={pillar} onChange={setPillar} />
      </div>

      <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-2">
        <div className={cn(pillar === "live" ? "block" : "hidden md:block")}>
          <ProductCard variant="live" />
        </div>
        <div className={cn(pillar === "spot" ? "block" : "hidden md:block")}>
          <ProductCard variant="spot" />
        </div>
      </div>
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
      className="mt-8 inline-flex rounded-full border border-[color:var(--color-paper-line)] bg-white p-1 md:hidden"
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
              "rounded-full px-5 py-2 text-[15px] font-medium transition-colors",
              active
                ? "bg-ink text-white"
                : "text-[color:var(--color-ink-dim)] hover:text-ink",
            )}
          >
            {p === "live" ? "Wink Live" : "Wink Spot"}
          </button>
        );
      })}
    </div>
  );
}

// Both cards share one component. Live uses the dark night mood, Spot
// stays on white.
function ProductCard({ variant }: { variant: Pillar }) {
  const isLive = variant === "live";
  const data = isLive ? products.live : products.spot;
  const bgSrc = isLive ? "/images/live.jpg" : "/images/spot.jpg";

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[28px] border",
        isLive
          ? "on-dark border-[color:var(--color-dark-line)] bg-[color:var(--color-dark-2)] text-snow"
          : "border-[color:var(--color-paper-line)] bg-white text-ink",
      )}
    >
      <div className="px-7 pb-7 pt-8 md:px-9 md:pt-9">
        <h3 className="h-md">{data.name}</h3>
        <p
          className={cn(
            "mt-3 max-w-[40ch] text-[17px] leading-relaxed",
            isLive
              ? "text-[color:var(--color-snow-dim)]"
              : "text-[color:var(--color-ink-dim)]",
          )}
        >
          {data.cardHeadline} {data.cardSub}
        </p>
      </div>

      <img
        src={bgSrc}
        alt=""
        aria-hidden
        className="aspect-[16/10] w-full object-cover"
      />

      <ol className="flex flex-1 flex-col gap-5 px-7 py-8 md:px-9">
        {data.steps.map((s, i) => (
          <li key={s.n} className="flex gap-4">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-[15px] font-semibold text-accent-foreground">
              {i + 1}
            </span>
            <div>
              <p className="text-[17px] font-semibold">{s.title}</p>
              <p
                className={cn(
                  "mt-0.5 text-[16px] leading-relaxed",
                  isLive
                    ? "text-[color:var(--color-snow-dim)]"
                    : "text-[color:var(--color-ink-dim)]",
                )}
              >
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {isLive ? null : (
        <p className="border-t border-[color:var(--color-paper-line)] px-7 py-6 text-[16px] leading-relaxed text-[color:var(--color-ink-dim)] md:px-9">
          <span className="font-semibold text-ink">Spot categories: </span>
          {CATEGORY_COUNTS.map((c) => c.label).join(", ")}.
        </p>
      )}
    </article>
  );
}
