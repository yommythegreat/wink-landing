import {
  Eye,
  Send,
  Heart,
  Sparkles,
  Clock,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Fragment } from "react";
import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { howItWorks } from "../copy";
import { cn } from "@/lib/utils";

// Five-step "Wink → Match → Meet" journey.
//
// Layout: centered eyebrow + headline + sub, then a 5-column grid of
// (icon, numbered title, body, phone-or-photo mock, pill caption).
// Arrows in the gaps on desktop. Mobile stacks with vertical rhythm.
// A full-bleed safety strip closes the section.
//
// The 5 mocks are inline hand-drawn (dark phone frames for steps
// 2-4, photo cards for steps 1 + 5). Deliberately stylized; real
// screenshots would go stale as the app UI evolves.
export function HowItWorks() {
  const h2Ref = useReveal<HTMLHeadingElement>();
  const subRef = useReveal<HTMLParagraphElement>();

  return (
    <SectionShell mood="paper-2" className="py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
          {howItWorks.eyebrow}
        </span>
        <h2 ref={h2Ref} data-reveal className="h-lg mt-4 max-w-[22ch] text-ink">
          {howItWorks.headline.lead}
          <span className="text-accent">{howItWorks.headline.accent}</span>
        </h2>
        <p
          ref={subRef}
          data-reveal
          style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          className="lede mt-4 max-w-[48ch]"
        >
          {howItWorks.sub}
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[repeat(5,minmax(0,1fr))_repeat(4,auto)] lg:items-start lg:gap-y-12 md:mt-16">
        {howItWorks.steps.map((step, i) => (
          <Fragment key={step.title}>
            {/* Column: icon + title + body + mock. Ordering the
                lg:col-start makes columns interleave with arrows. */}
            <StepColumn step={step} index={i} />
            {i < howItWorks.steps.length - 1 ? (
              <div className="hidden self-center pt-8 lg:block">
                <ArrowRight className="h-5 w-5 text-accent/60" />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      {/* Pills row — under the columns on desktop, inline with each
          step on mobile (rendered inside the column via mobile-only
          overrides). */}
      <div className="mt-8 hidden gap-4 lg:grid lg:grid-cols-5">
        {howItWorks.steps.map((step) => (
          <PillCaption
            key={`pill-${step.title}`}
            icon={step.pillIcon}
            text={step.pillText}
            tone={step.pillTone}
          />
        ))}
      </div>

      <SafetyStrip />
    </SectionShell>
  );
}

// ─────────────────────────── Column ──────────────────────────

type Step = typeof howItWorks.steps[number];

function StepColumn({ step, index }: { step: Step; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": `${0.08 + index * 0.06}s` } as React.CSSProperties}
      className="flex flex-col items-center text-center"
    >
      <StepIcon name={step.iconName} tone={step.iconTone} />
      <h3 className="mt-4 text-[15px] font-semibold text-ink">
        {index + 1}. {step.title}
      </h3>
      <p className="mt-2 max-w-[24ch] text-[13px] leading-relaxed text-[color:var(--color-ink-dim)]">
        {step.body}
      </p>
      <div className="mt-5 w-full max-w-[220px]">
        <StepMock kind={step.mockKind} />
      </div>
      {/* Mobile-only inline pill (desktop shows pills row below) */}
      <div className="mt-5 w-full lg:hidden">
        <PillCaption
          icon={step.pillIcon}
          text={step.pillText}
          tone={step.pillTone}
        />
      </div>
    </div>
  );
}

// ─────────────────────────── Icons ──────────────────────────

const ICONS = {
  eye: Eye,
  send: Send,
  heart: Heart,
  sparkles: Sparkles,
  clock: Clock,
  users: Users,
} as const;

function StepIcon({
  name,
  tone,
}: {
  name: Step["iconName"];
  tone: Step["iconTone"];
}) {
  const Icon = ICONS[name];
  return (
    <span
      className={cn(
        "grid h-11 w-11 place-items-center rounded-full",
        tone === "pink"
          ? "bg-accent/15 text-accent"
          : "bg-[#efeaff] text-[#7a5cff]",
      )}
    >
      <Icon className="h-4 w-4" strokeWidth={2.2} />
    </span>
  );
}

// ─────────────────────────── Pill ──────────────────────────

function PillCaption({
  icon,
  text,
  tone,
}: {
  icon: Step["pillIcon"];
  text: string;
  tone: Step["pillTone"];
}) {
  const Icon = ICONS[icon];
  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-2xl px-3.5 py-2.5 text-left text-[12.5px] leading-snug",
        tone === "pink"
          ? "bg-accent/10 text-ink"
          : "bg-[#f2edff] text-ink",
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 h-3.5 w-3.5 shrink-0",
          tone === "pink" ? "text-accent" : "text-[#7a5cff]",
        )}
        strokeWidth={2.4}
      />
      <span>{text}</span>
    </div>
  );
}

// ─────────────────────────── Mocks ──────────────────────────

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
    <div className="relative overflow-hidden rounded-[22px] shadow-[0_20px_40px_-24px_rgba(20,18,15,0.35)]">
      <img
        src={src}
        alt=""
        aria-hidden
        className="aspect-[9/12] w-full object-cover"
      />
      {badge === "heart" ? (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-accent text-white shadow-[0_10px_24px_-8px_var(--color-accent)]">
          <Heart className="h-4 w-4 fill-current" />
        </span>
      ) : null}
      {bubble ? (
        <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/95 px-3 py-2 text-[11.5px] font-medium text-ink shadow-[0_10px_24px_-12px_rgba(20,18,15,0.5)]">
          <span className="mr-1 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-accent align-middle" />
          {bubble}
        </div>
      ) : null}
    </div>
  );
}

// A common dark phone frame used by all three phone mocks.
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto aspect-[9/17] w-full max-w-[200px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d10] p-3 text-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]">
      {children}
    </div>
  );
}

function PhoneSendMock() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between text-[10px] text-white/85">
        <span>Sarah, 27</span>
        <span className="opacity-60">✕</span>
      </div>
      <p className="mt-0.5 text-[9px] text-white/55">500 m away</p>
      <div className="mt-2 aspect-[3/4] overflow-hidden rounded-[16px] bg-gradient-to-b from-[#4a3a3a] via-[#2a1f24] to-[#141018]">
        <FaceSilhouette hueA="#a37262" hueB="#4c2d24" />
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white/5">
          <span className="text-[10px] text-white/70">✕</span>
        </span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent">
          <Send className="h-3 w-3 text-white" strokeWidth={2.5} />
        </span>
      </div>
      <p className="mt-1.5 text-center text-[9px] font-medium text-white/70">
        Wink
      </p>
    </PhoneFrame>
  );
}

function PhoneReceiveMock() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between text-[10px] font-medium text-white/85">
        <span>Wink In</span>
        <span className="opacity-60">⏳</span>
      </div>
      <div className="mt-2 rounded-[16px] bg-white/5 p-2 pb-3">
        <div className="mx-auto h-14 w-14 overflow-hidden rounded-full bg-gradient-to-b from-[#3a2a24] to-[#1a120f]">
          <FaceSilhouette hueA="#7a4e37" hueB="#2f1c14" />
        </div>
        <p className="mt-2 text-center text-[10px] font-semibold text-white">
          Jordan, 28
        </p>
        <p className="text-center text-[8.5px] text-white/55">500 m away</p>
        <div className="mt-1 flex items-center justify-center gap-1 text-[8.5px] text-accent">
          <Send className="h-2 w-2" strokeWidth={2.5} />
          Sent you a Wink
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">
        <span className="flex-1 rounded-full border border-white/10 py-1 text-center text-[9px] text-white/70">
          ✕ Pass
        </span>
        <span className="flex-1 rounded-full bg-[#7a5cff]/85 py-1 text-center text-[9px] font-semibold text-white">
          ♥ Wink back
        </span>
      </div>
    </PhoneFrame>
  );
}

function PhoneMatchMock() {
  return (
    <PhoneFrame>
      <div className="text-center text-[10px]">
        <div className="mx-auto flex justify-center -space-x-3">
          <span className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#0d0d10] bg-gradient-to-b from-[#3a2a24] to-[#1a120f]">
            <FaceSilhouette hueA="#8a5a44" hueB="#3a1f16" />
          </span>
          <span className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#0d0d10] bg-gradient-to-b from-[#3a2f2a] to-[#1a1310]">
            <FaceSilhouette hueA="#7d5136" hueB="#2c1810" />
          </span>
        </div>
        <p className="mt-2 text-[11px] font-semibold leading-tight">
          It's a
          <br />
          Wink Match! <span className="opacity-90">🎉</span>
        </p>
        <p className="mt-1.5 text-[8.5px] text-white/60">
          You and Jordan liked
          <br />
          each other.
        </p>
        <div className="mx-auto mt-3 rounded-full bg-white px-3 py-1 text-[9px] font-semibold text-[#0d0d10]">
          Start chat
        </div>
      </div>
    </PhoneFrame>
  );
}

// Reusable abstract face silhouette used inside phone mocks.
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

// ─────────────────────────── Safety ──────────────────────────

function SafetyStrip() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
      className="mt-14 rounded-[22px] border border-[color:var(--color-paper-line)] bg-white px-5 py-4 md:mt-16 md:px-6 md:py-5"
    >
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-start gap-3 md:items-center">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#efeaff] text-[#7a5cff]">
            <ShieldCheck className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <div>
            <p className="text-[15px] font-semibold text-ink">
              {howItWorks.safety.title}
            </p>
            <p className="mt-0.5 text-[13px] text-[color:var(--color-ink-dim)]">
              {howItWorks.safety.sub}
            </p>
          </div>
        </div>
        <a
          href={howItWorks.safety.linkHref}
          className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-[#7a5cff] hover:underline"
        >
          {howItWorks.safety.linkText}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
