import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../../data/services.js'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Testimonials.module.css'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Testimonials() {
  const [ref, visible] = useScrollAnimation({ threshold: 0.15 })

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">
            What people <span className="gradient-text">say</span>
          </h2>
        </div>

        <div ref={ref} className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              className={`${styles.card} ${i % 2 === 1 ? styles.cardOffset : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />

              <div className={styles.stars} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>

              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>

              <figcaption className={styles.author}>
                <span className={styles.avatar}>{getInitials(t.name)}</span>
                <span>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
