import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

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

function PracticeTile({
  index,
  number,
  title,
  text,
  icon,
  slug,
  inView,
}: {
  index: number
  number: string
  title: string
  text: string
  icon: ReactNode
  slug: string
  inView: boolean
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [hovering, setHovering] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const finePointer =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onPointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!finePointer || reducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -3, y: px * 3 })
  }

  const transform = hovering
    ? `translateY(-8px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.005)`
    : 'translateY(0) rotateX(0) rotateY(0) scale(1)'

  return (
    <Link
      ref={cardRef}
      to={`/services/${slug}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false)
        setTilt({ x: 0, y: 0 })
      }}
      onPointerMove={onPointerMove}
      className="group relative flex flex-col items-start border p-7 text-left transition-[border-color,background-color,box-shadow] duration-[350ms] ease-out focus-visible:outline-none md:p-8"
      style={{
        opacity: inView ? 1 : 0,
        transitionDelay: `${index * 90}ms`,
        transform: inView ? undefined : 'translateY(26px) scale(0.985)',
        backgroundColor: hovering ? 'rgba(255,253,248,0.9)' : 'rgba(255,253,248,0.76)',
        borderColor: hovering ? 'var(--color-gold)' : 'rgba(16,42,58,0.12)',
        boxShadow: hovering ? '0 18px 34px -22px rgba(120,90,30,0.45)' : 'none',
        perspective: '900px',
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-focus-visible:opacity-100"
        style={{ outline: '2px solid var(--color-gold)', outlineOffset: '-2px' }}
        aria-hidden="true"
      />
      <div
        className="transition-transform duration-[350ms] ease-out"
        style={{ transform, transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-3">
          <span className="font-hero-sans text-[13px] font-medium tracking-[0.08em]" style={{ color: 'var(--color-navy)' }}>
            {number}
          </span>
          <span
            className="h-px w-6 transition-colors duration-300"
            style={{ backgroundColor: hovering ? 'var(--color-gold)' : 'rgba(206,163,68,0.5)' }}
            aria-hidden="true"
          />
        </div>

        <div
          className="mt-5 transition-colors duration-300"
          style={{ color: hovering ? 'var(--color-gold)' : 'rgba(16,42,58,0.55)' }}
        >
          {icon}
        </div>

        <h3
          className="mt-4 font-hero-display text-[22px] font-semibold uppercase leading-tight tracking-[0.01em] transition-transform duration-300 md:text-[25px]"
          style={{ color: 'var(--color-navy)', transform: hovering ? 'translateX(2px)' : 'translateX(0)' }}
        >
          {title}
        </h3>

        <p
          className="mt-3 max-w-[320px] font-hero-sans text-[16px] leading-[1.6] md:text-[17px]"
          style={{ color: 'rgba(16,42,58,0.66)' }}
        >
          {text}
        </p>
      </div>

      <span
        className="mt-6 inline-flex items-center font-hero-sans text-[13px] font-medium uppercase tracking-[0.1em] transition-transform duration-300 ease-out"
        style={{
          color: 'var(--color-gold)',
          transform: hovering ? 'translateX(7px)' : 'translateX(0)',
        }}
      >
        &rarr;
      </span>
    </Link>
  )
}

export function PracticeAreas() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="expertise"
      className="relative overflow-hidden border-t border-hairline"
      aria-label="Expertise"
    >
      {/*
        AREAS_OF_PRACTICE_BACKGROUND — the approved production photograph
        (bright ivory UAE interior: marble floor, mashrabiya screen, olive
        trees, soft sunlight, skyline glimpse). Deliberately the first bright
        section on the page — a rhythm break after three dark sections — so
        this gets no dark overlay, only enough localized lightening behind
        the headline to guarantee contrast.
      */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <picture>
          <source srcSet="/hero/areas-of-practice-background.webp" type="image/webp" />
          <img
            src="/hero/areas-of-practice-background.jpg"
            alt=""
            className="h-full w-full object-cover object-[30%_center] md:object-[center_center]"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, rgba(255,252,246,0.55) 0%, rgba(255,252,246,0.18) 32%, rgba(255,252,246,0) 55%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 700ms ease-out, transform 700ms ease-out',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-gold" aria-hidden="true" />
              <span
                className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] md:text-sm"
                style={{ color: 'rgba(16,42,58,0.75)' }}
              >
                Legal Services
              </span>
            </div>

            <h2
              className="mt-5 text-[clamp(40px,9vw,58px)] font-hero-display font-semibold uppercase leading-[0.98] md:text-[clamp(58px,4.5vw,88px)]"
            >
              <span style={{ color: 'var(--color-navy)' }}>Areas of </span>
              <span className="text-gold">Practice</span>
            </h2>
          </div>

          <p
            className="max-w-[380px] font-hero-sans text-[16px] leading-[1.6] md:mt-3 md:text-[17px]"
            style={{
              color: 'rgba(16,42,58,0.62)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 700ms ease-out 120ms, transform 700ms ease-out 120ms',
            }}
          >
            HSS provides focused legal advice and representation across key
            areas of UAE law, combining practical guidance with direct
            advocate involvement.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 md:mt-16">
          {services.map((service, index) => (
            <PracticeTile
              key={service.slug}
              index={index}
              number={String(index + 1).padStart(2, '0')}
              title={service.title}
              text={service.summary}
              icon={service.icon}
              slug={service.slug}
              inView={inView}
            />
          ))}

          {/* Sixth tile — brand/philosophy moment, not another practice area */}
          <div
            className="relative flex flex-col justify-between overflow-hidden border p-7 md:p-8"
            style={{
              opacity: inView ? 1 : 0,
              transitionDelay: `${services.length * 90}ms`,
              transition: 'opacity 600ms ease-out, transform 600ms ease-out',
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(26px) scale(0.985)',
              backgroundColor: 'rgba(255,253,248,0.4)',
              borderColor: 'rgba(16,42,58,0.12)',
            }}
          >
            <span
              className="font-hero-sans text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{ color: 'rgba(16,42,58,0.5)' }}
            >
              A Broader Perspective
            </span>
            <h3 className="mt-5 font-hero-display text-[30px] font-semibold uppercase leading-[1.02] md:text-[34px]">
              <span className="block" style={{ color: 'var(--color-navy)' }}>
                Law.
              </span>
              <span className="block" style={{ color: 'var(--color-navy)' }}>
                People.
              </span>
              <span className="block text-gold">Possibilities.</span>
            </h3>
            <span className="mt-6 self-end text-[15px] text-gold" aria-hidden="true">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
