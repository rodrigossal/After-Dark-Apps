import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function PrivacyPolicy({ darkMode }) {
  return (
    <div className={`${styles.globals} ${darkMode ? styles.darkMode : ''}`}>
      <Head>
        <title>Privacy Policy | After Dark Apps</title>
      </Head>

      <h1 className={styles.title}>Privacy Policy</h1>

      <p>
        After Dark Apps provides various digital applications and services. This Privacy Policy is intended to explain how we collect, use, and protect user data across all our applications.
      </p>

      <p>
        By using any of our services, you agree to the collection and use of information in accordance with this Privacy Policy. We do not share or sell your personal information except as described in this policy.
      </p>

      <p><strong>Information Collection and Use</strong></p>
      <p>
        For a better experience, some of our applications may request access to certain data, such as device information or usage analytics. This data is used solely to improve our services and enhance user experience.
      </p>

      <div>
        <p>Our apps may integrate third-party services that collect and process user data. These services have their own privacy policies:</p>
        <ul>
          <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
          <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer">AdMob</a></li>
          <li><a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
          <li><a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
          <li><a href="https://www.facebook.com/about/privacy/update/printable" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </div>

      <p><strong>Log Data</strong></p>
      <p>
        When using our services, we may collect anonymous log data, including IP addresses, device details, and usage statistics. This data helps us identify and fix issues while improving performance.
      </p>

      <p><strong>Cookies</strong></p>
      <p>
        Some of our applications or integrated third-party services may use cookies to enhance functionality. Users can choose to disable cookies via their browser settings, but this may affect the experience of certain features.
      </p>

      <p><strong>Third-Party Services</strong></p>
      <p>
        We may work with external partners to provide features such as analytics, advertisements, or crash reporting. These partners are required to handle your data responsibly and comply with privacy regulations.
      </p>

      <p><strong>Security</strong></p>
      <p>
        We prioritize user privacy and take necessary security measures to protect personal data. However, no online system is 100% secure, and we encourage users to follow best practices for data protection.
      </p>

      <p><strong>Links to External Sites</strong></p>
      <p>
        Our applications may contain links to third-party websites. We are not responsible for the content or privacy policies of external sites and encourage users to review their policies before interacting with them.
      </p>

      <p><strong>Children’s Privacy</strong></p>
      <p>
        Our services are not intended for children under 13 years of age. We do not knowingly collect personal data from minors. If you believe a child has provided us with personal information, please contact us to have it removed.
      </p>

      <p><strong>Changes to This Privacy Policy</strong></p>
      <p>
        We may update this Privacy Policy periodically. Users are encouraged to review this page regularly to stay informed of any changes. The latest version will always be available on our website.
      </p>

      <p>This policy is effective as of 2024-03-11</p>

      <p><strong>Contact Us</strong></p>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hi@afterdarkapps.com">hi@afterdarkapps.com</a>.
      </p>

      <p>
        This Privacy Policy was created using <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">Privacy Policy Template</a> and modified by After Dark Apps to reflect our services.
      </p>
    </div>
  );
}
