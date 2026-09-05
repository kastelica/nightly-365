import { formatEpisodeDate } from "@/lib/dates";
import type { Ship } from "@/lib/types";
import { SectionLabel } from "@/components/section-label";

type ProgressProps = {
  items: Ship[];
  index?: string;
  emptyTitle?: string;
  emptyBody?: string;
};

export function Progress({
  items,
  index = "03",
  emptyTitle = "Nothing yet.",
  emptyBody = "Tonight is the first night. What we make together will show up here.",
}: ProgressProps) {
  return (
    <section
      id="progress"
      aria-labelledby="progress-heading"
      className="scroll-mt-8"
    >
      <SectionLabel id="progress-heading" index={index} title="What we made" />
      {items.length === 0 ? (
        <EmptyProgress title={emptyTitle} body={emptyBody} />
      ) : (
        <ol className="mt-2 divide-y divide-rule">
          {items.map((item) => (
            <li key={item.id} className="py-5">
              <ProgressRow item={item} />
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function EmptyProgress({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-6 border border-dashed border-rule px-5 py-8 sm:px-7">
      <p className="font-serif text-xl text-ink">{title}</p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">{body}</p>
    </div>
  );
}

function ProgressRow({ item }: { item: Ship }) {
  const title = item.link ? (
    <a
      href={item.link}
      className="font-serif text-xl leading-snug text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-lamp"
    >
      {item.title}
    </a>
  ) : (
    <span className="font-serif text-xl leading-snug text-ink">{item.title}</span>
  );

  return (
    <article className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:items-baseline sm:gap-6">
      <p className="text-sm text-mute">{formatEpisodeDate(item.date)}</p>
      <div>
        <h3>{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mute">
          {item.episodeQuestion}
        </p>
        {item.note ? (
          <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{item.note}</p>
        ) : null}
      </div>
    </article>
  );
}
