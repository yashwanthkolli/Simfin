import TrustIcon from '@assets/icons/shield.svg';
import AboutImage from '@assets/images/about.jpg';
import useReveal from '@/animations/useReveal';
import { fadeInLeft, zoomFadeIn } from '@/animations/motion';
import './LandingSection.styles.scss'

const LandingSection = () => {
  const subTitleRef = useReveal(fadeInLeft, { delay: 0 })
  const titleRef = useReveal(fadeInLeft, { delay: 0 })
  const description1Ref = useReveal(fadeInLeft, { delay: 0 })
  const descriptio2Ref = useReveal(fadeInLeft, { delay: 0 })
  const imageRef = useReveal(zoomFadeIn, { delay: 0 })

  return (
    <section className='aboutus-landing-section' aria-labelledby='aboutus-landing-heading'>
      <div className='content'>
        <div className='section-sub-title reveal reveal-left' ref={subTitleRef}><img src={TrustIcon} alt='' /> About SIMFIN</div>
        <h1 id='aboutus-landing-heading' className='heading reveal reveal-left' ref={titleRef}>Structured Financial Excellence</h1>
        <p className='sub-heading reveal reveal-left' ref={description1Ref}>Simfin is a premier financial advisory firm dedicated to empowering businesses with structured financial strategies. We specialize in providing comprehensive financial, accounting, and advisory services that drive sustainable growth.</p>
        <p className='sub-heading reveal reveal-left' ref={descriptio2Ref}>We support startups, SMEs, and multinational corporations in navigating complex financial landscapes with confidence.</p>
      </div>
      <div className='image-container reveal reveal-zoom' ref={imageRef}>
        <img src={AboutImage} alt='' />
      </div>
    </section>
  )
}

export default LandingSection