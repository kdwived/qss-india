"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/content";

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;

    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionMq.matches) {
      setCount(value);
      return;
    }

    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [isVisible, value]);

  return (
    <span>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative bg-brand-blue py-14 md:py-16 overflow-hidden"
      aria-label="QSS India key statistics"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container-px relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${
                i < stats.length - 1
                  ? "md:border-r md:border-white/20"
                  : ""
              }`}
            >
              <div
                className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-white heading-display"
                aria-label={`${s.value}${s.suffix} ${s.label}`}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} isVisible={visible} />
              </div>
              <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.15em] text-blue-200 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
