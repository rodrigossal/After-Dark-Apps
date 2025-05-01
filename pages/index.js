import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AppCard from '../components/AppCard';

export default function Home({ darkMode, setDarkMode }) {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={`${styles.container} ${darkMode ? styles.darkMode : ''}`}>
      <Head>
        <title>After Dark Apps</title>
        <link rel="icon" href="/AD Apps Logo.png" />
        <meta name="description" content="Mobile app development company building practical and delightful experiences for Android and iOS." />
      </Head>

      {/* Theme toggle button */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`${styles.themeToggle} ${darkMode ? styles.darkToggle : styles.lightToggle}`}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <main className={`${styles.main} ${darkMode ? styles.darkMode : ''}`}>
        {/* Logo and Title */}
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <img 
              src="/AD Apps Logo.png" 
              alt="After Dark Apps Logo" 
              className={styles.logo}
            />
          </div>
          <h1 className={styles.title}>
            AFTER DARK <a href="https://apps.apple.com/us/developer/rodrigo-salles-stefani/id1243868083" target="_blank" rel="noopener noreferrer">APPS</a>
          </h1>
        </div>

        <p className={styles.description}>
          The app you were looking for
        </p>

        {/* About Section */}
        <section className={`${styles.section} ${darkMode ? styles.darkSection : ''}`}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.sectionText}>
            After Dark Apps is a mobile app development company based in Brazil, building practical and delightful experiences 
            for Android and iOS since 2022. We focus on creating high-quality, user-friendly applications that solve real problems.
          </p>
        </section>

        {/* Apps Section */}
        <h2 className={styles.sectionTitle}>Our Apps</h2>
        <div className={styles.grid}>
          <AppCard
            title="The QR Code reader & Scanner"
            description="The easiest and the most complete FREE and precise QR code reader in the store. Quickly scan any QR code and get results instantly, with history tracking and sharing capabilities."
            appStoreUrl="https://apps.apple.com/us/app/the-qr-code-reader-generator/id1574736783"
            darkMode={darkMode}
          />

          <AppCard
            title="Boreal - Build color schemes!"
            description="Build awesome color schemes for your designs with an ultra-fast palette generator! Decide which colors and combinations to use with our cheatsheets. Perfect for designers, developers, and anyone working on visual projects."
            appStoreUrl="https://apps.apple.com/us/app/boreal-build-color-schemes/id1565083632"
            darkMode={darkMode}
          />
          
          <AppCard
            title="Super LED Banner - HD & LED"
            description="Show awesome LED & HD messages to your friends, dates, coworkers, family, or anyone you want! Create eye-catching scrolling text displays with customizable colors, fonts, and effects. Perfect for events, communication, or just for fun."
            appStoreUrl="https://apps.apple.com/us/app/super-led-banner-hd-led/id6443628073"
            darkMode={darkMode}
          />
        </div>

        {/* Support Section */}
        <section className={`${styles.section} ${darkMode ? styles.darkSection : ''}`} id="support">
          <h2 className={styles.sectionTitle}>Support</h2>
          <p className={styles.sectionText}>
            For app support or business inquiries, contact us at <a href="mailto:hi@afterdarkapps.com" className={styles.linkHighlight}>hi@afterdarkapps.com</a>. 
            We usually respond within 48 hours.
          </p>
        </section>

        {/* Legal Section */}
        <section className={`${styles.legalSection} ${darkMode ? styles.darkSection : ''}`}>
          <h2 className={styles.sectionTitle}>Legal</h2>
          <div className={styles.legalLinks}>
            <a href="/terms-of-use" className={styles.legalLink}>Terms of Use</a>
            <a href="/privacy-policy" className={styles.legalLink}>Privacy Policy</a>
          </div>
        </section>
      </main>

      <footer className={`${styles.footer} ${darkMode ? styles.darkMode : ''}`}>
        <div className={styles.footerLogo}>
          <img 
            src="/AD Apps Logo.png" 
            alt="After Dark Apps Logo" 
            width={40} 
            height={40} 
          />
        </div>
        <p>© {currentYear} After Dark Apps LTDA. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="/terms-of-use">Terms of Use</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="#support">Support</a>
        </div>
      </footer>
    </div>
  );
}
