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
      <h2 id='aboutus-contact-heading' className='heading reveal' ref={headingRef}>Ready to take the next step?</h2>
      <p className='sub-heading reveal' ref={subHeadingRef}>Schedule a complimentary discovery meeting to see how our services can help you achieve your financial goals.</p>
      <Button as={Link} to='/contact' className='reveal' ref={buttonRef} variant='accent'>Get in Touch</Button>
    </section>
  )
}

export default ContactSection