import { useEffect, useState } from 'react'

const headlineLine =
  'block min-h-[1em] font-hero-display font-semibold leading-[0.98] tracking-[-0.01em]'

const lines: Array<{ text: string; gold?: string }> = [
  { text: 'Legal Counsel.' },
  { text: 'Clear Direction.' },
  { text: 'Strong ', gold: 'Representation.' },
]

const START_DELAY_MS = 650
const CHAR_MS = 30
const LINE_GAP_MS = 180

function useTypewriter() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLineIndex(lines.length - 1)
      setDone(true)
      return
    }

    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const fullLength = (i: number) => lines[i].text.length + (lines[i].gold?.length ?? 0)

    const typeChar = (li: number, ci: number) => {
      if (cancelled) return
      if (li >= lines.length) {
        setDone(true)
        return
      }
      if (ci > fullLength(li)) {
        timer = setTimeout(() => typeChar(li + 1, 0), LINE_GAP_MS)
        return
      }
      setLineIndex(li)
      setCharCount(ci)
      timer = setTimeout(() => typeChar(li, ci + 1), CHAR_MS)
    }

    timer = setTimeout(() => typeChar(0, 0), START_DELAY_MS)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return { lineIndex, charCount, done }
}

export function HeroContent() {
  const { lineIndex, charCount, done } = useTypewriter()

  return (
    <div className="relative z-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-2.5 opacity-0 [animation:fade-in_0.7s_0.5s_ease-out_forwards]">
        <span className="h-px w-5 bg-gold" aria-hidden="true" />
        <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/70 md:text-sm">
          HSS Advocates &amp; Legal Consultants
        </span>
      </div>

      {/* Headline reveal — typed character-by-character, firm-first not
          founder-first. Reduced-motion users get the full text instantly. */}
      <h1
        className="mt-5 text-paper md:mt-6"
        style={{ fontSize: 'clamp(38px, 6.4vw, 84px)' }}
      >
        {lines.map((line, index) => {
          const full = line.text + (line.gold ?? '')
          const shown =
            index < lineIndex || done
              ? full
              : index === lineIndex
                ? full.slice(0, charCount)
                : ''
          const shownPlain = shown.slice(0, line.text.length)
          const shownGold = shown.slice(line.text.length)
          const isTyping = index === lineIndex && !done

          return (
            <span key={line.text} className={headlineLine}>
              {shownPlain}
              {line.gold && <span className="text-gold">{shownGold}</span>}
              {isTyping && (
                <span
                  className="ml-[2px] inline-block w-[2px] translate-y-[3px] animate-pulse bg-paper/70"
                  style={{ height: '0.85em' }}
                  aria-hidden="true"
                />
              )}
            </span>
          )
        })}
      </h1>

      {/* Supporting copy — client-facing, matches approved practice areas
          (disputes → Arbitration & Dispute Resolution / Court Representation,
          property → Real Estate & Property, commercial issues → Customs &
          Trade Law / Insurance, court proceedings → Court Representation) */}
      <p className="mt-5 max-w-[520px] font-hero-sans text-[15px] leading-[1.5] text-paper/65 opacity-0 [animation:fade-in_0.8s_2.9s_ease-out_forwards] md:mt-7 md:text-[18px]">
        Legal advice and representation for individuals, entrepreneurs and
        businesses navigating disputes, property matters, commercial issues
        and court proceedings across the UAE.
      </p>

      {/* Editorial detail line */}
      <div className="mt-8 flex items-center gap-3 opacity-0 [animation:fade-in_0.8s_3.1s_ease-out_forwards] md:mt-10">
        <span className="h-px w-8 bg-paper/20" aria-hidden="true" />
        <span className="font-hero-sans text-[10px] uppercase tracking-[0.2em] text-paper/40">
          Law &nbsp;|&nbsp; People &nbsp;|&nbsp; Possibilities
        </span>
      </div>
    </div>
  )
}
