import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ministries, parish } from "../data";

export const metadata = {
  title: "Parish Ministries | Holy Family Parish – Kamias",
  description:
    "Discover and join the ministries of Holy Family Parish, West Kamias, Quezon City — share your gifts and serve the community.",
};

// Rotating accent gradients for the placeholder pictures.
const placeholders = [
  "from-navy to-navy-light",
  "from-teal to-skyblue",
  "from-navy-deep to-teal",
  "from-skyblue to-navy",
];

function PhotoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 16-5-5L5 22" />
    </svg>
  );
}

export default function MinistriesPage() {
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
            Share Your Gifts
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-cream sm:text-6xl">
            Parish Ministries
          </h1>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-cream/80">
            Every gift and talent has a place in the mission of the Church.
            Explore our ministries below and answer the call to serve — we would
            be blessed to have you join us.
          </p>
        </div>
      </section>

      {/* Ministries grid */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m, i) => (
              <article
                key={m.name}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Placeholder picture */}
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${
                    placeholders[i % placeholders.length]
                  } text-cream/70`}
                >
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <PhotoIcon />
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-xl font-semibold leading-snug text-navy">
                    {m.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-navy/70">
                    {m.blurb}
                  </p>
                  <a
                    href={`mailto:${parish.email}?subject=${encodeURIComponent(
                      `Joining the ${m.name}`
                    )}&body=${encodeURIComponent(
                      `Hello! I would like to learn more about joining the ${m.name}.`
                    )}`}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-teal transition-colors hover:text-gold"
                  >
                    Join this ministry
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-light leading-relaxed text-navy/60">
            Interested in serving but not sure where to begin? Visit the parish
            office or message us on{" "}
            <a
              href={parish.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal underline decoration-gold/60 underline-offset-4 hover:text-gold"
            >
              Facebook
            </a>{" "}
            and we will help you find your place.
          </p>

          <div className="mt-10 text-center">
            <a
              href="/#home"
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
