const areas = [
  {
    title: 'Real Estate & Property',
    text: 'Property transactions, disputes and regulatory matters across the UAE, backed by a certificate in real estate brokerage and close familiarity with the local market.',
  },
  {
    title: 'Arbitration & Dispute Resolution',
    text: 'Arbitration proceedings informed by first-hand experience as a case manager at the Dubai International Arbitration Centre (DIAC).',
  },
  {
    title: 'Customs & Trade Law',
    text: 'Customs crimes, tax evasion and smuggling matters, drawing on a career that began inside Dubai Customs’ own Cases Department.',
  },
  {
    title: 'Insurance Law',
    text: 'Insurance risk and regulatory matters, informed by participation in international insurance-practice review conferences.',
  },
  {
    title: 'Court Representation & Litigation',
    text: 'Representation before the Supreme Court and all courts of the UAE, across civil, commercial and criminal matters.',
  },
]

export function PracticeAreas() {
  return (
    <section
      id="expertise"
      className="relative border-t border-hairline bg-ink px-6 py-20 md:px-10 md:py-28"
      aria-label="Expertise"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-5 bg-gold" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
            Expertise
          </span>
        </div>

        <h2 className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.08] text-paper">
          Areas of practice
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title} className="border-t border-hairline pt-6">
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.01em] text-paper md:text-xl">
                {area.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-paper/60">{area.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
