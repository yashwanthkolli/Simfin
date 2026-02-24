import './ServiceSection.styles.scss'
import { fadeInLeft, fadeInRight } from '@/animations/motion'
import useReveal from '@/animations/useReveal'
import { Check } from 'lucide-react'

const ServiceSection = ({ service, index }) => {
  const isReversed = index % 2 !== 0

  const imageRef = useReveal(
    isReversed ? fadeInRight : fadeInLeft,
    { distance: 60 }
  )

  const contentRef = useReveal(
    isReversed ? fadeInLeft : fadeInRight,
    { distance: 60, delay: 0.1 }
  )

  return (
    <section className={`service-service-section ${service.id}-section`} aria-labelledby={`${service.id}-heading`}>
      <div className={`service-container ${isReversed ? 'reverse' : ''}`}>

        {/* Image */}
        <div className={`service-image reveal ${isReversed ? 'reveal-right' : 'reveal-left'}`} ref={imageRef}>
          <picture>
            <source
              srcSet={service.images.avif}
              type="image/avif"
            />
            <source
              srcSet={service.images.webp}
              type="image/webp"
            />
            <img
              src={service.images.jpg}
              alt={service.name}
              width="566"
              height="566"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        {/* Content */}
        <div className="service-content reveal" ref={contentRef}>
          <div className="service-icon">
            <service.icon size={28} />
          </div>

          <h2 id={`${service.id}-heading`} className="heading">{service.title}</h2>

          <p className="sub-heading">
            {service.description}
          </p>

          <ul className="service-points">
            {service.points.map((point, i) => (
              <li key={i} className='point'><span className='check'><Check size={14} /></span> {point}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default ServiceSection
