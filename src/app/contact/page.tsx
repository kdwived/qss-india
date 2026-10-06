import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact QSS India | Security & Manpower Services",
  description:
    "Contact QSS India for security services, manpower outsourcing, housekeeping, hospitality and workforce support. Call, email or submit an enquiry for a customized proposal.",
  alternates: {
    canonical: "/contact",
  },
};

const contactOptions = [
  {
    title: "Call Us",
    value: "+91 8218451307",
    subtext: "Speak directly with our team",
    href: "tel:+918218451307",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "+91 9548849619",
    subtext: "Chat with QSS India on WhatsApp",
    href: "https://wa.me/919548849619",
    icon: MessageCircle,
  },
  {
    title: "Email Us",
    value: "qssindia4@gmail.com",
    subtext: "Send your service requirement",
    href: "mailto:qssindia4@gmail.com",
    icon: Mail,
  },
  {
    title: "Head Office",
    value: "Hathras, Uttar Pradesh",
    subtext: "2/58-59, Avas Vikas Colony",
    href: "#office-hathras",
    icon: MapPin,
  },
];

const locations = [
  {
    id: "office-hathras",
    city: "Hathras",
    type: "Head Office",
    address:
      "2/58-59, Avas Vikas Colony, Near Water Tank, Hathras, Uttar Pradesh - 204101",
  },
  {
    id: "office-delhi",
    city: "Delhi / NCR",
    type: "Delhi / NCR Office",
    address:
      "Spacelance, A-19, Ground Floor, FIEE Complex, Okhla Industrial Area Phase - 2, New Delhi, India - 110020",
  },
  {
    id: "office-lucknow",
    city: "Lucknow",
    type: "Lucknow Office",
    address:
      "Shop No. 5, Krishna Nagar, Kanpur Road, Lucknow, Uttar Pradesh",
  },
  {
    id: "office-uttarakhand",
    city: "Uttarakhand",
    type: "Uttarakhand / UK Office",
    address:
      "Quick Security Services India, Parashar Bhawan, Nagla Chauraha, Near Maal Godaam, Railway Station, Kichha, Udham Singh Nagar, Uttarakhand - 263148",
  },
  {
    city: "Aligarh",
    type: "Branch Presence",
  },
  {
    city: "Mathura",
    type: "Branch Presence",
  },
  {
    city: "Meerut",
    type: "Branch Presence",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <PageHero
        eyebrow="Get In Touch"
        title="Let’s Discuss Your Workforce Requirement"
        subtitle="Connect with QSS India for professional security, manpower outsourcing, housekeeping, hospitality and operational support solutions."
        crumb="Contact"
        path="/contact"
      />

      {/* =====================================================
          QUICK CONTACT CARDS
      ====================================================== */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {contactOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      group
                      rounded-[22px]
                      border border-blue-100
                      bg-white
                      p-5
                      shadow-[0_14px_45px_rgba(15,49,105,0.08)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-[0_20px_55px_rgba(30,64,175,0.12)]
                    "
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className="
                          flex h-11 w-11
                          items-center justify-center
                          rounded-xl
                          bg-blue-50
                          text-brand-blue
                          transition-all duration-300
                          group-hover:bg-brand-blue
                          group-hover:text-white
                        "
                      >
                        <Icon size={19} />
                      </div>

                      <ArrowRight
                        size={17}
                        className="text-blue-200 transition-all group-hover:translate-x-1 group-hover:text-brand-blue"
                      />
                    </div>

                    <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-ink-400">
                      {item.title}
                    </div>

                    <div className="break-all font-semibold text-navy-900">
                      {item.value}
                    </div>

                    <div className="mt-2 text-xs leading-5 text-ink-500">
                      {item.subtext}
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM COMPONENT
      ====================================================== */}
      <Contact />

      {/* =====================================================
          OFFICE PRESENCE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f7faff] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3] grid-bg-light"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-blue-100/60 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container-px relative z-10">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">
                Our Presence
              </div>

              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                Reach QSS India
                <span className="block text-gradient-blue">
                  Across Key Locations
                </span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-7 text-ink-500 md:text-lg">
                Our main office is located in Hathras, with branch presence
                listed across important North India locations.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locations.map((location, index) => (
              <Reveal
                key={location.city}
                delay={index * 0.05}
              >
                <div
                  className="
                    group
                    h-full
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-5
                    shadow-[0_6px_25px_rgba(15,49,105,0.04)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-[0_16px_40px_rgba(30,64,175,0.10)]
                  "
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="
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
                      <MapPin size={19} />
                    </div>

                    {index === 0 && (
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-blue">
                        Head Office
                      </span>
                    )}
                  </div>

                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {location.type}
                  </div>

                  <div className="text-lg font-bold text-navy-900">
                    {location.city}
                  </div>

                  {location.address && (
                    <p className="mt-3 text-xs leading-5 text-ink-500">
                      {location.address}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE ASSURANCE
      ====================================================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-px">
          <Reveal>
            <div
              className="
                relative overflow-hidden
                rounded-[30px]
                bg-gradient-to-br
                from-[#123a86]
                via-[#1e40af]
                to-[#2563eb]
                px-6 py-9
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

              <div
                className="absolute -right-6 -top-6 h-40 w-40 rounded-full border border-white/10"
                aria-hidden="true"
              />

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div className="max-w-3xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                    <ShieldCheck size={22} />
                  </div>

                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                    Need a Custom Proposal?
                  </div>

                  <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                    Tell Us Your Site Requirement
                  </h3>

                  <p className="max-w-2xl leading-7 text-blue-100">
                    Share your required service, manpower category, location,
                    shift structure and approximate personnel requirement.
                    Our team can review the requirement and coordinate the next
                    steps with you.
                  </p>
                </div>

                <a
                  href="tel:+918218451307"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl
                    bg-white
                    px-6 py-4
                    text-sm font-bold
                    text-brand-blue
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-50
                  "
                >
                  <Phone size={17} />
                  Speak With Our Team
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}