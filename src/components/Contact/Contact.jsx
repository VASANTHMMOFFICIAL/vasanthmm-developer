import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi'
import styles from './Contact.module.css'

function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'vasanthmmofficial@gmail.com',
      href: 'mailto:vasanthmmofficial@gmail.com',
      icon: FiMail,
    },
    {
      label: 'Phone',
      value: '+91 7550155332',
      href: 'tel:+917550155332',
      icon: FiPhone,
    },
    {
      label: 'Location',
      value: 'India ,Tamil Nadu, Chennai',
      href: '#home',
      icon: FiMapPin,
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">build something</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className={styles.grid}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.eyebrow}>Available for work</p>
            <h3>Let&apos;s create something meaningful together.</h3>
            <p className={styles.description}>
              I’m currently open to freelance collaborations, product builds, and front-end opportunities.
            </p>
            <a href="mailto:vasanthmmofficial@gmail.com" className="btn btn-primary">
              Start a conversation <FiArrowRight />
            </a>
          </motion.div>

          <motion.div
            className={styles.linksPanel}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} className={styles.infoItem}>
                <Icon />
                <div>
                  <p className={styles.infoLabel}>{label}</p>
                  <p>{value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
