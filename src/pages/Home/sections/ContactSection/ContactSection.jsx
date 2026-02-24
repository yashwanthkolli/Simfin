import './ContactSection.styles.scss'
import MailIcon from '@assets/icons/mail.svg';
import ContactForm from '../../../../components/forms/ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <section className='contact-section' aria-labelledby="contact-heading">
      <div className='content-container'>
        <div className='section-sub-title'><img src={MailIcon} alt='' /> Get in touch</div>
        <h2 id='contact-heading' className='heading'>Ready to Transform Your Financial Future?</h2>
        <p className='sub-heading'>Whether you're a startup looking to scale or a multinational expanding into India, our team is ready to provide the expert guidance you need.</p>
        <ul className='list'>
          <li>Complimentary initial consultation</li>
          <li>Customized roadmap within 48 hours</li>
          <li>Direct access to senior partners</li>
        </ul>
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactSection