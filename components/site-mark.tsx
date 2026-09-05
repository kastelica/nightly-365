import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

type SiteMarkProps = {
  size?: number;
  priority?: boolean;
  className?: string;
};

export function SiteMark({
  size = 72,
  priority = false,
  className,
}: SiteMarkProps) {
  return (
    <Image
      src={SITE.logo}
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={["rounded-full", className].filter(Boolean).join(" ")}
    />
  );
}

export function SiteBrandLink({ size = 40 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 text-sm text-mute underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-lamp"
    >
      <SiteMark size={size} />
      {SITE.name}
    </Link>
  );
}
