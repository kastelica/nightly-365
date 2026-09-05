import scheduleFile from "@/content/schedule.json";
import shipsFile from "@/content/ships.json";
import type { Episode, ScheduleFile, Ship, ShipsFile } from "@/lib/types";

// TODO: Sheets sync — fetch the same Episode[] from a Google Sheet and
// fall back to this JSON. See ROADMAP.md.
// TODO: Richer ship tracking — keep Ship as the contract when this moves
// to an API or database. See ROADMAP.md.

const schedule = scheduleFile as ScheduleFile;
const shipsData = shipsFile as ShipsFile;

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
