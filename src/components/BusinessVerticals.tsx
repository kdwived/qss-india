import {
  Users, ShieldCheck, SprayCan, ConciergeBell, Wallet, FileText,
} from "lucide-react";
import { businessVerticals } from "@/data/content";
import Reveal from "./Reveal";

const icons = [Users, ShieldCheck, SprayCan, ConciergeBell, Wallet, FileText];

export default function BusinessVerticals() {
  return (
    <section id="services" className="relative bg-navy-950 py-24 md:py-28">
      <div className="container-px">
        <Reveal className="max-w-2xl mb-16">
          <span className="section-label">Nature of Our Business</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mt-5">
            Six Pillars of Integrated Workforce Solutions
          </h2>
        </Reveal>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {businessVerticals.map((v, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <div
                key={v.title}
                className="group relative card-glass rounded-sm p-7 hover:border-brand-skyblue/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-sm bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center mb-5 group-hover:bg-brand-blue/25 transition-colors">
                  <Icon size={20} className="text-brand-skyblue" />
                </div>
                <h3 className="heading-display text-lg font-semibold text-white mb-2.5">
                  {v.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
