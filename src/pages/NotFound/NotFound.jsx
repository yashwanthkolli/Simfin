import React from 'react'
import './NotFound.styles.scss'
import NotFoundImage from '@assets/images/page_not_found.svg'
import SEO from '../../components/common/SEO/SEO'
import HeaderAwareSection from '../../components/common/HeaderAwareSection/HeaderAwareSection'

const NotFound = () => {
  return (
    <HeaderAwareSection theme='dark'>
      <SEO
        title="Thank You"
        noIndex
      />
      <img className='not-found-img' src={NotFoundImage} alt='Not Found' />
      <h1 className='heading not-found-heading'>Sorry, the page not found</h1>
    </HeaderAwareSection>
  )
}

export default NotFound