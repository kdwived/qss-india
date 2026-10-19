"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";
import { contact } from "@/data/content";

const banners = [
  "QSS India Security Team Banner.png",
  "QSS India Security Team Banner (1).png",
  "QSS India Security Team Banner (3).png",
].map((name) => `/new%20qss/hero/${encodeURIComponent(name)}`);

export default function ImageHero() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => {
      if (timer) clearInterval(timer);
      if (!motion.matches) {
        timer = setInterval(() => {
          setActive((current) => {
            const next = (current + 1) % banners.length;
            return loaded[next] ? next : current;
          });
        }, 4500);
      }
    };
    update();
    motion.addEventListener("change", update);
    return () => {
      if (timer) clearInterval(timer);
      motion.removeEventListener("change", update);
    };
  }, [loaded]);
  const { openModal } = useQuoteModal();

  return (
    <section
      className="relative w-full overflow-hidden bg-navy-950 pt-[71px] lg:pt-[144px]"
      aria-label="QSS India — Professional Security and Manpower Services"
    >
      <div className="relative aspect-[8/3] w-full">
      {/* Keep every decoded banner mounted for a seamless crossfade. */}
      {banners.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={index === 0 ? "QSS India uniformed security team outside a commercial building" : ""}
          aria-hidden={index !== 0}
          fill
          sizes="100vw"
          priority
          fetchPriority={index === 0 ? "high" : "low"}
          loading={index === 0 ? undefined : "eager"}
          onLoad={() => setLoaded((current) => current[index] ? current : current.map((ready, i) => i === index || ready))}
          className={`object-contain object-center transition-opacity duration-1000 motion-reduce:transition-none ${active === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      </div>

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
          relative
          z-20
          mx-auto
          w-fit
          max-w-full
          px-3
          py-4
          sm:py-5
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
              px-3 sm:px-5
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
              px-3 sm:px-5
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