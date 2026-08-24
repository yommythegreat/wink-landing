// Stylized phone screenshot shown inside the Wink Live product card.
// Hand-drawn in HTML+SVG (no real screenshot yet — mobile app UI is
// still evolving). Purely presentational; no interactivity.

export function PhoneMock() {
  return (
    <div
      className="relative w-[210px] rounded-[28px] border border-white/10 bg-[#0d0d10] p-3 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.65)]"
      aria-hidden
    >
      {/* Top status bar: live indicator + count */}
      <div className="flex items-center justify-between px-1.5 pb-2 pt-1 text-[10px] font-medium text-white/85">
        <span className="inline-flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          You&apos;re Live
        </span>
        <span className="text-[9px] font-normal text-white/55">
          6 people nearby
        </span>
      </div>

      {/* Member card photo (stylized SVG face silhouette so we don't
          ship a real head shot) */}
      <div className="relative overflow-hidden rounded-[18px]">
        <div className="aspect-[3/4] w-full bg-gradient-to-b from-[#3a2b34] via-[#2a1f2a] to-[#141018]">
          <FaceSilhouette />
        </div>

        {/* Bottom overlay with name + distance */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-3 pb-3 pt-8">
          <p className="text-[13px] font-semibold text-white">Samantha, 27</p>
          <p className="mt-0.5 text-[10px] font-normal text-white/70">
            500 m away
          </p>
        </div>
      </div>

      {/* Action row: dismiss + wink */}
      <div className="flex items-center justify-center gap-4 pb-1 pt-3">
        <button
          type="button"
          tabIndex={-1}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70"
          aria-label="Dismiss"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white shadow-[0_8px_20px_-8px_var(--color-accent)]"
          aria-label="Send a wink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 21s-7-4.5-9.5-9C.7 8.5 3 5 6.5 5c1.9 0 3.4 1 4.5 2.5C12.1 6 13.6 5 15.5 5 19 5 21.3 8.5 19.5 12 17 16.5 12 21 12 21z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Abstract face silhouette so the mock reads as "a person" without
// shipping a stock headshot.
function FaceSilhouette() {
  return (
    <svg
      viewBox="0 0 100 130"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full opacity-90"
      aria-hidden
    >
      <defs>
        <radialGradient id="hair" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#3d2b23" />
          <stop offset="1" stopColor="#221619" />
        </radialGradient>
        <radialGradient id="skin" cx="0.5" cy="0.55" r="0.5">
          <stop offset="0" stopColor="#7a4f43" />
          <stop offset="1" stopColor="#4c2d24" />
        </radialGradient>
      </defs>
      {/* Hair silhouette */}
      <path
        d="M20 55 C 20 25, 80 25, 80 55 L 80 90 L 20 90 Z"
        fill="url(#hair)"
      />
      {/* Face oval */}
      <ellipse cx="50" cy="60" rx="22" ry="26" fill="url(#skin)" />
      {/* Shoulders */}
      <path
        d="M15 130 C 25 100, 75 100, 85 130 Z"
        fill="url(#hair)"
      />
    </svg>
  );
}
