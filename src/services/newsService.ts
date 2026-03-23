import axios from 'axios';
import { CheerioAPI, load } from 'cheerio';
import { fetchWithCorsProxy } from './corsProxy';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedDate: string;
  author: string;
  category: string;
  sourceUrl: string;
  readTime: string;
}

export interface NewsResponse {
  articles: NewsArticle[];
  total: number;
  hasMore: boolean;
}

class NewsService {
  private baseUrl = 'https://tokoacademy.org';

  async fetchNewsArticles(): Promise<NewsResponse> {
    try {
      const articles: NewsArticle[] = [];
      
      // Fetch from different sections
      const sections = [
        { path: '/news', category: 'News' },
        { path: '/insights', category: 'Insights' },
        { path: '/bootcamps', category: 'Bootcamps' },
        { path: '/workshops', category: 'Workshops' },
        { path: '/events', category: 'Events' }
      ];

      // Try to fetch from actual website first, fallback to mock data if it fails
      let hasRealData = false;
      
      for (const section of sections) {
        try {
          const sectionArticles = await this.fetchFromSection(section.path, section.category);
          if (sectionArticles.length > 0) {
            articles.push(...sectionArticles);
            hasRealData = true;
          }
        } catch (error) {
          console.warn(`Failed to fetch from ${section.path}:`, error);
        }
      }

      // If no real data was fetched, return fallback data
      if (!hasRealData || articles.length === 0) {
        console.info('Using fallback articles due to fetch issues');
        return this.getFallbackArticles();
      }

      // Sort by date (most recent first)
      articles.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

      return {
        articles: articles.slice(0, 20), // Limit to 20 most recent
        total: articles.length,
        hasMore: articles.length > 20
      };
    } catch (error) {
      console.error('Error fetching news articles:', error);
      // Return fallback mock data if API fails
      return this.getFallbackArticles();
    }
  }

  private async fetchFromSection(path: string, category: string): Promise<NewsArticle[]> {
    const url = `${this.baseUrl}${path}`;
    
    try {
      // Try to fetch using CORS proxy
      const response = await fetchWithCorsProxy(url);
      const data = await response.json();
      const htmlContent = data.contents || data;
      
      const $ = load(htmlContent);
      const articles: NewsArticle[] = [];

      // Try different selectors for articles
      const articleSelectors = [
        'article',
        '.post',
        '.news-item',
        '.blog-post',
        '.content-item',
        '[class*="post"]',
        '[class*="article"]'
      ];

      let foundArticles = false;
      
      for (const selector of articleSelectors) {
        const elements = $(selector);
        if (elements.length > 0) {
          foundArticles = true;
          elements.each((index, element) => {
            if (articles.length >= 10) return false; // Limit per section
            
            const article = this.parseArticleElement($, element, category);
            if (article) {
              articles.push(article);
            }
          });
          break;
        }
      }

      // If no articles found with selectors, try to extract from general content
      if (!foundArticles) {
        const generalArticles = this.extractFromGeneralContent($, category, path);
        articles.push(...generalArticles);
      }

      return articles;
    } catch (error) {
      console.warn(`Failed to fetch from ${path}:`, error);
      return [];
    }
  }

  private parseArticleElement($: CheerioAPI, element: any, category: string): NewsArticle | null {
    try {
      const $el = $(element);
      
      // Extract title
      const title = this.extractText($el, ['h1', 'h2', 'h3', '.title', '[class*="title"]']) || 'Untitled';
      
      // Extract excerpt/content
      const excerpt = this.extractText($el, ['p', '.excerpt', '.summary', '[class*="excerpt"]']) || '';
      
      // Extract image
      const imageUrl = this.extractImage($el) || '/placeholder-news.jpg';
      
      // Extract date
      const publishedDate = this.extractDate($el) || new Date().toISOString();
      
      // Extract author
      const author = this.extractText($el, ['.author', '[class*="author"]', '.by']) || 'Toko Academy';
      
      // Extract link
      const link = $el.find('a').first().attr('href') || '';
      const sourceUrl = link.startsWith('http') ? link : `https://tokoacademy.org${link}`;
      
      // Generate ID
      const id = this.generateId(title, publishedDate);
      
      // Calculate read time
      const readTime = this.calculateReadTime(excerpt);

      return {
        id,
        title: title.substring(0, 200), // Limit title length
        excerpt: excerpt.substring(0, 300), // Limit excerpt length
        content: excerpt,
        imageUrl,
        publishedDate,
        author,
        category,
        sourceUrl,
        readTime
      };
    } catch (error) {
      console.warn('Error parsing article element:', error);
      return null;
    }
  }

  private extractFromGeneralContent($: CheerioAPI, category: string, path: string): NewsArticle[] {
    const articles: NewsArticle[] = [];
    
    // Look for headings that might be article titles
    $('h1, h2, h3').each((index, element) => {
      if (articles.length >= 5) return false;
      
      const $heading = $(element);
      const title = $heading.text().trim();
      
      if (title.length > 10) { // Only consider meaningful titles
        const nextElements = $heading.nextAll().slice(0, 3);
        let excerpt = '';
        
        nextElements.each((_, el) => {
          const text = $(el).text().trim();
          if (text.length > 20) {
            excerpt += text + ' ';
          }
        });

        if (excerpt.length > 50) {
          articles.push({
            id: this.generateId(title, new Date().toISOString()),
            title,
            excerpt: excerpt.substring(0, 300),
            content: excerpt,
            imageUrl: '/placeholder-news.jpg',
            publishedDate: new Date().toISOString(),
            author: 'Toko Academy',
            category,
            sourceUrl: `https://tokoacademy.org${path}`,
            readTime: this.calculateReadTime(excerpt)
          });
        }
      }
    });

    return articles;
  }

  private extractText($el: any, selectors: string[]): string {
    for (const selector of selectors) {
      const text = $el.find(selector).first().text().trim();
      if (text) return text;
    }
    return '';
  }

  private extractImage($el: any): string {
    const imgSelectors = ['img', '.featured-image img', '.thumbnail img', '[class*="image"] img'];
    
    for (const selector of imgSelectors) {
      const img = $el.find(selector).first();
      const src = img.attr('src') || img.attr('data-src');
      if (src) {
        return src.startsWith('http') ? src : `https://tokoacademy.org${src}`;
      }
    }
    
    return '';
  }

  private extractDate($el: any): string {
    const dateSelectors = ['.date', '.published', '[class*="date"]', 'time'];
    
    for (const selector of dateSelectors) {
      const dateEl = $el.find(selector).first();
      const dateText = dateEl.text().trim() || dateEl.attr('datetime');
      if (dateText) {
        const date = new Date(dateText);
        if (!isNaN(date.getTime())) {
          return date.toISOString();
        }
      }
    }
    
    return new Date().toISOString();
  }

  private generateId(title: string, date: string): string {
    const titleSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').substring(0, 50);
    const dateSlug = new Date(date).getTime().toString();
    return `${titleSlug}-${dateSlug}`;
  }

  private calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  private getFallbackArticles(): NewsResponse {
    const fallbackArticles: NewsArticle[] = [
      {
        id: 'toko-academy-launch-2024',
        title: 'Toko Academy Launches New AI & Data Science Program',
        excerpt: 'We are excited to announce the launch of our comprehensive AI and Data Science program, designed to equip students with cutting-edge skills in artificial intelligence and machine learning.',
        content: 'Our new program covers Python programming, machine learning algorithms, data visualization, and real-world project implementation.',
        imageUrl: '/src/assets/academy-classroom.png',
        publishedDate: '2024-03-15T10:00:00Z',
        author: 'Toko Academy Team',
        category: 'News',
        sourceUrl: 'https://tokoacademy.org/news/ai-data-science-program-launch',
        readTime: '5 min read'
      },
      {
        id: 'web-development-bootcamp-2024',
        title: 'Full-Stack Web Development Bootcamp - March 2024',
        excerpt: 'Join our intensive 12-week bootcamp covering React, Node.js, and modern web development practices. Limited seats available.',
        content: 'This comprehensive bootcamp will take you from beginner to job-ready full-stack developer with hands-on projects and mentorship.',
        imageUrl: '/src/assets/academy-presentation.png',
        publishedDate: '2024-03-10T14:30:00Z',
        author: 'Training Department',
        category: 'Bootcamps',
        sourceUrl: 'https://tokoacademy.org/bootcamps/fullstack-web-development',
        readTime: '3 min read'
      },
      {
        id: 'tech-workshop-series-2024',
        title: 'Monthly Tech Workshop Series: Cloud Computing Fundamentals',
        excerpt: 'Learn the basics of cloud computing with AWS, Azure, and Google Cloud Platform in our hands-on workshop series.',
        content: 'These workshops are designed for beginners and intermediate developers looking to expand their cloud computing knowledge.',
        imageUrl: '/src/assets/academy-graduation.png',
        publishedDate: '2024-03-05T09:00:00Z',
        author: 'Workshop Team',
        category: 'Workshops',
        sourceUrl: 'https://tokoacademy.org/workshops/cloud-computing-fundamentals',
        readTime: '4 min read'
      },
      {
        id: 'digital-transformation-insights-2024',
        title: 'Digital Transformation Trends in African Businesses',
        excerpt: 'Exploring how African businesses are leveraging technology to drive growth and innovation in the digital age.',
        content: 'An in-depth analysis of digital transformation strategies and their impact on business growth across Africa.',
        imageUrl: '/src/assets/services-tech.jpg',
        publishedDate: '2024-02-28T16:45:00Z',
        author: 'Research Team',
        category: 'Insights',
        sourceUrl: 'https://tokoacademy.org/insights/digital-transformation-africa',
        readTime: '7 min read'
      },
      {
        id: 'tech-meetup-yola-2024',
        title: 'Yola Tech Meetup: Building the Future of EdTech',
        excerpt: 'Join us for an exciting meetup discussing the future of educational technology and networking with local tech enthusiasts.',
        content: 'Connect with fellow developers, entrepreneurs, and tech enthusiasts in Yola as we discuss the latest trends in EdTech.',
        imageUrl: '/src/assets/about-team.jpg',
        publishedDate: '2024-02-20T18:00:00Z',
        author: 'Community Team',
        category: 'Events',
        sourceUrl: 'https://tokoacademy.org/events/yola-tech-meetup-2024',
        readTime: '2 min read'
      }
    ];

    return {
      articles: fallbackArticles,
      total: fallbackArticles.length,
      hasMore: false
    };
  }
}

export const newsService = new NewsService();