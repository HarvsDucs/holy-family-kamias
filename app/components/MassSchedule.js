import { sundayMass, weekdayMass, saturdayMass } from "../data";

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MassSchedule() {
  return (
    <section id="mass" className="relative bg-navy-deep py-24 text-cream">
      <div className="cross-pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-soft">
            Join Us in Prayer
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Mass Schedule
          </h2>
          <div className="gold-rule mx-auto my-6" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Sunday — featured */}
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 shadow-xl ring-1 ring-gold/30 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy-deep">
                <ClockIcon />
              </span>
              <h3 className="font-display text-3xl font-semibold text-gold">
                Sunday Mass
              </h3>
            </div>
            <ul className="divide-y divide-cream/10">
              {sundayMass.map((m) => (
                <li
                  key={`${m.time}-${m.note}`}
                  className="flex items-center justify-between py-3"
                >
                  <span className="font-display text-xl font-semibold text-cream">
                    {m.time}
                  </span>
                  <span className="text-sm font-normal text-cream/75">{m.note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weekday + Saturday */}
          <div className="grid gap-8">
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-cream/10 backdrop-blur sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-cream">
                  <ClockIcon />
                </span>
                <h3 className="font-display text-2xl font-semibold text-cream">
                  Weekday Mass
                </h3>
              </div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-teal">
                {weekdayMass.days}
              </p>
              <div className="flex flex-wrap gap-3">
                {weekdayMass.times.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-cream/10 px-5 py-2 font-display text-lg font-semibold text-cream"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-cream/10 backdrop-blur sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skyblue text-navy-deep">
                  <ClockIcon />
                </span>
                <h3 className="font-display text-2xl font-semibold text-cream">
                  Saturday Mass
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {saturdayMass.times.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-cream/10 px-5 py-2 font-display text-lg font-semibold text-cream"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-light text-cream/60">
          Schedules may change on solemnities and holy days. Please check our
          Facebook page for announcements.
        </p>
      </div>
    </section>
  );
}
