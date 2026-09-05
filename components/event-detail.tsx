import Link from "next/link";
import { Live } from "@/components/live";
import { Progress } from "@/components/progress";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { formatEpisodeDateLong, publicNightStatusLabel } from "@/lib/dates";
import { SITE } from "@/lib/site";
import type { NightEvent, Ship } from "@/lib/types";

type EventDetailProps = {
  event: NightEvent;
  embedSrc: string | null;
  progress: Ship[];
};

export function EventDetail({ event, embedSrc, progress }: EventDetailProps) {
  const status = publicNightStatusLabel(event.date);
  const join = event.join ?? SITE.join;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <p className="pt-10">
        <Link
          href="/"
          className="text-sm text-mute underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-lamp"
        >
          {SITE.name}
        </Link>
      </p>

      <header className="pt-10 sm:pt-14">
        <p className="text-[0.7rem] tracking-[0.28em] text-mute uppercase">
          {status}
        </p>
        <h1 className="font-serif text-[2.15rem] leading-[1.1] tracking-tight text-ink mt-5 sm:text-5xl">
          {event.question}
        </h1>
        <p className="mt-6 text-sm tracking-wide text-lamp">
          {formatEpisodeDateLong(event.date)} · {SITE.whenClock}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90">
          {event.blurb}
        </p>
      </header>

      <main className="mt-16 flex flex-col gap-20 pb-6 sm:mt-20 sm:gap-24">
        <Live
          embedSrc={embedSrc}
          index="01"
          title="Watch"
          showYoutubeLink
        />

        <section
          id="join"
          aria-labelledby="join-heading"
          className="scroll-mt-8"
        >
          <SectionLabel id="join-heading" index="02" title="Join in" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/90">
            {join}
          </p>
        </section>

        <Progress
          items={progress}
          index="03"
          emptyTitle="Nothing yet from this night."
          emptyBody="What we make together will show up here. Follow along — or join in."
        />

        <TicketSection url={event.ticketUrl} />
      </main>

      <SiteFooter />
    </div>
  );
}

function TicketSection({ url }: { url?: string }) {
  const ticketUrl = url?.trim();

  return (
    <section
      id="tickets"
      aria-labelledby="tickets-heading"
      className="scroll-mt-8"
    >
      <SectionLabel id="tickets-heading" index="04" title="Tickets" />
      <div className="mt-6">
        {ticketUrl ? (
          <a
            href={ticketUrl}
            className="inline-block border border-lamp px-5 py-3 text-sm tracking-wide text-lamp transition-colors hover:bg-lamp/10"
          >
            Get tickets
          </a>
        ) : (
          <p className="inline-block border border-rule px-5 py-3 text-sm tracking-wide text-mute">
            Tickets coming soon
          </p>
        )}
        <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">
          The night itself is free to watch and join. A ticket option may come
          later for special gatherings.
        </p>
      </div>
    </section>
  );
}
