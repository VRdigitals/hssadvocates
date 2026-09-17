import { useEffect, useRef } from 'react'

/**
 * HASHIM_HERO_MEDIA — Dubai skyline atmosphere layer.
 *
 * This is now the *supporting* layer, not the hero subject: Hashim (see
 * HashimPortrait) sits in front of it. Cropped and graded to read as
 * atmosphere — muted bronze/gold, deep blacks — rather than a bright
 * sunset tourism shot, and weighted toward the skyline/Burj Khalifa rather
 * than the foreground still-life, which is de-emphasised here in favour of
 * the portrait as the hero's visual symbol of authority.
 *
 * Full height, no border, no corner radius, a strong black gradient on the
 * left so hero typography stays legible where this layer meets the text
 * column.
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
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-0 md:block [animation:media-reveal_1.2s_0.15s_ease-out_forwards]"
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
                className="h-full w-full object-cover object-[68%_18%]"
                loading="eager"
                decoding="async"
                style={{ filter: 'grayscale(30%) sepia(18%) saturate(80%) brightness(0.7) contrast(1.1)' }}
              />
            </picture>
          </div>
        </div>

        {/* Warm grade to tie the photo into the site's champagne-gold accent, and to
            keep it reading as controlled bronze/gold atmosphere rather than a bright
            sunset — Hashim's portrait is the hero's visual subject, not the skyline */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: 'linear-gradient(160deg, #14100a80 0%, #00000040 55%, #00000000 80%)',
          }}
        />

        {/* Top scrim — keeps the header's own text (EN / العربية, nav) legible over the
            sky before the user scrolls and the header gains its solid backdrop */}
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Left gradient — this layer sits behind the portrait and content, so the
            fade only needs to soften its own left edge into the black canvas */}
        <div
          className="absolute inset-y-0 left-0 w-1/2"
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
