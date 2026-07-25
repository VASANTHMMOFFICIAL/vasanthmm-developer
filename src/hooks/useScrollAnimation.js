import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to an element and a boolean that flips to
 * true once the element scrolls into view. Used to drive scroll-reveal
 * animations without re-triggering on every re-render.
 *
 * @param {Object} options
 * @param {number} options.threshold - fraction of element visible before firing (0-1)
 * @param {boolean} options.once - whether to stop observing after first reveal
 */
export function useScrollAnimation({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isVisible]
}
