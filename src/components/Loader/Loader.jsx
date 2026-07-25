import { motion } from 'framer-motion'
import styles from './Loader.module.css'

const letters = 'VMM'.split('')

/**
 * Full-screen loading screen shown briefly on first load.
 * Purely presentational — App.jsx controls when it mounts/unmounts.
 */
function Loader() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <div className={styles.mark}>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className={styles.bar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default Loader
