import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react'

function useInView<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return inView
}

/**
 * Scroll progress (0–1) of the section passing through the viewport — not
 * scroll-jacked, just read from normal document scroll via a passive
 * listener + rAF so the timeline can react to it. Reduced-motion users get
 * progress locked at 1 (full timeline, no scroll-linked transitions).
 */
function useScrollProgress<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }

    let ticking = false
    const compute = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const raw = (vh - rect.top) / (rect.height + vh)
      setProgress(Math.min(1, Math.max(0, raw)))
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])

  return progress
}

const reveal = (inView: boolean, delayMs: number, extraClassName = '') => ({
  className: `${extraClassName} transition-all duration-700 ease-out ${
    inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  }`,
  style: { transitionDelay: `${delayMs}ms` },
})

const timeline = [
  {
    label: '2008',
    text: 'Began his legal career with Dubai Customs, progressing through the organisation over the years that followed.',
  },
  {
    label: 'Customs Cases Dept.',
    text: 'Adjudicated matters spanning tax evasion, the smuggling of goods and violations of property rights.',
  },
  {
    label: 'DIAC',
    text: 'Served as a case manager at the Dubai International Arbitration Centre, building detailed knowledge of its statute and procedures.',
  },
  {
    label: 'Real Estate',
    text: 'Holds a certificate in real estate brokerage and maintains close familiarity with the UAE property market.',
  },
]

export function HashimTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLOListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  const inView = useInView(sectionRef)
  const progress = useScrollProgress(sectionRef)

  // Each node's position expressed as a fraction of the track's own height,
  // measured from the real DOM rather than hardcoded — so the line always
  // reaches a node exactly when it visually arrives there, regardless of
  // font metrics, wrapping or breakpoint.
  const [nodeFractions, setNodeFractions] = useState<number[]>(() =>
    timeline.map((_, i) => (i + 1) / (timeline.length + 1)),
  )

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      const trackRect = track.getBoundingClientRect()
      if (trackRect.height === 0) return
      setNodeFractions(
        itemRefs.current.map((li) => {
          if (!li) return 0
          const nodeCenter = li.getBoundingClientRect().top + 30
          return Math.min(1, Math.max(0, (nodeCenter - trackRect.top) / trackRect.height))
        }),
      )
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const activatedCount = nodeFractions.filter((f) => progress >= f).length

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative border-t border-hairline bg-light-blue md:min-h-[155vh]"
      aria-label="Professional Journey"
    >
      <div className="relative overflow-hidden md:sticky md:top-[88px] md:h-[calc(100svh-88px)]">
        {/*
          HASHIM_EXPERIENCE_BACKGROUND — the approved production photograph
          (premium UAE architectural interior: dark stone, geometric mashrabiya
          screen, warm evening light, Dubai skyline through the doorway).
          Deliberately static — no scroll-driven movement on the background.
        */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 [transition:opacity_1.1s_ease-out]"
          style={{ opacity: inView ? 1 : 0 }}
          aria-hidden="true"
        >
          <picture>
            <source srcSet="/hero/hashim-experience-background.webp" type="image/webp" />
            <img
              src="/hero/hashim-experience-background.jpg"
              alt=""
              className="h-full w-full object-cover object-[15%_center] md:object-[center_center]"
              loading="lazy"
              decoding="async"
              style={{ filter: 'brightness(1.05) saturate(0.85)' }}
            />
          </picture>

          {/* Even pale-blue veil across the whole image — the timeline
              column reaches nearly the full width, so contrast can't rely
              on a left-only gradient the way a narrower text column could */}
          <div className="absolute inset-0" style={{ background: 'rgba(238,245,248,0.62)' }} />

          {/* Extra strength behind the intro text column specifically */}
          <div
            className="absolute inset-y-0 left-0 w-full md:w-[50%]"
            style={{
              background:
                'linear-gradient(90deg, rgba(238,245,248,0.65) 0%, rgba(238,245,248,0.45) 60%, rgba(238,245,248,0) 100%)',
            }}
          />

          <div
            className="absolute inset-x-0 top-0 h-20"
            style={{ background: 'linear-gradient(180deg, rgba(238,245,248,0.7) 0%, rgba(238,245,248,0) 100%)' }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20"
            style={{ background: 'linear-gradient(0deg, rgba(238,245,248,0.75) 0%, rgba(238,245,248,0) 100%)' }}
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 py-[clamp(64px,8vh,100px)] md:px-[clamp(48px,4vw,80px)] md:py-0">
          <div className="grid w-full gap-16 md:grid-cols-[0.82fr_1fr] md:gap-16">
            {/* Left — section heading only; the biography lives in the
                Meet Hashim section above, this is the deeper journey */}
            <div>
              <div {...reveal(inView, 80, 'flex items-center gap-2.5')}>
                <span className="h-px w-5 bg-gold" aria-hidden="true" />
                <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
                  Experience
                </span>
              </div>

              <h2
                className={`mt-6 text-[clamp(40px,11vw,58px)] font-hero-display font-semibold leading-[0.98] uppercase text-paper md:text-[clamp(58px,4.5vw,86px)] ${reveal(inView, 180).className}`}
                style={reveal(inView, 180).style}
              >
                <span className="block">Two Decades</span>
                <span className="block">
                  Inside The <span className="text-gold">System</span>
                </span>
              </h2>

              <p
                {...reveal(
                  inView,
                  320,
                  'mt-7 max-w-[480px] font-hero-sans text-[17px] leading-[1.65] text-paper/72 md:text-[18px]',
                )}
              >
                A career built inside the institutions he now argues
                before &mdash; from customs enforcement to arbitration
                administration to the property market.
              </p>
            </div>

            {/* Right — scroll-linked career timeline */}
            <ol ref={trackRef} className="relative flex flex-col pl-8">
              {/* Base track — pale blue-gray, always visible, full height */}
              <span
                className="absolute left-[3px] top-2 bottom-2 w-px bg-blue-border"
                aria-hidden="true"
              />
              {/* Active track — grows with scroll progress */}
              <span
                className="absolute left-[3px] top-2 bottom-2 w-px origin-top bg-gold transition-transform duration-150 ease-out"
                style={{ transform: `scaleY(${progress})` }}
                aria-hidden="true"
              />

              {timeline.map((item, index) => {
                const status =
                  index < activatedCount - 1
                    ? 'past'
                    : index === activatedCount - 1
                      ? 'current'
                      : 'future'

                const labelOpacity = status === 'future' ? 0.4 : 1
                const descOpacity = status === 'future' ? 0.3 : status === 'past' ? 0.7 : 1
                const descTranslate = status === 'future' ? 16 : 0
                const nodeActive = status !== 'future'

                return (
                  <li
                    key={item.label}
                    ref={(el) => {
                      itemRefs.current[index] = el
                    }}
                    className={`relative py-6 md:py-7 ${index !== 0 ? 'border-t border-hairline' : ''}`}
                  >
                    <span
                      className="absolute -left-8 top-[30px] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-light-blue"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -left-8 top-[30px] h-2 w-2 -translate-x-[-3px] -translate-y-1/2 rounded-full border transition-all duration-500 ease-out"
                      style={{
                        backgroundColor: nodeActive ? 'var(--color-gold)' : '#ffffff',
                        borderColor: nodeActive ? 'var(--color-gold)' : 'var(--color-blue-border)',
                        transform: `scale(${nodeActive ? 1 : 0.75})`,
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="block font-hero-display text-[19px] font-semibold uppercase tracking-[0.02em] text-gold transition-opacity duration-500 ease-out md:text-[21px]"
                      style={{ opacity: labelOpacity }}
                    >
                      {item.label}
                    </span>
                    <p
                      className="mt-2 max-w-[480px] font-hero-sans text-[17px] leading-[1.6] text-paper/72 transition-all duration-500 ease-out md:text-[18px]"
                      style={{ opacity: descOpacity, transform: `translateY(${descTranslate}px)` }}
                    >
                      {item.text}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
