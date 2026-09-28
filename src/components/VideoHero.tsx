"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";
import { contact } from "@/data/content";

export default function VideoHero() {
  const { openModal } = useQuoteModal();

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "clamp(560px, 84vh, 860px)" }}
      aria-label="QSS India — Professional Security and Manpower Services"
    >
      {/* Background Video */}
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/gallery/services-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />

      {/* Very subtle bottom fade only */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-32
          bg-gradient-to-t
          from-black/25
          via-black/5
          to-transparent
        "
        aria-hidden="true"
      />

      {/* Blue Bottom CTA */}
      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            overflow-hidden
            rounded-full
            bg-brand-blue
            text-white
            shadow-[0_14px_38px_rgba(18,61,148,0.38)]
            transition-all
            duration-300
            hover:shadow-[0_18px_46px_rgba(18,61,148,0.48)]
          "
        >
          {/* Call Now */}
          <a
            href={`tel:+91${contact.phones[0]}`}
            onClick={() =>
              trackEvent("phone_click", {
                location: "hero_bottom_cta",
              })
            }
            className="
              inline-flex
              items-center
              gap-2
              whitespace-nowrap
              px-5
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
              transition-colors
              hover:bg-white/10
              sm:px-6
              sm:text-sm
            "
          >
            <Phone size={16} />
            Call Now
          </a>

          {/* Divider */}
          <span className="h-6 w-px bg-white/25" />

          {/* Quick Quote */}
          <button
            type="button"
            onClick={() => {
              trackEvent("quote_button_click", {
                location: "hero_bottom_cta",
              });

              openModal({
                source: "hero_bottom_cta",
              });
            }}
            className="
              inline-flex
              items-center
              gap-2
              whitespace-nowrap
              px-5
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
              transition-colors
              hover:bg-white/10
              sm:px-6
              sm:text-sm
            "
          >
            Get Quick Quote
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}