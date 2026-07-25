import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaReact, FaJs, FaCss3Alt } from 'react-icons/fa'
import { useTypingEffect } from '../../hooks/useTypingEffect.js'
import profileAvatar from '../../assets/images/vasanthmm.jpg'
import styles from './Hero.module.css'

const ROLES = [
  'Frontend Developer',
  'React Developer',
  'UI Engineer',
  'JavaScript Developer',
]

const floatingIcons = [
  { Icon: FaReact, className: styles.icon1 },
  { Icon: FaJs, className: styles.icon2 },
  { Icon: FaCss3Alt, className: styles.icon3 },
]

function Hero() {
  const typed = useTypingEffect(ROLES)

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.animatedBg} aria-hidden="true" />

      {floatingIcons.map(({ Icon, className }, i) => (
        <motion.div
          key={i}
          className={`${styles.floatIcon} ${className}`}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <Icon />
        </motion.div>
      ))}

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.heroCard}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.textBlock}>
            <motion.p
              className={styles.greeting}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Vasanth <span className="gradient-text">M.M</span>
            </motion.h1>

            <motion.h2
              className={styles.role}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span aria-hidden="true">{typed}</span>
              <span className={styles.cursor} aria-hidden="true" />
              <span className="visually-hidden">{ROLES[0]}</span>
            </motion.h2>

            <motion.p
              className={styles.tagline}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              2+ years building responsive, scalable web applications with React
              and modern JavaScript — focused on clean code and delightful user
              experiences.
            </motion.p>

            <motion.div
              className={styles.cta}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="/resume-vasanth-mm.pdf" download className="btn btn-primary">
                <FiDownload /> Download Resume
              </a>
              <button type="button" className="btn btn-outline" onClick={handleHireMe}>
                Hire Me <FiArrowRight />
              </button>
            </motion.div>
          </div>

          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={profileAvatar} alt="Vasanth M.M portrait" className={styles.avatar} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollCue}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span />
      </motion.div>
    </section>
  )
}

export default Hero
