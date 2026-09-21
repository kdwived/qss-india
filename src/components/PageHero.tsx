import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
  path,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
  path: string;
}) {
  const siteUrl = siteConfig.url;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: crumb, item: `${siteUrl}${path}` },
    ],
  };

  return (
    <section className="relative bg-navy-950 pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="absolute inset-0 grid-bg opacity-[0.25] pointer-events-none" />
      <div className="absolute -top-24 right-[-10%] w-[50vw] aspect-square rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
      <div className="container-px relative">
        <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6">
          <Link href="/" className="hover:text-brand-skyblue transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-white/65">{crumb}</span>
        </nav>
        <span className="section-label">{eyebrow}</span>
        <h1 className="heading-display font-display text-3xl md:text-5xl xl:text-6xl font-semibold text-white mt-5 max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/55 mt-5 max-w-2xl leading-relaxed text-[15px] md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
