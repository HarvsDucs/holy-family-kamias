import Link from "next/link";
import { sevenSacraments } from "../data";

export default function Sacraments() {
  return (
    <section id="sacraments" className="relative bg-parchment py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">
            Grace &amp; Sacraments
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Sacramental Life
          </h2>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-navy/70">
            The sacraments are sacred signs of God&apos;s grace. We are honored
            to walk with you through every milestone of your faith journey.
          </p>
        </div>

        <Link
          href="/sacraments"
          className="group mt-12 flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-12"
        >
          <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v18M5 8h14M7 21h10" />
              <path d="M9 8c0 2 1 3 3 3s3-1 3-3" />
            </svg>
          </span>
          <h3 className="font-display text-3xl font-semibold text-navy">
            The Seven Sacraments
          </h3>
          <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-navy/70">
            From Baptism to Matrimony, discover the seven sacraments of the
            Church and how to receive them in our parish.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {sevenSacraments.map((s) => (
              <span
                key={s.title}
                className={`rounded-full px-4 py-1.5 text-xs font-medium ${
                  s.main
                    ? "bg-gold/20 text-navy ring-1 ring-gold/40"
                    : "bg-parchment text-navy/70"
                }`}
              >
                {s.title}
              </span>
            ))}
          </div>

          <span className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wider text-navy-deep shadow transition-all group-hover:bg-gold-soft">
            Explore the Sacraments
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
