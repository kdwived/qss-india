import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Counter from "./Counter";
import Reveal from "./Reveal";
import { workforceCategories } from "@/data/content";

export default function Manpower() {
  return (
    <section id="manpower" className="relative bg-navy-950 py-24 md:py-28">
      <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="order-2 lg:order-1 relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
            <Image
              src="/images/security/team-lineup-02.jpg"
              alt="QSS India skilled manpower and workforce team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          </div>
          <div className="absolute -top-6 -right-4 md:-right-8 card-glass rounded-sm px-7 py-5">
            <div className="heading-display text-3xl md:text-4xl font-semibold text-white">
              <Counter value={1800} suffix="+" />
            </div>
            <p className="text-white/50 text-xs uppercase tracking-wide mt-1">Workforce Deployed</p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mb-6">
            Skilled & Semi-Skilled Workforce
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            From technical staff and computer operators to supervisors and
            custom-recruited specialists — QSS India covers the full spectrum
            of on-site roles, all sourced and managed under one contract.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
            {workforceCategories.map((c) => (
              <div key={c} className="flex items-center gap-2.5">
                <CheckCircle2 size={17} className="text-brand-skyblue shrink-0" />
                <span className="text-white/75 text-sm">{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
