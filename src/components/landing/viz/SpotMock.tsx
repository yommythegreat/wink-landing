// Stylized Spot detail card shown inside the Wink Spot product card.
// Same rationale as PhoneMock — hand-drawn HTML preview, no real app
// screenshot yet.

const MEMBERS = [
  { name: "Kemi, 25", note: "2 mutual spots", hue: 20 },
  { name: "Tunde, 28", note: "Café One", hue: 200 },
  { name: "Zara, 24", note: "3 mutual spots", hue: 340 },
];

export function SpotMock() {
  return (
    <div
      className="w-[280px] rounded-[22px] border border-black/5 bg-white p-4 shadow-[0_30px_60px_-25px_rgba(20,18,15,0.35)]"
      aria-hidden
    >
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#f4f2ed] text-ink">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 010 8h-1" />
            <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-semibold text-ink">Café One</p>
          <p className="mt-0.5 text-[11px] text-[color:var(--color-ink-mute)]">
            Café · Lagos
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-ink-mute)]">
          284 members
        </p>
        <div className="mt-2 flex items-center">
          <div className="flex -space-x-2">
            {[15, 45, 100, 200, 300].map((hue, i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border-2 border-white"
                style={{
                  background: `radial-gradient(circle at 30% 30%, hsl(${hue} 55% 62%), hsl(${hue} 45% 32%))`,
                }}
              />
            ))}
          </div>
          <span className="ml-2 grid h-7 min-w-7 place-items-center rounded-full bg-[#f4f2ed] px-2 text-[10px] font-semibold text-ink">
            +24
          </span>
        </div>
      </div>

      <div className="mt-4 border-t border-[color:var(--color-paper-line)] pt-3">
        <p className="text-[11px] font-medium text-[color:var(--color-ink-mute)]">
          38 available to connect
        </p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {MEMBERS.map((m) => (
          <div
            key={m.name}
            className="overflow-hidden rounded-lg border border-[color:var(--color-paper-line)] bg-white"
          >
            <div
              className="aspect-square w-full"
              style={{
                background: `radial-gradient(circle at 50% 40%, hsl(${m.hue} 50% 62%), hsl(${m.hue} 40% 22%))`,
              }}
            />
            <div className="px-2 py-1.5">
              <p className="truncate text-[10px] font-semibold text-ink">
                {m.name}
              </p>
              <p className="mt-0.5 truncate text-[9px] text-[color:var(--color-ink-mute)]">
                {m.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
