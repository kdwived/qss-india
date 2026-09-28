import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: crumb,
        item: `${siteUrl}${path}`,
      },
    ],
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        border-b border-blue-100
        bg-gradient-to-br
        from-[#f8fbff]
        via-white
        to-[#eef5ff]
        pt-32
        pb-16
        md:pt-36
        md:pb-20
        lg:pt-40
        lg:pb-24
      "
    >
      {/* SEO breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.30]
          grid-bg-light
        "
        aria-hidden="true"
      />

      {/* Blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-100/60
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* Soft left glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-52
          bottom-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-50
          blur-[110px]
        "
        aria-hidden="true"
      />

      <div className="container-px relative z-10">
        {/* Breadcrumb */}
        <nav
          className="
            mb-6
            flex
            items-center
            gap-1.5
            text-xs
            font-medium
            text-slate-400
          "
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="
              transition-colors
              hover:text-brand-blue
            "
          >
            Home
          </Link>

          <ChevronRight
            size={13}
            className="text-slate-300"
            aria-hidden="true"
          />

          <span className="text-slate-600">
            {crumb}
          </span>
        </nav>

        {/* Eyebrow */}
        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border border-blue-200
            bg-white/80
            px-4
            py-2
            shadow-[0_6px_20px_rgba(30,64,175,0.05)]
            backdrop-blur-sm
          "
        >
          <ShieldCheck
            size={14}
            className="text-brand-blue"
            aria-hidden="true"
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.17em]
              text-brand-blue
              sm:text-xs
            "
          >
            {eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            heading-display
            max-w-4xl
            font-display
            text-4xl
            font-bold
            leading-[1.02]
            tracking-[-0.02em]
            text-navy-900
            sm:text-5xl
            md:text-6xl
            xl:text-[64px]
          "
        >
          {title}
        </h1>

        {/* Accent line */}
        <div
          className="
            mt-6
            h-[3px]
            w-16
            rounded-full
            bg-brand-blue
          "
          aria-hidden="true"
        />

        {/* Subtitle */}
        {subtitle && (
          <p
            className="
              mt-6
              max-w-2xl
              text-[15px]
              leading-7
              text-slate-600
              md:text-[17px]
            "
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}