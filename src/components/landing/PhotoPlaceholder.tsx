import { cn } from "@/lib/utils";

// Temporary placeholder for the 5 photo slots the new landing needs.
// Tosin will send real photos; when they arrive we swap this component
// out for an <img> at the same call sites. The gradient keeps the
// layout visually intact without any risk of a broken image URL
// flashing on the preview.
export function PhotoPlaceholder({
  slot,
  aspect = "16 / 9",
  className,
  mood = "warm",
  alt,
}: {
  slot: string;
  aspect?: string;
  className?: string;
  mood?: "warm" | "dark";
  alt: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl",
        mood === "dark"
          ? "bg-gradient-to-br from-[#1a1a1c] via-[#141416] to-[#0a0a0a] text-[color:var(--color-snow-mute)]"
          : "bg-gradient-to-br from-[#e7e4dc] via-[#dcd8ce] to-[#c9c4b8] text-[color:var(--color-ink-mute)]",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
          Photo · {slot}
        </span>
        <span className="max-w-[26ch] text-xs leading-snug opacity-70">
          {alt}
        </span>
      </div>
    </div>
  );
}
