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
        body: "One tap and it shows up in their Wink In. Nobody else sees it.",
      },
      {
        n: "03",
        title: "Meet before the moment closes",
        body: "When they wink back, that's a match. A 24-hour chat opens. Meet, exchange numbers, or move on.",
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
        title: "Browse your city",
        body: "Several categories, real venues, cover photo, address, how many members, how many available now.",
      },
      {
        n: "02",
        title: "Join a Spot",
        body: "Joining reveals members and puts you in the same room.",
      },
      {
        n: "03",
        title: "Wink through what you share",
        body: "Profiles show mutual Spots. Wink at someone anytime. Spot winks never expire. When they wink back, the chat opens.",
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
  title: "Wink. Meet the people already in your day.",
  description:
    "Wink is two ways to meet someone real. Wink Live for whoever is around you right now. Wink Spot for the places and interests you keep coming back to. Send one wink. They see it in Wink In. When they wink back, it's a match.",
};
