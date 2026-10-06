import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Cpu,
  FileSpreadsheet,
  Headphones,
  CheckCircle2,
  Phone,
  ArrowRight,
  UserCheck,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Office Administration & Support Staffing | QSS India",
  description:
    "Reliable office administration manpower, computer operators, data entry specialists, receptionists and back-office support across North India.",
  alternates: {
    canonical: "/services/office-administration",
  },
};

const adminRoles = [
  {
    title: "Computer & Data Entry Operators",
    desc: "Proficient typing speed, spreadsheet management, CRM entries, invoicing, and digital documentation operators.",
    icon: Cpu,
  },
  {
    title: "Receptionists & Front-Desk Executives",
    desc: "Professional communication, visitor management, telephone switchboard handling, and meeting coordination.",
    icon: Headphones,
  },
  {
    title: "Office Assistants & Peons",
    desc: "Dispatch and courier sorting, inter-departmental file movement, stationery management, and daily office assistance.",
    icon: Briefcase,
  },
  {
    title: "Record Keepers & Store Helpers",
    desc: "Physical and digital record organization, archive management, warehouse store inventory tracking and indexing.",
    icon: FileSpreadsheet,
  },
];

export default function OfficeAdministrationServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Administrative Support"
        title="Office Administration &amp; Support Staffing"
        subtitle="Competent computer operators, receptionists, office assistants and executive support personnel to streamline your daily commercial operations."
        crumb="Office Administration"
        path="/services/office-administration"
      />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <div className="section-label mb-4">Operational Efficiency</div>
                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Competent Staff.
                  <span className="block text-gradient-blue">
                    Seamless Office Workflows.
                  </span>
                </h2>
                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  Every organization relies on dedicated back-office and administrative personnel to maintain smooth daily communication, accurate document tracking, and welcoming front-desk management.
                </p>
                <p className="mb-8 text-base leading-8 text-ink-500">
                  QSS India sources, assesses, verifies and deploys capable administrative support staff trained in digital office suites, professional etiquette, and organized task execution for government and corporate offices.
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
                    Hire Admin Support Staff <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-navy-900 mb-5">
                  Administrative Staffing Benefits
                </h3>
                <ul className="space-y-4">
                  {[
                    "Skill verification: typing speed, software proficiency & literacy",
                    "Aadhaar biometric check and thorough police background verification",
                    "Zero recruitment overhead and immediate replacement guarantee",
                    "Prompt monthly payroll and statutory deposit compliance (PF/ESIC)",
                    "Dedicated account manager for routine operational coordination",
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

      {/* Admin Roles Grid */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">Roles Available</div>
              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Administrative Profiles We Deploy
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {adminRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <Reveal key={role.title} delay={idx * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {role.title}
                    </h3>
                    <p className="text-xs leading-5 text-ink-500">
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
