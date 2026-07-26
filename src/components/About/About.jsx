import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiZap, FiCpu } from 'react-icons/fi'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './About.module.css'

const highlights = [
  { id: 'clean-code', label: 'Clean, Readable Code', icon: FiCode },
  { id: 'reusable', label: 'Reusable Components', icon: FiLayers },
  { id: 'performance', label: 'Performance Focused', icon: FiZap },
  { id: 'hooks', label: 'Modern React Hooks', icon: FiCpu },
]

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
            className={styles.textCol}
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.paragraph}>
              I am a passionate Frontend Developer specializing in building
              responsive, scalable, and modern web applications using React
              and JavaScript. I enjoy creating clean user interfaces,
              reusable components, and delivering high-quality user
              experiences.
            </p>

            <div className={styles.highlights}>
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.id}
                    className={styles.highlightChip}
                    initial={{ opacity: 0, y: 14 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  >
                    <span className={styles.highlightIcon}>
                      <Icon />
                    </span>
                    <span>{item.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className={styles.codeCol}
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <span className={styles.dot} style={{ background: '#f87171' }} />
                <span className={styles.dot} style={{ background: '#fbbf24' }} />
                <span className={styles.dot} style={{ background: '#4ade80' }} />
                <span className={styles.fileName}>profile.js</span>
              </div>

              <pre className={styles.codeBody}>
                <code>
                  <span className={styles.kw}>const</span> developer = {'{'}
                  {'\n'}  name: <span className={styles.str}>&apos;Vasanth M.M&apos;</span>,
                  {'\n'}  role: <span className={styles.str}>&apos;Frontend Developer&apos;</span>,
                  {'\n'}  experience: <span className={styles.str}>&apos;2+ years&apos;</span>,
                  {'\n'}  stack: [
                  <span className={styles.str}>&apos;React&apos;</span>,{' '}
                  <span className={styles.str}>&apos;JavaScript&apos;</span>,{' '}
                  <span className={styles.str}>&apos;CSS3&apos;</span>],
                  {'\n'}  focus: <span className={styles.str}>&apos;Clean, scalable UI&apos;</span>,
                  {'\n'}  status: <span className={styles.str}>&apos;available&apos;</span>,
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
