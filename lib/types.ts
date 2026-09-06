/**
 * Shared shapes for local content files.
 * Keep these stable so a later API or database can return the same objects.
 */

export type EpisodeStatus = "next" | "queued" | "aired";

export type Episode = {
  /** Stable id. Date is a good default: "2026-09-05". */
  id: string;
  /** Calendar date in Pacific Time, YYYY-MM-DD. */
  date: string;
  question: string;
  status: EpisodeStatus;
  notes?: string;
  /** When set, the upcoming list links to `/events/[slug]`. */
  slug?: string;
};

export type NightExpect = {
  /** What to do before the night starts. */
  before?: string;
  /** What happens during the night. */
  during?: string;
};

export type NightEvent = {
  slug: string;
  /** Calendar date in Pacific Time, YYYY-MM-DD. */
  date: string;
  question: string;
  /**
   * Lead “why this night” paragraph. Also used for meta description.
   * Add `setup` / `expect` when one string is too cramped.
   */
  blurb: string;
  /** Optional extra sell paragraphs after the blurb. */
  setup?: string[];
  /** Optional “what to expect” before and during the night. */
  expect?: NightExpect;
  /**
   * Pocket sub-questions. Prefer exactly three.
   * Doors if the room stalls — not a script.
   */
  subquestions: string[];
  /** Optional night-specific agenda. Falls back to SITE.agenda when omitted. */
  agenda?: string[];
  /** How to join in / help. Falls back to SITE.join when omitted. */
  join?: string;
  /**
   * Sticky one-liners people can repeat. Public mindset seeds —
   * not a changelog. Omit when a night has none yet.
   */
  ideas?: string[];
  /** Real ticket URL later. Omit or leave empty for “coming soon”. */
  ticketUrl?: string;
};

export type EventsFile = {
  events: NightEvent[];
};

export type Ship = {
  id: string;
  /** Calendar date in Pacific Time, YYYY-MM-DD. */
  date: string;
  episodeQuestion: string;
  title: string;
  link?: string;
  note?: string;
  /** Optional button label next to a link — e.g. “Try the number”. */
  cta?: string;
};

export type ScheduleFile = {
  timezone: string;
  airTime: string;
  episodes: Episode[];
};

export type ShipsFile = {
  ships: Ship[];
};
