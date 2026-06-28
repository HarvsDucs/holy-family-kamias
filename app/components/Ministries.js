import Link from "next/link";
import { ministries } from "../data";

export default function Ministries() {
  return (
    <section id="ministries" className="relative bg-parchment py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">
            Get Involved
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Parish Ministries
          </h2>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-navy/70">
            There is a place for everyone in the life of our parish. Discover the
            many ministries where you can share your gifts, grow in faith, and
            serve God and one another.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {ministries.map((m) => (
            <span
              key={m.name}
              className="rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-medium text-navy/80 shadow-sm"
            >
              {m.name}
            </span>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ministries"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy-deep shadow-lg transition-all hover:bg-gold-soft hover:shadow-xl"
          >
            Explore Our Ministries
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
