import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiStar } from 'react-icons/fi'
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiVite } from 'react-icons/si'
import { useTypingEffect } from '../../hooks/useTypingEffect.js'
import profilePhoto from '../../assets/images/profile.jpg'
import styles from './Hero.module.css'
import resumePdf from "../../assets/PDF/VASANTH_MM_RESUME.pdf";

const ROLES = [
  'Frontend Developer',
  'React Developer',
  'JavaScript Developer',
]

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Successful Projects' },
  { value: '10+', label: 'Happy Clients' },
]

const marqueeIcons = [FaReact, FaJs, FaHtml5, FaCss3Alt, SiVite, FaGitAlt, FaGithub]

function Hero() {
  const typed = useTypingEffect(ROLES)

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.split} aria-hidden="true" />
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <motion.div
            className={styles.experienceBadge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiStar className={styles.badgeIcon} aria-hidden="true" />
            <span>2+ Years of Professional Experience</span>
          </motion.div> */}

          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vasanth <span className="gradient-text">.M.M</span>
          </motion.h1>

          <motion.h2
            className={styles.role}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span aria-hidden="true">{typed}</span>
            <span className={styles.cursor} aria-hidden="true" />
            <span className="visually-hidden"></span>
          </motion.h2>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With 2+ years of expertise, I craft exceptional digital experiences. 
            Specialized in building high-performance React applications, scalable 
            web solutions, and pixel-perfect UI designs that engage and delight users.
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href={resumePdf} download className="btn btn-primary">
              <FiDownload /> Download Resume
            </a>
            <button type="button" className="btn btn-outline" onClick={handleHireMe}>
              Let&apos;s Collaborate <FiArrowRight />
            </button>
          </motion.div>

          <motion.div
            className={styles.statRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className={styles.statItem}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* {i > 0 && <span className={styles.statDivider} aria-hidden="true" />} */}
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.photoCol}
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ perspective: '1000px' }}
        >
          <div className={styles.frameWrap}>
            <div className={styles.glowEffect} aria-hidden="true" />
            <span className={styles.frameOffset} aria-hidden="true" />
            <div className={styles.frame}>
              <img src={profilePhoto} alt="Vasanth M.M - Senior Developer" />
            </div>
            <motion.div
              className={styles.experiencePill}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className={styles.pillGlow} aria-hidden="true" />
              <span className={styles.pillText}>2+ Years Expert</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...marqueeIcons, ...marqueeIcons, ...marqueeIcons].map((Icon, i) => (
            <span key={i} className={styles.marqueeIcon}>
              <Icon />
            </span>
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default Hero
