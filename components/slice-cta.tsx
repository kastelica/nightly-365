import { SectionLabel } from "@/components/section-label";
import { SITE } from "@/lib/site";

type SliceCtaProps = {
  index?: string;
};

export function SliceCta({ index = "05" }: SliceCtaProps) {
  const { url, title, note, cta } = SITE.slice;

  return (
    <section
      id="slice"
      aria-labelledby="slice-heading"
      className="scroll-mt-8"
    >
      <SectionLabel id="slice-heading" index={index} title={title} />
      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/90">
        {note}
      </p>
      <a
        href={url}
        className="mt-6 inline-block border border-lamp px-5 py-3 text-sm tracking-wide text-lamp transition-colors hover:bg-lamp/10"
      >
        {cta}
      </a>
    </section>
  );
}
