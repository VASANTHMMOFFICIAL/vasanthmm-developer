import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from './ProjectCard.module.css'

const imageMap = {
  'project-application-portal': new URL('../../assets/images/project-application-portal.svg', import.meta.url).href,
  'project-dashboard': new URL('../../assets/images/project-dashboard.svg', import.meta.url).href,
  'project-food-dashboard': new URL('../../assets/images/project-food-dashboard.svg', import.meta.url).href,
  'project-hospital-ui': new URL('../../assets/images/project-hospital-ui.svg', import.meta.url).href,
  'project-job-portal': new URL('../../assets/images/project-job-portal.svg', import.meta.url).href,
  'project-ecommerce': new URL('../../assets/images/project-ecommerce.svg', import.meta.url).href,
}

/**
 * Reusable card used by the Projects section to display a single
 * project's tagline, description, tech stack, and links.
 */
function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <img
        className={styles.projectImage}
        src={imageMap[project.image] || imageMap['project-dashboard']}
        alt={project.title}
      />

      <div className={styles.body}>
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
    </motion.article>
  )
}

export default ProjectCard
