import { useState, useEffect } from 'react';
import { 
  extractAppId, 
  extractGooglePlayId, 
  fetchAppInfo, 
  fetchGooglePlayIcon, 
  adjustGooglePlayIconSize 
} from '../utils/appIcons';
import styles from '../styles/AppIcon.module.css';

/**
 * Componente que exibe o ícone de um aplicativo com base na URL da App Store
 * @param {Object} props - Propriedades do componente
 * @param {string} props.appStoreUrl - URL completa do aplicativo na App Store
 * @param {string} props.googlePlayUrl - URL completa do aplicativo no Google Play
 * @param {string} props.size - Tamanho do ícone ('small', 'medium', 'large')
 * @param {string} props.alt - Texto alternativo para o ícone
 * @param {Object} props.style - Estilos adicionais para o container do ícone
 * @returns {JSX.Element} Componente de ícone do aplicativo
 */
export default function AppIcon({ appStoreUrl, googlePlayUrl, size = 'medium', alt = 'App Icon', style = {}, className = '' }) {
  const [iconUrl, setIconUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Função assíncrona para buscar o ícone do aplicativo
    async function fetchAppIcon() {
      try {
        setLoading(true);
        setError(false);
        
        if (appStoreUrl) {
          // Extrair o ID do aplicativo da URL da App Store
          const appId = extractAppId(appStoreUrl);
          
          if (!appId) {
            setError(true);
            setLoading(false);
            return;
          }
          
          // Buscar informações completas do aplicativo
          const appInfo = await fetchAppInfo(appId);
          
          if (appInfo) {
            // Selecionar a URL do ícone com base no tamanho solicitado
            let url;
            if (size === 'small' && appInfo.artworkUrl60) {
              url = appInfo.artworkUrl60;
            } else if (size === 'medium' && appInfo.artworkUrl100) {
              url = appInfo.artworkUrl100;
            } else if (appInfo.artworkUrl512) {
              url = appInfo.artworkUrl512;
            } else {
              url = appInfo.artworkUrl60 || appInfo.artworkUrl100 || appInfo.artworkUrl512;
            }
            
            setIconUrl(url);
          } else {
            setError(true);
          }
        } else if (googlePlayUrl) {
          const packageId = extractGooglePlayId(googlePlayUrl);
          
          if (!packageId) {
            setError(true);
            setLoading(false);
            return;
          }
          
          const googleIconUrl = await fetchGooglePlayIcon(packageId);
          
          if (googleIconUrl) {
            setIconUrl(adjustGooglePlayIconSize(googleIconUrl, size));
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Erro ao buscar ícone:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    if (appStoreUrl || googlePlayUrl) {
      fetchAppIcon();
    } else {
      setError(true);
      setLoading(false);
    }
  }, [appStoreUrl, googlePlayUrl, size]);

  // Determinar a classe do tamanho do ícone
  const sizeClass = styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`] || styles.sizeMedium;
  
  return (
    <div className={`${styles.iconContainer} ${sizeClass} ${className}`} style={style}>
      {loading ? (
        // Exibir um placeholder enquanto carrega
        <div className={styles.placeholder} />
      ) : error ? (
        // Exibir um ícone genérico em caso de erro
        <div className={styles.errorIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z" />
          </svg>
        </div>
      ) : (
        // Exibir o ícone do aplicativo
        <img
          src={iconUrl}
          alt={alt}
          className={styles.appIcon}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
}
