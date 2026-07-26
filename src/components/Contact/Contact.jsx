import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js'
import styles from './Contact.module.css'

const EMAIL = 'vasanthmmofficial@gmail.com'
const PHONE = '+91 7550155332'



/**
 * Contact section built entirely from direct links — no form, nothing
 * saved to a database. A statement + availability badge sits on the
 * left; a list of clickable contact methods (mail, phone, location)
 * sits on the right, each acting like a settings-style row.
 */
function Contact() {
  const [copied, setCopied] = useState(false)
  const [ref, visible] = useScrollAnimation({ threshold: 0.25 })

  const handleCopyEmail = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const methods = [
    {
      id: 'email',
      icon: FiMail,
      label: 'Email',
      value: copied ? 'Copied to clipboard!' : EMAIL,
      onClick: handleCopyEmail,
      trailingIcon: copied ? FiCheck : FiCopy,
    },
    {
      id: 'phone',
      icon: FiPhone,
      label: 'Phone',
      value: PHONE,
      href: `tel:${PHONE.replace(/\s/g, '')}`,
      trailingIcon: FiArrowRight,
    },
    {
      id: 'location',
      icon: FiMapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      trailingIcon: null,
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
        </div>

        <div ref={ref} className={styles.grid}>
          <motion.div
            className={styles.statementCol}
            initial={{ opacity: 0, x: -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <div className={styles.availability}>
              <span className={styles.pulseDot} aria-hidden="true" />
              Available for freelance &amp; full-time work
            </div>

            <p className={styles.statement}>
              Got a project, a role, or just a question about how something
              was built? Reach out through whichever channel suits you best
              — I reply quickly.
            </p>

    
          </motion.div>

          <motion.div
            className={styles.methodsCol}
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {methods.map((method) => {
              const Icon = method.icon
              const Trailing = method.trailingIcon
              const content = (
                <>
                  <span className={styles.methodIcon}>
                    <Icon />
                  </span>
                  <span className={styles.methodText}>
                    <span className={styles.methodLabel}>{method.label}</span>
                    <span className={styles.methodValue}>{method.value}</span>
                  </span>
                  {Trailing && (
                    <span className={styles.methodTrailing}>
                      <Trailing />
                    </span>
                  )}
                </>
              )

              if (method.href) {
                return (
                  <a key={method.id} href={method.href} className={styles.methodRow}>
                    {content}
                  </a>
                )
              }

              if (method.onClick) {
                return (
                  <button
                    key={method.id}
                    type="button"
                    className={styles.methodRow}
                    onClick={method.onClick}
                  >
                    {content}
                  </button>
                )
              }

              return (
                <div key={method.id} className={styles.methodRow}>
                  {content}
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
