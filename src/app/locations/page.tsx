import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import {
  districtsByRegion,
  regions,
  verifiedOffices,
  RegionKey,
} from "@/data/locations";

export const metadata: Metadata = {
  title: "Service Locations & Uttar Pradesh Districts | QSS India",
  description:
    "Explore QSS India's regional presence and service areas across North India, including verified offices in Hathras, Delhi NCR, Lucknow and Uttarakhand, serving all 75 districts of Uttar Pradesh.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  const regionKeys: RegionKey[] = [
    "western-up",
    "central-up",
    "eastern-up",
    "bundelkhand",
    "rohilkhand",
  ];

  return (
    <>
      <PageHero
        eyebrow="Coverage & Presence"
        title="Service Areas & Operational Locations"
        subtitle="Headquartered in Hathras with verified offices across Delhi NCR, Lucknow and Uttarakhand — delivering security, housekeeping and manpower services across all 75 districts of Uttar Pradesh."
        crumb="Locations"
        path="/locations"
      />

      {/* Verified Physical Offices */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Operational Offices
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                Verified Office
                <span className="block text-gradient-blue">Locations</span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-7 text-ink-500">
                Our administrative and operational offices provide on-ground management,
                supervision, client coordination and rapid workforce deployment.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {verifiedOffices.map((office, idx) => (
              <Reveal key={office.city} delay={idx * 0.05}>
                <div
                  className={`group relative h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    office.isHeadOffice
                      ? "border-brand-blue bg-blue-50/50 shadow-[0_10px_35px_rgba(30,64,175,0.08)]"
                      : "border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,49,105,0.03)] hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(30,64,175,0.08)]"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <MapPin size={20} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider ${
                        office.isHeadOffice
                          ? "bg-brand-blue text-white"
                          : "bg-blue-100 text-brand-blue"
                      }`}
                    >
                      {office.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {office.title}
                  </h3>

                  <p className="text-xs leading-5 text-ink-500 mb-6 flex-1">
                    {office.address}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-semibold">
                    <a
                      href={`tel:${office.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-2 text-brand-blue hover:underline"
                    >
                      <Phone size={13} />
                      {office.phone}
                    </a>
                    <a
                      href={`https://wa.me/${office.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-emerald-600 hover:underline"
                    >
                      <MessageCircle size={13} />
                      WhatsApp: {office.whatsapp}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Complete All 75 Districts of Uttar Pradesh by Region */}
      <section className="bg-[#f7faff] py-20 md:py-28" id="uttar-pradesh">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Statewide Presence
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                Serving All 75 Districts of
                <span className="block text-gradient-blue">Uttar Pradesh</span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-7 text-ink-500">
                Explore our active service availability across every region of Uttar Pradesh.
                Click on any district to view specific workforce capabilities and request deployment.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {regionKeys.map((regionKey) => {
              const reg = regions[regionKey];
              const districts = districtsByRegion[regionKey];

              return (
                <div
                  key={regionKey}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
                >
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy-900">
                        {reg.name}
                      </h3>
                      <p className="text-xs text-ink-500 mt-1">{reg.description}</p>
                    </div>

                    <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-brand-blue">
                      {districts.length} Districts
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {districts.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/locations/uttar-pradesh/${d.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-slate-100 bg-[#fbfdff] px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-brand-blue"
                      >
                        <span className="truncate">{d.name}</span>
                        <ArrowRight
                          size={12}
                          className="text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-blue"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
