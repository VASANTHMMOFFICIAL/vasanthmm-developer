import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollTop from './components/ScrollTop/ScrollTop.jsx'
import Loader from './components/Loader/Loader.jsx'
import Home from './pages/Home.jsx'

/**
 * Thin fixed bar at the very top of the viewport that fills
 * left-to-right based on how far the user has scrolled the page.
 */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        background: 'var(--gradient-accent)',
        zIndex: 2000,
        transition: 'width 0.1s linear',
      }}
      aria-hidden="true"
    />
  )
}

/**
 * Subtle radial glow that follows the pointer on desktop.
 * Purely decorative — disabled on touch devices and respects
 * prefers-reduced-motion via CSS.
 */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '480px',
        height: '480px',
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translate(${pos.x - 240}px, ${pos.y - 240}px)`,
        background:
          'radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(56,189,248,0) 70%)',
        transition: 'transform 0.12s ease-out',
      }}
      aria-hidden="true"
    />
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgressBar />
          <CursorGlow />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  )
}

export default App
