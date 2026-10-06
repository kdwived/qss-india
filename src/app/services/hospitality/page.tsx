import type { Metadata } from "next";
import Link from "next/link";
import {
  Coffee,
  Users,
  Building2,
  CheckCircle2,
  Phone,
  ArrowRight,
  Smile,
  Utensils,
  Headphones,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { hospitalityServices, contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Hospitality Services & Staffing | QSS India",
  description:
    "Professional hospitality manpower, front-office receptionists, pantry management and guest support personnel across North India.",
  alternates: {
    canonical: "/services/hospitality",
  },
};

export default function HospitalityServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Hospitality & Support"
        title="Professional Hospitality Staffing"
        subtitle="Well-groomed, trained and courteous personnel for front-office, pantry, reception and guest coordination across hotels, resorts and corporate facilities."
        crumb="Hospitality"
        path="/services/hospitality"
      />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <div className="section-label mb-4">Service Excellence</div>
                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Welcoming Faces.
                  <span className="block text-gradient-blue">
                    Flawless Service Delivery.
                  </span>
                </h2>
                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  First impressions define your brand. QSS India delivers hospitality and front-office personnel who embody warmth, professional communication, and meticulous attention to guest comfort.
                </p>
                <p className="mb-8 text-base leading-8 text-ink-500">
                  From executive boardroom beverage service to round-the-clock hotel front-desk operations, our staff are rigorously trained in customer service etiquette, hygiene standards, and operational efficiency.
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
                    Enquire for Hospitality Staff <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-navy-900 mb-5">
                  Hospitality Standards
                </h3>
                <ul className="space-y-4">
                  {[
                    "Strict personal grooming and hygiene protocols",
                    "Professional spoken etiquette and guest courtesy training",
                    "Specialized pantry operation & food handling standards",
                    "Complete identity and background verification",
                    "Prompt roster management and relief staff availability",
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
              <div className="section-label mb-4 justify-center">Specialized Roles</div>
              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Hospitality &amp; Front-Office Capabilities
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hospitalityServices.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                    <Coffee size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-6 text-ink-500">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
