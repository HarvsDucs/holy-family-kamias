const gradients = [
  "from-navy to-navy-light",
  "from-teal to-skyblue",
  "from-navy-deep to-teal",
  "from-skyblue to-navy",
];

function PhotoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 16-5-5L5 22" />
    </svg>
  );
}

export default function GalleryTile({ photo, i, className = "" }) {
  return (
    <figure className={`mr-5 w-72 shrink-0 sm:w-80 ${className}`}>
      <div
        className={`relative flex aspect-[4/3] flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl bg-gradient-to-br text-cream/75 shadow-md ring-1 ring-navy/10 ${
          gradients[i % gradients.length]
        }`}
      >
        {photo.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.image}
            alt={photo.caption}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <PhotoIcon />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream/50">
              Photo coming soon
            </span>
          </>
        )}
      </div>
      <figcaption className="mt-3 px-1 text-sm font-medium text-navy/80">
        {photo.caption}
      </figcaption>
    </figure>
  );
}
