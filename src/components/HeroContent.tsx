const headlineLine =
  'block break-words font-hero-display font-semibold leading-[0.98] tracking-[-0.01em]'

export function HeroContent() {
  return (
    <div className="relative z-10">
      {/* 3. Eyebrow */}
      <div className="flex items-center gap-2.5 opacity-0 [animation:fade-in_0.7s_0.5s_ease-out_forwards]">
        <span className="h-px w-5 bg-gold" aria-hidden="true" />
        <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
          HSS Advocates &amp; Legal Consultants
        </span>
      </div>

      {/* 4. Headline reveal */}
      <h1
        className="mt-6 text-paper"
        style={{ fontSize: 'clamp(64px, 5.5vw, 100px)' }}
      >
        <span className="block overflow-hidden">
          <span className={`${headlineLine} [animation:reveal-up_0.9s_0.65s_ease-out_both]`}>
            Strategic Counsel.
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className={`${headlineLine} [animation:reveal-up_0.9s_0.8s_ease-out_both]`}>
            Strong <span className="text-gold">Representation.</span>
          </span>
        </span>
      </h1>

      {/* 5. Supporting copy */}
      <p className="mt-7 max-w-[520px] font-hero-sans text-[17px] leading-[1.55] text-paper/65 opacity-0 [animation:fade-in_0.8s_1s_ease-out_forwards] md:text-[18px]">
        Legal counsel and representation for individuals, entrepreneurs and
        businesses across the UAE.
      </p>

      {/* 6. Leadership identifier — a credit line, not a profile card */}
      <div className="mt-8 flex items-center gap-4 opacity-0 [animation:fade-in_0.8s_1.15s_ease-out_forwards]">
        <span className="h-11 w-px bg-gold/70" aria-hidden="true" />
        <div className="leading-tight">
          <p className="font-hero-sans text-[10px] font-medium uppercase tracking-[0.16em] text-paper/50">
            Led by
          </p>
          <p className="mt-1 font-hero-display text-xl font-semibold tracking-[0.01em] text-paper md:text-2xl">
            Hashim Salem Saif
          </p>
          <p className="mt-0.5 font-hero-sans text-[11px] uppercase tracking-[0.1em] text-paper/50">
            Emirati Advocate
          </p>
        </div>
      </div>

      {/* Editorial detail line */}
      <div className="mt-6 flex items-center gap-3 opacity-0 [animation:fade-in_0.8s_1.25s_ease-out_forwards]">
        <span className="h-px w-8 bg-paper/20" aria-hidden="true" />
        <span className="font-hero-sans text-[10px] uppercase tracking-[0.2em] text-paper/40">
          Law &nbsp;|&nbsp; People &nbsp;|&nbsp; Possibilities
        </span>
      </div>
    </div>
  )
}
