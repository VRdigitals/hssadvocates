import { useEffect, useRef } from 'react'

/**
 * HASHIM_HERO_MEDIA
 *
 * Dedicated media slot for the hero. No licensed photograph of Hashim Salem
 * Saif, the Dubai skyline or a styled still-life exists in this project, so
 * — rather than approximate a stock photograph — this renders an original
 * fine-line illustration: a Dubai skyline silhouette (with a tapering
 * Burj-Khalifa-like spire) against a golden-hour horizon glow, and a
 * minimal gold line-art scales-of-justice + law-books motif in the
 * foreground. It can be swapped for a licensed photograph later by
 * replacing the <svg> below with an <img>/<video>.
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
        {/* Base tonal field — deep charcoal, not flat black */}
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
          <svg
            viewBox="0 0 640 900"
            preserveAspectRatio="xMidYMax slice"
            className="h-full w-full"
            role="img"
            aria-label="Illustrated Dubai skyline at golden hour with a scales-of-justice motif"
          >
            <defs>
              <radialGradient id="horizonGlow" cx="58%" cy="54%" r="55%">
                <stop offset="0%" stopColor="#caa056" stopOpacity="0.28" />
                <stop offset="45%" stopColor="#8a6a2e" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#8a6a2e" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="buildingFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c1a16" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a0a0b" stopOpacity="0" />
                <stop offset="100%" stopColor="#0a0a0b" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="640" height="900" fill="url(#horizonGlow)" />

            {/* Skyline silhouette */}
            <g fill="url(#buildingFill)" stroke="#caa056" strokeOpacity="0.18" strokeWidth="1">
              <rect x="8" y="640" width="46" height="260" />
              <rect x="70" y="560" width="38" height="340" />
              <rect x="122" y="680" width="56" height="220" />
              <rect x="196" y="480" width="42" height="420" />
              <rect x="250" y="600" width="66" height="300" />
              <rect x="470" y="640" width="44" height="260" />
              <rect x="524" y="520" width="36" height="380" />
              <rect x="570" y="660" width="60" height="240" />
              {/* Burj-Khalifa-like tapering spire, slightly right of centre */}
              <polygon points="336,900 336,440 386,440 386,900" />
              <polygon points="340,440 382,440 368,360 354,360" />
              <rect x="359" y="290" width="4" height="72" strokeWidth="0" />
            </g>

            <rect x="0" y="0" width="640" height="900" fill="url(#skyFade)" />

            {/* Scales of justice — minimal gold line art. Reserved for desktop/tablet,
                where there is dedicated space clear of the headline; on mobile the
                image band is shallow and sits close to the text, so this stays hidden
                there to keep the icon from competing with the headline. */}
            <g
              className="hidden md:inline"
              transform="translate(430,610)"
              fill="none"
              stroke="#d8b56b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            >
              <line x1="60" y1="10" x2="60" y2="150" />
              <line x1="20" y1="155" x2="100" y2="155" />
              <line x1="8" y1="30" x2="112" y2="30" />
              <path d="M8,30 L-2,68 a20,14 0 0 0 20,0 Z" />
              <path d="M112,30 L102,68 a20,14 0 0 0 20,0 Z" />
              <circle cx="60" cy="10" r="6" />
            </g>

            {/* Stacked law books — simple line art beneath the scales (desktop/tablet only) */}
            <g
              className="hidden md:inline"
              transform="translate(452,788)"
              fill="none"
              stroke="#d8b56b"
              strokeWidth="1.75"
              opacity="0.85"
            >
              <rect x="0" y="18" width="92" height="12" rx="1.5" />
              <rect x="6" y="6" width="80" height="12" rx="1.5" />
              <rect x="-4" y="30" width="100" height="12" rx="1.5" />
            </g>
          </svg>
          </div>
        </div>

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
