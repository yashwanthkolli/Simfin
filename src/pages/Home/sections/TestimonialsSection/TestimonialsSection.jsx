import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import QuoteIcon from '@assets/icons/quote.svg';
import './TestimonialsSection.styles.scss'
import TestimonialsData from './TestimonialsData';

const VISIBLE = 3
const INTERVAL = 4000

const TestimonialsSection = () => {
  const TOTAL = TestimonialsData.length
  const CLONES = VISIBLE
  const testimonials = TestimonialsData
  const trackRef = useRef(null)
  const timerRef = useRef(null)

  const [visualIndex, setVisualIndex] = useState(0)

  const renderedTestimonials = [
    ...testimonials,
    ...testimonials.slice(0, CLONES),
  ]

  const normalizeIndex = (index) => index % TOTAL

  const slideToIndex = (index, animate = true) => {
    gsap.to(trackRef.current, {
      xPercent: -(index * (100 / 9)),
      duration: animate ? 0.8 : 0,
      ease: 'power3.inOut',
    })
  }

  const nextSlide = () => {
    setVisualIndex((prev) => prev + 1)
  }

  useEffect(() => {
    slideToIndex(visualIndex)

    // Seamless infinite reset
    if (visualIndex === TOTAL) {
      gsap.delayedCall(0.8, () => {
        gsap.set(trackRef.current, { xPercent: 0 })
        setVisualIndex(0)
      })
    }
  }, [visualIndex])

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [])

  const handleDotClick = (index) => {
    clearInterval(timerRef.current)
    setVisualIndex(index)
    timerRef.current = setInterval(nextSlide, INTERVAL)
  }

  const activeDot = visualIndex % TOTAL

  return (
    <section className='testimonials-section' aria-labelledby="testimonials-heading">
      <div className='section-sub-title'><img src={QuoteIcon} alt='' /> Testimonials</div>
      <h2 id='testimonials-heading' className='heading'>Trusted by Industry Leaders</h2>
      <p className='sub-heading'>We are proud to support the financial success of diverse organizations, from global giants to fast-growing startups.</p>
      <div className="carousel">
        <div className="carousel-viewport">
          <div className="carousel-track" ref={trackRef}>
            {renderedTestimonials.map((item, index) => (
              <article className="testimonial-card" key={index}>
                <div className='stars' aria-hidden="true">{Array.from({length: item.rating}, (_, index) => (<span key={index}>⭐</span>))}</div>
                <p className="testimonial-text">“{item.text}”</p>
                <div className="testimonial-author">
                  <div><strong>{item.name}</strong></div>
                  <div><span>{item.role}, </span><span>{item.company}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={i === activeDot ? 'active' : ''}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection