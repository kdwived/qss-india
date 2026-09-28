"use client";

import Link from "next/link";
import { servicesOverview } from "@/data/content";
import {
  Shield,
  Users,
  Home,
  Building2,
  Briefcase,
  Calendar,
  UserCheck,
  FileText,
  Landmark,
  Coffee,
  ChevronRight,
} from "lucide-react";
import Reveal from "./Reveal";

const serviceIcons: Record<string, React.ReactNode> = {
  "Govt. Outsourcing Services": <Landmark size={22} />,
  "Security Services": <Shield size={22} />,
  "Hospitality Services": <Coffee size={22} />,
  "Corporate & Domestic Housekeeping": <Home size={22} />,
  "Skilled / Semi-Skilled Manpower": <Users size={22} />,
  "Event Security": <Calendar size={22} />,
  "Residential & Commercial Security": <Building2 size={22} />,
  "Office Administration Support": <Briefcase size={22} />,
  "Payroll Management": <FileText size={22} />,
  "Housekeeping Services": <UserCheck size={22} />,
};

const serviceLinks: Record<string, string> = {
  "Govt. Outsourcing Services": "/services/government-outsourcing",
  "Security Services": "/services/security-services",
  "Hospitality Services": "/services/hospitality",
  "Corporate & Domestic Housekeeping": "/services/housekeeping",
  "Skilled / Semi-Skilled Manpower": "/services/manpower-outsourcing",
  "Event Security": "/services/event-security",
  "Residential & Commercial Security": "/services/security-services",
  "Office Administration Support": "/services/office-administration",
  "Payroll Management": "/services/payroll-management",
  "Housekeeping Services": "/services/housekeeping",
};

const serviceDesc: Record<string, string> = {
  "Govt. Outsourcing Services": "Comprehensive manpower solutions for government departments and public sector units across all verticals.",
  "Security Services": "Professional, trained and uniformed security personnel for all types of premises and events.",
  "Hospitality Services": "Front-office, pantry, reception and hospitality staffing for hotels, resorts and corporate setups.",
  "Corporate & Domestic Housekeeping": "Fully managed cleaning, sanitation and facility hygiene services for offices, industries and residences.",
  "Skilled / Semi-Skilled Manpower": "Sourcing, verification and deployment of skilled and semi-skilled workers for diverse industrial and commercial roles.",
  "Event Security": "Crowd management, access control and event safety personnel for functions of all scales.",
  "Residential & Commercial Security": "Round-the-clock security deployment for housing societies, gated communities and commercial buildings.",
  "Office Administration Support": "Trained admin support staff including data entry operators, receptionists and office assistants.",
  "Payroll Management": "End-to-end payroll processing, PF/ESI, payslip generation and bank transfer coordination.",
  "Housekeeping Services": "Dedicated housekeeping teams with supervision, materials management and quality monitoring.",
};

export default function ExploreCards() {
  return (
    <section
      id="services-overview"
      className="bg-section-light py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="container-px">
        {/* Section header */}
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-4">Our Services</div>
          <h2
            id="services-heading"
            className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-navy-900 heading-display mb-4"
          >
            Integrated Workforce & Facility Solutions
          </h2>
          <p className="text-ink-500 text-base leading-relaxed">
            From government outsourcing to security, housekeeping to hospitality — QSS India delivers
            end-to-end manpower solutions tailored to your organization's needs.
          </p>
        </Reveal>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {servicesOverview.map((service, i) => {
            const href = serviceLinks[service] ?? "/services";
            const icon = serviceIcons[service] ?? <Briefcase size={22} />;
            const desc = serviceDesc[service] ?? "";

            return (
              <Reveal key={service} delay={i * 0.06}>
                <Link
                  href={href}
                  className="group card-light p-6 flex flex-col h-full"
                  aria-label={`Learn more about ${service}`}
                >
                  {/* Icon */}
                  <div className="icon-wrapper-blue mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm leading-snug group-hover:text-brand-blue transition-colors">
                    {service}
                  </h3>

                  {/* Description */}
                  <p className="text-ink-500 text-xs leading-relaxed flex-1">{desc}</p>

                  {/* CTA */}
                  <div className="flex items-center gap-1 mt-4 text-brand-blue text-xs font-semibold">
                    Learn More
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View all services CTA */}
        <Reveal className="text-center mt-12">
          <Link href="/services" className="btn-outline">
            View All Services
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
