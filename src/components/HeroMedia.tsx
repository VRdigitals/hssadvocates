import { useEffect, useState } from 'react'

const YT_VIDEO_ID = 'rFygb2YoQ0A'

/**
 * HSS_HERO_BACKGROUND — institutional, not founder-led.
 *
 * Background is now the client-supplied YouTube video, embedded via
 * YouTube's own iframe player (never downloaded/re-hosted — extracting and
 * self-hosting a YouTube video's file would be a copyright/ToS problem
 * unless HSS holds explicit rights to redistribute it that way; embedding
 * is what YouTube's own terms permit for any video the uploader hasn't
 * disabled embedding on). The iframe is oversized and centered via the
 * standard "YouTube background video" CSS technique so it crops to cover
 * the hero like a native <video>, with pointer-events disabled so it never
 * intercepts clicks meant for the hero's text/buttons.
 *
 * The original no-photo gradient + gold lattice treatment is kept as the
 * permanent base layer: it shows while the iframe loads, and is the whole
 * background for prefers-reduced-motion users, who never get the video at
 * all (YouTube's player doesn't honor that preference on its own).
 */
export function HeroMedia() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setShowVideo(true)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(115deg, #FFFFFF 0%, #F7F5F0 45%, #EEF5F8 100%)',
        }}
      />

      {/* Soft warm daylight, upper right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 60% at 82% 12%, rgba(206,163,68,0.14) 0%, rgba(206,163,68,0) 70%)',
        }}
      />

      {/* Pale blue depth, lower right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 65% at 90% 100%, rgba(197,220,229,0.6) 0%, rgba(197,220,229,0) 70%)',
        }}
      />

      {/* Restrained geometric lattice mark — shown until the video takes
          over, and permanently for reduced-motion users */}
      {!showVideo && (
        <svg
          className="absolute right-0 top-0 h-full opacity-[0.16] transition-opacity duration-700 md:right-[4%]"
          width="46%"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
        >
          <g stroke="var(--color-gold)" strokeWidth="1">
            {Array.from({ length: 7 }).map((_, row) =>
              Array.from({ length: 4 }).map((_, col) => {
                const x = col * 110 - 40
                const y = row * 120 - 20
                return (
                  <path
                    key={`${row}-${col}`}
                    d={`M${x} ${y + 55} L${x + 55} ${y} L${x + 110} ${y + 55} L${x + 55} ${y + 110} Z`}
                  />
                )
              }),
            )}
          </g>
        </svg>
      )}

      {showVideo && (
        <iframe
          /* Oversized well beyond a plain cover-fit (130% on every axis) so
             the iframe's own top-left corner — where YouTube renders its
             video-title overlay, which its embed params cannot suppress —
             sits reliably outside the visible hero area on every viewport
             ratio, not just the common ones. */
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-1000 [animation:fade-in_1s_0.2s_ease-out_forwards]"
          style={{
            width: '130vw',
            height: '73.125vw' /* 16:9 */,
            minHeight: '130vh',
            minWidth: '231.1vh' /* 16:9 */,
          }}
          src={`https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`}
          title="HSS Advocates & Legal Consultants — background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      {/* Belt-and-suspenders cover for the video's title-overlay corner —
          blends into the section's own warm-white/gold veil rather than
          reading as a patch */}
      {showVideo && (
        <div
          className="absolute left-0 top-0 h-24 w-64 opacity-0 [animation:fade-in_0.6s_0.4s_ease-out_forwards] md:h-28 md:w-80"
          style={{
            background:
              'radial-gradient(100% 100% at 0% 0%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0) 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Light veil over the video so hero text stays legible — never a
          blanket dark scrim, just enough warm-white to hold contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(255,255,255,0.7) 0%, rgba(247,245,240,0.5) 45%, rgba(238,245,248,0.35) 100%)',
        }}
      />

      {/* Bottom merge into the authority strip */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(0deg, #F7F5F0 0%, rgba(247,245,240,0) 100%)' }}
      />
    </div>
  )
}
