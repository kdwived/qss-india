"use client";

import { advantages } from "@/data/content";
import {
  Clock, Shield, CheckCircle2, Settings, MapPin, Layers,
} from "lucide-react";
import Reveal from "./Reveal";

const icons: React.ReactNode[] = [
  <Clock size={22} key="clock" />,
  <Shield size={22} key="shield" />,
  <CheckCircle2 size={22} key="check" />,
  <Settings size={22} key="settings" />,
  <MapPin size={22} key="map" />,
  <Layers size={22} key="layers" />,
];

export default function WhyQSS() {
  return (
    <section
      id="why-qss"
      className="bg-section-white py-20 md:py-28"
      aria-labelledby="why-heading"
    >
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — header + intro */}
          <Reveal>
            <div>
              <div className="section-label mb-4">Why Choose QSS India</div>
              <h2
                id="why-heading"
                className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-navy-900 heading-display mb-6"
              >
                What Sets Us Apart From the Rest
              </h2>
              <p className="text-ink-500 text-base leading-relaxed mb-8">
                With over 25 years of trusted operations across government and private sectors,
                QSS India has built a reputation on reliability, compliance, and genuine
                commitment to client satisfaction. Here is why leading organizations choose us.
              </p>

              {/* Featured highlight card */}
              <div className="card-blue p-6">
                <p className="text-lg font-semibold text-white mb-2">
                  "Our people are our product."
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Every member of the QSS workforce undergoes thorough background verification,
                  medical check-up, and 40+ hours of professional training before being deployed
                  — so you receive personnel who are skilled, reliable and compliant on Day 1.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — advantages grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 0.1}>
                <div className="card-pale p-5 flex flex-col gap-3">
                  <div className="icon-wrapper-blue" aria-hidden="true">
                    {icons[i] ?? <Shield size={22} />}
                  </div>
                  <h3 className="font-semibold text-navy-900 text-sm leading-snug">
                    {adv.title}
                  </h3>
                  <p className="text-ink-500 text-xs leading-relaxed">{adv.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
