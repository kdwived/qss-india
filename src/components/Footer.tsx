import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import { company, contact } from "@/data/content";

const serviceLinks = [
  { label: "Government Outsourcing", href: "/services/government-outsourcing" },
  { label: "Security Services", href: "/services/security-services" },
  { label: "Hospitality Staffing", href: "/services/hospitality" },
  { label: "Corporate Housekeeping", href: "/services/housekeeping" },
  { label: "Manpower Outsourcing", href: "/services/manpower-outsourcing" },
  { label: "Event Security & Bouncers", href: "/services/event-security" },
  { label: "Office Administration", href: "/services/office-administration" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About QSS India", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Security Divisions", href: "/security" },
  { label: "Manpower Solutions", href: "/manpower" },
  { label: "Technology (OMS)", href: "/technology" },
  { label: "Our Clients", href: "/clients" },
  { label: "Operational Gallery", href: "/gallery" },
  { label: "Careers & Hiring", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 relative overflow-hidden" aria-label="Site footer">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container-px relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 — Brand & Direct Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <Image
                src="/images/logo/qss-logo.png"
                alt="QSS India logo"
                width={48}
                height={44}
                className="object-contain"
              />
              <div>
                <span className="block font-display font-bold text-white text-lg uppercase heading-display">
                  QSS INDIA
                </span>
                <span className="text-[10px] text-blue-300 tracking-[0.15em] uppercase">
                  Quick Security Services India
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {company.fullName} — trusted excellence since 1999.
              Professional workforce solutions across security, housekeeping,
              hospitality and skilled manpower outsourcing.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5">
              <a
                href={`tel:+91${contact.phone}`}
                className="flex items-center gap-2.5 text-white/60 hover:text-blue-300 text-sm transition-colors"
              >
                <Phone size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span>Call: +91 {contact.phone}</span>
              </a>

              <a
                href={`https://wa.me/91${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/60 hover:text-emerald-400 text-sm transition-colors"
              >
                <MessageCircle size={14} className="text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span>WhatsApp: +91 {contact.whatsapp}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-white/60 hover:text-blue-300 text-sm transition-colors"
              >
                <Mail size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span>{contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-white/50 text-xs leading-relaxed pt-1">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{contact.address}</span>
              </div>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-1.5 text-white/50 hover:text-blue-300 text-sm transition-colors"
                  >
                    <ChevronRight size={12} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-white/50 hover:text-blue-300 text-sm transition-colors"
                  >
                    <ChevronRight size={12} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Locations & Compliance */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Locations &amp; Service Areas
            </h4>
            <div className="space-y-2 mb-6 text-sm">
              <Link
                href="/locations/uttar-pradesh/gautam-buddha-nagar"
                className="block text-white/60 hover:text-blue-300 transition-colors"
              >
                • Delhi / NCR (Okhla Phase-2)
              </Link>
              <Link
                href="/locations/uttar-pradesh/lucknow"
                className="block text-white/60 hover:text-blue-300 transition-colors"
              >
                • Lucknow (Krishna Nagar)
              </Link>
              <Link
                href="/contact"
                className="block text-white/60 hover:text-blue-300 transition-colors"
              >
                • Uttarakhand (Kichha, Udham Singh Nagar)
              </Link>
              <Link
                href="/locations/uttar-pradesh/hathras"
                className="block text-white/60 hover:text-blue-300 transition-colors"
              >
                • Hathras (Head Office)
              </Link>
            </div>

            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/30 bg-blue-500/10 px-3.5 py-2 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 hover:text-white transition-all mb-6"
            >
              <span>View All 75 UP Districts</span>
              <ChevronRight size={13} />
            </Link>

            <div>
              <h5 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1.5">
                PSARA Licensed &amp; GST Registered
              </h5>
              <p className="text-white/40 text-[11px] leading-relaxed">
                PSA/L/74/UP/2022/SEP/3/797<br />
                GST: 09AAAFQ1712F1ZN (UP) • 05AAAFQ1712F1ZV (UK)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/30">
          <p>© {year} {company.fullName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="hover:text-white/60 transition-colors">
              About Us
            </Link>
            <Link href="/locations" className="hover:text-white/60 transition-colors">
              Service Areas
            </Link>
            <Link href="/contact" className="hover:text-white/60 transition-colors">
              Contact
            </Link>
            <Link href="/career" className="hover:text-white/60 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
