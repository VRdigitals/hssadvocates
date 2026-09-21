import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

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

const credentials = [
  'UAE Court Representation',
  'Arabic / English',
  'Dubai Customs Experience',
  'DIAC Experience',
]

export function HashimIntro() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="hashim-salem"
      className="relative overflow-hidden border-t border-hairline bg-warm-white"
      aria-label="Meet Hashim Salem Saif"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
          {/* Portrait — the same approved photograph of Hashim Salem Saif,
              now appearing here for the first time on the page rather than
              in the hero. Cropped to a tighter, portrait-oriented frame
              (rather than the hero's full-bleed landscape treatment) since
              it now sits in a ~40-45% column instead of full width. */}
          <div
            {...reveal(inView, 80, 'relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]')}
          >
            <picture>
              <source srcSet="/hero/hss-hero-background.webp" type="image/webp" />
              <img
                src="/hero/hss-hero-background.jpg"
                alt="Hashim Salem Saif, Emirati advocate and founder of HSS Advocates & Legal Consultants"
                className="h-full w-full object-cover object-[62%_20%]"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(16,42,58,0.1)' }}
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div>
            <div {...reveal(inView, 140, 'flex items-center gap-2.5')}>
              <span className="h-px w-5 bg-gold" aria-hidden="true" />
              <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
                Meet The Founder
              </span>
            </div>

            <h2
              className={`mt-6 text-[clamp(34px,9vw,52px)] font-hero-display font-semibold leading-[1.02] uppercase text-paper md:text-[clamp(46px,3.6vw,66px)] ${reveal(inView, 220).className}`}
              style={reveal(inView, 220).style}
            >
              <span className="block">Legal Experience.</span>
              <span className="block text-gold">Practical Perspective.</span>
            </h2>

            <p
              {...reveal(
                inView,
                340,
                'mt-6 max-w-[560px] font-hero-sans text-[17px] leading-[1.7] text-paper/72 md:text-[18px]',
              )}
            >
              Hashim Salem Saif is an Emirati advocate who appears before
              all courts of the UAE. His practice draws on a career spent
              inside the mechanisms he now argues in front of &mdash; from
              customs enforcement to arbitration administration to the
              property market &mdash; giving clients counsel grounded in
              first-hand institutional experience.
            </p>

            <ul
              {...reveal(
                inView,
                440,
                'mt-7 flex flex-wrap gap-x-6 gap-y-3 font-hero-sans text-[11px] font-medium uppercase tracking-[0.12em] text-paper/60',
              )}
            >
              {credentials.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              {...reveal(
                inView,
                540,
                'group mt-9 inline-flex items-center gap-2.5 font-hero-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-gold',
              )}
              to="/experience"
            >
              Discover Hashim&rsquo;s Experience
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
