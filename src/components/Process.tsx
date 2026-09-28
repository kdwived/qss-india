"use client";

import { processSteps } from "@/data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-section-white py-20 md:py-28"
      aria-labelledby="process-heading"
    >
      <div className="container-px">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-4">Our Methodology</div>
          <h2
            id="process-heading"
            className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-navy-900 heading-display mb-4"
          >
            Approach &amp; Deployment Process
          </h2>
          <p className="text-ink-500 text-base leading-relaxed">
            Every deployment follows a structured, proven process — from the moment you raise a
            requirement to continuous monitoring after go-live.
          </p>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-skyblue to-brand-blue opacity-30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-4 relative">
            {processSteps.slice(0, 10).map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center group">
                  {/* Step number circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shadow-card mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                    <span
                      className="font-display text-2xl font-bold text-brand-blue group-hover:text-white transition-colors heading-display"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy-900 text-xs leading-snug mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-ink-400 text-[11px] leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="flex gap-5">
                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-blue">
                    {i + 1}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-brand-soft my-1" aria-hidden="true" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="font-semibold text-navy-900 mb-1">{step.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
