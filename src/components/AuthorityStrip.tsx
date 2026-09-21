import type { ReactNode } from 'react'

type Item = {
  number: string
  label: string
  icon: ReactNode
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  'aria-hidden': true as const,
}

const items: Item[] = [
  {
    number: '01',
    label: 'UAE Legal Representation',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4 7v1h16V7l-8-4Z" strokeLinejoin="round" />
        <path d="M5 10v7M9 10v7M15 10v7M19 10v7" strokeLinecap="round" />
        <path d="M3.5 20.5h17" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    label: 'Dispute Resolution',
    icon: (
      <svg {...iconProps}>
        <path d="M4.5 4.5 10 10" strokeLinecap="round" />
        <path d="M7.25 7.25 3 11.5a1.9 1.9 0 0 0 2.7 2.7l4.25-4.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10l5.5-5.5a1.9 1.9 0 0 0-2.7-2.7L11.3 7.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 11l6.5 6.5a1.9 1.9 0 0 1-2.7 2.7L10.3 13.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03',
    label: 'Commercial Counsel',
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="7" width="16" height="13" rx="0.5" />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" strokeLinecap="round" />
        <path d="M4 12h16" />
      </svg>
    ),
  },
  {
    number: '04',
    label: 'Arabic / English',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.25" />
        <path d="M3.75 12h16.5M12 3.75c2.2 2.2 3.4 5.1 3.4 8.25s-1.2 6.05-3.4 8.25c-2.2-2.2-3.4-5.1-3.4-8.25S9.8 5.95 12 3.75Z" />
      </svg>
    ),
  },
]

export function AuthorityStrip() {
  return (
    <div
      className="relative z-10 border-t bg-warm-white opacity-0 [animation:fade-in_0.8s_3.5s_ease-out_forwards]"
      style={{ borderColor: 'rgba(206,163,68,0.35)' }}
    >
      <ul className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={item.number}
            className={`flex items-center gap-3 px-6 py-5 md:px-8 md:py-6 ${
              index !== 0 ? 'border-t border-hairline md:border-t-0' : ''
            } ${index % 2 === 1 ? 'border-l border-hairline' : ''} ${
              index > 0 ? 'md:border-l md:border-hairline' : ''
            }`}
          >
            <span className="text-gold" style={{ opacity: 0.8 }}>
              {item.icon}
            </span>
            <div className="leading-tight">
              <span className="font-hero-sans text-[10px] font-medium tracking-[0.1em] text-gold/60">
                {item.number}
              </span>
              <p className="mt-0.5 font-hero-sans text-[11px] font-medium uppercase tracking-[0.1em] text-paper/70">
                {item.label}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
