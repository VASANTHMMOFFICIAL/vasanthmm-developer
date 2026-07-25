import { motion } from 'framer-motion'
import { experience } from '../../data/services.js'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Experience.module.css'

function Experience() {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </div>

        <div ref={ref} className={styles.timeline}>
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.markerCol}>
                <span className={styles.marker} />
                {i !== experience.length - 1 && <span className={styles.line} />}
              </div>
              <div className={styles.card}>
                <p className={styles.period}>{item.period}</p>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <ul className={styles.points}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
