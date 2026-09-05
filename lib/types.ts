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

export type NightEvent = {
  slug: string;
  /** Calendar date in Pacific Time, YYYY-MM-DD. */
  date: string;
  question: string;
  /** Short “what this night is” blurb. */
  blurb: string;
  /** How to join in / help. Falls back to SITE.join when omitted. */
  join?: string;
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
};

export type ScheduleFile = {
  timezone: string;
  airTime: string;
  episodes: Episode[];
};

export type ShipsFile = {
  ships: Ship[];
};
