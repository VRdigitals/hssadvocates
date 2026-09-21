import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { ServicesIndexPage } from './pages/ServicesIndexPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { MeetHashimPage } from './pages/MeetHashimPage'
import { OurApproachPage } from './pages/OurApproachPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { HowWeWorkPage } from './pages/HowWeWorkPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/meet-hashim" element={<MeetHashimPage />} />
        <Route path="/our-approach" element={<OurApproachPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
