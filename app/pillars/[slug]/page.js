import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { pillars } from "../../data";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return {};
  return {
    title: `${pillar.title} | Holy Family Parish – Kamias`,
    description: pillar.intro,
  };
}

const gradients = [
  "from-navy to-navy-light",
  "from-teal to-skyblue",
  "from-navy-deep to-teal",
];

function PhotoIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 16-5-5L5 22" />
    </svg>
  );
}

export default async function PillarPage({ params }) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) notFound();

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
            {pillar.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-cream sm:text-6xl">
            {pillar.title}
          </h1>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-cream/80">
            {pillar.intro}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl space-y-16 px-6 sm:space-y-24">
          {pillar.sections.map((s, i) => (
            <div
              key={s.heading}
              className={`flex flex-col gap-8 lg:items-center lg:gap-12 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Placeholder picture */}
              <div className="lg:w-1/2">
                <div
                  className={`relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-br text-cream/75 shadow-lg ring-1 ring-navy/10 ${
                    gradients[i % gradients.length]
                  }`}
                >
                  {s.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.image} alt={s.heading} className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <>
                      <PhotoIcon />
                      <span className="px-6 text-center text-sm font-medium">
                        {s.imageLabel}
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream/50">
                        Photo coming soon
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="lg:w-1/2">
                <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
                  {s.heading}
                </h2>
                <div className="gold-rule my-5" />
                <p className="text-base font-light leading-relaxed text-navy/75 sm:text-lg">
                  {s.text}
                </p>
              </div>
            </div>
          ))}

          <div className="text-center">
            <a
              href="/#about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-navy/70 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold hover:decoration-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Back to About
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
