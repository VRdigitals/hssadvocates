# HSS Advocates & Legal Consultants — Website

Vite + React + TypeScript + Tailwind CSS v4.

## Scope

This repository currently implements **only the header and hero section**
of the HSS Advocates & Legal Consultants website, per the brand and design
brief. No sections below the hero (practice areas, about, footer, etc.)
have been built.

## Structure

```
src/
  components/
    Header.tsx          Transparent → solid-on-scroll site header
    MobileMenu.tsx       Full-screen editorial mobile navigation
    Hero.tsx             Hero section shell (media + content + authority strip)
    HeroMedia.tsx         HASHIM_HERO_MEDIA — dedicated portrait media slot
    HeroContent.tsx       Eyebrow, headline, supporting copy, Hashim identifier
    HeroActions.tsx       Primary/secondary hero CTAs
    AuthorityStrip.tsx    Bottom credential strip inside the hero
    PrimaryButton.tsx     Reusable gold CTA button
    GhostButton.tsx       Reusable outlined secondary button
    navLinks.ts            Shared navigation link data
```

## Notes

- `HeroMedia` renders a tasteful dark gradient placeholder in place of a
  Hashim Salem Saif portrait (no portrait asset exists in the project yet).
  Swap in a real `<img>`/`<video>` per the comment in that file once one is
  supplied.
- Respects `prefers-reduced-motion`.

## Development

```
npm install
npm run dev      # local dev server
npm run build    # production build (runs tsc -b && vite build)
npm run preview  # preview the production build
```
