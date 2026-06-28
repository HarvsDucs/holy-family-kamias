import Image from "next/image";
import { parish, nav } from "../data";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/95">
                <Image
                  src="/assets/emblem.png"
                  alt="Holy Family Parish Kamias logo"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold">{parish.name}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold-soft">
                  {parish.location}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-cream/65">
              A Roman Catholic community in West Kamias, Quezon City, gathered in
              the spirit of the Holy Family.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              Explore
            </p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-light text-cream/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              Connect
            </p>
            <ul className="space-y-2 text-sm font-light text-cream/75">
              <li className="leading-relaxed">{parish.address}</li>
              <li>
                <a
                  href={`mailto:${parish.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {parish.email}
                </a>
              </li>
              <li>
                <a
                  href={parish.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center">
          <p className="font-display text-base italic text-gold-soft">
            &ldquo;For where two or three are gathered in my name, there am I
            among them.&rdquo; — Matthew 18:20
          </p>
          <p className="mt-4 text-xs font-light text-cream/50">
            © {parish.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
