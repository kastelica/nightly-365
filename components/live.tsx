import { SectionLabel } from "@/components/section-label";
import { SITE } from "@/lib/site";

type LiveProps = {
  embedSrc: string | null;
  index?: string;
  title?: string;
  showYoutubeLink?: boolean;
};

export function Live({
  embedSrc,
  index = "01",
  title = "Live",
  showYoutubeLink = false,
}: LiveProps) {
  return (
    <section id="live" aria-labelledby="live-heading" className="scroll-mt-8">
      <SectionLabel id="live-heading" index={index} title={title} />
      <div className="mt-6 overflow-hidden rounded-sm border border-rule bg-panel">
        {embedSrc ? (
          <div className="relative aspect-video bg-night">
            <iframe
              src={embedSrc}
              title={`${SITE.name} livestream`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-2xl text-ink sm:text-3xl">
              Going live soon
            </p>
            <p className="mt-3 text-sm tracking-wide text-lamp">
              {SITE.whenShort}
            </p>
          </div>
        )}
      </div>
      {showYoutubeLink ? (
        <p className="mt-4 text-sm text-mute">
          Watch on YouTube{" "}
          <a
            href={SITE.youtubeUrl}
            className="text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-lamp"
          >
            {SITE.youtubeHandle}
          </a>
          .
        </p>
      ) : null}
    </section>
  );
}
