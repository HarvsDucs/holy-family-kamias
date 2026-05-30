# Holy Family Parish – Kamias

A website for Holy Family Parish, a Roman Catholic church in West Kamias, Quezon City. Built with **Next.js (App Router)** and **Tailwind CSS v4**.

## Run it

```bash
npm install      # first time only
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Sections

- **Hero** – parish logo, name, and welcome
- **About** – mission and the parish's three pillars (Faith, Family, Service)
- **Mass Schedule** – Sunday, weekday, and Saturday Mass times
- **Sacraments** – Confession, Baptism, and other sacraments
- **Visit Us** – address, email, Facebook, and an embedded map

## Editing parish info

All the text content (Mass times, sacrament schedules, address, email, Facebook
link, navigation) lives in **one place**: `app/data.js`. Edit that file and the
whole site updates — no need to touch the component files.

## Brand colors

Derived from the parish logo, defined in `app/globals.css`:

- Navy `#173a5e`, Deep Navy `#0f2a45`
- Gold `#f4b41a`
- Teal `#1b9e9e`
- Sky blue `#6ba8d6`
- Cream `#faf6ee`

## Images

The parish logo and source graphics are in `public/assets/`.
