import gsap from 'gsap'

/* Base Defaults */
const base = {
  duration: 0.8,
  ease: 'power3.out',
  overwrite: true,
}

/* Fade In Right */
export const fadeInRight = (el, distance = 40, delay = 0) => {
  gsap.fromTo(
    el,
    { opacity: 0, x: distance },
    { opacity: 1, x: 0, delay, ...base }
  )
}

/* Fade In Left */
export const fadeInLeft = (el, distance = 40, delay = 0) => {
  gsap.fromTo(
    el,
    { opacity: 0, x: -distance },
    { opacity: 1, x: 0, delay, ...base }
  )
}

/* Fade In Up */
export const fadeInUp = (el, distance = 40, delay = 0) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: distance },
    { opacity: 1, y: 0, delay, ...base }
  )
}

/* Fade In Down */
export const fadeInDown = (el, distance = 40, delay = 0) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: -distance },
    { opacity: 1, y: 0, delay, ...base }
  )
}

/* Zoom Fade In */
export const zoomFadeIn = (el, scale = 0.9, delay = 0) => {
  gsap.fromTo(
    el,
    { opacity: 0, scale },
    { opacity: 1, scale: 1, delay, ...base }
  )
}

/* Blur Reveal */
export const blurReveal = (el, blur = 10, delay = 0) => {
  gsap.fromTo(
    el,
    { opacity: 0, filter: `blur(${blur}px)` },
    { opacity: 1, filter: 'blur(0px)', delay, ...base }
  )
}

/* Stagger Children */
export const staggerReveal = (parent, delay = 0, stagger = 0.15) => {
  const children = parent.children
  gsap.fromTo(
    children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      delay,
      stagger,
      ...base,
    }
  )
}

/* Text Line Reveal */
export const textRevealLines = (el, delay = 0) => {
  gsap.fromTo(
    el.querySelectorAll('.reveal-line'),
    { y: '100%' },
    {
      y: '0%',
      stagger: 0.1,
      delay,
      duration: 0.8,
      ease: 'power3.out',
    }
  )
}

/* Text Word Reveal */
export const textRevealWords = (el, delay = 0) => {
  gsap.fromTo(
    el.querySelectorAll('.reveal-word'),
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      delay,
      duration: 0.6,
      ease: 'power3.out',
    }
  )
}

/* Text Character Reveal */
export const textRevealChars = (el, delay = 0) => {
  gsap.fromTo(
    el.querySelectorAll('.reveal-char'),
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      delay,
      duration: 0.5,
      ease: 'power3.out',
    }
  )
}
