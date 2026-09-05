const PT = "America/Los_Angeles";

/** Today's calendar date in Pacific Time, YYYY-MM-DD. */
export function todayInPT(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PT,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function addUtcDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

/** Format a YYYY-MM-DD civil date without shifting timezones. */
export function formatEpisodeDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function relativeDayLabel(isoDate: string, now = new Date()): string | null {
  const today = todayInPT(now);
  if (isoDate === today) return "Tonight";
  if (isoDate === addUtcDays(today, 1)) return "Tomorrow";
  return null;
}
