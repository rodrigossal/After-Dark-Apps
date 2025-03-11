import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ darkMode, setDarkMode }) {
  // Remova os useEffect e useState deste componente, pois já estão no _app.js
  
  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}>
      <Head>
        <title>After Dark Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Botão para alternar entre modo claro e escuro */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`absolute top-4 right-4 p-2 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>

      <main className={`${styles.main} ${darkMode ? styles.darkMode : ''}`}>
        <h1 className={styles.title}>
          AFTER DARK <a href="https://apps.apple.com/us/developer/rodrigo-salles-stefani/id1243868083" target="_blank">APPS</a>
        </h1>

        <p className={styles.description}>
          The app you were looking for
        </p>

        <div className={styles.grid}>
          <a href="https://apps.apple.com/us/app/the-qr-code-reader-generator/id1574736783" target="_blank" className={`${styles.card} ${darkMode ? styles.darkCard : ''}`}>
            <h3>The QR Code reader & Scanner &rarr;</h3>
            <p>The easiest and the most complete FREE and precise QR code reader in the store.</p>
          </a>

          <a href="https://apps.apple.com/us/app/boreal-build-color-schemes/id1565083632" target="_blank" className={`${styles.card} ${darkMode ? styles.darkCard : ''}`}>
            <h3>Boreal - Build color schemes! &rarr;</h3>
            <p>Build awesome color schemes for your designs with an ultra-fast palette generator! Decide which colors and combinations to use with our cheatsheets!</p>
          </a>
        </div>

        <p className={styles.description}>
          Contact us at &rarr; <a href="mailto:hi@afterdarkapps.com" target="_blank" className={styles.target}>hi@afterdarkapps.com</a>
        </p>
      </main>

      <footer className={`${styles.footer} ${darkMode ? styles.darkMode : ''}`}>
        <a href="terms-of-use">Terms of Use</a> - <a href="privacy-policy">Privacy Policy</a>
      </footer>
    </div>
  );
}
