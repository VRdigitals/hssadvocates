import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { PracticeAreas } from '../components/PracticeAreas'
import { HashimIntro } from '../components/HashimIntro'
import { Approach } from '../components/Approach'
import { HashimTimeline } from '../components/HashimTimeline'
import { HowWeWork } from '../components/HowWeWork'
import { ContactCTA } from '../components/ContactCTA'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <HashimIntro />
        <Approach />
        <HashimTimeline />
        <HowWeWork />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
