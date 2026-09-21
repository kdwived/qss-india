"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { contact } from "@/data/content";
import Reveal from "./Reveal";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";

export default function CTABanner() {
  const { openModal } = useQuoteModal();
  return (
    <section className="relative bg-navy-900 py-20 md:py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
      <div className="container-px relative text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="heading-display font-display text-2xl md:text-4xl font-semibold text-white mb-5">
            Ready to secure your organization?
          </h2>
          <p className="text-white/55 mb-9 leading-relaxed">
            Talk to our team about guards, housekeeping, manpower or a
            customized bundle — because your safety is not just our job,
            it&apos;s our commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                trackEvent("quote_button_click", { location: "cta_banner" });
                openModal({ source: "cta_banner" });
              }}
              className="btn-primary"
            >
              Request a Quote
              <ArrowRight size={16} />
            </button>
            <a
              href={`tel:+91${contact.phones[0]}`}
              onClick={() => trackEvent("phone_click", { location: "cta_banner" })}
              className="btn-outline"
            >
              <PhoneCall size={16} />
              +91 {contact.phones[0]}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
