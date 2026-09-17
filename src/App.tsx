import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TheFirm } from './components/TheFirm'
import { HashimProfile } from './components/HashimProfile'
import { PracticeAreas } from './components/PracticeAreas'
import { Approach } from './components/Approach'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TheFirm />
        <HashimProfile />
        <PracticeAreas />
        <Approach />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
