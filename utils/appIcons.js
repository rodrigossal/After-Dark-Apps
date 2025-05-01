/**
 * Utilidades para buscar ícones de aplicativos da App Store
 * 
 * Este módulo contém funções para extrair IDs de aplicativos da App Store
 * e buscar seus ícones usando a API pública da iTunes
 */

/**
 * Extrai o ID de um aplicativo da App Store a partir da URL completa
 * @param {string} appStoreUrl - URL da App Store (ex: https://apps.apple.com/us/app/nome-do-app/id1234567890)
 * @returns {string|null} ID do aplicativo ou null se não for encontrado
 */
export function extractAppId(appStoreUrl) {
  if (!appStoreUrl) return null;
  
  // Extrair o ID usando uma expressão regular que busca 'id' seguido por números
  const match = appStoreUrl.match(/id(\d+)/);
  return match ? match[1] : null;
}

/**
 * Gera a URL do ícone de um aplicativo com base no ID da App Store
 * @param {string} appId - ID do aplicativo na App Store
 * @param {string} size - Tamanho do ícone desejado ('small', 'medium', 'large')
 * @returns {string} URL do ícone do aplicativo
 */
export function getAppIconUrl(appId, size = 'large') {
  if (!appId) return null;
  
  // Determinar o tamanho do ícone
  const iconSize = size === 'small' ? '60x60' : 
                  size === 'medium' ? '100x100' : '512x512';
  
  // URL da API do iTunes Search para buscar informações do aplicativo
  return `https://is${Math.floor(Math.random() * 5) + 1}-ssl.mzstatic.com/image/thumb/Purple/${appId}_${iconSize}bb.jpg`;
}

/**
 * Busca as informações completas de um aplicativo incluindo o ícone
 * @param {string} appId - ID do aplicativo na App Store
 * @returns {Promise<Object>} Informações do aplicativo incluindo artworkUrl512 para o ícone
 */
export async function fetchAppInfo(appId) {
  if (!appId) return null;
  
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${appId}`);
    const data = await response.json();
    
    if (data && data.results && data.results.length > 0) {
      return data.results[0];
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao buscar informações do aplicativo:', error);
    return null;
  }
}

/**
 * Componente que obtém e exibe o ícone de um aplicativo da App Store
 * @param {string} appStoreUrl - URL completa do aplicativo na App Store
 * @param {string} size - Tamanho desejado do ícone ('small', 'medium', 'large')
 * @returns {Promise<string>} URL do ícone do aplicativo
 */
export async function getAppIconFromUrl(appStoreUrl, size = 'large') {
  const appId = extractAppId(appStoreUrl);
  
  if (!appId) return null;
  
  try {
    const appInfo = await fetchAppInfo(appId);
    
    if (appInfo) {
      // Dependendo do tamanho solicitado, retornar a URL do ícone adequada
      if (size === 'small' && appInfo.artworkUrl60) {
        return appInfo.artworkUrl60;
      } else if (size === 'medium' && appInfo.artworkUrl100) {
        return appInfo.artworkUrl100;
      } else if (appInfo.artworkUrl512) {
        return appInfo.artworkUrl512;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao obter ícone do aplicativo:', error);
    return null;
  }
} 