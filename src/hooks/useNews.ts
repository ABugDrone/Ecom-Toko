import { useState, useEffect } from 'react';
import { newsService, NewsArticle, NewsResponse } from '../services/newsService';

interface UseNewsReturn {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  hasMore: boolean;
  total: number;
}

export const useNews = (): UseNewsReturn => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response: NewsResponse = await newsService.fetchNewsArticles();
      
      setArticles(response.articles);
      setHasMore(response.hasMore);
      setTotal(response.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news articles');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
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
    total
  };
};