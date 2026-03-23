import { useState, useEffect, useRef } from 'react';
import { newsService, NewsArticle, NewsResponse } from '../services/newsService';
import { toast } from 'sonner';

interface UseNewsReturn {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  hasMore: boolean;
  total: number;
  lastUpdated: Date | null;
}

export const useNews = (): UseNewsReturn => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialLoad = useRef(true);

  const fetchNews = async (isAutoRefresh = false) => {
    try {
      if (!isAutoRefresh) {
        setLoading(true);
      }
      setError(null);
      
      const response: NewsResponse = await newsService.fetchNewsArticles(isAutoRefresh);
      
      const previousCount = articles.length;
      setArticles(response.articles);
      setHasMore(response.hasMore);
      setTotal(response.total);
      setLastUpdated(new Date());
      
      if (isAutoRefresh && !isInitialLoad.current) {
        const newArticlesCount = response.articles.length - previousCount;
        if (newArticlesCount > 0) {
          toast.success(`${newArticlesCount} new articles loaded`, {
            description: 'News updated automatically'
          });
        } else {
          toast.info('News refreshed', {
            description: 'No new articles found'
          });
        }
        console.log('News automatically refreshed at:', new Date().toLocaleTimeString());
      }
      
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news articles');
      console.error('Error fetching news:', err);
      
      if (isAutoRefresh) {
        toast.error('Failed to refresh news', {
          description: 'Will retry in the next hour'
        });
      }
    } finally {
      if (!isAutoRefresh) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchNews();

    // Set up hourly auto-refresh (3600000 ms = 1 hour)
    intervalRef.current = setInterval(() => {
      fetchNews(true);
    }, 3600000);

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const refetch = async () => {
    await fetchNews();
  };

  return {
    articles,
    loading,
    error,
    refetch,
    hasMore,
    total,
    lastUpdated
  };
};