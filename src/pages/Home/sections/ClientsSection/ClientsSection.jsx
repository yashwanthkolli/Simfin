import Img from '@assets/images/clients.png';
import MobileImg from '@assets/images/clients-mobile.png';
import GroupIcon from '@assets/icons/group.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './ClientsSection.Styles.scss';

const ClientsSection = () => {
  const subTitleRef = useReveal(fadeInUp, { distance: 60, delay: 0 })
  const titleRef = useReveal(fadeInUp, { distance: 60, delay: 0.1 })
  const clients1Ref = useReveal(fadeInUp, { distance: 60, delay: 0.2 })
  const clients2Ref = useReveal(fadeInUp, { distance: 60, delay: 0.2 })

  return (
    <div className='clients-section'>
      <div className='content'>
        <div className='section-sub-title reveal' ref={subTitleRef}><img src={GroupIcon} alt='' /> Our Clients</div>
        <h1 className='heading reveal' ref={titleRef}>The Clientèle</h1>
        <div className='clients-list desktop-view reveal' ref={clients1Ref}>
          <img src={Img} alt='clients' />
        </div>
        
        <div className='clients-list mobile-view reveal' ref={clients2Ref}>
          <img src={MobileImg} alt='clients' />
        </div>
      </div>
    </div>
  )
}

export default ClientsSection