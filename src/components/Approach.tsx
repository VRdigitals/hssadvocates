import { useEffect, useRef, useState, type ReactNode } from 'react'

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
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView] as const
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  'aria-hidden': true as const,
}

const InstitutionIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3 4 7v1h16V7l-8-4Z" strokeLinejoin="round" />
    <path d="M5 10v7M9 10v7M15 10v7M19 10v7" strokeLinecap="round" />
    <path d="M3.5 20.5h17" strokeLinecap="round" />
  </svg>
)

const GavelIcon = () => (
  <svg {...iconProps}>
    <path d="m9.5 7.5 4 4" strokeLinecap="round" />
    <path d="m6.5 10.5 5.5 5.5-3 3-5.5-5.5 3-3Z" strokeLinejoin="round" />
    <path d="m11 6 5.5 5.5 2-2L13 4l-2 2Z" strokeLinejoin="round" />
    <path d="M2.5 21.5h9" strokeLinecap="round" />
  </svg>
)

const BilingualIcon = () => (
  <svg {...iconProps}>
    <path
      d="M11 5H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1v3l3.2-3H11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
      strokeLinejoin="round"
    />
    <path
      d="M15 9h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-.3V21l-2.7-2h-2a2 2 0 0 1-2-2v-1"
      strokeLinejoin="round"
    />
  </svg>
)

const MarketIcon = () => (
  <svg {...iconProps}>
    <path d="M4 20V13M10 20V9M16 20v-6" strokeLinecap="round" />
    <path d="M4 9.5 10 5l4 3 6-4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 3.5H21V6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 20.5h17" strokeLinecap="round" />
  </svg>
)

const DocumentIcon = () => (
  <svg {...iconProps}>
    <path d="M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z" strokeLinejoin="round" />
    <path d="M15 3.5V6a1 1 0 0 0 1 1h2.5" strokeLinejoin="round" />
    <path d="M8 12h8M8 15.5h8M8 8.5h4" strokeLinecap="round" />
  </svg>
)

const CalendarIcon = () => (
  <svg {...iconProps}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="0.5" />
    <path d="M3.5 9.5h17" />
    <path d="M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
)

const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.25" />
    <path d="M3.75 12h16.5M12 3.75c2.2 2.2 3.4 5.1 3.4 8.25s-1.2 6.05-3.4 8.25c-2.2-2.2-3.4-5.1-3.4-8.25S9.8 5.95 12 3.75Z" />
  </svg>
)

const pillars: Array<{ title: string; text: string; icon: ReactNode }> = [
  {
    title: 'Institutional Insight',
    text: 'Built from years inside Dubai Customs’ Cases Department and the Dubai International Arbitration Centre, not from the outside looking in.',
    icon: <InstitutionIcon />,
  },
  {
    title: 'Supreme Court Admission',
    text: 'Authorised to plead before the Supreme Court and all courts of the UAE.',
    icon: <GavelIcon />,
  },
  {
    title: 'Bilingual Practice',
    text: 'Matters conducted and argued in Arabic and English.',
    icon: <BilingualIcon />,
  },
  {
    title: 'Property-Market Fluency',
    text: 'Certified in real estate brokerage, with close, current familiarity with the UAE market.',
    icon: <MarketIcon />,
  },
]

const credentials: Array<{ label: string; value: string; icon: ReactNode }> = [
  { label: 'MOJ Admission', value: 'Supreme Court', icon: <InstitutionIcon /> },
  { label: 'Registration No.', value: '3400', icon: <DocumentIcon /> },
  { label: 'Registered', value: 'Mar 2017', icon: <CalendarIcon /> },
  { label: 'Languages', value: 'Arabic / English', icon: <GlobeIcon /> },
]

export function Approach() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="our-approach"
      className="relative overflow-hidden border-t border-hairline bg-light-blue"
      aria-label="Our Approach"
    >
      {/*
        Same handshake photo the client specified (kept, as-is, per that
        request), now carrying a light-blue veil instead of the original
        dark scrim so this section reads as the calm, cool-ivory/pale-blue
        institutional moment in the page's bright rhythm.
      */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <picture>
          <source srcSet="/hero/our-approach-background.webp" type="image/webp" />
          <img
            src="/hero/our-approach-background.jpg"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            style={{ filter: 'brightness(1.05) saturate(0.8)' }}
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(238,245,248,0.82) 0%, rgba(238,245,248,0.9) 55%, rgba(238,245,248,0.85) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 60% at 88% 8%, rgba(206,163,68,0.1) 0%, rgba(206,163,68,0) 70%)',
          }}
        />
        <span
          className="absolute -bottom-[8vw] -right-[4vw] select-none font-hero-display font-medium leading-none text-paper transition-opacity duration-[1400ms] ease-out"
          style={{ fontSize: '24vw', opacity: inView ? 0.025 : 0.008 }}
        >
          HSS
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-[clamp(110px,10vw,170px)] md:px-[clamp(48px,5vw,96px)]">
        {/* Eyebrow + headline */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out',
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="h-px bg-gold transition-transform duration-700 ease-out"
              style={{ width: '20px', transform: inView ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
              aria-hidden="true"
            />
            <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
              Our Approach
            </span>
          </div>

          <h2 className="mt-6 text-[clamp(44px,12vw,62px)] font-hero-display font-semibold uppercase leading-[0.98] text-paper md:text-[clamp(60px,5vw,94px)]">
            <span className="block">Counsel From</span>
            <span className="block">
              Inside The <span className="text-gold">System</span>
            </span>
          </h2>
        </div>

        {/* Four principles — editorial, not cards */}
        <div className="relative mt-16 grid gap-x-12 gap-y-0 border-t border-paper/10 sm:grid-cols-2 md:mt-20">
          <span
            className="absolute inset-y-0 left-1/2 hidden w-px bg-paper/10 sm:block"
            aria-hidden="true"
          />
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              tabIndex={0}
              className={`group border-b border-paper/10 py-8 outline-none sm:py-10 ${
                index % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 600ms ease-out ${140 + index * 100}ms, transform 600ms ease-out ${140 + index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-hero-sans text-[13px] font-medium tracking-[0.08em] text-gold/70 transition-colors duration-300 group-hover:text-gold group-focus-visible:text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className="h-px bg-gold/40 transition-all duration-300 ease-out group-hover:bg-gold group-focus-visible:bg-gold"
                  style={{ width: '24px' }}
                  aria-hidden="true"
                />
                <span className="text-gold/70 transition-colors duration-300 group-hover:text-gold group-focus-visible:text-gold">
                  {pillar.icon}
                </span>
              </div>

              <h3 className="mt-4 font-hero-display text-[21px] font-semibold uppercase tracking-[0.01em] text-paper transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 md:text-[23px]">
                {pillar.title}
              </h3>
              <p className="mt-2 max-w-[440px] font-hero-sans text-[16px] leading-[1.6] text-paper/55 transition-colors duration-300 group-hover:text-paper/75 group-focus-visible:text-paper/75 md:text-[17px]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Credential rail */}
        <div
          className="mt-4 border-t border-paper/15 sm:grid sm:grid-cols-2 lg:grid-cols-4"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 600ms ease-out 620ms, transform 600ms ease-out 620ms',
          }}
        >
          {credentials.map((item, index) => (
            <div
              key={item.label}
              tabIndex={0}
              className={`group border-b border-paper/15 py-7 outline-none sm:py-8 lg:border-r lg:last:border-r-0 ${
                index % 2 === 0 ? 'sm:border-r' : ''
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-gold/60 transition-colors duration-300 group-hover:text-gold group-focus-visible:text-gold">
                  {item.icon}
                </span>
                <span className="font-hero-sans text-[10px] font-medium uppercase tracking-[0.14em] text-paper/45 transition-colors duration-300 group-hover:text-paper/70 group-focus-visible:text-paper/70">
                  {item.label}
                </span>
              </div>
              <p className="mt-2 font-hero-display text-[19px] font-semibold text-paper transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 md:text-[21px]">
                {item.value}
              </p>
              <span
                className="mt-3 block h-px bg-gold/0 transition-all duration-300 ease-out group-hover:bg-gold/60 group-focus-visible:bg-gold/60"
                style={{ width: '28px' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
