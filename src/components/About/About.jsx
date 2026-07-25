import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import { experience } from '../../data/services.js'
import styles from './About.module.css'

function About() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">
            Building interfaces people <span className="gradient-text">enjoy using</span>
          </h2>
        </div>

        <div ref={ref} className={styles.grid}>
          <motion.div
            className={styles.summary}
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3>Professional Summary</h3>
            <p>
              I am a passionate Frontend Developer specializing in building
              responsive, scalable, and modern web applications using React
              and JavaScript. I enjoy creating clean user interfaces,
              reusable components, and delivering high-quality user
              experiences.
            </p>
            <div className={styles.statRow}>
              <div>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div>
                <span className={styles.statNum}>6</span>
                <span className={styles.statLabel}>Projects Shipped</span>
              </div>
              <div>
                <span className={styles.statNum}>12+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.timeline}
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3>Career Timeline</h3>
            <ul className={styles.timelineList}>
              {experience.map((item) => (
                <li key={item.id} className={styles.timelineItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <div>
                    <p className={styles.timelinePeriod}>{item.period}</p>
                    <p className={styles.timelineRole}>{item.role}</p>
                    <p className={styles.timelineCompany}>{item.company}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
