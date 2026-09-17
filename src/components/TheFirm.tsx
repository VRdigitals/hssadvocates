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

export function TheFirm() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="the-firm"
      className="relative overflow-hidden border-t border-hairline bg-ink"
      aria-label="The Firm"
    >
      {/*
        THE_FIRM_BACKGROUND — approved production asset (abstract gold/marble
        texture). It runs bright and busy edge-to-edge with no built-in dark
        zone of its own, so unlike the hero/Hashim photos this needs a
        stronger, more even overlay to keep the editorial text readable,
        rather than just a localized scrim — still never a flat block color
        over the whole image, the texture stays visible throughout.
      */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 [transition:opacity_1.1s_ease-out]"
        style={{ opacity: inView ? 1 : 0 }}
        aria-hidden="true"
      >
        <picture>
          <source srcSet="/hero/the-firm-background.webp" type="image/webp" />
          <img
            src="/hero/the-firm-background.jpg"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            style={{ filter: 'brightness(0.6) saturate(0.9)' }}
          />
        </picture>

        {/* Left-to-right darkness so the editorial content stays legible,
            with the texture only ever emerging, never a hard split */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.88) 40%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Top and bottom merge into the section's own black borders */}
        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{ background: 'linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{ background: 'linear-gradient(0deg, #000000 0%, rgba(0,0,0,0) 100%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 md:flex md:min-h-[90svh] md:flex-col md:justify-center md:px-[clamp(48px,5vw,100px)] md:py-24">
        {/* 2. Eyebrow */}
        <div {...reveal(inView, 80, 'flex items-center gap-2.5')}>
          <span className="h-px w-5 bg-gold" aria-hidden="true" />
          <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
            The Firm
          </span>
        </div>

        {/* 3–4. Headline, EXPERIENCE gold emphasis */}
        <h2
          className={`mt-6 text-[clamp(38px,11vw,58px)] font-hero-display font-semibold leading-[0.98] uppercase text-paper md:text-[clamp(54px,4.2vw,82px)] ${reveal(inView, 180).className}`}
          style={reveal(inView, 180).style}
        >
          <span className="block">Counsel Built</span>
          <span className="block">On Institutional</span>
          <span className="block text-gold">Experience</span>
        </h2>

        {/* 5–7. Two editorial columns with a restrained divider */}
        <div className="relative mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <span
            className="absolute left-1/2 top-1/2 hidden h-24 w-px -translate-x-1/2 -translate-y-1/2 bg-gold/40 md:block"
            aria-hidden="true"
          />

          <div {...reveal(inView, 300)}>
            <p className="max-w-[520px] font-hero-sans text-[18px] leading-[1.7] text-paper/70 md:text-[19px]">
              HSS Advocates &amp; Legal Consultants is a Dubai-based practice
              led by Hashim Salem Saif, an Emirati advocate admitted to plead
              before the Supreme Court and all courts of the UAE. The firm is
              registered with the UAE Ministry of Justice and operates from
              Business Bay, at the centre of Dubai&rsquo;s commercial
              district.
            </p>
            <span className="mt-6 block h-px w-10 bg-gold/50" aria-hidden="true" />
          </div>

          <div {...reveal(inView, 420)}>
            <p className="max-w-[520px] font-hero-sans text-[18px] leading-[1.7] text-paper/70 md:text-[19px]">
              Clients work directly with an advocate whose grounding comes
              from inside the system itself &mdash; enforcement, arbitration
              administration and the property market &mdash; rather than
              from observation of it alone. That vantage shapes how matters
              are assessed, argued and resolved.
            </p>
            <span className="mt-6 block h-px w-10 bg-gold/50" aria-hidden="true" />
          </div>
        </div>

        {/* 8. Bottom editorial markers */}
        <div {...reveal(inView, 540, 'mt-16 flex items-center justify-between md:mt-24')}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
            <span className="font-hero-sans text-[10px] uppercase tracking-[0.2em] text-paper/50">
              Law &nbsp;|&nbsp; People &nbsp;|&nbsp; Possibilities
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
            <span className="font-hero-sans text-[11px] tracking-[0.1em] text-gold/70">02</span>
          </div>
        </div>
      </div>
    </section>
  )
}
