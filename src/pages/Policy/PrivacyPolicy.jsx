import HeaderAwareSection from '../../components/common/HeaderAwareSection/HeaderAwareSection'
import './Policy.styles.scss'

const PrivacyPolicy = () => {
  return (
    <HeaderAwareSection theme='dark'>
      <section className='policy-page'>
        <h1 className='heading'>Privacy Policy</h1>

        <p className='last-updated'>Last updated: 03-02-2026</p>
        <p>At Simfin Advisory LLP, We are committed to protecting the privacy and personal data of users who visit our website and interact with our services.</p>
        <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        <p>1. Information We Collect</p>
        <p>We may collect the following personal information when you voluntarily submit it through our website:</p>
        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Message or enquiry details</li>
        </ul>
        <p>This information is collected primarily through our contact forms.</p>
        <br />
        <p>2. How We Use Your Information</p>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To respond to enquiries and requests</li>
          <li>To communicate with you regarding our services</li>
          <li>To understand user needs and improve our website</li>
          <li>For internal business and administrative purposes</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information.</p>
        <br />
        <p>3. Analytics and Usage Data</p>
        <p>We may use tools such as Google Analytics in the future to understand how users interact with our website. These tools may collect non-personal information such as:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Pages visited</li>
          <li>Time spent on the website</li>
        </ul>
        <p>This data is used only for analytical and performance improvement purposes.</p>
        <br />
        <p>4. Cookies</p>
        <p>Our website may use basic cookies for functionality and analytics purposes. Cookies help us understand website usage and improve user experience.</p>
        <p>You can choose to disable cookies through your browser settings</p>
        <br />
        <p>5. Data Storage and Security</p>
        <p>All form submissions are received via our official mailbox and handled securely. We take reasonable technical and organisational measures to protect your personal data from unauthorized access, misuse, or disclosure.</p>
        <p>However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
        <br />
        <p>6. Data Sharing and Disclosure</p>
        <p>We do not share your personal information with third parties except:</p>
        <ul>
          <li>When required by law or regulatory authorities</li>
          <li>When necessary to protect our legal rights</li>
        </ul>
        <p>We do not transfer or sell personal data to external organizations for marketing purposes.</p>
        <br />
        <p>7. International Users</p>
        <p>As we serve both national and international users, your data may be processed in accordance with applicable data protection laws, including:</p>
        <ul>
          <li>India’s Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
          <li>The General Data Protection Regulation (GDPR) for EU users</li>
        </ul>
        <br />
        <p>8. Your Rights</p>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for data processing</li>
        </ul>
        <p>You may exercise these rights by contacting us at the email address below.</p>
        <br />
        <p>9. Changes to This Policy</p>
        <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with a revised “Last updated” date.</p>
        <br />
        <p>10. Contact Information</p>
        <p>If you have any questions about this Privacy Policy or how your data is handled, you may contact us at:</p>
        <p>Simfin Advisory LLP</p>
        <p>Bangalore, Karnataka, India</p>
        <p>Email: info@simfin.co</p>
      </section>
    </HeaderAwareSection>
  )
}

export default PrivacyPolicy