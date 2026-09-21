import Image from "next/image";
import { housekeepingServices } from "@/data/content";
import Reveal from "./Reveal";

export default function Housekeeping() {
  return (
    <section className="relative bg-navy-900 py-24 md:py-28 border-t border-white/5">
      <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="section-label">Housekeeping Services</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mt-5 mb-6">
            Facility Cleaning & Hygiene Management
          </h2>
          <div className="space-y-5">
            {housekeepingServices.map((h) => (
              <div key={h.title} className="border-l-2 border-brand-blue/40 pl-5 py-1">
                <h3 className="text-white font-semibold text-[15px]">{h.title}</h3>
                <p className="text-white/55 text-sm mt-1 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
          <p className="text-white/45 text-sm mt-7 italic">
            Eco-friendly approach: modern equipment, green cleaning products and
            sustainable practices with regular quality inspections.
          </p>
        </Reveal>

        <Reveal className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
          <Image
            src="/images/hospitality/resort-team-01.jpg"
            alt="QSS India housekeeping and facility team at a premium property"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
