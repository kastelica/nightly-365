import eventsFile from "@/content/events.json";
import scheduleFile from "@/content/schedule.json";
import shipsFile from "@/content/ships.json";
import type {
  Episode,
  EventsFile,
  NightEvent,
  ScheduleFile,
  Ship,
  ShipsFile,
} from "@/lib/types";

// TODO: Sheets sync — fetch the same Episode[] from a Google Sheet and
// fall back to the local schedule file. See ROADMAP.md.

const schedule = scheduleFile as ScheduleFile;
const shipsData = shipsFile as ShipsFile;
const eventsData = eventsFile as EventsFile;

export function getEpisodes(): Episode[] {
  return [...schedule.episodes].sort((a, b) => a.date.localeCompare(b.date));
}

export function getUpcomingEpisodes(limit = 14): Episode[] {
  return getEpisodes()
    .filter((episode) => episode.status !== "aired")
    .slice(0, limit);
}

export function getShips(): Ship[] {
  return [...shipsData.ships].sort((a, b) => b.date.localeCompare(a.date));
}

export function getProgressForDate(date: string): Ship[] {
  return getShips().filter((item) => item.date === date);
}

export function getEvents(): NightEvent[] {
  return [...eventsData.events];
}

export function getEvent(slug: string): NightEvent | undefined {
  return eventsData.events.find((event) => event.slug === slug);
}

/** Public one-liners from every night page that has them. */
export function getPublicIdeas(): string[] {
  return getEvents().flatMap((event) =>
    (event.ideas ?? []).filter((idea) => idea.trim()),
  );
}
