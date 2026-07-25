import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext.jsx'
import styles from './ThemeToggle.module.css'

/**
 * Small pill button that switches between the dark (default) and
 * light color themes defined in styles/variables.css.
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={!isDark}
    >
      {isDark ? <FiMoon /> : <FiSun />}
    </button>
  )
}

export default ThemeToggle
