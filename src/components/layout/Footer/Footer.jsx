import { Link } from 'react-router-dom'
import FacebookIcon from '@assets/icons/facebook.svg';
import XIcon from '@assets/icons/x.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import MailIcon from '@assets/icons/mail.svg';
import LocationIcon from '@assets/icons/location.svg';
import PhoneIcon from '@assets/icons/phone.svg';
import SimFinLogo from '@assets/images/logo.png';
import './Footer.styles.scss'
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className='site-links'>
          <div className='links-list'>
            <div className='logo'><img src={SimFinLogo} alt='SimFin' /></div>
            <p className='info'>Building wealth with confidence since 1987. Your trusted partner in financial success.</p>
            <div className='socials-container'>
              <Link className='icon-container' aria-label="Visit our LinkedIn page" target="_blank" rel="noopener noreferrer" to='https://www.linkedin.com/'><img src={LinkedInIcon} alt='' /></Link>
              <Link className='icon-container' aria-label="Visit our Twitter page" target="_blank" rel="noopener noreferrer" to='https://x.com/'><img src={XIcon} alt='' /></Link>
              <Link className='icon-container' aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer" to='https://www.facebook.com/'><img src={FacebookIcon} alt='' /></Link>
            </div>
          </div>
          <ul className='links-list'>
            <li className='list-heading'>Services</li>
            <li className='link'><Link to='/services#finance-accounting'>Finance and Accounting</Link></li>
            <li className='link'><Link to='/services#audit-assurance'>Audit and Assurance</Link></li>
            <li className='link'><Link to='/services#taxation'>Taxation</Link></li>
            <li className='link'><Link to='/services#business-advisory'>Business Advisory</Link></li>
            <li className='link'><Link to='/services#virtual-cfo'>Virtual CFO</Link></li>
            <li className='link'><Link to='/services#startup-assistance'>Startup Assistance</Link></li>
            <li className='link'><Link to='/services'>More...</Link></li>
          </ul>
          <ul className='links-list'>
            <li className='list-heading'>Company</li>
            <li className='link'><Link to='/about'>About Us</Link></li>
            <li className='link'><Link to='/about#team'>Our team</Link></li>
            <li className='link'><Link to='/resources'>Resources</Link></li>
            <li className='link'><Link to='/contact'>Contact</Link></li>
          </ul>
          <ul className='links-list'>
            <li className='list-heading'>Contact</li>
            <li className='link'><img src={LocationIcon} alt='Location' /><Link to='https://maps.app.goo.gl/Ad5ywmRtBMtqr2MA7' target="_blank" rel="noopener noreferrer">Kumar Square, 3rd floor, Jayanagar 5th Block, Bangalore - 560 041</Link></li>
            <li className='link'><img src={PhoneIcon} alt='' /><Link to="tel:+918043749071">+91 (080) 4374 9071</Link></li>
            <li className='link'><img src={MailIcon} alt='Mail' /><Link to="mailto:info@simfin.com">info@simfin.com</Link></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} SimFin LLP. All rights reserved.</p>
        <div className='social-icons-container'>
          <Link to='/privacy' className='social-icon-link'>Privacy Policy</Link>
          <Link to='/terms' className='social-icon-link'>Terms of Service</Link>
          <Link to='/disclosures' className='social-icon-link'>Disclosures</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
