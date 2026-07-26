import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiFolder, FiCalendar, FiCode, FiGithub } from 'react-icons/fi'
import { achievements } from '../../data/services.js'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Statistics.module.css'

const ICONS = {
  projects: FiFolder,
  experience: FiCalendar,
  technologies: FiCode,
  commits: FiGithub,
}

/**
 * Animates a number counting up from 0 to `value` once `start` is true.
 */
function Counter({ value, start, duration = 1500 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return undefined
    let startTime = null
    let frame

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, value, duration])

  return <span>{count}+</span>
}

function Statistics() {
  const [ref, visible] = useScrollAnimation({ threshold: 0.4 })

  return (
    <section className={`section ${styles.stats}`}>
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Achievements</span>
          <h2 className="section-title">
            Numbers that <span className="gradient-text">tell the story</span>
          </h2>
        </div>

        <div ref={ref} className={styles.strip}>
          {achievements.map((item, i) => {
            const Icon = ICONS[item.id] ?? FiFolder
            return (
              <motion.div
                key={item.id}
                className={styles.stat}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={styles.icon}>
                  <Icon />
                </span>
                <p className={styles.number}>
                  <Counter value={item.value} start={visible} />
                </p>
                <p className={styles.label}>{item.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Statistics
