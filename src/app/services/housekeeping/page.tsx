import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Building2,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Trash2,
  Home,
  Check,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { housekeepingServices, contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Corporate & Facility Housekeeping Services | QSS India",
  description:
    "Professional corporate housekeeping, industrial cleaning, hospital hygiene and deep sanitation services across Uttar Pradesh, Delhi NCR and Uttarakhand.",
  alternates: {
    canonical: "/services/housekeeping",
  },
};

const housekeepingFeatures = [
  {
    title: "Corporate & Office Housekeeping",
    desc: "Daily dusting, floor scrubbing, glass cleaning, restroom sanitization and workstation hygiene for modern workspaces.",
    icon: Building2,
  },
  {
    title: "Industrial & Factory Floor Cleaning",
    desc: "Heavy-duty degreasing, shop-floor waste clearance, machinery perimeter cleaning and safety protocol adherence.",
    icon: ShieldCheck,
  },
  {
    title: "Hospital & Healthcare Facility Hygiene",
    desc: "Infection control standards, medical waste segregation, OT sanitization protocols, and continuous bio-hazard safety.",
    icon: Sparkles,
  },
  {
    title: "Commercial & Retail Space Maintenance",
    desc: "Common area floor polishing, escalator cleaning, high-traffic washroom management, and food-court waste disposal.",
    icon: Home,
  },
];

export default function HousekeepingServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Facility Management"
        title="Corporate & Facility Housekeeping Services"
        subtitle="Comprehensive sanitation, deep cleaning and daily facility hygiene powered by dedicated supervision, modern cleaning machines and verified personnel."
        crumb="Housekeeping"
        path="/services/housekeeping"
      />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <div className="section-label mb-4">Hygiene &amp; Cleanliness</div>
                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Healthy Workplaces.
                  <span className="block text-gradient-blue">
                    Impeccable Facilities.
                  </span>
                </h2>
                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  Clean environments elevate employee productivity, protect health, and project an immaculate corporate image. QSS India delivers fully-managed housekeeping teams customized to the specific cadence of your facility.
                </p>
                <p className="mb-8 text-base leading-8 text-ink-500">
                  We deploy trained janitors and supervisors equipped with eco-friendly cleaning consumables, mechanized scrubbers, and strict quality check audits to maintain flawless hygiene across every square foot.
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
                    Request Housekeeping Audit <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-navy-900 mb-5">
                  Our Housekeeping Quality Promise
                </h3>
                <ul className="space-y-4">
                  {[
                    "Daily checklist-based inspection by roving supervisors",
                    "Eco-certified, non-hazardous industrial cleaning agents",
                    "Modern machinery: single-disc scrubbers, auto-scrubbers & wet vacuums",
                    "Trained in color-coded microfiber cross-contamination control",
                    "Complete statutory coverage (PF, ESIC, minimum wages) for all workers",
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

      {/* Capabilities Grid */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">Specialized Sectors</div>
              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Facility Hygiene Across Sectors
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {housekeepingFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={idx * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs leading-5 text-ink-500">
                      {feature.desc}
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
