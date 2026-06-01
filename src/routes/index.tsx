import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  Heart,
  Sparkles,
  ShieldCheck,
  Timer,
  MapPin,
  MessageCircle,
  Lock,
  UserX,
  Radio,
  ChevronDown,
  Check,
  X,
  GraduationCap,
  Music2,
  PartyPopper,
  Wine,
  Briefcase,
  Coffee,
  Users,
} from "lucide-react";
import { WinkLogo } from "@/components/wink/WinkLogo";
import { ThemeToggle } from "@/components/wink/ThemeToggle";
import { PersonCircle } from "@/components/wink/PersonTile";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Points to the deployed wink-user-dashboard worker — set via VITE_APP_URL env var.
const APP_URL: string = import.meta.env.VITE_APP_URL ?? "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wink: Real-Life Dating App for Real-World Moments" },
      {
        name: "description",
        content:
          "Wink is a proximity dating app that connects people nearby through mutual interest. Real-time matchmaking for events, campuses, and everyday moments.",
      },
      { property: "og:title", content: "Wink: Real-Life Dating App" },
      {
        property: "og:description",
        content:
          "See someone? Find out if it's mutual. Wink is the real-world dating app for proximity-based connections.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "real life dating app, proximity dating app, nearby dating app, location-based dating app, mutual attraction app, dating app for events, dating app for university students, real-time dating app",
      },
    ],
    links: [{ rel: "canonical", href: "https://wink.app/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Problem />
      <WhyDifferent />
      <HowItWorks />
      <Safety />
      <UseCases />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
      <FaqJsonLd />
    </div>
  );
}

/* ---------------- NAV ---------------- */

function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
          <a href="#how" className="text-sm text-muted-foreground hover:text-foreground">
            How it works
          </a>
          <a href="#safety" className="text-sm text-muted-foreground hover:text-foreground">
            Safety
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
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
              href="#how"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              How it works
            </a>
            <a
              href="#safety"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              Safety
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm hover:bg-secondary"
            >
              Pricing
            </a>
            <a
              href="#faq"
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

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackdropGlow />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-2 md:gap-8 md:pb-28 md:pt-20">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wink" />
            </span>
            Real-time. Real-world. Mutual only.
          </div>
          <h1 className="font-display text-[44px] leading-[0.98] sm:text-[56px] md:text-[68px]">
            Never miss <em className="not-italic text-wink">the moment</em> again.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            See someone nearby? Find out if it's mutual without ever walking up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-12 rounded-full bg-wink px-6 text-base font-medium text-wink-foreground hover:opacity-90"
            >
              <a href={`${APP_URL}/signup`}>Sign up free</a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6 text-base font-medium">
              <a href={`${APP_URL}/login`}>Log in</a>
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
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
          <StoreButtons className="mt-8" />
        </div>

        <div className="relative z-10 flex justify-center md:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
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

/* ---------------- PHONE MOCKUP ---------------- */

function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-[560px] w-[280px] rounded-[44px] border border-border bg-card p-3 shadow-2xl",
        className,
      )}
      style={{
        boxShadow:
          "0 40px 80px -30px color-mix(in oklab, var(--wink) 35%, transparent), 0 20px 40px -20px rgba(0,0,0,0.3)",
      }}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-background" />
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-background">
        {children}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      <PhoneFrame>
        <DiscoverScreen />
      </PhoneFrame>

      <div className="absolute -left-10 top-20 hidden w-[220px] rotate-[-6deg] rounded-2xl border border-border bg-card p-3 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-3">
          <PersonCircle seed="june" size={42} />
          <div className="min-w-0">
            <div className="text-xs font-semibold">It's mutual!</div>
            <div className="truncate text-[11px] text-muted-foreground">June, 18 m away</div>
          </div>
          <Heart className="ml-auto h-4 w-4 fill-wink text-wink" />
        </div>
      </div>

      <div className="absolute -right-6 bottom-16 hidden w-[200px] rotate-[5deg] rounded-2xl border border-border bg-card p-3 shadow-xl sm:block">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wink opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wink" />
          </span>
          <span className="text-xs font-semibold">You're live</span>
          <span className="ml-auto text-[10px] text-muted-foreground">12 nearby</span>
        </div>
      </div>
    </div>
  );
}

function DiscoverScreen() {
  const people = [
    { seed: "june", name: "June", age: 26, dist: "18 m" },
    { seed: "wes", name: "Wes", age: 23, dist: "22 m" },
    { seed: "aya", name: "Aya", age: 28, dist: "30 m" },
    { seed: "theo", name: "Theo", age: 25, dist: "34 m" },
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <WinkLogo className="h-5 w-5" />
          <span className="font-display text-sm font-semibold">Discover</span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-wink/10 px-2 py-0.5 text-[10px] font-medium text-wink">
          <span className="h-1.5 w-1.5 rounded-full bg-wink" />
          Live
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2 p-3">
        {people.map((p) => (
          <div key={p.seed} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative aspect-[3/4]">
              <PersonCircle
                seed={p.seed}
                size={120}
                className="!absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 !rounded-xl"
              />
              <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between rounded-md bg-background/80 px-1.5 py-0.5 text-[10px] backdrop-blur">
                <span className="font-medium">
                  {p.name}, {p.age}
                </span>
                <span className="text-muted-foreground">{p.dist}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border p-3">
        <div className="flex h-10 items-center justify-center gap-2 rounded-full bg-wink text-xs font-semibold text-wink-foreground">
          <Radio className="h-3.5 w-3.5" /> You're live · 12 nearby
        </div>
      </div>
    </div>
  );
}

/* ---------------- PROBLEM ---------------- */

function Problem() {
  const moments = [
    {
      icon: Coffee,
      title: "Eye contact at the café",
      body: "You both looked twice. Then you both walked out.",
    },
    {
      icon: GraduationCap,
      title: "Across the lecture hall",
      body: "Same row every Tuesday. Never a word.",
    },
    {
      icon: Music2,
      title: "That concert moment",
      body: "You vibed. The song ended. So did the chance.",
    },
    {
      icon: Eye,
      title: "The almost-approach",
      body: "You hesitated. They left. You replayed it for days.",
    },
  ];
  return (
    <section className="border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            The problem
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            You've been here <em className="not-italic text-wink">before.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            Sometimes the connection is there. The confidence isn't. Most people don't fear
            attraction; they fear rejection, awkwardness, and misreading the moment.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((m) => (
            <div
              key={m.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-wink/40 hover:shadow-lg"
            >
              <div
                className="absolute inset-0 -z-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--wink) 12%, transparent), transparent 70%)",
                }}
              />
              <m.icon className="relative h-6 w-6 text-wink" />
              <h3 className="relative mt-4 font-display text-xl">{m.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-2xl text-foreground/90 md:text-3xl">
          Wink removes the guesswork.
        </p>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Spot someone",
      body: "You're in a café, lecture, concert, anywhere. Someone catches your eye.",
      icon: Eye,
    },
    {
      n: "02",
      title: "Go Live",
      body: "Open Wink and turn on visibility to browse nearby active profiles.",
      icon: Radio,
    },
    {
      n: "03",
      title: "Send a Wink",
      body: "Like the profile of someone you're interested in. Quietly. Privately.",
      icon: Heart,
    },
    {
      n: "04",
      title: "Match instantly",
      body: "If it's mutual, you unlock a 24-hour chat. No pressure. Just possibility.",
      icon: Timer,
    },
  ];
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Four steps from <em className="not-italic text-wink">eye contact to chat.</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-wink">{s.n}</span>
                <s.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-8 md:grid-cols-3">
          <MiniMock title="Go Live" subtitle="Visibility on">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-wink/10">
                <span className="absolute h-full w-full animate-ping rounded-full bg-wink/20" />
                <Radio className="h-7 w-7 text-wink" />
              </div>
              <span className="text-xs font-medium">12 nearby in 50 m</span>
            </div>
          </MiniMock>
          <MiniMock title="It's mutual" subtitle="Match unlocked">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
              <div className="flex items-center -space-x-3">
                <PersonCircle seed="you" size={56} />
                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-wink text-wink-foreground shadow-lg">
                  <Heart className="h-4 w-4 fill-current" />
                </div>
                <PersonCircle seed="june" size={56} />
              </div>
              <span className="text-xs font-medium">You and June matched</span>
            </div>
          </MiniMock>
          <MiniMock title="24h chat" subtitle="Make it count">
            <div className="flex h-full flex-col gap-2 p-4 text-left">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-wink px-3 py-1.5 text-xs text-wink-foreground">
                Hey, third floor café?
              </div>
              <div className="mr-auto max-w-[80%] rounded-2xl rounded-tl-sm bg-secondary px-3 py-1.5 text-xs">
                On my way ✨
              </div>
              <div className="mt-auto inline-flex items-center gap-1.5 self-center rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">
                <Timer className="h-3 w-3" /> 23h 41m left
              </div>
            </div>
          </MiniMock>
        </div>
      </div>
    </section>
  );
}

function MiniMock({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div>
          <div className="text-xs font-semibold">{title}</div>
          <div className="text-[10px] text-muted-foreground">{subtitle}</div>
        </div>
        <WinkLogo className="h-4 w-4" />
      </div>
      <div className="h-44">{children}</div>
    </div>
  );
}

/* ---------------- WHY DIFFERENT ---------------- */

function WhyDifferent() {
  return (
    <section className="border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Why Wink
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Dating apps match online.
            <br />
            Wink matches <em className="not-italic text-wink">in real life.</em>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          <ComparisonCard
            tone="muted"
            title="Traditional dating apps"
            items={[
              { ok: false, text: "Random swiping with strangers" },
              { ok: false, text: "Long-distance matches that fade" },
              { ok: false, text: "Endless chatting, no meeting" },
              { ok: false, text: "Catfishing and ghosting" },
            ]}
          />
          <ComparisonCard
            tone="wink"
            title="Wink"
            items={[
              { ok: true, text: "Real-world proximity matches" },
              { ok: true, text: "Same place, same moment" },
              { ok: true, text: "Mutual real-time interest" },
              { ok: true, text: "24-hour chats, no endless DMs" },
            ]}
          />
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-base text-muted-foreground md:text-lg">
          Wink isn't built for endless chatting. It's built for real-world connection.
        </p>
      </div>
    </section>
  );
}

function ComparisonCard({
  tone,
  title,
  items,
}: {
  tone: "muted" | "wink";
  title: string;
  items: { ok: boolean; text: string }[];
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-6 md:p-8",
        tone === "wink" ? "border-wink/40 bg-card shadow-xl" : "border-border bg-card/60",
      )}
      style={
        tone === "wink"
          ? {
              boxShadow:
                "0 30px 60px -30px color-mix(in oklab, var(--wink) 40%, transparent)",
            }
          : undefined
      }
    >
      <h3 className={cn("font-display text-2xl", tone === "wink" && "text-wink")}>{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.text} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                it.ok ? "bg-wink text-wink-foreground" : "bg-muted text-muted-foreground",
              )}
            >
              {it.ok ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
            </span>
            <span className={cn(it.ok ? "text-foreground" : "text-muted-foreground")}>
              {it.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- SAFETY ---------------- */

function Safety() {
  const features = [
    {
      icon: EyeOff,
      title: "Invisible by default",
      body: "You're never on Wink unless you choose to be live.",
    },
    {
      icon: Heart,
      title: "Mutual matches only",
      body: "No one knows you liked them unless they liked you back.",
    },
    {
      icon: MapPin,
      title: "Limited radius",
      body: "Only profiles in your immediate area can see you.",
    },
    {
      icon: Timer,
      title: "24-hour chats",
      body: "Conversations expire so the moment stays in real life.",
    },
    {
      icon: MessageCircle,
      title: "Optional contact sharing",
      body: "Share your number only if you want to.",
    },
    {
      icon: UserX,
      title: "Permanent blocks",
      body: "Block once. Never seen again. Anywhere.",
    },
  ];
  return (
    <section id="safety" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Safety & privacy
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Built with consent <em className="not-italic text-wink">first.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            You decide when you're visible. You decide who you connect with. You decide what you
            share.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-wink/10 text-wink">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- USE CASES ---------------- */

function UseCases() {
  const cases = [
    { icon: GraduationCap, title: "Universities", body: "Same lecture hall, same library, same crush." },
    { icon: Music2, title: "Concerts", body: "See someone vibing with you? Find out if it's mutual." },
    { icon: PartyPopper, title: "Festivals", body: "Thousands of people. One real connection." },
    { icon: Wine, title: "Lounges & bars", body: "Skip the awkward intro. Match first, talk after." },
    { icon: Briefcase, title: "Conferences", body: "Network or romance. Same room, different vibes." },
    { icon: Coffee, title: "Cafés", body: "Tuesday morning, third table. You both noticed." },
    {
      icon: Users,
      title: "Social events",
      body: "Parties, meetups, gallery openings, wherever you show up.",
    },
    {
      icon: Sparkles,
      title: "Everyday moments",
      body: "Because the best ones happen when you least expect.",
    },
  ];
  return (
    <section className="border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Where Wink works
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Perfect for <em className="not-italic text-wink">real-world moments.</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-wink/40"
            >
              <c.icon className="h-5 w-5 text-wink" />
              <h3 className="mt-4 font-display text-lg">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOCIAL PROOF ---------------- */

function SocialProof() {
  const quotes = [
    { name: "Maya, 24", body: "Finally, a dating app that actually feels human." },
    { name: "Jordan, 27", body: "This would've saved me so many missed opportunities." },
    { name: "Sami, 22", body: "The 24-hour thing is genius. You actually meet up." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            The movement
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Real connections. <em className="not-italic text-wink">Real moments.</em>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          <Stat n="12k+" label="On the waitlist" />
          <Stat n="50 m" label="Discovery radius" />
          <Stat n="24h" label="Chat window" />
          <Stat n="100%" label="Mutual only" />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-border bg-card p-6">
              <blockquote className="font-display text-lg leading-snug">"{q.body}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <PersonCircle seed={q.name} size={32} />
                {q.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-5 text-center">
      <div className="font-display text-3xl text-foreground md:text-4xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- PRICING ---------------- */

const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    highlight: false,
    features: [
      "1 live session per day",
      "5 min session length",
      "30 min wink-back window",
      "All matching, chat, and safety features",
    ],
  },
  {
    name: "Weekly",
    price: "$2",
    cadence: "per week",
    highlight: false,
    features: [
      "Unlimited live sessions",
      "10, 20, or 30 min sessions",
      "24 hour wink-back window",
      "Cancel anytime",
    ],
  },
  {
    name: "Monthly",
    price: "$6",
    cadence: "per month",
    highlight: true,
    features: [
      "Unlimited live sessions",
      "10, 20, or 30 min sessions",
      "24 hour wink-back window",
      "Best for steady use",
    ],
  },
  {
    name: "Yearly",
    price: "$50",
    cadence: "per year",
    highlight: false,
    features: [
      "Unlimited live sessions",
      "10, 20, or 30 min sessions",
      "24 hour wink-back window",
      "Best value, save 31%",
    ],
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Free to start. <em className="not-italic text-wink">Premium when you're ready.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            Every plan includes the full Wink experience. Premium just removes the daily cap and
            extends the windows.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-3xl border p-6 md:p-7",
                tier.highlight
                  ? "border-wink/40 bg-card shadow-xl"
                  : "border-border bg-card",
              )}
              style={
                tier.highlight
                  ? {
                      boxShadow:
                        "0 30px 60px -30px color-mix(in oklab, var(--wink) 40%, transparent)",
                    }
                  : undefined
              }
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-wink px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-wink-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-4xl">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.cadence}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-wink text-wink-foreground">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
          Premium is billed through Stripe. Cancel anytime from Settings.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "What is Wink?",
    a: "Wink is a real-life dating and connection app. It helps you discover people physically near you who are also open to connecting, without having to walk up first.",
  },
  {
    q: "How does Wink work?",
    a: "Turn on Go Live to become visible to nearby users. Browse active profiles in your immediate area. If you both like each other, it's a mutual match and you unlock a 24-hour chat.",
  },
  {
    q: "Is Wink a dating app?",
    a: "Wink is built primarily for real-world dating, but it also supports networking and casual connections. There's no separate toggle to set; your bio, interests, and the conversation you start tell the story.",
  },
  {
    q: "Is Wink free?",
    a: "Yes, Wink is free to use. The free tier gives you one live session per day capped at 5 minutes, and a 30-minute window to wink back when someone winks you. Premium unlocks unlimited sessions, longer session lengths (10, 20, or 30 minutes), and a 24-hour wink-back window. Premium is available weekly ($2), monthly ($6), or yearly ($50).",
  },
  {
    q: "What happens after a match?",
    a: "A mutual wink opens a 24-hour chat between you. You can message in real time, or tap Share Contact to send your phone number and any social links you've saved. When the 24 hours run out the chat disappears, by design, so the focus stays on actually meeting up.",
  },
  {
    q: "Can people message me without permission?",
    a: "No. Wink only allows messaging after a mutual match. There are no unsolicited DMs, ever.",
  },
  {
    q: "How does location work?",
    a: "Wink uses your phone's location to show you only people within a small radius. You're invisible by default and only appear when you choose to go live.",
  },
  {
    q: "Is Wink safe?",
    a: "Yes. Wink is invisible-by-default, mutual-only, and includes permanent blocking, optional contact sharing, and disappearing chats. You're always in control.",
  },
  {
    q: "Do chats disappear?",
    a: "Yes. Every match unlocks a 24-hour chat window so the focus stays on real-world meeting, not endless messaging.",
  },
  {
    q: "Can I use Wink at concerts or events?",
    a: "Absolutely. Concerts, festivals, conferences, and lounges are some of the best places to use Wink. Anywhere lots of people gather in one spot.",
  },
  {
    q: "Does Wink work on university campuses?",
    a: "Yes. Wink is especially powerful on campuses, where you regularly cross paths with the same people in lectures, libraries, and cafés.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Everything <em className="not-italic text-wink">you're wondering.</em>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FaqJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklab, var(--wink) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
          The next time you lock eyes…
          <br />
          <em className="not-italic text-wink">don't miss the moment.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg">
          Join the real-world dating movement. Free to start. Mutual only. Always private.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="h-12 rounded-full bg-wink px-7 text-base font-medium text-wink-foreground hover:opacity-90"
          >
            <a href={`${APP_URL}/signup`}>Create account</a>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-7 text-base font-medium">
            <a href={`${APP_URL}/login`}>Log in</a>
          </Button>
        </div>
        <StoreButtons className="mt-8 justify-center" />
      </div>
    </section>
  );
}

/* ---------------- STORE BUTTONS ---------------- */

function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <StoreBadge top="Coming soon to" bottom="App Store" />
      <StoreBadge top="Coming soon to" bottom="Google Play" />
    </div>
  );
}

function StoreBadge({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div
      aria-disabled
      className="inline-flex h-12 cursor-not-allowed items-center gap-2 rounded-xl border border-border bg-card px-4 text-left opacity-90"
    >
      <Sparkles className="h-4 w-4 text-wink" />
      <div className="leading-tight">
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{top}</div>
        <div className="text-sm font-semibold">{bottom}</div>
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
        <div className="flex items-center gap-2">
          <WinkLogo className="h-5 w-5" />
          <span className="font-display text-base font-semibold">wink</span>
          <span className="ml-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wink
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <a href="#how" className="hover:text-foreground">
            How it works
          </a>
          <a href="#safety" className="hover:text-foreground">
            Safety
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
          <a href={`${APP_URL}/login`} className="hover:text-foreground">
            Log in
          </a>
          <a href={`${APP_URL}/signup`} className="hover:text-foreground">
            Sign up
          </a>
        </div>
      </div>
    </footer>
  );
}
