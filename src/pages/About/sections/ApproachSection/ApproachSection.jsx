import TargetIcon from '@assets/icons/target.svg';
import MessageIcon from '@assets/icons/message.svg';
import ClipboardIcon from '@assets/icons/clipboard.svg';
import GroupIcon from '@assets/icons/group.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './ApproachSection.styles.scss'

const ApproachSection = () => {  
  const titleRef = useReveal(fadeInUp, { delay: 0 })
  const subHeadingRef = useReveal(fadeInUp, { delay: 0 })
  const card1Ref = useReveal(fadeInUp, { delay: 0.1 })
  const card2Ref = useReveal(fadeInUp, { delay: 0.2 })
  const card3Ref = useReveal(fadeInUp, { delay: 0.3 })
  const card4Ref = useReveal(fadeInUp, { delay: 0.4 })

  return (
    <section className='approach-section' aria-labelledby='aboutus-approach-heading'>
      <h2 id='aboutus-approach-heading' className='heading reveal' ref={titleRef}>Our Approach</h2>
      <p className='sub-heading reveal' ref={subHeadingRef}>We believe in a methodical and transparent approach to financial management, ensuring every decision is backed by data and aligned with your goals.</p>
      <div className='card-container'>
        <div className='approach-card reveal' ref={card1Ref}>
          <div className='icon-container'>
            <img className='icon' src={TargetIcon} alt='' />
          </div>
          <h3 className='card-heading'>Structured Processes</h3>
          <p className='card-text'>Systematic workflows ensuring consistency and accuracy in every engagement.</p>
        </div>
        <div className='approach-card reveal' ref={card2Ref}>
          <div className='icon-container'>
            <img className='icon' src={MessageIcon} alt='' />
          </div>
          <h3 className='card-heading'>Clear Communication</h3>
          <p className='card-text'>Transparent reporting and open lines of communication at every step.</p>
        </div>
        <div className='approach-card reveal' ref={card3Ref}>
          <div className='icon-container'>
            <img className='icon' src={ClipboardIcon} alt='' />
          </div>
          <h3 className='card-heading'>Compliance-Aligned</h3>
          <p className='card-text'>Solutions designed to strictly adhere to regulatory frameworks and standards.</p>
        </div>
        <div className='approach-card reveal' ref={card4Ref}>
          <div className='icon-container'>
            <img className='icon' src={GroupIcon} alt='' />
          </div>
          <h3 className='card-heading'>Long-Term Mindset</h3>
          <p className='card-text'>Building enduring partnerships focused on sustainable value creation.</p>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection