const timeline = [
  {
    year: '2008',
    text: 'Began his legal career with Dubai Customs, progressing through the organisation over the years that followed.',
  },
  {
    year: 'Customs Cases Dept.',
    text: 'Adjudicated matters spanning tax evasion, the smuggling of goods and violations of property rights.',
  },
  {
    year: 'DIAC',
    text: 'Served as a case manager at the Dubai International Arbitration Centre, building detailed knowledge of its statute and procedures.',
  },
  {
    year: 'Real Estate',
    text: 'Holds a certificate in real estate brokerage and maintains close familiarity with the UAE property market.',
  },
]

export function HashimProfile() {
  return (
    <section
      id="hashim-salem"
      className="relative border-t border-hairline bg-surface-1 px-6 py-20 md:px-10 md:py-28"
      aria-label="Hashim Salem Saif"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-gold" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
                Hashim Salem Saif
              </span>
            </div>

            <h2 className="mt-5 text-balance font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.08] text-paper">
              Two decades inside the system
            </h2>

            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.65] text-paper/70 md:text-[18px]">
              Hashim Salem Saif is an Emirati advocate who appears before all
              courts of the UAE. His practice draws on a career spent inside
              the mechanisms he now argues in front of &mdash; from customs
              enforcement to arbitration administration &mdash; alongside
              continued training through the new arbitrators&rsquo; course,
              the Young Arbitrators Conference, and the IAIS conference on
              insurance practice and risk.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-paper/50">
              <span>Arabic / English</span>
              <span className="text-paper/25">&bull;</span>
              <span>Business Bay, Dubai</span>
            </div>
          </div>

          <ol className="flex flex-col">
            {timeline.map((item, index) => (
              <li
                key={item.year}
                className={`grid grid-cols-[minmax(7rem,10rem)_1fr] gap-6 py-6 ${
                  index !== 0 ? 'border-t border-hairline' : ''
                }`}
              >
                <span className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-gold">
                  {item.year}
                </span>
                <p className="text-[15px] leading-[1.6] text-paper/70">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
