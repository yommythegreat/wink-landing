import { cn } from "@/lib/utils";

/**
 * Diagonal-stripe colored avatar tile (per design language). The "photo" is
 * an abstract gradient swatch — protects identity, looks editorial.
 */
const PALETTE = [
  { ring: "oklch(0.7 0.22 12)", a: "oklch(0.35 0.14 12)", b: "oklch(0.22 0.08 12)" }, // coral
  { ring: "oklch(0.75 0.15 60)", a: "oklch(0.4 0.12 60)", b: "oklch(0.25 0.07 60)" }, // amber
  { ring: "oklch(0.65 0.14 250)", a: "oklch(0.35 0.12 250)", b: "oklch(0.22 0.07 250)" }, // blue
  { ring: "oklch(0.7 0.18 150)", a: "oklch(0.35 0.13 150)", b: "oklch(0.22 0.07 150)" }, // green
  { ring: "oklch(0.7 0.2 320)", a: "oklch(0.35 0.14 320)", b: "oklch(0.22 0.08 320)" },  // violet
];

function colorFor(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

export function PersonTile({
  seed,
  avatarUrl,
  className,
  rounded = "rounded-2xl",
}: {
  seed: string;
  avatarUrl?: string | null;
  className?: string;
  rounded?: string;
}) {
  const c = colorFor(seed);
  if (avatarUrl) {
    return (
      <div
        className={cn("relative overflow-hidden", rounded, className)}
        style={{
          backgroundImage: `url(${avatarUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    );
  }
  return (
    <div
      className={cn("relative overflow-hidden", rounded, className)}
      style={{
        background: `repeating-linear-gradient(135deg, ${c.a} 0 10px, ${c.b} 10px 20px)`,
      }}
    >
      <div className="absolute inset-0" style={{ boxShadow: `inset 0 0 0 1px ${c.ring}40` }} />
    </div>
  );
}

export function PersonCircle({
  seed,
  avatarUrl,
  size = 72,
  className,
}: {
  seed: string;
  avatarUrl?: string | null;
  size?: number;
  className?: string;
}) {
  const c = colorFor(seed);
  return (
    <div
      className={cn("relative shrink-0 rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: avatarUrl
          ? `url(${avatarUrl}) center/cover`
          : `repeating-linear-gradient(135deg, ${c.a} 0 6px, ${c.b} 6px 12px)`,
        boxShadow: `0 0 0 2px ${c.ring}, 0 0 24px -6px ${c.ring}`,
      }}
    />
  );
}

export function ringColorFor(seed: string) {
  return colorFor(seed).ring;
}
