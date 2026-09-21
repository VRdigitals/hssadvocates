import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main>
        <section className="flex min-h-[70vh] flex-col items-center justify-center border-t border-hairline bg-warm-white px-6 pt-[92px] text-center">
          <span className="font-hero-sans text-xs font-medium uppercase tracking-[0.16em] text-paper/60">
            404
          </span>
          <h1 className="mt-4 font-hero-display text-[clamp(32px,8vw,48px)] font-semibold uppercase text-paper">
            Page Not Found
          </h1>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 font-hero-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-gold"
          >
            Back To Home
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
