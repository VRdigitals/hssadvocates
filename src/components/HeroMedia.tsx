/**
 * HASHIM_HERO_MEDIA
 *
 * Dedicated media slot for the hero portrait of Hashim Salem Saif.
 * No portrait asset exists in the project yet, so this renders a tasteful
 * dark placeholder built from layered gradients — never a stock photo.
 *
 * Swap the commented <img> / <video> below in once real media is supplied.
 * Expected treatment: full height, object-fit: cover, subject positioned
 * slightly right-of-center, no border, no corner radius.
 */
export function HeroMedia() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[52%] w-full opacity-0 md:inset-y-0 md:right-0 md:top-0 md:h-full md:w-[48%] [animation:media-reveal_1.1s_0.15s_ease-out_forwards]"
      aria-hidden="true"
    >
      {/*
      <img
        src="/media/hashim-salem-portrait.jpg"
        alt=""
        className="h-full w-full object-cover object-[75%_20%]"
      />
      */}

      <div className="relative h-full w-full overflow-hidden bg-ink">
        {/* Base tonal field — controlled side lighting, dark to darker */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, #050505 0%, #121212 32%, #1d1d1d 58%, #0c0c0c 100%)',
          }}
        />

        {/* Soft directional light suggesting a portrait's key light from the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(65% 55% at 80% 26%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 62%)',
          }}
        />

        {/* Subtle vertical figure silhouette — deep blacks, no facial detail implied */}
        <div
          className="absolute inset-y-0 right-[6%] w-[46%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.82) 52%, rgba(0,0,0,0.94) 100%), radial-gradient(120% 90% at 50% 12%, rgba(255,255,255,0.09) 0%, rgba(0,0,0,0) 50%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 40%)',
          }}
        />

        {/* Left edge merge into the black canvas */}
        <div
          className="absolute inset-y-0 left-0 w-1/3"
          style={{
            background: 'linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Bottom merge into the black canvas / authority strip */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background: 'linear-gradient(0deg, #000000 0%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>
    </div>
  )
}
