import { useEffect, useState } from 'react'
import { PrimaryButton } from './PrimaryButton'
import { MobileMenu } from './MobileMenu'
import { navLinks } from './navLinks'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 h-[76px] transition-colors duration-500 md:h-[88px] ${
          scrolled ? 'border-b border-hairline bg-ink/94 backdrop-blur-[2px]' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-10">
          {/* Left — wordmark */}
          <a href="#top" className="flex flex-col leading-[1.05] text-paper" aria-label="HSS Advocates & Legal Consultants — home">
            <span className="font-display text-lg font-medium tracking-[0.08em] md:text-xl">HSS</span>
            <span className="font-display text-[10px] font-medium tracking-[0.22em] text-paper/60 md:text-[11px]">
              ADVOCATES
            </span>
          </a>

          {/* Center — desktop nav */}
          <nav className="hidden xl:flex xl:items-center xl:gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.14em] text-paper/85 transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-5 md:gap-7">
            <div className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-paper/85 sm:flex">
              <button type="button" className="text-paper transition-opacity hover:opacity-70">
                EN
              </button>
              <span className="text-paper/30">/</span>
              <button type="button" className="transition-opacity hover:opacity-70">
                العربية
              </button>
            </div>

            <PrimaryButton href="#consultation" className="hidden xl:inline-flex">
              Request Consultation
            </PrimaryButton>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center text-paper xl:hidden"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <path d="M0 1H22" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 8H22" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 15H22" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
