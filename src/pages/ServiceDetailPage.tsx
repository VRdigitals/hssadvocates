import { useEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { getServiceBySlug, services } from '../data/services'

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

const reveal = (inView: boolean, delayMs: number, extraClassName = '') => ({
  className: `${extraClassName} transition-all duration-700 ease-out ${
    inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  }`,
  style: { transitionDelay: `${delayMs}ms` },
})

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = getServiceBySlug(slug)
  const [introRef, introInView] = useInView<HTMLDivElement>()
  const [relatedRef, relatedInView] = useInView<HTMLDivElement>()

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const otherServices = services.filter((item) => item.slug !== service.slug)

  return (
    <PageShell
      crumbs={[
        { label: 'Home', to: '/' },
        { label: 'Services', to: '/services' },
        { label: service.title },
      ]}
    >
      <section
        ref={introRef}
        className="relative overflow-hidden border-t border-hairline bg-warm-white"
        aria-label={service.title}
      >
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-16">
            <div>
              <div {...reveal(introInView, 0, 'flex items-center gap-2.5')}>
                <span className="h-px w-5 bg-gold" aria-hidden="true" />
                <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
                  Legal Services
                </span>
              </div>

              <div {...reveal(introInView, 80, 'mt-6')} style={{ ...reveal(introInView, 80).style, color: 'var(--color-gold)' }}>
                {service.icon}
              </div>

              <h1
                {...reveal(
                  introInView,
                  160,
                  'mt-5 text-[clamp(36px,9vw,52px)] font-hero-display font-semibold uppercase leading-[1.02] text-paper md:text-[clamp(44px,3.6vw,58px)]',
                )}
              >
                {service.title}
              </h1>

              <p
                {...reveal(
                  introInView,
                  260,
                  'mt-6 max-w-[440px] font-hero-sans text-[17px] leading-[1.65] text-paper/70 md:text-[18px]',
                )}
              >
                {service.summary}
              </p>
            </div>

            <div
              {...reveal(
                introInView,
                340,
                'border-t border-hairline pt-10 md:border-t-0 md:border-l md:pl-16 md:pt-0',
              )}
            >
              {service.detail.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-6 max-w-[560px] font-hero-sans text-[17px] leading-[1.75] text-paper/70 last:mb-0 md:text-[18px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div
            ref={relatedRef}
            {...reveal(relatedInView, 0, 'mt-20 border-t border-hairline pt-12 md:mt-24')}
          >
            <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
              Other Areas of Practice
            </span>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((other, index) => (
                <li key={other.slug} {...reveal(relatedInView, 100 + index * 70)}>
                  <Link
                    to={`/services/${other.slug}`}
                    className="group flex items-center justify-between border border-hairline px-5 py-4 font-hero-sans text-[14px] font-medium text-paper transition-colors duration-200 hover:border-gold hover:text-gold"
                  >
                    {other.title}
                    <span
                      aria-hidden="true"
                      className="ml-3 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
