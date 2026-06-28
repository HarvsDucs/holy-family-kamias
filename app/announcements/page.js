import Header from "../components/Header";
import Footer from "../components/Footer";
import { announcements } from "../data";

export const metadata = {
  title: "Announcements | Holy Family Parish – Kamias",
  description:
    "Latest announcements, events, and notices from Holy Family Parish in West Kamias, Quezon City.",
};

export default function AnnouncementsPage() {
  return (
    <main>
      <Header />

      {/* Banner */}
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div className="cross-pattern absolute inset-0 opacity-40" />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-36 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-soft">
            Parish Bulletin
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-cream sm:text-6xl">
            Announcements
          </h1>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-cream/80">
            Stay up to date with parish news, upcoming events, and important
            notices. Please check back regularly for the latest updates.
          </p>
        </div>
      </section>

      {/* Announcements list */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-4 text-center text-sm font-medium text-navy/70">
            These are placeholder announcements. Edit them in{" "}
            <code className="rounded bg-navy/5 px-1.5 py-0.5 font-mono text-xs text-navy">
              app/data.js
            </code>{" "}
            with your actual parish updates.
          </div>

          <div className="space-y-6">
            {announcements.map((a) => (
              <article
                key={a.title}
                className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                    {a.category}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-teal">
                    {a.date}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-navy sm:text-3xl">
                  {a.title}
                </h2>
                <p className="mt-3 text-base font-light leading-relaxed text-navy/70">
                  {a.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#home"
              className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-navy/70 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold hover:decoration-gold"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
