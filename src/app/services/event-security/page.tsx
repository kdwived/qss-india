import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  ShieldCheck,
  UserCheck,
  Users,
  AlertCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Event Security, Bouncers & Crowd Control | QSS India",
  description:
    "Professional event security personnel, bouncers, access control and VIP crowd management for corporate conferences, exhibitions, weddings and public gatherings across North India.",
  alternates: {
    canonical: "/services/event-security",
  },
};

const eventCapabilities = [
  {
    title: "Trained Event Bouncers & Security Personnel",
    desc: "Physically imposing, disciplined and well-trained personnel for stage security, VIP escort, entry gates and greenroom cordons.",
    icon: UserCheck,
  },
  {
    title: "Crowd Control & Queue Management",
    desc: "Strategic entry and exit bottleneck management, queue barrier organization, and smooth evacuation pathway maintenance.",
    icon: Users,
  },
  {
    title: "Access Verification & Metal Detectors",
    desc: "Baggage screening, hand-held metal detector (HHMD) operation, badge verification, and unauthorized entry prevention.",
    icon: ShieldCheck,
  },
  {
    title: "Emergency & Incident Mitigation",
    desc: "Coordination with local law enforcement, medical first-responder integration, and proactive defusing of unruly situations.",
    icon: AlertCircle,
  },
];

export default function EventSecurityServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Specialized Protection"
        title="Event Security &amp; Bouncer Personnel"
        subtitle="Comprehensive crowd management, VIP protection, access verification and disciplined security deployment for gatherings of any scale."
        crumb="Event Security"
        path="/services/event-security"
      />

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div>
                <div className="section-label mb-4">Event Safety</div>
                <h2 className="heading-display mb-6 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl">
                  Discreet Protection.
                  <span className="block text-gradient-blue">
                    Flawless Event Flow.
                  </span>
                </h2>
                <p className="mb-5 text-base leading-8 text-ink-600 md:text-lg">
                  High-profile corporate conventions, exhibitions, entertainment functions, weddings, and public gatherings demand professional security teams that maintain complete vigilance while remaining courteous and approachable to guests.
                </p>
                <p className="mb-8 text-base leading-8 text-ink-500">
                  QSS India drafts custom security deployment blueprints for each event—analyzing entry-exit choke points, parking zones, VIP enclosures, and perimeter security to guarantee peace of mind for event organizers and attendees alike.
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
                    Hire Event Security <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-blue-100 bg-[#f8fbff] p-8 shadow-sm md:p-10">
                <h3 className="text-xl font-bold text-navy-900 mb-5">
                  Event Readiness Framework
                </h3>
                <ul className="space-y-4">
                  {[
                    "Pre-event venue walkthrough & threat assessment",
                    "Dedicated Event Commander for real-time site leadership",
                    "Uniformed bouncers or black-suit executive security options",
                    "Male and female security personnel for gender-sensitive screening",
                    "Rapid coordination with local police & medical authorities",
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

      {/* Capabilities */}
      <section className="bg-[#f7faff] py-20 md:py-28">
        <div className="container-px">
          <Reveal>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="section-label mb-4 justify-center">Specialized Event Services</div>
              <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Event Security Capabilities
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <Reveal key={cap.title} delay={idx * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs leading-5 text-ink-500">
                      {cap.desc}
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
