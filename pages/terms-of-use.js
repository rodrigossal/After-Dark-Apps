// pages/terms-of-use.js
import Head from 'next/head'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-midnight-900 py-20 px-6">
      <div className="max-w-3xl mx-auto p-8 md:p-12 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl">
        <Head>
          <title>Terms of Use | After Dark Apps</title>
        </Head>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-12 text-center">Terms of Use</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">1. Ownership &amp; Restrictions</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              All content, code, trademarks and intellectual property related to After Dark Apps products are owned by After
              Dark Apps. You may not copy, reverse-engineer, decompile, distribute or modify our applications without prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">2. App Availability &amp; Changes</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              We may modify, update or discontinue any app or service at any time without notice. If we offer paid features,
              pricing will always be clearly presented before purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">3. User Responsibility</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              You are responsible for your device’s security and data. Use of jailbroken or rooted devices is discouraged, as it
              may compromise functionality and security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">4. Third-Party Services</h2>
            <p className="text-lg leading-relaxed text-slate-400 mb-4">
              Our apps may integrate third-party tools subject to their own terms, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
              <li>
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Google Play Services
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/terms/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Firebase (Analytics, Crashlytics)
                </a>
              </li>
              <li>
                <a href="https://developers.google.com/admob/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  AdMob
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Facebook SDK
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">5. Connectivity</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Some features require an active internet connection. We are not liable for interruptions due to poor network
              conditions. Carrier or roaming charges may apply and are the user’s responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">6. Device &amp; Battery Use</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              After Dark Apps is not responsible for hardware issues, battery usage or device malfunctions occurring during app
              use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">7. Software Updates</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Updates may be required to maintain app functionality. We reserve the right to discontinue any app or feature at
              our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">8. Terms Updates</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              We may revise these Terms periodically. Continued use after changes implies acceptance of the updated Terms.
            </p>
          </section>

          <p className="text-lg leading-relaxed text-slate-400">
            <strong className="text-slate-200">Effective date:</strong> 2025-05-01
          </p>

          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              For questions or support: <a href="mailto:hi@afterdarkapps.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">hi@afterdarkapps.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
