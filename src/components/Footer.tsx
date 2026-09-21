import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, contact, nav, servicesOverview } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-navy-950 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" />
      <div className="container-px relative">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo/qss-logo.png"
                alt="QSS India logo"
                width={40}
                height={36}
                className="object-contain"
              />
              <span className="heading-display font-semibold text-white text-lg">
                QSS INDIA
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              {company.fullName} — {company.established.toLowerCase()}. Professional
              workforce solutions across security, housekeeping, hospitality and
              manpower outsourcing.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesOverview.slice(0, 6).map((s) => (
                <li key={s} className="text-white/45 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/45 hover:text-brand-skyblue text-sm transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Contact
            </h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5 text-white/45 text-sm">
                <MapPin size={15} className="shrink-0 mt-0.5 text-brand-skyblue" />
                {contact.address}
              </div>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 text-white/45 hover:text-brand-skyblue text-sm transition-colors">
                <Mail size={15} className="shrink-0 text-brand-skyblue" />
                {contact.email}
              </a>
              <a href={`tel:+91${contact.phones[0]}`} className="flex items-center gap-2.5 text-white/45 hover:text-brand-skyblue text-sm transition-colors">
                <Phone size={15} className="shrink-0 text-brand-skyblue" />
                +91 {contact.phones[0]}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {contact.branches.map((b) => (
                <span key={b} className="text-[11px] text-white/35 border border-white/10 rounded-full px-2.5 py-1">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/35">
          <p>© {year} {company.fullName}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white/60 cursor-default">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-default">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
