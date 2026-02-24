import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './TeamSection.styles.scss'
import AboutImage from '@assets/images/about.jpg';
import VinodJPG from '@assets/images/team/vinod.jpg';
import VinodWebP from '@assets/images/team/vinod.webp';
import VinodAVIF from '@assets/images/team/vinod.avif';

const TeamSection = () => {
  const headingRef = useReveal(fadeInUp, { delay: 0 })
  const subHeadingRef = useReveal(fadeInUp, { delay: 0 })
  const card1Ref = useReveal(fadeInUp, { delay: 0 })
  const card2Ref = useReveal(fadeInUp, { delay: 0.1 })
  const card3Ref = useReveal(fadeInUp, { delay: 0.2 })
  const card4Ref = useReveal(fadeInUp, { delay: 0.3 })

  return (
    <section className='team-section' aria-labelledby='aboutus-team-heading'>
      <h2 id='aboutus-team-heading' className='heading reveal' ref={headingRef}>Consulting Team</h2>
      <p className='sub-heading reveal' ref={subHeadingRef}>Our expert partners bring decades of combined experience to guide your business.</p>
      <div className='card-container'>
        <article className='member-card reveal' ref={card1Ref}>
          <div className='image-container'>
            <picture>
              <source
                srcSet={VinodAVIF}
                type="image/avif"
              />
              <source
                srcSet={VinodWebP}
                type="image/webp"
              />
              <img
                src={VinodJPG}
                alt="Robert Chen"
              />
            </picture>
          </div>
          <div className='overlay'>
            <h3 className='name'>Vinod Bagade</h3>
            <p className='role'>Snehit's Uncle</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>Robert Chen</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>20+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>M&A, Capital Structuring, Financial Modeling</p>
            </div>
          </div>
        </article>
        <article className='member-card reveal' ref={card2Ref}>
          <div className='image-container'><img src={AboutImage} alt='Robert Chen' /></div>
          <div className='overlay'>
            <h3 className='name'>Robert Chen</h3>
            <p className='role'>Consultant</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>Robert Chen</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>20+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>M&A, Capital Structuring, Financial Modeling</p>
            </div>
          </div>
        </article>
        <article className='member-card reveal' ref={card3Ref}>
          <div className='image-container'><img src={AboutImage} alt='Robert Chen' /></div>
          <div className='overlay'>
            <h3 className='name'>Robert Chen</h3>
            <p className='role'>Consultant</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>Robert Chen</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>20+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>M&A, Capital Structuring, Financial Modeling</p>
            </div>
          </div>
        </article>
        <article className='member-card reveal' ref={card4Ref}>
          <div className='image-container'><img src={AboutImage} alt='Robert Chen' /></div>
          <div className='overlay'>
            <h3 className='name'>Robert Chen</h3>
            <p className='role'>Consultant</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>Robert Chen</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>20+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>M&A, Capital Structuring, Financial Modeling</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default TeamSection