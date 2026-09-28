"use client";

import { omsFeatures, omsBenefits } from "@/data/content";
import {
  Users, Clock, CalendarDays, Banknote, ShieldCheck,
  LayoutDashboard, MessageSquare, BarChart3, Zap
} from "lucide-react";
import Reveal from "./Reveal";

const featureIcons: React.ReactNode[] = [
  <Users size={20} key="u" />,
  <Clock size={20} key="cl" />,
  <CalendarDays size={20} key="cd" />,
  <Banknote size={20} key="bn" />,
  <ShieldCheck size={20} key="sc" />,
  <LayoutDashboard size={20} key="ld" />,
  <MessageSquare size={20} key="ms" />,
  <BarChart3 size={20} key="bc" />,
];

const benefitIcons: React.ReactNode[] = [
  <Zap size={18} key="z" />,
  <BarChart3 size={18} key="b" />,
  <Clock size={18} key="c" />,
  <ShieldCheck size={18} key="s" />,
];

export default function OMS() {
  return (
    <section
      id="technology"
      className="bg-section-pale py-20 md:py-28"
      aria-labelledby="oms-heading"
    >
      <div className="container-px">
        {/* Header */}
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-4">Technology</div>
          <h2
            id="oms-heading"
            className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-navy-900 heading-display mb-4"
          >
            Online Management System
            <span className="block text-brand-blue">(OMS)</span>
          </h2>
          <p className="text-ink-500 text-base leading-relaxed">
            QSS India uses a cloud-based Online Management System for transparent, real-time
            management of all security, housekeeping and outsourced manpower deployments.
          </p>
        </Reveal>

        {/* Benefits strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {omsBenefits.map((benefit, i) => (
            <Reveal key={benefit} delay={i * 0.08}>
              <div className="card-blue p-5 text-center flex flex-col items-center gap-2.5">
                <span className="text-blue-200" aria-hidden="true">{benefitIcons[i]}</span>
                <span className="text-white font-semibold text-sm">{benefit}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Feature modules grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {omsFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="card-light p-6 h-full flex flex-col gap-3">
                <div className="icon-wrapper-blue" aria-hidden="true">
                  {featureIcons[i] ?? <Zap size={20} />}
                </div>
                <h3 className="font-semibold text-navy-900 text-sm">{feature.title}</h3>
                <ul className="space-y-1.5 flex-1">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-ink-500 text-xs">
                      <span className="w-1 h-1 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Workflow visual */}
        <Reveal className="mt-16">
          <div className="bg-white border border-surface-border rounded-2xl p-8 shadow-card">
            <h3 className="font-semibold text-navy-900 text-center mb-8 text-lg">
              End-to-End Digital Workflow
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {[
                "Requirement",
                "Work Order",
                "Recruitment",
                "Verification",
                "Training",
                "Uniform & ID",
                "Deployment",
                "Attendance",
                "Monitoring",
                "Client Feedback",
                "MIS",
                "Payroll & Compliance",
                "Continuous Improvement",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-brand-pale border border-brand-soft rounded-lg text-xs font-semibold text-brand-blue whitespace-nowrap">
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-brand-skyblue font-bold text-sm" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
