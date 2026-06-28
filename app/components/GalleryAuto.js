"use client";

import { useEffect, useRef } from "react";
import { galleryPhotos } from "../data";
import GalleryTile from "./GalleryTile";

export default function GalleryAuto() {
  const ref = useRef(null);
  // Duplicate the set so we can loop seamlessly (reset at the halfway point).
  const items = [...galleryPhotos, ...galleryPhotos];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let paused = false;
    let raf;
    let pos = 0; // track position as a float (scrollLeft can round to int and stall)
    const speed = 0.3; // pixels per frame (~18px/s at 60fps)

    const tick = () => {
      const half = el.scrollWidth / 2;
      if (!paused && half > 0) {
        pos += speed;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => (paused = true);
    const resume = () => (paused = false);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Option A · Auto-scrolling
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Parish Gallery
          </h2>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-navy/70">
            Photos glide by on their own. Hover to pause. A relaxed, hands-off
            feel — good for a continuously running showcase.
          </p>
        </div>
      </div>

      <div ref={ref} className="mt-10 flex overflow-x-hidden">
        {items.map((photo, i) => (
          <GalleryTile key={i} photo={photo} i={i % galleryPhotos.length} />
        ))}
      </div>
    </section>
  );
}
