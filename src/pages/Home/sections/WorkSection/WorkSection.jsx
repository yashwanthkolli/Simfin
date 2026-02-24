import React from 'react'
import MessageIcon from '@assets/icons/message.svg';
import LighteningIcon from '@assets/icons/lightening.svg';
import WheelIcon from '@assets/icons/wheel.svg';
import CompassIcon from '@assets/icons/compass.svg';
import StarsIcon from '@assets/icons/stars.svg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './WorkSection.styles.scss'

const WorkSection = () => {
  const subTitleRef = useReveal(fadeInUp, { distance: 60, delay: 0 })
  const titleRef = useReveal(fadeInUp, { distance: 60, delay: 0.1 })
  const card1Ref = useReveal(fadeInUp, { distance: 60, delay: 0.2 })
  const card2Ref = useReveal(fadeInUp, { distance: 60, delay: 0.3 })
  const card3Ref = useReveal(fadeInUp, { distance: 60, delay: 0.4 })
  const card4Ref = useReveal(fadeInUp, { distance: 60, delay: 0.5 })

  return (
    <section className='work-section' aria-labelledby="work-heading">
      <div className='section-sub-title reveal' ref={subTitleRef}><img src={StarsIcon} alt='' /> Our Process</div>
      <h2 id='work-heading' className='heading reveal' ref={titleRef}>How Simfin Works</h2>
      <ol className='card-container'>
        <li className='card reveal' ref={card1Ref}>
          <span className='number'>01</span>
          <div className='icon-container'>
            <img className='icon' src={MessageIcon} alt="" />
          </div>
          <h3 className='card-heading'>Understand Requirements</h3>
        </li>

        <li className='card reveal' ref={card2Ref}>
          <span className='number'>02</span>
          <div className='icon-container'>
            <img className='icon' src={CompassIcon} alt="" />
          </div>
          <h3 className='card-heading'>Assess and Plan</h3>
        </li>

        <li className='card reveal' ref={card3Ref}>
          <span className='number'>03</span>
          <div className='icon-container'>
            <img className='icon' src={LighteningIcon} alt="" />
          </div>
          <h3 className='card-heading'>Implement Solutions</h3>
        </li>

        <li className='card reveal' ref={card4Ref}>
          <span className='number'>04</span>
          <div className='icon-container'>
            <img className='icon' src={WheelIcon} alt="" />
          </div>
          <h3 className='card-heading'>Ongoing Support</h3>
        </li>
      </ol>
    </section>
  )
}


export default WorkSection