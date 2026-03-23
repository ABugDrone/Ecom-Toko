// CORS Proxy Configuration
// Due to browser CORS restrictions, we need to use a proxy service
// to fetch content from external websites like tokoacademy.org

export const CORS_PROXIES = [
  'https://api.allorigins.win/get?url=',
  'https://cors-anywhere.herokuapp.com/',
  'https://thingproxy.freeboard.io/fetch/'
];

export const getCorsProxyUrl = (targetUrl: string, proxyIndex: number = 0): string => {
  const proxy = CORS_PROXIES[proxyIndex] || CORS_PROXIES[0];
  return `${proxy}${encodeURIComponent(targetUrl)}`;
};

// Fallback function to try multiple proxies
export const fetchWithCorsProxy = async (url: string): Promise<Response> => {
  let lastError: Error | null = null;
  
  for (let i = 0; i < CORS_PROXIES.length; i++) {
    try {
      const proxyUrl = getCorsProxyUrl(url, i);
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        return response;
      }
    } catch (error) {
      lastError = error as Error;
      console.warn(`CORS proxy ${i} failed:`, error);
    }
  }
  
  throw lastError || new Error('All CORS proxies failed');
};