import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { WinkLogo } from "@/components/wink/WinkLogo";
import { ThemeToggle } from "@/components/wink/ThemeToggle";
import { cn } from "@/lib/utils";

// Points to the deployed wink-user-dashboard worker — set via VITE_APP_URL env var.
const APP_URL: string = import.meta.env.VITE_APP_URL ?? "";

/**
 * `variant` controls how the in-page anchor links behave.
 *  - "home": plain `#how` etc. (only works on the index page).
 *  - "external": `/#how` etc. so clicking from a subpage (privacy, terms)
 *    routes back to home and scrolls to the section.
 */
export function SiteNav({ variant = "home" }: { variant?: "home" | "external" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prefix = variant === "external" ? "/" : "";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "bg-transparent",
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <WinkLogo className="h-7 w-7" />
          <span className="font-display text-xl font-semibold tracking-tight">wink</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href={`${prefix}#how`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            How it works
          </a>
          <a
            href={`${prefix}#spots`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Spots
          </a>
          <a
            href={`${prefix}#safety`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Safety
          </a>
          <a
            href={`${prefix}#pricing`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href={`${prefix}#faq`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`${APP_URL}/login`}
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary md:inline-flex"
          >
            Log in
          </a>
          <a
            href={`${APP_URL}/signup`}
            className="rounded-full bg-wink px-4 py-2 text-sm font-medium text-wink-foreground transition-opacity hover:opacity-90"
          >
            Sign up
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary md:hidden"
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            <a
              href={`${prefix}#how`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              How it works
            </a>
            <a
              href={`${prefix}#spots`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              Spots
            </a>
            <a
              href={`${prefix}#safety`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              Safety
            </a>
            <a
              href={`${prefix}#pricing`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              Pricing
            </a>
            <a
              href={`${prefix}#faq`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              FAQ
            </a>
            <a
              href={`${APP_URL}/login`}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
