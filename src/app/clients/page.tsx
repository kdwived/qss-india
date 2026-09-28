import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import ClientMarquee from "@/components/ClientMarquee";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Clients | QSS India",
  description:
    "Explore organizations served by QSS India across government, public sector, institutional, infrastructure and private-sector requirements.",
  alternates: {
    canonical: "/clients",
  },
};

type Client = {
  name: string;
  logo: string;
  category: string;
};

const clients: Client[] = [
  {
    name: "Ministry of Electronics & Information Technology",
    logo: "/images/clients/meity.webp",
    category: "Government",
  },
  {
    name: "Inspector General Stamps Department",
    logo: "/images/clients/igstamps.webp",
    category: "Government",
  },
  {
    name: "Labour Bureau",
    logo: "/images/clients/labour-bureau.webp",
    category: "Government",
  },
  {
    name: "Airports Authority of India",
    logo: "/images/clients/airports-authority-of-india.webp",
    category: "Public Sector",
  },
  {
    name: "Income Tax Department",
    logo: "/images/clients/income-tax-department.webp",
    category: "Government",
  },
  {
    name: "National Disaster Management Authority",
    logo: "/images/clients/ndma.webp",
    category: "Government",
  },
  {
    name: "National Informatics Centre",
    logo: "/images/clients/nic.webp",
    category: "Government",
  },
  {
    name: "Indian Council of Agricultural Research",
    logo: "/images/clients/icar.webp",
    category: "Government",
  },
  {
    name: "Controller General of Accounts",
    logo: "/images/clients/cga.webp",
    category: "Government",
  },
  {
    name: "Cabinet Secretariat",
    logo: "/images/clients/cabinet-secretariat.webp",
    category: "Government",
  },
  {
    name: "NSIC",
    logo: "/images/clients/nsic.webp",
    category: "Public Sector",
  },
  {
    name: "Bharat Petroleum",
    logo: "/images/clients/bpcl.webp",
    category: "Public Sector",
  },
  {
    name: "North Central Railway",
    logo: "/images/clients/north-central-railway.webp",
    category: "Government",
  },
  {
    name: "Election Commission of India",
    logo: "/images/clients/election-commission-of-india.webp",
    category: "Government",
  },
  {
    name: "Kendriya Vidyalaya",
    logo: "/images/clients/kendriya-vidyalaya.webp",
    category: "Education",
  },
  {
    name: "Power Grid Corporation of India",
    logo: "/images/clients/powergrid.webp",
    category: "Public Sector",
  },
  {
    name: "Uttar Pradesh Power Corporation Limited",
    logo: "/images/clients/uppcl.webp",
    category: "Public Sector",
  },
  {
    name: "Uttar Pradesh Power Transmission Corporation",
    logo: "/images/clients/upptcl.webp",
    category: "Public Sector",
  },
  {
    name: "Aligarh Nagar Nigam",
    logo: "/images/clients/aligarh-nagar-nigam.webp",
    category: "Government",
  },
  {
    name: "Doon Public School",
    logo: "/images/clients/doon-public-school.webp",
    category: "Education",
  },
  {
    name: "Blinkit",
    logo: "/images/clients/blinkit.webp",
    category: "Private Sector",
  },
  {
    name: "Hero",
    logo: "/images/clients/hero.webp",
    category: "Private Sector",
  },
];

const categories = [
  {
    icon: Landmark,
    title: "Government",
    text: "Government departments and public institutions.",
  },
  {
    icon: Building2,
    title: "Public Sector",
    text: "PSUs, infrastructure and public-sector organizations.",
  },
  {
    icon: Users,
    title: "Institutional",
    text: "Education and institutional workforce requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Private Sector",
    text: "Corporate and commercial service requirements.",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="Our Clients"
        title="Trusted Across Diverse Organisations"
        subtitle="QSS India supports government, public-sector, institutional and private-sector organizations through professional security, manpower, housekeeping and operational support services."
        crumb="Clients"
        path="/clients"
      />

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28] grid-bg-light"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-40 top-16 h-[460px] w-[460px] rounded-full bg-blue-100/50 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container-px relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div>
                <div className="section-label mb-4">
                  Client Relationships
                </div>

                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Experience Across
                  <span className="block text-gradient-blue">
                    Multiple Sectors
                  </span>
                </h2>

                <p className="mb-5 text-base leading-8 text-ink-500 md:text-lg">
                  QSS India has supported organizations requiring dependable
                  manpower, security, housekeeping and workforce management
                  services.
                </p>

                <p className="text-base leading-8 text-ink-500">
                  Our approach focuses on workforce readiness, structured
                  deployment, supervision, service monitoring and responsive
                  client coordination.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        rounded-[22px]
                        border border-slate-200
                        bg-white
                        p-6
                        shadow-[0_8px_30px_rgba(15,49,105,0.04)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-blue-200
                        hover:shadow-[0_16px_40px_rgba(30,64,175,0.09)]
                      "
                    >
                      <div
                        className="
                          mb-5
                          flex h-11 w-11
                          items-center justify-center
                          rounded-xl
                          bg-blue-50
                          text-brand-blue
                          transition-all
                          group-hover:bg-brand-blue
                          group-hover:text-white
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <h3 className="mb-2 font-bold text-navy-900">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-6 text-ink-500">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          INFINITE LOGO MARQUEE
      ====================================================== */}

      <ClientMarquee />

      {/* =====================================================
          ALL CLIENTS GRID
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25] grid-bg-light"
          aria-hidden="true"
        />

        <div className="container-px relative z-10">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Client Portfolio
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                Organisations We Have
                <span className="block text-gradient-blue">
                  Worked With
                </span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-7 text-ink-500 md:text-lg">
                A selection of organizations represented in the QSS India
                company profile and client portfolio.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {clients.map((client, index) => (
              <Reveal
                key={client.name}
                delay={(index % 5) * 0.04}
              >
                <div
                  className="
                    group
                    flex h-full
                    min-h-[190px]
                    flex-col
                    rounded-[22px]
                    border border-slate-200
                    bg-white
                    p-5
                    shadow-[0_6px_25px_rgba(15,49,105,0.035)]
                    transition-all duration-300
                    hover:-translate-y-1.5
                    hover:border-blue-200
                    hover:shadow-[0_16px_40px_rgba(30,64,175,0.10)]
                  "
                >
                  {/* LOGO */}

                  <div
                    className="
                      relative
                      mb-5
                      flex h-[92px]
                      w-full
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#fbfdff]
                      p-4
                    "
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="220px"
                      className="
                        object-contain
                        p-4
                        transition-transform
                        duration-300
                        group-hover:scale-[1.05]
                      "
                    />
                  </div>

                  {/* CATEGORY */}

                  <div
                    className="
                      mb-2
                      inline-flex
                      w-fit
                      items-center
                      gap-1.5
                      rounded-full
                      bg-blue-50
                      px-2.5
                      py-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-brand-blue
                    "
                  >
                    <BadgeCheck size={11} />

                    {client.category}
                  </div>

                  {/* NAME */}

                  <h3 className="text-sm font-semibold leading-5 text-navy-900">
                    {client.name}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST CTA
      ====================================================== */}

      <section className="bg-white py-20 md:py-24">
        <div className="container-px">
          <Reveal>
            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                bg-gradient-to-br
                from-[#123a86]
                via-[#1e40af]
                to-[#2563eb]
                px-6
                py-10
                text-white
                shadow-[0_30px_80px_-30px_rgba(30,64,175,0.5)]
                md:px-10
                lg:px-12
              "
            >
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
                aria-hidden="true"
              />

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div className="max-w-3xl">
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                    Work With QSS India
                  </div>

                  <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                    Looking for a Reliable Workforce Partner?
                  </h3>

                  <p className="max-w-2xl leading-7 text-blue-100">
                    Share your security, manpower, housekeeping or operational
                    support requirement with our team.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-brand-blue
                    shadow-lg
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-blue-50
                  "
                >
                  Discuss Your Requirement

                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}