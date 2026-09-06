import { SectionLabel } from "@/components/section-label";
import { SITE } from "@/lib/site";

type IdeasWorthRepeatingProps = {
  ideas: string[];
  index?: string;
};

export function IdeasWorthRepeating({
  ideas,
  index = "03",
}: IdeasWorthRepeatingProps) {
  const seeds = ideas.filter((idea) => idea.trim());
  if (seeds.length === 0) return null;

  return (
    <section
      id="ideas"
      aria-labelledby="ideas-heading"
      className="scroll-mt-8"
    >
      <SectionLabel
        id="ideas-heading"
        index={index}
        title="Ideas worth repeating"
      />
      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/90">
        {SITE.ideasLead}
      </p>
      <ul className="mt-6 flex list-none flex-col gap-3 p-0">
        {seeds.map((idea) => (
          <li key={idea}>
            <blockquote className="border border-rule border-l-2 border-l-lamp/80 bg-panel/60 px-5 py-5 sm:px-6 sm:py-6">
              <p className="font-serif text-[1.2rem] leading-snug text-ink sm:text-[1.35rem]">
                {idea}
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
