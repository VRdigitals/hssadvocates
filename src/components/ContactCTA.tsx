import { useEffect, useRef, useState } from 'react'

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
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
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView] as const
}

const reveal = (inView: boolean, delayMs: number, extraClassName = '') => ({
  className: `${extraClassName} transition-all duration-700 ease-out ${
    inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  }`,
  style: { transitionDelay: `${delayMs}ms` },
})

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  'aria-hidden': true as const,
}

const LocationIcon = () => (
  <svg {...iconProps}>
    <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.25" />
    <path d="M3.75 12h16.5M12 3.75c2.2 2.2 3.4 5.1 3.4 8.25s-1.2 6.05-3.4 8.25c-2.2-2.2-3.4-5.1-3.4-8.25S9.8 5.95 12 3.75Z" />
  </svg>
)

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path
      d="M5.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4 5.6 1.5 1.5 0 0 1 5.5 4Z"
      strokeLinejoin="round"
    />
  </svg>
)

export function ContactCTA() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="consultation"
      className="relative overflow-hidden border-t border-white/10 bg-ink"
      aria-label="Request a consultation"
    >
      {/* Massive, near-invisible architectural mark — pale blue rather than
          black-on-black, since the surface underneath it is navy, not black */}
      <span
        className="pointer-events-none absolute -bottom-[10vw] -left-[3vw] select-none font-hero-display font-medium leading-none text-blue-border transition-[opacity,transform] duration-[1400ms] ease-out"
        style={{
          fontSize: '30vw',
          opacity: inView ? 0.022 : 0.008,
          transform: `translateX(${inView ? 0 : -16}px)`,
        }}
        aria-hidden="true"
      >
        HSS
      </span>

      <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-center px-6 py-[clamp(100px,10vw,170px)] md:min-h-[78vh] md:px-10 md:py-[clamp(90px,8vw,140px)]">
        <div className="relative grid gap-16 md:grid-cols-[1.55fr_1fr] md:items-center md:gap-12">
          {/* Left — editorial content */}
          <div>
            <div {...reveal(inView, 60, 'flex items-center gap-2.5')}>
              <span
                className="h-px bg-gold transition-transform duration-700 ease-out"
                style={{
                  width: '20px',
                  transform: inView ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                }}
                aria-hidden="true"
              />
              <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-white/70 md:text-sm">
                Speak With HSS Advocates
              </span>
            </div>

            <h2
              className={`mt-6 text-[clamp(48px,14vw,70px)] font-hero-display font-semibold uppercase leading-[0.95] text-white md:text-[clamp(70px,5.5vw,108px)] ${reveal(inView, 160).className}`}
              style={reveal(inView, 160).style}
            >
              <span className="block">Request A</span>
              <span className="block text-gold">Consultation</span>
            </h2>

            <p
              {...reveal(
                inView,
                280,
                'mt-6 max-w-[480px] font-hero-sans text-[17px] leading-[1.65] text-white/65 md:text-[18px]',
              )}
            >
              Discuss your matter directly with HSS Advocates.
            </p>

            <div
              {...reveal(
                inView,
                380,
                'mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4',
              )}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <LocationIcon />
                </span>
                <p className="font-hero-sans text-[15px] leading-[1.5] text-white/70">
                  Al Fattan Plaza Building, Office 907
                  <br />
                  Al Garhoud Airport Road, Dubai, UAE
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <PhoneIcon />
                </span>
                <a
                  href="tel:+97143331229"
                  className="font-hero-sans text-[15px] leading-[1.5] text-white/70 transition-colors duration-200 hover:text-gold"
                >
                  +971 4 333 1229
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <GlobeIcon />
                </span>
                <p className="font-hero-sans text-[15px] leading-[1.5] text-white/70">
                  Arabic / English
                </p>
              </div>
            </div>
          </div>

          {/* Connecting line — desktop only */}
          <span
            className="pointer-events-none absolute left-[calc(1.55/2.55*100%)] top-1/2 hidden h-px -translate-y-1/2 bg-gold/30 transition-transform duration-[900ms] ease-out md:block"
            style={{
              width: '48px',
              transform: `scaleX(${inView ? 1 : 0})`,
              transformOrigin: 'left',
              transitionDelay: '520ms',
            }}
            aria-hidden="true"
          />

          {/* Right — the consultation action */}
          <div
            {...reveal(inView, 620, 'md:flex md:justify-end')}
          >
            <a
              href="mailto:info@hssadvocates.com"
              className="group relative flex w-full flex-col justify-between overflow-hidden bg-gold px-7 py-6 text-ink transition-[background-color,transform] duration-[350ms] ease-out hover:-translate-y-1 hover:bg-gold-dark focus-visible:-translate-y-1 focus-visible:bg-gold-dark focus-visible:outline-none"
              style={{
                width: 'clamp(280px, 26vw, 400px)',
                minHeight: 'clamp(108px, 9vw, 128px)',
              }}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-focus-visible:opacity-100"
                style={{ outline: '2px solid var(--color-ink)', outlineOffset: '-4px' }}
                aria-hidden="true"
              />
              <span className="font-hero-sans text-[11px] font-semibold uppercase tracking-[0.16em]">
                Start A Conversation
              </span>
              <span className="mt-4 flex items-center justify-between">
                <span className="font-hero-display text-[19px] font-semibold uppercase leading-tight tracking-[0.01em] transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 md:text-[21px]">
                  Request A Consultation
                </span>
                <span
                  className="ml-4 shrink-0 text-[20px] transition-transform duration-300 ease-out group-hover:translate-x-3 group-focus-visible:translate-x-3"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </span>
              <span
                className="absolute bottom-0 left-0 h-[2px] bg-ink/70 transition-[width] duration-[350ms] ease-out"
                style={{ width: '20%' }}
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 left-0 h-[2px] bg-ink transition-[width] duration-[350ms] ease-out group-hover:w-full group-focus-visible:w-full"
                style={{ width: '0%' }}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
