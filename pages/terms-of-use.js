import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function TermsOfUse({ darkMode }) {
  return (
    <div className={`${styles.globals} ${darkMode ? styles.darkMode : ''}`}>
      <Head>
        <title>Terms of Use | After Dark Apps</title>
      </Head>

      <h1 className={styles.title}>Terms of Use</h1>

      <p>
        By downloading or using any of our applications, you agree to these Terms of Use. Please read them carefully before using our services.  
        You are not allowed to copy, modify, reverse-engineer, or distribute any of our applications or trademarks without explicit permission.  
        All intellectual property rights related to our apps remain the property of After Dark Apps.
      </p>

      <p>
        After Dark Apps reserves the right to modify, update, or discontinue any of its apps or services at any time.  
        Any charges for premium features will always be clearly communicated before purchase.
      </p>

      <p><strong>Data & Privacy</strong></p>
      <p>
        Our applications may store and process certain user data as necessary to provide services.  
        You are responsible for maintaining the security of your device. We strongly discourage jailbreaking or rooting,  
        as this may compromise security and lead to unexpected behavior in our applications.
      </p>

      <div>
        <p>Some of our applications use third-party services, each with their own Terms of Use:</p>
        <ul>
          <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
          <li><a href="https://developers.google.com/admob/terms" target="_blank" rel="noopener noreferrer">AdMob</a></li>
          <li><a href="https://firebase.google.com/terms/analytics" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
          <li><a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
          <li><a href="https://www.facebook.com/legal/terms/plain_text_terms" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </div>

      <p><strong>Internet & Data Usage</strong></p>
      <p>
        Some features of our apps require an active internet connection.  
        After Dark Apps is not responsible for interruptions due to poor connectivity.  
        If you use our apps over mobile data, be aware that your carrier may apply additional charges.  
        Users are responsible for any such costs, including roaming fees when using the app outside their home country.
      </p>

      <p><strong>Battery & Device Responsibility</strong></p>
      <p>
        After Dark Apps is not responsible for device issues that may affect app usage, including battery depletion or device failures.
      </p>

      <p><strong>Software Updates</strong></p>
      <p>
        We may release updates to improve performance or compatibility.  
        You agree to install these updates to continue using our applications.  
        We reserve the right to discontinue any app at any time without prior notice.
      </p>

      <p><strong>Changes to Terms</strong></p>
      <p>
        We may update these Terms of Use periodically.  
        Any modifications will be posted on this page, and continued use of our apps implies acceptance of the updated terms.
      </p>

      <p>Effective date: 2024-03-11</p>

      <p><strong>Contact Us</strong></p>
      <p>
        If you have any questions or concerns, please contact us at <a href="mailto:hi@afterdarkapps.com">hi@afterdarkapps.com</a>.
      </p>

      <p>
        These Terms of Use were created for After Dark Apps and may be subject to further modifications.
      </p>
    </div>
  );
}
