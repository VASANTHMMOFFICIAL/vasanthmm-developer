import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { skills, skillCategories } from '../../data/skills.js'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Skills.module.css'

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, visible] = useScrollAnimation()

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return skills
    return skills.filter((skill) => skill.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">
            Tools I use to <span className="gradient-text">bring ideas to life</span>
          </h2>
        </div>

        <div className={styles.filters}>
          {skillCategories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${
                activeCategory === category ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={ref} className={styles.grid}>
          {filteredSkills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.id}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className={`${styles.iconWrap} ${styles[`icon${skill.id}`]}`}>
                  <Icon />
                </div>
                <p className={styles.name}>{skill.name}</p>
                <div className={styles.metaRow}>
                  <span className={styles.level}>{skill.level}%</span>
                  <span className={styles.category}>{skill.category}</span>
                </div>
                <div className={styles.progressTrack}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    animate={visible ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.04 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
