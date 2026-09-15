import { useEffect, useRef } from 'react'

/**
 * HASHIM_HERO_MEDIA
 *
 * Dedicated media slot for the hero: a Dubai skyline at golden hour with the
 * Burj Khalifa visible, and a brass scales-of-justice + leather law-books
 * still life in the foreground.
 *
 * Treatment: full height, fills its panel, subject weighted toward the
 * right, no border, no corner radius, a strong black gradient on the left
 * so hero typography stays legible where the panel meets the text column.
 */
export function HeroMedia() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.06, 48)
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translateY(${offset}px)`
        }
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[40%] w-full opacity-0 md:inset-y-0 md:left-auto md:right-0 md:top-0 md:h-full md:w-[48%] [animation:media-reveal_1.2s_0.15s_ease-out_forwards]"
      aria-hidden="true"
    >
      <div className="relative h-full w-full overflow-hidden bg-ink">
        {/* Base tonal field, visible only while the photo loads */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #0c0c0d 0%, #111113 45%, #0a0a0b 100%)',
          }}
        />

        {/* Scroll parallax (JS-driven translateY) on the outer layer, kept separate
            from the CSS-driven load-in scale below — animating `transform` in both
            places on the same element would let the CSS animation permanently win. */}
        <div ref={parallaxRef} className="absolute inset-0" style={{ willChange: 'transform' }}>
          {/* Slow ambient scale — a restrained "camera drift" on load */}
          <div
            className="absolute inset-0 [animation:media-drift_16s_ease-out_1_forwards]"
            style={{ transform: 'scale(1.08)' }}
          >
            <picture>
              <source srcSet="/hero/dubai-skyline-hero.webp" type="image/webp" />
              <img
                src="/hero/dubai-skyline-hero.jpg"
                alt=""
                className="h-full w-full object-cover object-[50%_22%] md:object-[62%_42%]"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        {/* Warm grade to tie the photo into the site's champagne-gold accent */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: 'linear-gradient(160deg, #1a140a4d 0%, #00000000 55%)',
          }}
        />

        {/* Top scrim — keeps the header's own text (EN / العربية, nav) legible over the
            bright sky before the user scrolls and the header gains its solid backdrop */}
        <div
          className="absolute inset-x-0 top-0 h-32 md:h-40"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Strong left-side gradient — keeps hero typography legible at the text/image seam */}
        <div
          className="absolute inset-y-0 left-0 w-2/3 md:w-1/2"
          style={{
            background: 'linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Bottom merge into the black canvas — deeper on mobile, where the band
            sits directly above the headline, lighter on desktop/tablet where the
            headline lives in its own column */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4 md:h-1/3"
          style={{
            background: 'linear-gradient(0deg, #000000 0%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>
    </div>
  )
}
