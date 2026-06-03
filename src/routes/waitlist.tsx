import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";

const WAITLIST_URL = "https://wink-waitlist.agboluajeabayomi.workers.dev";

/**
 * The waitlist has its own standalone site at wink-waitlist.workers.dev.
 * This route exists only to bounce any stale `/waitlist` link to the new
 * home. Server-side it throws a redirect (clean 30x); client-side the
 * `useEffect` fallback fires `window.location.replace` for the rare case
 * where SSR didn't catch it.
 */
export const Route = createFileRoute("/waitlist")({
  beforeLoad: () => {
    throw redirect({ href: WAITLIST_URL });
  },
  component: WaitlistRedirect,
});

function WaitlistRedirect() {
  useEffect(() => {
    window.location.replace(WAITLIST_URL);
  }, []);
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 text-center">
      <p className="text-sm text-muted-foreground">
        Taking you to the waitlist…{" "}
        <a
          href={WAITLIST_URL}
          className="text-foreground underline-offset-2 hover:underline"
        >
          tap here
        </a>{" "}
        if it doesn't open.
      </p>
    </div>
  );
}
