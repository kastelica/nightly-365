import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <header className="pt-16 sm:pt-24">
      <p className="text-[0.7rem] tracking-[0.28em] text-mute uppercase">
        {SITE.host}
      </p>
      <h1 className="font-serif text-[2.75rem] leading-[1.05] tracking-tight text-ink mt-5 sm:text-6xl">
        {SITE.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90 sm:text-xl">
        {SITE.pitch}
      </p>
      <p className="mt-8 text-sm tracking-wide text-lamp">{SITE.when}</p>
    </header>
  );
}
