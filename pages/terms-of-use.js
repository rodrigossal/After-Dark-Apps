// pages/terms-of-use.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function TermsOfUse() {
  return (
    <div className={styles.staticPage}>
      <Head>
        <title>Terms of Use | After Dark Apps</title>
      </Head>

      <h1 className={styles.staticHeading}>Terms of Use</h1>

      <section>
        <h2 className={styles.staticSectionTitle}>1. Ownership &amp; Restrictions</h2>
        <p className={styles.staticParagraph}>
          All content, code, trademarks and intellectual property related to After Dark Apps products are owned by After
          Dark Apps. You may not copy, reverse-engineer, decompile, distribute or modify our applications without prior
          written consent.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>2. App Availability &amp; Changes</h2>
        <p className={styles.staticParagraph}>
          We may modify, update or discontinue any app or service at any time without notice. If we offer paid features,
          pricing will always be clearly presented before purchase.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>3. User Responsibility</h2>
        <p className={styles.staticParagraph}>
          You are responsible for your device’s security and data. Use of jailbroken or rooted devices is discouraged, as it
          may compromise functionality and security.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>4. Third-Party Services</h2>
        <p className={styles.staticParagraph}>
          Our apps may integrate third-party tools subject to their own terms, including:
        </p>
        <ul className={styles.staticList}>
          <li>
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
              Google Play Services
            </a>
          </li>
          <li>
            <a href="https://firebase.google.com/terms/" target="_blank" rel="noopener noreferrer">
              Firebase (Analytics, Crashlytics)
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/admob/terms" target="_blank" rel="noopener noreferrer">
              AdMob
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener noreferrer">
              Facebook SDK
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>5. Connectivity</h2>
        <p className={styles.staticParagraph}>
          Some features require an active internet connection. We are not liable for interruptions due to poor network
          conditions. Carrier or roaming charges may apply and are the user’s responsibility.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>6. Device &amp; Battery Use</h2>
        <p className={styles.staticParagraph}>
          After Dark Apps is not responsible for hardware issues, battery usage or device malfunctions occurring during app
          use.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>7. Software Updates</h2>
        <p className={styles.staticParagraph}>
          Updates may be required to maintain app functionality. We reserve the right to discontinue any app or feature at
          our discretion.
        </p>
      </section>

      <section>
        <h2 className={styles.staticSectionTitle}>8. Terms Updates</h2>
        <p className={styles.staticParagraph}>
          We may revise these Terms periodically. Continued use after changes implies acceptance of the updated Terms.
        </p>
      </section>

      <p className={styles.staticParagraph}>
        <strong>Effective date:</strong> 2025-05-01
      </p>

      <section>
        <h2 className={styles.staticSectionTitle}>Contact Us</h2>
        <p className={styles.staticParagraph}>
          For questions or support: <a href="mailto:hi@afterdarkapps.com">hi@afterdarkapps.com</a>
        </p>
      </section>
    </div>
  )
}
