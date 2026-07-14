import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { WinkLogo } from "@/components/wink/WinkLogo";
import { XIcon, TikTokIcon } from "@/components/wink/SocialIcons";

const APP_URL: string = import.meta.env.VITE_APP_URL ?? "";

/**
 * `variant` controls whether section anchor links are local or external.
 *  - "home": `#how` etc.
 *  - "external": `/#how` etc. so links from /privacy or /terms route home first.
 */
export function SiteFooter({ variant = "home" }: { variant?: "home" | "external" }) {
  const prefix = variant === "external" ? "/" : "";

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5">
        {/* Top row: brand + nav + socials */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <div className="flex items-center gap-2">
            <WinkLogo className="h-5 w-5" />
            <span className="font-display text-base font-semibold">wink</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a href={`${prefix}#how`} className="hover:text-foreground">
              How it works
            </a>
            <a href={`${prefix}#spots`} className="hover:text-foreground">
              Spots
            </a>
            <a href={`${prefix}#safety`} className="hover:text-foreground">
              Safety
            </a>
            <a href={`${prefix}#pricing`} className="hover:text-foreground">
              Pricing
            </a>
            <a href={`${prefix}#faq`} className="hover:text-foreground">
              FAQ
            </a>
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <a href={`${APP_URL}/login`} className="hover:text-foreground">
              Log in
            </a>
            <a href={`${APP_URL}/signup`} className="hover:text-foreground">
              Sign up
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                href="https://instagram.com/usewinkapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-wink/40 hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/usewinkapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-wink/40 hover:text-foreground"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com/@usewinkapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-wink/40 hover:text-foreground"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
            <a
              href="mailto:chat@usewink.app"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              chat@usewink.app
            </a>
          </div>
        </div>

        {/* Bottom: tagline + copyright */}
        <div className="flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left">
          <p className="max-w-2xl">
            Wink helps you connect with people you notice — live and nearby, or at the places you
            already go.
          </p>
          <p>2026, Wink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
