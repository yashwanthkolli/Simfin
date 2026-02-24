import ValuesImgAVIF from '@assets/images/values.avif';
import ValuesImgWebP from '@assets/images/values.webp';
import ValuesImgJPG from '@assets/images/values.jpg';
import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './ValuesSection.styles.scss'

const ValuesSection = () => {
  const imageRef = useReveal(fadeInUp, { delay: 0 })
  const contentRef = useReveal(fadeInUp, { delay: 0 })

  return (
    <section className='values-section' aria-labelledby='aboutus-values-heading'>
      <div className='image-container reveal' ref={imageRef}>
        <picture>
          <source
            srcSet={ValuesImgAVIF}
            type="image/avif"
          />
          <source
            srcSet={ValuesImgWebP}
            type="image/webp"
          />
          <img
            src={ValuesImgJPG}
            alt=''
          />
        </picture>
      </div>
      <div className='content reveal' ref={contentRef}>
        <h2 id='aboutus-values-heading' className='heading'>Our Core Values</h2>
        <div className='value-card'>
          <div className='point' aria-hidden="true"></div>
          <div className='value'>
            <h3 className='value-heading'>Integrity & Transparency</h3>
            <p className='value-text'>We uphold the highest standards of integrity in all our engagements, ensuring transparency, objectivity, and trust in every interaction. Clear communication and ethical practices form the foundation of our relationships.</p>
          </div>
        </div>
        <div className='value-card'>
          <div className='point' aria-hidden="true"></div>
          <div className='value'>
            <h3 className='value-heading'>Client-Centric Excellence</h3>
            <p className='value-text'>We focus on understanding each client’s unique context and delivering structured, practical solutions aligned with their objectives. Our commitment to excellence drives us to maintain quality, precision, and reliability in every engagement.</p>
          </div>
        </div>
        <div className='value-card'>
          <div className='point' aria-hidden="true"></div>
          <div className='value'>
            <h3 className='value-heading'>Collaboration & Accountability</h3>
            <p className='value-text'>We believe in collaborative partnerships built on accountability and shared responsibility. By working closely with clients and stakeholders, we deliver consistent outcomes that support sustainable growth and long-term success.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection