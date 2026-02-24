import MailIcon from '@assets/icons/mail.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './LandingSection.styles.scss';

const LandingSection = () => {
  const subTitleRef = useReveal(fadeInUp, { delay: 0 })
  const titleRef = useReveal(fadeInUp, { delay: 0 })
  const descriptionRef = useReveal(fadeInUp, { delay: 0 })

  return (
    <section className='contact-landing-section' aria-labelledby='contact-landing-heading'>
      <div className='section-sub-title reveal reveal-up' ref={subTitleRef}><img src={MailIcon} alt='' /> Get in Touch</div>
      <h1 id='contact-landing-heading' className='heading reveal reveal-up' ref={titleRef}>Contact Us</h1>
      <p className='sub-heading reveal reveal-up' ref={descriptionRef}>Ready to start your journey? Our team is here to answer your questions and help you plan for the future.</p>
    </section>
  )
}

export default LandingSection