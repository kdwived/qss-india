"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { nav, contact } from "@/data/content";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useQuoteModal();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close the mobile menu on outside click/tap, and on Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md border-b border-white/5 py-2.5"
          : "bg-gradient-to-b from-navy-950/70 to-transparent py-5"
      }`}
    >
      <div className="container-px flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo/qss-logo.png"
            alt="QSS India logo"
            width={44}
            height={40}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="leading-tight">
            <span className="block font-display font-semibold tracking-wide text-white text-base md:text-lg">
              QSS INDIA
            </span>
            <span className="hidden md:block text-[10px] tracking-[0.2em] text-brand-skyblue uppercase">
              Professional Workforce Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-brand-skyblue transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:+91${contact.phones[0]}`}
            onClick={() => trackEvent("phone_click", { location: "navbar" })}
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <Phone size={15} className="text-brand-skyblue" />
            +91 {contact.phones[0]}
          </a>
          <button onClick={() => { trackEvent("quote_button_click", { location: "navbar" }); openModal({ source: "navbar" }); }} className="btn-primary !py-2.5 !px-5 !text-xs">
            Request a Quote
          </button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav-menu"
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-[32rem] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-px flex flex-col gap-1 pb-6 bg-navy-950/95 backdrop-blur-md pt-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-3 border-b border-white/5 text-sm tracking-wide ${
                isActive(item.href) ? "text-white" : "text-white/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              trackEvent("quote_button_click", { location: "mobile_menu" });
              openModal({ source: "mobile_menu" });
            }}
            className="btn-primary mt-4 w-full"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
