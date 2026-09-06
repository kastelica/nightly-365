import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetail } from "@/components/event-detail";
import { getEvent, getEvents, getProgressForDate } from "@/lib/content";
import { SITE } from "@/lib/site";
import { getLiveEmbedSrc } from "@/lib/youtube";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) {
    return { title: SITE.name };
  }

  return {
    title: `${event.question} · ${SITE.name}`,
    description: event.blurb,
    openGraph: {
      title: `${event.question} · ${SITE.name}`,
      description: event.blurb,
      type: "website",
      images: [
        {
          url: SITE.banner,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.whenClock}`,
        },
      ],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <EventDetail
      event={event}
      embedSrc={getLiveEmbedSrc()}
      progress={getProgressForDate(event.date)}
    />
  );
}
