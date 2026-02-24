import React, { useRef, useState } from 'react'
import './ServicesSection.styles.scss'
import ServicesData from './ServicesData'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import TrustIcon from '@assets/icons/trust_blue.svg';
import useReveal from '@/animations/useReveal'
import { fadeInUp } from '@/animations/motion';

const ServicesSection = () => {
  const subTitleRef = useReveal(fadeInUp, { distance: 60, delay: 0 })
  const titleRef = useReveal(fadeInUp, { distance: 60, delay: 0.1 })
  const containerRef = useRef(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e) => {
    isDragging.current = true
    containerRef.current.classList.add('dragging')
    startX.current = e.pageX - containerRef.current.offsetLeft
    scrollLeft.current = containerRef.current.scrollLeft
  }

  const onMouseLeave = () => {
    isDragging.current = false
    containerRef.current.classList.remove('dragging')
  }

  const onMouseUp = () => {
    isDragging.current = false
    containerRef.current.classList.remove('dragging')
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()

    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX.current) * 1.2 // scroll speed
    containerRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className='services-section' aria-labelledby="services-heading">
      <div className='section-sub-title reveal' ref={subTitleRef}><img src={TrustIcon} alt='' /> What we do</div>
      <h2 id='services-heading' className='heading reveal' ref={titleRef}>Comprehensive Financial Solutions</h2>

      <div 
        ref={containerRef}
        className='card-container'
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {ServicesData.map((service, index) => <ServiceCard service={service} key={index} />)}
      </div>
    </section>
  )
}

const ServiceCard = ({service}) => {
  const fadeInUpAnimation = useReveal(fadeInUp, { distance: 60, delay: 0 })
  const [active, setActive] = useState(false)

  return(
    <div className={active ? 'service-card service-card-active reveal' : 'service-card reveal'} onClick={() => setActive(!active)} ref={fadeInUpAnimation}>
      <div className='content-container'>
        <p className='heading-tag'>{service.tagline}</p>
        <h3 className='heading'>{service.name}</h3>
        <p className='service-info'>{service.description}</p>
        <Link to={`/services#${service.slug}`} className='service-link'>More <ChevronRight size={18} /><span className="screen-reader-text">Details</span></Link>
      </div>
      <div className='img-fake-container'></div>
      <div className='img-container'>
        <picture>
          <source
            srcSet={service.img.avif}
            type="image/avif"
          />
          <source
            srcSet={service.img.webp}
            type="image/webp"
          />
          <img
            src={service.img.jpg}
            alt={service.name}
            width="566"
            height="566"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  )
}

export default ServicesSection
