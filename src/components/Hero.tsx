import { HeroMedia } from './HeroMedia'
import { HeroContent } from './HeroContent'
import { HeroActions } from './HeroActions'
import { AuthorityStrip } from './AuthorityStrip'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
      aria-label="HSS Advocates & Legal Consultants — introduction"
    >
      {/* Oversized background typography — depth, never a distraction */}
      <span
        className="pointer-events-none absolute -bottom-[6vw] -right-[4vw] select-none font-display font-medium leading-none text-paper/[0.045]"
        style={{ fontSize: '26vw' }}
        aria-hidden="true"
      >
        HSS
      </span>

      <HeroMedia />

      <div className="relative flex flex-1 items-end md:items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 md:px-10 md:pb-0 md:pt-[88px]">
          <div className="md:max-w-[62%] xl:max-w-[58%]">
            <HeroContent />
            <HeroActions />
          </div>
        </div>
      </div>

      <AuthorityStrip />
    </section>
  )
}
