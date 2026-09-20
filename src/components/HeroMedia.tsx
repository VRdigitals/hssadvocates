/**
 * HSS_HERO_BACKGROUND — institutional, not founder-led.
 *
 * The hero previously used the approved photo of Hashim Salem Saif; per
 * the new content-hierarchy brief, his portrait now appears for the first
 * time in the dedicated "Meet Hashim" section instead — the same image
 * file just moved there (see HashimIntro.tsx). The hero itself represents
 * HSS as an institution, not an individual, so rather than source or
 * fabricate a second photograph, this is a deliberate no-photo treatment:
 * a bright gradient field with a restrained gold geometric mark (echoing
 * mashrabiya lattice work used elsewhere on the site) standing in for
 * "premium UAE architecture" without depicting a specific building.
 */
export function HeroMedia() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, #FFFFFF 0%, #F7F5F0 45%, #EEF5F8 100%)',
        }}
      />

      {/* Soft warm daylight, upper right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 60% at 82% 12%, rgba(206,163,68,0.14) 0%, rgba(206,163,68,0) 70%)',
        }}
      />

      {/* Pale blue depth, lower right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 65% at 90% 100%, rgba(197,220,229,0.6) 0%, rgba(197,220,229,0) 70%)',
        }}
      />

      {/* Restrained geometric lattice mark — architectural, never literal */}
      <svg
        className="absolute right-0 top-0 h-full opacity-[0.16] md:right-[4%]"
        width="46%"
        viewBox="0 0 400 800"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        <g stroke="var(--color-gold)" strokeWidth="1">
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => {
              const x = col * 110 - 40
              const y = row * 120 - 20
              return (
                <path
                  key={`${row}-${col}`}
                  d={`M${x} ${y + 55} L${x + 55} ${y} L${x + 110} ${y + 55} L${x + 55} ${y + 110} Z`}
                />
              )
            }),
          )}
        </g>
      </svg>

      {/* Bottom merge into the authority strip */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(0deg, #F7F5F0 0%, rgba(247,245,240,0) 100%)' }}
      />
    </div>
  )
}
