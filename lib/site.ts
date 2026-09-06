export const SITE = {
  name: "Nightly 365",
  url: "https://nightly-365.vercel.app",
  logo: "/brand/logo.png",
  banner: "/brand/banner.png",
  eyebrow: "The show",
  pitch:
    "One hard question a night. Chat, callers, AI, and the community think it through. Join in, help, and follow along as ideas move forward.",
  when: "Every night · 6:00 PM PT / 9:00 PM ET",
  whenClock: "6:00 PM PT / 9:00 PM ET",
  whenShort: "every night at 6pm PT",
  youtubeUrl: "https://www.youtube.com/@Nightly365",
  youtubeHandle: "@Nightly365",
  join: "This is a conversation, not a lecture. Come to the live chat. Bring a thought, a doubt, or a small idea. Help us think it through — or follow along if you cannot be there live.",
  benevolence: "Think clearly. Do something kind.",
  doorsLead:
    "If the room stalls, these are doors. Never a checklist. If the room is hot, skip them.",
  ideasLead:
    "Put these in people’s heads. Short lines you can repeat and pass on. This is how a good idea travels.",
  slice: {
    url: "https://slice-gules.vercel.app",
    title: "Slice",
    note: "If a data center lands near you, see what a resident check could look like.",
    cta: "Try the number",
  },
  /** Shared spine for every night unless an event sets its own agenda. */
  agenda: [
    "Open (~2 min) — the show and tonight’s question",
    "Sit with the question — why it’s worth a night",
    "Think together — chat, callers, AI; doors if we stall",
    "Close (~3 min) — one thing we found, any progress, tomorrow’s tease",
  ],
  howItWorks: [
    "One hard question per night.",
    "The host holds the question. Chat, callers, and the community think it through together — not a lecture.",
    "Same time every night: 6:00 PM PT / 9:00 PM ET on YouTube.",
    "Pocket sub-questions are doors if the room stalls — never a checklist. If the room is hot, skip them.",
    "Ideas that land can move forward the same night. What we make shows up under progress.",
    "The tone is good and benevolent.",
  ],
} as const;
