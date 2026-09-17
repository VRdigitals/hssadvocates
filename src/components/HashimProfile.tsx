import { useEffect, useRef, useState } from 'react'

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) {
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
  }, [])

  return [ref, inView] as const
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

export function HashimProfile() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="hashim-salem"
      className="relative overflow-hidden border-t border-hairline bg-ink"
      aria-label="Hashim Salem Saif"
    >
      {/*
        HASHIM_EXPERIENCE_BACKGROUND — the approved production photograph
        (premium UAE architectural interior: dark stone, geometric mashrabiya
        screen, warm evening light, Dubai skyline through the doorway). Its
        own left half is already deep negative space, so the overlay below
        only needs to reinforce it, not manufacture darkness from nothing.
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
          />
        </picture>

        {/* Very subtle localized darkening behind the text column only —
            the photo is already dark there, this just guarantees contrast */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[54%]"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0) 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 top-0 h-20"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-[clamp(80px,10vh,120px)] md:px-[clamp(48px,4vw,80px)] md:py-[clamp(100px,10vh,150px)]">
        <div className="grid gap-16 md:grid-cols-[0.82fr_1fr] md:gap-16">
          {/* Left — introduction */}
          <div>
            <div {...reveal(inView, 80, 'flex items-center gap-2.5')}>
              <span className="h-px w-5 bg-gold" aria-hidden="true" />
              <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
                Hashim Salem Saif
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
                'mt-7 max-w-[650px] font-hero-sans text-[18px] leading-[1.7] text-paper/72 md:text-[19px]',
              )}
            >
              Hashim Salem Saif is an Emirati advocate who appears before all
              courts of the UAE. His practice draws on a career spent inside
              the mechanisms he now argues in front of &mdash; from customs
              enforcement to arbitration administration &mdash; alongside
              continued training through the new arbitrators&rsquo; course,
              the Young Arbitrators Conference, and the IAIS conference on
              insurance practice and risk.
            </p>

            <div
              {...reveal(
                inView,
                440,
                'mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-hero-sans text-[11px] font-medium uppercase tracking-[0.14em] text-paper/50',
              )}
            >
              <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
              <span>Arabic / English</span>
              <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
              <span>Business Bay, Dubai</span>
            </div>
          </div>

          {/* Right — career timeline */}
          <ol className="relative flex flex-col pl-8">
            <span
              className="absolute left-[3px] top-2 bottom-2 w-px origin-top bg-gold/35 transition-transform duration-[1200ms] ease-out"
              style={{ transform: inView ? 'scaleY(1)' : 'scaleY(0)' }}
              aria-hidden="true"
            />

            {timeline.map((item, index) => (
              <li
                key={item.label}
                {...reveal(
                  inView,
                  580 + index * 130,
                  `relative py-6 md:py-7 ${index !== 0 ? 'border-t border-hairline' : ''}`,
                )}
              >
                <span
                  className="absolute -left-8 top-[30px] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-ink"
                  aria-hidden="true"
                />
                <span
                  className="absolute -left-8 top-[30px] h-2 w-2 -translate-x-[-3px] -translate-y-1/2 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <span className="block font-hero-display text-[19px] font-semibold uppercase tracking-[0.02em] text-gold md:text-[21px]">
                  {item.label}
                </span>
                <p className="mt-2 max-w-[480px] font-hero-sans text-[17px] leading-[1.6] text-paper/72 md:text-[18px]">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
