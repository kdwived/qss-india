"use client";

import { vision, mission, coreValues } from "@/data/content";
import { Eye, Target, Heart } from "lucide-react";
import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="bg-section-pale py-20 md:py-28"
      aria-labelledby="vm-heading"
    >
      <div className="container-px">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-4">Our Foundation</div>
          <h2
            id="vm-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-900 heading-display"
          >
            Vision, Mission &amp; Values
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <Reveal delay={0}>
            <div className="card-light p-8 text-center flex flex-col items-center gap-5 h-full">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-blue">
                <Eye size={26} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900 heading-display mb-3">
                  Our Vision
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{vision}</p>
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={0.12}>
            <div className="card-blue p-8 text-center flex flex-col items-center gap-5 h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-white">
                <Target size={26} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white heading-display mb-3">
                  Our Mission
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">{mission}</p>
              </div>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal delay={0.24}>
            <div className="card-light p-8 text-center flex flex-col items-center gap-5 h-full">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-blue">
                <Heart size={26} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900 heading-display mb-4">
                  Our Values
                </h3>
                <ul className="space-y-2">
                  {coreValues.map((v) => (
                    <li key={v} className="flex items-center justify-center gap-2 text-ink-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" aria-hidden="true" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
