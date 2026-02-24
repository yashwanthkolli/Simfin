import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noIndex = false,
}) => {
  const SITE_NAME = 'SimFin'
  const SITE_URL = 'https://simfin.in'
  const DEFAULT_DESCRIPTION =
    'SimFin is a professional finance and accounting firm offering accounting, taxation, compliance, and advisory services.'

  const finalTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const finalDescription = description || DEFAULT_DESCRIPTION
  const finalOgTitle = ogTitle || finalTitle
  const finalOgDescription = ogDescription || finalDescription
  const finalOgImage = ogImage || `${SITE_URL}/og-image.jpg`

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Indexing */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={canonical || SITE_URL} />
      <meta property="og:image" content={finalOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
    </Helmet>
  )
}

export default SEO
