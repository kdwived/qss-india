import {
  UserCog, Fingerprint, CalendarClock, Wallet2, ShieldCheck,
  LayoutDashboard, MessageSquareWarning, FileBarChart2, Radio, FileX2, Clock3, Eye,
} from "lucide-react";
import { omsFeatures, omsBenefits, omsWorkflow } from "@/data/content";
import Reveal from "./Reveal";

const icons = [
  UserCog, Fingerprint, CalendarClock, Wallet2, ShieldCheck,
  LayoutDashboard, MessageSquareWarning, FileBarChart2,
];

const benefitIcons = [Radio, FileX2, Clock3, Eye];

export default function OMS() {
  return (
    <section id="oms" className="relative bg-navy-950 pt-10 pb-24 md:pt-14 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.18] pointer-events-none" />
      <div className="container-px relative">
        <Reveal className="max-w-2xl mb-6">
          <p className="text-white/35 text-xs uppercase tracking-wide">
            Platform overview — illustrative interface
          </p>
        </Reveal>

        {/* Mock dashboard frame */}
        <Reveal className="card-glass rounded-sm p-2 mb-14 overflow-hidden">
          <div className="rounded-sm bg-navy-900/80 border border-white/5 p-5 md:p-7">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <span className="text-white/40 text-xs ml-3">QSS OMS — Client Dashboard</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Monitoring
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Staff on Duty", value: "312" },
                { label: "Sites Monitored", value: "104" },
                { label: "Open Tickets", value: "3" },
                { label: "Attendance Today", value: "98.4%" },
              ].map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/5 rounded-sm p-4">
                  <p className="heading-display text-xl md:text-2xl font-semibold text-white">
                    {m.value}
                  </p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wide mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14" stagger={0.05}>
          {omsFeatures.map((f, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <div key={f.title} className="card-glass rounded-sm p-6">
                <Icon size={20} className="text-brand-skyblue mb-4" />
                <h3 className="text-white font-semibold text-sm mb-3">{f.title}</h3>
                <ul className="space-y-1.5">
                  {f.items.map((it) => (
                    <li key={it} className="text-white/50 text-xs leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">
              Benefits
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {omsBenefits.map((b, i) => {
                const Icon = benefitIcons[i] ?? ShieldCheck;
                return (
                  <div key={b} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-brand-skyblue shrink-0" />
                    <span className="text-white/70 text-sm">{b}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-5">
              Online Workflow
            </h3>
            <div className="flex flex-wrap gap-2">
              {omsWorkflow.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 text-white/60 bg-white/5">
                    {step}
                  </span>
                  {i < omsWorkflow.length - 1 && (
                    <span className="text-white/20 text-xs">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
