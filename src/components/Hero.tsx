"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { contact } from "@/data/content";
import { useEffect, useRef, useState } from "react";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";

const HeroCanvas = dynamic(() => import("./three/HeroCanvas"), {
  ssr: false,
});

type CTA = {
  label: string;
  type: "modal" | "link";
  href?: string;
};

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
    eyebrow: "25+ Years of Professional Service",
    line1: "Professional Workforce.",
    line2: "Security You Can Trust.",
    description:
      "Integrated manpower, security, housekeeping and facility support solutions for government, institutional and private-sector requirements.",
    primary: {
      label: "Request Security Services",
      type: "modal",
    },
    secondary: {
      label: "Explore Our Services",
      type: "link",
      href: "/services",
    },
  },
  {
    eyebrow: "Professional Workforce Solutions",
    line1: "People. Process.",
    line2: "Protection.",
    description:
      "Structured manpower and support solutions built around recruitment, verification, training, deployment and continuous service monitoring.",
    primary: {
      label: "View Our Services",
      type: "link",
      href: "/services",
    },
    secondary: {
      label: "Get In Touch",
      type: "modal",
    },
  },
  {
    eyebrow: "North India Operational Presence",
    line1: "Supporting Operations",
    line2: "Across Key Locations.",
    description:
      "From security and manpower to housekeeping and operational support, QSS India delivers dependable workforce solutions across multiple locations.",
    primary: {
      label: "Request a Quote",
      type: "modal",
    },
    secondary: {
      label: "View Locations",
      type: "link",
      href: "/contact",
    },
  },
];

const STAGE1_END = 0.35;
const STAGE2_END = 0.68;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [displayStageIdx, setDisplayStageIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const targetStageRef = useRef(0);

  const fadeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const { openModal } = useQuoteModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const motionMq = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const onScroll = () => {
      if (motionMq.matches) return;

      const track =
        document.getElementById("hero-main")
          ?.parentElement;

      if (!track) return;

      const rect = track.getBoundingClientRect();

      const scrollable =
        rect.height - window.innerHeight;

      const progress =
        scrollable > 1
          ? Math.min(
              1,
              Math.max(
                0,
                -rect.top / scrollable
              )
            )
          : 0;

      const nextStage =
        progress <= STAGE1_END
          ? 0
          : progress <= STAGE2_END
            ? 1
            : 2;

      if (
        nextStage !==
        targetStageRef.current
      ) {
        targetStageRef.current = nextStage;

        setFading(true);

        if (fadeTimer.current) {
          clearTimeout(fadeTimer.current);
        }

        fadeTimer.current = setTimeout(
          () => {
            setDisplayStageIdx(nextStage);
            setFading(false);
          },
          260
        );
      }
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      onScroll,
      { passive: true }
    );

    onScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onScroll
      );

      if (fadeTimer.current) {
        clearTimeout(fadeTimer.current);
      }
    };
  }, []);

  const stage =
    STAGES[displayStageIdx];

  const renderCta = (
    cta: CTA,
    className: string
  ) =>
    cta.type === "modal" ? (
      <button
        onClick={() => {
          trackEvent(
            "quote_button_click",
            {
              location: "hero_main",
            }
          );

          openModal({
            source: "hero_main",
          });
        }}
        className={className}
      >
        {cta.label}

        <ArrowRight
          size={15}
          aria-hidden="true"
        />
      </button>
    ) : (
      <Link
        href={cta.href ?? "/"}
        className={className}
      >
        {cta.label}

        <ArrowRight
          size={15}
          aria-hidden="true"
        />
      </Link>
    );

  return (
    <div
      className="
        relative
        h-[100svh]
        md:h-[220vh]
      "
      id="hero-main-wrapper"
    >
      <section
        id="hero-main"
        className="
          sticky
          top-0
          flex
          min-h-[100svh]
          items-center
          overflow-hidden
          bg-white
        "
        aria-label="QSS India hero — professional workforce solutions"
      >
        {/* =====================================================
            THREE JS VISUAL
        ====================================================== */}

        {mounted && (
          <div
            className="
              pointer-events-none
              absolute
              right-[-28%]
              top-1/2
              aspect-square
              w-[118vw]
              -translate-y-1/2
              opacity-100

              sm:right-[-20%]
              sm:w-[95vw]

              md:right-[-5%]
              md:w-[52vw]
              md:opacity-100

              xl:right-[1%]
              xl:w-[48vw]
            "
            aria-hidden="true"
          >
            <HeroCanvas />
          </div>
        )}

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            container-px
            relative
            z-10
            w-full
            pb-20
            pt-32
            md:pt-36
          "
        >
          <div
            className="
              max-w-[720px]
            "
          >
            {/* EYEBROW */}

            <div
              className={`
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-blue-200
                bg-white/85
                px-4
                py-2
                shadow-[0_8px_25px_rgba(30,64,175,0.05)]
                backdrop-blur-sm
                transition-all
                duration-300

                ${
                  fading
                    ? "opacity-0 -translate-y-2"
                    : "opacity-100 translate-y-0"
                }
              `}
            >
              <ShieldCheck
                size={14}
                className="text-brand-blue"
                aria-hidden="true"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-brand-blue
                  sm:text-xs
                "
              >
                {stage.eyebrow}
              </span>
            </div>

            {/* HEADING */}

            <h2
              className={`
                heading-display
                mb-6
                font-display
                text-4xl
                font-bold
                leading-[0.98]
                tracking-[-0.025em]
                text-navy-900
                transition-all
                duration-300

                sm:text-5xl
                md:text-6xl
                xl:text-[68px]

                ${
                  fading
                    ? "opacity-0 translate-y-3"
                    : "opacity-100 translate-y-0"
                }
              `}
            >
              {stage.line1}

              <br />

              <span className="text-gradient-blue">
                {stage.line2}
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`
                mb-8
                max-w-xl
                text-[15px]
                leading-7
                text-slate-600
                transition-all
                duration-300

                md:text-[17px]

                ${
                  fading
                    ? "opacity-0 translate-y-3"
                    : "opacity-100 translate-y-0"
                }
              `}
            >
              {stage.description}
            </p>

            {/* CTA */}

            <div
              className={`
                flex
                flex-wrap
                gap-3
                transition-all
                duration-300

                ${
                  fading
                    ? "opacity-0 translate-y-3"
                    : "opacity-100 translate-y-0"
                }
              `}
            >
              {renderCta(
                stage.primary,
                `
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-brand-blue
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_28px_rgba(30,64,175,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                `
              )}

              {renderCta(
                stage.secondary,
                `
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border border-blue-200
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-brand-blue
                  shadow-[0_6px_20px_rgba(15,49,105,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-brand-blue
                  hover:bg-blue-50
                `
              )}
            </div>

            {/* =================================================
                COMPACT TRUST STRIP
            ================================================= */}

            <div
              className={`
                mt-10
                flex
                flex-wrap
                gap-2.5
                transition-opacity
                duration-300

                ${
                  fading
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            >
              {[
                {
                  icon: (
                    <ShieldCheck
                      size={13}
                    />
                  ),
                  label:
                    "PSARA Licensed",
                },
                {
                  icon: (
                    <BadgeCheck
                      size={13}
                    />
                  ),
                  label:
                    "GST Registered",
                },
                {
                  icon: (
                    <MapPin
                      size={13}
                    />
                  ),
                  label: `${
                    contact.branches.length +
                    1
                  } Locations`,
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border border-slate-200
                    bg-white/80
                    px-3
                    py-2
                    text-slate-600
                    shadow-[0_4px_15px_rgba(15,49,105,0.03)]
                    backdrop-blur-sm
                  "
                >
                  <span
                    className="text-brand-blue"
                    aria-hidden="true"
                  >
                    {badge.icon}
                  </span>

                  <span
                    className="
                      text-[11px]
                      font-medium
                    "
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            STAGE PROGRESS INDICATOR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            z-10
            hidden
            -translate-x-1/2
            items-center
            gap-2
            md:flex
          "
          aria-hidden="true"
        >
          {[0, 1, 2].map(
            (index) => (
              <span
                key={index}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    displayStageIdx ===
                    index
                      ? "w-8 bg-brand-blue"
                      : "w-1.5 bg-blue-200"
                  }
                `}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}