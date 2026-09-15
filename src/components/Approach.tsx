const pillars = [
  {
    title: 'Institutional insight',
    text: 'Built from years inside Dubai Customs’ Cases Department and the Dubai International Arbitration Centre, not from the outside looking in.',
  },
  {
    title: 'Supreme Court admission',
    text: 'Authorised to plead before the Supreme Court and all courts of the UAE.',
  },
  {
    title: 'Bilingual practice',
    text: 'Matters conducted and argued in Arabic and English.',
  },
  {
    title: 'Property-market fluency',
    text: 'Certified in real estate brokerage, with close, current familiarity with the UAE market.',
  },
]

const credentials = [
  { label: 'MOJ admission', value: 'Supreme Court' },
  { label: 'Registration no.', value: '3400' },
  { label: 'Registered', value: 'Mar 2017' },
  { label: 'Languages', value: 'Arabic / English' },
]

export function Approach() {
  return (
    <section
      id="our-approach"
      className="relative border-t border-hairline bg-surface-1 px-6 py-20 md:px-10 md:py-28"
      aria-label="Our Approach"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-5 bg-gold" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
            Our Approach
          </span>
        </div>

        <h2 className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.08] text-paper">
          Counsel from inside the system
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-hairline pt-6">
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.01em] text-paper md:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-paper/60">{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-hairline">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, index) => {
              const borderClasses = [
                'border-r',
                'lg:border-r',
                'border-r border-t lg:border-t-0',
                'border-t lg:border-t-0',
              ][index]
              return (
                <div
                  key={item.label}
                  className={`border-hairline px-6 py-6 md:px-8 ${borderClasses}`}
                >
                  <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-paper/50">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-base font-semibold text-paper md:text-lg">
                    {item.value}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
