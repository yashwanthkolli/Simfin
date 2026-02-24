import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollHandler = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there is a hash, scroll to that element
    if (hash) {
      const classname = hash.replace('#', '') + '-section'
      const element = document.getElementsByClassName(classname)[0]

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    // Otherwise scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname, hash])

  return null
}

export default ScrollHandler
