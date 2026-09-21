"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { processSteps, mobilizationTimeline } from "@/data/content";

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !trackRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      const nodes = gsap.utils.toArray<HTMLElement>(".process-node");
      nodes.forEach((node, i) => {
        gsap.fromTo(
          node,
          { opacity: 0.25 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: trackRef.current,
              start: `top+=${i * 90} 75%`,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative bg-navy-900 py-24 md:py-28 border-t border-white/5">
      <div className="container-px">
        <div className="max-w-2xl mb-16">
          <h2 className="heading-display font-display text-3xl md:text-4xl xl:text-5xl font-semibold text-white">
            From Requirement to Continuous Improvement
          </h2>
        </div>

        <div ref={trackRef} className="relative">
          <div className="absolute left-0 top-5 right-0 h-[2px] bg-white/10 hidden lg:block" />
          <div
            ref={lineRef}
            className="absolute left-0 top-5 right-0 h-[2px] bg-brand-skyblue hidden lg:block origin-left"
          />

          <div className="grid lg:grid-cols-9 gap-y-10 gap-x-2">
            {processSteps.map((step, i) => (
              <div key={step.title} className="process-node relative lg:pt-12">
                <div className="hidden lg:flex w-3 h-3 rounded-full bg-brand-skyblue absolute -top-[7px] left-0 ring-4 ring-navy-900" />
                <span className="text-brand-skyblue text-xs font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-semibold text-sm mt-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-white/45 text-xs mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustrative mobilization framework */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-10">
            <h3 className="heading-display text-xl md:text-2xl font-semibold text-white">
              Illustrative Mobilization Framework
            </h3>
            <span className="text-white/35 text-xs uppercase tracking-wide">
              Typical 30-day onboarding pattern
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mobilizationTimeline.map((m) => (
              <div key={m.title} className="card-glass rounded-sm p-5 text-center">
                <p className="text-brand-skyblue text-xs font-mono mb-2">{m.days}</p>
                <p className="text-white font-semibold text-sm">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
