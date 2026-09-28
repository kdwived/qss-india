"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section
      className="bg-section-blue py-20 md:py-24 relative overflow-hidden"
      aria-label="Request a quote from QSS India"
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container-px relative text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 mb-6 text-blue-200 text-xs tracking-[0.2em] uppercase font-semibold">
              Get Started Today
            </div>
            <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-white heading-display mb-5">
              Ready to Partner With QSS India?
            </h2>
            <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-10">
              Whether you need security personnel, outsourced manpower, housekeeping teams or payroll
              management — we are ready to provide a customized solution for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-outline-white !rounded-xl !py-3.5">
                Contact Us
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/career" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm transition-colors py-3.5 px-4">
                Explore Careers
                <ChevronRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
