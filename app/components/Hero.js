import Image from "next/image";
import { parish } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep text-cream"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
      <div className="cross-pattern absolute inset-0 opacity-60" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
        <div className="reveal mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-cream/95 shadow-2xl ring-4 ring-gold/40 sm:h-40 sm:w-40">
          <Image
            src="/assets/main-pic.png"
            alt="Holy Family Parish Kamias logo"
            width={140}
            height={140}
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

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
