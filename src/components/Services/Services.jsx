import { motion } from 'framer-motion'
import { services } from '../../data/services.js'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Services.module.css'

function Services() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2 className="section-title">
            What I can <span className="gradient-text">do for you</span>
          </h2>
        </div>

        <div ref={ref} className={styles.grid}>
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
