import { Link } from 'react-router-dom'
import Button from '../../../../components/ui/Button/Button'
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './ContactSection.styles.scss'

const ContactSection = () => {
  const headingRef = useReveal(fadeInUp, { delay: 0 })
  const subHeadingRef = useReveal(fadeInUp, { delay: 0 })
  const buttonRef = useReveal(fadeInUp, { delay: 0 })

  return (
    <section className='aboutus-contact-section' aria-labelledby='aboutus-contact-heading'>
      <h2 id='aboutus-contact-heading' className='heading reveal' ref={headingRef}>Looking for structured financial support?</h2>
      <p className='sub-heading reveal' ref={subHeadingRef}>Get in touch to discuss your requirements and see how we can help.</p>
      <Button as={Link} to='/contact' className='reveal' ref={buttonRef} variant='light'>Contact SimFin</Button>
    </section>
  )
}

export default ContactSection