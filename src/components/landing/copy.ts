// All landing-page copy + tunable numbers.
//
// Numbers are illustrative for pre-launch — bump by hand as real
// milestones hit. When we're ready to show real waitlist volume, swap
// WAITLIST_COUNT for a server-fn reading from Supabase.

export const WAITLIST_COUNT = 8420;
export const SPOT_COUNT = 117;
export const CATEGORY_COUNTS: { label: string; count: number }[] = [
  { label: "Restaurants", count: 41 },
  { label: "Cafés", count: 24 },
  { label: "Fitness", count: 18 },
  { label: "Creative Spaces", count: 12 },
  { label: "Karaoke", count: 7 },
  { label: "Libraries", count: 6 },
  { label: "Paint & Sip", count: 5 },
  { label: "Beaches", count: 4 },
];
export const NEARBY_AVAILABLE = 6;
export const LIVE_CITY = "Lagos";
export const LIVE_YEAR = "2026";

export const nav = {
  brand: "Wink",
  links: [
    { label: "Wink Live", href: "#products" },
    { label: "Wink Spot", href: "#products" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Get early access", href: "#join" },
};

export const hero = {
  headline: {
    lead: "Meet the people",
    tail: "already in ",
    accent: "your day.",
  },
  lede: [
    "Wink is two ways to meet someone real: ",
    { b: "Wink Live" },
    " for whoever is around you right now, and ",
    { b: "Wink Spot" },
    " for the places and interests you keep coming back to. One wink either way — and it stays private unless they wink back.",
  ] as const,
  primaryCta: { label: "Get early access", href: "#join" },
  secondaryCta: { label: "See how it works", href: "#products" },
  proofPrefix: "people",
  proofSuffix: `on the waitlist across ${CATEGORY_COUNTS.length} Spot categories in ${LIVE_CITY}.`,
};

export const products = {
  eyebrowLead: "Pick your Wink",
  headline: {
    lead: "One wink. ",
    accent: "Two ways to use it.",
  },
  sub: "Tap a card to open everything you need to know.",
  live: {
    name: "Wink Live",
    tagline: "Who is open to connecting near you, in this hour.",
    tags: ["Nearby", "Live now", "Private winks", "24-hour chat"],
    lblOpen: "Everything about Wink Live",
    lblClose: "Close",
    bubbleEyebrow: "Wink Live · everything you need to know",
    bubbleHeadline:
      "The people around you now — not a catalogue of strangers.",
    bubbleLede: [
      "Switch on ",
      { b: "Available to Connect" },
      " and Wink Live shows the small handful of people nearby who did the same. No swiping through a city. See someone worth knowing? One wink. It stays completely private unless they wink back.",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Go available",
        body: "One toggle. You are only visible while it is on, and only to people close by.",
      },
      {
        n: "02",
        title: "Send one wink",
        body: "No opener to write, no bio essay. Silent, private, and never seen unless it is mutual.",
      },
      {
        n: "03",
        title: "Meet before the moment closes",
        body: "Two winks open a 24-hour chat. Long enough to meet today, short enough to stop pen-palling.",
      },
    ],
    panelA: {
      title: `Who can see you · 300 m`,
      caption: `Six people nearby switched on Available to Connect. Outside the ring, nobody sees you at all.`,
    },
    panelB: {
      title: "Chat window · 24 hours",
      caption: "Free, always · a wink stays hidden until it is mutual",
    },
    cta: { label: "Get Wink Live", href: "#join" },
    note: `${LIVE_CITY} first, ${LIVE_YEAR}`,
  },
  spot: {
    name: "Wink Spot",
    tagline: "Join the places you already love. Meet the regulars.",
    tags: [
      `${CATEGORY_COUNTS.length} categories`,
      "Join to opt in",
      "Mutual spots",
      "Never expires",
    ],
    lblOpen: "Everything about Wink Spot",
    lblClose: "Close",
    bubbleEyebrow: "Wink Spot · everything you need to know",
    bubbleHeadline: "Places you like. People who like them too.",
    bubbleLede: [
      `Spots are the real venues and scenes in your city, grouped in ${CATEGORY_COUNTS.length} categories. Join one and you are saying `,
      { i: "I am open to meeting through this place" },
      " — that is when its members become visible to you, and you to them.",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Browse your city",
        body: `${CATEGORY_COUNTS.length} categories, real venues — cover, address, how many members, how many available now.`,
      },
      {
        n: "02",
        title: "Join a Spot",
        body: "Read-only until you join. Joining reveals members and puts you in the same room, honestly.",
      },
      {
        n: "03",
        title: "Wink through what you share",
        body: "Profiles show mutual Spots — the real social proof. Spot winks never expire; mutual opens the chat.",
      },
    ],
    panelA: {
      title: `${SPOT_COUNT} Spots live in ${LIVE_CITY}`,
      caption: `${CATEGORY_COUNTS.length} categories, every venue verified before it goes live`,
    },
    panelB: {
      title: "Mutual Spots",
      caption: "Profiles lead with the Spots you both joined · Spot winks never expire",
      legend: [
        { label: "Your Spots", value: "6" },
        { label: "Theirs", value: "9" },
        { label: "Shared", value: "3", strong: true },
      ],
    },
    cta: { label: "Get Wink Spot", href: "#join" },
    note: "Missing a place? Suggest it",
  },
};

export const howItWorks = {
  eyebrow: "Wink → match → meet",
  headline: {
    lead: "Same three moves, ",
    accent: "either side of the app.",
  },
  steps: [
    {
      title: "Show you're open",
      body: "Flip Available to Connect, or join a Spot. Nothing happens to your profile until you do — no passive lurking.",
    },
    {
      title: "Send a wink",
      body: "One tap, no message. Live winks fade with the moment; Spot winks wait quietly until they answer.",
    },
    {
      title: "They wink back",
      body: "That's a match, and a 24-hour chat. Swap contacts, agree a place, and close the app — that's the point.",
    },
  ],
};

export const quote = {
  line: {
    lead: "The best first date starts ",
    accent: "where you already were.",
  },
  credit: `Wink Spot · Ikoyi, ${LIVE_CITY}`,
};

export const trust = {
  eyebrow: "Safety & intent",
  headline: {
    lead: "A connection app that ",
    accent: "wants you offline.",
  },
  toggleDemo: {
    off: {
      label: "Toggle off",
      caption: "You are invisible. Not hidden-but-discoverable — off the map entirely.",
    },
    on: {
      label: "Available to connect",
      caption: `Visible for 300 m, to people who also switched on. Winks stay private.`,
    },
  },
  principles: [
    {
      title: "Winks are private",
      body: "Nobody knows you winked unless they wink back. No leaderboards, no read receipts, no seen-by.",
    },
    {
      title: "You choose when you're visible",
      body: 'Live visibility is a toggle, Spot visibility is a join. Off means invisible — not "hidden but discoverable".',
    },
    {
      title: "Real places, reviewed",
      body: "Every Spot is a real venue. Suggestions go through review before they go live in a city.",
    },
    {
      title: "Report and block, one tap",
      body: "Available in profiles, chats and Spots. Reports are read by humans, in-country.",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  items: [
    {
      q: "What's the difference between Wink Live and Wink Spot?",
      a: "Live is about time — who is nearby and open right now. Spot is about place and interest — the venues and scenes you keep returning to, where a wink can wait for days. Same profile, same wink, same 24-hour chat once you match.",
    },
    {
      q: "Can people see that I winked at them?",
      a: "No. A wink is invisible until it is mutual. If they never wink back, they never know — and neither does anyone else.",
    },
    {
      q: "Why does the chat only last 24 hours?",
      a: "Because the goal is meeting, not messaging. A day is enough to agree on a coffee. If you swap contacts, the conversation continues where you actually want it.",
    },
    {
      q: "Which cities are live?",
      a: `${LIVE_CITY} first, with ${SPOT_COUNT} Spots across ${CATEGORY_COUNTS.length} categories. Other cities open as we map and verify their venues — if yours isn't live, you can suggest Spots and we'll tell you when it launches.`,
    },
    {
      q: "Is it free?",
      a: "Yes. Winking, matching, joining Spots and chatting are free. There is no paid queue-jump — that would break the whole idea.",
    },
  ],
};

export const finalCta = {
  eyebrow: "One list, both sides",
  headline: {
    lead: "Stop swiping.",
    accent: "Start winking.",
  },
  note: "Wink Live · Wink Spot ·",
};

export const footer = {
  copyright: "© 2026 Wink",
  city: `${LIVE_CITY} · Nigeria`,
  primaryLinks: [
    { label: "Wink Live", href: "/#products" },
    { label: "Wink Spot", href: "/#products" },
    { label: "FAQ", href: "/#faq" },
    { label: "Waitlist", href: "/#join" },
  ],
  secondaryLinks: [
    { label: "Blog", href: "/blog" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const seo = {
  title: "Wink — Meet the people already in your day.",
  description:
    "Wink is two ways to meet someone real. Wink Live for whoever is around you right now; Wink Spot for the places and interests you keep coming back to. One wink either way — private unless they wink back.",
};
