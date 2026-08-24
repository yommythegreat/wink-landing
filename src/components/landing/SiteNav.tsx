import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const prefix = variant === "external" ? "/" : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-[color:var(--color-paper-line)] bg-paper/85 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Three-column flex: brand left, center nav takes the flex-1
          middle, CTA sits at the right. Nav stays perfectly centered
          within the container even when brand + CTA differ in width. */}
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-6 py-4 md:px-10 md:py-5">
        <a
          href={variant === "external" ? "/" : "#top"}
          className="flex items-center gap-2.5 md:flex-none"
          aria-label="Wink home"
        >
          <BrandMark />
          <span className="text-[19px] font-semibold tracking-tight text-accent">
            {nav.brand}
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.external ? l.href : `${prefix}${l.href}`}
              className="text-[14px] font-medium text-[color:var(--color-ink-dim)] transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={`${prefix}${nav.cta.href}`}
          className="ml-auto hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex md:ml-0"
        >
          {nav.cta.label}
        </a>

        {/* Mobile-only hamburger button. The Early Access CTA lives
            inside the drawer so the header stays uncluttered. */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-ink md:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={2.2} />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        prefix={prefix}
      />
    </nav>
  );
}

function MobileMenu({
  open,
  onClose,
  prefix,
}: {
  open: boolean;
  onClose: () => void;
  prefix: string;
}) {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      {/* Scrim */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Drawer */}
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-[86%] max-w-[360px] flex-col bg-paper shadow-[0_20px_60px_-20px_rgba(20,18,15,0.35)] transition-transform duration-250",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-[16px] font-semibold tracking-tight text-accent">
            {nav.brand}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-paper-line)] bg-white text-ink"
          >
            <X className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-6 pt-4">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.external ? l.href : `${prefix}${l.href}`}
              onClick={onClose}
              className="border-b border-[color:var(--color-paper-line)] py-4 text-[18px] font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="px-6 pb-8 pt-4">
          <a
            href={`${prefix}${nav.cta.href}`}
            onClick={onClose}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white"
          >
            {nav.cta.label}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function BrandMark() {
  // The source PNG ships with light-color padding around the black
  // wink tile. Wrap in an overflow-hidden square and scale the image
  // slightly so only the tile inside shows — no white halo.
  return (
    <span
      aria-hidden
      className="block h-10 w-10 overflow-hidden rounded-[12px]"
    >
      <img
        src="/wink-mark-filled.png"
        alt=""
        className="h-full w-full scale-[1.18] object-cover"
      />
    </span>
  );
}

// Original hand-drawn SVG mark kept below in case we want to fall
// back to a scalable version. Never rendered.
function BrandMarkLegacy() {
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
