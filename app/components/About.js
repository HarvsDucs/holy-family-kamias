export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">
            Our Parish
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Welcome Home
          </h2>
          <div className="gold-rule mx-auto my-6" />
        </div>

        <div className="mx-auto mt-6 max-w-3xl space-y-6 text-center text-lg font-light leading-relaxed text-navy/80">
          <p>
            Holy Family Parish in West Kamias is a vibrant Roman Catholic
            community in the heart of Quezon City. Inspired by the Holy Family
            of Jesus, Mary, and Joseph, we strive to be a home where every
            person encounters the love of God.
          </p>
          <p>
            Whether you are a lifelong parishioner or visiting for the first
            time, you are warmly invited to join us in worship, prayer, and
            service. Come and be part of our family of faith.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Faith",
              text: "Rooted in the Eucharist and the teachings of the Catholic Church.",
            },
            {
              title: "Family",
              text: "A welcoming community that journeys together in every season of life.",
            },
            {
              title: "Service",
              text: "Reaching out in charity to our neighbors and those in need.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-navy/10 bg-white/60 p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <span className="h-3 w-3 rounded-full bg-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-navy/70">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
