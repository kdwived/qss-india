import { Target, Compass, Gem } from "lucide-react";
import { vision, mission, coreValues } from "@/data/content";
import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section className="relative bg-navy-900 py-24 md:py-28 border-t border-white/5">
      <div className="container-px">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mx-auto justify-center">Vision, Mission & Values</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl font-semibold text-white mt-5">
            What Drives QSS India
          </h2>
        </Reveal>

        <Reveal className="grid md:grid-cols-3 gap-6" stagger={0.12}>
          <div className="card-glass rounded-sm p-8">
            <Compass className="text-brand-skyblue mb-5" size={28} />
            <h3 className="heading-display text-xl font-semibold text-white mb-3">Vision</h3>
            <p className="text-white/60 text-sm leading-relaxed">{vision}</p>
          </div>
          <div className="card-glass rounded-sm p-8">
            <Target className="text-brand-skyblue mb-5" size={28} />
            <h3 className="heading-display text-xl font-semibold text-white mb-3">Mission</h3>
            <p className="text-white/60 text-sm leading-relaxed">{mission}</p>
          </div>
          <div className="card-glass rounded-sm p-8">
            <Gem className="text-brand-skyblue mb-5" size={28} />
            <h3 className="heading-display text-xl font-semibold text-white mb-3">Core Values</h3>
            <ul className="space-y-2.5">
              {coreValues.map((v) => (
                <li key={v} className="flex items-center gap-2.5 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-skyblue shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
