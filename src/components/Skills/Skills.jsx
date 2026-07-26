import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { skills, skillCategories } from '../../data/skills.js'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Skills.module.css'

const RING_RADIUS = 23
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

/**
 * Pill-shaped skill chip: a full-color icon sits inside a small ring
 * that fills to the skill's proficiency level, name + category to the
 * right. Hover brightens the ring and lifts the chip.
 */
function SkillChip({ skill, visible, delay }) {
  const Icon = skill.icon
  const offset = RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * skill.level) / 100

  return (
    <motion.div
      className={styles.chip}
      style={{ '--skill-color': skill.color }}
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      tabIndex={0}
    >
      <span className={styles.ringWrap}>
        <svg viewBox="0 0 56 56" className={styles.ringSvg}>
          <circle cx="28" cy="28" r={RING_RADIUS} className={styles.ringTrack} fill="none" strokeWidth="3" />
          <motion.circle
            cx="28"
            cy="28"
            r={RING_RADIUS}
            className={styles.ringFill}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
            animate={visible ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1, delay: delay + 0.15, ease: 'easeOut' }}
          />
        </svg>
        <span className={styles.icon}>
          <Icon />
        </span>
      </span>

      <span className={styles.text}>
        <span className={styles.name}>{skill.name}</span>
        <span className={styles.meta}>
          {skill.category} · {skill.level}%
        </span>
      </span>
    </motion.div>
  )
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 })

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return skills
    return skills.filter((skill) => skill.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />

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
          {filteredSkills.map((skill, i) => (
            <SkillChip key={skill.id} skill={skill} visible={visible} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
