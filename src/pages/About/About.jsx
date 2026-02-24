import React from 'react'
import './About.styles.scss'
import LandingSection from './sections/LandingSection/LandingSection'
import ApproachSection from './sections/ApproachSection/ApproachSection'
import ValuesSection from './sections/ValuesSection/ValuesSection'
import ExpertiseSection from './sections/ExpertiseSection/ExpertiseSection'
import TeamSection from './sections/TeamSection/TeamSection'
import ContactSection from './sections/ContactSection/ContactSection'
import HeaderAwareSection from '../../components/common/HeaderAwareSection/HeaderAwareSection'

const About = () => {
  return (
    <>
      <HeaderAwareSection theme='light'>
        <LandingSection />
      </HeaderAwareSection>

      <HeaderAwareSection theme='dark'>
        <ApproachSection />
        <ValuesSection />
      </HeaderAwareSection>
      
      <HeaderAwareSection theme='light'>
        <ExpertiseSection />
      </HeaderAwareSection>

      <HeaderAwareSection theme='dark'>
        <TeamSection />
      </HeaderAwareSection>

      <HeaderAwareSection theme='light'>
        <ContactSection />
      </HeaderAwareSection>
    </>
  )
}

export default About