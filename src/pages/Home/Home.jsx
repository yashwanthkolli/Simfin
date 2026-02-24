import './Home.styles.scss'
import SEO from '../../components/common/SEO/SEO'
import LandingSection from './sections/LandingSection/LandingSection'
import WhySection from './sections/WhySection/WhySection'
import ServicesSection from './sections/ServicesSection/ServicesSection'
import WorkSection from './sections/WorkSection/WorkSection'
import TargetClinteleSection from './sections/TargetClinteleSection/TargetClinteleSection'
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection'
import HeaderAwareSection from '../../components/common/HeaderAwareSection/HeaderAwareSection'
import ContactSection from './sections/ContactSection/ContactSection'
import ClientsSection from './sections/ClientsSection/ClientsSection'

const Home = () => {
  return (
    <>
      <SEO
        description="SimFin provides reliable accounting, taxation, compliance, and financial advisory services for growing businesses."
        keywords="accounting firm, finance services, tax consulting, bookkeeping"
        canonical="https://simfin.in/"
      />

      <HeaderAwareSection theme='light'>
        <LandingSection />
      </HeaderAwareSection>

      <HeaderAwareSection theme='dark'>
        <WhySection />
        <ServicesSection />
      </HeaderAwareSection>

      <HeaderAwareSection theme='light'>
        <WorkSection />
      </HeaderAwareSection>

      <HeaderAwareSection theme='dark'>
        <TargetClinteleSection />
        {/* <TestimonialsSection /> */}
      </HeaderAwareSection>

      <HeaderAwareSection theme='light'>
        <ClientsSection />
        <ContactSection />
      </HeaderAwareSection>
    </>
  )
}

export default Home