import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import logo from '../../assets/images/logo-icon.png'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Scroll-spy: highlight the dot for the section in view
  useEffect(() => {
    let observer
    let scrollTimer

    const setupObserver = () => {
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
        Boolean,
      )

      if (sections.length === 0) return false

      if (observer) observer.disconnect()

      observer = new IntersectionObserver(
        (entries) => {
          let maxRatio = 0
          let activeId = 'home'

          entries.forEach((entry) => {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio
              activeId = entry.target.id
            }
          })

          if (maxRatio > 0) {
            setActiveSection(activeId)
          }
        },
        {
          rootMargin: '-30% 0px -30% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      )

      sections.forEach((section) => {
        observer.observe(section)
      })

      return true
    }

    // Try to setup observer immediately
    const isSetup = setupObserver()

    if (!isSetup) {
      // If not all sections found, retry after a delay (for lazy-loaded components)
      scrollTimer = setTimeout(() => {
        setupObserver()
      }, 800)
    }

    // Fallback scroll listener for extra reliability
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
        Boolean,
      )

      if (sections.length === 0) return

      const scrollTop = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(scrollTimer)
      observer?.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Corner logo + theme toggle, always visible */}
      <div className={styles.corner}>
     <button
          className={styles.logo}
          onClick={() => handleNavClick('home')}
          aria-label="Go to home section"
        >
          <img src={logo} alt="VMM logo" className={styles.logoImg} />
        </button>
      </div>

      <div className={styles.cornerActions}>
        <div className={styles.desktopToggle}>
          <ThemeToggle />
        </div>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <FiMenu />
        </button>
      </div>

      {/* Fixed side dot navigation — desktop only */}
      <nav className={styles.dotNav} aria-label="Section navigation">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            className={`${styles.dotBtn} ${
              activeSection === link.id ? styles.dotActive : ''
            }`}
            onClick={() => handleNavClick(link.id)}
            aria-label={`Go to ${link.label}`}
            aria-current={activeSection === link.id}
          >
            <span className={styles.dot} />
            <span className={styles.dotTooltip}>{link.label}</span>
          </button>
        ))}
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className={styles.overlayClose}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>

            <nav className={styles.overlayLinks}>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  className={`${styles.overlayLink} ${
                    activeSection === link.id ? styles.overlayLinkActive : ''
                  }`}
                  onClick={() => handleNavClick(link.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className={styles.overlayFooter}>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
