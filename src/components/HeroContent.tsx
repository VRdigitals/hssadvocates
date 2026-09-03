const headlineLine =
  'block break-words text-[clamp(2.15rem,4.6vw,4.5rem)] leading-[0.96] tracking-tight'

export function HeroContent() {
  return (
    <div className="relative z-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-2.5 opacity-0 [animation:fade-in_0.7s_0.1s_ease-out_forwards]">
        <span className="h-px w-5 bg-gold" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
          HSS Advocates &amp; Legal Consultants
        </span>
      </div>

      {/* Headline */}
      <h1 className="mt-6 font-display font-normal uppercase text-paper">
        <span className="block overflow-hidden">
          <span className={`${headlineLine} [animation:reveal-up_0.9s_0.28s_ease-out_both]`}>
            Strategic Counsel.
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className={`${headlineLine} [animation:reveal-up_0.9s_0.42s_ease-out_both]`}>
            Strong Representation.
          </span>
        </span>
      </h1>

      {/* Supporting copy */}
      <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-paper/65 opacity-0 [animation:fade-in_0.8s_0.7s_ease-out_forwards] md:text-[18px]">
        Legal counsel and representation for individuals, entrepreneurs and
        businesses across the UAE.
      </p>

      {/* Hashim identifier */}
      <div className="mt-8 flex items-center gap-4 border-l border-hairline pl-4 opacity-0 [animation:fade-in_0.8s_0.85s_ease-out_forwards]">
        <div className="leading-tight">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-paper/50">
            Led by
          </p>
          <p className="mt-1 font-display text-base font-medium tracking-[0.01em] text-paper md:text-lg">
            Hashim Salem Saif
          </p>
          <p className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-paper/50">
            Emirati Advocate
          </p>
        </div>
      </div>
    </div>
  )
}
