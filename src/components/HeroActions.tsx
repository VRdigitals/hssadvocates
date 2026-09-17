import { PrimaryButton } from './PrimaryButton'
import { GhostButton } from './GhostButton'

const heroButtonStyle = { height: '58px', paddingLeft: '30px', paddingRight: '30px' }

export function HeroActions() {
  return (
    <div className="relative z-10 mt-10 flex flex-col gap-4 opacity-0 [animation:fade-in_0.8s_1.4s_ease-out_forwards] sm:flex-row sm:items-center sm:gap-5">
      <PrimaryButton
        href="#consultation"
        className="group w-full font-hero-sans sm:w-auto"
        style={heroButtonStyle}
      >
        Request a Consultation
        <span
          aria-hidden="true"
          className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </PrimaryButton>
      <GhostButton
        href="#expertise"
        className="group w-full font-hero-sans sm:w-auto"
        style={heroButtonStyle}
      >
        Explore Our Expertise
        <span
          aria-hidden="true"
          className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </GhostButton>
    </div>
  )
}
