import BookIcon from '@assets/icons/book.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './LandingSection.styles.scss'

const LandingSection = () => {
  const subTitleRef = useReveal(fadeInUp, { delay: 0 })
  const titleRef = useReveal(fadeInUp, { delay: 0 })
  const descriptionRef = useReveal(fadeInUp, { delay: 0 })

  return (
    <section className='resources-landing-section' aria-labelledby='resources-landing-heading'>
      <div className='section-sub-title reveal reveal-up' ref={subTitleRef}><img src={BookIcon} alt='' /> Insights & Resources</div>
      <h1 id='resources-landing-heading' className='heading reveal reveal-up' ref={titleRef}>Financial Wisdom</h1>
      <p className='sub-heading reveal reveal-up' ref={descriptionRef}>Expert perspectives on markets, wealth management, and financial planning to help you stay informed.</p>
    </section>
  )
}

export default LandingSection