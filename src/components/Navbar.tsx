"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
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
  MoreHorizontal,
} from "lucide-react";

import { contact } from "@/data/content";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";
import LocationNav from "./LocationNav";

type ChildItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: ChildItem[];
};

/* =========================================================
   MAIN NAVIGATION

   Desktop:
   Home
   About
   Services ▼
   Security ▼
   Manpower
   Technology
   Clients
   More ▼
   Request Quote

   This keeps the navbar clean even on 1366px screens.
========================================================= */

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <Home size={15} />,
  },

  {
    label: "About",
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
    label: "More",
    href: "/gallery",
    icon: <MoreHorizontal size={15} />,
    children: [
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
        label: "Contact Us",
        href: "/contact",
        icon: <Mail size={15} />,
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  const [mobileDropdown, setMobileDropdown] =
    useState<string | null>(null);

  const pathname = usePathname();

  const { openModal } = useQuoteModal();

  const headerRef = useRef<HTMLElement>(null);

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================================
     CLOSE MENU AFTER ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setOpenDropdown(null);
  }, [pathname]);

  /* =========================================================
     OUTSIDE CLICK + ESC
  ========================================================= */

  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutside = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutside
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [mobileOpen]);

  /* =========================================================
     BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     ACTIVE STATES
  ========================================================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href.split("#")[0]);
  };

  const isGroupActive = (item: NavItem) => {
    if (item.label === "More") {
      return (
        pathname.startsWith("/gallery") ||
        pathname.startsWith("/career") ||
        pathname.startsWith("/contact")
      );
    }

    return (
      isActive(item.href) ||
      (item.children?.some((child) =>
        isActive(child.href)
      ) ??
        false)
    );
  };

  return (
    <header
      ref={headerRef}
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 shadow-[0_8px_35px_rgba(15,49,105,0.08)] backdrop-blur-xl"
            : "bg-white"
        }
      `}
    >
     {/* =====================================================
    TOP TRUST INFINITE STRIP
====================================================== */}

<div className="hidden lg:block overflow-hidden bg-brand-blue border-b border-white/10">
  <div className="relative h-[34px]">

    {/* Left fade */}
    <div
      className="
        pointer-events-none
        absolute left-0 top-0 bottom-0
        z-20
        w-16
        bg-gradient-to-r
        from-brand-blue
        to-transparent
      "
    />

    {/* Right fade */}
    <div
      className="
        pointer-events-none
        absolute right-0 top-0 bottom-0
        z-20
        w-16
        bg-gradient-to-l
        from-brand-blue
        to-transparent
      "
    />

    {/* Infinite Track */}
    <div
      className="
        qss-top-ticker
        flex
        h-full
        w-max
        items-center
        whitespace-nowrap
      "
    >
      {[
        {
          icon: <Sparkles size={11} />,
          value: "25+",
          label: "Years Experience",
        },
        {
          icon: <Users size={11} />,
          value: "2200+",
          label: "Workforce",
        },
        {
          icon: <Shield size={11} />,
          value: "500+",
          label: "Security Personnel",
        },
        {
          icon: <Phone size={11} />,
          value: `+91 ${contact.phone}`,
          label: "Call QSS India",
        },
        {
          icon: <MessageCircle size={11} />,
          value: `+91 ${contact.whatsapp}`,
          label: "WhatsApp",
        },
        {
          icon: <Mail size={11} />,
          value: contact.email,
          label: "Email",
        },

        /* repeat once for seamless loop */
        {
          icon: <Sparkles size={11} />,
          value: "25+",
          label: "Years Experience",
        },
        {
          icon: <Users size={11} />,
          value: "2200+",
          label: "Workforce",
        },
        {
          icon: <Shield size={11} />,
          value: "500+",
          label: "Security Personnel",
        },
        {
          icon: <Phone size={11} />,
          value: `+91 ${contact.phone}`,
          label: "Call QSS India",
        },
        {
          icon: <MessageCircle size={11} />,
          value: `+91 ${contact.whatsapp}`,
          label: "WhatsApp",
        },
        {
          icon: <Mail size={11} />,
          value: contact.email,
          label: "Email",
        },
      ].map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className="
            flex
            h-full
            items-center
            gap-2
            px-5
            text-[10px]
            font-medium
            text-white
            xl:px-7
          "
        >
          <span
            className="
              flex
              h-5 w-5
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-blue-100
            "
          >
            {item.icon}
          </span>

          <span className="font-bold text-white">
            {item.value}
          </span>

          <span className="text-blue-100">
            {item.label}
          </span>

          <span className="ml-4 h-3 w-px bg-white/20" />
        </div>
      ))}
    </div>
  </div>
</div>

{/* =====================================================
    LOCATION / SERVICE AREA NAVIGATION (BELOW BLUE TICKER)
====================================================== */}
<LocationNav />

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div
        className="
          border-b border-slate-200/80
          bg-white
        "
      >
        <div
          className="
            container-px
            flex h-[70px]
            items-center
            justify-between
            gap-5
            lg:h-[74px]
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            href="/"
            className="
              group
              flex min-w-0
              flex-shrink-0
              items-center
              gap-3
            "
          >
            <div
              className="
                relative
                flex h-[50px] w-[54px]
                items-center justify-center
                flex-shrink-0
              "
            >
              <Image
                src="/images/logo/qss-logo.png"
                alt="QSS India — Quick Security Services India"
                width={54}
                height={50}
                priority
                className="
                  h-full w-full
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-[1.04]
                "
              />
            </div>

            <div className="min-w-0 leading-none">
              <span
                className="
                  block
                  whitespace-nowrap
                  font-display
                  text-[17px]
                  font-bold
                  uppercase
                  tracking-[0.05em]
                  text-brand-blue
                  md:text-[19px]
                "
              >
                QSS INDIA
              </span>

              <span
                className="
                  mt-1
                  hidden
                  whitespace-nowrap
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-slate-500
                  sm:block
                "
              >
                Quick Security Services India
              </span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden
              flex-1
              items-center
              justify-center
              gap-0
              xl:flex
            "
            aria-label="Main navigation"
          >
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
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
                  {/* NAV ITEM */}

                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={
                      openDropdown === item.label
                    }
                    className={`
                      relative
                      flex h-[74px]
                      items-center gap-1.5
                      px-[11px]
                      text-[13px]
                      font-medium
                      whitespace-nowrap
                      transition-colors duration-200

                      ${
                        isGroupActive(item)
                          ? "text-brand-blue"
                          : "text-slate-700 hover:text-brand-blue"
                      }
                    `}
                  >
                    {item.label}

                    <ChevronDown
                      size={13}
                      strokeWidth={2}
                      className={`
                        transition-transform duration-200
                        ${
                          openDropdown === item.label
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />

                    {/* ACTIVE LINE */}

                    {isGroupActive(item) && (
                      <span
                        className="
                          absolute
                          bottom-0
                          left-[11px]
                          right-[11px]
                          h-[2px]
                          rounded-full
                          bg-brand-blue
                        "
                      />
                    )}
                  </Link>

                  {/* =========================================
                      DESKTOP DROPDOWN
                  ========================================= */}

                  <div
                    className={`
                      absolute
                      left-1/2 top-full
                      w-[286px]
                      -translate-x-1/2
                      overflow-hidden
                      rounded-2xl
                      border border-slate-200
                      bg-white
                      p-2
                      shadow-[0_22px_60px_rgba(15,49,105,0.14)]
                      transition-all duration-200

                      ${
                        openDropdown === item.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-2 opacity-0 pointer-events-none"
                      }
                    `}
                  >
                    {/* HEADER */}

                    <div
                      className="
                        mb-1
                        flex items-center gap-3
                        rounded-xl
                        bg-[#f7faff]
                        px-3 py-3
                      "
                    >
                      <div
                        className="
                          flex h-8 w-8
                          items-center justify-center
                          rounded-lg
                          bg-blue-100
                          text-brand-blue
                        "
                      >
                        {item.icon}
                      </div>

                      <div>
                        <div
                          className="
                            text-xs
                            font-bold
                            text-navy-900
                          "
                        >
                          {item.label}
                        </div>

                        <div
                          className="
                            mt-0.5
                            text-[10px]
                            text-slate-400
                          "
                        >
                          Explore QSS India
                        </div>
                      </div>
                    </div>

                    {/* LINKS */}

                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`
                          group
                          flex items-center
                          justify-between
                          rounded-xl
                          px-3 py-2.5
                          text-[13px]
                          transition-colors duration-150

                          ${
                            isActive(child.href)
                              ? "bg-blue-50 font-semibold text-brand-blue"
                              : "text-slate-600 hover:bg-blue-50 hover:text-brand-blue"
                          }
                        `}
                      >
                        <span className="flex items-center gap-2.5">
                          {child.icon ? (
                            <span className="text-brand-blue">
                              {child.icon}
                            </span>
                          ) : (
                            <span
                              className="
                                h-1.5 w-1.5
                                rounded-full
                                bg-blue-300
                                transition-colors
                                group-hover:bg-brand-blue
                              "
                            />
                          )}

                          {child.label}
                        </span>

                        <ChevronRight
                          size={13}
                          className="
                            opacity-0
                            transition-all
                            group-hover:translate-x-0.5
                            group-hover:opacity-100
                          "
                        />
                      </Link>
                    ))}

                    {/* VIEW ALL */}

                    {item.label !== "More" && (
                      <div
                        className="
                          mt-1
                          border-t
                          border-slate-100
                          pt-1
                        "
                      >
                        <Link
                          href={item.href}
                          className="
                            flex items-center
                            justify-between
                            rounded-xl
                            px-3 py-2.5
                            text-xs
                            font-semibold
                            text-brand-blue
                            hover:bg-blue-50
                          "
                        >
                          View All {item.label}

                          <ChevronRight size={13} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    flex h-[74px]
                    items-center
                    px-[11px]
                    text-[13px]
                    font-medium
                    whitespace-nowrap
                    transition-colors duration-200

                    ${
                      isActive(item.href)
                        ? "text-brand-blue"
                        : "text-slate-700 hover:text-brand-blue"
                    }
                  `}
                >
                  {item.label}

                  {isActive(item.href) && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-[11px]
                        right-[11px]
                        h-[2px]
                        rounded-full
                        bg-brand-blue
                      "
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div
            className="
              hidden
              flex-shrink-0
              items-center
              xl:flex
            "
          >
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
                inline-flex
                items-center
                justify-center
                gap-1.5
                whitespace-nowrap
                rounded-lg
                bg-brand-blue
                px-4 py-2.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.06em]
                text-white
                shadow-[0_7px_20px_rgba(30,64,175,0.20)]
                transition-all duration-300
                hover:-translate-y-[1px]
                hover:bg-blue-700
                hover:shadow-[0_10px_25px_rgba(30,64,175,0.28)]
              "
            >
              Request Quote

              <ChevronRight size={13} />
            </button>
          </div>

          {/* =================================================
              MOBILE / TABLET
          ================================================= */}

          <div
            className="
              flex items-center gap-2
              xl:hidden
            "
          >
            <a
              href={`tel:+91${contact.phone}`}
              aria-label="Call QSS India"
              className="
                hidden
                h-10 w-10
                items-center justify-center
                rounded-xl
                border border-blue-100
                bg-blue-50
                text-brand-blue
                transition-all
                hover:bg-brand-blue
                hover:text-white
                sm:flex
              "
            >
              <Phone size={17} />
            </a>

            <button
              type="button"
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-slate-200
                bg-white
                text-slate-700
                transition-all
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-brand-blue
              "
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`
          fixed inset-x-0 bottom-0
          top-[71px]
          z-40
          overflow-y-auto
          bg-white
          transition-all duration-300

          lg:top-[104px]

          ${
            mobileOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className="
            mx-auto
            max-w-2xl
            p-4
            pb-10
          "
        >
          {/* MOBILE INTRO */}

          <div
            className="
              mb-4
              rounded-2xl
              border border-blue-100
              bg-[#f8fbff]
              p-4
            "
          >
            <div
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-brand-blue
              "
            >
              QSS India
            </div>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-slate-500
              "
            >
              Professional Security • Manpower •
              Housekeeping • Hospitality
            </p>
          </div>

          {/* MOBILE LINKS */}

          <div className="space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label
                          ? null
                          : item.label
                      )
                    }
                    className={`
                      flex w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-3 py-3
                      text-sm
                      font-semibold
                      transition-colors

                      ${
                        isGroupActive(item)
                          ? "bg-blue-50 text-brand-blue"
                          : "text-slate-700 hover:bg-blue-50"
                      }
                    `}
                  >
                    <span
                      className="
                        flex items-center
                        gap-3
                      "
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
                    </span>

                    <ChevronDown
                      size={15}
                      className={`
                        text-brand-blue
                        transition-transform duration-200

                        ${
                          mobileDropdown === item.label
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {mobileDropdown === item.label && (
                    <div
                      className="
                        ml-4
                        mt-1
                        space-y-0.5
                        border-l
                        border-blue-200
                        pl-4
                      "
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className={`
                            flex items-center
                            gap-2.5
                            rounded-lg
                            px-3 py-2.5
                            text-[13px]
                            transition-colors

                            ${
                              isActive(child.href)
                                ? "bg-blue-50 font-semibold text-brand-blue"
                                : "text-slate-600 hover:bg-blue-50 hover:text-brand-blue"
                            }
                          `}
                        >
                          {child.icon ? (
                            <span className="text-brand-blue">
                              {child.icon}
                            </span>
                          ) : (
                            <span
                              className="
                                h-1.5 w-1.5
                                rounded-full
                                bg-blue-300
                              "
                            />
                          )}

                          {child.label}
                        </Link>
                      ))}

                      {item.label !== "More" && (
                        <Link
                          href={item.href}
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className="
                            flex items-center
                            gap-1.5
                            px-3 py-2.5
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.08em]
                            text-brand-blue
                          "
                        >
                          View All

                          <ChevronRight size={12} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className={`
                    flex items-center
                    gap-3
                    rounded-xl
                    px-3 py-3
                    text-sm
                    font-semibold
                    transition-colors

                    ${
                      isActive(item.href)
                        ? "bg-blue-50 text-brand-blue"
                        : "text-slate-700 hover:bg-blue-50 hover:text-brand-blue"
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
            {/* Mobile Service Areas link */}
            <Link
              href="/locations"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-xl border border-blue-100 bg-[#f8fbff] px-3.5 py-3 text-sm font-bold text-brand-blue transition-colors hover:bg-blue-100/60"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-brand-blue">
                  <MapPin size={16} />
                </span>
                Service Areas (All 75 UP Districts)
              </span>
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* =================================================
              MOBILE CONTACT / CTA
          ================================================= */}

          <div
            className="
              mt-5
              grid gap-2.5
              border-t
              border-slate-200
              pt-5
            "
          >
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:+91${contact.phone}`}
                className="
                  flex items-center
                  justify-center gap-2
                  rounded-xl
                  border border-brand-blue
                  bg-white
                  px-3 py-3
                  text-xs
                  font-bold
                  text-brand-blue
                  transition-colors
                  hover:bg-blue-50
                "
              >
                <Phone size={14} />
                Call Now
              </a>

              <a
                href={`https://wa.me/91${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center
                  justify-center gap-2
                  rounded-xl
                  border border-emerald-500
                  bg-emerald-50
                  px-3 py-3
                  text-xs
                  font-bold
                  text-emerald-700
                  transition-colors
                  hover:bg-emerald-100
                "
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);

                trackEvent("quote_button_click", {
                  location: "mobile_menu",
                });

                openModal({
                  source: "mobile_menu",
                });
              }}
              className="
                flex items-center
                justify-center gap-2
                rounded-xl
                bg-brand-blue
                px-4 py-3
                text-sm
                font-bold
                text-white
                shadow-[0_4px_15px_rgba(30,64,175,0.25)]
                transition-colors
                hover:bg-blue-700
              "
            >
              Request a Quote
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}