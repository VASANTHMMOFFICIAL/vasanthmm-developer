import { useEffect, useState } from 'react'

/**
 * Cycles through an array of phrases, typing and deleting each one
 * to build a "typewriter" effect for the hero headline.
 *
 * @param {string[]} phrases
 * @param {Object} options
 * @param {number} options.typingSpeed - ms per character while typing
 * @param {number} options.deletingSpeed - ms per character while deleting
 * @param {number} options.pauseTime - ms to hold the full phrase before deleting
 */
export function useTypingEffect(
  phrases,
  { typingSpeed = 90, deletingSpeed = 45, pauseTime = 1500 } = {},
) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!phrases || phrases.length === 0) return undefined

    const currentPhrase = phrases[phraseIndex % phrases.length]
    let timeout

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
    } else {
      const nextText = isDeleting
        ? currentPhrase.slice(0, text.length - 1)
        : currentPhrase.slice(0, text.length + 1)

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime])

  return text
}
