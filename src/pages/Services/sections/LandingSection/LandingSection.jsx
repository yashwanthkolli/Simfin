import ShieldIcon from '@assets/icons/shield.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './LandingSection.styles.scss';

const LandingSection = () => {
  const subTitleRef = useReveal(fadeInUp, { delay: 0 })
  const titleRef = useReveal(fadeInUp, { delay: 0 })
  const descriptionRef = useReveal(fadeInUp, { delay: 0 })

  return (
    <section className='service-landing-section' aria-labelledby='service-landing-heading'>
      <div className='section-sub-title reveal reveal-up' ref={subTitleRef}><img src={ShieldIcon} alt='' /> Our Expertise</div>
      <h1 id='service-landing-heading' className='heading reveal reveal-up' ref={titleRef}>Comprehensive Wealth Solutions</h1>
      <p className='sub-heading reveal reveal-up' ref={descriptionRef}>We offer a holistic approach to financial planning, integrating every aspect of your financial life into a cohesive strategy.</p>
    </section>
  )
}

export default LandingSection