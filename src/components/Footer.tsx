import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { company, contact, servicesOverview } from "@/data/content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Security", href: "/security" },
  { label: "Manpower", href: "/manpower" },
  { label: "Technology (OMS)", href: "/technology" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 relative overflow-hidden" aria-label="Site footer">
      {/* Subtle pattern */}
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
          {/* Col 1 — Brand */}
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
              {company.fullName} — {company.established.toLowerCase()}.
              Professional workforce solutions across security, housekeeping,
              hospitality and manpower outsourcing.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href={`tel:+91${contact.phones[0]}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-blue-300 text-sm transition-colors"
              >
                <Phone size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                +91 {contact.phones[0]}
              </a>
              <a
                href={`tel:+91${contact.phones[1]}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-blue-300 text-sm transition-colors"
              >
                <Phone size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                +91 {contact.phones[1]}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-blue-300 text-sm transition-colors"
              >
                <Mail size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{contact.address}</span>
              </div>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {servicesOverview.slice(0, 7).map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="flex items-center gap-1.5 text-white/45 hover:text-blue-300 text-sm transition-colors"
                  >
                    <ChevronRight size={12} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                    {s}
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
                    className="flex items-center gap-1.5 text-white/45 hover:text-blue-300 text-sm transition-colors"
                  >
                    <ChevronRight size={12} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Branch Locations */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-5">
              Branch Locations
            </h4>
            <p className="text-white/45 text-sm mb-4">
              Headquartered in Hathras, Uttar Pradesh — with branch offices in:
            </p>
            <div className="flex flex-wrap gap-2">
              {contact.branches.map((b) => (
                <span
                  key={b}
                  className="text-[11px] text-blue-300 border border-blue-400/20 bg-blue-400/5 rounded-full px-3 py-1 font-medium"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-3">
                PSARA Licensed
              </h4>
              <p className="text-white/40 text-xs leading-relaxed">
                PSA/L/74/UP/2022/SEP/3/797<br />
                Fully registered under PSARA and all applicable labour laws.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/30">
          <p>© {year} {company.fullName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white/60 transition-colors">
              About Us
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
