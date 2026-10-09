"use client";

import { omsFeatures, omsBenefits } from "@/data/content";
import {
  Users,
  Clock,
  CalendarDays,
  Banknote,
  ShieldCheck,
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Zap,
  Radar,
  MapPin,
  Radio,
} from "lucide-react";
import Reveal from "./Reveal";

const featureIcons: React.ReactNode[] = [
  <Users size={20} key="u" />,
  <Clock size={20} key="cl" />,
  <CalendarDays size={20} key="cd" />,
  <Banknote size={20} key="bn" />,
  <ShieldCheck size={20} key="sc" />,
  <LayoutDashboard size={20} key="ld" />,
  <MessageSquare size={20} key="ms" />,
  <BarChart3 size={20} key="bc" />,
];

const benefitIcons: React.ReactNode[] = [
  <Zap size={18} key="z" />,
  <BarChart3 size={18} key="b" />,
  <Clock size={18} key="c" />,
  <ShieldCheck size={18} key="s" />,
];

const workflowSteps = [
  "Requirement",
  "Work Order",
  "Recruitment",
  "Verification",
  "Training",
  "Uniform & ID",
  "Deployment",
  "Attendance",
  "Monitoring",
  "Client Feedback",
  "MIS",
  "Payroll & Compliance",
  "Continuous Improvement",
];

/*
  These are radar display points only.
  Add/remove districts here whenever required.
*/
const districtPoints = [
  {
    name: "Hathras",
    x: "50%",
    y: "17%",
    delay: "0s",
  },
  {
    name: "Aligarh",
    x: "72%",
    y: "24%",
    delay: "0.45s",
  },
  {
    name: "Mathura",
    x: "84%",
    y: "43%",
    delay: "0.9s",
  },
  {
    name: "Agra",
    x: "77%",
    y: "67%",
    delay: "1.35s",
  },
  {
    name: "Lucknow",
    x: "60%",
    y: "81%",
    delay: "1.8s",
  },
  {
    name: "Kanpur",
    x: "38%",
    y: "80%",
    delay: "2.25s",
  },
  {
    name: "Prayagraj",
    x: "20%",
    y: "67%",
    delay: "2.7s",
  },
  {
    name: "Varanasi",
    x: "15%",
    y: "45%",
    delay: "3.15s",
  },
  {
    name: "Meerut",
    x: "27%",
    y: "25%",
    delay: "3.6s",
  },
  {
    name: "Ghaziabad",
    x: "40%",
    y: "35%",
    delay: "4.05s",
  },
  {
    name: "Noida",
    x: "64%",
    y: "43%",
    delay: "4.5s",
  },
  {
    name: "Bareilly",
    x: "45%",
    y: "61%",
    delay: "4.95s",
  },
];

export default function OMS() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-section-pale py-20 md:py-28"
      aria-labelledby="oms-heading"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-100/50
          blur-[130px]
        "
        aria-hidden="true"
      />

      <div className="container-px relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="section-label mb-4 justify-center">
            Technology
          </div>

          <h2
            id="oms-heading"
            className="
              heading-display
              mb-4
              font-display
              text-3xl
              font-bold
              text-navy-900
              md:text-4xl
              xl:text-5xl
            "
          >
            Online Management System

            <span className="block text-brand-blue">
              (OMS)
            </span>
          </h2>

          <p className="text-base leading-relaxed text-ink-500">
            QSS India uses a cloud-based Online Management System for
            transparent, real-time management of all security,
            housekeeping and outsourced manpower deployments.
          </p>
        </Reveal>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {omsBenefits.map((benefit, i) => (
            <Reveal key={benefit} delay={i * 0.08}>
              <div
                className="
                  card-blue
                  flex
                  h-full
                  flex-col
                  items-center
                  gap-2.5
                  p-5
                  text-center
                "
              >
                <span
                  className="text-blue-200"
                  aria-hidden="true"
                >
                  {benefitIcons[i]}
                </span>

                <span className="text-sm font-semibold text-white">
                  {benefit}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* =====================================================
            FEATURE MODULES
        ====================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {omsFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div
                className="
                  card-light
                  flex
                  h-full
                  flex-col
                  gap-3
                  p-6
                "
              >
                <div
                  className="icon-wrapper-blue"
                  aria-hidden="true"
                >
                  {featureIcons[i] ?? <Zap size={20} />}
                </div>

                <h3 className="text-sm font-semibold text-navy-900">
                  {feature.title}
                </h3>

                <ul className="flex-1 space-y-1.5">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-1.5
                        text-xs
                        text-ink-500
                      "
                    >
                      <span
                        className="
                          mt-1.5
                          h-1
                          w-1
                          flex-shrink-0
                          rounded-full
                          bg-brand-blue
                        "
                        aria-hidden="true"
                      />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* =====================================================
            WORKFLOW
        ====================================================== */}

        <Reveal className="mt-16">
          <div
            className="
              rounded-2xl
              border border-surface-border
              bg-white
              p-6
              shadow-card
              md:p-8
            "
          >
            <h3 className="mb-8 text-center text-lg font-semibold text-navy-900">
              End-to-End Digital Workflow
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {workflowSteps.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-2"
                >
                  <div
                    className="
                      whitespace-nowrap
                      rounded-lg
                      border border-brand-soft
                      bg-brand-pale
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-brand-blue
                    "
                  >
                    {step}
                  </div>

                  {i < workflowSteps.length - 1 && (
                    <span
                      className="
                        text-sm
                        font-bold
                        text-brand-skyblue
                      "
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            DISTRICT RADAR
        ====================================================== */}

        <Reveal className="mt-16 md:mt-20">
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border border-blue-100
              bg-white
              shadow-[0_25px_70px_rgba(30,64,175,0.08)]
            "
          >
            {/* Background */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white
                via-[#f8fbff]
                to-[#edf5ff]
              "
              aria-hidden="true"
            />

            <div
              className="
                relative
                z-10
                grid
                items-center
                gap-10
                p-6
                md:p-10
                lg:grid-cols-[0.78fr_1.22fr]
                lg:gap-14
                xl:p-14
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div className="max-w-xl">
                <div
                  className="
                    mb-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-blue-200
                    bg-blue-50
                    px-3.5
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-brand-blue
                  "
                >
                  <Radio
                    size={14}
                    className="animate-pulse"
                  />

                  Operational Coverage
                </div>

                <h3
                  className="
                    mb-5
                    font-display
                    text-3xl
                    font-bold
                    leading-tight
                    text-navy-900
                    md:text-4xl
                  "
                >
                  Connected Operations

                  <span className="block text-gradient-blue">
                    Across Key Districts
                  </span>
                </h3>

                <p
                  className="
                    mb-7
                    max-w-lg
                    text-sm
                    leading-7
                    text-slate-600
                    md:text-base
                  "
                >
                  QSS India&apos;s operational framework enables centralized
                  monitoring of manpower and security deployments across
                  multiple service locations through the Online Management
                  System.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Centralized Monitoring",
                    "Multi-Location Visibility",
                    "Deployment Tracking",
                    "Real-Time Reporting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border border-blue-100
                        bg-white/80
                        px-3.5
                        py-3
                        text-xs
                        font-semibold
                        text-slate-700
                        shadow-[0_5px_18px_rgba(30,64,175,0.04)]
                      "
                    >
                      <MapPin
                        size={14}
                        className="flex-shrink-0 text-brand-blue"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  RADAR AREA
              ================================================= */}

              <div
                className="
                  relative
                  mx-auto
                  aspect-square
                  w-full
                  max-w-[620px]
                "
              >
                {/* Soft outer glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[7%]
                    rounded-full
                    bg-blue-100/50
                    blur-[70px]
                  "
                  aria-hidden="true"
                />

                {/* Radar Disc */}
                <div
                  className="
                    absolute
                    inset-[3%]
                    overflow-hidden
                    rounded-full
                    border
                    border-blue-200/80
                    bg-gradient-to-br
                    from-[#fbfdff]
                    via-[#f1f7ff]
                    to-[#e3efff]
                    shadow-[inset_0_0_80px_rgba(37,99,235,0.07),0_24px_70px_rgba(30,64,175,0.10)]
                  "
                >
                  {/* =============================================
                      RADAR RINGS
                  ============================================== */}

                  <div className="absolute inset-[12%] rounded-full border border-blue-200/70" />

                  <div className="absolute inset-[25%] rounded-full border border-blue-200/70" />

                  <div className="absolute inset-[38%] rounded-full border border-blue-200/75" />

                  {/* vertical line */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-full
                      w-px
                      -translate-x-1/2
                      bg-blue-200/60
                    "
                  />

                  {/* horizontal line */}
                  <div
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-full
                      -translate-y-1/2
                      bg-blue-200/60
                    "
                  />

                  {/* diagonal */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[145%]
                      w-px
                      -translate-x-1/2
                      -translate-y-1/2
                      rotate-45
                      bg-blue-100/70
                    "
                  />

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[145%]
                      w-px
                      -translate-x-1/2
                      -translate-y-1/2
                      -rotate-45
                      bg-blue-100/70
                    "
                  />

                  {/* =============================================
                      TRUE FULL-CIRCLE RADAR SWEEP

                      Centre based 360 degree scan.
                  ============================================== */}

                  <div
                    className="
                      district-radar-sweep
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                    "
                    aria-hidden="true"
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                      "
                      style={{
                        background:
                          "conic-gradient(from 0deg at 50% 50%, rgba(37,99,235,0) 0deg, rgba(37,99,235,0) 305deg, rgba(37,99,235,0.025) 315deg, rgba(37,99,235,0.08) 332deg, rgba(37,99,235,0.18) 347deg, rgba(37,99,235,0.03) 359deg, rgba(37,99,235,0) 360deg)",
                      }}
                    />

                    {/* Radar scan line */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[1.5px]
                        w-[50%]
                        origin-left
                        bg-gradient-to-r
                        from-brand-blue
                        via-blue-500
                        to-transparent
                        shadow-[0_0_12px_rgba(37,99,235,0.75)]
                      "
                    />
                  </div>

                  {/* =============================================
                      CENTRE HUB
                  ============================================== */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-40
                      flex
                      h-[68px]
                      w-[68px]
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      bg-brand-blue
                      text-white
                      shadow-[0_0_0_1px_rgba(37,99,235,0.18),0_10px_30px_rgba(30,64,175,0.30)]
                      sm:h-[78px]
                      sm:w-[78px]
                    "
                  >
                    <Radar
                      size={28}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Center pulse 1 */}
                  <span
                    className="
                      radar-center-pulse
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      z-30
                      h-[90px]
                      w-[90px]
                      rounded-full
                      border
                      border-brand-blue/40
                    "
                    aria-hidden="true"
                  />

                  {/* Center pulse 2 */}
                  <span
                    className="
                      radar-center-pulse-second
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      z-30
                      h-[90px]
                      w-[90px]
                      rounded-full
                      border
                      border-brand-blue/25
                    "
                    aria-hidden="true"
                  />

                  {/* =============================================
                      DISTRICT DOTS + LABELS
                  ============================================== */}

                  {districtPoints.map((district) => (
                    <div
                      key={district.name}
                      className="
                        absolute
                        z-30
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                      style={{
                        left: district.x,
                        top: district.y,
                      }}
                    >
                      <div className="group relative flex items-center justify-center">
                        {/* expanding pulse */}
                        <span
                          className="
                            district-radar-pulse
                            absolute
                            h-8
                            w-8
                            rounded-full
                            border
                            border-blue-500/40
                          "
                          style={{
                            animationDelay: district.delay,
                          }}
                          aria-hidden="true"
                        />

                        {/* district dot */}
                        <span
                          className="
                            district-radar-dot
                            relative
                            z-10
                            block
                            h-3
                            w-3
                            rounded-full
                            border-2
                            border-white
                            bg-brand-blue
                            shadow-[0_0_0_3px_rgba(37,99,235,0.15),0_0_14px_rgba(37,99,235,0.40)]
                          "
                          style={{
                            animationDelay: district.delay,
                          }}
                          aria-hidden="true"
                        />

                        {/* label */}
                        <span
                          className="
                            absolute
                            left-4
                            top-1/2
                            z-20
                            -translate-y-1/2
                            whitespace-nowrap
                            rounded-md
                            border
                            border-blue-100
                            bg-white/90
                            px-2
                            py-1
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.05em]
                            text-brand-blue
                            shadow-[0_4px_10px_rgba(30,64,175,0.06)]
                            backdrop-blur-sm

                            sm:left-5
                            sm:px-2.5
                            sm:py-1.5
                            sm:text-[9px]

                            md:text-[10px]
                          "
                        >
                          {district.name}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* =============================================
                      STATUS TEXT
                  ============================================== */}

                  <div
                    className="
                      absolute
                      bottom-[8%]
                      left-1/2
                      z-20
                      -translate-x-1/2
                      whitespace-nowrap
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-blue-400/70
                      sm:text-[9px]
                    "
                  >
                    Live Operational Scan
                  </div>
                </div>

                {/* =============================================
                    RADAR STATUS
                ============================================== */}

                <div
                  className="
                    absolute
                    bottom-[-1%]
                    left-1/2
                    z-40
                    flex
                    -translate-x-1/2
                    items-center
                    gap-2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-blue-100
                    bg-white
                    px-4
                    py-2.5
                    shadow-[0_10px_30px_rgba(30,64,175,0.11)]
                  "
                >
                  <span
                    className="
                      radar-live-dot
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-500
                    "
                    aria-hidden="true"
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-slate-600
                      sm:text-[10px]
                    "
                  >
                    District Network Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx global>{`
        /*
         * Radar sweep.
         * Entire conic beam rotates around exact centre.
         */
        @keyframes districtRadarRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .district-radar-sweep {
          transform-origin: 50% 50%;
          animation: districtRadarRotate 6s linear infinite;
          will-change: transform;
        }

        /*
         * District outer pulse
         */
        @keyframes districtRadarPulse {
          0% {
            transform: scale(0.35);
            opacity: 0;
          }

          20% {
            opacity: 0.8;
          }

          75% {
            transform: scale(1.65);
            opacity: 0;
          }

          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        .district-radar-pulse {
          animation: districtRadarPulse 3.4s ease-out infinite;
        }

        /*
         * Blinking district dot
         */
        @keyframes districtRadarBlink {
          0%,
          38%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          48% {
            opacity: 0.35;
            transform: scale(0.75);
          }

          60% {
            opacity: 1;
            transform: scale(1.3);
          }

          72% {
            transform: scale(1);
          }
        }

        .district-radar-dot {
          animation: districtRadarBlink 3.6s ease-in-out infinite;
        }

        /*
         * Centre pulse
         */
        @keyframes radarCenterPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0.8;
          }

          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }

        .radar-center-pulse {
          animation: radarCenterPulse 2.5s ease-out infinite;
        }

        .radar-center-pulse-second {
          animation: radarCenterPulse 2.5s ease-out 1.2s infinite;
        }

        /*
         * Green live indicator
         */
        @keyframes radarLivePulse {
          0%,
          100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          }

          50% {
            opacity: 0.65;
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
          }
        }

        .radar-live-dot {
          animation: radarLivePulse 1.8s ease-in-out infinite;
        }

        /*
         * Accessibility
         */
        @media (prefers-reduced-motion: reduce) {
          .district-radar-sweep,
          .district-radar-pulse,
          .district-radar-dot,
          .radar-center-pulse,
          .radar-center-pulse-second,
          .radar-live-dot {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}