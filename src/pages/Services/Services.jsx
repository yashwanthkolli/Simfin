import React from 'react'
import './Services.styles.scss'
import HeaderAwareSection from '../../components/common/HeaderAwareSection/HeaderAwareSection'
import LandingSection from './sections/LandingSection/LandingSection'
import ServiceData from './ServiceData'
import ServiceSection from './sections/ServiceSection/ServiceSection'
import ContactSection from './sections/ContactSection/ContactSection'

const Services = () => {
  return (
    <>
      <HeaderAwareSection theme='light'>
        <LandingSection />
      </HeaderAwareSection>
      <HeaderAwareSection theme='dark'>
        {
          ServiceData.map((service, index) => (
            <ServiceSection
              key={service.id}
              service={service}
              index={index}
            />
          ))
        }
        <ContactSection />
      </HeaderAwareSection>
    </>
  )
}

export default Services