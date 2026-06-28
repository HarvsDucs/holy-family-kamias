import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { weddingInfo, parish } from "../data";

export const metadata = {
  title: "Church Weddings | Holy Family Parish – Kamias",
  description:
    "Schedule, requirements, and reminders for church weddings at Holy Family Parish, West Kamias, Quezon City.",
};

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 16-5-5L5 22" />
    </svg>
  );
}

export default function WeddingsPage() {
  return (
    <main>
      <Header />

      {/* Banner */}
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div className="cross-pattern absolute inset-0 opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-36 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-soft">
            {weddingInfo.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-cream sm:text-6xl">
            {weddingInfo.title}
          </h1>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-cream/80">
            {weddingInfo.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 grid gap-5 sm:grid-cols-2">
            {weddingInfo.images.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-navy/10"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={i === 0}
                  />
                ) : (
                  <div
                    className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br text-cream/75 ${
                      i % 2 === 0 ? "from-navy to-navy-light" : "from-teal to-skyblue"
                    }`}
                  >
                    <PhotoIcon />
                    <span className="px-6 text-center text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream/50">
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                  Reserving Your Date
                </h2>
                <div className="gold-rule my-4" />
                <p className="text-base font-light leading-relaxed text-navy/75">
                  {weddingInfo.schedule}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                  Good to Know
                </h2>
                <div className="gold-rule my-4" />
                <ul className="space-y-3">
                  {weddingInfo.reminders.map((r) => (
                    <li
                      key={r}
                      className="flex gap-3 text-base font-light leading-relaxed text-navy/75"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
              <h2 className="font-display text-2xl font-semibold text-navy">
                Requirements
              </h2>
              <div className="gold-rule my-4" />
              <ul className="space-y-4">
                {weddingInfo.requirements.map((req) => (
                  <li key={req} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-teal">
                      <CheckIcon />
                    </span>
                    <span className="text-sm font-light leading-relaxed text-navy/75">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-navy/10 pt-5 text-sm font-light leading-relaxed text-navy/65">
                To reserve a date or ask about requirements, please coordinate
                with the parish office or message us on{" "}
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
            </aside>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#office"
              className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-navy/70 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold hover:decoration-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Back to Parish Office Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
