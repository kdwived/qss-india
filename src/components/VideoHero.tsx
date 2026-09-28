"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, Shield, Users, Star } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { trackEvent } from "@/config/analytics";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const { openModal } = useQuoteModal();

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "clamp(560px, 88vh, 920px)" }}
      aria-label="QSS India — Professional Security and Manpower Services"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
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

      {/* Main overlay - keeps original video visible */}
      <div
        className="absolute inset-0 bg-black/20"
        aria-hidden="true"
      />

      {/* Bottom gradient for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55"
        aria-hidden="true"
      />

      {/* Side vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#071c45]/25 via-transparent to-[#071c45]/10"
        aria-hidden="true"
      />

      {/* Very subtle blue tone - NOT heavy */}
      <div
        className="absolute inset-0 bg-blue-900/[0.08]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-2 backdrop-blur-md sm:px-5">
            <Shield
              size={15}
              className="text-blue-300"
              aria-hidden="true"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs sm:tracking-[0.28em]">
              25+ Years of Professional Service · PSARA Licensed
            </span>
          </div>

          {/* Heading */}
          <h1
            className="max-w-5xl font-display font-bold uppercase leading-[0.92] tracking-[-0.025em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 6.6rem)",
            }}
          >
            Quick Security
            <br />

            <span className="text-[#dbe8ff]">
              Services India
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="mt-6 max-w-3xl font-medium leading-relaxed text-white/90 drop-shadow-md"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
            }}
          >
            Professional Security. Reliable Manpower. Responsible Service.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                trackEvent("security_services_click", {
                  location: "video_hero",
                });

                openModal({
                  source: "video_hero",
                });
              }}
              className="
                inline-flex items-center gap-2
                rounded-lg
                bg-[#164bc5]
                px-7 py-4
                text-sm font-semibold text-white
                shadow-[0_12px_35px_rgba(22,75,197,0.35)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#103b9d]
              "
            >
              <Shield size={17} aria-hidden="true" />
              Request Security Services
            </button>

            <Link
              href="/services"
              className="
                inline-flex items-center gap-2
                rounded-lg
                border border-white/60
                bg-black/15
                px-7 py-4
                text-sm font-semibold text-white
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-[#0d2c63]
              "
            >
              <Users size={17} aria-hidden="true" />
              Explore Our Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {[
              {
                icon: <Star size={15} />,
                text: "25+ Years Experience",
              },
              {
                icon: <Users size={15} />,
                text: "1800+ Workforce",
              },
              {
                icon: <Shield size={15} />,
                text: "350+ Security Personnel",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-white/15
                  bg-black/15
                  px-3 py-2
                  text-xs font-medium text-white/90
                  backdrop-blur-sm
                  sm:text-sm
                "
              >
                <span className="text-blue-300" aria-hidden="true">
                  {item.icon}
                </span>

                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="
          absolute bottom-7 right-7 z-20
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-white/30
          bg-black/25
          text-white
          backdrop-blur-md
          transition-all duration-300
          hover:bg-white hover:text-[#123d94]
          no-print
        "
        aria-label={paused ? "Play hero video" : "Pause hero video"}
      >
        {paused ? (
          <Play size={17} fill="currentColor" />
        ) : (
          <Pause size={17} />
        )}
      </button>

      {/* Scroll indicator */}
      <a
        href="#hero-main"
        className="
          absolute bottom-6 left-1/2 z-20
          hidden -translate-x-1/2
          flex-col items-center gap-2
          text-white/70
          transition-colors hover:text-white
          lg:flex
          no-print
        "
        aria-label="Scroll down to explore"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.35em]">
          Explore
        </span>

        <span className="flex h-8 w-5 justify-center rounded-full border border-white/50 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-white animate-bounce" />
        </span>
      </a>
    </section>
  );
}