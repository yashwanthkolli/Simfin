import React from 'react'
import './Contact.styles.scss'
import HeaderAwareSection from '../../components/common/HeaderAwareSection/HeaderAwareSection'
import LandingSection from './sections/LandingSection/LandingSection'
import ContactSection from './sections/ContactSection/ContactSection'

const Contact = () => {
  return (
    <>
      <HeaderAwareSection theme='light'>
        <LandingSection />
      </HeaderAwareSection>
      <HeaderAwareSection theme='dark'>
        <ContactSection />
      </HeaderAwareSection>
    </>
  )
}

export default Contact