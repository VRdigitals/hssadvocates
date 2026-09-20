import { navLinks } from './navLinks'

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="bg-ink px-6 md:px-10">
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, var(--color-gold) 0, var(--color-gold) 56px, rgba(255,255,255,0.1) 56px, rgba(255,255,255,0.1) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-8">
        <a href="#top" className="flex items-center gap-3">
          <img src="/brand/hss-logo-icon.png" alt="" className="h-7 w-auto opacity-90" />
          <span className="font-hero-sans text-[11px] font-medium uppercase leading-tight tracking-[0.12em] text-white/60">
            HSS Advocates
            <br />
            &amp; Legal Consultants
          </span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative font-hero-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/50 transition-colors duration-300 hover:text-white focus-visible:text-white"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex items-center gap-4">
            <span className="font-hero-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/50">
              EN / العربية
            </span>
            <a
              href="#top"
              onClick={scrollToTop}
              className="font-hero-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/50 transition-colors duration-300 hover:text-gold focus-visible:text-gold"
            >
              Back To Top &uarr;
            </a>
          </div>
          <p className="font-hero-sans text-[10px] uppercase tracking-[0.1em] text-white/35">
            &copy; {new Date().getFullYear()} HSS Advocates &amp; Legal Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
