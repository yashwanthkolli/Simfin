import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './LandingSection.styles.scss'
import TrustIcon from '@assets/icons/trust.svg';
import IncrementIcon from '@assets/icons/increment.svg';
import LandingImageAVIF from '@assets/images/landing.avif';
import LandingImagewebP from '@assets/images/landing.webp';
import LandingImageJPG from '@assets/images/landing.jpg';
import BackgroundImageAVIF from '@assets/images/background.avif';
import Button from '../../../../components/ui/Button/Button';
import { fadeInLeft } from '@/animations/motion'
import useReveal from '@/animations/useReveal'
import { fadeInUp } from '@/animations/motion';
import { NavLink } from 'react-router-dom';

const LandingSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const glassRef = useRef(null)
  const kpi1Ref = useRef(null)
  const kpi2Ref = useRef(null)
  const fadeInLeftAnimation = useReveal(fadeInLeft)
  const fadeInUpAnimation1 = useReveal(fadeInUp, { delay: 0.3 })
  const fadeInUpAnimation2 = useReveal(fadeInUp, { delay: 0.6 })
  const fadeInUpAnimation3 = useReveal(fadeInUp, { delay: 0.9 })

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const glass = glassRef.current
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      image,
      { opacity: 0, y: 20, scale: 1.02 },
      { opacity: 1, y: 0, scale: 1, duration: 1 }
    )
      .fromTo(
        glass,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        [kpi1Ref.current, kpi2Ref.current],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 },
        '-=0.4'
      )

    // Ambient floating (very subtle)
    gsap.to(kpi1Ref.current, {
      y: -16,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(kpi2Ref.current, {
      y: 16,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    if (!section || !image || !glass) return

    // Quick setters (performance-friendly)
    const moveImageX = gsap.quickTo(image, 'x', { duration: 0.6, ease: 'power3.out' })
    const moveImageY = gsap.quickTo(image, 'y', { duration: 0.6, ease: 'power3.out' })

    const moveGlassX = gsap.quickTo(glass, 'x', { duration: 0.8, ease: 'power3.out' })
    const moveGlassY = gsap.quickTo(glass, 'y', { duration: 0.8, ease: 'power3.out' })

    const rotateGlassX = gsap.quickTo(glass, 'rotationX', {
      duration: 0.9,
      ease: 'power3.out',
    })

    const rotateGlassY = gsap.quickTo(glass, 'rotationY', {
      duration: 0.9,
      ease: 'power3.out',
    })

    const handleMouseMove = (e) => {
      const bounds = section.getBoundingClientRect()
      const relX = e.clientX - bounds.left
      const relY = e.clientY - bounds.top

      const percentX = (relX / bounds.width - 0.5) * 2
      const percentY = (relY / bounds.height - 0.5) * 2

      // Depth values (tweak if needed)
      moveImageX(percentX * 16)
      moveImageY(percentY * 16)

      moveGlassX(percentX * 64)
      moveGlassY(percentY * 64)

      rotateGlassY(percentX * 15)
      rotateGlassX(-percentY * 15)
    }

    const resetParallax = () => {
      moveImageX(0)
      moveImageY(0)
      moveGlassX(0)
      moveGlassY(0)
    }

    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseleave', resetParallax)

    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseleave', resetParallax)
    }
  }, [])

  return (
    <section className='landing-section' ref={sectionRef} aria-labelledby="home-hero-heading">
      {/* Background Image */}
      <img
        src={BackgroundImageAVIF}
        alt=""
        className="hero-bg"
        fetchPriority="high"
        decoding="async"
      />

      <div className='content-container'>
        <div className='tag reveal reveal-left' ref={fadeInLeftAnimation}><img src={TrustIcon} alt='' /> Building trust since 2000</div>
        <h1 id='home-hero-heading' className='heading reveal' ref={fadeInUpAnimation1}>Trusted Accounting for Modern Businesses</h1>
        <p className='sub-heading reveal' ref={fadeInUpAnimation2}>Strategic financial guidance designed for long-term growth. We combine institutional-grade insights with personalized service to help you achieve your goals.</p>
        <div className='buttons-container reveal' ref={fadeInUpAnimation3}>
          <Button as={NavLink} variant='accent' to='/services'>Services</Button>
          <Button as={NavLink} variant='glass' to='/contact'>Contact Us</Button>
        </div>
      </div>

      <div className='image-section'>
        <div ref={imageRef} className='image-container'>
          <picture>
            <source
              srcSet={LandingImageAVIF}
              type="image/avif"
            />
            <source
              srcSet={LandingImagewebP}
              type="image/webp"
            />
            <img
              src={LandingImageJPG}
              alt="SimFin financial advisory overview"
              width="566"
              height="566"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="image-overlay" />
        </div>
        <div ref={glassRef} className='glass-container reveal'>
          <div ref={kpi1Ref} className='kpi kpi-1'>
            <div className='kpi-increment'>
              <img className='icon' src={IncrementIcon} alt='increment' />
              <span className='kpi-number'>3000</span>
            </div>
            <div className='kpi-title'>Clients Served</div>
          </div>
          <div ref={kpi2Ref} className='kpi kpi-2'>
            <div className='kpi-increment'>
              <img className='icon' src={IncrementIcon} alt='increment' />
              <span className='kpi-number'>15+</span>
            </div>
            <div className='kpi-title'>Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection