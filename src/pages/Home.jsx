import { Suspense, lazy } from 'react'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'

// Below-the-fold sections are lazy-loaded to keep the initial bundle light.
const Skills = lazy(() => import('../components/Skills/Skills.jsx'))
const Projects = lazy(() => import('../components/Projects/Projects.jsx'))
const Experience = lazy(() => import('../components/Experience/Experience.jsx'))
const Services = lazy(() => import('../components/Services/Services.jsx'))
const Statistics = lazy(() => import('../components/Statistics/Statistics.jsx'))
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials.jsx'))
const Contact = lazy(() => import('../components/Contact/Contact.jsx'))

function SectionFallback() {
  return <div style={{ minHeight: '40vh' }} aria-hidden="true" />
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Statistics />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  )
}

export default Home
