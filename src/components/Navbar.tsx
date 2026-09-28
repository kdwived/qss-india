"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  Shield,
  Users,
  Building2,
  Home,
  Briefcase,
  GraduationCap,
  Image as ImageIcon,
  Mail,
  Sparkles,
} from "lucide-react";

import { contact } from "@/data/content";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <Home size={15} />,
  },
  {
    label: "About Us",
    href: "/about",
    icon: <Building2 size={15} />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <Briefcase size={15} />,
    children: [
      {
        label: "Govt. Outsourcing",
        href: "/services/government-outsourcing",
      },
      {
        label: "Security Services",
        href: "/services/security-services",
      },
      {
        label: "Hospitality Services",
        href: "/services/hospitality",
      },
      {
        label: "Corporate Housekeeping",
        href: "/services/housekeeping",
      },
      {
        label: "Skilled Manpower",
        href: "/services/manpower-outsourcing",
      },
      {
        label: "Event Security",
        href: "/services/event-security",
      },
      {
        label: "Office Administration",
        href: "/services/office-administration",
      },
    ],
  },
  {
    label: "Security",
    href: "/security",
    icon: <Shield size={15} />,
    children: [
      {
        label: "Security Guards",
        href: "/security#guards",
      },
      {
        label: "Security Supervisors",
        href: "/security#supervisors",
      },
      {
        label: "Bouncers / Personnel",
        href: "/security#bouncers",
      },
      {
        label: "Event Security",
        href: "/security#event",
      },
      {
        label: "Residential Security",
        href: "/security#residential",
      },
      {
        label: "Commercial Security",
        href: "/security#commercial",
      },
      {
        label: "Surveillance & Monitoring",
        href: "/security#surveillance",
      },
      {
        label: "Emergency Response",
        href: "/security#emergency",
      },
    ],
  },
  {
    label: "Manpower",
    href: "/manpower",
    icon: <Users size={15} />,
  },
  {
    label: "Technology",
    href: "/technology",
    icon: <Sparkles size={15} />,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: <Building2 size={15} />,
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: <ImageIcon size={15} />,
  },
  {
    label: "Career",
    href: "/career",
    icon: <GraduationCap size={15} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Mail size={15} />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] =
    useState<string | null>(null);

  const pathname = usePathname();
  const { openModal } = useQuoteModal();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isGroupActive = (item: NavItem) =>
    isActive(item.href) ||
    (item.children?.some((child) =>
      pathname.startsWith(child.href)
    ) ??
      false);

  return (
    <header
      ref={headerRef}
      className={`
        fixed left-0 right-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 shadow-[0_8px_30px_rgba(15,49,105,0.08)] backdrop-blur-xl"
            : "bg-white"
        }
      `}
    >
      {/* ======================================================
          TOP BAR
      ====================================================== */}
      <div className="hidden lg:block border-b border-blue-100 bg-[#123d94]">
        <div className="container-px flex h-8 items-center justify-between">

          <div className="flex items-center gap-2 text-[11px] font-medium text-blue-100">
            <Shield size={12} />
            <span>
              Professional Security & Manpower Services
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] text-white">

            <a
              href={`tel:+91${contact.phones[0]}`}
              className="flex items-center gap-1.5 transition-colors hover:text-blue-200"
              onClick={() =>
                trackEvent("phone_click", {
                  location: "topbar",
                })
              }
            >
              <Phone size={12} />
              +91 {contact.phones[0]}
            </a>

            <span className="h-3 w-px bg-white/25" />

            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-blue-200"
            >
              {contact.email}
            </a>

          </div>
        </div>
      </div>

      {/* ======================================================
          MAIN NAVBAR
      ====================================================== */}
      <div className="border-b border-blue-100/80">
        <div className="container-px flex h-[76px] items-center justify-between md:h-[84px]">

          {/* LOGO + COMPANY NAME */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3.5"
          >
            <div className="relative flex h-[58px] w-[62px] flex-shrink-0 items-center justify-center">
              <Image
                src="/images/logo/qss-logo.png"
                alt="QSS India — Quick Security Services India"
                width={62}
                height={58}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                priority
              />
            </div>

            <div className="min-w-0 leading-tight">
              <span className="block whitespace-nowrap font-display text-lg font-bold uppercase tracking-[0.04em] text-brand-blue md:text-xl">
                QSS INDIA
              </span>

              <span className="hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.13em] text-ink-500 sm:block lg:text-[11px]">
                Quick Security Services India
              </span>
            </div>
          </Link>

          {/* ==================================================
              DESKTOP NAV
          ================================================== */}
          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="group/nav relative"
                  onMouseEnter={() =>
                    setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                  onFocus={() =>
                    setOpenDropdown(item.label)
                  }
                  onBlur={(event) => {
                    if (
                      !event.currentTarget.contains(
                        event.relatedTarget as Node
                      )
                    ) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`
                      relative
                      flex items-center gap-1.5
                      rounded-lg
                      px-2.5 py-2.5
                      text-[13px] font-semibold
                      transition-all duration-200
                      ${
                        isGroupActive(item)
                          ? "bg-blue-50 text-brand-blue"
                          : "text-ink-700 hover:bg-blue-50 hover:text-brand-blue"
                      }
                    `}
                    aria-haspopup="true"
                    aria-expanded={
                      openDropdown === item.label
                    }
                  >
                    {item.label}

                    <ChevronDown
                      size={13}
                      className={`
                        transition-transform duration-200
                        ${
                          openDropdown === item.label
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                    {/* ACTIVE UNDERLINE */}
                    {isGroupActive(item) && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-brand-blue" />
                    )}
                  </Link>

                  {/* ==========================================
                      DROPDOWN
                  ========================================== */}
                  <div
                    className={`
                      absolute left-0 top-full
                      mt-2
                      w-[300px]
                      overflow-hidden
                      rounded-2xl
                      border border-blue-100
                      bg-white
                      shadow-[0_20px_50px_rgba(15,49,105,0.14)]
                      transition-all duration-200
                      ${
                        openDropdown === item.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-2 opacity-0 pointer-events-none"
                      }
                    `}
                    role="menu"
                  >
                    {/* DROPDOWN HEADER */}
                    <div className="border-b border-blue-100 bg-[#f7faff] px-4 py-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-brand-blue">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100">
                          {item.icon}
                        </span>

                        {item.label}
                      </div>
                    </div>

                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`
                            group/item
                            flex items-center gap-3
                            rounded-xl
                            px-3 py-3
                            text-sm
                            transition-all duration-150
                            ${
                              pathname.startsWith(
                                child.href
                              )
                                ? "bg-blue-50 font-semibold text-brand-blue"
                                : "text-ink-700 hover:bg-blue-50 hover:text-brand-blue"
                            }
                          `}
                        >
                          <span
                            className="
                              flex h-7 w-7
                              items-center justify-center
                              rounded-lg
                              bg-blue-50
                              text-brand-blue
                              transition-all
                              group-hover/item:bg-brand-blue
                              group-hover/item:text-white
                            "
                          >
                            <ChevronRight size={13} />
                          </span>

                          <span>
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* ALL SERVICES LINK */}
                    <div className="border-t border-blue-100 bg-[#fbfdff] p-2">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-brand-blue transition-colors hover:bg-blue-50"
                      >
                        View all {item.label}

                        <ChevronRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    rounded-lg
                    px-2.5 py-2.5
                    text-[13px] font-semibold
                    transition-all duration-200
                    ${
                      isActive(item.href)
                        ? "bg-blue-50 text-brand-blue"
                        : "text-ink-700 hover:bg-blue-50 hover:text-brand-blue"
                    }
                  `}
                >
                  {item.label}

                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-brand-blue" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* ==================================================
              DESKTOP CTA
          ================================================== */}
          <div className="hidden flex-shrink-0 xl:flex">
            <button
              onClick={() => {
                trackEvent("quote_button_click", {
                  location: "navbar",
                });

                openModal({
                  source: "navbar",
                });
              }}
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-brand-blue
                px-5 py-3
                text-xs font-bold uppercase
                tracking-[0.08em]
                text-white
                shadow-[0_10px_25px_rgba(30,64,175,0.24)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-[0_15px_35px_rgba(30,64,175,0.32)]
              "
              aria-label="Request a quote from QSS India"
            >
              Request a Quote
              <ChevronRight size={14} />
            </button>
          </div>

          {/* ==================================================
              TABLET / MOBILE
          ================================================== */}
          <div className="flex items-center gap-2 xl:hidden">

            <a
              href={`tel:+91${contact.phones[0]}`}
              className="
                hidden h-10 w-10
                items-center justify-center
                rounded-xl
                border border-blue-100
                bg-blue-50
                text-brand-blue
                transition-colors
                hover:bg-brand-blue
                hover:text-white
                sm:flex
              "
              aria-label="Call QSS India"
            >
              <Phone size={17} />
            </a>

            <button
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl
                border border-blue-100
                bg-white
                text-ink-700
                transition-all
                hover:bg-blue-50
                hover:text-brand-blue
              "
              onClick={() => setOpen(!open)}
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
            >
              {open ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================
          MOBILE MENU
      ====================================================== */}
      <div
        id="mobile-nav-menu"
        className={`
          fixed inset-x-0 bottom-0
          top-[77px]
          z-40
          overflow-y-auto
          bg-white
          transition-all duration-300
          md:top-[85px]
          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
        aria-hidden={!open}
      >
        <div className="p-4 pb-8">

          {/* MOBILE BRAND */}
          <div className="mb-5 rounded-2xl bg-[#f7faff] p-4">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Quick Security Services India
            </div>

            <div className="mt-1 text-xs text-ink-500">
              Security • Manpower • Housekeeping • Hospitality
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    className={`
                      flex w-full items-center justify-between
                      rounded-xl
                      px-4 py-3.5
                      text-sm font-semibold
                      transition-colors
                      ${
                        isGroupActive(item)
                          ? "bg-blue-50 text-brand-blue"
                          : "text-ink-700 hover:bg-blue-50"
                      }
                    `}
                    onClick={() =>
                      setMobileOpenDropdown(
                        mobileOpenDropdown === item.label
                          ? null
                          : item.label
                      )
                    }
                    aria-expanded={
                      mobileOpenDropdown === item.label
                    }
                  >
                    <span className="flex items-center gap-3">

                      <span
                        className="
                          flex h-8 w-8
                          items-center justify-center
                          rounded-lg
                          bg-blue-50
                          text-brand-blue
                        "
                      >
                        {item.icon}
                      </span>

                      {item.label}
                    </span>

                    <ChevronDown
                      size={16}
                      className={`
                        text-brand-blue
                        transition-transform duration-200
                        ${
                          mobileOpenDropdown ===
                          item.label
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {mobileOpenDropdown ===
                    item.label && (
                    <div className="ml-5 mt-1 space-y-1 border-l-2 border-blue-100 pl-4">

                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`
                            block rounded-lg
                            px-3 py-2.5
                            text-sm
                            transition-colors
                            ${
                              pathname.startsWith(
                                child.href
                              )
                                ? "bg-blue-50 font-semibold text-brand-blue"
                                : "text-ink-600 hover:bg-blue-50 hover:text-brand-blue"
                            }
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}

                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-brand-blue"
                      >
                        View all
                        <ChevronRight size={12} />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center gap-3
                    rounded-xl
                    px-4 py-3.5
                    text-sm font-semibold
                    transition-colors
                    ${
                      isActive(item.href)
                        ? "bg-blue-50 text-brand-blue"
                        : "text-ink-700 hover:bg-blue-50 hover:text-brand-blue"
                    }
                  `}
                >
                  <span
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-lg
                      bg-blue-50
                      text-brand-blue
                    "
                  >
                    {item.icon}
                  </span>

                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* MOBILE CTA */}
          <div className="mt-6 space-y-3 border-t border-blue-100 pt-5">

            <a
              href={`tel:+91${contact.phones[0]}`}
              className="
                flex w-full
                items-center justify-center gap-2
                rounded-xl
                border-2 border-brand-blue
                px-4 py-3.5
                text-sm font-semibold
                text-brand-blue
              "
            >
              <Phone size={16} />
              +91 {contact.phones[0]}
            </a>

            <button
              onClick={() => {
                setOpen(false);

                trackEvent("quote_button_click", {
                  location: "mobile_menu",
                });

                openModal({
                  source: "mobile_menu",
                });
              }}
              className="btn-primary w-full !rounded-xl"
            >
              Request a Quote
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}