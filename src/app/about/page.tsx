import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import Compliance from "@/components/Compliance";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About QSS India | Security, Manpower & Housekeeping Services",
  description:
    "Discover QSS India — 25+ years of experience in security services, manpower outsourcing, housekeeping, hospitality and professional workforce management across North India.",
  alternates: {
    canonical: "/about",
  },
};

const stats = [
  {
    value: "25+",
    label: "Years Experience",
    description: "Professional workforce solutions",
    icon: Sparkles,
  },
  {
    value: "2200+",
    label: "Outsourced Workforce",
    description: "Across multiple operations",
    icon: Users,
  },
  {
    value: "500+",
    label: "Security Personnel",
    description: "Trained security workforce",
    icon: ShieldCheck,
  },
  {
    value: "Govt. + Private",
    label: "Sector Experience",
    description: "Diverse institutional exposure",
    icon: Building2,
  },
];

const locations = [
  { city: "Hathras", type: "Head Office" },
  { city: "Aligarh", type: "Branch Presence" },
  { city: "Mathura", type: "Branch Presence" },
  { city: "Lucknow", type: "Branch Presence" },
  { city: "Meerut", type: "Branch Presence" },
  { city: "Delhi", type: "Branch Presence" },
  { city: "Uttarakhand", type: "Branch Presence" },
];

const strengths = [
  {
    title: "Experienced Operations",
    text: "Over two decades of experience in workforce management, security and outsourced manpower operations.",
  },
  {
    title: "Verified Workforce",
    text: "Structured recruitment, verification, documentation and training before deployment.",
  },
  {
    title: "Dedicated Supervision",
    text: "Operational supervision, monitoring and structured workforce coordination.",
  },
  {
    title: "Quality Monitoring",
    text: "Routine inspection, reporting, evaluation and service-quality review.",
  },
  {
    title: "Statutory Compliance",
    text: "Operational framework supported by key security, labour and workforce registrations.",
  },
  {
    title: "Structured Reporting",
    text: "Attendance, inspection, MIS and operational reporting for better transparency.",
  },
];

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    text: "We understand workforce strength, skill requirements, location, shift structure and operational expectations.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Recruitment",
    text: "Suitable candidates are identified based on defined manpower and operational requirements.",
    icon: Users,
  },
  {
    step: "03",
    title: "Verification",
    text: "Required identity, background and workforce documentation processes are completed.",
    icon: UserCheck,
  },
  {
    step: "04",
    title: "Training",
    text: "Personnel receive role-specific orientation, discipline and deployment readiness training.",
    icon: GraduationCap,
  },
  {
    step: "05",
    title: "Deployment",
    text: "Prepared manpower is deployed with defined duties, identity, uniform and supervision.",
    icon: BriefcaseBusiness,
  },
  {
    step: "06",
    title: "Monitoring",
    text: "Performance, attendance and service quality are continuously monitored and reviewed.",
    icon: BadgeCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <PageHero
        eyebrow="About QSS India"
        title="Experience. Discipline. Dependability."
        subtitle="Professional security, manpower outsourcing, housekeeping and workforce support backed by more than 25 years of operational experience."
        crumb="About"
        path="/about"
      />

      {/* =====================================================
          FLOATING TRUST BAR
      ====================================================== */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_25px_80px_-30px_rgba(30,64,175,0.30)] grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`
                      group relative p-6 md:p-8
                      ${index < 2 ? "border-b lg:border-b-0" : ""}
                      ${index % 2 === 0 ? "border-r" : ""}
                      lg:border-r
                      lg:last:border-r-0
                      border-blue-100
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:-rotate-3">
                        <Icon size={21} />
                      </div>

                      <div>
                        <div className="text-2xl font-bold text-navy-900 md:text-3xl">
                          {item.value}
                        </div>

                        <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                          {item.label}
                        </div>

                        <p className="mt-2 hidden text-xs leading-5 text-ink-400 md:block">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          COMPANY STORY
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.35] grid-bg-light" />

        <div className="container-px relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* LEFT */}
            <Reveal>
              <div>
                <div className="section-label mb-4">
                  Our Story
                </div>

                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Built Around People.
                  <span className="block text-gradient-blue">
                    Driven by Responsibility.
                  </span>
                </h2>

                <p className="mb-5 max-w-2xl text-base leading-8 text-ink-500 md:text-lg">
                  QSS India Manpower Outsourcing Services provides professional
                  manpower solutions with a strong focus on security,
                  housekeeping, hospitality and skilled and semi-skilled
                  workforce deployment.
                </p>

                <p className="mb-8 max-w-2xl text-base leading-8 text-ink-500">
                  Our experience across government and private-sector
                  organisations has helped us develop a structured operating
                  model covering recruitment, verification, training,
                  deployment, supervision and service reporting.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Government Outsourcing",
                    "Security Services",
                    "Housekeeping Services",
                    "Hospitality Support",
                    "Skilled Manpower",
                    "Semi-Skilled Manpower",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-xl border border-blue-100 bg-[#f8fbff] px-4 py-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-brand-blue"
                      />

                      <span className="text-sm font-medium text-ink-700">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-blue transition-all hover:gap-3"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </Link>
              </div>
            </Reveal>

            {/* RIGHT VISUAL */}
            <Reveal delay={0.12}>
              <div className="relative">

                <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#102f76] via-[#1e40af] to-[#2563eb] p-8 text-white shadow-[0_35px_90px_-35px_rgba(30,64,175,0.6)] md:p-10">

                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

                  <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-white/10" />

                  <div className="relative z-10">

                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
                        <ShieldCheck size={27} />
                      </div>

                      <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100">
                        QSS India
                      </span>
                    </div>

                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                      Our Foundation
                    </div>

                    <h3 className="mb-5 text-3xl font-bold leading-tight">
                      Professional Workforce.
                      <br />
                      Responsible Management.
                    </h3>

                    <p className="leading-7 text-blue-100">
                      Our operating philosophy combines manpower readiness,
                      disciplined supervision, regulatory awareness and
                      responsive client support.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-3">
                      {[
                        ["25+", "Years"],
                        ["2200+", "Workforce"],
                        ["500+", "Security"],
                        ["24×7", "Support"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur"
                        >
                          <div className="text-xl font-bold">
                            {value}
                          </div>

                          <div className="mt-1 text-xs uppercase tracking-wider text-blue-200">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Our Direction
              </div>

              <h2 className="heading-display font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                Purpose Behind
                <span className="block text-gradient-blue">
                  Every Deployment
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">

            {/* Mission */}
            <Reveal>
              <div className="group h-full rounded-[28px] border border-blue-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,49,105,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(30,64,175,0.10)] md:p-9">

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                  <Target size={25} />
                </div>

                <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  Our Mission
                </div>

                <h3 className="mb-4 text-2xl font-bold text-navy-900">
                  Delivering Dependable Workforce Solutions
                </h3>

                <p className="leading-7 text-ink-500">
                  To provide tailored manpower and support solutions while
                  maintaining operational quality, statutory compliance,
                  supervision and cost-effective service delivery.
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.1}>
              <div className="group h-full rounded-[28px] border border-blue-100 bg-white p-7 shadow-[0_10px_40px_rgba(15,49,105,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(30,64,175,0.10)] md:p-9">

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                  <Eye size={25} />
                </div>

                <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  Our Approach
                </div>

                <h3 className="mb-4 text-2xl font-bold text-navy-900">
                  Long-Term Service Partnerships
                </h3>

                <p className="leading-7 text-ink-500">
                  We aim to support organisations through reliable manpower,
                  structured service management, continuous monitoring and
                  responsive operational support.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/70 blur-[120px]" />

        <div className="container-px relative z-10">

          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Our Presence
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                Connected Across
                <span className="block text-gradient-blue">
                  North India
                </span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-7 text-ink-500 md:text-lg">
                Headquartered in Hathras with branch presence across important
                operational locations.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locations.map((location, index) => (
              <Reveal key={location.city} delay={index * 0.04}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,49,105,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(30,64,175,0.10)]">

                  {index === 0 && (
                    <div className="absolute right-3 top-3 rounded-full bg-blue-50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-blue">
                      HQ
                    </div>
                  )}

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                    <MapPin size={20} />
                  </div>

                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {location.type}
                  </div>

                  <div className="text-lg font-bold text-navy-900">
                    {location.city}
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY QSS
      ====================================================== */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

            <Reveal>
              <div className="lg:sticky lg:top-32">
                <div className="section-label mb-4">
                  Why QSS India
                </div>

                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Structured for
                  <span className="block text-gradient-blue">
                    Reliable Operations.
                  </span>
                </h2>

                <p className="leading-8 text-ink-500">
                  Every engagement is supported by manpower planning,
                  verification, supervision, reporting and an operational
                  compliance framework.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_5px_25px_rgba(15,49,105,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(30,64,175,0.09)]">

                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                        <CheckCircle2 size={20} />
                      </div>

                      <span className="font-display text-xl font-bold text-blue-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-navy-900">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-ink-500">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS TIMELINE
      ====================================================== */}
      <section className="overflow-hidden bg-white py-20 md:py-28">

        <div className="container-px">

          <Reveal>
            <div className="mx-auto mb-16 max-w-3xl text-center">

              <div className="section-label mb-4 justify-center">
                Our Methodology
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                A Process Built for
                <span className="block text-gradient-blue">
                  Consistent Service
                </span>
              </h2>

              <p className="text-base leading-7 text-ink-500 md:text-lg">
                From understanding the requirement to ongoing monitoring,
                every stage follows a structured operating process.
              </p>

            </div>
          </Reveal>

          <div className="relative mx-auto max-w-7xl">

            {/* desktop connecting line */}
            <div className="absolute left-[8%] right-[8%] top-7 hidden h-[2px] bg-gradient-to-r from-blue-100 via-brand-blue to-blue-100 xl:block" />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">

              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <div className="group relative h-full">

                      <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-brand-blue text-white shadow-[0_8px_25px_rgba(30,64,175,0.25)] transition-all duration-300 group-hover:scale-110">
                        <Icon size={20} />
                      </div>

                      <div className="h-[calc(100%-76px)] rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_5px_25px_rgba(15,49,105,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-[0_16px_40px_rgba(30,64,175,0.10)]">

                        <div className="mb-2 text-xs font-bold text-brand-blue">
                          STEP {item.step}
                        </div>

                        <h3 className="mb-3 font-bold text-navy-900">
                          {item.title}
                        </h3>

                        <p className="text-xs leading-6 text-ink-500">
                          {item.text}
                        </p>

                      </div>
                    </div>
                  </Reveal>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPLIANCE
      ====================================================== */}
      <Compliance />

      {/* =====================================================
          CTA
      ====================================================== */}
      <CTABanner />
    </>
  );
}