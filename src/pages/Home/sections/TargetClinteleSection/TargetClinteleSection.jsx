import './TargetClinteleSection.styles.scss'
import WorldMapIcon from '@assets/icons/world_map.svg';
import RocketIcon from '@assets/icons/rocket.svg';
import BuildingsIcon from '@assets/icons/buildings.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';

const TargetClinteleSection = () => {
  const subTitleRef = useReveal(fadeInUp, { distance: 60, delay: 0 })
  const titleRef = useReveal(fadeInUp, { distance: 60, delay: 0.1 })
  const card1Ref = useReveal(fadeInUp, { distance: 60, delay: 0.2 })
  const card2Ref = useReveal(fadeInUp, { distance: 60, delay: 0.3 })
  const card3Ref = useReveal(fadeInUp, { distance: 60, delay: 0.4 })

  return (
    <section className='target-clintele-section' aria-labelledby="target-heading">
      <div className='section-sub-title reveal' ref={subTitleRef}><img src={RocketIcon} alt='' /> Who we serve?</div>
      <h2 id="target-heading" className='heading reveal' ref={titleRef}>Partners in Your Growth</h2>

      <div className='card-container'>
        <div className='target-client-card reveal' ref={card1Ref}>
          <div className='icon-container'>
            <img src={RocketIcon} alt='' />
          </div>
          <h3 className='card-heading'>Startups and Early-Stage Businesses</h3>
          <p className='card-text'>Structured accounting, compliance, and advisory support to help startups build a strong financial foundation.</p>
          {/* <Link className='card-link' to='/'>More <ChevronRight size={18} /></Link> */}
        </div>

        <div className='target-client-card reveal' ref={card2Ref}>
          <div className='icon-container'>
            <img src={BuildingsIcon} alt='' />
          </div>
          <h3 className='card-heading'>SMEs and Growing Enterprises</h3>
          <p className='card-text'>Ongoing accounting, audit coordination, taxation, and advisory support as businesses scale operations.</p>
          {/* <Link className='card-link' to='/'>More <ChevronRight size={18} /></Link> */}
        </div>

        <div className='target-client-card reveal' ref={card3Ref}>
          <div className='icon-container'>
            <img src={WorldMapIcon} alt='' />
          </div>
          <h3 className='card-heading'>Foreign Companies Entering India</h3>
          <p className='card-text'>End-to-end financial, compliance, and advisory assistance for companies establishing or expanding operations in India.</p>
          {/* <Link className='card-link' to='/'>More <ChevronRight size={18} /></Link> */}
        </div>
      </div>
    </section>
  )
}

export default TargetClinteleSection