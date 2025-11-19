import AppIcon from './AppIcon';

/**
 * Card de aplicativo com variações de layout para destaque ou listagem compacta.
 */
export default function AppCard({
  title,
  description,
  appStoreUrl,
  googlePlayUrl,
  highlightLabel,
  variant = 'standard',
}) {
  const hasIconSource = Boolean(appStoreUrl || googlePlayUrl);
  const iconSize = variant === 'featured' ? 'large' : 'medium';

  const baseCardClasses = "relative flex flex-col p-6 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-lg overflow-hidden hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 group";
  
  const variants = {
    featured: "md:p-10 bg-gradient-to-br from-white/[0.05] to-white/[0.01]",
    compact: "p-5",
    standard: "gap-6"
  };

  const cardClassNames = `${baseCardClasses} ${variants[variant] || ''}`;

  // Adjust layout based on variant
  const isCompact = variant === 'compact';
  const bodyClasses = isCompact 
    ? "flex flex-col items-center text-center gap-4"
    : "flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left";

  const contentClasses = isCompact ? "flex flex-col gap-3" : "flex flex-col gap-3 flex-1";

  return (
    <article className={cardClassNames}>
       {/* Background glow effect */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-400/20 transition-colors duration-500 opacity-0 group-hover:opacity-100" />

      {highlightLabel && (
        <div className="mb-4 md:mb-0 w-full flex justify-start">
             <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
            {highlightLabel}
            </span>
        </div>
      )}

      <div className={bodyClasses}>
        <div className="flex-shrink-0 relative z-10">
          {hasIconSource ? (
            <AppIcon
              appStoreUrl={appStoreUrl}
              googlePlayUrl={googlePlayUrl}
              size={iconSize}
              alt={`${title} icon`}
              fallbackLetter={title.charAt(0)}
            />
          ) : (
            <div className="w-[86px] h-[86px] flex items-center justify-center text-3xl font-bold rounded-[22%] bg-slate-800 text-slate-200 border border-white/10">
              {title.charAt(0)}
            </div>
          )}
        </div>

        <div className={contentClasses}>
          <h3 className="text-2xl font-bold text-slate-50 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-slate-400 leading-relaxed text-base">{description}</p>
          
           <div className={`flex flex-wrap gap-3 mt-2 relative z-10 ${isCompact ? 'justify-center' : 'justify-center md:justify-start'}`} aria-label={`Download ${title}`}>
            {appStoreUrl && (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
            )}

            {googlePlayUrl && (
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-14 -my-2 w-auto" 
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
