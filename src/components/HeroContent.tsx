const headlineLine =
  'block font-hero-display font-semibold leading-[0.98] tracking-[-0.01em]'

export function HeroContent() {
  return (
    <div className="relative z-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-2.5 opacity-0 [animation:fade-in_0.7s_0.5s_ease-out_forwards]">
        <span className="h-px w-5 bg-gold" aria-hidden="true" />
        <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
          HSS Advocates &amp; Legal Consultants
        </span>
      </div>

      {/* Headline reveal — firm-first, not founder-first */}
      <h1
        className="mt-5 text-paper md:mt-6"
        style={{ fontSize: 'clamp(38px, 6.4vw, 84px)' }}
      >
        <span className="block overflow-hidden">
          <span className={`${headlineLine} [animation:reveal-up_0.9s_0.65s_ease-out_both]`}>
            Legal Counsel.
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className={`${headlineLine} [animation:reveal-up_0.9s_0.78s_ease-out_both]`}>
            Clear Direction.
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className={`${headlineLine} [animation:reveal-up_0.9s_0.91s_ease-out_both]`}>
            Strong <span className="text-gold">Representation.</span>
          </span>
        </span>
      </h1>

      {/* Supporting copy — client-facing, matches approved practice areas
          (disputes → Arbitration & Dispute Resolution / Court Representation,
          property → Real Estate & Property, commercial issues → Customs &
          Trade Law / Insurance, court proceedings → Court Representation) */}
      <p className="mt-5 max-w-[520px] font-hero-sans text-[15px] leading-[1.5] text-paper/65 opacity-0 [animation:fade-in_0.8s_1.1s_ease-out_forwards] md:mt-7 md:text-[18px]">
        Legal advice and representation for individuals, entrepreneurs and
        businesses navigating disputes, property matters, commercial issues
        and court proceedings across the UAE.
      </p>

      {/* Editorial detail line */}
      <div className="mt-8 flex items-center gap-3 opacity-0 [animation:fade-in_0.8s_1.3s_ease-out_forwards] md:mt-10">
        <span className="h-px w-8 bg-paper/20" aria-hidden="true" />
        <span className="font-hero-sans text-[10px] uppercase tracking-[0.2em] text-paper/40">
          Law &nbsp;|&nbsp; People &nbsp;|&nbsp; Possibilities
        </span>
      </div>
    </div>
  )
}
