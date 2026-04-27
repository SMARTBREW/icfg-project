"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryItem,
} from "@/constants/gallery";

type Filter = "all" | GalleryCategory;

type Props = {
  items: readonly GalleryItem[];
};

export default function GalleryGrid({ items }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((idx) =>
      idx === null ? null : (idx - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((idx) =>
      idx === null ? null : (idx + 1) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const chip = (id: Filter, label: string) => {
    const isActive = filter === id;
    return (
      <button
        key={id}
        type="button"
        onClick={() => setFilter(id)}
        aria-pressed={isActive}
        className={`rounded-full px-4 py-2 font-['Inter'] text-[0.82rem] font-[500] tracking-[-0.01em] transition ${
          isActive
            ? "border border-transparent bg-[color:var(--icfg-forest)] text-white shadow-sm"
            : "border border-gray-200 bg-white text-gray-700 hover:border-[color:var(--icfg-leaf)]/50 hover:text-[color:var(--icfg-forest)]"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div
        className="mt-8 flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter gallery"
      >
        {chip("all", "All")}
        {GALLERY_CATEGORIES.map((c) => chip(c.id, c.label))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 font-['Inter'] text-[0.95rem] text-gray-600">
          Nothing here yet—check back soon.
        </p>
      ) : (
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filtered.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white text-left shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:border-[color:var(--icfg-leaf)]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                aria-label={`Open ${item.caption}`}
              >
                <figure className="overflow-hidden">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="font-['Inter'] text-[0.85rem] font-[500] tracking-[-0.02em] text-gray-800">
                      {item.caption}
                    </span>
                    <span className="font-['Inter'] text-[0.7rem] font-[500] uppercase tracking-[0.18em] text-[color:var(--icfg-forest)]">
                      {GALLERY_CATEGORIES.find((c) => c.id === item.category)?.label}
                    </span>
                  </figcaption>
                </figure>
              </button>
            </li>
          ))}
        </ul>
      )}

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:top-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4l-6.29 6.3-1.42-1.42L9.17 12 2.88 5.71l1.42-1.42 6.29 6.3 6.29-6.3 1.42 1.42Z" />
            </svg>
          </button>
          {filtered.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6-6-6Z" />
                </svg>
              </button>
            </>
          ) : null}
          <figure
            className="relative max-h-[88vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-black">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                  preload
                />
              </div>
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white">
              <span className="font-['Inter'] text-[0.95rem] font-[500] tracking-[-0.01em]">
                {active.caption}
              </span>
              <span className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.18em] text-white/70">
                {GALLERY_CATEGORIES.find((c) => c.id === active.category)?.label}
                <span className="px-2 text-white/40" aria-hidden>
                  |
                </span>
                {(lightboxIndex ?? 0) + 1} / {filtered.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
