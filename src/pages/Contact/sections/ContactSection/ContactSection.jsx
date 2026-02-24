import ContactForm from '../../../../components/forms/ContactForm/ContactForm'
import MailIcon from '@assets/icons/mail.svg';
import LocationIcon from '@assets/icons/location.svg';
import PhoneIcon from '@assets/icons/phone.svg';
import ClockIcon from '@assets/icons/clock.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './ContactSection.styles.scss'

const ContactSection = () => {
  const contentRef = useReveal(fadeInUp, { delay: 0 })

  return (
    <section className='contact-contact-section' aria-labelledby='contact-contact-heading'>
      <div className='content-container reveal reveal-up' ref={contentRef}>
        <h2 id='contact-contact-heading' className='heading'>Reach Out Directly</h2>
        <div className='card-container'>
          <article className='contact-card'>
            <div className='image-container'><img src={LocationIcon} alt='' /></div>
            <div className='contact'>
              <h3 className='contact-title'>Our Office</h3>
              <address className='contact-info'>Kumar Square, 3rd floor, <br />Jayanagar 5th Block, Bangalore - 560 041</address>
            </div>
          </article>
          <article className='contact-card'>
            <div className='image-container'><img src={PhoneIcon} alt='' /></div>
            <div className='contact'>
              <h3 className='contact-title'>Phone</h3>
              <p className='contact-info'>
                Main: <a href="tel:+918043749071">+91 (080) 4374 9071</a>
                <br />
                Support: <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>
          </article>
          <article className='contact-card'>
            <div className='image-container'><img src={MailIcon} alt='' /></div>
            <div className='contact'>
              <h3 className='contact-title'>Email</h3>
              <p className='contact-info'>
                <a href="mailto:info@simfin.com">info@simfin.com</a>
                <br />
                <a href="mailto:support@simfin.com">support@simfin.com</a>
              </p>
            </div>
          </article>
          <article className='contact-card'>
            <div className='image-container'><img src={ClockIcon} alt='' /></div>
            <div className='contact'>
              <h3 className='contact-title'>Hours</h3>
              <p className='contact-info'>Monday - Friday: 9:00 AM - 5:00 PM EST<br />Weekend appointments available upon request.</p>
            </div>
          </article>
        </div>
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactSection