// pages/privacy-policy.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.staticPage}>
      <Head>
        <title>Privacy Policy | After Dark Apps</title>
      </Head>

      <h1 className={styles.staticHeading}>Privacy Policy</h1>

      <section>
        <h2 className={styles.staticSectionTitle}>1. Data Collection</h2>
        <p className={styles.staticParagraph}>
          Our apps may collect device information, crash reports and usage analytics to improve stability and user
          experience.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>2. Third-Party Services</h2>
        <p className={styles.staticParagraph}>
          We integrate services that collect and process data under their own policies:
        </p>
        <ul className={styles.staticList}>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Play Services
            </a>
          </li>
          <li>
            <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">
              AdMob
            </a>
          </li>
          <li>
            <a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer">
              Firebase Analytics
            </a>
          </li>
          <li>
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
              Firebase Crashlytics
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer">
              Facebook SDK
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>3. Log Data</h2>
        <p className={styles.staticParagraph}>
          We may collect anonymous logs (IP address, device model, error logs) to diagnose issues and monitor performance.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>4. Cookies</h2>
        <p className={styles.staticParagraph}>
          Some features or third-party tools may use cookies. Disabling them may affect app functionality.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>5. Security</h2>
        <p className={styles.staticParagraph}>
          We implement standard safeguards to protect data, but no system is infallible. Keep your device updated and
          secure.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>6. External Links</h2>
        <p className={styles.staticParagraph}>
          Apps may link to external sites. We are not responsible for their content or privacy practices.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>7. Children’s Privacy</h2>
        <p className={styles.staticParagraph}>
          Our services are not intended for children under 13. We do not knowingly collect data from minors; contact us
          for removal if needed.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>8. Policy Updates</h2>
        <p className={styles.staticParagraph}>
          We may update this policy periodically. The latest version is always accessible here.
        </p>
      </section>

      <p className={styles.staticParagraph}>
        <strong>Effective date:</strong> 2025-05-01
      </p>

      <section>
        <h2 className={styles.staticSectionTitle}>Contact Us</h2>
        <p className={styles.staticParagraph}>
          For privacy concerns: <a href="mailto:hi@afterdarkapps.com">hi@afterdarkapps.com</a>
        </p>
      </section>
    </div>
  )
}
