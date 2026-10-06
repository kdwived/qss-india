import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Users,
  CheckCircle2,
  FileText,
  BadgeCheck,
  Building2,
  Phone,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Government Outsourcing Services | QSS India",
  description:
    "Compliant government manpower outsourcing and facility support across North India. PSARA licensed, full statutory compliance for municipal bodies, departments and PSUs.",
  alternates: {
    canonical: "/services/government-outsourcing",
  },
};

const keyOfferings = [
  {
    title: "Public Sector & Department Staffing",
    desc: "End-to-end recruitment, police verification and contractual manpower deployment for central and state government departments.",
    icon: Landmark,
  },
  {
    title: "Municipal & Civic Operations",
    desc: "Sanitation workers, housekeeping personnel, municipal office assistants and operational support teams for urban local bodies.",
    icon: Building2,
  },
  {
    title: "Institutional Security Coverage",
    desc: "PSARA-certified uniformed security guards, access control and perimeter monitoring for public infrastructure and government premises.",
    icon: ShieldCheck,
  },
  {
    title: "100% Statutory Compliance",
    desc: "Rigorous adherence to EPF, ESIC, GST, Labour Department norms, wage registers and transparent online management reports.",
    icon: FileText,
  },
];

const compliancePoints = [
  "PSARA Licensed Agency (PSA/L/74/UP/2022/SEP/3/797)",
  "GST Registered (09AAAFQ1712F1ZN / 05AAAFQ1712F1ZV)",
  "Active EPF & ESIC Registrations with Monthly Challan Records",
  "Labour License Compliance (UPCLAL15000792)",
  "GeM Portal Readiness & Transparent E-Tendering Experience",
  "Verified Background & Police Verification Documentation",
];

export default function GovernmentOutsourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Services"
        title="Government Outsourcing & Manpower Solutions"
        subtitle="Trusted partner for government departments, municipal corporations, autonomous institutes and public sector undertakings across North India."
        crumb="Government Outsourcing"
        path="/services/government-outsourcing"
      />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <div>
                <div className="section-label mb-4">Institutional Experience</div>
                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Workforce Solutions Built for
                  <span className="block text-gradient-blue">
                    Public Sector Standards
                  </span>
                </h2>
                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  With over 25 years of proven operational experience, QSS India has been a dependable workforce partner for government departments, educational institutions, development authorities and public sector enterprises.
                </p>
                <p className="mb-8 text-base leading-8 text-ink-500">
                  Our government outsourcing framework ensures strict adherence to tender specifications, timely statutory deposits, transparent digital attendance records via our Online Management System (OMS), and continuous supervisory oversight.
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
                    Submit RFP / Tender Enquiry <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  Statutory &amp; Regulatory Adherence
                </h3>
                <ul className="space-y-4">
                  {compliancePoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue mt-0.5">
                        <CheckCircle2 size={15} />
                      </div>
                      <span className="text-sm font-medium text-ink-700 leading-6">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">Key Capabilities</div>
              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Comprehensive Government Support
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyOfferings.map((offering, idx) => {
              const Icon = offering.icon;
              return (
                <Reveal key={offering.title} delay={idx * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-xs leading-5 text-ink-500">
                      {offering.desc}
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
