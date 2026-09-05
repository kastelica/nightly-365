import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule pt-10 pb-16">
      <p className="font-serif text-lg text-ink">{SITE.benevolence}</p>
    </footer>
  );
}
