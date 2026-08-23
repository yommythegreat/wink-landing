import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

// Inline waitlist form. Writes to public.waitlist_signups via the anon
// role — the table's RLS lets anyone INSERT (see migration
// 20260602000001_waitlist_signups.sql), so we can drop the anon key
// into the client without exposing anything. Reads are service-role
// only, admin dashboard is the only surface for the list.
//
// `variant` picks paper vs dark theming so we can use the same form
// inside the light hero + the dark final-CTA band.
type Variant = "paper" | "dark";
type Source = "landing-hero" | "landing-cta";

export function WaitlistForm({
  variant = "paper",
  source = "landing-cta",
  placeholder = "you@email.com",
  cta = "Get early access",
  className,
}: {
  variant?: Variant;
  source?: Source;
  placeholder?: string;
  cta?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !isEmail(trimmed)) {
      toast.error("Enter a valid email.");
      return;
    }
    setBusy(true);
    // Idempotent on the DB — email is UNIQUE and a duplicate insert
    // returns a specific error we treat as success from the user's
    // POV (they're already on the list).
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: trimmed, source });
    setBusy(false);
    if (error) {
      const dup =
        error.message.toLowerCase().includes("duplicate") ||
        error.message.toLowerCase().includes("already exists");
      if (dup) {
        toast.success("You're already on the list.");
        setEmail("");
        return;
      }
      toast.error("Couldn't add you. Please try again.");
      return;
    }
    toast.success("You're on the list. Watch your inbox.");
    setEmail("");
  }

  const paper = variant === "paper";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full max-w-md gap-2 rounded-full border p-1.5",
        paper
          ? "border-[color:var(--color-paper-line)] bg-white/60 backdrop-blur"
          : "border-[color:var(--color-dark-line)] bg-white/[0.04] backdrop-blur",
        className,
      )}
    >
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        aria-label="Email address"
        className={cn(
          "min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-base outline-none placeholder:text-[15px]",
          paper
            ? "text-ink placeholder:text-[color:var(--color-ink-mute)]"
            : "text-snow placeholder:text-[color:var(--color-snow-mute)]",
        )}
      />
      <button
        type="submit"
        disabled={busy}
        className={cn(
          "inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60",
        )}
      >
        {busy ? "…" : cta}
      </button>
    </form>
  );
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
