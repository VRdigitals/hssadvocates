import { PrimaryButton } from './PrimaryButton'

export function ContactCTA() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden border-t border-hairline bg-ink px-6 py-20 md:px-10 md:py-28"
      aria-label="Request a consultation"
    >
      <span
        className="pointer-events-none absolute -bottom-[8vw] -left-[4vw] select-none font-display font-bold leading-none text-paper/[0.035]"
        style={{ fontSize: '22vw' }}
        aria-hidden="true"
      >
        HSS
      </span>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-5 bg-gold" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
            Speak With HSS Advocates
          </span>
        </div>

        <h2 className="mt-5 max-w-[20ch] text-balance font-display text-[clamp(1.9rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.08] text-paper">
          Request a consultation
        </h2>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[480px] text-[17px] leading-[1.65] text-paper/70 md:text-[18px]">
            Office 608, Park Lane Tower, Business Bay, Dubai, UAE.
            <br />
            Consultations conducted in Arabic and English.
          </p>

          <PrimaryButton href="mailto:info@hssadvocates.com" className="w-full sm:w-auto">
            Request a Consultation
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
