"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { contact } from "@/data/content";
import { useEffect, useRef, useState } from "react";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";

const HeroCanvas = dynamic(() => import("./three/HeroCanvas"), { ssr: false });

/**
 * The three scroll-linked story beats, kept in lockstep with the particle
 * stages in SecurityGlobe.tsx (STAGE1_END / STAGE2_END = 0.35 / 0.65):
 * shield → "security", logo → "identity", India map → "reach".
 */
type CTA = { label: string; type: "modal" | "link"; href?: string };
type Stage = {
  eyebrow: string;
  line1: string;
  line2: string;
  gradientLine2?: boolean;
  description: string;
  primary: CTA;
  secondary: CTA;
};

const STAGES: Stage[] = [
  {
    eyebrow: "Trusted Excellence Since 1999",
    line1: "Professional Workforce.",
    line2: "Security You Can Trust.",
    gradientLine2: true,
    description:
      "Integrated manpower, security, housekeeping and facility support solutions for organizations across India.",
    primary: { label: "Request Security Services", type: "modal" },
    secondary: { label: "Get In Touch", type: "modal" },
  },
  {
    eyebrow: "QSS India — Professional Workforce Solutions",
    line1: "People. Process.",
    line2: "Protection.",
    gradientLine2: true,
    description:
      "Reliable manpower and professional support solutions designed to keep organizations secure, efficient and operational.",
    primary: { label: "Explore Our Services", type: "link", href: "/services" },
    secondary: { label: "Get In Touch", type: "modal" },
  },
  {
    eyebrow: "Pan-India Presence",
    line1: "Securing Operations",
    line2: "Across India.",
    gradientLine2: true,
    description:
      "From manpower and security to housekeeping and facility support, QSS India delivers dependable workforce solutions across locations.",
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

  // Independent scroll listener (mirrors the one HeroCanvas uses for the
  // particles) that only updates React state when the STAGE actually
  // changes — cheap, and avoids re-rendering on every scroll pixel.
  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onScroll = () => {
      if (motionMq.matches) return; // keep the hero fully static, text included
      const track = document.getElementById("home")?.parentElement;
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
        }, 400);
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
          const eventName =
            cta.label === "Request Security Services"
              ? "security_services_click"
              : "quote_button_click";
          trackEvent(eventName, { location: "hero" });
          openModal({ source: "hero" });
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
    <div className="relative h-[100svh] md:h-[260vh]">
      <section
        id="home"
        className="sticky top-0 min-h-[100svh] flex items-center overflow-hidden bg-navy-950"
      >
        {/* Background photo layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/security/team-outdoor-01.jpg"
            alt="QSS India security personnel deployed at a client site"
            fill
            priority
            className="object-cover object-center opacity-[0.28] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/85 to-navy-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-navy-950/70" />
        </div>

        {/* Three.js security globe */}
        {mounted && (
          <div className="absolute right-[-6%] md:right-[0%] top-1/2 -translate-y-1/2 w-[95vw] md:w-[50vw] aspect-square opacity-80 md:opacity-95 pointer-events-none">
            <HeroCanvas />
          </div>
        )}

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Light sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-y-1/2 w-1/3 bg-gradient-to-r from-transparent via-brand-skyblue/10 to-transparent -skew-x-12 animate-[scanline_8s_linear_infinite]" />
        </div>

        <div className="relative z-10 container-px w-full pt-28 pb-20">
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 border border-brand-skyblue/30 bg-brand-skyblue/5 rounded-full px-4 py-1.5 mb-7 transition-all duration-400 ease-out ${
                fading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "40ms" }}
            >
              <ShieldCheck size={15} className="text-brand-skyblue" />
              <span className="text-xs tracking-[0.2em] uppercase text-brand-skyblue font-medium">
                {stage.eyebrow}
              </span>
            </div>

            <h1
              className={`heading-display font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] mb-6 transition-all duration-400 ease-out ${
                fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "110ms" }}
            >
              {stage.line1}
              <br />
              <span className={stage.gradientLine2 ? "text-gradient" : ""}>
                {stage.line2}
              </span>
            </h1>

            <p
              className={`text-white/70 text-base md:text-lg max-w-xl mb-10 leading-relaxed transition-all duration-400 ease-out ${
                fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "180ms" }}
            >
              {stage.description}
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-400 ease-out ${
                fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: fading ? "0ms" : "250ms" }}
            >
              {renderCta(stage.primary, "btn-primary")}
              {renderCta(stage.secondary, "btn-outline")}
              {displayStageIdx === 0 && (
                <Link href="/services" className="btn-outline">
                  View Our Services
                </Link>
              )}
            </div>

            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-white/50 text-xs tracking-wide uppercase">
              <span>PSARA Licensed</span>
              <span className="w-1 h-1 rounded-full bg-white/20 self-center" />
              <span>GST Registered</span>
              <span className="w-1 h-1 rounded-full bg-white/20 self-center" />
              <span>{contact.branches.length + 1} Locations Across North India</span>
            </div>
          </div>
        </div>

        <a
          href="#explore"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          aria-label="Scroll to explore section"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>
    </div>
  );
}
