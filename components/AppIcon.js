import { useState, useEffect } from 'react';
import { 
  extractAppId, 
  extractGooglePlayId, 
  fetchAppInfo, 
  fetchGooglePlayIcon, 
  adjustGooglePlayIconSize 
} from '../utils/appIcons';

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
export default function AppIcon({ appStoreUrl, googlePlayUrl, size = 'medium', alt = 'App Icon', fallbackLetter = null, style = {}, className = '' }) {
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
  const sizeClasses = {
    small: 'w-[52px] h-[52px] min-w-[52px]',
    medium: 'w-[86px] h-[86px] min-w-[86px]',
    large: 'w-[120px] h-[120px] min-w-[120px]'
  };
  const sizeClass = sizeClasses[size] || sizeClasses.medium;
  
  return (
    <div className={`flex justify-center items-center overflow-hidden rounded-[22%] bg-gradient-to-br from-slate-800/40 to-slate-950/60 border border-white/10 shadow-glass group relative ${sizeClass} ${className}`} style={style}>
      {loading ? (
        // Exibir um placeholder enquanto carrega
        <div className="w-full h-full animate-pulse bg-white/5" />
      ) : error ? (
        // Exibir fallback (letra ou ícone genérico)
        <div className="w-full h-full flex justify-center items-center bg-slate-800 text-slate-300 font-bold text-3xl border border-white/5">
          {fallbackLetter ? (
             <span>{fallbackLetter}</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-40">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z" />
            </svg>
          )}
        </div>
      ) : (
        // Exibir o ícone do aplicativo
        <img
          src={iconUrl}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
}
