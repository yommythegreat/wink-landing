import { Eye, Send, Heart, ArrowRight } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { howItWorks } from "../copy";

// Five-step "Wink → Match → Meet" journey.
//
// Layout on desktop: centered header, then a 5-column grid where every
// column shares the same vertical rhythm — icon, single-line title,
// two-line body, then a portrait-aspect mock at a fixed width. Arrows
// sit in the gaps between mocks, absolutely positioned so column widths
// stay equal.
//
// The mocks are all clipped to the same aspect ratio (3:4) at the same
// max width so photos and phone frames read as one visual set. Photo
// backgrounds are the same assets already loaded by TwoProducts.
export function HowItWorks() {
  const h2Ref = useReveal<HTMLHeadingElement>();
  const subRef = useReveal<HTMLParagraphElement>();

  return (
    <SectionShell mood="paper-2" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-[56ch] flex-col items-center text-center">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
          {howItWorks.eyebrow}
        </span>
        <h2 ref={h2Ref} data-reveal className="h-lg mt-4 text-ink">
          {howItWorks.headline.lead}
          <span className="text-accent">{howItWorks.headline.accent}</span>
        </h2>
        <p
          ref={subRef}
          data-reveal
          style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          className="lede mt-4"
        >
          {howItWorks.sub}
        </p>
      </div>

      <div className="mt-14 grid gap-y-10 sm:grid-cols-2 md:mt-16 md:grid-cols-5 md:gap-x-6 lg:gap-x-8">
        {howItWorks.steps.map((step, i) => (
          <StepColumn
            key={step.title}
            step={step}
            index={i}
            isLast={i === howItWorks.steps.length - 1}
          />
        ))}
      </div>
    </SectionShell>
  );
}

// ─────────────────────────── Column ──────────────────────────

type Step = (typeof howItWorks.steps)[number];

function StepColumn({
  step,
  index,
  isLast,
}: {
  step: Step;
  index: number;
  isLast: boolean;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": `${0.08 + index * 0.06}s` } as React.CSSProperties}
      className="flex flex-col items-center text-center"
    >
      <StepIcon name={step.iconName} />
      {/* Fixed-height title + body ensures every column aligns its
          mock at the same y-offset regardless of copy length. */}
      <h3 className="mt-4 flex min-h-[3rem] items-start text-[15px] font-semibold leading-tight text-ink">
        {index + 1}. {step.title}
      </h3>
      <p className="mt-1 flex min-h-[3.75rem] max-w-[26ch] items-start text-[13px] leading-relaxed text-[color:var(--color-ink-dim)]">
        {step.body}
      </p>
      <div className="relative mt-5 w-full max-w-[220px]">
        <StepMock kind={step.mockKind} />
        {!isLast ? (
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 text-accent/70 md:inline-flex md:-right-5 lg:-right-6"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </span>
        ) : null}
      </div>
    </div>
  );
}

// ─────────────────────────── Icons ──────────────────────────

const ICONS = { eye: Eye, send: Send, heart: Heart } as const;

function StepIcon({ name }: { name: Step["iconName"] }) {
  const Icon = ICONS[name as keyof typeof ICONS] ?? Eye;
  return (
    <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-accent">
      <Icon className="h-4 w-4" strokeWidth={2.2} />
    </span>
  );
}

// ─────────────────────────── Mocks ──────────────────────────
//
// Every mock is rendered inside an aspect-[3/4] box at the same
// max width so all five columns show a uniform card size.

function StepMock({ kind }: { kind: Step["mockKind"] }) {
  switch (kind) {
    case "photo-notice":
      return <PhotoMock src="/images/live.jpg" badge="heart" />;
    case "phone-send":
      return <PhoneSendMock />;
    case "phone-receive":
      return <PhoneReceiveMock />;
    case "phone-match":
      return <PhoneMatchMock />;
    case "photo-meet":
      return (
        <PhotoMock
          src="/images/spot.jpg"
          bubble="Great chat! Let's meet this weekend?"
        />
      );
  }
}

function PhotoMock({
  src,
  badge,
  bubble,
}: {
  src: string;
  badge?: "heart";
  bubble?: string;
}) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] shadow-[0_20px_40px_-24px_rgba(20,18,15,0.35)]">
      <img
        src={src}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      {badge === "heart" ? (
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-white shadow-[0_10px_24px_-8px_var(--color-accent)]">
          <Heart className="h-4 w-4 fill-current" />
        </span>
      ) : null}
      {bubble ? (
        <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/95 px-3 py-2 text-[11.5px] font-medium leading-snug text-ink shadow-[0_10px_24px_-12px_rgba(20,18,15,0.5)]">
          <span className="mr-1 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-accent align-middle" />
          {bubble}
        </div>
      ) : null}
    </div>
  );
}

// Shared dark card frame — matches the photo aspect exactly so all
// mocks in the row share the same footprint.
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="aspect-[3/4] overflow-hidden rounded-[22px] border border-white/10 bg-[#0d0d10] p-3 text-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]">
      <div className="flex h-full flex-col">{children}</div>
    </div>
  );
}

function PhoneSendMock() {
  return (
    <PhoneFrame>
      <div className="flex items-start justify-between text-[10px] text-white/85">
        <p className="font-medium">Sarah, 27</p>
        <span className="text-white/50">✕</span>
      </div>
      <div className="relative mt-2 flex-1 overflow-hidden rounded-[14px] bg-gradient-to-b from-[#4a3a3a] via-[#2a1f24] to-[#141018]">
        <FaceSilhouette hueA="#a37262" hueB="#4c2d24" />
      </div>
      <div className="mt-2.5 flex items-center justify-center gap-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white/5 text-[10px] text-white/70">
          ✕
        </span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent">
          <Send className="h-3 w-3 text-white" strokeWidth={2.5} />
        </span>
      </div>
    </PhoneFrame>
  );
}

function PhoneReceiveMock() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between text-[10px] font-medium text-white/85">
        <span>Wink In</span>
        <span className="text-white/50">⏳</span>
      </div>
      <div className="mt-2 flex-1 rounded-[14px] bg-white/5 p-2">
        <div className="mx-auto h-14 w-14 overflow-hidden rounded-full bg-gradient-to-b from-[#3a2a24] to-[#1a120f]">
          <FaceSilhouette hueA="#7a4e37" hueB="#2f1c14" />
        </div>
        <p className="mt-2 text-center text-[10px] font-semibold text-white">
          Jordan, 28
        </p>
        <p className="mt-1 text-center text-[8.5px] text-accent">
          Sent you a Wink
        </p>
      </div>
      <div className="mt-2 flex gap-1.5">
        <span className="flex-1 rounded-full border border-white/10 py-1 text-center text-[9px] text-white/70">
          ✕ Pass
        </span>
        <span className="flex-1 rounded-full bg-accent py-1 text-center text-[9px] font-semibold text-white">
          ♥ Wink back
        </span>
      </div>
    </PhoneFrame>
  );
}

function PhoneMatchMock() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="flex -space-x-3">
          <span className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#0d0d10] bg-gradient-to-b from-[#3a2a24] to-[#1a120f]">
            <FaceSilhouette hueA="#8a5a44" hueB="#3a1f16" />
          </span>
          <span className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#0d0d10] bg-gradient-to-b from-[#3a2f2a] to-[#1a1310]">
            <FaceSilhouette hueA="#7d5136" hueB="#2c1810" />
          </span>
        </div>
        <p className="mt-3 text-[12px] font-semibold leading-tight">
          It&apos;s a Wink Match!
        </p>
        <p className="mt-1 text-[9px] text-white/55">
          You and Jordan liked each other.
        </p>
      </div>
      <span className="mt-2 rounded-full bg-white py-1.5 text-center text-[10px] font-semibold text-[#0d0d10]">
        Start chat
      </span>
    </PhoneFrame>
  );
}

// Abstract face silhouette reused across all phone mocks. Two-tone
// vertical gradient so the mock reads as "a person" without any
// stock headshot content.
function FaceSilhouette({ hueA, hueB }: { hueA: string; hueB: string }) {
  return (
    <svg
      viewBox="0 0 100 130"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full opacity-90"
      aria-hidden
    >
      <defs>
        <linearGradient id={`f-${hueA}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={hueA} />
          <stop offset="1" stopColor={hueB} />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="58" rx="22" ry="26" fill={`url(#f-${hueA})`} />
      <path d="M15 130 C 25 100, 75 100, 85 130 Z" fill={`url(#f-${hueA})`} />
    </svg>
  );
}
