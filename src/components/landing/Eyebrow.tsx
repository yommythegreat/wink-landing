import { cn } from "@/lib/utils";

// Small editorial label with a leading rule. Use for section eyebrows.
// The `.eyebrow` utility is defined in styles.css.
export function Eyebrow({
  children,
  className,
  tone = "accent",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "ink-mute" | "snow-mute";
}) {
  const toneClass =
    tone === "ink-mute"
      ? "text-ink-mute"
      : tone === "snow-mute"
        ? "text-snow-mute"
        : "text-accent";
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em]",
        toneClass,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-px w-[22px]",
          tone === "ink-mute"
            ? "bg-ink-mute"
            : tone === "snow-mute"
              ? "bg-snow-mute"
              : "bg-accent",
        )}
      />
      {children}
    </span>
  );
}
