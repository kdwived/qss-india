"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Building2, Award, ChevronRight } from "lucide-react";
import { company, about, coreValues } from "@/data/content";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: <Shield size={20} />,
    label: "25+ Years Experience",
    desc: "Trusted by government and private sector since 1999",
  },
  {
    icon: <Users size={20} />,
    label: "1800+ Workforce",
    desc: "Skilled, trained and verified personnel across departments",
  },
  {
    icon: <Building2 size={20} />,
    label: "7 Operating Locations",
    desc: "Present across Uttar Pradesh, Delhi and Uttarakhand",
  },
  {
    icon: <Award size={20} />,
    label: "Full Statutory Compliance",
    desc: "PSARA, GST, PF, ESI, Labour License and more",
  },
];

export default function AboutTeaser() {
  return (
    <section
      id="about"
      className="bg-section-white py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image collage */}
          <Reveal>
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="/images/security/team-outdoor-01.jpg"
                  alt="QSS India security team deployed at a client location"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-6 hidden md:block w-52 h-40 rounded-xl overflow-hidden shadow-card-hover border-4 border-white">
                <Image
                  src="/images/security/team-lineup-01.jpg"
                  alt="QSS India uniformed security guards in formation"
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute top-6 -left-4 hidden md:flex flex-col items-center justify-center bg-brand-blue text-white w-24 h-24 rounded-2xl shadow-blue">
                <span className="font-display text-3xl font-bold">25+</span>
                <span className="text-[10px] text-center leading-tight text-blue-200 uppercase tracking-wider mt-0.5">
                  Years of<br />Excellence
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right — Content */}
          <Reveal delay={0.15}>
            <div>
              {/* Section label */}
              <div className="section-label mb-4">About QSS India</div>

              <h2
                id="about-heading"
                className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-navy-900 leading-tight mb-6 heading-display"
              >
                {company.fullName}
              </h2>

              <div className="space-y-4 text-ink-600 leading-relaxed mb-8">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Core values */}
              <div className="flex flex-wrap gap-2 mb-10">
                {coreValues.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-pale border border-brand-soft rounded-full text-xs font-semibold text-brand-blue tracking-wide"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
                    {v}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="btn-primary inline-flex"
                aria-label="Learn more about QSS India"
              >
                Learn More About Us
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Pillars strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="card-pale p-6">
                <div className="icon-wrapper-blue mb-4" aria-hidden="true">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-navy-900 mb-1 text-sm">{p.label}</h3>
                <p className="text-ink-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
