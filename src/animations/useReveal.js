import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const useReveal = (animationFn, options = {}) => {
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animationFn(element, options.distance, options.delay)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, []) 

  return ref
}

export default useReveal
