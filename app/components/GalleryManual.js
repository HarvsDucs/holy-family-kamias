"use client";

import { useRef } from "react";
import { galleryPhotos } from "../data";
import GalleryTile from "./GalleryTile";

export default function GalleryManual() {
  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">
              A Glimpse of Our Parish
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
              Parish Gallery
            </h2>
            <p className="mt-3 max-w-xl text-base font-light leading-relaxed text-navy/70">
              A look at the life of our community — our church, celebrations, and
              ministries. More photos coming soon; swipe or use the arrows to
              explore.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="scroller-custom mt-8 flex snap-x snap-mandatory overflow-x-auto px-6 pb-5 sm:px-[max(1.5rem,calc((100vw-72rem)/2))]"
      >
        {galleryPhotos.map((photo, i) => (
          <GalleryTile key={i} photo={photo} i={i} className="snap-center" />
        ))}
      </div>
    </section>
  );
}
