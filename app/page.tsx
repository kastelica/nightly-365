import { Hero } from "@/components/hero";
import { IdeasWorthRepeating } from "@/components/ideas-worth-repeating";
import { Live } from "@/components/live";
import { Progress } from "@/components/progress";
import { Schedule } from "@/components/schedule";
import { SiteFooter } from "@/components/site-footer";
import { getPublicIdeas, getShips, getUpcomingEpisodes } from "@/lib/content";
import { SITE } from "@/lib/site";
import { getLiveEmbedSrc } from "@/lib/youtube";

export default function Home() {
  const episodes = getUpcomingEpisodes(14);
  const progress = getShips();
  const ideas = getPublicIdeas();
  const embedSrc = getLiveEmbedSrc();

  return (
    <div className="home-dusk mx-auto w-full max-w-3xl px-5 sm:px-8">
      <a
        href="#live"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-5 focus:z-10 focus:bg-panel focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to live
      </a>
      <Hero />
      <main className="mt-20 flex flex-col gap-20 pb-6 sm:mt-24 sm:gap-24">
        <Live embedSrc={embedSrc} />
        <Schedule episodes={episodes} />
        <IdeasWorthRepeating ideas={ideas} />
        <Progress items={progress} index="04" />
      </main>
      <p className="sr-only">
        {SITE.name} streams {SITE.whenShort}.
      </p>
      <SiteFooter />
    </div>
  );
}
