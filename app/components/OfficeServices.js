import Link from "next/link";
import { officeServices } from "../data";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const icons = {
  candle: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c1.6 1.6 1.6 3.2 0 4.8-1.6-1.6-1.6-3.2 0-4.8Z" />
      <rect x="9" y="9" width="6" height="11" rx="1" />
      <path d="M12 7.3V9" />
      <path d="M7 20h10" />
    </svg>
  ),
  card: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M12 8.5v5M9.5 11h5" />
    </svg>
  ),
  certificate: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h7l4 4v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v4h4" />
      <circle cx="12" cy="12.5" r="2.2" />
      <path d="M10.6 14.2 10 18l2-1 2 1-.6-3.8" />
    </svg>
  ),
  rings: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="14" r="6" />
      <circle cx="16" cy="14" r="6" />
      <path d="M12 4l2 3h-4l2-3Z" />
    </svg>
  ),
  door: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17" />
      <path d="M4 21h16" />
      <path d="M13 12h.01" />
    </svg>
  ),
};

export default function OfficeServices() {
  return (
    <section id="office" className="relative bg-navy-deep py-24 text-cream">
      <div className="cross-pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-soft">
            How We Can Help
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Parish Office Services
          </h2>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-cream/75">
            The parish office is here to assist you with sacramental records,
            celebrations, and parish facilities. Visit us during office hours or
            message us on Facebook to get started.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {officeServices.map((s) => {
            const cardClass =
              "group flex flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-cream/10 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10 hover:ring-gold/30";
            const inner = (
              <>
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy-deep">
                  {icons[s.icon]}
                </span>
                <h3 className="font-display text-2xl font-semibold text-cream">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-cream/75">
                  {s.detail}
                </p>
                {s.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-gold-soft transition-colors group-hover:text-gold">
                    View details
                    <ArrowIcon />
                  </span>
                )}
              </>
            );

            return s.href ? (
              <Link key={s.title} href={s.href} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <div key={s.title} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
