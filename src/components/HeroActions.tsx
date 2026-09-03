import { PrimaryButton } from './PrimaryButton'
import { GhostButton } from './GhostButton'

export function HeroActions() {
  return (
    <div className="relative z-10 mt-10 flex flex-col gap-4 opacity-0 [animation:fade-in_0.8s_1s_ease-out_forwards] sm:flex-row sm:items-center sm:gap-5">
      <PrimaryButton href="#consultation" className="w-full sm:w-auto">
        Request a Consultation
      </PrimaryButton>
      <GhostButton href="#expertise" className="w-full sm:w-auto">
        Explore Our Expertise
      </GhostButton>
    </div>
  )
}
