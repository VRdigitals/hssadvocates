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
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView] as const
}

const steps = [
  {
    title: 'Tell Us About Your Matter',
    text: 'An initial discussion to understand the situation and the legal assistance being sought.',
  },
  {
    title: 'Legal Assessment',
    text: 'Relevant information and documents are reviewed to understand the legal position and available options.',
  },
  {
    title: 'Strategy & Next Steps',
    text: 'The recommended legal approach and next steps are explained clearly.',
  },
  {
    title: 'Counsel & Representation',
    text: 'Where instructed, HSS proceeds with the agreed legal work, representation or dispute strategy.',
  },
]

export function HowWeWork() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="how-we-work"
      className="relative overflow-hidden border-t border-hairline bg-ivory"
      aria-label="How We Work"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div {...reveal(inView, 0)}>
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-gold" aria-hidden="true" />
            <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
              How We Work
            </span>
          </div>

          <h2 className="mt-5 max-w-[18ch] text-[clamp(34px,8vw,50px)] font-hero-display font-semibold uppercase leading-[1.04] text-paper md:text-[clamp(44px,3.6vw,60px)]">
            A Clear Path From Question To <span className="text-gold">Action.</span>
          </h2>
        </div>

        <div className="relative mt-16 md:mt-20">
          {/* Connecting progression line — desktop only, static (no scroll
              hijacking; this section deliberately does not repeat the
              Hashim timeline's scroll-linked treatment) */}
          <span
            className="absolute left-0 right-0 top-[15px] hidden h-px bg-blue-border md:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} {...reveal(inView, 120 + index * 110)}>
                <div className="relative flex items-center md:block">
                  <span
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center bg-ivory font-hero-display text-[13px] font-semibold text-gold md:h-8 md:w-8"
                    style={{ border: '1px solid var(--color-gold)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-hero-display text-[19px] font-semibold uppercase leading-tight tracking-[0.01em] text-paper md:text-[20px]">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[300px] font-hero-sans text-[15px] leading-[1.6] text-paper/62">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function reveal(inView: boolean, delayMs: number) {
  return {
    style: { transitionDelay: `${delayMs}ms` },
    className: `transition-all duration-700 ease-out ${
      inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`,
  }
}
