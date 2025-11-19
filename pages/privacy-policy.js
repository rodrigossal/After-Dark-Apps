// pages/privacy-policy.js
import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-midnight-900 py-20 px-6">
      <div className="max-w-3xl mx-auto p-8 md:p-12 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl">
        <Head>
          <title>Privacy Policy | After Dark Apps</title>
        </Head>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-12 text-center">Privacy Policy</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">1. Data Collection</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Our apps may collect device information, crash reports and usage analytics to improve stability and user
              experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">2. Third-Party Services</h2>
            <p className="text-lg leading-relaxed text-slate-400 mb-4">
              We integrate services that collect and process data under their own policies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Google Play Services
                </a>
              </li>
              <li>
                <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  AdMob
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Firebase Analytics
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Firebase Crashlytics
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Facebook SDK
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">3. Log Data</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              We may collect anonymous logs (IP address, device model, error logs) to diagnose issues and monitor performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">4. Cookies</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Some features or third-party tools may use cookies. Disabling them may affect app functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">5. Security</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              We implement standard safeguards to protect data, but no system is infallible. Keep your device updated and
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">6. External Links</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Apps may link to external sites. We are not responsible for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">7. Children’s Privacy</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Our services are not intended for children under 13. We do not knowingly collect data from minors; contact us
              for removal if needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">8. Policy Updates</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              We may update this policy periodically. The latest version is always accessible here.
            </p>
          </section>

          <p className="text-lg leading-relaxed text-slate-400">
            <strong className="text-slate-200">Effective date:</strong> 2025-05-01
          </p>

          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              For privacy concerns: <a href="mailto:hi@afterdarkapps.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">hi@afterdarkapps.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
