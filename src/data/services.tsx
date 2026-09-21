import type { ReactNode } from 'react'

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  'aria-hidden': true as const,
}

export const RealEstateIcon = () => (
  <svg {...iconProps}>
    <path d="M4 21V9l8-5 8 5v12" strokeLinejoin="round" />
    <path d="M9 21v-7h6v7" strokeLinejoin="round" />
    <path d="M4 21h16" strokeLinecap="round" />
  </svg>
)

export const ArbitrationIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3v18" strokeLinecap="round" />
    <path d="M5 7h14" strokeLinecap="round" />
    <path d="M5 7 2.5 12.5a2.5 2.5 0 0 0 5 0L5 7Z" strokeLinejoin="round" />
    <path d="M19 7l-2.5 5.5a2.5 2.5 0 0 0 5 0L19 7Z" strokeLinejoin="round" />
    <path d="M8.5 21h7" strokeLinecap="round" />
  </svg>
)

export const CustomsIcon = () => (
  <svg {...iconProps}>
    <path d="M3 18h4l1.5-3h7L17 18h4" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M4.5 18v-5.5L12 8l7.5 4.5V18" strokeLinejoin="round" />
    <path d="M9 18v-4h6v4" strokeLinejoin="round" />
  </svg>
)

export const InsuranceIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3.5 5 6v6c0 4.2 2.9 7.6 7 8.5 4.1-.9 7-4.3 7-8.5V6l-7-2.5Z" strokeLinejoin="round" />
    <path d="m9.25 12 1.9 1.9 3.6-3.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CourtIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3 4 7v1h16V7l-8-4Z" strokeLinejoin="round" />
    <path d="M5 10v7M9 10v7M15 10v7M19 10v7" strokeLinecap="round" />
    <path d="M3.5 20.5h17" strokeLinecap="round" />
  </svg>
)

export type Service = {
  slug: string
  title: string
  summary: string
  detail: string[]
  icon: ReactNode
}

export const services: Service[] = [
  {
    slug: 'real-estate-property',
    title: 'Real Estate & Property',
    summary:
      'Property transactions, disputes and regulatory matters across the UAE, backed by a certificate in real estate brokerage and close familiarity with the local market.',
    detail: [
      'HSS Advocates advises on property transactions, disputes and regulatory matters across the UAE, drawing on a certificate in real estate brokerage and close, current familiarity with the local market.',
      'This grounding in the property market means matters are assessed with a practical understanding of how transactions and disputes actually move through the system, not only from a legal reading of the file.',
    ],
    icon: <RealEstateIcon />,
  },
  {
    slug: 'arbitration-dispute-resolution',
    title: 'Arbitration & Dispute Resolution',
    summary:
      'Arbitration proceedings informed by first-hand experience as a case manager at the Dubai International Arbitration Centre (DIAC).',
    detail: [
      'HSS Advocates handles arbitration proceedings and dispute resolution matters, informed by first-hand experience as a case manager at the Dubai International Arbitration Centre (DIAC).',
      'That administrative vantage point — built from working inside DIAC’s own statute and procedures — shapes how matters are prepared and argued, rather than approaching arbitration from the outside alone.',
    ],
    icon: <ArbitrationIcon />,
  },
  {
    slug: 'customs-trade-law',
    title: 'Customs & Trade Law',
    summary:
      'Customs crimes, tax evasion and smuggling matters, drawing on a career that began inside Dubai Customs’ own Cases Department.',
    detail: [
      'HSS Advocates represents clients in customs crimes, tax evasion and smuggling matters, drawing on a career that began inside Dubai Customs’ own Cases Department.',
      'Matters adjudicated over the course of that career spanned tax evasion, the smuggling of goods and violations of property rights — direct experience that informs how customs and trade matters are handled today.',
    ],
    icon: <CustomsIcon />,
  },
  {
    slug: 'insurance-law',
    title: 'Insurance Law',
    summary:
      'Insurance risk and regulatory matters, informed by participation in international insurance-practice review conferences.',
    detail: [
      'HSS Advocates advises on insurance risk and regulatory matters, informed by participation in international insurance-practice review conferences.',
      'Clients are guided through insurance-related disputes and regulatory questions with counsel that stays current with how insurance practice is evolving internationally.',
    ],
    icon: <InsuranceIcon />,
  },
  {
    slug: 'court-representation-litigation',
    title: 'Court Representation & Litigation',
    summary:
      'Representation before the Supreme Court and all courts of the UAE, across civil, commercial and criminal matters.',
    detail: [
      'HSS Advocates provides representation before the Supreme Court and all courts of the UAE, across civil, commercial and criminal matters.',
      'Clients work directly with an advocate admitted to plead at every level the matter requires, from first instance through to the Supreme Court.',
    ],
    icon: <CourtIcon />,
  },
]

export function getServiceBySlug(slug: string | undefined): Service | undefined {
  return services.find((service) => service.slug === slug)
}
