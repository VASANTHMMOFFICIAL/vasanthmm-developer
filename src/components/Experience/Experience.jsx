import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBriefcase, FiBookOpen, FiAward } from 'react-icons/fi'
import { experience, education } from '../../data/services.js'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Experience.module.css'

const TABS = [
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'education', label: 'Education', icon: FiBookOpen },
]

function Experience() {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('experience')

  const items = activeTab === 'experience' ? experience : education

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Experience or education">
          {TABS.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon /> {tab.label}
              </button>
            )
          })}
        </div>

        <div ref={ref} className={styles.timeline}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className={styles.list}
            >
              {items.map((item, i) => {
                const isExperience = activeTab === 'experience'
                const title = isExperience ? item.role : item.degree
                const subtitle = isExperience ? item.company : item.institution
                const tags = isExperience ? item.technologies : item.achievements

                return (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <div className={styles.cardHeader}>
                      <p className={styles.period}>
                        {item.period}
                        {item.current && <span className={styles.currentBadge}>Current</span>}
                      </p>
                      <h3 className={styles.title}>{title}</h3>
                      <p className={styles.subtitle}>{subtitle}</p>
                    </div>

                    <p className={styles.description}>{item.description}</p>

                    <ul className={styles.tagList}>
                      {tags.map((tag) => (
                        <li key={tag} className={styles.tag}>
                          {!isExperience && <FiAward className={styles.tagIcon} />}
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experience
