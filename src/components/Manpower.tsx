import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import Counter from "./Counter";
import Reveal from "./Reveal";
import { workforceCategories } from "@/data/content";

export default function Manpower() {
  return (
    <section
      id="manpower"
      className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="manpower-heading"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28] grid-bg-light"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-44 top-24 h-[460px] w-[460px] rounded-full bg-blue-100/60 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-50 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-px relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* =====================================================
              IMAGE SIDE
          ====================================================== */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[610px]">

              {/* Decorative frame */}
              <div
                className="absolute -bottom-5 -left-5 h-full w-full rounded-[30px] border border-blue-100 bg-blue-50/70"
                aria-hidden="true"
              />

              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-blue-100 bg-slate-100 shadow-[0_30px_80px_-35px_rgba(30,64,175,0.32)]">

                <Image
                  src="/images/security/team-lineup-02.jpg"
                  alt="QSS India skilled and semi-skilled manpower workforce"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  priority={false}
                />

                {/* subtle lower gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0b2c68]/55 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="max-w-sm">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                      Workforce Operations
                    </div>

                    <div className="text-xl font-bold text-white md:text-2xl">
                      Trained. Verified. Deployment Ready.
                    </div>
                  </div>
                </div>
              </div>

              {/* 2200+ floating card */}
              <div
                className="
                  absolute
                  -right-2 -top-5
                  rounded-2xl
                  border border-blue-100
                  bg-white/95
                  px-5 py-4
                  shadow-[0_18px_45px_rgba(30,64,175,0.18)]
                  backdrop-blur-md
                  sm:-right-6
                  md:-right-10
                  md:px-6
                  md:py-5
                "
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                    <Users size={21} />
                  </div>

                  <div>
                    <div className="heading-display text-2xl font-bold text-navy-900 md:text-3xl">
                      <Counter value={2200} suffix="+" />
                    </div>

                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink-500">
                      Outsourced Workforce
                    </p>
                  </div>

                </div>
              </div>

              {/* support badge */}
              <div
                className="
                  absolute
                  -bottom-5 left-4
                  hidden
                  items-center gap-3
                  rounded-2xl
                  border border-blue-100
                  bg-white
                  px-5 py-4
                  shadow-[0_15px_40px_rgba(15,49,105,0.12)]
                  md:flex
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <div className="text-sm font-bold text-navy-900">
                    Structured Deployment
                  </div>

                  <div className="text-xs text-ink-400">
                    Recruitment • Verification • Training
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              CONTENT SIDE
          ====================================================== */}
          <Reveal className="order-1 lg:order-2">
            <div className="max-w-2xl">

              <div className="section-label mb-4">
                Manpower Solutions
              </div>

              <h2
                id="manpower-heading"
                className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl"
              >
                Skilled & Semi-Skilled
                <span className="block text-gradient-blue">
                  Workforce Solutions
                </span>
              </h2>

              <p className="mb-5 text-base leading-8 text-ink-500 md:text-lg">
                QSS India provides structured manpower outsourcing for skilled,
                semi-skilled and operational roles across government,
                institutional and private-sector requirements.
              </p>

              <p className="mb-8 text-base leading-8 text-ink-500">
                Workforce deployment is supported through requirement
                assessment, recruitment, verification, training, supervision
                and ongoing service monitoring.
              </p>

              {/* Feature strip */}
              <div className="mb-8 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Users,
                    title: "2200+",
                    subtitle: "Workforce",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Verified",
                    subtitle: "Personnel",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Managed",
                    subtitle: "Deployment",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.subtitle}
                      className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-4"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-blue shadow-sm">
                        <Icon size={17} />
                      </div>

                      <div className="font-bold text-navy-900">
                        {item.title}
                      </div>

                      <div className="mt-0.5 text-xs text-ink-400">
                        {item.subtitle}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Categories */}
              <div className="mb-9">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-navy-900">
                  Workforce Categories
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {workforceCategories.map((category) => (
                    <div
                      key={category}
                      className="
                        group
                        flex items-center gap-3
                        rounded-xl
                        border border-slate-200
                        bg-white
                        px-4 py-3.5
                        transition-all duration-300
                        hover:border-blue-200
                        hover:bg-blue-50/50
                        hover:shadow-[0_8px_24px_rgba(30,64,175,0.06)]
                      "
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-brand-blue"
                      />

                      <span className="text-sm font-medium text-ink-700">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">

                <Link
                  href="/services/manpower-outsourcing"
                  className="btn-primary !rounded-xl"
                >
                  Explore Manpower Services
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="btn-outline !rounded-xl"
                >
                  Discuss Requirement
                </Link>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}