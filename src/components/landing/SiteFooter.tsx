import { footer } from "./copy";

// Editorial footer — three columns: brand+copyright, primary links,
// city + secondary/legal links row. Uses raw anchors (not Link) so
// external hash targets and static pages both resolve identically
// whether the visitor is on / or /privacy.
//
// `variant` is accepted for parity with the old API (privacy/terms
// pages pass "external"), but the primary link hrefs already begin
// with `/` in copy.ts so no rewrite is needed.
export function SiteFooter(_props: { variant?: "home" | "external" } = {}) {
  return (
    <footer className="section-paper-2 border-t border-[color:var(--color-paper-line)]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between md:px-10">
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

        <div className="text-[13px] text-[color:var(--color-ink-dim)]">
          {footer.city}
        </div>
      </div>

      <div className="border-t border-[color:var(--color-paper-line)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-[12px] text-[color:var(--color-ink-mute)] md:px-10">
          <span className="font-mono uppercase tracking-[0.18em]">
            A small knowing gesture, shared.
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
