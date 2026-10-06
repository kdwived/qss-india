"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  Building2,
  Calendar,
  Eye,
  AlertTriangle,
  Home,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import Reveal from "./Reveal";
import { contact } from "@/data/content";

type SecuritySectionItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ElementType;
  highlights: string[];
};

const securitySections: SecuritySectionItem[] = [
  {
    id: "guards",
    title: "Security Guards",
    subtitle: "PSARA-Certified Uniformed Manned Guarding",
    description:
      "Our uniformed security guards provide vigilant front-line protection across corporate towers, industrial estates, institutional gates, and residential developments. Each guard is thoroughly police-verified, physically screened, and trained in gate management, visitor access verification, and perimeter patrolling.",
    image: "/images/security/team-lineup-01.jpg",
    icon: ShieldCheck,
    highlights: [
      "Mandatory 40+ hours pre-deployment physical & etiquette training",
      "Valid police verification and biometric identity documentation",
      "Disciplined uniform turnout with standard security gear",
      "Day and night shift patrolling with continuous vigil",
    ],
  },
  {
    id: "supervisors",
    title: "Security Supervisors",
    subtitle: "On-Site Leadership & Guard Force Monitoring",
    description:
      "Site supervisors bridge client management and on-ground guards. They enforce post orders, inspect guard turnout, manage shift handovers, audit visitor and vehicle registers, and conduct routine security drills to ensure strict adherence to safety protocols.",
    image: "/images/security/team-outdoor-01.jpg",
    icon: UserCheck,
    highlights: [
      "Roster management & 100% post-relief coverage",
      "Regular surprise checks and night shift vigilance inspections",
      "Incident logging and digital daily reporting via OMS",
      "Immediate liaison with client administration and local authorities",
    ],
  },
  {
    id: "bouncers",
    title: "Bouncers & Security Personnel",
    subtitle: "VIP Protection & Physical Security Presence",
    description:
      "For venues, clubs, VIP visits, and sensitive physical checkpoints requiring an assertive physical security deterrent, QSS India supplies physically robust, disciplined bouncers trained in de-escalation, conflict resolution, and personal escorting.",
    image: "/images/security/guard-solo-01.jpg",
    icon: ShieldCheck,
    highlights: [
      "Physically fit personnel with formal de-escalation training",
      "Executive dark suit or specialized security uniform options",
      "Close protection and stage barrier management",
      "Coordination with event hosts and law enforcement",
    ],
  },
  {
    id: "event",
    title: "Event Security",
    subtitle: "Crowd Control & Public Gathering Management",
    description:
      "From high-attendance corporate summits and political conventions to cultural exhibitions and private celebrations, our event security teams orchestrate visitor queues, operate metal detector checkpoints, and prevent unauthorized perimeter breaches.",
    image: "/images/security/event-security-01.jpg",
    icon: Calendar,
    highlights: [
      "Custom security blueprints analyzing venue ingress & egress choke points",
      "Hand-held & door-frame metal detector (HHMD/DFMD) operation",
      "Male & female security personnel for dignified guest screening",
      "Rapid emergency evacuation and medical liaison protocols",
    ],
  },
  {
    id: "residential",
    title: "Residential Security",
    subtitle: "Gated Communities, Townships & High-Rises",
    description:
      "Residential societies require a balance of courteous hospitality and uncompromising security. Our residential guards maintain round-the-clock visitor verification, intercom logging, delivery boy authorization, vehicle parking control, and perimeter night patrolling.",
    image: "/images/security/residential-team-01.jpg",
    icon: Home,
    highlights: [
      "Rigorous visitor, cab and delivery tracking protocols",
      "Dedicated gate management and RFID/boom barrier operation",
      "Child safety vigilance and unauthorized vendor prevention",
      "Courteous resident interactions and polite visitor guidance",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Security",
    subtitle: "Corporate Parks, Warehouses & Retail Facilities",
    description:
      "We safeguard commercial offices, IT hubs, manufacturing plants, shopping malls, and logistics warehouses with customized commercial security protocols, including loading dock supervision, employee badge checks, and inventory movement logging.",
    image: "/images/security/team-lineup-02.jpg",
    icon: Building2,
    highlights: [
      "Material inward/outward gate pass verification",
      "Visitor badge issuance & baggage inspection",
      "Asset protection and theft deterrence",
      "24x7 monitoring of sensitive corporate perimeters",
    ],
  },
  {
    id: "surveillance",
    title: "Surveillance & Monitoring",
    subtitle: "CCTV Control Rooms & Electronic Perimeter Oversight",
    description:
      "Combining trained human observation with electronic security systems, our surveillance operators monitor CCTV wall displays, fire alarm panels, intrusion detection sensors, and vehicle ANPR cameras to detect anomalies in real time.",
    image: "/images/gallery/team-group-01.jpg",
    icon: Eye,
    highlights: [
      "Trained operators for continuous 24x7 control room shifts",
      "Proactive spotting of suspicious perimeter activity",
      "Fire alarm and emergency sensor panel verification",
      "Timestamped digital incident logging with video export support",
    ],
  },
  {
    id: "emergency",
    title: "Emergency Response",
    subtitle: "Critical Incident Mitigation & First Response",
    description:
      "In situations involving fire alarms, medical distress, natural disruptions, or security breaches, our personnel are trained to initiate immediate evacuation, activate emergency protocols, administer basic first aid, and direct emergency rescue teams.",
    image: "/images/security/team-outdoor-01.jpg",
    icon: AlertTriangle,
    highlights: [
      "Fire extinguisher operation & building evacuation drills",
      "Basic first-aid response and ambulance coordination",
      "Crowd dispersal and panic mitigation training",
      "Direct communication channel with emergency authorities",
    ],
  },
];

export default function SecurityServices() {
  return (
    <div className="bg-white">
      {/* Overview bar */}
      <section className="bg-[#f7faff] py-12 border-b border-slate-200">
        <div className="container-px">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-label justify-center mb-3">Quick Navigation</span>
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-6">
              Explore Our Security Divisions
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {securitySections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-brand-blue hover:bg-blue-50 hover:text-brand-blue shadow-sm"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 Sections with distinct IDs and scroll-mt */}
      <div className="divide-y divide-slate-100">
        {securitySections.map((sec, idx) => {
          const Icon = sec.icon;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={sec.id}
              id={sec.id}
              className="scroll-mt-32 py-20 md:py-28"
            >
              <div className="container-px">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Text Content */}
                  <Reveal className={isEven ? "" : "lg:col-start-2"}>
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue">
                        <Icon size={16} />
                        {sec.subtitle}
                      </div>

                      <h2 className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl">
                        {sec.title}
                      </h2>

                      <p className="mb-6 text-base leading-8 text-ink-600">
                        {sec.description}
                      </p>

                      <div className="mb-8 space-y-3">
                        {sec.highlights.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue mt-0.5">
                              <CheckCircle2 size={13} />
                            </div>
                            <span className="text-sm font-medium text-ink-700 leading-6">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href={`tel:+91${contact.phone}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700"
                        >
                          <Phone size={16} />
                          Deploy {sec.title}
                        </a>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
                        >
                          Enquire for Site <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </Reveal>

                  {/* Image Card */}
                  <Reveal
                    delay={0.1}
                    className={isEven ? "" : "lg:col-start-1"}
                  >
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_15px_45px_rgba(15,49,105,0.08)]">
                      <Image
                        src={sec.image}
                        alt={`${sec.title} deployed by QSS India`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1">
                          QSS India Guard Force
                        </div>
                        <div className="text-xl font-bold font-display heading-display">
                          {sec.title} Deployment
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
