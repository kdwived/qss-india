"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck, Users, SprayCan, Cpu, GitBranch, Image as ImageIcon,
  PhoneCall, Building2, ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  {
    href: "/security",
    icon: ShieldCheck,
    title: "Security Services",
    desc: "PSARA-certified guards, bouncers, event and industrial security.",
    tag: "300+ Personnel",
    image: "/images/security/event-security-01.jpg",
  },
  {
    href: "/manpower",
    icon: Users,
    title: "Manpower Outsourcing",
    desc: "Skilled & semi-skilled workforce, trained 40+ hours before deployment.",
    tag: "1,800+ Workforce",
    image: "/images/security/team-lineup-02.jpg",
  },
  {
    href: "/services",
    icon: SprayCan,
    title: "Housekeeping & Hospitality",
    desc: "Corporate, industrial, hospital cleaning and front-of-house staffing.",
    tag: "6 Verticals",
    image: "/images/hospitality/resort-team-01.jpg",
  },
  {
    href: "/technology",
    icon: Cpu,
    title: "Online Management System",
    desc: "Cloud-based attendance, payroll, compliance and client dashboard.",
    tag: "Technology",
    image: "/images/gallery/services-poster.jpg",
  },
  {
    href: "/process",
    icon: GitBranch,
    title: "Our Process",
    desc: "From requirement analysis to deployment and continuous improvement.",
    tag: "9-Step Workflow",
    image: "/images/security/team-outdoor-01.jpg",
  },
  {
    href: "/about",
    icon: Building2,
    title: "About & Compliance",
    desc: "25+ years of history, PSARA / GST / ESI / EPF registrations.",
    tag: "Since 1999",
    image: "/images/security/team-lineup-01.jpg",
  },
  {
    href: "/gallery",
    icon: ImageIcon,
    title: "Photo Gallery",
    desc: "Real QSS India teams across residential, event and hospitality sites.",
    tag: "Gallery",
    image: "/images/gallery/team-group-01.jpg",
  },
  {
    href: "/contact",
    icon: PhoneCall,
    title: "Get In Touch",
    desc: "Talk to our team about your security or workforce requirement.",
    tag: "Contact",
    image: "/images/security/guard-solo-01.jpg",
  },
];

export default function ExploreCards() {
  return (
    <section id="explore" className="relative bg-navy-900 py-24 md:py-28 border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" />
      <div className="container-px relative">
        <Reveal className="max-w-2xl mb-14">
          <span className="section-label">Explore QSS India</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mt-5">
            Everything We Do, In One Place
          </h2>
          <p className="text-white/55 mt-5 leading-relaxed">
            Eight quick doors into the site — each one goes deeper than this
            homepage does, with full detail, real photos and the numbers behind them.
          </p>
        </Reveal>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.06}>
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative card-glass rounded-sm overflow-hidden flex flex-col hover:border-brand-skyblue/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.title} — QSS India`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                <span className="absolute top-3 left-3 w-9 h-9 rounded-sm bg-navy-950/70 backdrop-blur border border-white/10 flex items-center justify-center">
                  <c.icon size={16} className="text-brand-skyblue" />
                </span>
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wide bg-navy-950/70 backdrop-blur text-white/80 border border-white/10 rounded-full px-2.5 py-1">
                  {c.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="heading-display text-base font-semibold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-brand-skyblue text-xs font-medium uppercase tracking-wide">
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
