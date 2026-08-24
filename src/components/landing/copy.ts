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
  // Two paragraphs. Each is an array of text chunks (strings) or
  // bold spans ({ b: "…" }). Renderer walks paragraphs → chunks.
  lede: [
    [
      "Wink helps you connect with people you might otherwise never meet whether they're right there with you or connected through a place you love.",
    ],
    [
      { b: "Wink Live" },
      " helps you discover people who are open to connecting around you right now. ",
      { b: "Wink Spot" },
      " helps you discover people through the places and interests you share.",
    ],
  ] as const,
  primaryCta: { label: "Get early access", href: "#join" },
  secondaryCta: { label: "See how it works", href: "#products" },
  proofPrefix: "people",
  proofSuffix: "on the waitlist.",
};

export const products = {
  eyebrowLead: "Pick your Wink",
  headline: {
    lead: "One wink. ",
    accent: "Two ways to use it.",
  },
  sub: "Connect with people in the moment or through the places you love.",
  live: {
    name: "Wink Live",
    tagline: "Who is around you right now, in a short live session.",
    cardHeadline: "See someone?",
    cardSub:
      "Connect with people nearby who are open to meeting right now.",
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
        body: "You choose when you're visible.",
      },
      {
        n: "02",
        title: "See who's around",
        body: "Explore people nearby who are also Live.",
      },
      {
        n: "03",
        title: "Send a Wink",
        body: "Show interest. No pressure.",
      },
    ],
    panelA: {
      title: `Who can see you · 300 m`,
      caption: `Six other live users nearby right now. Outside the ring, nobody sees you at all.`,
    },
    panelB: {
      title: "Chat window · 24 hours",
      caption: "A wink stays private between you and the recipient.",
    },
    cta: { label: "Get Wink Live", href: "#join" },
    note: "",
  },
  spot: {
    name: "Wink Spot",
    tagline: "Join the places you already love. Meet the regulars.",
    cardHeadline: "Love the same places?",
    cardSub:
      "Find people through places and interests you already go to.",
    tags: [
      "Several categories",
      "Join to opt in",
      "Mutual spots",
      "Never expires",
    ],
    lblOpen: "Everything about Wink Spot",
    lblClose: "Close",
    bubbleEyebrow: "Wink Spot · everything you need to know",
    bubbleHeadline: "Places you like. People who like them too.",
    bubbleLede: [
      "Spots are the real venues and scenes in your city, grouped in several categories. Join one and you are saying ",
      { i: "I am open to meeting through this place" },
      ". That is when its members become visible to you, and you to them.",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Pick a Spot",
        body: "Choose a place or interest you love.",
      },
      {
        n: "02",
        title: "Find your people",
        body: "See who's there or part of the Spot.",
      },
      {
        n: "03",
        title: "Send a Wink",
        body: "Take the first step when it feels right.",
      },
    ],
    panelA: {
      title: "Spots across different cities",
      caption: "Several categories, every venue verified before it goes live.",
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
  footer: {
    title: "Same profile. Same wink. Same experience.",
    sub: "Whether you go Live or join a Spot, you connect the same way.",
  },
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: {
    lead: "One wink can start ",
    accent: "something real.",
  },
  sub: "Simple moves. Mutual interest. Real conversations.",
  steps: [
    {
      title: "You notice",
      body: "You see someone who catches your eye.",
      iconName: "eye",
      iconTone: "pink",
      mockKind: "photo-notice",
      pillIcon: "sparkles",
      pillText: "You're both open to making a connection.",
      pillTone: "pink",
    },
    {
      title: "You send a Wink",
      body: "Show your interest with a simple wink.",
      iconName: "send",
      iconTone: "pink",
      mockKind: "phone-send",
      pillIcon: "send",
      pillText: "They'll get a Wink in their Wink In.",
      pillTone: "purple",
    },
    {
      title: "They get a Wink",
      body: "They see you're interested and it's up to them.",
      iconName: "eye",
      iconTone: "purple",
      mockKind: "phone-receive",
      pillIcon: "heart",
      pillText: "If they wink back, it's a match.",
      pillTone: "purple",
    },
    {
      title: "It's a Wink Match!",
      body: "When interest is mutual, the connection opens.",
      iconName: "heart",
      iconTone: "purple",
      mockKind: "phone-match",
      pillIcon: "clock",
      pillText: "You get 24 hours to start the conversation.",
      pillTone: "purple",
    },
    {
      title: "Meet in real life",
      body: "Chat, exchange contacts, and meet when it feels right.",
      iconName: "send",
      iconTone: "pink",
      mockKind: "photo-meet",
      pillIcon: "users",
      pillText: "That's the point. Real connections. Real life.",
      pillTone: "pink",
    },
  ] as const,
  safety: {
    title: "Your time. Your choice.",
    sub: "You decide when to go Live or join a Spot. When you're off, you're invisible.",
    linkText: "Learn more about safety",
    linkHref: "#trust",
  },
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
  sub: "Wink is built to help people connect in the real world, not keep them endlessly online.",
  toggleDemo: {
    off: {
      label: "Not Live? You're invisible.",
      caption:
        "When you're not Live or connected to a Spot, other users can't discover your profile. You decide when you're open to connecting.",
    },
    on: {
      label: "Go Live when you're ready",
      caption:
        "Start a Live session and become visible to other Live users nearby. Your profile is only visible during your active session and within Wink's defined proximity.",
    },
  },
  principles: [
    {
      title: "You choose when you're visible",
      body: "Go Live when you want to connect, or join a Spot when you want to discover people through a shared place or interest. When you're not active in either, you're invisible to other users.",
    },
    {
      title: "Spots are reviewed before they go live",
      body: "Wink Spots are based on real places. New Spot suggestions are reviewed before being added to the platform.",
    },
    {
      title: "Report or block in one tap",
      body: "If an interaction makes you uncomfortable, you can report or block the person directly. Blocking prevents further interaction between you and that user.",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  // Each answer is one paragraph (string) or several paragraphs
  // (string[]). Renderer maps each to a <p>.
  items: [
    {
      q: "What's the difference between Wink Live and Wink Spot?",
      a: [
        "Wink Live is about the moment. See someone you'd like to connect with? Go Live and discover people who are nearby and open to connecting right then.",
        "Wink Spot is about the places you love. Join a spot you enjoy, discover people who share that interest, and wink at someone even when you're not there at the same time.",
        "Both work the same way once you connect: mutual wink → match → 24-hour chat.",
      ],
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
  ] as { q: string; a: string | readonly string[] }[],
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
    "Wink helps you connect with people you notice nearby or through the places you already go.",
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
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/usewinkapp", icon: "instagram" as const },
    { label: "X", href: "https://x.com/usewinkapp", icon: "x" as const },
    { label: "TikTok", href: "https://www.tiktok.com/@usewinkapp", icon: "tiktok" as const },
  ],
};

export const seo = {
  title: "Wink | Connect With People Nearby in Real Life",
  description:
    "Connect with people nearby through mutual interest, real-life moments, and places you love. Meet people where life happens.",
};
