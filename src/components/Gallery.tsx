"use client";

import Image from "next/image";
import { galleryImages } from "@/data/content";
import { useState, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const open = useCallback((i: number) => setLightboxIdx(i), []);
  const close = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() =>
    setLightboxIdx((idx) => (idx === null ? null : (idx - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const next = useCallback(() =>
    setLightboxIdx((idx) => (idx === null ? null : (idx + 1) % galleryImages.length)),
    []
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [close, prev, next]);

  return (
    <section
      id="gallery"
      className="bg-section-light py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="container-px">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-4">Gallery</div>
          <h2
            id="gallery-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-900 heading-display mb-4"
          >
            Field Operations &amp; Team Deployments
          </h2>
          <p className="text-ink-500 text-base leading-relaxed">
            A glimpse of QSS India teams in action — from security deployments and hospitality
            assignments to training and event management.
          </p>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05}>
              <button
                className="gallery-item w-full block break-inside-avoid mb-4 rounded-xl overflow-hidden group"
                onClick={() => open(i)}
                aria-label={`View full size: ${img.alt}`}
              >
                <div className="relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={480}
                    height={320}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="gallery-overlay rounded-xl">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <ZoomIn size={28} aria-hidden="true" />
                      <span className="text-xs font-medium tracking-wide">{img.category}</span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${galleryImages[lightboxIdx].alt}`}
          onKeyDown={handleKeyDown}
          onClick={close}
          tabIndex={-1}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={close}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIdx].src}
              alt={galleryImages[lightboxIdx].alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[85vh]"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-white text-sm font-medium">{galleryImages[lightboxIdx].alt}</p>
              <p className="text-white/60 text-xs mt-0.5">{galleryImages[lightboxIdx].category}</p>
            </div>
          </div>

          {/* Image count */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs">
            {lightboxIdx + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
