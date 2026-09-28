"use client";

import { faqs } from "@/data/content";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-section-pale py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — header */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="section-label mb-4">FAQs</div>
              <h2
                id="faq-heading"
                className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-navy-900 heading-display mb-6"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-ink-500 text-base leading-relaxed mb-8">
                Common questions from organizations looking to partner with QSS India for
                security, manpower, housekeeping or facility services.
              </p>
              <a href="/contact" className="btn-primary inline-flex">
                Have another question? Contact us
              </a>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay={0.12}>
            <div className="space-y-3" role="list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-surface-border rounded-xl overflow-hidden shadow-card"
                  role="listitem"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900 text-sm hover:text-brand-blue transition-colors"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-trigger-${i}`}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-brand-blue transition-transform duration-300 ${
                        open === i ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-ink-500 text-sm leading-relaxed border-t border-surface-border pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
