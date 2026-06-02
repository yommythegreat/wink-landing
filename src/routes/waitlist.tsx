import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart,
  ShieldCheck,
  Lock,
  Radio,
  Check,
} from "lucide-react";
import { WinkLogo } from "@/components/wink/WinkLogo";
import { ThemeToggle } from "@/components/wink/ThemeToggle";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { cn } from "@/lib/utils";

const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_KEY: string = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Join the Wink Waitlist" },
      {
        name: "description",
        content:
          "Be first to use Wink in your city. A real-time social connection app for concerts, campuses, cafes, and anywhere people gather.",
      },
      { property: "og:title", content: "Join the Wink Waitlist" },
      {
        property: "og:description",
        content:
          "Find out if the interest is mutual before the moment passes. Get early access.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: WaitlistPage,
});

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim().toLowerCase();

    // Light client-side validation. Backend RLS + unique constraint catch the rest.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setState({ kind: "error", message: "Enter a valid email address." });
      return;
    }

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      setState({
        kind: "error",
        message: "Waitlist is temporarily unavailable. Email chat@usewink.app to join.",
      });
      return;
    }

    setState({ kind: "submitting" });
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_signups`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email: value, source: "landing" }),
      });
      if (res.ok) {
        setState({ kind: "success" });
        return;
      }
      // Duplicate email is a 409 — treat as success from the user's POV.
      if (res.status === 409) {
        setState({ kind: "success" });
        return;
      }
      const text = await res.text();
      setState({
        kind: "error",
        message: `Couldn't join the waitlist. ${text || "Please try again."}`,
      });
    } catch (err) {
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "Network error. Try again.",
      });
    }
  }

  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      {/* Stripped-down header — single CTA page, no nav distractions */}
      <header
        className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2">
            <WinkLogo className="h-7 w-7" />
            <span className="font-display text-xl font-semibold tracking-tight">
              wink
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero with email capture */}
      <section className="relative overflow-hidden">
        <BackdropGlow />
        <div className="mx-auto max-w-3xl px-5 pb-16 pt-12 text-center md:pb-24 md:pt-20">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wink" />
            </span>
            Early access opening soon
          </div>

          <h1 className="font-display text-[44px] leading-[0.98] sm:text-[56px] md:text-[68px]">
            Connection shouldn't be{" "}
            <em className="not-italic text-wink">guesswork.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Wink helps people nearby find out if the interest is mutual, before the moment
            passes. Join the waitlist and we'll let you know the moment Wink opens in your
            city.
          </p>

          <WaitlistForm
            email={email}
            setEmail={setEmail}
            state={state}
            onSubmit={onSubmit}
          />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" /> Privacy-first
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5" /> Mutual matches only
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> No unsolicited messages
            </span>
          </div>
        </div>
      </section>

      {/* Three pillars — short version of How / Why / Safety */}
      <section className="border-t border-border bg-surface/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              What is Wink
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Real Time. <em className="not-italic text-wink">Real People.</em>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
              Wink is a real-time social connection app that helps people nearby connect
              through mutual interest in real time.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            <Pillar
              icon={Radio}
              title="Go Live nearby"
              body="Turn on visibility for a short window. Discover other people who are also live in your immediate area."
            />
            <Pillar
              icon={Heart}
              title="Wink mutually"
              body="Quietly signal interest. Nothing is shared unless they Wink you back."
            />
            <Pillar
              icon={ShieldCheck}
              title="24 hours to act"
              body="Mutual matches unlock a 24-hour chat. Meet, exchange numbers, or move on."
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklab, var(--wink) 25%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            Don't miss <em className="not-italic text-wink">the moment.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            Join the waitlist. We'll email you the moment Wink opens where you are.
          </p>

          <WaitlistForm
            email={email}
            setEmail={setEmail}
            state={state}
            onSubmit={onSubmit}
            id="cta-form"
          />
        </div>
      </section>

      <SiteFooter variant="external" />
    </div>
  );
}

/* ---------------- Form ---------------- */

function WaitlistForm({
  email,
  setEmail,
  state,
  onSubmit,
  id,
}: {
  email: string;
  setEmail: (v: string) => void;
  state: SubmitState;
  onSubmit: (e: React.FormEvent) => void;
  id?: string;
}) {
  if (state.kind === "success") {
    return (
      <div
        id={id}
        className="mx-auto mt-8 max-w-md rounded-2xl border border-wink/40 bg-card p-5 text-center"
      >
        <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-wink text-wink-foreground">
          <Check className="h-5 w-5" />
        </div>
        <p className="font-display text-lg">You're on the list.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We'll email you when Wink goes live in your city.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        autoComplete="email"
        inputMode="email"
        disabled={state.kind === "submitting"}
        aria-label="Email address"
        className={cn(
          "h-12 flex-1 rounded-full border border-border bg-card px-5 text-base text-foreground placeholder:text-muted-foreground focus:border-wink focus:outline-none focus:ring-2 focus:ring-wink/30",
          state.kind === "submitting" && "opacity-60",
        )}
      />
      <Button
        type="submit"
        disabled={state.kind === "submitting"}
        className="h-12 rounded-full bg-wink px-6 text-base font-medium text-wink-foreground hover:opacity-90"
      >
        {state.kind === "submitting" ? "Joining…" : "Join waitlist"}
      </Button>
      {state.kind === "error" && (
        <p className="basis-full text-center text-xs text-destructive sm:text-left">
          {state.message}
        </p>
      )}
    </form>
  );
}

/* ---------------- Local helpers ---------------- */

function Pillar({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-wink/10 text-wink">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-xl">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function BackdropGlow() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[680px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 0%, color-mix(in oklab, var(--wink) 35%, transparent), transparent 60%), radial-gradient(ellipse 60% 60% at 10% 20%, color-mix(in oklab, var(--wink) 18%, transparent), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </>
  );
}
