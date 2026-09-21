import Counter from "./Counter";
import Reveal from "./Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="relative bg-navy-900 border-y border-white/5 py-14 md:py-16">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container-px relative">
        <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6" stagger={0.1}>
          {stats.map((s) => (
            <div key={s.label} className="text-center md:border-r md:last:border-r-0 border-white/10">
              <div className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.15em] text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
