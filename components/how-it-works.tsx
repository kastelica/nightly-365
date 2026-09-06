import { SectionLabel } from "@/components/section-label";
import { SITE } from "@/lib/site";

type HowItWorksProps = {
  index?: string;
};

export function HowItWorks({ index = "05" }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-8"
    >
      <SectionLabel id="how-it-works-heading" index={index} title="How it works" />
      <ul className="mt-6 flex max-w-xl list-none flex-col gap-4 p-0">
        {SITE.howItWorks.map((line) => (
          <li key={line} className="text-base leading-relaxed text-ink/90">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
