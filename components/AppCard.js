import AppIcon from './AppIcon';
import styles from '../styles/Home.module.css';

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

  const cardClassNames = [
    styles.appCard,
    variant === 'featured' ? styles.appCardFeatured : '',
    variant === 'compact' ? styles.appCardCompact : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={cardClassNames}>
      {highlightLabel && (
        <span className={styles.appBadge} aria-label={highlightLabel}>
          {highlightLabel}
        </span>
      )}

      <div className={styles.appCardBody}>
        <div className={styles.appIconShell}>
          {hasIconSource ? (
            <AppIcon
              appStoreUrl={appStoreUrl}
              googlePlayUrl={googlePlayUrl}
              size={iconSize}
              alt={`${title} icon`}
              className={styles.appIcon}
            />
          ) : (
            <div className={styles.iconFallback} aria-hidden="true">
              {title.charAt(0)}
            </div>
          )}
        </div>

        <div className={styles.appContent}>
          <h3 className={styles.appTitle}>{title}</h3>
          <p className={styles.appDescription}>{description}</p>
        </div>
      </div>

      <div className={styles.appActions} aria-label={`Download ${title}`}>
        {appStoreUrl && (
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.storeLink}
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className={`${styles.storeBadge} ${styles.storeBadgeApple}`}
            />
          </a>
        )}

        {googlePlayUrl && (
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.storeLink}
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className={`${styles.storeBadge} ${styles.storeBadgeGoogle}`}
            />
          </a>
        )}
      </div>
    </article>
  );
}
