import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { nav } from "./copy";

// Editorial sticky nav. Two states:
//   idle    — transparent over paper, subtle underline links
//   scrolled — solid paper background + border to signal shift
//
// Mobile: brand + CTA visible; nav-links collapse into a small
// menu button (details/summary — no JS needed for open/close).
// `variant="external"` prepends `/` to hash-anchor links so they route
// back to the landing page first when the visitor is on /privacy or
// /terms. Home uses bare hashes so anchors scroll in place.
export function SiteNav({
  variant = "home",
}: {
  variant?: "home" | "external";
} = {}) {
  const [scrolled, setScrolled] = useState(false);
  const prefix = variant === "external" ? "/" : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-[color:var(--color-paper-line)] bg-paper/85 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-4 md:px-10 md:py-5">
        <a
          href={variant === "external" ? "/" : "#top"}
          className="flex items-center gap-2 text-ink"
          aria-label="Wink home"
        >
          <BrandMark />
          <span className="text-lg font-semibold tracking-tight">
            {nav.brand}
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={`${prefix}${l.href}`}
              className="text-[14px] font-medium text-[color:var(--color-ink-dim)] transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${prefix}${nav.cta.href}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {nav.cta.label}
          </a>
        </div>

        <a
          href={`${prefix}${nav.cta.href}`}
          className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white md:hidden"
        >
          Early access
        </a>
      </div>
    </nav>
  );
}

function BrandMark() {
  // Tiny square with the wink logo cue — dark tile + iris.
  return (
    <span
      aria-hidden
      className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink"
    >
      <svg viewBox="0 0 32 32" className="h-4 w-4">
        <circle cx="12" cy="16" r="3" fill="#f0eee9" />
        <circle cx="12" cy="16" r="1.2" fill="#ff3b6b" />
        <path
          d="M20 15 Q22 13 24 15"
          stroke="#f0eee9"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
