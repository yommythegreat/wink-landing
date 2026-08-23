// Layout-only route for the blog. Wraps both /blog and /blog/$slug so
// SiteNav + SiteFooter render once around every blog view, and the
// paper mood applies to the whole subsection.
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { PaperGrain } from "@/components/landing/PaperGrain";

export const Route = createFileRoute("/blog")({
  component: () => (
    <div className="relative min-h-[100dvh] bg-paper text-ink">
      <PaperGrain />
      <SiteNav variant="external" />
      <Outlet />
      <SiteFooter variant="external" />
    </div>
  ),
});
