/**
 * HSS_HERO_BACKGROUND
 *
 * The single, complete hero visual — approved production asset, not a
 * placeholder or a composited layer stack. Contains Hashim Salem Saif,
 * the firm's Dubai office, Burj Khalifa and skyline, and legal
 * environmental detail (scales, books) in one photograph, with a dark
 * negative-space region on the left where the live hero copy sits.
 *
 * object-position keeps that left negative space (and Hashim) anchored
 * in view at every breakpoint rather than a blind center-crop; on
 * mobile it shifts further right so his face/head are never cropped.
 */
export function HeroMedia() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 [animation:fade-in_1.1s_ease-out_forwards]"
      aria-hidden="true"
    >
      <picture>
        <source srcSet="/hero/hss-hero-background.webp" type="image/webp" />
        <img
          src="/hero/hss-hero-background.jpg"
          alt=""
          className="h-full w-full object-cover object-[58%_10%] sm:object-[55%_12%] md:object-[38%_center]"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Localized left-side overlay only — the image already carries its own
          darkness, so this is concentrated behind the text column and fades
          out before reaching Hashim, not a blanket scrim over the whole hero */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[58%]"
        style={{
          background:
            'linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.86) 28%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Top scrim — keeps header text legible over the sky before scroll gives
          the header its own solid backdrop */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Bottom merge into the authority strip */}
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{
          background: 'linear-gradient(0deg, #000000 0%, rgba(0,0,0,0) 100%)',
        }}
      />
    </div>
  )
}
