import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Wrench,
  Cpu,
  Truck,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Skilled & Semi-Skilled Manpower Outsourcing | QSS India",
  description:
    "End-to-end contractual manpower outsourcing, skilled tradesmen, warehouse staff, computer operators and industrial workforce solutions across North India.",
  alternates: {
    canonical: "/services/manpower-outsourcing",
  },
};

const workforceTypes = [
  {
    title: "Technical & Skilled Manpower",
    desc: "Electricians, HVAC technicians, plumbers, DG operators, and machine operators possessing verified ITI / trade certifications.",
    icon: Wrench,
  },
  {
    title: "Semi-Skilled Industrial Workforce",
    desc: "Assembly line workers, packing staff, loading-unloading teams, and store helpers for manufacturing facilities and logistics hubs.",
    icon: Truck,
  },
  {
    title: "Administrative & IT Operators",
    desc: "Data entry operators, MIS executives, dispatch assistants, and helpdesk support staff for organized daily office workflows.",
    icon: Cpu,
  },
  {
    title: "Supervisory & Operations Leaders",
    desc: "On-site managers and shift supervisors who handle daily workforce rosters, attendance tracking, shift handovers and quality oversight.",
    icon: Users,
  },
];

export default function ManpowerOutsourcingServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Workforce Solutions"
        title="Skilled & Semi-Skilled Manpower Outsourcing"
        subtitle="End-to-end recruitment, biometric verification, onboarding and compliant payroll management for businesses needing dependable manpower at scale."
        crumb="Manpower Outsourcing"
        path="/services/manpower-outsourcing"
      />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <div className="section-label mb-4">Scalable Staffing</div>
                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  2,200+ Active Workforce
                  <span className="block text-gradient-blue">
                    Deployed Across Industries
                  </span>
                </h2>
                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  Hiring, verifying, training and retaining reliable contractual staff is complex and time-consuming. QSS India assumes full operational and statutory responsibility for your workforce, enabling your management to focus entirely on core business growth.
                </p>
                <p className="mb-8 text-base leading-8 text-ink-500">
                  From large industrial plants and logistics warehouses to government offices and corporate headquarters, we deliver skilled, semi-skilled and general support personnel tailored to your operational volume.
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
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
                  >
                    Request Manpower Proposal <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-navy-900 mb-5">
                  End-to-End Employer Compliance
                </h3>
                <ul className="space-y-4">
                  {[
                    "100% EPF & ESIC statutory compliance with digital deposit proofs",
                    "Timely wage disbursement directly to worker bank accounts",
                    "Police verification, Aadhaar biometric verification & medical checkups",
                    "Zero administrative liability and complete labour dispute protection",
                    "Dynamic shift replacement pool ensuring 100% attendance coverage",
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

      {/* Workforce Types */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">Talent Categories</div>
              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Roles We Supply &amp; Manage
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workforceTypes.map((wf, idx) => {
              const Icon = wf.icon;
              return (
                <Reveal key={wf.title} delay={idx * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {wf.title}
                    </h3>
                    <p className="text-xs leading-5 text-ink-500">
                      {wf.desc}
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
