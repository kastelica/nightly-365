import { formatEpisodeDate, relativeDayLabel } from "@/lib/dates";
import type { Episode } from "@/lib/types";
import { SectionLabel } from "@/components/section-label";

type ScheduleProps = {
  episodes: Episode[];
};

export function Schedule({ episodes }: ScheduleProps) {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="scroll-mt-8"
    >
      <SectionLabel id="schedule-heading" index="02" title="Upcoming" />
      <ol className="mt-2 divide-y divide-rule">
        {episodes.map((episode) => (
          <li key={episode.id} className="py-5">
            <EpisodeRow episode={episode} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function EpisodeRow({ episode }: { episode: Episode }) {
  const relative = relativeDayLabel(episode.date);
  const dateLabel = formatEpisodeDate(episode.date);

  return (
    <article className="grid gap-2 sm:grid-cols-[5.5rem_8.5rem_1fr] sm:items-baseline sm:gap-6">
      <p className="text-[0.68rem] tracking-[0.18em] uppercase text-lamp">
        {episode.status}
      </p>
      <p className="text-sm text-mute">
        {relative ? (
          <>
            <span className="text-ink">{relative}</span>
            <span className="text-mute"> · {dateLabel}</span>
          </>
        ) : (
          dateLabel
        )}
      </p>
      <div>
        <h3 className="font-serif text-xl leading-snug text-ink sm:text-[1.35rem]">
          {episode.question}
        </h3>
        {episode.notes ? (
          <p className="mt-1.5 text-sm leading-relaxed text-mute">
            {episode.notes}
          </p>
        ) : null}
      </div>
    </article>
  );
}
