import useReveal from '@/animations/useReveal';
import { fadeInUp, zoomFadeIn } from '@/animations/motion';
import './ExpertiseSection.styles.scss'

const ExpertiseSection = () => {
  const expertiseAt = ['Finance', 'Accounting', 'Audit Coordination', 'Taxation', 'Advisory', 'Multi-Industry Exposure', 'Operational Capabilities', 'Strategic Planning']

  const subTitleRef = useReveal(fadeInUp, { delay: 0 })
  const titleRef = useReveal(fadeInUp, { delay: 0 })

  return (
    <section className='expertise-section' aria-labelledby='aboutus-expertise-heading'>
      <h2 id='aboutus-expertise-heading' className='heading reveal' ref={titleRef}>Our Expertise</h2>
      <p className='sub-heading reveal' ref={subTitleRef}>Decades of collective experience delivering specialized financial solutions across industries.</p>
      <ul className='expertise-container'>
        {
          expertiseAt.map((_, index) => <Expertise key={index} _={_} index={index} />)
        }
      </ul>
    </section>
  )
}

const Expertise = ({_, index}) => {
  const expertiseRef = useReveal(zoomFadeIn, { delay: 0.1 * index })

  return (
    <li className='expertise reveal reveal-zoom' ref={expertiseRef}>{_}</li>
  )
}

export default ExpertiseSection