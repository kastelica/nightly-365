import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule pt-10 pb-16">
      <p className="font-serif text-lg text-ink">{SITE.benevolence}</p>
      <p className="mt-4">
        <a
          href={SITE.repoUrl}
          className="text-sm text-mute underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-lamp"
        >
          {SITE.repoLabel}
        </a>
      </p>
    </footer>
  );
}
