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
