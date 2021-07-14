import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>After Dark Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AFTER DARK <a href="https://apps.apple.com/us/developer/rodrigo-salles-stefani/id1243868083">APPS</a>
        </h1>

        <p className={styles.description}>
          The app you were looking for
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>The Qr Code reader & Scanner &rarr;</h3>
            <p>The easiest and the most complete FREE and precise QR code reader in the store.</p>
          </a>

          <a href="https://apps.apple.com/us/app/boreal-build-color-schemes/id1565083632" className={styles.card}>
            <h3>Boreal - Build color schemes! &rarr;</h3>
            <p>Build awesome color schemes for your designs with an ultra-fast palette generator! Decide which colors and combinations to use with our cheatsheets!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use - Privacy Policy
        </a>
      </footer>
    </div>
  )
}
