import { useEffect, useRef } from 'react'
import { useHeaderTheme } from '@/context/HeaderThemeContext'

const HeaderAwareSection = ({
  theme = 'light',
  children,
  as: Component = 'div',
  ...props
}) => {
  const ref = useRef(null)
  const { setTheme } = useHeaderTheme()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTheme(theme)
        }
      },
      {
        rootMargin: '-5% 0px -95% 0px',
        threshold: 0,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [theme, setTheme])

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
}

export default HeaderAwareSection
