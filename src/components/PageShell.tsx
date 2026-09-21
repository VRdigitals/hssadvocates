import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { ContactCTA } from './ContactCTA'
import { Footer } from './Footer'

type Crumb = { label: string; to?: string }

type PageShellProps = {
  crumbs: Crumb[]
  children: ReactNode
}

export function PageShell({ crumbs, children }: PageShellProps) {
  return (
    <>
      <Header />
      <main>
        <nav
          aria-label="Breadcrumb"
          className="border-b border-hairline bg-warm-white px-6 pb-4 pt-[92px] md:px-10 md:pt-[104px]"
        >
          <ol className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-2 gap-y-1 font-hero-sans text-[11px] font-medium uppercase tracking-[0.1em] text-paper/50">
            {crumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {crumb.to ? (
                  <Link to={crumb.to} className="transition-colors duration-200 hover:text-gold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-paper/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {children}
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
