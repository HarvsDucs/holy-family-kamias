import Link from "next/link";
import { pillars } from "../data";

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">
            Our Parish
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Welcome Home
          </h2>
          <div className="gold-rule mx-auto my-6" />
        </div>

        <div className="mx-auto mt-6 max-w-3xl space-y-6 text-center text-lg font-light leading-relaxed text-navy/80">
          <p>
            Holy Family Parish in West Kamias is a vibrant Roman Catholic
            community in the heart of Quezon City. Inspired by the Holy Family
            of Jesus, Mary, and Joseph, we strive to be a home where every
            person encounters the love of God.
          </p>
          <p>
            Whether you are a lifelong parishioner or visiting for the first
            time, you are warmly invited to join us in worship, prayer, and
            service. Come and be part of our family of faith.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/pillars/${pillar.slug}`}
              className="group flex flex-col rounded-2xl border border-navy/10 bg-white/60 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 transition-colors group-hover:bg-gold/25">
                <span className="h-3 w-3 rounded-full bg-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-navy/70">
                {pillar.card}
              </p>
              <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-teal transition-colors group-hover:text-gold">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
