/**
 * HASHIM_HERO_PORTRAIT
 *
 * The hero's central visual subject. No photograph of Hashim Salem Saif has
 * been supplied to this project — only the firm's logo and a Dubai skyline
 * shot exist as real assets. Per instruction, this is deliberately left as
 * a clearly-marked placeholder rather than a stock photo or a generated
 * likeness of a person who doesn't exist: drop a real portrait in as an
 * <img>/<picture> here (object-fit: cover, no border, no corner radius) and
 * the surrounding reveal/parallax wrapper needs no other changes.
 *
 * Composition: centre-right, extending from just below the header to the
 * bottom of the hero, in front of the skyline layer (HeroMedia). The mask
 * softens the top and side edges so it dissolves into black rather than
 * reading as a hard-edged card; the bottom stays solid, as if the frame
 * simply crops him. Hidden below md: the mobile hero is a single stacked
 * text column with no room beside it for a side portrait without
 * colliding with the headline, so mobile stays text-only on black (same
 * treatment as HeroMedia).
 */
export function HashimPortrait() {
  const maskImage =
    'radial-gradient(ellipse 78% 115% at 50% 100%, black 42%, black 58%, transparent 96%)'

  return (
    <div
      className="pointer-events-none absolute right-[8%] top-[13%] hidden h-[87%] w-[36%] opacity-0 [animation:portrait-reveal_1s_0.3s_ease-out_forwards] md:block"
      aria-hidden="true"
    >
      <div
        className="relative h-full w-full"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        {/* Placeholder tonal field — swap this whole inner block for a real
            <img src="/hero/hashim-salem-saif.jpg" ... /> when a portrait exists */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(200deg, #1c160f 0%, #100c08 45%, #0a0807 100%)',
          }}
        />
        {/* Soft rim light from the skyline side, suggesting window light on a figure */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 45% at 88% 30%, rgba(206,163,68,0.16) 0%, rgba(206,163,68,0) 70%)',
          }}
        />
        {/* Gentle vertical form suggestion — never a literal face or figure */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.35) 100%)',
          }}
        />
      </div>
    </div>
  )
}
