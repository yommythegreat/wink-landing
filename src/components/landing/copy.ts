// All landing-page copy + tunable numbers.
//
// Numbers are illustrative for pre-launch. Bump by hand as real
// milestones hit. When we're ready to show real waitlist volume,
// swap WAITLIST_COUNT for a server-fn reading from Supabase.

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
    { label: "Blog", href: "/blog", external: true },
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
    "Wink is two ways to meet someone real. ",
    { b: "Wink Live" },
    " for whoever is around you right now, and ",
    { b: "Wink Spot" },
    " for the places and interests you keep coming back to. Send one wink. They see it in their Wink In. When they wink back, it's a match.",
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
    tagline: "Who is around you right now, in a short live session.",
    tags: ["Nearby", "Live session", "Wink In", "24-hour chat"],
    lblOpen: "Everything about Wink Live",
    lblClose: "Close",
    bubbleEyebrow: "Wink Live · everything you need to know",
    bubbleHeadline:
      "The people around you now, not a catalogue of strangers.",
    bubbleLede: [
      "Tap ",
      { b: "Go Live" },
      " to start a short session. While you're live, Wink Live shows the small handful of people nearby who are also live. See someone worth knowing? One wink. It lands in their Wink In, private between the two of you. When they wink back, it's a match.",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Go Live",
        body: "Start a session (a few minutes). You are only visible while it is running, and only to other live users close by.",
      },
      {
        n: "02",
        title: "Send one wink",
        body: "One tap, no opener to write. It shows up in their Wink In. Nobody else sees it.",
      },
      {
        n: "03",
        title: "Meet before the moment closes",
        body: "When they wink back, that's a match. A 24-hour chat opens. Long enough to meet today, short enough to stop pen-palling.",
      },
    ],
    panelA: {
      title: `Who can see you · 300 m`,
      caption: `Six other live users nearby right now. Outside the ring, nobody sees you at all.`,
    },
    panelB: {
      title: "Chat window · 24 hours",
      caption: "Free, always. A wink stays private between you and the recipient.",
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
      ". That is when its members become visible to you, and you to them.",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Browse your city",
        body: `${CATEGORY_COUNTS.length} categories, real venues, cover photo, address, how many members, how many available now.`,
      },
      {
        n: "02",
        title: "Join a Spot",
        body: "Read-only until you join. Joining reveals members and puts you in the same room, honestly.",
      },
      {
        n: "03",
        title: "Wink through what you share",
        body: "Profiles show mutual Spots, the real social proof. Spot winks never expire. When they wink back, the chat opens.",
      },
    ],
    panelA: {
      title: `${SPOT_COUNT} Spots live in ${LIVE_CITY}`,
      caption: `${CATEGORY_COUNTS.length} categories, every venue verified before it goes live.`,
    },
    panelB: {
      title: "Mutual Spots",
      caption: "Profiles lead with the Spots you both joined. Spot winks never expire.",
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
      body: "Go Live for a session, or join a Spot. Nothing happens to your profile until you do. No passive lurking.",
    },
    {
      title: "Send a wink",
      body: "One tap, no message. Live winks fade with the session. Spot winks wait quietly until the recipient answers.",
    },
    {
      title: "They wink back",
      body: "That's a match, and a 24-hour chat. Swap contacts, agree a place, and close the app. That's the point.",
    },
  ],
};

export const quote = {
  line: {
    lead: "The best first date starts ",
    accent: "where you already were.",
  },
};

export const trust = {
  eyebrow: "Safety & intent",
  headline: {
    lead: "A connection app that ",
    accent: "wants you offline.",
  },
  toggleDemo: {
    off: {
      label: "No session running",
      caption: "You are invisible to everyone. Off the map entirely.",
    },
    on: {
      label: "Live session",
      caption: `Visible for 300 m during the session, to other live users nearby. Winks land in Wink In.`,
    },
  },
  principles: [
    {
      title: "You choose when you're visible",
      body: "Go Live for a session, or join a Spot. Off the session (or not in a Spot) means invisible.",
    },
    {
      title: "Real places, reviewed",
      body: "Every Spot is a real venue. Suggestions go through review before they go live in a city.",
    },
    {
      title: "Report and block, one tap",
      body: "Available in chats and Spots. All reports are reviewed.",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  items: [
    {
      q: "What's the difference between Wink Live and Wink Spot?",
      a: "Live is about time. Who is nearby and open right now, in a short live session. Spot is about place and interest. The venues and scenes you keep returning to, where a wink can wait for days. Same profile, same wink, same 24-hour chat once you match.",
    },
    {
      q: "Can people see that I winked at them?",
      a: "The recipient does. Your wink shows up in their Wink In. Nobody else does, and nothing happens (no chat, no notification anywhere else) until they wink back.",
    },
    {
      q: "Can people message me without permission?",
      a: "No. Wink only allows messaging after a mutual match. There are no unsolicited DMs, ever.",
    },
    {
      q: "Why does the chat only last 24 hours?",
      a: "Because the goal is meeting, not messaging. A day is enough to agree on a coffee. If you swap contacts, the conversation continues where you actually want it.",
    },
    {
      q: "Where can I use Wink?",
      a: "Anywhere people gather. Concerts, festivals, conferences, university campuses, and everyday moments work with Wink Live. Cafés, lounges, and other regular spots you go to can be joined directly as a Wink Spot.",
    },
  ],
};

export const finalCta = {
  eyebrow: "One list, both sides",
  headline: {
    lead: "Stop swiping.",
    accent: "Start winking.",
  },
  note: "Wink Live · Wink Spot",
};

export const footer = {
  copyright: "© 2026 Wink",
  tagline:
    "Wink helps you connect with people you notice, live and nearby or at the places you already go.",
  primaryLinks: [
    { label: "Wink Live", href: "/#products" },
    { label: "Wink Spot", href: "/#products" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
    { label: "Waitlist", href: "/#join" },
  ],
  secondaryLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  // Placeholder handles — swap real URLs before deploy to prod.
  socials: [
    { label: "Instagram", href: "https://instagram.com/usewink", icon: "instagram" as const },
    { label: "X", href: "https://x.com/usewink", icon: "x" as const },
    { label: "TikTok", href: "https://tiktok.com/@usewink", icon: "tiktok" as const },
  ],
};

export const seo = {
  title: "Wink. Meet the people already in your day.",
  description:
    "Wink is two ways to meet someone real. Wink Live for whoever is around you right now. Wink Spot for the places and interests you keep coming back to. Send one wink. They see it in Wink In. When they wink back, it's a match.",
};
