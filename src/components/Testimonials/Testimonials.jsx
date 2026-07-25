import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../../data/services.js'
import styles from './Testimonials.module.css'

function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback(
    (next) => {
      setDirection(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1)
      setIndex(next)
    },
    [index],
  )

  const next = useCallback(() => {
    goTo((index + 1) % testimonials.length)
  }, [goTo, index])

  const prev = () => {
    goTo((index - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const current = testimonials[index]

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">
            What people <span className="gradient-text">say</span>
          </h2>
        </div>

        <div className={styles.slider}>
          <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />

          <div className={styles.viewport}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.4 }}
                className={styles.slide}
              >
                <p className={styles.quote}>&ldquo;{current.quote}&rdquo;</p>
                <p className={styles.name}>{current.name}</p>
                <p className={styles.role}>{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <button onClick={prev} aria-label="Previous testimonial" className={styles.arrow}>
              <FiChevronLeft />
            </button>
            <div className={styles.dots}>
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className={styles.arrow}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
