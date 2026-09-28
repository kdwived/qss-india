"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ShieldCheck, Star, Award, MapPin } from "lucide-react";
import { contact } from "@/data/content";
import { useEffect, useRef, useState } from "react";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";

const HeroCanvas = dynamic(() => import("./three/HeroCanvas"), { ssr: false });

type CTA = { label: string; type: "modal" | "link"; href?: string };
type Stage = {
  eyebrow: string;
  line1: string;
  line2: string;
  description: string;
  primary: CTA;
  secondary: CTA;
};

const STAGES: Stage[] = [
  {
    eyebrow: "Trusted Excellence Since 1999",
    line1: "Professional Workforce.",
    line2: "Security You Can Trust.",
    description:
      "Integrated manpower, security, housekeeping and facility support solutions for organizations across India.",
    primary: { label: "Request Security Services", type: "modal" },
    secondary: { label: "Explore Our Services", type: "link", href: "/services" },
  },
  {
    eyebrow: "QSS India — Professional Workforce Solutions",
    line1: "People. Process.",
    line2: "Protection.",
    description:
      "Reliable manpower and professional support solutions designed to keep organizations secure, efficient and operational.",
    primary: { label: "View Our Services", type: "link", href: "/services" },
    secondary: { label: "Get In Touch", type: "modal" },
  },
  {
    eyebrow: "7 Locations Across North India",
    line1: "Securing Operations",
    line2: "Across India.",
    description:
      "From manpower and security to housekeeping and facility support, QSS India delivers dependable workforce solutions wherever you are.",
    primary: { label: "Request a Quote", type: "modal" },
    secondary: { label: "View Locations", type: "link", href: "/contact" },
  },
];

const STAGE1_END = 0.35;
const STAGE2_END = 0.65;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [displayStageIdx, setDisplayStageIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const targetStageRef = useRef(0);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { openModal } = useQuoteModal();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onScroll = () => {
      if (motionMq.matches) return;
      const track = document.getElementById("hero-main")?.parentElement;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 1 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      const nextStage = progress <= STAGE1_END ? 0 : progress <= STAGE2_END ? 1 : 2;

      if (nextStage !== targetStageRef.current) {
        targetStageRef.current = nextStage;
        setFading(true);
        if (fadeTimer.current) clearTimeout(fadeTimer.current);
        fadeTimer.current = setTimeout(() => {
          setDisplayStageIdx(nextStage);
          setFading(false);
        }, 350);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  const stage = STAGES[displayStageIdx];

  const renderCta = (cta: CTA, className: string) =>
    cta.type === "modal" ? (
      <button
        onClick={() => {
          trackEvent("quote_button_click", { location: "hero_main" });
          openModal({ source: "hero_main" });
        }}
        className={className}
      >
        {cta.label}
      </button>
    ) : (
      <Link href={cta.href ?? "/"} className={className}>
        {cta.label}
      </Link>
    );

  return (
    /* scroll track — gives depth on desktop */
    <div className="relative h-[100svh] md:h-[240vh]" id="hero-main-wrapper">
      <section
        id="hero-main"
        className="sticky top-0 min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-br from-surface-offwhite via-white to-surface-lightblue"
        aria-label="QSS India hero — professional workforce solutions"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg-light pointer-events-none" aria-hidden="true" />

        {/* Three.js particle canvas — blue dots on light background */}
        {mounted && (
          <div
            className="absolute right-[-6%] md:right-[0%] top-1/2 -translate-y-1/2 w-[95vw] md:w-[50vw] aspect-square opacity-60 md:opacity-75 pointer-events-none"
            aria-hidden="true"
          >
            <HeroCanvas />
          </div>
        )}

        {/* Diagonal accent shape */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-pale/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 container-px w-full pt-36 pb-20">
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <div
              className={`inline-flex items-center gap-2 border border-brand-blue/20 bg-brand-pale rounded-full px-4 py-1.5 mb-7 transition-all duration-400 ease-out ${
                fading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "40ms" }}
            >
              <ShieldCheck size={15} className="text-brand-blue" aria-hidden="true" />
              <span className="text-xs tracking-[0.18em] uppercase text-brand-blue font-semibold">
                {stage.eyebrow}
              </span>
            </div>

            {/* Main heading */}
            <h2
              className={`heading-display font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-navy-900 leading-[1.05] mb-6 transition-all duration-400 ease-out ${
                fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "110ms" }}
            >
              {stage.line1}
              <br />
              <span className="text-gradient-blue">{stage.line2}</span>
            </h2>

            {/* Description */}
            <p
              className={`text-ink-600 text-base md:text-lg max-w-xl mb-10 leading-relaxed transition-all duration-400 ease-out ${
                fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "180ms" }}
            >
              {stage.description}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-400 ease-out ${
                fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "250ms" }}
            >
              {renderCta(stage.primary, "btn-primary")}
              {renderCta(stage.secondary, "btn-outline")}
            </div>

            {/* Trust badges */}
            <div
              className={`mt-12 flex flex-wrap gap-4 transition-all duration-400 ease-out ${
                fading ? "opacity-0" : "opacity-100"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "320ms" }}
            >
              {[
                { icon: <Star size={13} fill="currentColor" />, label: "PSARA Licensed" },
                { icon: <Award size={13} />, label: "GST Registered" },
                { icon: <MapPin size={13} />, label: `${contact.branches.length + 1} Locations Across North India` },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white border border-surface-border rounded-full px-3.5 py-2 shadow-card"
                >
                  <span className="text-brand-blue" aria-hidden="true">{badge.icon}</span>
                  <span className="text-xs font-medium text-ink-600">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#stats"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-400 hover:text-brand-blue transition-colors"
          aria-label="Scroll to key statistics"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Discover</span>
          <span className="w-5 h-8 border-2 border-ink-200 rounded-full flex items-start justify-center pt-1.5">
            <span className="w-1 h-1.5 bg-brand-blue rounded-full animate-scroll-indicator" aria-hidden="true" />
          </span>
        </a>
      </section>
    </div>
  );
}
