import {
  Award, ShieldCheck, FileCheck2, SlidersHorizontal, Building2, Workflow,
} from "lucide-react";
import { advantages, targetClients } from "@/data/content";
import Reveal from "./Reveal";

const icons = [Award, ShieldCheck, FileCheck2, SlidersHorizontal, Building2, Workflow];

export default function WhyQSS() {
  return (
    <section className="relative bg-navy-950 py-24 md:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl mb-14">
          <span className="section-label">Why QSS India</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mt-5">
            Competitive Advantages
          </h2>
        </Reveal>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20" stagger={0.08}>
          {advantages.map((a, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <div key={a.title} className="card-glass rounded-sm p-7">
                <Icon size={22} className="text-brand-skyblue mb-4" />
                <h3 className="text-white font-semibold text-[15px] mb-2">{a.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{a.description}</p>
              </div>
            );
          })}
        </Reveal>

        <Reveal>
          <h3 className="heading-display text-xl md:text-2xl font-semibold text-white mb-8 text-center">
            Organizations We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {targetClients.map((c) => (
              <span
                key={c}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
