import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiSearch,
  FiGithub,
  FiExternalLink,
  FiZoomIn,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi'
import { FaEye } from "react-icons/fa";
import { projects, projectTechFilters } from '../../data/projects.js'
import Lightbox from '../Lightbox/Lightbox.jsx'
import styles from './Projects.module.css'

function Projects() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxProject, setLightboxProject] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' || project.filters.includes(activeFilter)
      const matchesQuery =
        query.trim() === '' ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      return matchesFilter && matchesQuery
    })
  }, [query, activeFilter])

  const scrollToIndex = (index) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    setActiveIndex(index)
  }

  const handlePrev = () => scrollToIndex(Math.max(activeIndex - 1, 0))
  const handleNext = () =>
    scrollToIndex(Math.min(activeIndex + 1, filteredProjects.length - 1))

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const { scrollLeft, offsetLeft } = track
    let closest = 0
    let closestDist = Infinity
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - offsetLeft - scrollLeft)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">
            Selected <span className="gradient-text">work</span>
          </h2>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search projects..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIndex(0)
              }}
              aria-label="Search projects"
            />
          </div>

          <div className={styles.filterRow}>
            {projectTechFilters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterBtn} ${
                  activeFilter === filter ? styles.active : ''
                }`}
                onClick={() => {
                  setActiveFilter(filter)
                  setActiveIndex(0)
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className={styles.carousel}>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous project"
            >
              <FiChevronLeft />
            </button>

            <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
              {filteredProjects.map((project, i) => (
                <motion.article
                  key={project.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                >
                  <button
                    type="button"
                    className={styles.imageBtn}
                    onClick={() => setLightboxProject(project)}
                    aria-label={`View larger image of ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} cover`}
                      className={styles.image}
                    />
                    <span className={styles.imageOverlay}>
                      <FaEye />
                    </span>
                  </button>

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
              ))}
            </div>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={handleNext}
              disabled={activeIndex === filteredProjects.length - 1}
              aria-label="Next project"
            >
              <FiChevronRight />
            </button>
          </div>
        ) : (
          <p className={styles.empty}>No projects match your search just yet.</p>
        )}

        {filteredProjects.length > 0 && (
          <div className={styles.dots}>
            {filteredProjects.map((project, i) => (
              <button
                key={project.id}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to ${project.title}`}
              />
            ))}
          </div>
        )}
      </div>

      <Lightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />
    </section>
  )
}

export default Projects
