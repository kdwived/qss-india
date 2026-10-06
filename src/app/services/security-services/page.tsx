import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  Eye,
  Building2,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Security Services | PSARA Licensed Agency | QSS India",
  description:
    "Trained, uniformed security guards, supervisors, bouncers, commercial and residential security services across Uttar Pradesh, Delhi NCR and Uttarakhand. PSARA certified.",
  alternates: {
    canonical: "/services/security-services",
  },
};

const securityRoles = [
  {
    title: "Trained Security Guards",
    desc: "Rigorous physical screening, background verification, 40+ hours mandatory training, and full uniform with photo identity credentials.",
    icon: ShieldCheck,
  },
  {
    title: "Security Supervisors & Field Officers",
    desc: "Site-level operational leadership, day and night shift monitoring, roster maintenance, visitor log audits, and regular emergency drills.",
    icon: UserCheck,
  },
  {
    title: "Commercial & Corporate Security",
    desc: "Access control systems monitoring, vehicle inspection, badge verification, asset protection, and 24x7 gate management for IT parks & corporate offices.",
    icon: Building2,
  },
  {
    title: "Residential Society & Gated Community Security",
    desc: "Visitor verification, intercom tracking, night patrolling, parking management, and child safety vigilance in apartment complexes.",
    icon: Building2,
  },
  {
    title: "Surveillance, CCTV & Control Room Monitoring",
    desc: "Trained operators for continuous monitoring of CCTV feeds, perimeter sensor alarms, fire alarm panels, and incident reporting.",
    icon: Eye,
  },
  {
    title: "Emergency Response & Quick Reaction",
    desc: "Rapid response protocols for fire emergencies, medical distress, trespassing incidents, and coordination with local law enforcement.",
    icon: AlertTriangle,
  },
];

export default function SecurityServicesSubPage() {
  return (
    <>
      <PageHero
        eyebrow="PSARA Certified"
        title="Comprehensive Security Services"
        subtitle="Manned guarding, executive protection, commercial facility security and surveillance solutions built upon 25+ years of operational discipline."
        crumb="Security Services"
        path="/services/security-services"
      />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <div className="section-label mb-4">Protection You Can Trust</div>
                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  500+ Trained Security Personnel
                  <span className="block text-gradient-blue">
                    Deployed Across North India
                  </span>
                </h2>
                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  At QSS India, our security guards are not merely gatekeepers—they are trained front-line professionals who represent your organization with dignity, alertness, and unwavering discipline.
                </p>
                <p className="mb-8 text-base leading-8 text-ink-500">
                  Every guard undergoes mandatory police verification, medical examination, and comprehensive induction training in visitor etiquette, fire extinguisher operation, crowd management, and emergency response procedures.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:+91${contact.phone}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700"
                  >
                    <Phone size={16} />
                    Call: +91 {contact.phone}
                  </a>
                  <Link
                    href="/security"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
                  >
                    View All Security Roles <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-navy-900 mb-5">
                  Core Security Standards
                </h3>
                <ul className="space-y-4">
                  {[
                    "PSARA License: PSA/L/74/UP/2022/SEP/3/797",
                    "Mandatory 40+ hours pre-deployment training",
                    "Complete police verification and biometric documentation",
                    "Structured 8-hour and 12-hour shift roster management",
                    "Surprise night visits by Area Field Officers",
                    "Real-time mobile attendance verification via OMS",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue mt-0.5">
                        <CheckCircle2 size={15} />
                      </div>
                      <span className="text-sm font-medium text-ink-700 leading-6">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">Specialized Deployments</div>
              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Our Security Capabilities
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <Reveal key={role.title} delay={idx * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {role.title}
                    </h3>
                    <p className="text-xs leading-6 text-ink-500">
                      {role.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
