import { useState } from "react";
import { Eyebrow } from "../Eyebrow";
import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { products } from "../copy";
import { ProximityRing } from "../viz/ProximityRing";
import { DayClock } from "../viz/DayClock";
import { CategoryBars } from "../viz/CategoryBars";
import { VennDiagram } from "../viz/VennDiagram";
import { cn } from "@/lib/utils";

type CardKey = "live" | "spot" | null;

// The centrepiece section. Two big cards side-by-side; tapping either
// expands its "bubble" — a large explainer panel below the pair with 3
// steps + 2 inline data-viz. Only one bubble is open at a time.
//
// Height animation via a grid-template-rows 0fr → 1fr trick on
// .bubble-region (defined in styles.css), which avoids the height:auto
// transition trap while keeping the collapsed state semantically
// present in the DOM.
export function TwoProducts() {
  const [active, setActive] = useState<CardKey>(null);
  const h2Ref = useReveal<HTMLHeadingElement>();
  const subRef = useReveal<HTMLParagraphElement>();

  function toggle(key: Exclude<CardKey, null>) {
    setActive((prev) => (prev === key ? null : key));
  }

  return (
    <SectionShell id="products" mood="paper" className="py-24 md:py-32">
      <div className="max-w-[42ch]">
        <Eyebrow>{products.eyebrowLead}</Eyebrow>
        <h2 ref={h2Ref} data-reveal className="h-xl mt-4 text-ink">
          {products.headline.lead}
          <span className="text-accent">{products.headline.accent}</span>
        </h2>
        <p ref={subRef} data-reveal style={{ "--reveal-delay": "0.1s" } as React.CSSProperties} className="lede mt-4">
          {products.sub}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
        <ProductCard
          id="live"
          bubbleId="bub-live"
          expanded={active === "live"}
          onToggle={() => toggle("live")}
          data={products.live}
          mood="dark"
          photoSrc="/images/live.jpg"
          photoAlt="Four friends talking over drinks at a café table in the evening"
        />
        <ProductCard
          id="spot"
          bubbleId="bub-spot"
          expanded={active === "spot"}
          onToggle={() => toggle("spot")}
          data={products.spot}
          mood="warm"
          photoSrc="/images/spot.jpg"
          photoAlt="Two women in conversation at a bookshop café"
        />
      </div>

      <Bubble
        id="bub-live"
        open={active === "live"}
        variant="live"
        data={products.live}
      />
      <Bubble
        id="bub-spot"
        open={active === "spot"}
        variant="spot"
        data={products.spot}
      />
    </SectionShell>
  );
}

type CardData = typeof products.live | typeof products.spot;

function ProductCard({
  id,
  bubbleId,
  expanded,
  onToggle,
  data,
  mood,
  photoSrc,
  photoAlt,
}: {
  id: string;
  bubbleId: string;
  expanded: boolean;
  onToggle: () => void;
  data: CardData;
  mood: "warm" | "dark";
  photoSrc: string;
  photoAlt: string;
}) {
  return (
    <button
      type="button"
      id={id}
      aria-expanded={expanded}
      aria-controls={bubbleId}
      onClick={onToggle}
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-[28px] border p-6 text-left transition-transform duration-500",
        "hover:-translate-y-1",
        mood === "dark"
          ? "border-[color:var(--color-dark-line)] bg-[color:var(--color-dark-2)] text-snow"
          : "border-[color:var(--color-paper-line)] bg-[#faf9f5] text-ink",
      )}
    >
      <div className="flex items-start justify-between">
        <span
          aria-hidden
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-bold",
            mood === "dark" ? "bg-white/10 text-white" : "bg-ink text-white",
          )}
        >
          ◠
        </span>
        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.24em]",
            mood === "dark" ? "text-[color:var(--color-snow-mute)]" : "text-[color:var(--color-ink-mute)]",
          )}
        >
          {expanded ? "Open" : "Tap to expand"}
        </span>
      </div>

      <h3 className="h-md mt-6">
        {data.name}
        <br />
        <small
          className={cn(
            "block text-[14px] font-normal leading-snug mt-1.5",
            mood === "dark" ? "text-[color:var(--color-snow-dim)]" : "text-[color:var(--color-ink-dim)]",
          )}
        >
          {data.tagline}
        </small>
      </h3>

      <div className="mt-6 overflow-hidden rounded-2xl">
        <img
          src={photoSrc}
          alt={photoAlt}
          loading="lazy"
          className="aspect-[16/10] w-full rounded-2xl object-cover"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "rounded-full border px-3 py-1 text-[11px] font-medium",
              mood === "dark"
                ? "border-white/15 text-snow"
                : "border-[color:var(--color-paper-line)] text-ink",
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className={cn(
          "mt-6 flex items-center justify-between border-t pt-5 text-[13px] font-semibold",
          mood === "dark" ? "border-white/10 text-snow" : "border-[color:var(--color-paper-line)] text-ink",
        )}
      >
        <span>{expanded ? data.lblClose : data.lblOpen}</span>
        <span
          aria-hidden
          className={cn(
            "grid h-8 w-8 place-items-center rounded-full transition-transform duration-300",
            expanded ? "rotate-180" : "",
            mood === "dark" ? "bg-white/10" : "bg-ink text-white",
          )}
        >
          ↓
        </span>
      </div>
    </button>
  );
}

function Bubble({
  id,
  open,
  variant,
  data,
}: {
  id: string;
  open: boolean;
  variant: "live" | "spot";
  data: CardData;
}) {
  const isSpot = variant === "spot";
  return (
    <div
      id={id}
      role="region"
      className={cn(
        "bubble-region mt-6",
        // Make the region itself hidden from AT when collapsed
      )}
      data-open={open ? "true" : "false"}
      aria-hidden={!open}
    >
      <div>
        <div
          className={cn(
            "mt-2 rounded-[28px] border p-6 md:p-10",
            isSpot
              ? "border-[color:var(--color-dark-line)] bg-[color:var(--color-dark-1)] text-snow"
              : "border-[color:var(--color-paper-line)] bg-white text-ink",
          )}
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-12">
            <div>
              <span
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.24em]",
                  isSpot ? "text-[color:var(--color-snow-mute)]" : "text-[color:var(--color-ink-mute)]",
                )}
              >
                {data.bubbleEyebrow}
              </span>
              <h3 className="h-md mt-4">{data.bubbleHeadline}</h3>
              <p
                className={cn(
                  "lede mt-4",
                  isSpot && "text-[color:var(--color-snow-dim)]",
                )}
              >
                {data.bubbleLede.map((chunk, i) =>
                  typeof chunk === "string" ? (
                    <span key={i}>{chunk}</span>
                  ) : "b" in chunk ? (
                    <b key={i}>{chunk.b}</b>
                  ) : (
                    <i key={i}>{chunk.i}</i>
                  ),
                )}
              </p>

              <ol className="mt-8 grid gap-5">
                {data.steps.map((s) => (
                  <li key={s.n} className="grid grid-cols-[36px_1fr] gap-4">
                    <span
                      aria-hidden
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-full font-mono text-[13px] font-semibold",
                        isSpot ? "bg-white/8 text-accent" : "bg-ink text-white",
                      )}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h4 className="text-[16px] font-semibold">{s.title}</h4>
                      <p
                        className={cn(
                          "mt-1 text-[14px] leading-relaxed",
                          isSpot
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
            </div>

            <aside className="grid gap-4 self-start">
              <BubblePanel
                title={data.panelA.title}
                caption={data.panelA.caption}
                dark={isSpot}
              >
                {isSpot ? (
                  <CategoryBars />
                ) : (
                  <ProximityRing />
                )}
              </BubblePanel>
              <BubblePanel
                title={data.panelB.title}
                caption={data.panelB.caption}
                dark={isSpot}
              >
                {isSpot ? <VennDiagram /> : <DayClock />}
              </BubblePanel>
              <div className="mt-2 flex items-center justify-between">
                <a
                  href={data.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  {data.cta.label}
                  <span aria-hidden>→</span>
                </a>
                {data.note ? (
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.24em]",
                      isSpot ? "text-[color:var(--color-snow-mute)]" : "text-[color:var(--color-ink-mute)]",
                    )}
                  >
                    {data.note}
                  </span>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function BubblePanel({
  title,
  caption,
  children,
  dark,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
  dark: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5",
        dark
          ? "border-[color:var(--color-dark-line)] bg-white/[0.03]"
          : "border-[color:var(--color-paper-line)] bg-[#faf9f5]",
      )}
    >
      <h5
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.24em]",
          dark ? "text-[color:var(--color-snow-mute)]" : "text-[color:var(--color-ink-mute)]",
        )}
      >
        {title}
      </h5>
      <div className="mt-4">{children}</div>
      <p
        className={cn(
          "mt-3 text-[12px] leading-relaxed",
          dark ? "text-[color:var(--color-snow-dim)]" : "text-[color:var(--color-ink-dim)]",
        )}
      >
        {caption}
      </p>
    </div>
  );
}
