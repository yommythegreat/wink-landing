// Wink Live 24-hour chat-window viz. A row of 24 hour-cells with the
// match hour + closing hour labelled. Hand markup, no chart lib.
export function DayClock({
  matchTime = "18:40",
  closeTime = "18:40",
}: {
  matchTime?: string;
  closeTime?: string;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-24 gap-[3px]">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="block h-3 rounded-[2px]"
            style={{
              background:
                i < 12
                  ? "color-mix(in oklab, var(--color-accent) 85%, transparent)"
                  : "color-mix(in oklab, var(--color-accent) 22%, transparent)",
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-mute)]">
        <span>Match {matchTime}</span>
        <span>Closes {closeTime}</span>
      </div>
    </div>
  );
}
