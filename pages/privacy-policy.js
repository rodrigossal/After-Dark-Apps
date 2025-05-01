// pages/privacy-policy.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function PrivacyPolicy({ darkMode }) {
  return (
    <div className={`${styles.globals} ${darkMode ? styles.darkMode : ''}`}>
      <Head>
        <title>Privacy Policy | After Dark Apps</title>
      </Head>

      <h1 className={styles.title}>Privacy Policy</h1>

      {/* 1. Data Collection */}
      <h2>1. Data Collection</h2>
      <p>
        Our apps may collect device information, crash reports and usage analytics to improve stability and user experience.
      </p>

      {/* 2. Third-Party Services */}
      <h2>2. Third-Party Services</h2>
      <p>
        We integrate services that collect and process data under their own policies:
      </p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
        <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">AdMob</a></li>
        <li><a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer">Firebase Analytics</a></li>
        <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
        <li><a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer">Facebook SDK</a></li>
      </ul>

      {/* 3. Log Data */}
      <h2>3. Log Data</h2>
      <p>
        We may collect anonymous logs (IP address, device model, error logs) to diagnose issues and monitor performance.
      </p>

      {/* 4. Cookies */}
      <h2>4. Cookies</h2>
      <p>
        Some features or third-party tools may use cookies. Disabling them may affect app functionality.
      </p>

      {/* 5. Security */}
      <h2>5. Security</h2>
      <p>
        We implement standard safeguards to protect data, but no system is infallible. Keep your device updated and secure.
      </p>

      {/* 6. External Links */}
      <h2>6. External Links</h2>
      <p>
        Apps may link to external sites. We are not responsible for their content or privacy practices.
      </p>

      {/* 7. Children’s Privacy */}
      <h2>7. Children’s Privacy</h2>
      <p>
        Our services are not intended for children under 13. We do not knowingly collect data from minors; contact us for removal if needed.
      </p>

      {/* 8. Policy Updates */}
      <h2>8. Policy Updates</h2>
      <p>
        We may update this policy periodically. The latest version is always accessible here.
      </p>

      <p><strong>Effective date:</strong> 2025-05-01</p>

      {/* Contact */}
      <h2>Contact Us</h2>
      <p>
        For privacy concerns: <a href="mailto:hi@afterdarkapps.com">hi@afterdarkapps.com</a>
      </p>
    </div>
  )
}
