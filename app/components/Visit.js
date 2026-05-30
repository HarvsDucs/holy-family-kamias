import { parish } from "../data";

function Row({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-navy">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-teal">
          {label}
        </p>
        <div className="mt-1 text-navy/85">{children}</div>
      </div>
    </div>
  );
}

export default function Visit() {
  const mapsQuery = encodeURIComponent(
    "Holy Family Parish West Kamias Quezon City"
  );

  return (
    <section id="visit" className="relative bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">
            Come &amp; See
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Visit Us
          </h2>
          <div className="gold-rule mx-auto my-6" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <div className="space-y-7">
            <Row
              label="Address"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            >
              <p className="leading-relaxed">{parish.address}</p>
            </Row>

            <Row
              label="Email"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              }
            >
              <a
                href={`mailto:${parish.email}`}
                className="transition-colors hover:text-gold"
              >
                {parish.email}
              </a>
            </Row>

            <Row
              label="Facebook"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.300000000000004c-1.2 0-1.6.8-1.6 1.6v1.9H17l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z" />
                </svg>
              }
            >
              <a
                href={parish.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                {parish.facebookLabel}
              </a>
            </Row>

            <div className="rounded-2xl border border-navy/10 bg-white/70 p-6">
              <p className="font-display text-xl font-semibold text-navy">
                Parish Office
              </p>
              <p className="mt-2 text-sm font-light leading-relaxed text-navy/70">
                For baptism arrangements, sacrament appointments, certificates,
                and other concerns, please coordinate with the parish office or
                message us on Facebook.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-navy/10">
            <iframe
              title="Map to Holy Family Parish Kamias"
              src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
