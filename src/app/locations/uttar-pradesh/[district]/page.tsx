import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Building2,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  BriefcaseBusiness,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import {
  upDistricts,
  districtBySlug,
  verifiedOffices,
} from "@/data/locations";
import { contact } from "@/data/content";
import { siteConfig } from "@/config/site";

type Props = {
  params: { district: string };
};

export async function generateStaticParams() {
  const params: { district: string }[] = [];
  upDistricts.forEach((d) => {
    params.push({ district: d.slug });
    if (d.aliases) {
      d.aliases.forEach((alias) => {
        params.push({ district: alias });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const district = districtBySlug[params.district.toLowerCase()];
  if (!district) return {};

  const title = `Security & Manpower Services in ${district.name} | QSS India`;
  const description = `Professional security guards, manpower outsourcing, housekeeping and facility support available in ${district.name}, ${district.regionName}, Uttar Pradesh. PSARA licensed agency.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/uttar-pradesh/${district.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/locations/uttar-pradesh/${district.slug}`,
      images: ["/images/hero/poster.jpg"],
      type: "website",
    },
  };
}

const serviceList = [
  {
    title: "PSARA Security Guards",
    desc: "Uniformed, verified and trained security personnel for commercial, industrial, institutional and residential sites.",
    icon: ShieldCheck,
    href: "/services/security-services",
  },
  {
    title: "Workforce & Manpower Outsourcing",
    desc: "Skilled, semi-skilled and operational staff deployed with full statutory compliance and supervisor coverage.",
    icon: Users,
    href: "/services/manpower-outsourcing",
  },
  {
    title: "Corporate & Facility Housekeeping",
    desc: "Trained cleaning teams, hygiene management and daily facility upkeep across offices, hospitals and industries.",
    icon: Sparkles,
    href: "/services/housekeeping",
  },
  {
    title: "Government & Institutional Outsourcing",
    desc: "Compliant workforce solutions tailored for government offices, municipal bodies and public sector undertakings.",
    icon: BriefcaseBusiness,
    href: "/services/government-outsourcing",
  },
  {
    title: "Event & Bouncer Personnel",
    desc: "Crowd control, access verification and physical security personnel for corporate, cultural and institutional events.",
    icon: Calendar,
    href: "/services/event-security",
  },
  {
    title: "Administrative Support Staff",
    desc: "Computer operators, office assistants, receptionists and front-office staff for organized daily administrative flow.",
    icon: Building2,
    href: "/services/office-administration",
  },
];

export default function DistrictLocationPage({ params }: Props) {
  const district = districtBySlug[params.district.toLowerCase()];
  if (!district) {
    notFound();
  }

  // Check if QSS India has a verified physical office in this district
  const physicalOffice = verifiedOffices.find(
    (o) => o.city.toLowerCase() === district.name.toLowerCase()
  );

  return (
    <>
      <PageHero
        eyebrow={`Uttar Pradesh • ${district.regionName}`}
        title={`Security & Manpower Services in ${district.name}`}
        subtitle={`Professional workforce solutions, trained security personnel, housekeeping teams and manpower outsourcing available across ${district.name} and surrounding areas.`}
        crumb={district.name}
        path={`/locations/uttar-pradesh/${district.slug}`}
      />

      {/* Overview & Service Availability Banner */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <div className="section-label mb-4">
                  Regional Service Coverage
                </div>

                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Workforce Deployment in
                  <span className="block text-gradient-blue">
                    {district.name}, Uttar Pradesh
                  </span>
                </h2>

                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  QSS India delivers comprehensive security and outsourced workforce
                  solutions throughout {district.name} and the broader {district.regionName} belt.
                  With over 25 years of proven excellence and PSARA licensing, we support government,
                  industrial, institutional and corporate clients with disciplined, verified personnel.
                </p>

                <p className="mb-8 text-base leading-8 text-ink-500">
                  Whether your site requires 24/7 security guard deployments, industrial workforce
                  support, facility sanitation teams or quick event personnel mobilization, our
                  operational framework ensures rapid onboarding and continuous on-ground supervision.
                </p>

                {physicalOffice ? (
                  <div className="rounded-2xl border-2 border-brand-blue bg-blue-50/70 p-6 shadow-sm">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-blue px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      <MapPin size={13} />
                      Verified Office in {district.name}
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">
                      {physicalOffice.title}
                    </h3>
                    <p className="text-sm text-ink-600 mb-3">{physicalOffice.address}</p>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold">
                      <a href={`tel:${physicalOffice.phone}`} className="flex items-center gap-1.5 text-brand-blue hover:underline">
                        <Phone size={13} /> Call: {physicalOffice.phone}
                      </a>
                      <a href={`https://wa.me/${physicalOffice.whatsapp.replace(/\D/g, "")}`} className="flex items-center gap-1.5 text-emerald-600 hover:underline">
                        <MessageCircle size={13} /> WhatsApp: {physicalOffice.whatsapp}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-6">
                    <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue">
                      <CheckCircle2 size={15} />
                      Active Service Deployment Area
                    </div>
                    <p className="text-sm leading-6 text-ink-600">
                      QSS India provides active mobile deployments, regional supervisory coverage, and scheduled staff rotation throughout {district.name} coordinated through our North India operational network.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Quick Consultation Card */}
            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-[0_20px_50px_rgba(15,49,105,0.06)] md:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-md">
                  <ShieldCheck size={24} />
                </div>

                <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-2">
                  Immediate Deployment Available
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Need Staff in {district.name}?
                </h3>

                <p className="text-sm leading-6 text-ink-500 mb-8">
                  Get in touch directly with our operational team for site surveys, workforce estimates, or immediate security guard deployment in {district.name}.
                </p>

                <div className="space-y-3">
                  <a
                    href={`tel:+91${contact.phone}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(30,64,175,0.25)] transition-all hover:bg-blue-700"
                  >
                    <Phone size={16} />
                    Call Now: +91 {contact.phone}
                  </a>

                  <a
                    href={`https://wa.me/91${contact.whatsapp}?text=${encodeURIComponent(
                      `Hi QSS India, I am inquiring about services in ${district.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald-500 bg-white px-6 py-3.5 text-sm font-bold text-emerald-600 transition-all hover:bg-emerald-50"
                  >
                    <MessageCircle size={16} />
                    WhatsApp: +91 {contact.whatsapp}
                  </a>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-6 py-3 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-50"
                  >
                    Request Detailed Proposal <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Available in this District */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Services Available
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Solutions Offered in {district.name}
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-7 text-ink-500">
                All QSS India service lines operate under strict statutory compliance,
                police verification protocols and performance tracking.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={i * 0.05}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_25px_rgba(15,49,105,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(30,64,175,0.09)] flex flex-col justify-between">
                    <div>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition-all group-hover:bg-brand-blue group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-navy-900">
                        {svc.title}
                      </h3>

                      <p className="text-sm leading-6 text-ink-500 mb-6">
                        {svc.desc}
                      </p>
                    </div>

                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue transition-all group-hover:gap-2.5"
                    >
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose QSS India in District */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Operational Highlights
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Why Organisations in {district.name} Trust QSS India
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "PSARA Licensed",
                desc: "Legally authorized private security services operating under official regulation.",
              },
              {
                icon: Clock,
                title: "Rapid Deployment",
                desc: "Swift workforce mobilization capability across all tehsils and industrial pockets.",
              },
              {
                icon: CheckCircle2,
                title: "Full Compliance",
                desc: "100% adherence to PF, ESI, GST and minimum wage regulatory frameworks.",
              },
              {
                icon: Users,
                title: "Field Supervision",
                desc: "Active patrol officers and daily attendance audits ensuring high discipline standards.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={idx * 0.05}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-2 font-bold text-navy-900">{feature.title}</h3>
                    <p className="text-xs leading-5 text-ink-500">{feature.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* District Navigation Breadcrumbs and Sibling Districts */}
          <div className="mt-16 pt-12 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
            >
              ← View All 75 Uttar Pradesh Districts
            </Link>

            <span className="text-xs text-slate-400">
              Region: {district.regionName} • State: Uttar Pradesh • Headquarters: {district.headquarters || district.name}
            </span>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
