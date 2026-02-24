import HeaderAwareSection from '../../components/common/HeaderAwareSection/HeaderAwareSection'
import './Resources'
import LandingSection from './sections/LandingSection/LandingSection'
import ResourcesSection from './sections/ResourcesSection/ResourcesSection'

const Resources = () => {
  return (
    <>
      <HeaderAwareSection theme='light'>
        <LandingSection />
      </HeaderAwareSection>
      <HeaderAwareSection theme='dark'>
        <ResourcesSection />
      </HeaderAwareSection>
    </>
  )
}

export default Resources