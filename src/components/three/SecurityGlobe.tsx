"use client";

import { useRef, useMemo, useState, useEffect, MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { INDIA_OUTLINE } from "./indiaOutline";

/**
 * QSS hero visual — a single, dense particle-built security shield with
 * a bold checkmark at its core. Every particle carries its own colour
 * (electric blue → pale white) for depth, the shield breathes
 * continuously, a slow "wave" of particles drifts gently outward and
 * resettles on a loop, and the whole thing physically parts around the
 * cursor and springs back when it leaves.
 *
 * `pointerRef` carries live NDC pointer coordinates (-1..1, or far outside
 * that range when the cursor isn't over the hero visual) from HeroCanvas,
 * captured via a window-level listener so the existing pointer-events-none
 * hero layout does not need to change.
 */

const REPEL_RADIUS = 0.4;
const REPEL_STRENGTH = 0.16;
const SPRING = 0.1;
const DAMPING = 0.78;

const REACT_RADIUS = 1.6;
const BREATHE_SPEED = 1.05;
const BREATHE_AMOUNT = 0.05;

const DISPERSE_CYCLE = 11; // seconds for one full sweep through the particle set
const DISPERSE_WINDOW = 0.05; // fraction of the cycle a given particle is "active"
const DISPERSE_AMOUNT = 0.045; // how far an active particle drifts outward

const SHIELD_SCALE = 1.55;

type PointerState = { x: number; y: number };

/**
 * A soft circular sprite (white-hot core fading to transparent) so
 * particles read as glowing orbs rather than hard GPU squares.
 */
function useDotTexture() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, "rgba(30,64,175,1)");
    grad.addColorStop(0.25, "rgba(37,99,235,0.95)");
    grad.addColorStop(0.55, "rgba(59,130,246,0.50)");
    grad.addColorStop(1, "rgba(147,197,253,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** A hand-authored heraldic shield silhouette, centred on the origin. */
function shieldShape(): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(-0.6, 0.58);
  s.bezierCurveTo(-0.6, 0.76, -0.32, 0.84, 0, 0.84);
  s.bezierCurveTo(0.32, 0.84, 0.6, 0.76, 0.6, 0.58);
  s.lineTo(0.6, 0.02);
  s.bezierCurveTo(0.6, -0.44, 0.32, -0.78, 0, -0.98);
  s.bezierCurveTo(-0.32, -0.78, -0.6, -0.44, -0.6, 0.02);
  s.lineTo(-0.6, 0.58);
  return s;
}

/** Ray-cast point-in-polygon test against a THREE.Shape's outline. */
function pointInShape(shape: THREE.Shape, x: number, y: number, resolution = 48): boolean {
  const pts = shape.getPoints(resolution);
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i].x;
    const yi = pts[i].y;
    const xj = pts[j].x;
    const yj = pts[j].y;
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Sample a filled band around a straight segment (not just the centre
 * line) so the stroke reads as a bold, thick mark rather than a thin
 * wire of dots.
 */
function sampleThickSegment(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  lengthSteps: number,
  widthSteps: number,
  thickness: number,
  rand: () => number
): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 0.0001;
  const nx = -dy / len;
  const ny = dx / len;
  for (let i = 0; i < lengthSteps; i++) {
    const tt = i / Math.max(1, lengthSteps - 1);
    const cx = x1 + dx * tt;
    const cy = y1 + dy * tt;
    for (let w = 0; w < widthSteps; w++) {
      const wt = widthSteps === 1 ? 0 : (w / (widthSteps - 1) - 0.5) * 2;
      const offset = wt * (thickness / 2) + (rand() - 0.5) * thickness * 0.15;
      out.push({ x: cx + nx * offset, y: cy + ny * offset });
    }
  }
  return out;
}

const PALE = new THREE.Color("#1e40af");       // QSS brand blue — deep
const SOFT_BLUE = new THREE.Color("#3b82f6");  // QSS sky blue — mid

/**
 * Builds the shield's particles (positions + per-vertex colour): dense
 * nested outline contours, a dense scattered interior fill, and a bold,
 * thick checkmark — all one reactive set so the checkmark beats and
 * parts with the shield rather than sitting on top of it as a flat icon.
 */
function buildShieldParticles() {
  const shape = shieldShape();
  const positions: number[] = [];
  const colors: number[] = [];
  const rand = seededRandom(1337);
  const tmp = new THREE.Color();

  const pushPoint = (x: number, y: number, z: number, mix: number) => {
    positions.push(x, y, z);
    tmp.copy(SOFT_BLUE).lerp(PALE, mix);
    colors.push(tmp.r, tmp.g, tmp.b);
  };

  // Nested contour layers — denser and tighter-packed for a "thicker" edge
  const layerScales = [1, 0.93, 0.86, 0.78, 0.68, 0.57, 0.45, 0.33, 0.21];
  const pointsPerLayer = [96, 92, 84, 76, 66, 54, 42, 30, 18];
  layerScales.forEach((scale, li) => {
    const pts = shape.getSpacedPoints(pointsPerLayer[li]);
    pts.forEach((p, i) => {
      const jitter = ((i * 7 + li * 13) % 11) / 11 - 0.5;
      pushPoint(
        p.x * scale + jitter * 0.015,
        p.y * scale + jitter * 0.015,
        0.08 + li * 0.015,
        0.5 + rand() * 0.5
      );
    });
  });

  // Dense scattered interior fill
  const box = shape.getPoints(64).reduce(
    (acc, p) => ({
      minX: Math.min(acc.minX, p.x),
      maxX: Math.max(acc.maxX, p.x),
      minY: Math.min(acc.minY, p.y),
      maxY: Math.max(acc.maxY, p.y),
    }),
    { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
  );
  let filled = 0;
  let guard = 0;
  while (filled < 340 && guard < 8000) {
    guard++;
    const x = box.minX + rand() * (box.maxX - box.minX);
    const y = box.minY + rand() * (box.maxY - box.minY);
    const nearCheck = x > -0.24 && x < 0.32 && y > -0.2 && y < 0.3;
    if (pointInShape(shape, x, y) && !(nearCheck && rand() < 0.75)) {
      pushPoint(x, y, 0.05 + rand() * 0.1, rand() * 0.4);
      filled++;
    }
  }

  // Checkmark — bold, thick stroke, brightest element in the composition
  const checkShort = sampleThickSegment(-0.2, 0.04, -0.03, -0.15, 10, 5, 0.05, rand);
  const checkLong = sampleThickSegment(-0.03, -0.15, 0.29, 0.27, 16, 5, 0.05, rand);
  [...checkShort, ...checkLong].forEach((p) => pushPoint(p.x, p.y, 0.24, 1));

  return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
}

/**
 * The real India boundary (see indiaOutline.ts), built into a THREE.Shape
 * so we can reuse the exact same outline-sampling + interior-fill-sampling
 * pipeline as the shield and logo.
 */
function indiaShape(): THREE.Shape {
  const s = new THREE.Shape();
  INDIA_OUTLINE.forEach(([x, y], i) => (i === 0 ? s.moveTo(x, y) : s.lineTo(x, y)));
  s.closePath();
  return s;
}

function buildIndiaParticles(particleCount: number): Float32Array {
  const shape = indiaShape();
  const rand = seededRandom(5150);
  const out = new Float32Array(particleCount * 3);

  const outlinePts = shape.getSpacedPoints(Math.round(particleCount * 0.4));
  let i = 0;
  for (; i < outlinePts.length && i < particleCount; i++) {
    const jitter = ((i * 7) % 11) / 11 - 0.5;
    out[i * 3] = outlinePts[i].x + jitter * 0.015;
    out[i * 3 + 1] = outlinePts[i].y + jitter * 0.015;
    out[i * 3 + 2] = (rand() - 0.5) * 0.05;
  }

  const box = shape.getPoints(80).reduce(
    (acc, p) => ({
      minX: Math.min(acc.minX, p.x),
      maxX: Math.max(acc.maxX, p.x),
      minY: Math.min(acc.minY, p.y),
      maxY: Math.max(acc.maxY, p.y),
    }),
    { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
  );
  let guard = 0;
  while (i < particleCount && guard < 20000) {
    guard++;
    const x = box.minX + rand() * (box.maxX - box.minX);
    const y = box.minY + rand() * (box.maxY - box.minY);
    if (pointInShape(shape, x, y)) {
      out[i * 3] = x;
      out[i * 3 + 1] = y;
      out[i * 3 + 2] = (rand() - 0.5) * 0.08;
      i++;
    }
  }
  return out;
}

function usePointCloud(build: () => { positions: Float32Array; colors: Float32Array }) {
  const built = useMemo(build, [build]);
  const current = useMemo(() => built.positions.slice(), [built]);
  const velocities = useMemo(() => new Float32Array(built.positions.length), [built]);
  const phases = useMemo(() => {
    const rand = seededRandom(99);
    const n = built.positions.length / 3;
    const arr = new Float32Array(n);
    for (let i = 0; i < n; i++) arr[i] = rand();
    return arr;
  }, [built]);
  const centroid = useMemo(() => {
    const n = built.positions.length / 3;
    let cx = 0;
    let cy = 0;
    for (let i = 0; i < n; i++) {
      cx += built.positions[i * 3];
      cy += built.positions[i * 3 + 1];
    }
    return { x: cx / n, y: cy / n };
  }, [built]);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(current, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(built.colors, 3));
    return geo;
  }, [current, built]);

  return { home: built.positions, current, velocities, phases, centroid, geometry };
}

/**
 * Loads the REAL QSS India logo asset and samples its non-background
 * pixels into a particle target cloud, one entry per existing shield
 * particle (a fixed, seeded 1:1 mapping) — so the illusion is that the
 * exact same particles which form the shield travel and become the logo,
 * rather than a second, separate particle system fading in over it.
 * Runs once, client-side only; returns null until the image has decoded
 * (during which the morph target simply equals the shield itself, so
 * there is no visible effect until it's ready).
 */
function useLogoTarget(particleCount: number) {
  const [target, setTarget] = useState<Float32Array | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || particleCount <= 0) return;
    let cancelled = false;
    const img = new window.Image();
    img.src = "/images/logo/qss-logo-solid.png";
    img.onload = () => {
      if (cancelled) return;
      const sampleW = 220;
      const sampleH = Math.round(sampleW * (img.height / img.width));
      const canvas = document.createElement("canvas");
      canvas.width = sampleW;
      canvas.height = sampleH;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, sampleW, sampleH);
      const data = ctx.getImageData(0, 0, sampleW, sampleH).data;

      const candidates: { x: number; y: number; w: number; isText: boolean }[] = [];
      for (let py = 0; py < sampleH; py++) {
        for (let px = 0; px < sampleW; px++) {
          const idx = (py * sampleW + px) * 4;
          const r = data[idx];
          const gC = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];
          const luminance = (r + gC + b) / 3;
          // skip near-white background / transparent pixels; weight
          // darker/more saturated (the blue globe, the grey lettering)
          if (a > 40 && luminance < 238) {
            // greyish, mid-luminance pixels are the "QSS INDIA" lettering;
            // everything else (dark, blue-dominant) is the globe artwork
            const isGrey = Math.abs(r - gC) < 18 && Math.abs(gC - b) < 18;
            const isText = isGrey && luminance > 70 && luminance < 210;
            candidates.push({ x: px, y: py, w: 255 - luminance, isText });
          }
        }
      }
      if (candidates.length === 0) return;

      const rand = seededRandom(7331);
      const picked: { x: number; y: number }[] = [];
      const textPool: { x: number; y: number }[] = [];
      const globePool: { x: number; y: number }[] = [];
      candidates.forEach((c) => {
        const reps = c.w > 140 ? 3 : c.w > 80 ? 2 : 1;
        const pool = c.isText ? textPool : globePool;
        for (let r = 0; r < reps; r++) pool.push({ x: c.x, y: c.y });
      });
      // the lettering is a thin strip with far fewer raw pixels than the
      // globe artwork, so it gets a GUARANTEED share of the particle
      // budget rather than being drowned out in a purely pixel-weighted
      // sample — otherwise "QSS INDIA" never becomes legible
      const textBudget =
        textPool.length > 0 ? Math.round(particleCount * 0.38) : 0;
      const globeBudget = particleCount - textBudget;
      for (let i = 0; i < textBudget; i++) {
        picked.push(textPool[Math.floor(rand() * textPool.length)]);
      }
      for (let i = 0; i < globeBudget; i++) {
        picked.push(globePool[Math.floor(rand() * globePool.length)]);
      }

      // normalize into the same coordinate scale the shield lives in
      const targetW = 1.35;
      const targetH = targetW * (sampleH / sampleW);
      const out = new Float32Array(particleCount * 3);
      picked.forEach((p, i) => {
        const nx = (p.x / sampleW - 0.5) * targetW;
        const ny = -(p.y / sampleH - 0.5) * targetH;
        out[i * 3] = nx;
        out[i * 3 + 1] = ny;
        out[i * 3 + 2] = (rand() - 0.5) * 0.06;
      });

      if (!cancelled) setTarget(out);
    };

    return () => {
      cancelled = true;
    };
  }, [particleCount]);

  return target;
}

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// Scroll-progress bands: shield holds until 35%, morphs into the logo
// through 65%, then the logo morphs into the India map through 100%.
const STAGE1_END = 0.35;
const STAGE2_END = 0.65;

export default function SecurityGlobe({
  reduced,
  interactive,
  pointerRef,
  scrollProgressRef,
}: {
  reduced: boolean;
  interactive: boolean;
  pointerRef: MutableRefObject<PointerState>;
  scrollProgressRef: MutableRefObject<number>;
}) {
  const rootRef = useRef<THREE.Group>(null);
  const shieldGroupRef = useRef<THREE.Group>(null);
  const shieldPointsRef = useRef<THREE.Points>(null);

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const groundPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const pointerNdc = useMemo(() => new THREE.Vector2(), []);

  const glowState = useRef(0);
  const parallax = useRef({ x: 0, y: 0 });
  const dotTexture = useDotTexture();

  const shield = usePointCloud(buildShieldParticles);
  const logoTarget = useLogoTarget(shield.home.length / 3);
  const indiaTarget = useMemo(
    () => buildIndiaParticles(shield.home.length / 3),
    [shield.home.length]
  );

  const mouseWorld = useMemo(() => new THREE.Vector3(), []);
  const mouseLocal = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!reduced && shieldGroupRef.current) {
      shieldGroupRef.current.rotation.z = Math.sin(t * 0.15) * 0.02;
    }

    let pointerActive = false;
    let pointerInRange = false;
    if (interactive && !reduced) {
      const { x, y } = pointerRef.current;
      pointerInRange = x >= -1.4 && x <= 1.4 && y >= -1.4 && y <= 1.4;
      if (pointerInRange) {
        pointerNdc.set(x, y);
        raycaster.setFromCamera(pointerNdc, state.camera);
        pointerActive = !!raycaster.ray.intersectPlane(groundPlane, mouseWorld);
      }
    }

    // ---- parallax + a gentle downward drift through the 3-stage story ------
    const targetPX = pointerInRange ? pointerRef.current.x : 0;
    const targetPY = pointerInRange ? pointerRef.current.y : 0;
    parallax.current.x += (targetPX - parallax.current.x) * 0.06;
    parallax.current.y += (targetPY - parallax.current.y) * 0.06;
    if (rootRef.current) {
      rootRef.current.position.x = parallax.current.x * 0.12;
      const p = reduced ? 0 : scrollProgressRef.current;
      rootRef.current.position.y = parallax.current.y * 0.08 - p * 0.24;
    }

    // ---- glow target ----------------------------------------------------------
    let glowTarget = 0;
    if (pointerActive && shieldGroupRef.current) {
      shieldGroupRef.current.worldToLocal(mouseLocal.copy(mouseWorld));
      const d = Math.hypot(mouseLocal.x, mouseLocal.y);
      glowTarget = Math.max(0, 1 - d / REACT_RADIUS);
    }
    glowState.current += (glowTarget - glowState.current) * 0.08;
    const g = glowState.current;

    // ---- resolve the current story stage from scroll progress ---------------
    // 0–35%: pure shield · 35–65%: shield → logo · 65–100%: logo → India
    const scrollP = reduced ? 0 : scrollProgressRef.current;
    let shieldToLogo = 0;
    let logoToIndia = 0;
    if (scrollP <= STAGE1_END) {
      shieldToLogo = 0;
    } else if (scrollP <= STAGE2_END) {
      shieldToLogo = easeInOutCubic((scrollP - STAGE1_END) / (STAGE2_END - STAGE1_END));
    } else {
      shieldToLogo = 1;
      logoToIndia = easeInOutCubic((scrollP - STAGE2_END) / (1 - STAGE2_END));
    }
    // how "settled" a fully-formed stage is (shield or logo or map) — used
    // to fade out the idle breathing/disperse motion only while a
    // transition is actually in progress between two stages
    const settle = 1 - Math.max(
      shieldToLogo > 0 && shieldToLogo < 1 ? 1 : 0,
      logoToIndia > 0 && logoToIndia < 1 ? 1 : 0
    );
    const breathe = reduced ? 1 : 1 + Math.sin(t * BREATHE_SPEED) * BREATHE_AMOUNT * settle;
    const disperseCycle = reduced ? -1 : (t % DISPERSE_CYCLE) / DISPERSE_CYCLE;

    {
      const count = shield.home.length / 3;
      const posAttr = shield.geometry.attributes.position as THREE.BufferAttribute;

      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        let baseX = shield.home[idx];
        let baseY = shield.home[idx + 1];
        const baseZ = shield.home[idx + 2];

        // stage 1→2: the same dot that draws the shield's edge travels to
        // become part of the logo
        if (logoTarget && shieldToLogo > 0) {
          baseX = baseX + (logoTarget[idx] - baseX) * shieldToLogo;
          baseY = baseY + (logoTarget[idx + 1] - baseY) * shieldToLogo;
        }
        // stage 2→3: from wherever the logo left it, the same dot travels
        // on again to become part of the India outline
        if (logoToIndia > 0) {
          baseX = baseX + (indiaTarget[idx] - baseX) * logoToIndia;
          baseY = baseY + (indiaTarget[idx + 1] - baseY) * logoToIndia;
        }

        const hx = baseX * breathe;
        const hy = baseY * breathe;
        const hz = baseZ;

        let tx = hx;
        let ty = hy;
        const tz = hz;

        // slow wave of particles gently drifting out and resettling —
        // fades out once the logo has locked in, so it stays crisp
        if (disperseCycle >= 0 && settle > 0.05) {
          const d = Math.abs(((disperseCycle - shield.phases[i] + 1.5) % 1) - 0.5);
          if (d < DISPERSE_WINDOW) {
            const envelope = (1 - d / DISPERSE_WINDOW) * settle;
            const dx = hx - shield.centroid.x;
            const dy = hy - shield.centroid.y;
            const dist = Math.hypot(dx, dy) || 0.0001;
            tx += (dx / dist) * envelope * DISPERSE_AMOUNT;
            ty += (dy / dist) * envelope * DISPERSE_AMOUNT;
          }
        }

        // cursor repulsion stays at full strength throughout the morph —
        // on the shield, mid-travel, and on the fully-formed logo alike
        if (pointerActive) {
          const dx = hx - mouseLocal.x;
          const dy = hy - mouseLocal.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < REPEL_RADIUS * REPEL_RADIUS) {
            const dist = Math.sqrt(distSq) || 0.0001;
            const falloff = 1 - dist / REPEL_RADIUS;
            const push = falloff * falloff * REPEL_STRENGTH;
            tx += (dx / dist) * push;
            ty += (dy / dist) * push;
          }
        }

        const vx = (tx - shield.current[idx]) * SPRING;
        const vy = (ty - shield.current[idx + 1]) * SPRING;
        const vz = (tz - shield.current[idx + 2]) * SPRING;

        shield.velocities[idx] = (shield.velocities[idx] + vx) * DAMPING;
        shield.velocities[idx + 1] = (shield.velocities[idx + 1] + vy) * DAMPING;
        shield.velocities[idx + 2] = (shield.velocities[idx + 2] + vz) * DAMPING;

        shield.current[idx] += shield.velocities[idx];
        shield.current[idx + 1] += shield.velocities[idx + 1];
        shield.current[idx + 2] += shield.velocities[idx + 2];
      }
      posAttr.needsUpdate = true;
    }

    if (shieldPointsRef.current) {
      const mat = shieldPointsRef.current.material as THREE.PointsMaterial;
      const pulse = Math.sin(t * BREATHE_SPEED) * 0.009;
      mat.size = 0.068 + pulse + g * 0.032;
      mat.opacity = 0.9 + pulse * 1.2 + g * 0.1;
    }
  });

  return (
    <group ref={rootRef}>
      <group ref={shieldGroupRef} scale={SHIELD_SCALE}>
        <points ref={shieldPointsRef} geometry={shield.geometry} renderOrder={2}>
          <pointsMaterial
            vertexColors
            map={dotTexture ?? undefined}
            size={0.072}
            sizeAttenuation
            transparent
            opacity={0.85}
            blending={THREE.NormalBlending}
            depthWrite={false}
          />
        </points>
      </group>
    </group>
  );
}
