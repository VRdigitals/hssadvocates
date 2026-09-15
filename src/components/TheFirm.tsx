export function TheFirm() {
  return (
    <section
      id="the-firm"
      className="relative border-t border-hairline bg-ink px-6 py-20 md:px-10 md:py-28"
      aria-label="The Firm"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-5 bg-gold" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
            The Firm
          </span>
        </div>

        <h2 className="mt-5 max-w-[16ch] text-balance font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.08] text-paper">
          Counsel built on institutional experience
        </h2>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
          <p className="max-w-[560px] text-[17px] leading-[1.65] text-paper/70 md:text-[18px]">
            HSS Advocates &amp; Legal Consultants is a Dubai-based practice led
            by Hashim Salem Saif, an Emirati advocate admitted to plead before
            the Supreme Court and all courts of the UAE. The firm is
            registered with the UAE Ministry of Justice and operates from
            Business Bay, at the centre of Dubai&rsquo;s commercial district.
          </p>
          <p className="max-w-[560px] text-[17px] leading-[1.65] text-paper/70 md:text-[18px]">
            Clients work directly with an advocate whose grounding comes from
            inside the system itself &mdash; enforcement, arbitration
            administration and the property market &mdash; rather than from
            observation of it alone. That vantage shapes how matters are
            assessed, argued and resolved.
          </p>
        </div>
      </div>
    </section>
  )
}
