import { createFileRoute } from "@tanstack/react-router";
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
  Check,
  GraduationCap,
  Music2,
  PartyPopper,
  Wine,
  Briefcase,
  Coffee,
  Users,
} from "lucide-react";
import { WinkLogo } from "@/components/wink/WinkLogo";
import { PersonCircle } from "@/components/wink/PersonTile";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";
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
      { title: "Wink — Connect Live, or at Your Favorite Spots" },
      {
        name: "description",
        content:
          "Wink helps you connect two ways: go live to meet people nearby right now, or join Wink Spots — the cafés, gyms, and lounges you already go to — and connect with the regulars.",
      },
      { property: "og:title", content: "Wink — Live Connection or Your Favorite Spots" },
      {
        property: "og:description",
        content:
          "Two ways to connect: live and nearby, or through the places you already go. Not a dating app. Just people who might click.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "real-time social connection app, place-based social app, proximity social app, nearby people app, meet people at your gym, meet people at your cafe, spot-based connection app, mutual interest app, alternative to dating apps",
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
      <TwoWaysToConnect />
      <ForTheQuiet />
      <UseCases />
      <HowItWorks />
      <Safety />
      <WhyDifferent />
      <Pricing />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
      <FaqJsonLd />
    </div>
  );
}

/* SiteNav extracted to src/components/landing/SiteNav.tsx */

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
            Wink when someone catches your eye — right now, or at the place you always go.
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

/**
 * Authentic mock of the actual Wink Discover screen's OFFLINE / pre-live state.
 * Matches what every new user sees on first launch: a pulsing dotted radar,
 * an OFFLINE center, the "You're invisible." headline, the explainer, and
 * the Go Live CTA. Rendered as React so it stays crisp at any DPI and any
 * viewport width — no PNG asset to manage.
 */
function DiscoverScreen() {
  return (
    <div className="relative flex h-full flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-center pt-5">
        <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
          <WinkLogo className="h-3.5 w-3.5" />
          Wink
        </div>
      </div>

      {/* Radar block (concentric dotted rings + central OFFLINE pill) */}
      <div className="relative flex flex-1 items-center justify-center">
        {/* Concentric dotted radar rings */}
        {[
          { size: 220, opacity: 0.45 },
          { size: 170, opacity: 0.55 },
          { size: 125, opacity: 0.65 },
          { size: 85, opacity: 0.8 },
        ].map((r, i) => (
          <span
            key={i}
            className="absolute rounded-full border border-dashed"
            style={{
              width: r.size,
              height: r.size,
              borderColor: `color-mix(in oklab, var(--wink) ${r.opacity * 25}%, transparent)`,
              boxShadow:
                i === 3
                  ? `inset 0 0 30px color-mix(in oklab, var(--wink) 30%, transparent)`
                  : undefined,
            }}
          />
        ))}

        {/* OFFLINE pill at the very center */}
        <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-card text-[8px] font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-inner ring-1 ring-border">
          OFFLINE
        </div>
      </div>

      {/* Headline + explainer */}
      <div className="px-5 pb-3 text-center">
        <p className="font-display text-2xl leading-tight">You're invisible.</p>
        <p className="mt-1.5 px-2 text-[10px] leading-snug text-muted-foreground">
          Tap below when you spot someone. Visible for 5 minutes, then back to invisible.
        </p>
      </div>

      {/* Go Live button */}
      <div className="px-4 pb-5">
        <div
          className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-wink text-xs font-semibold text-wink-foreground"
          style={{
            boxShadow: "0 8px 24px -6px color-mix(in oklab, var(--wink) 50%, transparent)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-wink-foreground" />
          Go Live
        </div>
      </div>
    </div>
  );
}

/* ---------------- TWO WAYS TO CONNECT ---------------- */

function TwoWaysToConnect() {
  const pillars = [
    {
      icon: Radio,
      eyebrow: "Discover",
      title: "Live, right now.",
      body: "Turn on visibility and see who's nearby. Wink if you're interested — no messages until it's mutual.",
      footnote: "5–30 min sessions",
    },
    {
      icon: MapPin,
      eyebrow: "Wink Spots",
      title: "Your regular places.",
      body: "Join the gym, café, or lounge you already go to. Browse the regulars and wink anytime — no live session needed.",
      footnote: "Always on, once you've joined",
    },
  ];
  return (
    <section id="spots" className="relative border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Two ways to connect
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Live in the moment, <em className="not-italic text-wink">or through the places you go.</em>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.eyebrow} className="rounded-3xl border border-border bg-card p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-wink/10 text-wink">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-wink">
                {p.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              <p className="mt-5 text-xs text-muted-foreground/70">{p.footnote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */

function HowItWorks() {
  const discoverSteps = [
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
      body: "If it's mutual, you unlock a 24-hour chat. Meet, exchange numbers, or move on.",
      icon: Timer,
    },
  ];
  const spotsSteps = [
    {
      n: "01",
      title: "Find a Spot",
      body: "Cafés, gyms, lounges — pick a place you actually go.",
      icon: MapPin,
    },
    {
      n: "02",
      title: "Join",
      body: "Agree to the house rules and you're in. No live session required.",
      icon: Check,
    },
    {
      n: "03",
      title: "Browse members",
      body: "See who else is a regular. Wink at anyone you'd like to meet.",
      icon: Users,
    },
    {
      n: "04",
      title: "Wink anytime",
      body: "No time limit. Wink whenever you want, day or night.",
      icon: Heart,
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
            Two flows, <em className="not-italic text-wink">same mutual-only rule.</em>
          </h2>
        </div>

        <div className="mt-14">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-wink">
            Discover
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {discoverSteps.map((s, i) => (
              <div key={s.n} className="relative rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-wink">{s.n}</span>
                  <s.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                {i < discoverSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-3">
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

        <div className="mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-wink">
            Wink Spots
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {spotsSteps.map((s, i) => (
              <div key={s.n} className="relative rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-wink">{s.n}</span>
                  <s.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                {i < spotsSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-3">
            <MiniMock title="Join Spot" subtitle="House rules agreed">
              <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-wink/10">
                  <Check className="h-8 w-8 text-wink" />
                </div>
                <span className="text-xs font-medium">You're in</span>
              </div>
            </MiniMock>
            <MiniMock title="Browse members" subtitle="12 regulars">
              <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
                <div className="flex items-center -space-x-3">
                  <PersonCircle seed="regular-1" size={44} />
                  <PersonCircle seed="regular-2" size={44} />
                  <PersonCircle seed="regular-3" size={44} />
                </div>
                <span className="text-xs font-medium">Members at Cafe One</span>
              </div>
            </MiniMock>
            <MiniMock title="Wink anytime" subtitle="No live session">
              <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-wink/10">
                  <Heart className="h-7 w-7 fill-wink text-wink" />
                </div>
                <span className="text-xs font-medium">Winked at Sarah</span>
              </div>
            </MiniMock>
          </div>
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
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Why Wink
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
          Connection shouldn't be{" "}
          <em className="not-italic text-wink">guesswork.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Too many meaningful connections never happen. Not because the interest isn't there,
          but because neither person is sure enough to make the first move. Wink helps people
          discover when the feeling is mutual and connect while the moment is still alive.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FOR THE QUIET ---------------- */

function ForTheQuiet() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface/40 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--wink) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          For everyone who's ever frozen up
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
          You've been here <em className="not-italic text-wink">before.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Sometimes the connection is there. The confidence isn't. Most people don't fear
          attraction; they fear rejection, awkwardness, and misreading the moment. If you've
          ever wanted to say something and couldn't — social anxiety, shyness, or just the
          wrong moment — Wink was made for you. Send a quiet signal instead of taking a
          public risk. No one sees it unless they're sending the same one back.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SAFETY ---------------- */

function Safety() {
  const features = [
    {
      icon: EyeOff,
      title: "Invisible by default",
      body: "On Discover, you're never visible unless you choose to go live.",
    },
    {
      icon: Heart,
      title: "Mutual matches only",
      body: "No one knows you liked them unless they liked you back.",
    },
    {
      icon: MapPin,
      title: "Limited radius, on Discover",
      body: "When you're live, only profiles in your immediate area can see you.",
    },
    {
      icon: ShieldCheck,
      title: "Spot rules",
      body: "Every Spot has house rules members agree to before joining.",
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
      icon: Check,
      title: "Leave any Spot, anytime",
      body: "Joining is never permanent. Step away whenever you want.",
    },
    {
      icon: UserX,
      title: "Permanent blocks",
      body: "Block once. Never seen again — on Discover or in any Spot.",
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
    {
      icon: GraduationCap,
      slug: "universities",
      title: "Universities",
      pillar: "Discover" as const,
      body: "Same lecture hall, same library, same person you keep noticing.",
    },
    {
      icon: Music2,
      slug: "concerts",
      title: "Concerts",
      pillar: "Discover" as const,
      body: "See someone vibing with you? Find out if it's mutual.",
    },
    {
      icon: PartyPopper,
      slug: "festivals",
      title: "Festivals",
      pillar: "Discover" as const,
      body: "Thousands of people. One real connection.",
    },
    {
      icon: Wine,
      slug: "lounges",
      title: "Lounges & bars",
      pillar: "Spots" as const,
      body: "Join your regular lounge as a Spot. See who else goes, wink anytime.",
    },
    {
      icon: Briefcase,
      slug: "conferences",
      title: "Conferences",
      pillar: "Discover" as const,
      body: "Skip the LinkedIn DM. Find out who else is open to talking.",
    },
    {
      icon: Coffee,
      slug: "cafes",
      title: "Cafés",
      pillar: "Spots" as const,
      body: "Join your usual café as a Spot. Wink at a regular, no live session needed.",
    },
    {
      icon: Users,
      slug: "social-events",
      title: "Social events",
      pillar: "Discover" as const,
      body: "Parties, meetups, gallery openings, wherever you show up.",
    },
    {
      icon: Sparkles,
      slug: "everyday",
      title: "Everyday moments",
      pillar: "Discover" as const,
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
            Anywhere <em className="not-italic text-wink">people gather.</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-wink/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                <img
                  src={`/usecases/${c.slug}.jpg`}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/80 text-wink backdrop-blur">
                  <c.icon className="h-3.5 w-3.5" />
                </span>
                <span className="absolute right-2 top-2 rounded-full bg-background/80 px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-wink backdrop-blur">
                  {c.pillar}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
              </div>
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
    {
      name: "Precious, 26",
      body: "I kept noticing this guy at a concert, but I wasn't about to walk up and embarrass myself. A few minutes later, we matched on Wink. Turns out he was hoping I'd Wink back too.",
    },
    {
      name: "John, 22",
      body: "Without Wink, we would've just been two people making eye contact and then going home. Instead, we actually connected and exchanged numbers before the night ended.",
    },
    {
      name: "Vic, 24",
      body: "Thank you, Wink. There is finally solution to my social anxiety issue.",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            From the early users
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            People who didn't <em className="not-italic text-wink">miss the moment.</em>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3">
          <Stat n="100%" label="Mutual only" />
          <Stat n="100 m" label="Discovery radius" />
          <Stat n="24h" label="Chat window" />
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
    tagline: "Get a feel for it",
    highlight: false,
    features: [
      "3 free matches total — Discover or Spots, your choice",
      "1 live Discover session per day, 5 min length",
      "Join unlimited Spots and browse members anytime",
      "All chat and safety features",
    ],
  },
  {
    name: "Premium",
    tagline: "When you're going out more often",
    highlight: true,
    features: [
      "Unlimited matches across Discover and Spots",
      "Unlimited live Discover sessions, longer session lengths",
      "Wink back on any match, including inside Spots",
      "Same chat and safety features",
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
            Free gets you started. Premium gives you more opportunities to connect when you're
            out and about.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 md:grid-cols-2">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-3xl border p-6 md:p-8",
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
              <h3
                className={cn(
                  "font-display text-2xl",
                  tier.highlight && "text-wink",
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-wink text-wink-foreground">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
          Upgrade or cancel anytime from Settings.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "What is Wink?",
    a: "Wink helps you connect with people you notice — live and nearby, or at the places you already go.",
  },
  {
    q: "What's the difference between Discover and Wink Spots?",
    a: "Discover is real-time: turn on visibility and browse who's nearby right now, for a short live session. Wink Spots is place-based: join the gym, café, or lounge you actually go to, and wink at other members anytime — no live session required. Both work the same way once you match: mutual interest unlocks a 24-hour chat.",
  },
  {
    q: "How does Wink work?",
    a: "On Discover, turn on Go Live to browse active profiles nearby. In Wink Spots, join a Spot and browse its members whenever you want. Either way, you wink privately — if it's mutual, you unlock a 24-hour chat.",
  },
  {
    q: "Is Wink a dating app?",
    a: "No. Wink is a social connection app with two modes: live, real-time discovery for the moment you're in, and Wink Spots for the places you already go. Not a dating app. Not a profile feed. Just people, mutual interest, and a real chance to connect.",
  },
  {
    q: "Is Wink free?",
    a: "Yes, Wink is free to use. Free accounts get 3 matches total (from Discover or Spots), one live Discover session per day capped at 5 minutes, and unlimited Spot joining/browsing. Premium unlocks unlimited matches, unlimited live sessions, longer session lengths, and wink-back on any match. Pricing and plan options are shown inside the app.",
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
    a: "On Discover, your phone's location shows you only people within a small radius while you're live — you're invisible by default. Wink Spots works differently: we resolve your city (not a live radius) so you can see which Spots are near you, and Spot membership is what determines who you can see and wink at, not moment-to-moment GPS.",
  },
  {
    q: "Is Wink safe?",
    a: "Yes. Wink is mutual-only on both Discover and Spots, and includes permanent blocking, Spot house rules, optional contact sharing, and disappearing chats. You're always in control.",
  },
  {
    q: "Do chats disappear?",
    a: "Yes. Every match unlocks a 24-hour chat window so the focus stays on real-world meeting, not endless messaging.",
  },
  {
    q: "Where can I use Wink?",
    a: "Anywhere people gather. Concerts, festivals, conferences, university campuses, and everyday moments work with Discover's live mode. Cafés, lounges, and other regular spots you go to can be joined directly as a Wink Spot — no live session needed.",
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
          Someone you just noticed, or a familiar face at your usual spot…
          <br />
          <em className="not-italic text-wink">don't miss it.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg">
          Join the real-world connection movement. Free to start. Mutual only. Always private.
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

/* SiteFooter extracted to src/components/landing/SiteFooter.tsx */
