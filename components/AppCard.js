import AppIcon from './AppIcon';
import styles from '../styles/Home.module.css';

/**
 * Componente de card de aplicativo que exibe o ícone, título, descrição e links para lojas
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título do aplicativo
 * @param {string} props.description - Descrição do aplicativo
 * @param {string} props.appStoreUrl - URL da App Store
 * @param {string} props.googlePlayUrl - URL do Google Play (opcional)
 * @param {boolean} props.darkMode - Indica se o modo escuro está ativado
 * @returns {JSX.Element} Componente de card de aplicativo
 */
export default function AppCard({ title, description, appStoreUrl, googlePlayUrl, darkMode }) {
  return (
    <div className={`${styles.card} ${darkMode ? styles.darkCard : ''}`}>
      <div className={styles.appHeader}>
        <AppIcon 
          appStoreUrl={appStoreUrl} 
          size="medium" 
          alt={`${title} icon`} 
          style={{ marginRight: '15px' }}
        />
        <h3>{title} &rarr;</h3>
      </div>
      
      <p>{description}</p>
      
      <span className={styles.storeLinks}>
        {appStoreUrl && (
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on App Store" 
              className={styles.storeBadge} 
            />
          </a>
        )}
        
        {googlePlayUrl && (
          <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className={styles.storeBadge} 
            />
          </a>
        )}
      </span>
    </div>
  );
} 