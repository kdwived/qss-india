import type { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  Building2,
  Sparkles,
  UserCheck,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import BusinessVerticals from "@/components/BusinessVerticals";
import Housekeeping from "@/components/Housekeeping";
import Hospitality from "@/components/Hospitality";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Services | QSS India",
  description:
    "Explore QSS India services including manpower outsourcing, security services, housekeeping, hospitality, skilled and semi-skilled manpower, government outsourcing and administrative support.",
  alternates: {
    canonical: "/services",
  },
};

const serviceHighlights = [
  {
    title: "Security Services",
    text: "Professional security personnel for commercial, institutional, residential and event requirements.",
    icon: ShieldCheck,
    href: "/services/security-services",
  },
  {
    title: "Manpower Outsourcing",
    text: "Structured workforce deployment across skilled, semi-skilled and general manpower requirements.",
    icon: Users,
    href: "/services/manpower-outsourcing",
  },
  {
    title: "Housekeeping Services",
    text: "Professional housekeeping manpower supported by supervision, inspection and quality monitoring.",
    icon: Sparkles,
    href: "/services/housekeeping",
  },
  {
    title: "Hospitality Support",
    text: "Trained workforce supporting hospitality, front-office and operational service requirements.",
    icon: Building2,
    href: "/services/hospitality",
  },
  {
    title: "Government Outsourcing",
    text: "Workforce support for government departments and public-sector organisations.",
    icon: BriefcaseBusiness,
    href: "/services/government-outsourcing",
  },
  {
    title: "Office & Admin Support",
    text: "Administrative manpower including support staff, computer operators and related operational roles.",
    icon: UserCheck,
    href: "/services/administrative-support",
  },
];

const capabilities = [
  "Government Outsourcing Services",
  "Security Services",
  "Hospitality Services",
  "Corporate & Domestic Housekeeping",
  "Skilled Manpower",
  "Semi-Skilled Manpower",
  "Event Security",
  "Residential Security",
  "Commercial Security",
  "Office Administration Support",
];

export default function ServicesPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <PageHero
        eyebrow="Our Services"
        title="One Partner. Multiple Workforce Solutions."
        subtitle="From professional security and housekeeping to manpower outsourcing, hospitality and administrative support — QSS India provides structured workforce solutions for diverse operational needs."
        crumb="Services"
        path="/services"
      />

      {/* =====================================================
          INTRO / SERVICE OVERVIEW
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32] grid-bg-light"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container-px relative z-10">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Service Portfolio
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                Workforce Solutions Built
                <span className="block text-gradient-blue">
                  Around Your Operations
                </span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-7 text-ink-500 md:text-lg">
                QSS India supports government, public-sector and private
                organisations through professional manpower, security,
                housekeeping and operational support services.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <Link
                    href={service.href}
                    className="
                      group block h-full
                      rounded-[24px]
                      border border-slate-200
                      bg-white
                      p-7
                      shadow-[0_8px_30px_rgba(15,49,105,0.04)]
                      transition-all duration-300
                      hover:-translate-y-1.5
                      hover:border-blue-200
                      hover:shadow-[0_20px_50px_rgba(30,64,175,0.10)]
                    "
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className="
                          flex h-13 w-13
                          h-14 w-14
                          items-center justify-center
                          rounded-2xl
                          bg-blue-50
                          text-brand-blue
                          transition-all duration-300
                          group-hover:bg-brand-blue
                          group-hover:text-white
                        "
                      >
                        <Icon size={24} />
                      </div>

                      <span className="font-display text-2xl font-bold text-blue-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-navy-900">
                      {service.title}
                    </h3>

                    <p className="mb-5 text-sm leading-6 text-ink-500">
                      {service.text}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-all group-hover:gap-3">
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL CAPABILITIES
      ====================================================== */}
      <section className="bg-[#f7faff] py-20 md:py-24">
        <div className="container-px">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <div className="section-label mb-4">
                  Service Capabilities
                </div>

                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                  Flexible Support for
                  <span className="block text-gradient-blue">
                    Different Workforce Needs
                  </span>
                </h2>

                <p className="text-base leading-8 text-ink-500">
                  Services can be structured according to manpower category,
                  operational requirement, location, shift pattern and client
                  deployment needs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((item, index) => (
                  <div
                    key={item}
                    className="
                      group
                      flex items-center gap-4
                      rounded-2xl
                      border border-slate-200
                      bg-white
                      p-5
                      shadow-[0_5px_20px_rgba(15,49,105,0.035)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-[0_12px_30px_rgba(30,64,175,0.08)]
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-xs font-bold
                        text-brand-blue
                        transition-all
                        group-hover:bg-brand-blue
                        group-hover:text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span className="text-sm font-semibold text-navy-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXISTING SERVICE SECTIONS
      ====================================================== */}
      <BusinessVerticals />

      <Housekeeping />

      <Hospitality />

      {/* =====================================================
          CTA
      ====================================================== */}
      <CTABanner />
    </>
  );
}