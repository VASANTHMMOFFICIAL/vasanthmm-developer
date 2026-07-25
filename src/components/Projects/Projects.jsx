import { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { projects, projectTechFilters } from '../../data/projects.js'
import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import styles from './Projects.module.css'

function Projects() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

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
              onChange={(e) => setQuery(e.target.value)}
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
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className={styles.grid}>
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No projects match your search just yet.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
