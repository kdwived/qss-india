"use client";

import { useState } from "react";
import { compliance } from "@/data/content";
import {
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  BadgeCheck,
} from "lucide-react";
import Reveal from "./Reveal";

const compliancePoints = [
  "PSARA Licensed Security Agency",
  "GST Registered",
  "EPF Registration",
  "ESI Registration",
  "Labour License",
  "PAN & TAN Registration",
];

/**
 * Remote logos.
 * No local /public logo files required.
 */
const logos = {
  psara:
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",

  gst:
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",

  incomeTax:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_of_Income_Tax_Department_India.png/344px-Logo_of_Income_Tax_Department_India.png",

  epfo:
    "https://www.epfindia.gov.in/site_docs/images/logo_epfo.png",

  esic:
    "https://www.esic.gov.in/attachments/logo/esic_logo.png",

  labour:
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",

  government:
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",
};

function getComplianceLogo(label: string) {
  const name = label.toLowerCase();

  if (name.includes("psara")) return logos.psara;

  if (name.includes("gst")) return logos.gst;

  if (name.includes("esi")) return logos.esic;

  if (name.includes("epf") || name.includes("pf")) {
    return logos.epfo;
  }

  if (name.includes("labour")) return logos.labour;

  if (name.includes("pan") || name.includes("tan")) {
    return logos.incomeTax;
  }

  return logos.government;
}

export default function Compliance() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyValue = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(label);

      setTimeout(() => {
        setCopied(null);
      }, 1800);
    } catch {}
  };

  return (
    <section
      id="compliance"
      className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="compliance-heading"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-blue-50 blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.30] grid-bg-light"
        aria-hidden="true"
      />

      <div className="container-px relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="section-label mb-4 justify-center">
              Statutory Compliance
            </div>

            <h2
              id="compliance-heading"
              className="heading-display mb-5 font-display text-3xl font-bold text-navy-900 md:text-4xl xl:text-5xl"
            >
              Registered. Compliant.
              <span className="block text-gradient-blue">
                Built on Trust.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-500 md:text-lg">
              QSS India maintains key statutory registrations supporting
              professional security, manpower outsourcing and workforce
              operations.
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-20">

          {/* ==============================================
              LEFT
          ============================================== */}
          <Reveal>
            <div className="lg:sticky lg:top-32">

              {/* PSARA CARD */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[30px]
                  bg-gradient-to-br
                  from-[#102f76]
                  via-[#1e40af]
                  to-[#2563eb]
                  p-7 md:p-9
                  text-white
                  shadow-[0_30px_80px_-30px_rgba(30,64,175,0.6)]
                "
              >
                {/* decoration */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />

                <div className="relative z-10">

                  {/* LOGO */}
                  <div className="mb-8 flex items-center justify-between gap-4">

                    <div
                      className="
                        flex h-[82px] w-[82px]
                        items-center justify-center
                        rounded-2xl
                        border border-white/20
                        bg-white
                        p-3
                        shadow-xl
                      "
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logos.psara}
                        alt="Government of India"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div
                      className="
                        rounded-full
                        border border-white/20
                        bg-white/10
                        px-4 py-2
                        text-[10px] md:text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-blue-100
                        backdrop-blur
                      "
                    >
                      Authorized Security Services
                    </div>
                  </div>

                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                    Primary Security Registration
                  </div>

                  <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                    PSARA Licensed
                    <br />
                    Security Agency
                  </h3>

                  <p className="mb-7 max-w-md text-sm leading-6 text-blue-100/90 md:text-base">
                    QSS India holds a PSARA license for private security agency
                    operations in Uttar Pradesh, supported by key statutory
                    workforce and business registrations.
                  </p>

                  <div className="rounded-2xl border border-white/15 bg-black/10 p-4 backdrop-blur-sm">

                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                      PSARA License Number
                    </div>

                    <div className="break-all font-mono text-sm font-semibold text-white md:text-base">
                      PSA/L/74/UP/2022/SEP/3/797
                    </div>
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">

                  <div className="mb-2 text-3xl font-bold text-brand-blue">
                    {compliance.length}
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-[0.13em] text-ink-500">
                    Registrations Listed
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(15,49,105,0.05)]">

                  <BadgeCheck
                    size={28}
                    className="mb-2 text-brand-blue"
                  />

                  <div className="text-xs font-semibold uppercase tracking-[0.13em] text-ink-500">
                    Statutory Framework
                  </div>
                </div>

              </div>

              {/* CHECKLIST */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,49,105,0.05)]">

                <div className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-navy-900">
                  Compliance Coverage
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                  {compliancePoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 flex-shrink-0 text-brand-blue"
                      />

                      <span className="text-sm leading-5 text-ink-600">
                        {point}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </Reveal>

          {/* ==============================================
              RIGHT
          ============================================== */}
          <Reveal delay={0.12}>
            <div>

              <div className="mb-6">

                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  Registration Details
                </div>

                <h3 className="text-2xl font-bold text-navy-900 md:text-3xl">
                  Business & Workforce Compliance
                </h3>

              </div>

              <div className="grid gap-4">

                {compliance.map((item, index) => {
                  const logo = getComplianceLogo(item.label);
                  const isCopied = copied === item.label;

                  return (
                    <div
                      key={item.label}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border border-slate-200
                        bg-white
                        p-5 md:p-6
                        shadow-[0_6px_25px_rgba(15,49,105,0.04)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-blue-200
                        hover:shadow-[0_16px_40px_rgba(30,64,175,0.10)]
                      "
                    >

                      {/* LEFT ACCENT */}
                      <div
                        className="
                          absolute bottom-0 left-0 top-0
                          w-[3px]
                          bg-gradient-to-b
                          from-brand-blue
                          to-brand-skyblue
                          opacity-0
                          transition-opacity
                          group-hover:opacity-100
                        "
                      />

                      <div className="flex items-center gap-4">

                        {/* NUMBER */}
                        <div className="hidden w-7 flex-shrink-0 text-center text-[11px] font-bold text-blue-300 sm:block">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* REAL ONLINE LOGO */}
                        <div
                          className="
                            flex
                            h-[70px] w-[70px]
                            flex-shrink-0
                            items-center justify-center
                            rounded-2xl
                            border border-slate-100
                            bg-white
                            p-2.5
                            shadow-[0_5px_18px_rgba(15,49,105,0.07)]
                            transition-all duration-300
                            group-hover:scale-[1.06]
                          "
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={logo}
                            alt={`${item.label} logo`}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              const element =
                                e.currentTarget as HTMLImageElement;

                              if (
                                element.src !== logos.government
                              ) {
                                element.src = logos.government;
                              }
                            }}
                          />
                        </div>

                        {/* DETAILS */}
                        <div className="min-w-0 flex-1">

                          <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-400">
                            {item.label}
                          </div>

                          <div className="break-all font-mono text-sm font-semibold leading-relaxed text-navy-900 md:text-[15px]">
                            {item.value}
                          </div>

                        </div>

                        {/* COPY */}
                        <button
                          type="button"
                          onClick={() =>
                            copyValue(item.label, item.value)
                          }
                          className="
                            flex h-10 w-10
                            flex-shrink-0
                            items-center justify-center
                            rounded-xl
                            border border-slate-200
                            bg-slate-50
                            text-ink-400
                            transition-all duration-200
                            hover:border-blue-200
                            hover:bg-blue-50
                            hover:text-brand-blue
                          "
                          aria-label={`Copy ${item.label}`}
                        >
                          {isCopied ? (
                            <Check
                              size={17}
                              className="text-green-600"
                            />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>

                      </div>

                      {isCopied && (
                        <div className="mt-3 text-right text-[11px] font-semibold text-green-600">
                          Registration number copied
                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

              {/* TRUST */}
              <div className="mt-6 rounded-2xl border border-blue-100 bg-[#f6f9ff] p-5 md:p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-sm">
                    <ShieldCheck size={21} />
                  </div>

                  <div>

                    <h4 className="mb-1 font-semibold text-navy-900">
                      Compliance-led service delivery
                    </h4>

                    <p className="text-sm leading-6 text-ink-500">
                      QSS India combines security licensing, workforce
                      registrations and statutory documentation to support
                      transparent manpower deployment and service management.
                    </p>

                  </div>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}