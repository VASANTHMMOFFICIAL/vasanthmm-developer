import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import logo from '../../assets/images/logo.png'
import styles from './Footer.module.css'

const quickLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/VASANTHMMOFFICIAL', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vasanth-m-m?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  // { icon: FaTwitter, href: 'https://twitter.com/vasanthmm', label: 'Twitter' },
]

function Footer() {
  const year = new Date().getFullYear()

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.wordmarkWrap} aria-hidden="true">
        <span className={styles.wordmark}>VASANTH</span>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.row}>
          <p className={styles.logo}>
            <img src={logo} alt="VMM logo" className={styles.logoImg} />
            Vasanth<span className="gradient-text">M M</span>
          </p>

          <nav className={styles.links}>
            {quickLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)}>
                {link.label}
              </button>
            ))}
          </nav>

          <div className={styles.socials}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialIcon}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <p className={styles.copy}>© {year} Vasanth M.M. All rights reserved.</p>
          <button
            className={styles.topBtn}
            onClick={() => scrollToSection('home')}
            aria-label="Back to top"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
