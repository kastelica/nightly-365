import { HowItWorks } from "@/components/how-it-works";
import { Live } from "@/components/live";
import { Progress } from "@/components/progress";
import { SectionLabel } from "@/components/section-label";
import { SiteBrandLink } from "@/components/site-mark";
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
  const agenda = event.agenda?.length ? event.agenda : SITE.agenda;
  const doors = (event.subquestions ?? []).filter((question) => question.trim());

  return (
    <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <p className="pt-10">
        <SiteBrandLink />
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
        <EventIntro event={event} />
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

        {doors.length > 0 ? (
          <section
            id="doors"
            aria-labelledby="doors-heading"
            className="scroll-mt-8"
          >
            <SectionLabel id="doors-heading" index="03" title="Doors" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-mute">
              {SITE.doorsLead}
            </p>
            <ol className="mt-4 divide-y divide-rule">
              {doors.map((question) => (
                <li
                  key={question}
                  className="py-5 font-serif text-xl leading-snug text-ink sm:text-[1.35rem]"
                >
                  {question}
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        <section
          id="agenda"
          aria-labelledby="agenda-heading"
          className="scroll-mt-8"
        >
          <SectionLabel id="agenda-heading" index="04" title="Agenda" />
          <ol className="mt-6 flex max-w-xl flex-col gap-4">
            {agenda.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="mt-1 text-[0.7rem] tracking-[0.22em] text-mute">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-ink/90">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <HowItWorks index="05" />

        <Progress
          items={progress}
          index="06"
          emptyTitle="Nothing yet from this night."
          emptyBody="What we make together will show up here. Follow along — or join in."
        />

        <TicketSection url={event.ticketUrl} />
      </main>

      <SiteFooter />
    </div>
  );
}

function EventIntro({ event }: { event: NightEvent }) {
  const setup = (event.setup ?? []).filter((paragraph) => paragraph.trim());
  const before = event.expect?.before?.trim();
  const during = event.expect?.during?.trim();
  const hasExpect = Boolean(before || during);

  return (
    <>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90">
        {event.blurb}
      </p>
      {setup.length > 0 ? (
        <div className="mt-5 flex max-w-xl flex-col gap-5">
          {setup.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-ink/85">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {hasExpect ? (
        <div className="mt-10 max-w-xl border-t border-rule pt-8">
          <p className="text-[0.7rem] tracking-[0.22em] text-mute uppercase">
            What to expect
          </p>
          <div className="mt-6 flex flex-col gap-6">
            {before ? (
              <div>
                <p className="text-sm tracking-wide text-lamp">
                  Before you arrive
                </p>
                <p className="mt-2 text-base leading-relaxed text-ink/85">
                  {before}
                </p>
              </div>
            ) : null}
            {during ? (
              <div>
                <p className="text-sm tracking-wide text-lamp">On the night</p>
                <p className="mt-2 text-base leading-relaxed text-ink/85">
                  {during}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
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
      <SectionLabel id="tickets-heading" index="07" title="Tickets" />
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
