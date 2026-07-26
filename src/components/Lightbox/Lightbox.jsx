import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from './Lightbox.module.css'

/**
 * Full-screen image viewer used by the Projects section. Renders via a
 * portal so it always sits above everything else, closes on backdrop
 * click or Escape, and shows the project's title/description/links
 * alongside the enlarged image.
 */
function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} preview`}
        >
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close image preview"
            >
              <FiX />
            </button>

            <div className={styles.imageWrap}>
              <img src={project.image} alt={`${project.title} preview`} />
            </div>

            <div className={styles.info}>
              <p className={styles.tagline}>{project.tagline}</p>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <ul className={styles.techList}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.linkBtn} ${styles.demo}`}
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Lightbox
