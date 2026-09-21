"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { securityServices } from "@/data/content";
import Reveal from "./Reveal";

export default function SecurityServices() {
  return (
    <section id="security" className="relative bg-navy-900 pt-10 pb-24 md:pt-14 md:pb-28 border-t border-white/5">
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      <div className="container-px relative">
        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {securityServices.map((s) => (
            <div
              key={s.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10"
            >
              <Image
                src={s.image}
                alt={`${s.title} — QSS India`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10 group-hover:from-navy-950/95 transition-all duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="heading-display text-lg font-semibold text-white leading-snug">
                    {s.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-brand-skyblue shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <p className="text-white/0 group-hover:text-white/65 text-sm leading-relaxed mt-2 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                  {s.description}
                </p>
              </div>

              <div className="absolute top-4 left-4 w-8 h-[1px] bg-brand-skyblue/60" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
