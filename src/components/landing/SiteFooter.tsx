import { Instagram } from "lucide-react";
import { XIcon, TikTokIcon } from "@/components/wink/SocialIcons";
import { footer } from "./copy";

// Editorial footer. Top row: copyright + primary nav + socials.
// Bottom row: tagline + Privacy/Terms. Uses raw anchors so hash
// targets and static pages resolve identically from any route.
//
// `variant` is accepted for parity with the old API (privacy/terms
// pass "external"), but primaryLinks + secondaryLinks already carry
// leading slashes in copy.ts so no rewrite is needed.
export function SiteFooter(_props: { variant?: "home" | "external" } = {}) {
  return (
    <footer className="section-paper-2 border-t border-[color:var(--color-paper-line)]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between md:px-10">
        <div className="text-[13px] text-[color:var(--color-ink-dim)]">
          {footer.copyright}
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
          {footer.primaryLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[color:var(--color-ink-dim)] transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {footer.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-paper-line)] text-[color:var(--color-ink-dim)] transition-colors hover:border-ink hover:text-ink"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-[color:var(--color-paper-line)]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-[12px] text-[color:var(--color-ink-mute)] md:px-10">
          <span className="max-w-[60ch] text-[13px] leading-relaxed text-[color:var(--color-ink-dim)]">
            {footer.tagline}
          </span>
          <nav className="flex gap-5">
            {footer.secondaryLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: "instagram" | "x" | "tiktok" }) {
  if (name === "instagram") return <Instagram className="h-4 w-4" />;
  if (name === "x") return <XIcon className="h-4 w-4" />;
  return <TikTokIcon className="h-4 w-4" />;
}
