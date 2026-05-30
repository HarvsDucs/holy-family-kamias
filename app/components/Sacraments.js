import { sacraments } from "../data";

const icons = {
  dove: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7c3 0 5 2 5 5 0 0-2-1-4-1-3 0-5 2-7 4-3 3-7 3-7 3s2-4 4-7c-1-1-2-3-2-5 0 0 3 1 5 3 1-1 3-2 6-2" />
      <circle cx="17" cy="6" r="0.6" fill="currentColor" />
    </svg>
  ),
  water: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />
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

export default function Sacraments() {
  return (
    <section id="sacraments" className="relative bg-parchment py-24">
      <div className="mx-auto max-w-6xl px-6">
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

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {sacraments.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                {icons[s.icon]}
              </span>
              <h3 className="font-display text-2xl font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-teal">
                {s.schedule}
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-navy/70">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
