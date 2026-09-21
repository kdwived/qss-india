"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import SecurityGlobe from "./SecurityGlobe";

/**
 * Tracks the pointer globally (window-level, not a canvas DOM listener) so
 * the existing pointer-events-none hero wrapper never has to change — we
 * only need the cursor's position, not hit-testing on the 3D layer.
 * Coordinates are normalized to the wrapper's own bounding box, in the same
 * -1..1 NDC convention Three.js expects for raycasting.
 *
 * Also tracks scroll progress through the hero's own scroll-track wrapper
 * (the `h-[100svh] md:h-[180vh]` div in Hero.tsx that makes the hero
 * `sticky`), feeding a 0..1 value to SecurityGlobe that drives the
 * shield → logo particle morph. On mobile the track has no extra height
 * (no pin), so this naturally stays at 0 there — the morph is a desktop
 * scroll-storytelling enhancement, not a mobile behavior change.
 */
export default function HeroCanvas() {
  const [reduced, setReduced] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 999, y: 999 });
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerMq = window.matchMedia("(pointer: fine)");
    setReduced(motionMq.matches);
    setInteractive(pointerMq.matches);

    const onMotionChange = () => setReduced(motionMq.matches);
    const onPointerChange = () => setInteractive(pointerMq.matches);
    motionMq.addEventListener("change", onMotionChange);
    pointerMq.addEventListener("change", onPointerChange);

    const onMove = (e: PointerEvent) => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      pointerRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerRef.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    // Passive window-level listener: works regardless of pointer-events
    // on the hero's decorative layers, and naturally "deactivates" the
    // effect (via out-of-range NDC) whenever the cursor is elsewhere.
    window.addEventListener("pointermove", onMove, { passive: true });

    const onScroll = () => {
      const track = wrapperRef.current?.closest("#home")?.parentElement;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      scrollProgressRef.current =
        scrollable > 1 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      motionMq.removeEventListener("change", onMotionChange);
      pointerMq.removeEventListener("change", onPointerChange);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.75]}
      >
        <Suspense fallback={null}>
          <SecurityGlobe
            reduced={reduced}
            interactive={interactive}
            pointerRef={pointerRef}
            scrollProgressRef={scrollProgressRef}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
