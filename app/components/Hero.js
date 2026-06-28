import Image from "next/image";
import { parish } from "../data";

export default function Hero({ bgImage = "/assets/inside_church.jpg" }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep text-cream"
    >
      {/* Background photo + readability overlay */}
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/70 to-navy-deep/90" />
      <div className="cross-pattern absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
        <div className="reveal mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-cream/95 shadow-2xl ring-4 ring-gold/40 sm:h-40 sm:w-40">
          <Image
            src="/assets/emblem.png"
            alt="Holy Family Parish Kamias logo"
            width={200}
            height={200}
            className="h-24 w-24 object-contain sm:h-32 sm:w-32"
            priority
          />
        </div>

        <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold-soft">
          Roman Catholic Church
        </p>

        <h1 className="reveal font-display text-5xl font-semibold leading-tight text-cream sm:text-6xl md:text-7xl">
          Holy Family Parish
          <span className="mt-2 block text-3xl font-normal text-gold sm:text-4xl">
            Kamias, Quezon City
          </span>
        </h1>

        <div className="gold-rule reveal mx-auto my-7" />

        <p className="reveal mx-auto max-w-xl text-lg font-light leading-relaxed text-cream/85">
          A community gathered in faith, hope, and love — following the example
          of the Holy Family of Jesus, Mary, and Joseph. All are welcome at the
          Lord&apos;s table.
        </p>

        <div className="reveal mt-10 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#mass"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy-deep shadow-lg transition-all hover:bg-gold-soft hover:shadow-xl"
            >
              Mass Schedule
            </a>
            <a
              href="#visit"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:border-gold hover:text-gold"
            >
              Visit Us
            </a>
          </div>
          <a
            href="#office"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-cream/85 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold hover:decoration-gold"
          >
            Parish Office Services
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
