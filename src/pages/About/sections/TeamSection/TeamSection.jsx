import useReveal from '@/animations/useReveal';
import { fadeInUp } from '@/animations/motion';
import './TeamSection.styles.scss'
import AboutImage from '@assets/images/about.jpg';
import VinodJPG from '@assets/images/team/vinod.jpg';
import VinodWebP from '@assets/images/team/vinod.webp';
import VinodAVIF from '@assets/images/team/vinod.avif';
import SharadJPG from '@assets/images/team/sharad.jpg';
import SharadWebP from '@assets/images/team/sharad.webp';
import SharadAVIF from '@assets/images/team/sharad.avif';
import KushalJPG from '@assets/images/team/kushal.jpg';
import KushalWebP from '@assets/images/team/kushal.webp';
import KushalAVIF from '@assets/images/team/kushal.avif';

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
                alt="Vinod Bagade"
              />
            </picture>
          </div>
          <div className='overlay'>
            <h3 className='name'>Vinod Bagade</h3>
            <p className='role'>Consultant</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>Vinod Bagade</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>20+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>• Financial strategy and Virtual CFO advisory<br />• Capital market and MSME IPO advisory<br />• Due diligence and transaction support<br />• Tax planning and business structuring</p>
            </div>
          </div>
        </article>
        <article className='member-card reveal' ref={card2Ref}>
          <div className='image-container'>
            <picture>
              <source
                srcSet={SharadAVIF}
                type="image/avif"
              />
              <source
                srcSet={SharadWebP}
                type="image/webp"
              />
              <img
                src={SharadJPG}
                alt="K J Sharad"
              />
            </picture>
          </div>
          <div className='overlay'>
            <h3 className='name'>K J Sharad</h3>
            <p className='role'>Consultant</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>K J Sharad</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>20+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>• Audit and assurance services<br />• Direct and indirect tax litigation<br />• Startup advisory and business structuring<br />• GAAP convergence and due diligence reviews</p>
            </div>
          </div>
        </article>
        <article className='member-card reveal' ref={card3Ref}>
          <div className='image-container'>
            <picture>
              <source
                srcSet={KushalAVIF}
                type="image/avif"
              />
              <source
                srcSet={KushalWebP}
                type="image/webp"
              />
              <img
                src={KushalJPG}
                alt="Kushal  M V"
              />
            </picture>
          </div>
          <div className='overlay'>
            <h3 className='name'>Kushal  M V</h3>
            <p className='role'>Consultant</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>Kushal  M V</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>7+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>• Accounting systems and process reviews<br />• Business process and internal control assessments<br />• Inventory control reviews<br />• Quality review and compliance oversight</p>
            </div>
          </div>
        </article>
        <article className='member-card reveal' ref={card4Ref}>
          <div className='image-container'><img src={AboutImage} alt='Robert Chen' /></div>
          <div className='overlay'>
            <h3 className='name'>Shivakumara  G V</h3>
            <p className='role'>Consultant</p>
          </div>
          <div className='hover-overlay'>
            <h3 className='name'>Shivakumara  G V</h3>
            <p className='role'>Consultant</p>
            <div className='info'>
              <p className='property'>EXPERIENCE</p>
              <p className='value'>12+ Years</p>
            </div>
            <div className='info'>
              <p className='property'>Core Competencies</p>
              <p className='value'>• Indirect tax advisory (GST and Customs)<br />• Transfer pricing support<br />• Tax strategy alignment and compliance<br />• Regulatory and operational oversight</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default TeamSection