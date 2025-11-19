import Head from 'next/head';
import Image from 'next/image';
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
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-50" id="top">
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

      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
         {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-[100px]" />
        </div>

        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between rounded-full bg-midnight-900/80 backdrop-blur-xl border border-white/10 shadow-lg ring-1 ring-white/5">
          <a href="#top" className="flex items-center gap-3 font-semibold text-lg text-slate-100 hover:text-white transition-colors" aria-label="After Dark Apps Home">
            <Image src="/AD Apps Logo.png" alt="After Dark Apps logo" width={40} height={40} priority className="rounded-xl" />
            <span className="hidden sm:inline">After Dark Apps</span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#featured" className="hover:text-cyan-400 transition-colors">Apps</a>
            <a href="#more-apps" className="hover:text-cyan-400 transition-colors">More</a>
            <a href="#support" className="hover:text-cyan-400 transition-colors">Support</a>
          </div>
        </nav>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium uppercase tracking-widest shadow-sm backdrop-blur-sm">
            Independent studio · Est. 2022
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Mobile experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">built for the night.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Apps engineered to solve real problems with slick interfaces, intuitive flows and just the right amount of polish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full sm:w-auto">
            <a 
              className="px-8 py-4 rounded-full bg-slate-100 text-midnight-900 font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" 
              href="#featured"
            >
              Browse the apps
            </a>
            <a
              className="px-8 py-4 rounded-full bg-white/5 text-slate-200 font-semibold text-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
              href="https://play.google.com/store/apps/developer?id=After+Dark+Apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Developer
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-32 pb-32">
        <section id="featured" className="px-6 max-w-7xl mx-auto w-full scroll-mt-32">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured apps</h2>
            <p className="text-slate-400 text-lg max-w-2xl">Community favorites that combine performance, stability and premium mobile experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredApps.map((app) => (
              <AppCard key={app.title} {...app} variant="featured" />
            ))}
          </div>
        </section>

        <section id="more-apps" className="px-6 max-w-7xl mx-auto w-full scroll-mt-32">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">More experiences</h2>
            <p className="text-slate-400 text-lg max-w-2xl">Creative tools and handy utilities ready to plug into your daily workflow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreApps.map((app) => (
              <AppCard key={app.title} {...app} variant="compact" />
            ))}
          </div>
        </section>

        <section id="support" className="px-6 max-w-5xl mx-auto w-full scroll-mt-32">
           <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
             <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-slate-100 mb-4">Need help?</h2>
                <p className="text-slate-400 text-lg mb-6">Questions or issues? Our team normally replies within 48 business hours.</p>
                <p className="text-slate-400 text-base">
                  Email <a href="mailto:hi@afterdarkapps.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">hi@afterdarkapps.com</a> with your request. Adding screenshots and device details helps us troubleshoot faster.
                </p>
             </div>
             <a className="flex-shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold text-lg hover:shadow-glow hover:-translate-y-1 transition-all" href="mailto:hi@afterdarkapps.com">
               Contact support
             </a>
           </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 bg-midnight-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 font-semibold text-slate-200 text-lg">
            <Image src="/AD Apps Logo.png" alt="After Dark Apps logo" width={32} height={32} className="opacity-90" />
            <span>After Dark Apps</span>
          </div>
          <p className="text-slate-500 text-sm">© {currentYear} After Dark Apps LTDA. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <a href="/terms-of-use" className="hover:text-cyan-400 transition-colors">Terms of Use</a>
            <a href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#support" className="hover:text-cyan-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
