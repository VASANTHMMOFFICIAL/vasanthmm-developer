import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import styles from './Footer.module.css'

const socials = [
  { icon: FaGithub, href: 'https://github.com/vasanthmmofficial', label: 'VASANTHMMOFFICIAL' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/vasanthmm', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/vasanthmm', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:vasanth.mm.dev@gmail.com', label: 'Email' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.logo}>
          Vasanth<span className="gradient-text">.dev</span>
        </p>

        <ul className={styles.socials}>
          {socials.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.copy}>
          © {year} Vasanth M.M. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
