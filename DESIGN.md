# HSS Advocates & Legal Consultants — Design System

## Direction

A premium UAE law firm in natural daylight: white architecture, soft
blue institutional detail, deep navy typography, restrained gold
authority. Bright, premium, trustworthy, Emirati, elegant, calm —
never clinical, never corporate-template, never washed out.

This replaced an earlier black + gold identity. The composition,
typography, spacing, imagery and animation of every section are
unchanged; only color, surface and contrast were converted.

## Palette

Centralized as CSS custom properties in `src/index.css` (`@theme`
block). Components should reference these tokens — via Tailwind's
generated utilities (`bg-ivory`, `text-navy`, `border-hairline`, …) or
`var(--color-*)` in inline styles — rather than hardcoded hex values.

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0A1F2D` (deep navy) | Strong dark surfaces: closing consultation CTA, footer, mobile menu |
| `--color-paper` | `#102A3A` (navy) | Primary foreground text on every light section |
| `--color-gold` | `#CEA344` | Accent — highlighted headline words, eyebrow lines, timeline progress, icons, primary CTA |
| `--color-gold-dark` | `#8A6A24` | Gold hover/active state |
| `--color-hairline` | `rgba(16,42,58,0.12)` | Default divider on light sections |
| `--color-ivory` | `#FAF9F6` | The Firm background |
| `--color-warm-white` | `#F7F5F0` | Hero / Authority Strip background |
| `--color-light-blue` | `#EEF5F8` | Hashim Experience / Our Approach background |
| `--color-blue-surface` | `#E5F0F5` | Secondary light-blue surface |
| `--color-blue-border` | `#C9DCE5` | Pale blue-gray border/track accents |
| `--color-navy` | `#102A3A` | Alias of `paper`, for explicit inline use |
| `--color-deep-navy` | `#0A1F2D` | Alias of `ink`, for explicit inline use |
| `--color-slate` | `#536773` | New usages wanting a distinct muted tone (existing components mostly get this effect via `text-navy/NN` opacity) |
| `--color-muted` | `#71828B` | Lighter muted tone |

Approximate distribution: 60–65% white/ivory, 20–25% pale blue,
8–10% deep navy, 5–8% gold. Gold stays an accent — never a background
fill beyond the primary CTA and small details.

### Why `ink`/`paper`/`hairline` still exist

These three names carried the black+gold system (`ink` = black
surface, `paper` = white text, `hairline` = dark divider). Rather than
rename them everywhere, they were repointed to the new palette (`ink` →
deep navy, `paper` → navy, `hairline` → pale blue-gray). Every
component already written against `bg-ink` / `text-paper` /
`border-hairline` converted automatically. The two sections that stay
genuinely dark — the consultation CTA and the footer — opt back into
literal `text-white` instead of `text-paper`, since that token is navy
now and would be invisible on their navy background.

## Section rhythm

The page deliberately alternates rather than using one flat white:

1. **Header / Hero** — warm white, image-led (soft light veil over the
   approved photo, not a black overlay)
2. **The Firm** — warm ivory
3. **Hashim Experience** — pale blue-gray (timeline animation
   unchanged — only its colors moved to gold-on-pale-blue)
4. **Areas of Practice** — clean white/ivory (unchanged — this section
   was already bright; only its hardcoded charcoal hex values were
   migrated to the navy token)
5. **Our Approach** — light blue
6. **Consultation CTA** — deep navy (intentional dark close)
7. **Footer** — deep navy

Deep navy is used sparingly (roughly 10–15% of the page) and only for
the closing CTA, footer and mobile navigation drawer — never large
black/navy blocks elsewhere.

## Buttons

- **Primary**: gold background, deep navy text, sharp corners. Hover:
  `gold-dark`.
- **Secondary (light sections)**: transparent background, navy
  text/border — this falls out of the `paper` token automatically.
- **Secondary (navy sections)**: transparent background, white
  text/border (used nowhere currently, but the pattern is there if a
  future navy section needs it).

No gradients, no glow, no rounded pills.

## Imagery

Every photographic section kept its original approved image. Overlay
treatment changed from black-based scrims to warm-white / ivory /
pale-blue veils matching that section's target background, with a
`brightness`/`saturate` filter tuned per image rather than a uniform
value. The goal throughout: the photograph stays visible and
realistic, never flattened to a solid color, while foreground text
gets enough of a light panel behind it to stay legible.

## Typography

Unchanged — Playfair Display / EB Garamond site-wide, Cormorant
Garamond / Manrope for the hero and every section built after it
(header, hero, The Firm onward). Only color and contrast were part of
this conversion.

## Motion

Unchanged. The Hashim scroll-linked timeline, Areas of Practice
hover/tilt, Our Approach reveals and the CTA hover interaction all use
their original logic — only the colors driving those states (gold vs.
pale-blue-gray for inactive/active timeline nodes, navy vs. gold for
hover text) moved to the new palette.

## Principles retained from the previous system

- Editorial serif display type paired with restrained sans body/UI
  type
- Sharp geometry — no rounded corners, no pill buttons, no
  glassmorphism
- Cinematic, real photography — never stock imagery invented for this
  conversion
- Generous negative space
- Restrained, purposeful motion
- Zero decorative elements beyond gold hairlines and icons
