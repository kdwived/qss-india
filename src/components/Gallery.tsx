"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galleryImages } from "@/data/content";

export default function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(galleryImages.map((g) => g.category)))],
    []
  );
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter)),
    [filter]
  );

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, next, prev]);

  return (
    <section id="gallery" className="relative bg-navy-900 pt-10 pb-24 md:pt-14 md:pb-28 border-t border-white/5">
      <div className="container-px">
        <div className="flex flex-wrap gap-2.5 mb-10 mt-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wide transition-colors duration-200 border ${
                filter === c
                  ? "bg-brand-blue border-brand-blue text-white"
                  : "border-white/15 text-white/55 hover:border-white/35 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full mb-4 overflow-hidden rounded-sm border border-white/10 break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-colors duration-300 flex items-center justify-center">
                <Expand
                  size={22}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wide bg-navy-950/70 text-white/80 px-2.5 py-1 rounded-full">
                {img.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 md:p-10"
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2"
            onClick={close}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <p className="text-center text-white/60 text-sm mt-4">
              {filtered[lightboxIndex].category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
