import Layout from "@/components/Layout";
import { Calendar, User, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { useNews } from "@/hooks/useNews";
import { Toaster } from "@/components/ui/sonner";
import companiesHeroImg from "@/assets/companies-hero.jpg";

const Blog = () => {
  const { articles, loading, error, lastUpdated } = useNews();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatLastUpdated = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'News': 'text-primary',
      'Insights': 'text-accent',
      'Bootcamps': 'text-blue-500',
      'Workshops': 'text-green-500',
      'Events': 'text-purple-500'
    };
    return colors[category] || 'text-primary';
  };

  return (
    <Layout>
      <Toaster />
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={companiesHeroImg} alt="Toko ecosystem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div>
            <span className="section-badge">Blog</span>
            <h1 className="section-heading mt-6 max-w-3xl">News & Insights</h1>
            <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
              Stay updated with the latest news, insights, and developments from the Toko Academy ecosystem.
            </p>
            {lastUpdated && (
              <p className="mt-2 text-sm text-muted-foreground">
                Last updated: {formatLastUpdated(lastUpdated)} • Auto-refreshes hourly
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                <span>Loading latest articles...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="glass-card p-8 text-center mb-8">
              <p className="text-red-400 mb-4">Failed to load articles: {error}</p>
              <p className="text-sm text-muted-foreground">
                Articles will automatically refresh in the next hour, or you can refresh the page manually.
              </p>
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="glass-card p-8 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No articles found. Please try again later.</p>
            </div>
          )}

          {!loading && articles.length > 0 && (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <article key={article.id} className="glass-card p-6 hover-lift flex flex-col group">
                    {/* Article Image */}
                    {article.imageUrl && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-news.jpg';
                          }}
                        />
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className={`w-4 h-4 ${getCategoryColor(article.category)}`} />
                      <span className={`text-xs uppercase tracking-widest ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Article Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Article Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{formatDate(article.publishedDate)}</span>
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center justify-between">
                      <a
                        href={article.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all group"
                      >
                        Read More 
                        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Section */}
              <div className="text-center mt-12">
                <a
                  href="https://tokoacademy.org/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
                >
                  View All Articles on Toko Academy
                  <ExternalLink size={16} />
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
