import WhyImageJPG from '@assets/images/whySimfin.jpg';
import WhyImageWebP from '@assets/images/whySimfin.webp';
import WhyImageAVIF from '@assets/images/whySimfin.jpg';
import './WhySection.styles.scss'
import WhyData from './WhyData'
import TargetIcon from '@assets/icons/target.svg';
import useReveal from '@/animations/useReveal'
import { fadeInUp } from '@/animations/motion';

const WhySection = () => {
  const fadeInUpAnimation = useReveal(fadeInUp, { distance: 60 })
  const subTitleRef = useReveal(fadeInUp, { distance: 60, delay: 0 })
  const titleRef = useReveal(fadeInUp, { distance: 60, delay: 0.1 })
  const descriptionRef = useReveal(fadeInUp, { distance: 60, delay: 0.2 })

  return (
    <section className='why-section' aria-labelledby="why-heading">
      <div className='content-container'>
        <div className='section-sub-title reveal' ref={subTitleRef}><img src={TargetIcon} alt='Target' /> Why Choose Simfin?</div>
        <h2 id='why-heading' className='heading reveal' ref={titleRef}>Your Trusted Financial Partner</h2>
        <p className='sub-heading reveal' ref={descriptionRef}>We are dedicated to your financial well-being, providing the expertise and commitment needed to navigate complex financial landscapes.</p>
        <div className='card-container'>
          {
            WhyData.map((el, index) => (<WhyCard key={index} data={el} />))
          }
        </div>
      </div>
      <div className='image-container reveal' ref={fadeInUpAnimation}>
        <picture>
          <source
            srcSet={WhyImageAVIF}
            type="image/avif"
          />
          <source
            srcSet={WhyImageWebP}
            type="image/webp"
          />
          <img
            src={WhyImageJPG}
            alt="Handshake Image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  )
}

const WhyCard = ({data}) => {
  const fadeInUpAnimation = useReveal(fadeInUp)
  const {icon, accent, title, description} = data;

  return (
    <div className='why-card reveal' ref={fadeInUpAnimation}>
      <div className='icon-container'>
        <img className='icon' src={icon} alt={title} />
      </div>
      <h3 className='card-heading'>{title}</h3>
      <p className='card-text'>{description}</p>
    </div>
  )
}

export default WhySection