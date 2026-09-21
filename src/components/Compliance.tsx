import { ShieldCheck } from "lucide-react";
import { compliance } from "@/data/content";
import Reveal from "./Reveal";

export default function Compliance() {
  return (
    <section className="relative bg-navy-900 py-24 md:py-28 border-t border-white/5">
      <div className="container-px">
        <Reveal className="max-w-2xl mb-14">
          <span className="section-label">Compliance & Certifications</span>
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white mt-5">
            Fully Registered, Fully Compliant
          </h2>
          <p className="text-white/55 mt-5 leading-relaxed">
            All registrations are fully compliant with Indian statutory requirements.
            We ensure complete adherence to labor laws, employee welfare regulations,
            and tax compliance for every deployed worker.
          </p>
        </Reveal>

        <Reveal className="card-glass rounded-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-white/50 font-medium">
                  Registration
                </th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-white/50 font-medium">
                  Details
                </th>
                <th className="px-6 py-4 text-xs uppercase tracking-wider text-white/50 font-medium text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {compliance.map((c, i) => (
                <tr
                  key={c.label}
                  className={i !== compliance.length - 1 ? "border-b border-white/5" : ""}
                >
                  <td className="px-6 py-4 text-white font-medium text-sm">{c.label}</td>
                  <td className="px-6 py-4 text-white/60 text-sm font-mono">{c.value}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                      <ShieldCheck size={13} />
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
