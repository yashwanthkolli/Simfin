import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import ScrollHandler from './ScrollHandler'
import Home from '@pages/Home/Home'
import PageSkeleton from '@components/ui/PageSkeleton/PageSkeleton'


// Lazy imports
const Services = lazy(() => import('@pages/Services/Services'))
const About = lazy(() => import('@pages/About/About'))
const Contact = lazy(() => import('@pages/Contact/Contact'))
const Resources = lazy(() => import('@pages/Resources/Resources'))
const PrivacyPolicy = lazy(() => import('@pages/Policy/PrivacyPolicy'))
const Terms = lazy(() => import('@pages/Policy/Terms'))
const Disclosures = lazy(() => import('@pages/Policy/Disclosures'))
const NotFound = lazy(() => import('@pages/NotFound/NotFound'))

const AppRouter = () => {
  return (
    <main id="main-content">
      <ScrollHandler />

      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclosures" element={<Disclosures />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default AppRouter
