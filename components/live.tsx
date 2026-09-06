"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/section-label";
import { SITE } from "@/lib/site";
import { withLivePlayerSrc } from "@/lib/youtube";

type LiveProps = {
  embedSrc: string | null;
  index?: string;
  title?: string;
};

const IFRAME_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export function Live({ embedSrc, index = "01", title = "Live" }: LiveProps) {
  return (
    <section id="live" aria-labelledby="live-heading" className="scroll-mt-8">
      <SectionLabel id="live-heading" index={index} title={title} />
      <div className="mt-6 overflow-hidden rounded-sm border border-rule bg-panel">
        {embedSrc ? (
          <LivePlayer embedSrc={embedSrc} />
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
      <p className="mt-4 text-sm text-mute">
        Open on YouTube{" "}
        <a
          href={SITE.youtubeUrl}
          className="text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-lamp"
        >
          {SITE.youtubeHandle}
        </a>
        .
      </p>
    </section>
  );
}

function LivePlayer({ embedSrc }: { embedSrc: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video bg-night">
        <iframe
          src={withLivePlayerSrc(embedSrc, window.location.origin)}
          title={`${SITE.name} livestream`}
          className="absolute inset-0 h-full w-full"
          allow={IFRAME_ALLOW}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-night">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,163,106,0.16),transparent_62%)]"
      />
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-lamp bg-lamp/15 text-lamp transition-colors group-hover:bg-lamp/25">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 translate-x-0.5"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="font-serif text-2xl text-ink sm:text-3xl">
          Watch live
        </span>
        <span className="text-sm tracking-wide text-lamp">{SITE.whenShort}</span>
      </button>
    </div>
  );
}
