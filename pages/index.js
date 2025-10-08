import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AppCard from '../components/AppCard';

const featuredApps = [
  {
    title: 'The QR Code reader & Scanner',
    description:
      'Lightning-fast scanning with history, sharing and reliability trusted by millions of users worldwide.',
    appStoreUrl: 'https://apps.apple.com/us/app/the-qr-code-reader-generator/id1574736783',
    highlightLabel: 'Top download',
  },
  {
    title: 'Ruba Mazzo',
    description:
      'Master the classic Italian card game with guided tutorials, practice matches and challenges for every skill level.',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.afterdarkgames.rubamazzo',
    highlightLabel: 'Fan favorite on Google Play',
  },
];

const moreApps = [
  {
    title: 'Super LED Banner - HD & LED',
    description:
      'Create vibrant LED banners with custom fonts, colors and effects for events, meetups or quick shout-outs.',
    appStoreUrl: 'https://apps.apple.com/us/app/super-led-banner-hd-led/id6443628073',
  },
  {
    title: 'Magic Water Color Sort Puzzle',
    description:
      'Unwind by sorting colorful liquids into the right tubes across hundreds of relaxing, visually rich levels.',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.afterdark.games.magic.water.color.sort.puzzle',
  },
  {
    title: 'Boreal - Build color schemes!',
    description:
      'Build professional color palettes in seconds with guided harmonies and cheatsheets for your visual projects.',
    appStoreUrl: 'https://apps.apple.com/us/app/boreal-build-color-schemes/id1565083632',
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page} id="top">
      <Head>
        <title>After Dark Apps | Crafted mobile experiences</title>
        <meta
          name="description"
          content="After Dark Apps creates polished mobile products for Android and iOS — designed to delight night and day."
        />
        <link rel="icon" href="/AD Apps Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>

      <header className={styles.hero}>
        <nav className={styles.navbar}>
          <a href="#top" className={styles.brand} aria-label="After Dark Apps Home">
            <Image src="/AD Apps Logo.png" alt="After Dark Apps logo" width={44} height={44} priority />
            <span>After Dark Apps</span>
          </a>
          <div className={styles.navLinks}>
            <a href="#featured">Apps</a>
            <a href="#more-apps">More</a>
            <a href="#support">Support</a>
            <a href="/terms-of-use">Legal</a>
          </div>
        </nav>

        <div className={styles.heroInner}>
          <span className={styles.heroBadge}>Independent studio · Est. 2022</span>
          <h1 className={styles.heroTitle}>
            Mobile experiences
            <br /> built for the night.
          </h1>
          <p className={styles.heroSubtitle}>
            Apps engineered to solve real problems with slick interfaces, intuitive flows and just the right amount of polish.
          </p>
          <div className={styles.heroActions}>
            <a className={`${styles.button} ${styles.buttonPrimary}`} href="#featured">
              Browse the apps
            </a>
            <a
              className={`${styles.button} ${styles.buttonGhost}`}
              href="https://play.google.com/store/apps/developer?id=After+Dark+Apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Developer
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section id="featured" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Featured apps</h2>
            <p>Community favorites that combine performance, stability and premium mobile experiences.</p>
          </div>
          <div className={styles.featuredGrid}>
            {featuredApps.map((app) => (
              <AppCard key={app.title} {...app} variant="featured" />
            ))}
          </div>
        </section>

        <section id="more-apps" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>More experiences</h2>
            <p>Creative tools and handy utilities ready to plug into your daily workflow.</p>
          </div>
          <div className={styles.appGrid}>
            {moreApps.map((app) => (
              <AppCard key={app.title} {...app} variant="compact" />
            ))}
          </div>
        </section>

        <section id="support" className={`${styles.section} ${styles.sectionSurface}`}>
          <div className={styles.sectionHeading}>
            <h2>Need help?</h2>
            <p>Questions or issues? Our team normally replies within 48 business hours.</p>
          </div>
          <div className={styles.supportCard}>
            <div>
              <p>
                Email <a href="mailto:hi@afterdarkapps.com">hi@afterdarkapps.com</a> with your request. Adding screenshots
                and device details helps us troubleshoot faster.
              </p>
            </div>
            <a className={`${styles.button} ${styles.buttonPrimary}`} href="mailto:hi@afterdarkapps.com">
              Contact support
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image src="/AD Apps Logo.png" alt="After Dark Apps logo" width={36} height={36} />
          <span>After Dark Apps</span>
        </div>
        <p className={styles.footerText}>© {currentYear} After Dark Apps LTDA. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="#support">Support</a>
        </div>
      </footer>
    </div>
  );
}
