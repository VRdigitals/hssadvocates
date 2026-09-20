import { useEffect } from 'react'
import { PrimaryButton } from './PrimaryButton'
import { mobileNavLinks } from './navLinks'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-50 bg-ink transition-opacity duration-300 xl:hidden ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col px-6 pt-6 pb-10">
        <div className="flex items-center justify-between">
          <img src="/brand/hss-logo-icon.png" alt="HSS" className="h-9 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            className="flex h-11 w-11 items-center justify-center text-white"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M2 2L20 20M20 2L2 20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <nav className="mt-16 flex flex-1 flex-col justify-center gap-2" aria-label="Primary">
          {mobileNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className="border-b border-white/12 py-4 font-display text-3xl font-medium uppercase text-white transition-colors duration-200 hover:text-gold xs:text-4xl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
            <button type="button" tabIndex={open ? 0 : -1} className="text-white">
              EN
            </button>
            <span className="text-white/30">/</span>
            <button type="button" tabIndex={open ? 0 : -1}>
              العربية
            </button>
          </div>
          <PrimaryButton href="#consultation" onClick={onClose} tabIndex={open ? 0 : -1} className="w-full">
            Request Consultation
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
