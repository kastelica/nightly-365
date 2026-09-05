import { formatEpisodeDate } from "@/lib/dates";
import type { Ship } from "@/lib/types";
import { SectionLabel } from "@/components/section-label";

type ShipLogProps = {
  ships: Ship[];
};

export function ShipLog({ ships }: ShipLogProps) {
  return (
    <section id="ships" aria-labelledby="ships-heading" className="scroll-mt-8">
      <SectionLabel id="ships-heading" index="03" title="Ship log" />
      {ships.length === 0 ? (
        <EmptyShips />
      ) : (
        <ol className="mt-2 divide-y divide-rule">
          {ships.map((ship) => (
            <li key={ship.id} className="py-5">
              <ShipRow ship={ship} />
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function EmptyShips() {
  return (
    <div className="mt-6 border border-dashed border-rule px-5 py-8 sm:px-7">
      <p className="font-serif text-xl text-ink">Nothing shipped yet.</p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">
        Tonight is the first night. When something lands — a site, a PR, a
        small tool — add it to{" "}
        <code className="text-ink/80">content/ships.json</code>.
      </p>
    </div>
  );
}

function ShipRow({ ship }: { ship: Ship }) {
  const title = ship.link ? (
    <a
      href={ship.link}
      className="font-serif text-xl leading-snug text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-lamp"
    >
      {ship.title}
    </a>
  ) : (
    <span className="font-serif text-xl leading-snug text-ink">{ship.title}</span>
  );

  return (
    <article className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:items-baseline sm:gap-6">
      <p className="text-sm text-mute">{formatEpisodeDate(ship.date)}</p>
      <div>
        <h3>{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mute">
          {ship.episodeQuestion}
        </p>
        {ship.note ? (
          <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{ship.note}</p>
        ) : null}
      </div>
    </article>
  );
}
