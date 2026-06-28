import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sevenSacraments, parish } from "../data";

export const metadata = {
  title: "The Seven Sacraments | Holy Family Parish – Kamias",
  description:
    "The seven sacraments of the Catholic Church at Holy Family Parish, West Kamias, Quezon City — including Baptism and Confession.",
};

const icons = {
  water: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
    </svg>
  ),
  dove: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7c3 0 5 2 5 5 0 0-2-1-4-1-3 0-5 2-7 4-3 3-7 3-7 3s2-4 4-7c-1-1-2-3-2-5 0 0 3 1 5 3 1-1 3-2 6-2" />
      <circle cx="17" cy="6" r="0.6" fill="currentColor" />
    </svg>
  ),
  eucharist: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <path d="M7 9h10a5 5 0 0 1-5 5 5 5 0 0 1-5-5Z" />
      <path d="M12 14v5M9 19h6" />
    </svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c2.5 3 4 5 4 8a4 4 0 1 1-8 0c0-1.5.5-2.5 1.5-3.5C10 9 11 8 12 3Z" />
    </svg>
  ),
  anointing: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10Z" />
      <path d="M12 11v5M9.5 13.5h5" />
    </svg>
  ),
  book: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6c2-.5 5-.5 8 1 3-1.5 6-1.5 8-1v12c-2-.5-5-.5-8 1-3-1.5-6-1.5-8-1Z" />
      <path d="M12 7v12" />
      <path d="M12 3.5V5M11.2 4.2h1.6" />
    </svg>
  ),
  rings: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="14" r="6" />
      <circle cx="16" cy="14" r="6" />
      <path d="M12 4l2 3h-4l2-3Z" />
    </svg>
  ),
};

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function FeaturedCard({ s }) {
  const cardClass =
    "group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gold/30 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-10";
  const inner = (
    <>
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
          {icons[s.icon]}
        </span>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
            Main Sacrament
          </span>
          <h3 className="font-display text-2xl font-semibold text-navy">
            {s.title}
          </h3>
        </div>
      </div>
      {s.schedule && (
        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-teal">
          {s.schedule}
        </p>
      )}
      <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-navy/70">
        {s.detail}
      </p>
      {s.href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-navy/60 transition-colors group-hover:text-gold">
          View details
          <ArrowIcon />
        </span>
      )}
    </>
  );

  return s.href ? (
    <Link href={s.href} className={cardClass}>
      {inner}
    </Link>
  ) : (
    <div className={cardClass}>{inner}</div>
  );
}

function SacramentCard({ s }) {
  const cardClass =
    "group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg";
  const inner = (
    <>
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
        {icons[s.icon]}
      </span>
      <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
      <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-navy/70">
        {s.detail}
      </p>
      {s.href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-navy/60 transition-colors group-hover:text-gold">
          View details
          <ArrowIcon />
        </span>
      )}
    </>
  );

  return s.href ? (
    <Link href={s.href} className={cardClass}>
      {inner}
    </Link>
  ) : (
    <div className={cardClass}>{inner}</div>
  );
}

export default function SacramentsPage() {
  const main = sevenSacraments.filter((s) => s.main);
  const others = sevenSacraments.filter((s) => !s.main);

  return (
    <main>
      <Header />

      {/* Banner */}
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div className="cross-pattern absolute inset-0 opacity-40" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-36 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-soft">
            Grace &amp; Sacraments
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-cream sm:text-6xl">
            The Seven Sacraments
          </h1>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-cream/80">
            The sacraments are efficacious signs of grace, instituted by Christ
            and entrusted to the Church. Here is how you can receive them in our
            parish.
          </p>
        </div>
      </section>

      {/* Featured main sacraments */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              Most Requested
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-navy/70">
              Baptism and Confession are the sacraments most often celebrated in
              the daily life of our parish.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {main.map((s) => (
              <FeaturedCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Other sacraments */}
      <section className="bg-parchment py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              The Other Sacraments
            </h2>
            <div className="gold-rule mx-auto my-5" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <SacramentCard key={s.title} s={s} />
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-light leading-relaxed text-navy/60">
            To arrange any sacrament, please coordinate with the parish office or
            message us on{" "}
            <a
              href={parish.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal underline decoration-gold/60 underline-offset-4 hover:text-gold"
            >
              Facebook
            </a>
            .
          </p>

          <div className="mt-10 text-center">
            <a
              href="/#sacraments"
              className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-navy/70 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold hover:decoration-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
