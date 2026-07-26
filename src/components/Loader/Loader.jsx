import { motion } from 'framer-motion'
import logo from '../../assets/images/logo.png'
import styles from './Loader.module.css'

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
      <motion.img
        src={logo}
        alt="VMM"
        className={styles.mark}
        initial={{ y: 24, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
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
